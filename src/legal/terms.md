
**Version 1.0 · Effective 11 November 2026**

These terms govern your use of Kyde Score: the hosted service at score.kyde.com, its API and MCP endpoint, the dashboard, the installer, the hook and the agent skill (together, the **Service**). The Service is provided by Jürgen Eckel and Jörg Radehaus, Klenzestraße 57, 80469 Munich, Germany, hello@kyde.com (**Kyde**, **we**).

## 1. Who may use the Service

1.1 The Service is for businesses only, meaning companies, organisations and individuals acting in their trade, business or profession (§ 14 BGB). It is not offered to consumers. By accepting these terms you confirm that you use the Service for business purposes.

1.2 If you accept these terms for an organisation, you confirm that you are authorised to bind it. "You" then means that organisation.

## 2. How you accept these terms

2.1 You accept these terms when you confirm a scoring key through the link in the confirmation email ("claiming" the key). We record the version of the terms, the time and the email address.

2.2 Before a key is claimed, it can be created and used by software acting for you, such as an AI agent, an installer or a script. The installer and the API show a link to these terms. By creating or using a key you accept these terms for that use. Anything an agent or script does on your instruction counts as your act.

2.3 Some features work only on a claimed key. These include blocking calls, rebaselining from the dashboard and email alerts.

## 3. What the Service does, and what it does not do

3.1 The Service learns a baseline of each agent's behaviour from the telemetry you send and scores later runs against it with deterministic detectors. It can warn your agent, notify you and, through the hook, pause or block an agent's next tool call.

3.2 **The Service gives a signal, not a guarantee.** A score describes how far an agent's observed behaviour departs from its own baseline. It does not certify that an agent is safe, correct, compliant or authorised. We do not promise that the Service detects every deviation, misuse or attack, or that it never flags legitimate work.

3.3 **You decide what happens on a deviation.** You choose the hook's mode (warn only, ask a human, or block) for each agent. You are responsible for that choice and its consequences, including calls that are paused or blocked and calls that are not.

3.4 **The hook fails open.** If the Service is unreachable, slow or returns an error, the hook does not stop your agent, and the agent continues unchecked. Do not use the Service as your only safety control for actions that can cause irreversible harm.

3.5 The Service is not a high-risk AI system and is not designed for decisions about natural persons.

## 4. Free tier, limits and changes

4.1 The Service is currently free. Usage limits, retention and other free-tier terms are published at https://score.kyde.com/llms.txt. Over a limit, the Service drops excess data rather than failing.

4.2 We may change, limit or end the free tier or individual features. For material changes that reduce the Service we give at least 30 days' notice by email to claimed keys, unless security or the law requires faster action.

4.3 There is no availability commitment for the free tier. Paid plans with service levels are agreed separately.

## 5. Your obligations

5.1 Send only telemetry that fits the documented schema. Do not deliberately send content, secrets, personal data about third parties or special categories of personal data in fields the Service is not designed for. The Service drops unknown fields on arrival, but you remain responsible for what you send.

5.2 Do not circumvent rate limits or quotas. Do not create keys in bulk, use webhooks to attack third parties, probe or disrupt the Service, or use it to build a competing product by systematic extraction.

5.3 Keep your keys secret. Anyone with a key can send data and read scores under it. Revoke a key that has been exposed (DELETE /score/v0/keys or the revoke_key tool).

5.4 We may suspend or revoke a key that breaches this section or puts the Service or others at risk. Where possible we notify the claimed email first.

## 6. Data

6.1 What we store, why and for how long is described in our privacy notice at https://kyde.com/legal/.

6.2 Where you send telemetry about agents used by your staff or other people, you are the controller and we process that data on your behalf. The Data Processing Agreement in Annex 1 applies and forms part of these terms. For your account data, such as the email address of the person who claims a key, we are the controller.

6.3 Revoking a key immediately and permanently deletes all data stored under it.

6.4 We may use aggregated data that does not identify you, your agents or any person to operate, secure and improve the Service.

## 7. Intellectual property and open source

7.1 The Service and its software remain ours or our licensors'. The installer, hook and npm package are licensed under the MIT License. The open-source detectors are licensed under their own repository licence.

7.2 Your telemetry remains yours. You grant us the rights we need to provide the Service.

7.3 If you send feedback, we may use it without obligation.

## 8. Liability

8.1 We are liable without limitation for intent and gross negligence, for injury to life, body or health, under the German Product Liability Act and where we have given a guarantee.

8.2 For slight negligence we are liable only for breach of an obligation essential to the contract (an obligation whose fulfilment makes the proper performance of the contract possible and on which you may regularly rely). Our liability is then limited to damage typical for this kind of contract and foreseeable when it was concluded.

8.3 Otherwise our liability is excluded. In particular, as far as legally permitted, we are not liable for decisions you or your agents make based on a score, for calls paused or blocked by the hook in the mode you chose, or for harm caused by an agent the Service did not flag.

8.4 For the free tier, our liability under 8.2 is limited to EUR 1,000 per year in total.

8.5 These limits also protect our partners, employees and agents.

## 9. Term and termination

9.1 You can stop using the Service and revoke your keys at any time.

9.2 We can end these terms for the free tier with 30 days' notice by email, or without notice for good cause.

9.3 Sections 3, 6.3, 7, 8 and 11 survive termination.

## 10. Changes to these terms

We may update these terms. We will email claimed keys at least 30 days before a change takes effect and ask you to accept the new version when you next sign in. If you object, you can revoke your keys. Continued use by an agent alone does not count as acceptance of a new version.

## 11. Final provisions

11.1 German law applies, excluding the UN Convention on Contracts for the International Sale of Goods.

11.2 If you are a merchant (Kaufmann), a legal entity under public law or have no general place of jurisdiction in Germany, the courts of Munich, Germany have exclusive jurisdiction.

11.3 We may transfer these terms to a company that takes over the Service, in particular to Kyde GmbH once incorporated. We will tell you by email.

11.4 If a provision is invalid, the rest of these terms remain in force.

11.5 The English version is binding.

**Annex 1:** [Data Processing Agreement](https://kyde.com/terms/dpa/)


