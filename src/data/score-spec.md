# A2A Extension: Behavioral Score

**Extension URI:** `https://kyde.com/score/ext/behavioral-score/v0.1`
**Status:** Draft v0.1, open for comment. This is a proposed extension by KYDE, not part of the A2A specification. The KYDE scorer currently issues demo attestations for four synthetic agents only.
**Editors:** Joerg Radehaus, Jürgen Eckel (KYDE)
**License:** Apache-2.0

## Why this exists

An A2A Agent Card says who an agent is and what it can do. Since A2A v1.0 the card can be signed, so a client can check that the card was not changed. Nothing in the card says how the agent has behaved.

Visa, Mastercard and Cloudflare have published ways for a merchant to verify an agent's identity through signed requests (Web Bot Auth). Identity answers "who is this agent". It does not answer "is this agent still acting the way it acted yesterday". A verified agent can be hijacked by one line of text in an email, loop and pay twice, or spend in small steps up to a limit nobody set.

Review-based reputation does not close this gap. An empirical study of the ERC-8004 reputation registry found that most reviewers on the largest deployment were Sybil-flagged and that fabricating a reputation cost a fraction of a cent (arXiv:2606.26028). Reviews are cheap to fake because they are not tied to what the agent actually did.

This extension lets an agent carry a **behavioral score**: a number computed from the agent's own operating records by an independent scorer, signed, short-lived, and bound to the agent's key so it cannot be copied to another agent.

## Design rules

1. **Measured, not rated.** The score comes from boundary call records (tool, parameter hash, status, order, model version), compared against the agent's own frozen baseline. No reviews, no votes.
2. **Deterministic.** Same records and same method version give the same score. No LLM in the scoring path. The KYDE scorer uses the detectors of the public reference implementation (github.com/kydehq/behavioral-drift-detection), so a risk team or auditor can recompute it.
3. **Short-lived.** A score is valid for at most 24 hours. A stale score is the gap a patient attacker uses: build a good history, then strike. Clients should prefer a live lookup.
4. **Bound to the agent.** The score names the agent's signing key. A score lifted from one card and pasted into another fails verification.
5. **Honest about evidence.** Every score states what it rests on. A score from declared data is labelled as such.
6. **Scorer-neutral.** Any scorer can implement this extension under its own issuer URL. KYDE runs one scorer with the issuer URL `https://kyde.com/score`.

## Declaring the extension in an Agent Card

The agent lists the extension in `capabilities.extensions`. The extension is never `required`: a client that does not understand it can still talk to the agent.

```json
{
  "capabilities": {
    "extensions": [
      {
        "uri": "https://kyde.com/score/ext/behavioral-score/v0.1",
        "description": "Independent behavioral score computed from this agent's operating records.",
        "required": false,
        "params": {
          "issuer": "https://kyde.com/score",
          "subject": "agt_7f3k2m9q",
          "lookup": "https://kyde.com/score/v0/agents/agt_7f3k2m9q.json",
          "attestation": "<compact JWS, optional, see "The attestation">"
        }
      }
    ]
  }
}
```

| Param | Required | Meaning |
|---|---|---|
| `issuer` | yes | Base URL of the scorer. Its public keys are at `{issuer}/.well-known/jwks.json`. |
| `subject` | yes | The agent's identifier at that scorer. |
| `lookup` | yes | URL that returns the current attestation as JSON, `{"attestation": "<compact JWS>"}`. This is the source of truth. |
| `attestation` | no | A recent attestation embedded for offline checks. May be stale; check `exp`. |

Because Agent Cards are cached, the embedded `attestation` is a convenience. Clients that make a decision with money or data attached should call `lookup`.

## The attestation

An attestation is a compact JWS (RFC 7515), signed by the scorer with EdDSA (Ed25519). The protected header carries `alg: "EdDSA"`, `typ: "kyde-score+jwt"` and the scorer's `kid`.

Payload:

