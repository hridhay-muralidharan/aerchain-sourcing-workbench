# Screen 3 implementation map — Lock responses

**Status:** Non-coding map complete; implementation phase follows

**Authority:** `docs/DECISION_LEDGER.md` only. This file is a derived implementation map and does not create or override product decisions.

## 1. Screen contract

### User outcome

The procurement manager has moved every supplier response in scope toward a resolved outcome for fair comparison. Each response is either complete or has an explicitly recorded, policy-authorized route for non-response, removal, or exception.

This is the user-facing outcome. Sending the first invitation, finding contacts, associating messages, asking clarifying questions, extracting attachments, and retrying delivery are mechanisms inside the outcome.

### Effective copy

| Location | Copy |
|---|---|
| Landing Step 02 | `Lock all supplier responses` |
| Landing support | `See the complete history with each supplier, track and close the open points.` |
| Top navigation | `Lock responses` |
| Screen support | `Get each supplier response ready for comparison.` |

The earlier `Invite suppliers` framing is not the screen objective. Invitation activity remains visible only where it helps the buyer understand response status, delivery history, and the next action.

### Entry and exit

| Boundary | Required state |
|---|---|
| Entry | `approved-rfx-ready-for-supplier-invitation` plus approved supplier scope and invitation basis |
| Intermediate | Supplier-level response records, message/attachment versions, extracted values, open gaps, follow-up approvals, and delivery states |
| Exit | Every in-scope supplier has a resolved outcome and policy permits comparison |
| Exit transition | `Continue to comparison` opens Screen 4 only when the Screen 3–4 contract passes |

The gate does not require every value to be filled and does not erase deviations. Policy-permitted exceptions remain visible in Screen 4. Unresolved or policy-prohibited comparison blockers remain on Screen 3.

### Effective decision lineage

Primary Screen 3 decisions: **485–501**.

Supporting contracts:

- Invitation and delivery: **155–172, 368–375**
- Response association/extraction/mapping/normalization: **175–185, 376–385**
- Screen 3–4 boundary: **488–500**
- Data/state: **334–351, 498**
- Deterministic mechanisms: **407–418, 421–422**
- Verification: **433–448**
- Runtime assets: **467–470, 479–507, 517, 522**

## 2. User flow within the screen

The screen must answer, in order: Which suppliers are in scope? What has each supplier sent? What is still missing or unclear? What can Aera ask next? What must the buyer decide? Can comparison begin?

### Sequence

1. **Response overview**
   - Show all five in-scope suppliers and the current response state for each.
   - Show coverage, last activity, open-point count, delivery status, and the next action.
   - The overview must distinguish complete, needs clarification, awaiting response, delivery failed/bounced, and policy-authorized exception.

2. **Supplier response detail**
   - Selecting a supplier opens its complete history: invitation, delivery events, replies, alternate threads, follow-ups, attachments, and response versions.
   - The original message and attachments remain inspectable; no event is silently merged or overwritten.

3. **Response understanding**
   - Show extracted line-item values, questionnaire answers, commercial terms, evidence references, and extraction quality.
   - Preserve supplier wording alongside mapped values.
   - Show what is complete, missing, ambiguous, contradictory, late, or non-comparable.

4. **Open-point explanation**
   - For each unresolved condition, show the specific RFx requirement, supplier evidence, why it matters for comparison, and the applicable policy/source basis.
   - Do not use a generic “incomplete” label without the requirement and evidence.

5. **Targeted follow-up**
   - Aera drafts the smallest useful clarification only for a real gap: missing required field, ambiguity, contradiction, missing evidence, comparability-affecting condition, or uncovered required line.
   - The buyer reviews and approves the follow-up before sending.
   - Once a reply or attachment arrives, the response is versioned and reassessed.
   - Stop when the requirement is satisfied, the supplier cannot provide it, or the buyer records the applicable policy-authorized route. No arbitrary chase count or automatic loop.

6. **Delivery and retry**
   - Show delivery and bounce history when the initial invitation or follow-up fails.
   - For a bounce, show the prepared alternate contact with provenance; the buyer confirms it before retry.
   - The retry sends the same approved package and preserves the original failure.

7. **Supplier outcome**
   - A supplier becomes resolved only when required information is present or an authorized route is recorded.
   - A follow-up being sent is not completion.
   - A silent supplier is not complete merely because the deadline passed.

