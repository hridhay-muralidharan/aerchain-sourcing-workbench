# Screen 2 implementation map — Create and approve RFx

**Status:** Mapping complete; implementation not yet started

**Authority:** `docs/DECISION_LEDGER.md` only. This file is a derived implementation map. It does not create or override product decisions.

## 1. Screen contract

### User outcome

The procurement manager has an RFx they can stand behind and has explicitly approved the exact version for supplier invitation.

The screen is one evolving workspace. Draft generation, review, issue treatment, readiness checking, and approval are internal parts of this one user outcome—not separate user-facing stages.

### Entry and exit

| Boundary | Required state |
|---|---|
| Entry | Guided demo is loaded with the prepared business need and authorized source set |
| Intermediate | `draft-rfx-awaiting-buyer-review`, with section-level review and issue states |
| Exit | `approved-rfx-ready-for-supplier-invitation` |
| Approval authority | Procurement manager / authorized buyer; Aera cannot approve |

The approved RFx version is immutable after approval. A later substantive edit creates a new draft version and invalidates the prior approval for downstream use.

### Effective decision lineage

Primary screen decisions: **251–304**.

Relevant cross-layer contracts:

- Data and state: **334–351**
- AI behaviors: **354–367**
- Deterministic mechanisms: **405–420, 423–424**
- Verification: **429–448**
- Runtime assets and format: **466–484, 534–538**

## 2. User flow within the screen

The buyer should always understand what has been prepared, what needs attention, and what action produces the approved RFx.

### Sequence

1. **State the procurement ask**
   - Show the prepared natural-language business need.
   - Preserve the original request separately from Aera’s structured interpretation.
   - Show missingness, material ambiguity, and source links.
   - Guided-demo content is already present; the buyer can inspect it before continuing.

2. **Review sources**
   - Show the selected policy, past RFx/schema material, and current supporting specification/questionnaire sources.
   - Let the buyer open the real document and inspect relevant passages, provenance, version/date, and role in the RFx.
   - Add source, download, and remove controls are visible but disabled for the demo, with direct limitation copy when selected.

3. **Create the RFx**
   - Show the generation purpose and the source/need inputs that will shape the draft.
   - `Generate RFx draft` is the single action.
   - Generation moves the same workspace into RFx review; it does not approve or release anything.

4. **Review the generated RFx in order**
   - Scope and boundaries
   - Line items
   - Questionnaire
   - Terms and response instructions
   - Sources and evidence
   - Issues and assumptions

   Each section has its own purpose, status, evidence access, and buyer action. The buyer can move between sections, but approval remains unavailable while a required condition is unresolved.

5. **Resolve issues and assumptions**
   - Show the issue, why it matters, evidence/policy basis, affected RFx content, and proposed treatment.
   - In the guided demo, the proposed treatment is prepared and ready for buyer confirmation; it is not an answer key exposed to Aera or the evaluation system.
   - `Confirm treatment` is enabled. `Edit treatment` and `Reject treatment` are present but disabled for the demo, with direct limitation copy.

6. **Automatic readiness check**
   - After treatment, Aera reruns readiness checks automatically.
   - This is a system result, not a second buyer approval step.
   - Failed checks identify the exact rule, evidence, affected section, and required action, then route the buyer back to that section.

7. **Approve RFx**
   - Enable one approval action only when the exact RFx version is ready.
   - Record buyer identity, timestamp, RFx version, evidence set, policy basis, and approval event.
   - The only successful exit is `approved-rfx-ready-for-supplier-invitation`.

## 3. Layout derived from the sequence

### Desktop

- A restrained workflow header identifies Screen 2 and the current RFx.
- The main column is the ordered RFx workspace.
- A persistent evidence panel remains available while reviewing material sections.
- A bottom action area carries the current section action and the final `Approve RFx` gate; it must not compete with the section currently being reviewed.
- No overlay is used to perform the primary workflow. Document inspection can use a deliberate evidence view that is closeable and does not obscure the whole task.

### Mobile

- The main review sequence remains primary.
- Evidence opens inline or in a deliberate expandable panel.
- The approval action remains visible only when the readiness state permits it.

### Information hierarchy

For every section, the order is:

1. what the buyer is deciding;
2. the current RFx content;
3. its basis/evidence;
4. its status or issue;
5. the next permitted action.

Do not expose internal reasoning as a competing dashboard. Show the decision artifact and the evidence needed to review it.

## 4. Approved copy and UI language

| Location | Effective copy / behavior | Ledger basis |
|---|---|---|
| Workflow screen | `Create and approve RFx` | 218, 251 |
| Need section | `State the procurement ask` | 257 |
| Generation section | `Create the RFx` | 263 |
| Generation support | `Aera shapes the need and sources into a draft you can review.` | 262–263 |
| Generation action | `Generate RFx draft` | 263 |
| Scope section | `Scope and boundaries` | 267 |
| Scope support | `What suppliers are being asked to provide` | 267 |
| Line-item section | `Line items` | 272 |
| Line-item support | `Confirm what suppliers must quote` | 272 |
| Questionnaire section | `Questionnaire` | 276 |
| Questionnaire support | `Confirm what suppliers must answer` | 276 |
| Terms section | `Terms and response instructions` | 280 |
| Terms support | `Confirm the conditions suppliers must follow` | 280 |
| Evidence section | `Sources and evidence` | 284 |
| Evidence support | `Confirm what supports this RFx` | 284 |
| Issues section | `Issues and assumptions` | 296 |
| Issues support | `Review Aera’s findings` | 296 |
| Final action | `Approve RFx` | 300, 303 |