```json
{
  "iss": "https://kyde.com/score",
  "sub": "agt_7f3k2m9q",
  "iat": 1761386400,
  "exp": 1761472800,
  "cnf": { "jkt": "base64url SHA-256 thumbprint of the agent's card-signing key (RFC 7638)" },
  "score": 87,
  "band": "normal",
  "evidence": "measured",
  "principal": "sso-attested",
  "baseline_days": 14,
  "window_hours": 24,
  "observations": 4213,
  "flags": [],
  "baseline": "541d7adc8fb842a2",
  "method": "kyde-driftdetect@4f5119c+score-0.1"
}
```

| Claim | Meaning |
|---|---|
| `score` | Integer 0 to 100. Higher means behavior closer to the agent's own baseline. |
| `band` | `normal` (score 70 and above), `watch` (40 to 69), `deviating` (below 40), or `insufficient` while the baseline is still being learned. |
| `evidence` | `declared`: the operator registered the agent but sent no records. `measured`: the scorer computed the score from records the operator supplied. `observed`: the scorer saw the traffic itself, for example at a gateway, so the operator could not filter it. |
| `principal` | How the human or company behind the agent is bound: `self-declared`, `sso-attested` (company login such as Entra or Okta), or `human-signed`. |
| `baseline_days`, `window_hours`, `observations` | How much data the score rests on. |
| `flags` | Findings of the drift detectors that lowered the score: `abrupt_shift` (CUSUM on per-event surprisal, the injection-like regime), `gradual_drift` (windowed Jensen-Shannon divergence with EMA), `persistent_drift`, the four goal-persistence failure classes `duplicate_submission`, `premature_abort`, `false_success`, `missing_progress`, and `omission`, `context_decay`, `version_drift`. |
| `baseline` | Fingerprint of the frozen baseline the score was computed against. A verdict names its exact reference. |
| `method` | Detector implementation and version, for example the commit of the public reference implementation, plus the version of the score mapping. Needed to recompute. |
| `recompute` | Optional. Where an authorized party can fetch the inputs to recompute the score. |
| `cnf.jkt` | Binds the score to the agent's key (RFC 7800 confirmation claim). |

`exp - iat` must not exceed 86400 seconds.

## Verifying a score

A client that wants to rely on the score:

1. Fetches the agent's card and, if the card is signed, verifies the card signature (A2A v1.0).
2. Reads the extension params and calls `lookup` (or uses the embedded `attestation`).
3. Fetches `{issuer}/.well-known/jwks.json` and verifies the JWS with the key named in `kid`.
4. Checks `iss` equals `issuer`, `sub` equals `subject`, and `exp` is in the future.
5. Computes the RFC 7638 thumbprint of the key that signed the Agent Card and checks it equals `cnf.jkt`. If the card is unsigned, the binding cannot be checked and the client should treat `evidence` as no stronger than `declared`.
6. Applies its own policy. The score is an input, not a verdict. A payment provider might grant a higher limit for `band: normal` with `evidence: observed`, and hold payments for `band: deviating`.

## What this extension does not do

- It does not identify the human behind the agent. Use the payment network's agent identity, SSO, or a KYA provider for that. The `principal` claim only reports how strongly that binding was checked.
- It does not prove the agent's code is safe. It reports whether behavior matches the agent's own history.
- It does not replace the operator's own controls. It gives counterparties a signal they otherwise do not have.

## Open questions for comment

1. Should the score be relative to the agent's own baseline only, or also compared against similar agents across operators?
2. Is 24 hours the right maximum lifetime, or should payment use cases require minutes?
3. Should multiple scorers be able to attest the same agent in one card, and how should a client combine them?
4. Should the A2A project define a generic "third-party attestation" slot so extensions like this one do not each invent their own?

## References

- A2A Protocol v1.0, Agent Card and signed cards: https://a2a-protocol.org/latest/whats-new-v1/
- RFC 7515 JSON Web Signature, RFC 7638 JWK Thumbprint, RFC 7800 Proof-of-Possession Key Semantics, RFC 8785 JSON Canonicalization
- Can Trustless Agents Be Trusted? An Empirical Study of the ERC-8004 Decentralized AI Agent Ecosystem: https://arxiv.org/abs/2606.26028
- Reference scoring method: https://github.com/kydehq/behavioral-drift-detection