8. **Comparison gate**
   - Show the aggregate gate across all in-scope suppliers.
   - Enable `Continue to comparison` only when every supplier has a resolved outcome, mappings/versions/provenance are reliable, required fields are present or policy-authorized, and policy permits comparison.
   - If blocked, show the specific supplier and condition preventing transition.

## 3. Layout derived from the sequence

### Desktop

- A single screen-level heading and support line establish the completeness outcome.
- A compact supplier-status overview sits above the detail workspace.
- The main workspace uses a supplier list on the left and one selected supplier’s full exchange/detail view on the right.
- Within the detail view, the order is conversation/history → attachments/evidence → extracted response → open points → next buyer action.
- A persistent bottom transition area shows the aggregate gate and `Continue to comparison`.
- No generic dashboard or irrelevant system panel competes with the supplier work.

### Mobile

- Supplier overview becomes a vertical list.
- Selecting a supplier opens its detail as the primary view, with a clear back action.
- Conversation, evidence, extracted values, and open points are stacked in that order.
- The aggregate gate remains visible after the selected supplier detail and does not imply that the selected supplier alone is sufficient.

### Information hierarchy

For a selected supplier:

1. current response state and next action;
2. complete exchange history;
3. original documents and evidence;
4. structured extracted facts and mappings;
5. missing/ambiguous conditions and their basis;
6. buyer-approved action;
7. recalculated supplier outcome.

## 4. Data and state mapping

### Records used

- approved RFx and exact version
- approved supplier scope and contacts
- invitation package and delivery records
- message/thread records, including alternate threads
- supplier response versions
- attachments and images
- extracted values and questionnaire answers
- RFx mappings and original supplier labels
- normalization records and preserved originals
- evidence locations and extraction quality
- clarification requests and buyer approvals
- policy actions and exception history
- supplier-level completion state
- aggregate Screen 3–4 readiness state

### Supplier-level states

States are derived from recorded facts and approved policy actions, not from the latest AI text:

- `invited`
- `delivery-failed`
- `awaiting-response`
- `response-received`
- `needs-clarification`
- `follow-up-approved`
- `follow-up-sent`
- `response-reassessing`
- `complete`
- `policy-authorized-exception`
- `resolved-non-response`

The state model must preserve the distinction between an event, an assessment, a buyer decision, and a resolved outcome.

### Invariants

- Every response belongs to a specific RFx/version and supplier only when evidence supports that association.
- Alternate-thread replies are included only when RFx and supplier association is reliable.
- Originals, message history, attachments, and response versions are never overwritten.
- A supplier cannot become complete because a follow-up was sent.
- A policy-authorized exception is not silently converted into a complete value.
- All supplier outcomes are recalculated after a new reply, attachment, buyer action, or policy action.
- The aggregate gate reads from the recorded supplier outcomes, not from a model-generated summary.

## 5. AI behavior mapping

| AI behavior | Screen responsibility | Boundary |
|---|---|---|
| Supplier-contact discovery | Surface candidate contacts and relevance for the approved RFx | Cannot choose or send without buyer confirmation |
| Invitation rendering | Render supplier-specific subject/body and approved RFx package | Cannot send; deterministic checks validate the package |
| Response association | Associate emails, alternate threads, files, attachments, and images with RFx/supplier | Ambiguous matches remain reviewable; originals remain intact |
| Response extraction | Extract offers, questionnaire answers, commercial terms, and document/image content | Missing/ambiguous values stay explicit; quality is visible |
| Response mapping | Map supplier facts to the approved RFx structure | Ambiguous mappings require review; schema is unchanged |
| Normalization | Classify deterministic vs policy-dependent transformations | Never invents a value or silently normalizes policy-silent ambiguity |
| Completeness assessment | Identify specific gaps and comparison significance | Does not mark complete from a sent follow-up or generic confidence |
| Follow-up drafting | Draft the smallest useful clarification | Requires buyer approval before sending |
| Reassessment | Re-evaluate after every reply/attachment/action | Does not erase history or automatically chase |
| Policy resolution explanation | Explain clause, conditions, authority, evidence, and gap | Cannot decide policy treatment when coverage is absent |

