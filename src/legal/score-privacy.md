
**6.1 Telemetry.** Our hosted scoring service at score.kyde.com processes telemetry that you send about your AI agents via OpenTelemetry, the Kyde hook or the API. A server-side allowlist keeps only these fields and drops everything else before storage:

- run identifiers: session, prompt, request and tool-call IDs, agent name;
- tool-call metadata: tool name, success, error type, duration, input and result size in bytes, permission decision and its source;
- model name, token counts and estimated cost per request;
- hook execution metadata and terminal type;
- salted entity hashes computed on the sender's side.

Prompts, tool arguments, tool results, file contents, email addresses and user or organisation IDs are dropped on arrival and never stored. Call records are deleted after 90 days. The frozen baseline window is kept for the life of the scoring key, so published scores remain auditable. Keys that never receive data expire after 30 days. Revoking a key (DELETE /score/v0/keys or the revoke_key tool) immediately and permanently deletes all data stored under it.

Where a business sends telemetry about agents used by its staff, that business is the controller and we act as its processor under our [Data Processing Agreement](https://kyde.com/terms/dpa/). Otherwise the legal basis is Art. 6(1)(b) GDPR (providing the service you requested).

**6.2 Account and sign-in.** If you claim a key, we store your email address, the time you confirmed it, and the version of the [Terms](https://kyde.com/terms/) you accepted. We use your email address to send the confirmation link, sign-in links, score alerts and service notices. Sign-in links are single-use and expire. Signing in sets one strictly necessary session cookie (kyde_session). It holds your email address and an expiry, is signed by the server, cannot be read by scripts, is sent over HTTPS only and expires after 24 hours. No consent is required for it (§ 25(2) no. 2 TDDDG). If you connect an AI client to the MCP endpoint via OAuth, we store the client registration and access tokens until they expire or you revoke the key. Legal basis: Art. 6(1)(b) GDPR. We delete your email address when you revoke the key.

**6.2a Waitlist for pause and block.** If you join the waitlist in the dashboard, we store the time you joined with your email address and email you once when pause and block open. Legal basis: Art. 6(1)(b) GDPR (your request). You can leave the waitlist in the dashboard at any time; revoking the key also removes the entry.

**6.3 Product updates.** Only if you opt in separately, we send occasional product update emails. Legal basis: your consent, Art. 6(1)(a) GDPR. You can withdraw it at any time in the dashboard or through the link in every email. Withdrawal does not affect earlier processing.

**6.4 Abuse protection.** To limit key creation and ingest, we keep short-lived rate-limit counters per IP address and per key. Legal basis: Art. 6(1)(f) GDPR, our legitimate interest in protecting the service. The counters expire automatically.

**6.5 Webhooks.** If you set a webhook URL, we store it and a delivery log (time, status code) solely to deliver score notifications.

**6.6 Processors and location.** The service runs on servers of Hetzner Online GmbH in Germany under a data processing agreement pursuant to Art. 28 GDPR. Emails are sent through Google Workspace (Google Ireland Ltd.). Google may process data in the USA, based on the EU-US Data Privacy Framework and the EU Standard Contractual Clauses. We do not sell data or share it for advertising.