The landing-page copy is not reused as Screen 2’s heading. The screen copy must orient the buyer to the tangible RFx approval outcome.

## 5. Data and state mapping

### Records used

- sourcing case
- original business need
- structured business-need interpretation
- source records and source relationships
- applicable policy clauses and approval record
- prior RFx/schema evidence
- proposed/current RFx field contract
- RFx draft version
- scope, line items, questionnaire, terms, and response instructions
- field-level provenance and missingness
- issue/assumption records and treatment decisions
- readiness result
- buyer approval record
- rendered RFx PDF and integrity metadata

### State invariants

- Original inputs are preserved; generated interpretations are separate records.
- A filename, folder, or selected state is never source authority.
- Every material RFx field has a basis, status, and provenance.
- Policy is authoritative for policy obligations; prior RFxs inform structure; supporting sources add current context.
- An unresolved required field, prohibited request, material conflict, unsupported mapping, or failed required readiness check prevents approval.
- Aera may propose and explain; only the buyer may confirm permitted treatments and approve the RFx.
- Approval applies to one exact RFx version and exact evidence set.

## 6. AI behavior mapping

| AI behavior | Screen responsibility | Boundary |
|---|---|---|
| Business-need interpretation | Extract structured facts and proposed interpretation from the request | Cannot approve or silently replace the original |
| Source relevance | Retrieve and rank source content using content and relationships | Filenames/folders are not proof; weak or inaccessible sources are not silently used |
| Policy applicability | Identify clauses relevant to this case and RFx activity | Cannot modify policy or approve the RFx |
| Field semantics | Explain what each RFx field means and map inputs to it | Proposed schema requires buyer approval before activation |
| Draft generation | Generate a complete sourced RFx draft with field provenance | Cannot approve or send; preserves missingness and issues |
| Issue detection | Identify material issues/assumptions and propose evidence-backed treatments | Does not use a prepared treatment list; does not invent answers |
| Readiness explanation | Explain failed/passed checks and affected sections | Readiness is a gate, not approval |

## 7. Deterministic mechanism mapping

| Mechanism | Screen responsibility |
|---|---|
| Source access/retrieval | Return authorized originals, identities, versions, relationships, hashes, and access failures |
| Parsing/OCR | Parse the actual demo documents and preserve exact source locations and extraction quality |
| Schema/type validation | Check requiredness, types, units, allowed values, and exact schema version |
| State/permission control | Enforce section actions, disabled demo controls, readiness gates, version validity, and buyer authority |
| Storage/versioning | Preserve originals, derived records, lineage, hashes, approvals, and append-only audit events |
| Rendering/export | Produce the inspectable multi-page RFx PDF from the exact draft/approved version without changing content |
| Approval commit | Verify prerequisites and authority, freeze the approved RFx, and create the immutable approval record |

Deterministic mechanisms do the operational work around Aera’s interpretation: validation, permissions, state changes, persistence, rendering, and approval commit. No mechanism may silently fill, accept, overwrite, or bypass an unresolved condition.

## 8. Demo asset mapping

The guided demo loads a coherent prepared set. The buyer can inspect the actual artifacts; expected findings and treatments are not runtime inputs.

| UI need | Runtime asset |
|---|---|
| Business need | `public/demo-runtime/business-need.md` |
| Current policy | `public/demo-runtime/sources/policy/procurement-policy-fy2026.html` |
| Current technical context | `public/demo-runtime/sources/supporting/pune-packaging-specification.html` |
| Questionnaire basis | `public/demo-runtime/sources/supporting/questionnaire.html` |
| Prior RFx/schema material | `public/demo-runtime/sources/past-rfx/packaging-rfx-fy2026-current.csv`; `packaging-rfx-fy2025.csv`; `Packaging RFx Template FY2025.xlsx` |
| Generated/current RFx reference | `public/demo-runtime/sources/rfx-2026-014.pdf` |
| Source manifest/freeze | `public/demo-runtime/manifest.json`; `runtime-freeze.json` |

The final generated RFx must be rendered as a readable multi-page PDF, with 30 line items, questionnaire, terms/instructions, commercial/currency fields, award basis, source/version references, and approval record. Markdown is not an acceptable final RFx review/download format.

## 9. Verification mapping

Screen 2 verification must cover:

- guided-demo entry with prepared need and sources;
- actual source viewing and provenance continuity;
- source-role distinction: policy authority, prior RFx structure evidence, supporting current context;
- draft generation from live provider behavior where configured;
- field-level mapping, missingness, and schema checks;
- scenario-relevant issue detection without runtime treatment leakage;
- confirm-treatment and disabled demo actions;
- automatic readiness after issue treatment;
- approval blocked by failed or unresolved required conditions;
- approval of the exact ready RFx version;
- readable multi-page PDF rendering and version fidelity;
- immutable approval record and Stage 2 handoff;
- no AI approval, supplier sending, or premature transition.

Relevant test families: **433–436, 438–442, 443–448**. The contract-to-test matrix remains the verification index; this map does not replace execution results.

## 10. Handoff to Screen 3

Screen 2 hands off only:

- approved RFx version and rendered artifact;
- approved field contract and response schema;
- approved scope, line items, questionnaire, terms, instructions, deadline, and award basis;
- source/evidence lineage and policy basis;
- buyer identity, timestamp, and immutable approval record.

The supplier-invitation/completeness work begins only from this approved RFx state. Screen 2 must not create supplier invitations as a side effect of draft generation or buyer review.

## Mapping conclusion

The Screen 2 contract is sufficiently specified to proceed to implementation without inventing another user-facing stage or adding another buyer approval step. The next phase is implementation from this map, followed by Screen 2 verification and freeze. No code is included in this mapping phase.