## 6. Deterministic mechanism mapping

| Mechanism | Screen responsibility |
|---|---|
| Source access/retrieval | Retrieve inbox/repository content and preserve identity, relationships, versions, and access evidence |
| Parsing/OCR | Parse email, spreadsheet, PDF, DOCX, scan, and low-quality image content with source locations and quality state |
| Schema/type validation | Check extracted/mapped values against the approved RFx fields, types, units, and requiredness |
| Calculation/conversion | Perform only approved deterministic conversions and policy-defined currency treatment, preserving originals/rates/methods |
| State/permission control | Enforce buyer approval for follow-ups/retries, version validity, response states, and Screen 3–4 transition |
| Storage/versioning | Append messages, attachments, assessments, actions, and response versions without overwriting history |
| Email sending | Send only buyer-approved packages/follow-ups/retries and record provider-backed outcomes |
| Comparison gate | Recompute aggregate readiness from every in-scope supplier’s resolved outcome and policy basis |

## 7. Demo asset mapping

| UI need | Runtime assets |
|---|---|
| Supplier scope/contact provenance | `public/demo-runtime/sources/contacts/supplier-directory.eml` |
| Invitation message/template | `public/demo-runtime/sources/correspondence/last-year-rfx-invitation.eml`; approved RFx PDF |
| Delivery history | `public/demo-runtime/events/message-delivery-events.json` |
| KraftBox exchange | `responses/kraftbox/response.eml`; `line-item-quote.csv`; `KraftBox quotation.xlsx`; `QMS-2026-118.docx` |
| PackRight exchange | `responses/packright/quotation.html`; `line-item-quote.csv`; `QMS-2026-118.docx` |
| NexCorrugate exchange | `responses/nexcorrugate/response.eml`; `follow-up.eml`; `line-item-quote.csv`; `NC-QMS-2026-204.docx` |
| BoxSmith exchange/image | `responses/boxsmith/phone-photo.svg`; `follow-up.eml`; `follow-up.csv`; `BS-QMS-2026-077.docx` |
| GreenFold exchange | `responses/greenfold/GreenFold quotation response.docx`; `follow-up.eml`; `line-item-quote.csv`; `GF-QMS-2026-091.docx` |
| Currency evidence | `sources/finance/northstar-finance-fx-rate-sheet.html` |

The runtime set includes five suppliers, varied response formats, incomplete/conditional coverage, a low-quality mobile image, alternate-thread and multi-message evidence, attachments, delivery failure/retry, and provenance. It does not include expected findings or treatments.

## 8. Verification mapping

Screen 3 verification must cover:

- all five in-scope suppliers visible;
- supplier/contact and RFx relevance before registration;
- same-thread and alternate-thread association;
- email, CSV, XLSX, DOCX, PDF, and image extraction;
- field-level mapping, line coverage, questionnaire, commercial terms, evidence, and quality warnings;
- original/normalized values and currency/units treatment;
- missing, contradictory, conditional, late, and non-comparable conditions;
- targeted follow-up approval, delivery outcome, reply/attachment reassessment, and stopping rules;
- prepared alternate-contact retry with preserved bounce history;
- supplier-level resolved outcomes and aggregate gate;
- blocked transition when one supplier remains unresolved;
- enabled transition only when all supplier outcomes and policy conditions pass;
- no silent merge, completion, send, policy decision, or history overwrite.

Relevant test families: **433–445, 447–448**. The contract-to-test matrix remains the execution index; this map does not claim test results.

## 9. Handoff to Screen 4

Screen 3 hands off:

- approved RFx/version;
- every supplier’s resolved outcome;
- response and attachment versions;
- mapped and normalized values with originals;
- questionnaire and commercial evidence;
- policy-authorized exceptions and their authority/evidence;
- provenance and association records;
- completeness and transition decision;
- buyer actions and approvals.

Screen 4 may display policy-permitted exceptions and non-comparable conditions, but Screen 3 must not hand off an unresolved comparison blocker.

## Mapping conclusion

Screen 3 is sufficiently specified to implement from this map. Its single user-facing purpose is response completeness for fair comparison; invitation, contact discovery, email exchange, extraction, and retry remain subordinate mechanisms. The next phase is coding Screen 3, followed by local/live verification and freeze before mapping Screen 4.
