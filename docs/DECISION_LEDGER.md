# Aerchain Sourcing Workbench — Decision Ledger

> Audience: maintainers, product reviewers, and implementers.
> Purpose: preserve the chronological decision history, corrections, approvals, and error register.
> Authority: canonical decision history. For the concise current product model use [ACTIVE_PRODUCT_CONTRACT.md](ACTIVE_PRODUCT_CONTRACT.md); for implementation mapping use [IMPLEMENTATION_INDEX.md](IMPLEMENTATION_INDEX.md); for verification evidence use [VERIFICATION_MATRIX.md](VERIFICATION_MATRIX.md).

## Current canonical model

### Current canonical model (effective)

1. **Project objective:** Make and defend the best-supported supplier decision for a business requirement.
2. **Workflow:** Create and approve the RFx; lock supplier responses; compare responses; decide and defend the award. Landing is a visible entry surface, not a workflow stage.
3. **Stage 1 objective:** Establish a shared, sufficiently clear understanding of what the business needs to source.
4. **Policy authority and evidence path:** Use confirmed organizational policy where available; otherwise use past RFQs to construct a proposal; allow user guidance at every branch; require explicit approval from the actual procurement authority before inferred or generated policy governs.

### Approved product principles

- The procurement manager is the head pilot; the AI is the co-pilot.
- Product design is separate from client-specific runtime policy decisions.
- User guidance is a cross-cutting control input, not a branch in the evidence hierarchy.
- Policy is a versioned, stage-aware source whose applicable clauses must be retrieved with provenance.
- RFx policy obligations and RFx template/field semantics are separate contracts.
- An annotated or confirmed schema may support RFx construction, but policy compliance must be checked separately.
- A prohibited request must not produce a supplier-facing RFx.
- Organizational context is stage- and decision-scoped evidence.
- The primary buyer journey should lead to a tangible approved RFx; internal capabilities should not become unnecessary user-facing stages.
- Generic model knowledge is not a production fallback for enterprise policy or opaque template semantics.
- Every required runtime input needs an acquisition, verification, selection, and provenance path.
- Approval is an explicit state transition; a draft or silence never implies approval.

### Current status

- Steps 1–4: approved.
- Step 5 product-behavior model: approved at the invariant level; client-specific policy parameters remain runtime inputs.
- User-facing Stage 1: Create and approve RFx — approved.
- User-facing Stage 2: Invite suppliers — approved after re-audit.
- User-facing Stage 3: Evaluate responses — approved canonical contract.
- User-facing Stage 4: Decide and defend award — approved canonical contract.
- Organizational-context retrieval and quoteability: internal/supporting capabilities within Stage 1, not separate user-facing stages.
- Stage 1 transition to RFx construction: superseded; RFx construction is internal behavior within Stage 1.
- Earlier Stage 1 full step contract: superseded by E-050.
- Current Stage 1 full step contract: approved after re-audit and mechanism audit.
- Policy-clause applicability evaluation: approved.
- Draft RFx generation and buyer approval behavior: approved within Stage 1.
- Supplier release: implemented as a simulated, buyer-triggered demo path.
- Implementation: active prototype is mapped in IMPLEMENTATION_INDEX.md; statuses and remaining gaps are explicit there and in VERIFICATION_MATRIX.md.

## Chronological event log

This is the ordered history of decisions and corrections. IDs are immutable and must not be reordered for conceptual convenience.

| Order | Event | Result |
|---:|---|---|
| 001 | Project-level objective approved | Make and defend the best-supported supplier decision for a business requirement |
| 002 | Top-level workflow approved | Seven-step procurement workflow recorded |
| 003 | Stage 1 objective approved | Establish a shared, sufficiently clear understanding of the business need |
| 004 | E-001 identified | Completeness was proposed without authority or evidence |
| 005 | E-002 identified | Work advanced by conversation rather than dependency state |
| 006 | E-003 identified | A prerequisite was patched into an existing step instead of causing resequencing |
| 007 | E-004 identified | Missing policy was reduced to a prototype-policy choice |
| 008 | E-005 identified | Stage completion was conflated with next-stage readiness |
| 009 | E-006 identified | User was asked to approve an obvious derived implication |
| 010 | E-007 identified | User was asked an abstract threshold question instead of seeing concrete cases |
| 011 | E-008 identified | Deliverable and roles were not stated clearly before review |
| 012 | E-009 identified | Product manager was incorrectly assigned the domain-SME role |
| 013 | E-010 identified and corrected | Product-design fallback was misread as a binding policy dependency |
| 014 | Step 4 approved | Authority and evidence path recorded, including user guidance at every branch |
| 015 | E-011 identified | Meta-process language replaced the concrete next step |
| 016 | E-012 identified | Generic review requests repeated after sufficient input was available |
| 017 | E-013 identified | Local step focus caused loss of the project map |
| 018 | E-014 identified | Next action was stated without explaining its importance |
| 019 | E-015 identified | An unapproved boundary was called defensible |
| 020 | E-016 identified | Design work deadlocked on unavailable runtime policy |
| 021 | Invariant product behavior approved | Product design separated from runtime policy actions |
| 022 | E-017 identified | “Define” was used ambiguously for product behavior versus policy |
| 023 | E-018 identified | User guidance was treated as branch-specific instead of cross-cutting |
| 024 | E-019 identified | Universal approval guardrails were not separated from client policy |
| 025 | E-020 identified | Generic model knowledge was treated as a production policy fallback |
| 026 | E-021 identified | Stage 2 draft completion was treated as approval |
| 027 | E-022 identified | Internal reasoning layers became unnecessary user-facing stages |
| 028 | E-023 identified | Confirmed policy and relevant context were referenced without an acquisition path |
| 029 | E-024 identified | Source grounding was made a separate prerequisite instead of part of RFx intake |
| 030 | E-025 identified | The next task was anchored on the user’s example label “Create RFx” |
| 031 | E-026 identified | RFx format was assumed to be contained in policy |
| 032 | E-027 identified | Template structure was treated as sufficient for semantic field mapping |
| 033 | E-028 identified | The semantic field contract was introduced without an owner or supply path |
| 034 | E-029 identified | Opaque-template degradation was treated as an acceptable production fallback |
| 035 | E-030 identified | Policy presence was treated as a binary prerequisite for all RFx generation |
| 036 | E-031 identified | The policy-violation case was not tested before RFx generation |
| 037 | E-032 identified | Policy was not modelled as a versioned, stage-aware source |
| 038 | E-033 identified | An invented technical label obscured internal checks |
| 039 | E-034 identified | Organizational context was treated as stage-independent |
| 040 | E-035 identified | The ledger did not clearly separate chronological history from canonical state |
| 041 | Stage 2 approved | Organizational context is stage- and decision-scoped; it can clarify the business need through evidence questions and a controlled feedback loop |
| 042 | Stage 3 approved | The requirement must be structured so suitable suppliers can understand and answer it comparably |
| 043 | Stage 4 approved | Suitable suppliers, verified contacts, chosen channel, explicit send approval, and release evidence are required |
| 044 | Policy-clause applicability evaluation approved | Candidate clauses are evaluated against stage, transition, actor, scope, evidence, version, exceptions, and user guidance |
| 045 | Stage 1 transition to RFx construction approved | A clarified, permitted need with confirmed field semantics may produce a buyer-reviewable draft RFx |
| 046 | RFx generation and buyer approval approved | A permitted, grounded need becomes an explicitly reviewed and approved RFx before supplier release |
| 047 | Stage 4 dependency satisfied | Supplier invitation is now approved because the required buyer-approved RFx state is defined and approved |
| 048 | Stage 5 approved | Supplier replies are faithfully associated, extracted, normalized, and preserved with provenance before comparison |
| 049 | Stage 6 approved | Offers are compared transparently on a common basis while preserving differences, evidence, and policy-dependent exceptions |
| 050 | Stage 1 re-audit approved | Stage 1 covers user journey, execution mechanisms, implementation boundaries, runtime inputs, and verification |
| 053 | Stage 1 mechanism audit approved | Stage 1 mechanism assignments are grounded in deterministic substrate, execution-mechanism fit, human authority, and verification |
| 055 | Review-spine Step 1 approved | The review spine makes important product decisions reviewable at the right abstraction level with traceable links to detail |
| 056 | Layer 1 product-development reviewer roles approved | Product manager, PM manager, designer, engineering, AI/evaluation, client policy, and risk/operations review roles are approved for Layer 1 |
| 057 | Review-spine Step 3 approved | Each Layer 1 reviewer receives a role-specific default view, decision request, and traceable drill-down |
| 058 | Review-spine Step 4 approved | Reviewer feedback is consolidated into versioned canonical decisions with explicit ownership and downstream impact analysis |
| 059 | Review-spine Step 5 atomic requirement approved | Bidirectional traceability between important decisions and their implementation/verification artifacts is required; Review-spine Step 5 as a whole remains draft |
| 060 | Review-spine Step 5 approved | Traceability and coverage are approved, including mappings, owners, verification, version state, gaps, contradictions, drift, and re-review treatment |
| 061 | Review-spine Step 6 objective and proposed behavior approved | A review package is circulated only when its requested decisions, reviewers, evidence, dependencies, contradictions, versions, and authorized exceptions are sufficiently prepared for the intended review |
| 062 | Review-spine Step 6A approved | Review readiness is reported as ready, needs information, blocked by dependency, conflict requiring resolution, or ready with an explicitly approved risk |
| 063 | Review-spine Step 6B approved | Each readiness outcome must include the requested decisions, checks, evidence, missing information, dependency/conflict details, or risk authorization needed to act |
| 064 | Review-spine Step 6C approved | The AI may identify and explain risk but only the owner of the affected product decision or organizational control may explicitly authorize circulation with that risk |
| 065 | Review-spine Step 6D approved | A readiness result is valid only when its outcome, requested decisions, evidence, unresolved items, owner, versions, and required risk authorization are explicit |
| 066 | Review-spine Step 7 approved | Reviewers can approve, reject, request clarification/evidence, propose correction, identify risk, or defer a decision, each linked to the exact decision, artifact, and version |
| 067 | Review-spine Step 8 approved | Decision outcomes are explicit versioned states; accepted corrections create a new version and trigger impact analysis rather than silently changing the product |
| 068 | Review-spine Step 9 approved | A new canonical decision version is required for substantive changes to approved objectives, scope, actors, behavior, contracts, guardrails, execution, verification, controls, or supporting evidence |
| 069 | Review-spine Step 10 approved | A review cycle is complete only when every requested decision has a resolved outcome, affected artifacts are treated, required re-review is done, and the canonical version is published with evidence and traceability |
| 070 | Review-spine Step 11 approved | The complete Layer 1 review spine must be audited for role-specific decisions, evidence, authority, dependencies, traceability, canonical states, and downstream impact without hidden approvals or conflated actors |
| 071 | Layer 1 synthesis audit executed — conditional pass | The review spine is substantially coherent, but it has an unresolved decision-state contradiction and remaining contract-level gaps that must be corrected before it can be treated as implementation-ready |
| 072 | Conditional-approval state required | The reviewer action `approve with condition` must have an explicit canonical decision state rather than remaining an unrepresented action |
| 073 | Conditional-approval semantics approved | `approved-with-condition` requires a named condition, decision owner, responsible person, affected artifact/behavior, deadline or review point, impact, evidence, and transition if satisfied or missed |
| 074 | Layer 1 reviewer-evidence mapping approved | Each Layer 1 reviewer decision has a defined minimum evidence set and accountable decision owner |
| 075 | Layer 1 scope correction approved | Procurement workflow actors are preserved as a Layer 2 SME-review asset and do not block Layer 1 product-development review readiness |
| 076 | Layer 1 review-spine synthesis audit passed | After resolving the conditional-approval state, reviewer-evidence mapping, and Layer 1/Layer 2 scope boundary, the approved Layer 1 review spine is coherent for its defined purpose |
| 077 | Revised Stage 1 review-spine audit executed — conditional pass | Stage 1 has the right primary user and tangible outcome, but contains contradictory transition definitions, a misclassified success state, and unresolved completion semantics |
| 078 | Stage 1 transition model corrected and approved | Internal RFx construction leads to one user-facing outcome, `draft-rfx-awaiting-buyer-review`; blocking states remain separate and are not treated as successful completion |
| 079 | Stage 1 reviewability boundary approved | A draft awaits buyer review only when required field meanings, values, policy/format basis, and blocker consequences are established; unresolved potentially blocking issues remain in resolution states |
| 080 | Stage 1 evidence-to-decision mapping approved | Buyer review decisions are linked to need evidence, policy authority, format semantics, supplier usability, issue treatment, and consolidated readiness evidence |
| 081 | Revised Stage 1 re-audit — conditional pass | Superseded transition text was removed, but `draft-with-visible-issues` still needs an explicit distinction between non-blocking buyer-visible issues and unresolved blocking issues |
| 082 | Stage 1 issue-state correction approved | `draft-rfx-awaiting-buyer-review` is the only successful state; issue severity is tracked separately, and blocking or undetermined issues keep the request in resolution |
| 083 | Revised Stage 1 synthesis audit passed | Stage 1 now has one user-facing success transition, policy/contract-derived issue consequences, buyer-review evidence mapping, explicit authority, and separate resolution states |
| 084 | Revised Stage 1 workflow contract approved | The procurement-manager-led intake produces a traceable `draft-rfx-awaiting-buyer-review` only when the need, applicable policy, RFx format/field semantics, and issue consequences support buyer review |
| 085 | Stage 6 review-spine audit executed — conditional pass | Stage 6 contains duplicated response-handling material, multiple transition contracts, mixed AI/deterministic work, incomplete buyer journey definition, and an unresolved evaluation-authority boundary |
| 086 | Sequencing error recorded | The assistant treated historical approval labels for Stages 3–5 as sufficient and advanced to Stage 6 without re-auditing them against the completed Layer 1 review spine |
| 087 | Stage map reopened | Because Stage 2 is now an internal/supporting capability within intake and Stage 1 produces the draft RFx, the user-facing stage labels and boundaries must be re-derived before later-stage audits continue |
| 088 | Revised user-facing stage map drafted | The workflow is reorganized around five tangible buyer outcomes; organizational-context retrieval and quoteability remain internal capabilities within RFx creation |
| 089 | User-facing stage map corrected | Supplier-response understanding is an internal AI capability within the Evaluate responses outcome, and Stage 1 includes draft generation plus explicit buyer approval, ending with an approved RFx |
| 090 | Stage 1 end condition approved | Stage 1 ends only when the procurement manager explicitly approves the RFx, producing `approved-rfx-ready-for-supplier-invitation`; the draft state is intermediate |
| 091 | Revised four-stage user-facing map approved | The workflow has four user outcomes—Create and approve RFx, Invite suppliers, Evaluate responses, and Decide and defend award—with internal capabilities assigned within each stage |
| 092 | Supplier-invitation review-spine audit executed — conditional pass | The contract supports the Invite suppliers outcome, but retains superseded stage numbering and does not clearly separate send completion from delivery status |
| 093 | Stage 2 remapping approved | The supplier-invitation contract is remapped from the old Stage 4 label to Stage 2 — Invite suppliers across its heading, outputs, completion, transitions, and dependencies |
| 094 | Stage 1 downstream impact reopened | Changing Stage 1 from draft RFx to approved RFx affects approval actions, return/rejection states, completion evidence, authority records, and the Stage 1-to-Stage 2 dependency |
| 095 | E-063 recorded | The assistant failed to flag and record the full downstream impact when Stage 1’s final outcome changed from draft RFx to approved RFx |
| 096 | Stage 1 buyer-approval contract approved | The procurement manager explicitly approves, returns, or rejects the exact RFx version; only the approved state enables supplier invitation, and later edits create a new draft version |
| 097 | Stage 1 dependency re-audit passed | Stage 1 now has a complete draft-to-approval path, explicit buyer authority, versioned approval evidence, return/rejection behavior, and a stable dependency for supplier invitation |
| 098 | Stage 2 send/delivery separation approved | `send-confirmed` records acceptance of an outbound message; per-supplier delivery remains a separate pending, delivered, failed, or bounced status and cannot be inferred from sending |
| 099 | Stage 2 supplier/contact retrieval relevance approved | Retrieval uses approved-RFx context and multiple evidence signals; filenames and name matches are not proof, and ambiguous candidates remain unsent for buyer resolution |
| 100 | Stage 2 supplier-invitation synthesis audit passed | The contract is consistently mapped to Stage 2, separates send from delivery, and grounds supplier/contact selection in RFx-relevant evidence and buyer resolution |
| 101 | Revised Stage 3 contract drafted | Supplier-response understanding, extraction, normalization, calculation, and comparison are being consolidated under one user-facing Evaluate responses outcome |
| 102 | Revised Stage 3 objective and boundary approved | Evaluate responses produces a transparent comparison for the procurement manager; response understanding is internal, deterministic mechanisms perform calculations/validation, and award decision remains Stage 4 |
| 103 | Revised Stage 3 starting state and authority model approved | Approved RFx and release context anchor evaluation; supplier evidence, policy, buyer guidance, AI interpretation, and deterministic calculations retain distinct authority |
| 104 | Revised Stage 3 evaluation sequence approved | Supplier replies are preserved, associated, classified, extracted, mapped, reviewed, policy-treated, deterministically normalized/calculated, and presented as a comparison without selecting the award |
| 105 | Revised Stage 3 comparison-readiness conditions approved | Comparison opens only when association, versions, mappings, provenance, transformations, calculations, policy permission, and exception authority are explicit; outcomes are ready, ready-with-approved-exceptions, or blocked |
| 106 | Revised Stage 3 comparison-workspace behavior approved | The buyer sees readiness, side-by-side values, evidence, commercial/questionnaire context, issue resolution, and comparison status without the system making the award decision |
| 107 | Revised Stage 3 deterministic normalization/calculation contract approved | Approved conversion and calculation bases are executed deterministically with source preservation, reproducible formulas, explicit precision, and fail-closed handling of unknown bases |
| 108 | Revised Stage 3 evaluation-criteria authority approved | Approved criteria may be applied, new criteria may be proposed by AI, and changes to approved criteria require authorized procurement decision and versioning |
| 109 | Revised Stage 3 AI reasoning and relevance contract approved | AI reasoning is grounded in the current RFx comparison, separates facts/calculations/interpretation, cites evidence, handles irrelevant inputs explicitly, and does not make the award decision |
| 110 | Revised Stage 3 completion and transition approved | Stage 3 ends at `comparison-ready-for-award-decision` or remains `comparison-blocked`; the next stage owns supplier decision and award rationale |
| 111 | Revised Stage 3 synthesis audit passed | Evaluate responses is one buyer-facing stage with internal response understanding, evidence-grounded comparison, deterministic calculations, explicit relevance handling, policy-based permission, and a clean transition to award decision |
| 112 | Revised Stage 4 contract drafted | The final stage is being defined around the procurement manager’s tangible outcome: an authorized supplier decision with a defensible rationale grounded in the comparison |
| 113 | Revised Stage 4 objective and boundary approved | Stage 4 enables an authorized supplier decision and defensible rationale; AI analyzes and proposes, deterministic mechanisms validate, and the procurement manager/authorized approver decides |
| 114 | Revised Stage 4 starting state and authority model approved | Award begins only from a current comparison-ready state with authorized criteria, visible evidence, and award-governance basis; AI proposes, authorized humans decide, and deterministic controls record the state |
| 115 | Revised Stage 4 decision journey approved | The buyer asks, inspects evidence, evaluates trade-offs, confirms the decision basis, passes policy/approval checks, records an authorized decision, and produces the award rationale |
| 116 | Revised Stage 4 AI answer contract approved | Buyer questions and files are relevance-checked; supported answers cite evidence and distinguish facts, calculations, interpretation, hypotheses, and recommendations; unsupported questions do not receive invented answers |
| 117 | Revised Stage 4 policy-based award gate approved | The proposed comparison-to-award transition is evaluated through applicable award-governance clauses, their conditions, authority, approvals, evidence, and explicit policy-derived outcomes |
| 118 | Revised Stage 4 award record contract approved | The final record preserves the RFx/comparison versions, selected supplier and scope, authority, policy basis, evidence, criteria, alternatives, risks, AI draft versus human confirmation, final status, and audit history |
| 119 | Revised Stage 4 completion states approved | Award ends in an authorized `award-approved` or `no-award-approved` state, while policy, evidence, approval, and correction states remain explicit prerequisites or holding states |
| 120 | Revised Stage 4 synthesis audit passed | Stage 4 has a clear buyer outcome, authority boundary, evidence-grounded AI analysis, policy-based award gate, defensible record, and explicit terminal states |
| 121 | Cross-stage synthesis audit executed — conditional pass | Approved four-stage decisions are coherent, but the ledger still exposes an old seven-stage model, duplicate stage contracts, stale statuses, and unreconciled legacy transitions as though they were current |
| 122 | Canonical stage summary corrected | The current model now uses the approved four-stage workflow, and old context/quoteability/response/comparison sections are marked historical or superseded rather than current contracts |
| 123 | Canonical Stage 3 and Stage 4 contracts consolidated | Approved revised contracts for Evaluate responses and Decide and defend award are now present as the implementation reference; older detailed sections remain historical source material |
| 124 | Final cross-stage synthesis audit passed | The canonical ledger now has one four-stage workflow, one current contract per user-facing outcome, explicit internal capabilities, stable transitions, and clearly marked historical source material |
| 125 | Preservation-default error recorded | The assistant retained superseded detailed sections without first evaluating whether they should be deleted, archived, or retained, creating avoidable documentation bloat and possible competing truths |
| 126 | Artifact dispositions approved | Retain the event log, error register, current canonical contracts, and necessary history; archive unique legacy evidence and remove duplicate or superseded implementation content from the active path |
| 127 | Product-entry experience omission recorded | The implementation-readiness inventory omitted a preliminary landing/entry screen and incorrectly began the product experience at the first workflow stage |
| 128 | Landing-copy correction recorded | The proposed one-sentence solution merely listed the four workflow outcomes instead of expressing one coherent value proposition |
| 129 | Landing-copy principle corrected | A landing line must move from the procurement manager’s lived pain to the relief and confidence created by the solution, not merely describe a product transformation |
| 130 | Hero-copy correction recorded | “Unclear request” inaccurately replaced business need, and “keep the reasoning visible” described an internal mechanism instead of the buyer’s award outcome |
| 131 | Hero-copy tension refined | The core pain is cognitive overload under simultaneous pressure for speed and evidence-backed, trade-off-explicit award decisions across internal stakeholders |
| 132 | Hero-copy accountability gap recorded | The proposed headline captured speed and defensibility but omitted the procurement manager’s personal accountability and need to make the award decision safely |
| 133 | Workflow-overview copy regression recorded | The proposed stage descriptions reverted to capability/outcome summaries instead of carrying the approved pain-to-relief, safe-speed, and buyer-accountability principles into each stage |
| 134 | Landing workflow-overview copy approved | Each stage pairs the procurement manager’s lived burden and decision risk with the safer, more confident outcome the product enables |
| 135 | Product-copy principles omitted | The assistant drafted handoff copy before defining the distinct principles that govern functional product copy versus hero/marketing copy |
| 136 | Workflow-continuity principle identified | Product work should faithfully correspond to the procurement manager’s real work, with explicit boundaries between user responsibility, system assistance, external inputs, and downstream handoffs |
| 137 | Workflow-continuity impact analysis completed | The principle reopens product-entry, UI/copy, handoff, and implementation-surface artifacts for review while preserving approved procurement outcomes and core authority decisions |
| 138 | Product-copy model redrafted | Product copy is defined as a workflow control surface governed by role, real-world task continuity, action, state, authority, evidence, consequence, and recovery |
| 139 | Product-copy model approved | Product copy must preserve real workflow continuity and make the user’s task, action, state, authority, evidence, consequence, and recovery path clear |
| 140 | Functional-brevity copy correction recorded | Action copy should directly name the procurement task and its decision relevance without explanatory filler or repeated context |
| 141 | Stage 1 handoff-screen copy approved | The screen uses concise task labels for the sourcing requirement and RFx sources, shows truthful input/source states, and offers one clear draft-generation action |
| 142 | Stage 1 handoff-screen synthesis audit — conditional pass | The screen’s title describes the full Stage 1 outcome although the current screen only gathers inputs and starts draft generation |
| 143 | Single-RFx-workspace correction identified | Draft generation, buyer review, and buyer approval may belong in one evolving RFx workspace when the same buyer owns the artifact and decision |
| 144 | RFx-review decomposition correction identified | Keeping RFx work in one workspace does not justify collapsing scope, line items, questionnaire, terms, evidence, issues, and approval into one review action |
| 145 | RFx-review decomposition approved | One RFx workspace preserves artifact continuity while dedicated sections give scope, line items, questionnaire, terms, evidence, issues, validation, versioning, and approval their own focus and state |
| 146 | RFx review — Scope and boundaries approved | The buyer confirms the sourcing purpose, included work, excluded work, supporting evidence, and section status before reviewing detailed RFx fields |
| 147 | RFx review — Line items approved | The buyer confirms each item’s description, specification, quantity, unit, location, timing, assumptions, issues, and source before suppliers are asked to quote |
| 148 | RFx review — Questionnaire approved | The buyer confirms supplier questions, required/optional status, expected answers, requested evidence, and relevance to fair evaluation |
| 149 | RFx review — Terms and response instructions approved | The buyer confirms commercial terms, declarations, deadline, delivery expectations, submission method, required attachments, source basis, and conflicts |
| 150 | RFx review — Sources and evidence approved | The buyer confirms source relevance, exact supporting passages, version/date, RFx content supported, guidance, exclusions, and conflicts without treating filenames or matches as proof |
| 151 | RFx review — Issues and assumptions approved | The buyer resolves or governs each material issue using its impact, evidence/policy basis, owner, status, and next action without relying on universal blocker rules |
| 152 | RFx review — Validation approved | The buyer can verify policy, format, field, and supplier-response checks; failed or undetermined checks expose their basis and route back to the affected section before approval |
| 153 | RFx review — Buyer approval approved | The buyer explicitly approves a complete RFx for supplier invitation; the system records the approver, timestamp, RFx version, evidence set, and decision, and prevents approval when applicable contracts do not permit it |
| 154 | Stage 1 synthesis audit — passed | The approved sections form one buyer-led path from business need and sources through RFx review, correction, validation, and explicit approval; the approved RFx is the only handoff to supplier invitation |
| 155 | Stage 2 objective and boundary approved | The procurement manager sends the approved RFx to confirmed suppliers through a controlled channel and receives a delivery outcome for each invitation; response evaluation remains in Stage 3 |
| 156 | Stage 2 invitation artifact correction recorded | A supplier invitation consists of the approved RFx attachment plus an organization-approved subject and message body; delivery records must identify the complete outbound package |
| 157 | Stage 2 scope-continuity correction recorded | Inbox-based template retrieval is only one dependency of supplier invitation; recipient discovery and verification, complete-message approval, sending, and delivery evidence must remain in the same stage outcome |
| 158 | Stage 2 complete-outcome scope approved | Stage 2 must cover supplier discovery, recipient verification, subject/body retrieval or creation, complete invitation approval, authorized sending, and per-recipient delivery evidence |
| 159 | Stage 2 supplier and recipient discovery approved | The system searches authorized sources, surfaces evidence-backed supplier/contact candidates, exposes uncertainty and conflicts, and requires buyer confirmation before recipients become part of the invitation package |
| 160 | Stage 2 message-check consequence correction recorded | Message checks must produce explicit pass, correction, or unresolved outcomes; a passing check enables buyer review, while a failed or undetermined required check prevents invitation approval and routes the buyer to correction |
| 161 | Stage 2 final-message state correction recorded | Once the RFx and recipients are approved, final-message validation is binary for each defined requirement: pass or fail; retrieval uncertainty belongs to candidate selection and must not become an unnecessary final-message state |
| 162 | Stage 2 message-requirement authority correction recorded | Final-message checks may run only against requirements supplied by applicable policy, an approved communication template/contract, the approved RFx, or explicit buyer guidance; the system must not invent mandatory message requirements |
| 163 | Stage 2 message-requirement authority approved | Mandatory subject/body checks must trace to policy, an approved communication template or schema, the approved RFx, or explicit buyer guidance; AI suggestions remain non-binding unless the buyer confirms them |
| 164 | Stage 2 message-contract construction approved | The system creates a versioned message contract from applicable policy, approved template/schema, approved RFx, and buyer guidance, recording each condition, basis, applicability, and mandatory/suggested status; conflicts are surfaced rather than silently resolved |
| 165 | Stage 2 no-template generation correction recorded | Absence of a suitable prior template does not authorize freeform message invention; a new message may be proposed only from the approved message contract and requires explicit buyer approval |
| 166 | Stage 2 message validation approved | The generated subject and body are checked against the message contract and approved RFx; each condition is evidence-backed and pass/fail, with any failed required condition routing to correction and preventing buyer confirmation |
| 167 | Stage 2 personalization correction recorded | Invitation templates must distinguish fixed content from recipient-specific fields; each rendered supplier message requires field resolution, validation, buyer review, and an exact per-recipient send record |
| 168 | Stage 2 recipient-specific message generation approved | The system classifies template fields, resolves variable values from authorized sources, shows mappings and provenance, renders one message per supplier, and blocks affected messages when required personalization is missing, conflicting, or unsupported |
| 169 | Stage 2 recipient-level message validation approved | Each rendered supplier message is independently checked against the message contract and approved RFx with pass/fail results; any failed required instance routes to correction and prevents package approval unless an applicable approved rule permits separate handling |
| 170 | Stage 2 complete invitation review approved | The buyer reviews recipients, template mappings, rendered supplier messages, the exact approved RFx attachment, response instructions, and exceptions, then approves the exact per-supplier packages for sending |
| 171 | Stage 2 send behavior approved | The system sends each buyer-approved supplier package through the authorized channel, distinguishes send from delivery, handles partial failure and retry safely, and records the exact per-recipient outbound and delivery evidence |
| 172 | Stage 2 synthesis audit — passed | Stage 2 forms a complete path from approved RFx through evidence-backed supplier/contact discovery, message-contract construction, recipient-specific rendering and validation, complete-package approval, authorized sending, per-recipient delivery outcomes, and a controlled Stage 3 handoff |
| 173 | Stage 3 response-input coverage correction recorded | Supplier responses must include images and low-quality mobile-camera captures as first-class inputs alongside email text, documents, spreadsheets, PDFs, and other response artifacts |
| 174 | Stage 3 response-input boundary approved | Stage 3 treats email text, documents, spreadsheets, PDFs, scans, images, low-quality mobile-camera captures, embedded attachments, and other channel artifacts as first-class response inputs with preserved originals and quality-aware extraction |
| 175 | Stage 3 starting state and authority approved | Evaluation begins with registered supplier-response records; the approved RFx defines expected fields, suppliers are authoritative for their offers, original artifacts provide evidence, and AI interpretations require buyer resolution when material or unsupported |
| 176 | Stage 3 email-relevance correction recorded | When multiple emails are accessible, the system must assess relevance to the active RFx before registering a message as a supplier response; irrelevant and uncertain candidates must remain distinguishable and reviewable |
| 177 | Stage 3 cross-thread relevance clarification approved for review | A shared email thread is useful evidence but not a prerequisite; responses on different threads are assessed through multiple independent signals before association |
| 178 | Stage 3 cross-thread relevance handling approved | Relevance is assessed across independent signals rather than requiring the original thread; relevant responses may be associated across threads, unrelated emails are excluded with reasons, and conflicting candidates require buyer review |
| 179 | Stage 3 supplier-fact extraction approved | Relevant response artifacts are read across modalities and supplier-stated facts are captured without interpretation or normalization, with original wording, extraction outcomes, and field-level provenance preserved |
| 180 | Stage 3 supplier-fact mapping approved | Extracted facts are mapped to the approved RFx structure with evidence, original supplier labels preserved, material ambiguity surfaced for buyer confirmation, and unmapped supplier content retained |
| 181 | Stage 3 currency-conversion correction recorded | Currency normalization requires an authoritative rate source, as-of date/time, quote direction, and recorded rate snapshot; live-rate use must be explicitly governed and must not be silently applied |
| 182 | Stage 3 policy-method correction recorded | Policy governs the method and treatment for multi-currency responses; runtime exchange-rate values are acquired according to that method, and a multi-currency response is flagged for missing policy when the policy has no applicable provision |
| 183 | Stage 3 multi-currency policy behavior approved | The system checks policy coverage for multi-currency responses, follows the covered fixed or dynamic conversion method using acquired runtime rate data, records the basis and calculation, and raises a policy gap when no provision applies |
| 184 | Stage 3 normalization classification correction recorded | Exact, reversible unit conversions may use a deterministic conversion library directly; policy is required when normalization involves ambiguity, organizational treatment, commercial interpretation, or a non-deterministic external basis |
| 185 | Stage 3 normalization classification approved | Exact reversible unit conversions run deterministically with recorded formulas and rounding; policy governs ambiguous, commercial, organizational, or externally dependent transformations, and uncovered ambiguity remains unresolved rather than guessed |
| 186 | Stage 3 comparison workspace approved | The system presents all registered supplier responses on the approved RFx structure with original and normalized values, questionnaire answers, linked documents/images, evidence, and visible exceptions |
| 187 | Stage 3 comparison-readiness behavior approved | The system distinguishes a visible but incomplete comparison from one ready for award analysis; readiness consequences come from applicable policy and evaluation contracts, with disclosed exceptions permitted only when those rules allow them |
| 188 | Stage 3 comparison-analysis capability approved | Within Stage 3, the buyer can ask natural-language questions over the structured comparison and receive text, tables, charts, exports, and evidence links without the system approving or executing an award |
| 189 | Stage 3 question-interpretation behavior approved | Each buyer question is mapped to a defined analysis task and RFx data scope, classified as answerable, incomplete, ambiguous, or out of scope, and answered only within the available comparison evidence |
| 190 | Stage 3 analysis-boundary correction recorded | The comparison-analysis screen produces evidence-backed answers to buyer questions; award recommendation and award approval remain Stage 4 behavior rather than being introduced as a default analysis outcome |
| 191 | Stage 3 user-outcome copy correction recorded | The comparison experience must reinforce the procurement manager’s real-world job of understanding offers and preparing a defensible award decision; it must not expose an internal stage transition as the primary user-facing purpose |
| 192 | Stage 3-to-Stage 4 boundary explanation approved for review | The comparison chat is for exploratory, evidence-backed analysis; the later award interface is for a formal, authorized, auditable decision, so the boundary must be explained through user purpose rather than a raw stage-transition label |
| 193 | Stage 3 analysis completion outcome defined for review | Before entering award decision, the buyer explicitly confirms that the comparison, evidence, trade-offs, and material open issues have been sufficiently examined, creating a recorded analysis basis for Stage 4 |
| 194 | Stage 3 award-question handling principle recorded | When the buyer asks an award-related question in comparison chat, the system must deepen understanding of the comparison—showing evidence, trade-offs, risks, and gaps—so the buyer can justify the decision; it must not substitute an unexplained AI recommendation |
| 195 | Stage 3 singular-purpose correction recorded | The comparison screen and its chat exist only to reduce the buyer’s cognitive load when analyzing supplier responses; AI recommendation prompts belong exclusively to the next award-decision stage |
| 196 | Stage 3 dependency impact identified | The singular comparison-purpose correction requires re-review of the comparison capability, question classification, analysis output, and analysis-completion outcome; extraction, mapping, normalization, and comparison-data contracts remain unchanged |
| 197 | Stage 3 comparison-analysis capability reopened | The earlier comparison-analysis contract is reopened because its award-analysis wording and recommendation-adjacent behavior exceeded the screen’s singular purpose |
| 198 | Stage 3 comparison-analysis capability re-approved | Comparison analysis exists solely to reduce the buyer’s cognitive load when understanding supplier responses; it produces grounded analysis and does not recommend, select, approve, or execute an award |
| 199 | Stage 3 comparison-boundary copy approved for review | Boundary messaging must describe the forward-looking user benefit—using the comparison to help the buyer make the right decision—without implying that the award decision already exists |
| 200 | Stage 3 comparison-boundary copy corrected | The boundary message uses the forward-looking purpose: the comparison helps the buyer understand the offers to make the right decision |
| 201 | Stage 3 analysis-execution behavior approved | In-scope questions produce evidence-backed comparison analysis; deterministic operations handle data work, AI explains results and trade-offs, and award recommendations remain outside Stage 3 |
| 202 | Stage 3 analysis-completion behavior approved | The buyer explicitly confirms they have reviewed the comparison; completion records the comparison version, analysis results and evidence accessed, open issues, buyer note, timestamp, and identity without requiring a fixed number of questions |
| 203 | Stage 3 synthesis audit — passed | Stage 3 covers relevance-first response intake across all modalities, evidence-preserving extraction, RFx mapping, classified normalization, comparison construction, grounded analysis, a strict no-recommendation boundary, and explicit buyer confirmation of analysis completion |
| 204 | Stage 1 missing-schema behavior correction recorded | When policy and past RFx examples exist but no approved RFx schema exists, the system may construct a proposed schema from those sources and buyer guidance, but must obtain explicit buyer approval before using it as the RFx field contract |
| 205 | Stage 1 missing-schema behavior approved | Policy and relevant past RFxs may produce a proposed RFx schema with provenance and differences; the procurement manager must approve it before it becomes the field contract for RFx generation, validation, or Stage 1 completion |
| 206 | Stage 1 dependency re-audit — passed | Stage 1 now has a complete path for absent approved schemas: construct a sourced proposal from policy, relevant past RFxs, and buyer guidance; obtain buyer approval; then use the approved schema for generation, validation, and completion gating |
| 207 | Stage 4 objective and boundary approved | Stage 4 begins with buyer-confirmed analysis and ends with an authorized supplier award or no-award decision; AI may propose the decision basis, while the authorized human makes and approves the final decision |
| 208 | Stage 4 starting state and decision authority approved | Stage 4 starts from the recorded buyer-confirmed analysis; policy and approval rules determine authority, the procurement manager may request and review a recommendation, and only an authorized human may approve the final outcome |
| 209 | Stage 4 recommendation-basis correction recorded | Recommendation readiness must be determined by an explicit evaluation-basis contract derived from policy, approved RFx criteria, and buyer guidance; missing or conflicting elements must be named rather than delegated to vague AI judgment |
| 210 | Stage 4 evaluation-basis behavior approved | Recommendation readiness is determined by a source-backed evaluation contract whose required criteria and treatments are explicitly checked; the system names specific gaps and never invents weights, thresholds, or priorities |
| 211 | Stage 4 award-recommendation behavior approved | With buyer-confirmed analysis and a complete evaluation-basis contract, the AI proposes a supplier or no-award option with criteria, evidence, trade-offs, risks, alternatives, and required approvals; the proposal remains non-authoritative until human approval |
| 212 | Stage 4 recommendation-review behavior approved | The procurement manager reviews and may edit the proposed supplier decision and rationale, evidence, trade-offs, risks, alternatives, and approvals; the reviewed result becomes ready for authorization but is not yet an approved award |
| 213 | Stage 4 authorization behavior approved | The authorized decision-maker approves an award or no-award outcome only after required checks and reviews pass; the system records the final rationale, evidence, policy basis, approvals, identity, timestamp, and version |
| 214 | Stage 4 synthesis audit — passed | Stage 4 forms a complete path from buyer-confirmed analysis through evaluation-basis checks, evidence-backed recommendation, buyer review, authorized award/no-award approval, and final versioned audit record |
| 215 | Cross-stage synthesis audit — passed | The four approved stages connect through explicit states and versioned artifacts: approved RFx → invitation delivery records → buyer-confirmed analysis → authorized award/no-award decision; authority, evidence, correction, and scope boundaries remain continuous across the workflow |
| 216 | Implementation-readiness decomposition correction recorded | Implementation readiness must be decomposed into concrete artifacts and reviewed in dependency order; the next task is the product screen map, not a simultaneous review of screens, data/state, AI, deterministic mechanisms, and verification assets |
| 217 | Screen-map decomposition correction recorded | The screen-map artifact must first be split into screen inventory/sequence and per-screen contracts; the immediate next decision is only which screens exist and how they connect |
| 218 | Product screen inventory and sequence approved | The product surface contains five screens in order: Landing page → Create and approve RFx → Invite suppliers → Evaluate responses → Decide and defend award |
| 219 | Landing-page objective approved | The landing page helps the procurement manager understand the cognitive burden and risk of sourcing, how the co-pilot addresses the four-step workflow, what the demo will show, and where to begin |
| 220 | Landing-page flow approved | The landing page moves from procurement pain and stakes → product relief → four-step sourcing path → guided-demo expectation → one clear start action |
| 221 | Landing-page layout approved | The page uses a linear structure: hero → problem-to-relief → four-step workflow → guided demo, with minimal navigation and no interruptive overlays or workflow controls |
| 222 | Landing-page hero copy and UI approved | The hero uses “Move quickly. Decide safely. Defend every award.” with an evidence-backed sourcing co-pilot explanation, one start action, and a restrained continuity visual |
| 223 | Landing problem-to-relief copy correction recorded | The section must state the buyer’s pain simply and sharply, describe relief as confident decision-making rather than product organization, and order the decision story as award rationale followed by supporting evidence |
| 224 | Landing copy over-correction recorded | After correcting the pain, relief, and narrative order, the section must remain concise; the assistant must not add explanatory layers or over-designed copy that dilute the single user insight |
| 225 | Landing-copy correction-scope error recorded | A local wording correction must preserve unaffected approved content; the assistant must not replace the complete problem-to-relief section when only one pain clause was challenged |
| 226 | Landing relief coverage correction recorded | The relief statement must address all three stated pains—unclear business need, inconsistent supplier responses, and difficult award justification—without becoming a mechanism list or adding explanatory filler |
| 227 | Landing relief temporal-position correction recorded | Relief copy must describe the buyer’s post-workflow state, not restate the input or opening condition; the first outcome is clarity about what needs to be sourced, not merely a clearer ask |
| 228 | Landing pain-model correction recorded | The first pain is the construction of a complex, time-consuming, thorough, policy-compliant RFx from inputs across sources before it is shared with suppliers; it must not be reduced to an inferred “unclear business need” |
| 229 | Landing pain-relief copy corrected | Use plain-language workflow outcomes: “Building an RFx takes time. Supplier responses arrive in every shape. Justifying the award is hardest of all.” Relief is “Get an RFx you can stand behind, a comparison that doesn’t break your head, and an award you can explain with confidence.” |
| 230 | Landing relief specificity corrected | The RFx relief should directly answer the time burden with a concrete outcome: “Get an RFx in a couple of clicks,” while preserving the comparison and award-justification outcomes |
| 231 | Landing supplier-comparison copy corrected | The comparison relief is made procurement-specific: “a supplier comparison that doesn’t break your head” |
| 232 | Landing problem-to-relief UI approved | The section uses a simple two-column, one-to-one mapping from procurement burden to buyer outcome with plain text, generous spacing, and no decorative dashboard elements |
| 233 | Landing workflow-section objective approved | The section shows how the product addresses the procurement manager’s real burden at each of the four sourcing steps and how those steps connect into one journey |
| 234 | Landing workflow-section sequence approved | The four steps are presented in order as prepare → invite → compare → decide, with each step tied to its procurement responsibility and resulting outcome |
| 235 | Landing workflow-section layout approved | The four steps use one connected numbered path with a pain and outcome in each block; desktop is horizontal, mobile is vertical, and hierarchy comes from type and spacing rather than decorative cards or metrics |
| 236 | Landing workflow-section purpose correction recorded | After the problem-to-relief section establishes the burden and felt outcome, the workflow section must explain the product’s human-level solution behavior at each step without repeating the pain or exposing technical biology |
| 237 | Landing Step 1 solution copy narrowed | User guidance remains supported in the product behavior but is omitted from the concise workflow copy; Step 1 names the business need, policy, and past RFxs as the visible solution inputs |
| 238 | Landing Step 1 solution copy approved | “Bring the business need, policy, and past RFxs together. The co-pilot shapes them into an RFx you can review and approve.” |
| 239 | Landing Step 2 solution copy approved | “Find the right supplier contacts, prepare the invitation, and track delivery of the approved RFx.” |
| 240 | Landing Step 3 solution copy shortened | The workflow overview uses “Turn every supplier reply into one side-by-side comparison.” Detailed questionnaire, document, and modality behavior remains in the product experience rather than the overview copy |
| 241 | Landing Step 3 solution copy approved | “Turn every supplier reply into one side-by-side comparison.” |
| 242 | Landing Step 4 solution copy approved | “Make and defend the award with clear trade-offs and evidence.” |
| 243 | Landing workflow-section copy revision recorded | The workflow section is introduced as “Here’s what Aera, our AI Sourcing Agent can do for you”; Step 1 foregrounds shaping the business need, policy, and past RFxs into an approvable RFx, and Step 4 foregrounds helping the buyer defend the award |
| 244 | Landing workflow-section copy approved | The section introduces Aera as the AI Sourcing Agent and presents four concise solution actions: shape the RFx, prepare and track supplier invitations, create the supplier comparison, and make/help defend the award |
| 245 | Landing guided-demo flow approved | The buyer sees a prepared realistic sourcing example, understands the complete workflow requires no setup, and selects one action to enter Create and approve RFx with the example loaded |
| 246 | Landing guided-demo layout approved | The closing section uses a compact example-ready statement, one next-step line, and one prominent start action without upload, configuration, or setup controls |
| 247 | Landing demo CTA correction recorded | The closing section should frame the prepared content as a product demo rather than an example, and the CTA should invite the buyer to experience Aera directly: “Try Aera in action” |
| 248 | Landing demo invitation copy correction recorded | Replace the status-like eyebrow with “Try Aera in action” and use the curiosity-led CTA “Amaze me,” with the supporting line carrying the expected demo scope |
| 249 | Landing demo invitation copy approved | The guided-demo section uses “TRY AERA IN ACTION,” “See the sourcing journey from RFx to award,” and “Amaze me” |
| 250 | Landing-page synthesis audit — passed | The page moves coherently from procurement pressure → three concrete burdens → corresponding buyer relief → Aera’s four workflow actions → a clear invitation to experience the guided demo |
| 251 | Create-and-approve-RFx screen objective approved | The screen helps the procurement manager turn the business need and authorized sources into an RFx they can review, correct, and explicitly approve for supplier invitation |
| 252 | Create-and-approve-RFx screen flow approved | The buyer moves from prepared need → source review → RFx generation → section review → issue resolution → validation → final RFx approval within one evolving workspace |
| 253 | Guided-demo source-asset dependency recorded | Policy, past RFx, and supporting sources used in the demo must be coherent, viewable, and downloadable documents; the Sources section must expose the actual artifact, provenance, and relevant content rather than only a selected-state label |
| 254 | Stage 1 source-evidence continuity recorded | Sources used to generate the RFx must remain accessible throughout buyer review; every material section or field must link to the supporting document and passage, with version and provenance visible |
| 255 | Create-and-approve-RFx layout reopened | The earlier layout is reopened because source evidence must be available at each material RFx review decision, not only in a separate Sources section |
| 256 | Create-and-approve-RFx source-backed layout approved | The RFx workspace keeps section-level review in the main area and provides a persistent evidence panel with source passages, provenance, conflicts, and original-document access; mobile shows evidence inline |
| 257 | Create-and-approve-RFx Need section approved | The buyer reviews an editable prepared business need under “State the procurement ask,” with Edit/Replace controls, a ready state, and a Review sources action |
| 258 | Create-and-approve-RFx demo source-control behavior defined | The Sources section shows an Add source affordance in a disabled visual state; selecting it opens a closeable message explaining that adding sources is supported but disabled for this guided demo |
| 259 | Create-and-approve-RFx disabled-action copy correction recorded | Disabled-action copy must state the actual limitation directly; it must not reframe a disabled demo action as a positive capability message |
| 260 | Create-and-approve-RFx demo source-control scope corrected | In the guided demo, View remains enabled for selected documents while Download, Remove, and Add source are disabled; each disabled action states its limitation directly |
| 261 | Create-and-approve-RFx Sources section approved | Selected source documents are visible with type, version/date, relevance, and status; View remains enabled, Download/Remove/Add source are explicitly disabled for the demo, and source evidence remains available during review |
| 262 | Create-and-approve-RFx generation copy corrected | The generation section says: “Aera shapes the need and sources into a draft you can review.” |
| 263 | Create-and-approve-RFx generation section approved | The section uses “Create the RFx,” “Aera shapes the need and sources into a draft you can review,” and “Generate RFx draft,” then transitions within the same workspace to RFx review |
| 264 | RFx review — Scope and boundaries objective approved | The buyer confirms the sourcing purpose, included work, excluded work, and supporting source before reviewing detailed RFx fields |
| 265 | RFx review — Scope and boundaries flow approved | The buyer reviews purpose → included work → excluded work → supporting source, edits where needed, and confirms the scope; material gaps or conflicts keep the section open |
| 266 | RFx review — Scope and boundaries layout approved | The section uses a focused single-column sequence of sourcing purpose → included → excluded → source → Confirm scope, with inline evidence access and a visible section status |
| 267 | RFx review — Scope and boundaries copy and UI approved | The section uses “Scope and boundaries,” “What suppliers are being asked to provide,” Included/Excluded/Source fields, Edit scope/View source/Confirm scope actions, and Needs review/Confirmed states |
| 268 | RFx review — Line items objective approved | The buyer confirms that every item is specific and complete enough for suppliers to quote consistently, with material details, assumptions, issues, and source evidence visible |
| 269 | RFx review — Line items flow approved | The buyer reviews each item and its quoteability fields, source, assumptions, and issues, then edits and confirms it; material gaps keep the section open |
| 270 | RFx review — Line items demo edit behavior corrected | In the guided demo, Edit item is disabled while inspection, source viewing, and item confirmation remain available; the disabled action states its limitation directly |
| 271 | RFx review — Line items demo behavior approved | The guided demo allows item inspection, source viewing, and confirmation while Edit item is disabled with direct limitation copy |
| 272 | RFx review — Line items copy and UI approved | The section uses “Line items,” “Confirm what suppliers must quote,” the approved comparison fields, source/issue/assumption detail, direct demo limitation copy, and Needs review/Confirmed states |
| 273 | RFx review — Questionnaire objective approved | The buyer confirms that the RFx asks suppliers the questions needed for a fair evaluation, with relevance, response status, evidence, source, and conflicts visible |
| 274 | RFx review — Questionnaire flow approved | The buyer reviews each question’s decision relevance, response status, evidence requirement, source, and issues, then confirms it; unsupported or ambiguous questions keep the section open |
| 275 | RFx review — Questionnaire layout approved | The section uses a focused question list with purpose, response, evidence, and status columns; one question expands at a time with source and issue detail |
| 276 | RFx review — Questionnaire copy and UI approved | The section uses “Questionnaire,” “Confirm what suppliers must answer,” the approved question-list fields, focused detail labels, source access, and Needs review/Confirmed states |
| 277 | RFx review — Terms and response instructions objective approved | The buyer confirms the conditions suppliers must follow and the information they must provide, including terms, deadline, submission method, delivery expectations, attachments, declarations, sources, and conflicts |
| 278 | RFx review — Terms and response instructions flow approved | The buyer reviews terms → deadline → submission → delivery → attachments/declarations → source → conflicts, then confirms the section; material gaps remain open |
| 279 | RFx review — Terms and response instructions layout approved | The section uses an ordered list of terms, deadline, submission, delivery, attachments, and declarations, with row-level source/status and focused detail on selection |
| 280 | RFx review — Terms and response instructions copy and UI approved | The section uses “Terms and response instructions,” “Confirm the conditions suppliers must follow,” ordered condition rows, row-level source/status, focused details, and explicit confirmation states |
| 281 | RFx review — Sources and evidence objective approved | The buyer verifies source relevance, exact supporting content, version/date, supported RFx sections, guidance, exclusions, conflicts, and field-level provenance |
| 282 | RFx review — Sources and evidence flow approved | The buyer reviews sources → actual content → evidence location → supported RFx sections → version/date → guidance/exclusions/conflicts, then confirms the source treatment |
| 283 | RFx review — Sources and evidence layout approved | The section uses a source list and coordinated evidence panel showing actual content, evidence location, supported RFx sections, guidance, exclusions, and conflicts |
| 284 | RFx review — Sources and evidence copy and UI approved | The section uses “Sources and evidence,” “Confirm what supports this RFx,” source-list fields, evidence-panel labels, source-treatment confirmation, and Needs review/Confirmed states |
| 285 | Guided-demo issue and source relevance correction recorded | The demo must contain a small set of scenario-relevant issues with prepared proposed treatments ready for buyer confirmation; policy and supporting documents must be generated from and validated against the actual demo scenario |
| 286 | Guided-demo scenario grounded in assignment brief | The guided demo uses corrugated packaging with 30 line items and five vendors, including the brief’s Excel, PDF, Word, angled phone-photo, shorthand email, partial-response, USD, unit-basis, buried-discount, and prior-year-reference conditions |
| 287 | Guided-demo asset/evaluation separation correction recorded | Demo source assets must contain realistic raw inputs and authoritative documents, while expected issues, treatments, and evaluation assertions remain in a separate harness unavailable to the agent and user-facing runtime |
| 288 | Guided-demo evaluation isolation principle recorded | Hidden evaluation truth must be protected by runtime access boundaries: the agent receives only approved runtime sources and tools, while assertions are loaded only by a separate evaluator after agent execution |
| 289 | Evaluation independence principle recorded | Evaluation must be derived from approved behavior contracts, generated scenario dimensions, and independently created ground truth; assignment examples are coverage inputs, not the evaluation schema or answer key |
| 290 | Asset-authoring leakage-prevention principles recorded | Runtime asset generation, agent execution, and evaluation authoring must have separate inputs, directories, schemas, prompts, and access boundaries; hidden truth must never be passed to, indexed for, or exposed through the runtime agent |
| 291 | Engine/evaluation independence principle recorded | The AI engine and evaluation harness must be separate consumers of the approved behavior contracts; evaluation must test the engine through its public behavior without importing its prompts, internal chain, scenario assumptions, or implementation-specific expectations |
| 292 | RFx review — Issues and assumptions objective approved | The guided demo presents realistic raw conditions for Aera to independently detect and analyze; the buyer sees evidence-backed proposed treatments and confirms, edits, or rejects them without inventing the answers |
| 293 | RFx review — Issues demo treatment controls corrected | In the guided demo, Confirm treatment remains enabled while Edit treatment and Reject treatment are disabled with direct limitation copy |
| 294 | RFx review — Issues demo treatment controls approved | The guided demo enables Confirm treatment and disables Edit treatment and Reject treatment with direct limitation messages |
| 295 | RFx review — Issues and assumptions layout approved | The section uses a detected-issues list and focused detail area showing impact, RFx content, evidence, policy basis, proposed treatment, source access, and demo action states |
| 296 | RFx review — Issues and assumptions copy and UI approved | The section uses “Issues and assumptions,” “Review Aera’s findings,” detected-issue states, evidence/policy/treatment detail, source access, and direct demo-disabled treatment actions |
| 297 | RFx review — Validation objective approved | The buyer verifies that the RFx follows applicable policy and format, contains required fields, gives suppliers usable instructions, and has no unresolved issue that prevents approval |
| 298 | RFx review — Validation flow approved | The buyer reviews grouped policy, format, field, and supplier-instruction checks, opens each result and basis, resolves failures in the relevant section, re-runs validation, and confirms readiness |
| 299 | RFx review — Validation action correction recorded | Validation is a system-generated result, not a separate buyer approval; the buyer reviews the result and then explicitly approves the RFx once applicable checks permit approval |
| 300 | RFx review — Validation behavior approved | Aera runs validation and shows its result and basis; the buyer resolves failures and uses the single distinct decision, Approve RFx, when applicable checks permit approval |
| 301 | RFx review — Validation ownership copy correction recorded | Validation copy must distinguish Aera’s system activity from the buyer’s review and approval responsibility |
| 302 | RFx review — Standalone Validation section removed | Validation is an internal readiness check after issue treatment, not a separate user-facing step; a passing result makes the RFx ready for the buyer’s single approval decision |
| 303 | Create-and-approve-RFx screen map corrected | The screen ends with issue treatment followed by an automatic readiness check and the buyer’s single RFx approval; the previously listed standalone Validation section is superseded |
| 304 | Create-and-approve-RFx screen synthesis audit — passed | The screen forms one buyer-led path from stating the need and grounding sources through RFx review, evidence-backed issue treatment, automatic readiness checking, and the single tangible outcome: approved RFx ready for supplier invitation |
| 305 | Invite-suppliers screen — invitation evidence access approved | The buyer can inspect the actual subject/body template and the inbox or repository source from which it was selected before confirming the invitation |
| 306 | Invite-suppliers demo-asset dependency recorded | The guided demo must include an inspectable invitation template and its source, with provenance and runtime links, before the screen is implemented |
| 307 | Invite-suppliers contact-evidence dependency recorded | The guided demo must include supplier contact records and the source evidence from which each contact was extracted, so the buyer can inspect provenance before confirming recipients |
| 308 | Invite-suppliers — recipient action states approved | Confirm recipients is enabled; Edit recipient, Remove recipient, and Add recipient are present but disabled for the guided demo with direct limitation messages |
| 309 | Invite-suppliers — invitation action states approved | Confirm invitation is enabled; Edit invitation is present but disabled for the guided demo with a direct limitation message |
| 310 | Invite-suppliers — send-package flow approved | The buyer reviews each supplier’s complete rendered package and confirms the packages for sending before the send action becomes available |
| 311 | Invite-suppliers — send-and-delivery objective approved | The buyer authorizes sending the confirmed invitation packages and sees the delivery outcome for each supplier, with authorization and delivery represented as separate states |
| 312 | Invite-suppliers — failed-delivery recovery approved | For a failed or bounced message, the system shows the failure reason, lets the buyer provide an alternative supplier email, validates its presence, and enables an explicit retry with a recorded outcome |
| 313 | Invite-suppliers — recipients layout approved | The section uses a recipient table, persistent contact-evidence detail panel, direct source access, disabled demo recipient-management actions, and enabled recipient confirmation |
| 314 | Invite-suppliers — invitation layout approved | The section uses a message review area, resolved recipient-specific fields, template/source evidence panel, direct artifact access, disabled demo editing, and enabled invitation confirmation |
| 315 | Invite-suppliers — send-package layout approved | The section uses a supplier-package table, rendered message and attachment detail panel, package-level statuses, direct artifact access, and explicit package confirmation |
| 316 | Invite-suppliers — guided-demo retry behavior approved | For a failed or bounced supplier message, the demo presents a prepared alternative email with provenance for buyer confirmation before retry; the buyer is not expected to enter the address from scratch |
| 317 | Invite-suppliers — recipients copy and UI approved | The section uses direct recipient-confirmation copy, supplier/contact/relevance/status fields, evidence labels, enabled confirmation, and explicit disabled-demo action messages |
| 318 | Invite-suppliers — invitation copy and UI approved | The section uses direct message-confirmation copy, subject/body and response fields, template/version/source provenance, direct artifact access, disabled demo editing, and enabled confirmation |
| 319 | Invite-suppliers — send-package copy and UI approved | The section uses direct package-review copy, supplier-level package fields, complete/needs-review/blocked statuses, direct artifact access, and explicit package confirmation |
| 320 | Invite-suppliers — send-and-delivery copy and UI approved | The section uses direct send/delivery copy, separate authorization and delivery states, per-supplier status fields, delivery evidence access, and explicit alternative-email retry behavior |
| 321 | Invite-suppliers screen synthesis audit — passed | The screen forms one buyer-led path from evidence-backed recipient confirmation through message and package confirmation, explicit sending authorization, per-supplier delivery outcomes, and concrete failed-delivery recovery; runtime demo assets remain an implementation prerequisite |
| 322 | Evaluate-responses screen objective approved | Help the procurement manager understand every supplier response in one comparable view, regardless of the format in which it arrived; the screen supports analysis and does not recommend an award |
| 323 | Evaluate-responses screen flow approved | The buyer moves from response intake and relevance association through extraction, mapping, normalization, exception review, side-by-side comparison, analysis questions, and explicit analysis completion; award recommendations remain outside the screen |
| 324 | Evaluate-responses screen layout approved | The screen uses a response-intake strip, side-by-side comparison workspace, persistent evidence panel, analysis area, and explicit analysis-completion action; award recommendation is excluded from the analysis workspace |
| 325 | Evaluate-responses screen boundary copy corrected and approved | The screen states directly: `This screen is for understanding the comparison, not choosing the award. Award recommendations come next.` |
| 326 | Evaluate-responses completion interaction approved | The buyer checks `I’ve reviewed the comparison, exceptions, and evidence.`; this acknowledgment unlocks `Continue to award decision` and does not constitute data approval or an award decision |
| 327 | Evaluate-responses screen synthesis audit — passed | The screen forms one bounded path from messy response intake through relevance, extraction, mapping, normalization, evidence-backed comparison, analysis, and buyer acknowledgment before entering award decision; award recommendation and selection remain excluded |
| 328 | Decide-and-defend-award screen objective approved | Help the procurement manager make an award or no-award decision and record the trade-offs, evidence, rationale, and approvals needed to defend it |
| 329 | Decide-and-defend-award flow and guided-demo controls approved | The system evaluates suppliers against approved RFx/policy criteria, supports a governed criteria-change path, and triggers the applicable approval matrix; in the guided demo, Change criteria and No award are present but disabled, while Approve award is enabled for the successful end state |
| 330 | Decide-and-defend-award — guided-demo rationale behavior approved | Aera prepares the buyer-facing award rationale; the buyer reviews and explicitly approves it, without being expected to write it from scratch; the approved rationale is saved with the award record |
| 331 | Decide-and-defend-award — copy and UI approved | The screen distinguishes decision criteria, Aera’s recommendation, trade-offs/evidence, the buyer’s approved rationale, authority, and final award approval; criteria change and no-award remain visibly disabled in the demo |
| 332 | Decide-and-defend-award screen synthesis audit — passed | The screen forms one buyer-led path from approved criteria through evidence-backed recommendation, explicit trade-offs, buyer-approved rationale, authority confirmation, and final award approval; the guided demo ends with an approved award |
| 333 | Cross-screen synthesis audit — passed | The journey preserves the approved RFx, recipient and message evidence, delivery outcomes, normalized comparison, analysis acknowledgment, criteria, recommendation, rationale, approvals, and final award record across the five screens; internal AI capabilities remain subordinate to the buyer-led transitions |
| 334 | Cross-screen state/data model objective approved | Define durable records and state transitions that carry the buyer’s work, evidence, approvals, and outputs across the sourcing journey |
| 335 | Cross-screen top-level record inventory approved | The model includes sourcing case, business need, sources, RFx versions, suppliers/contacts, invitation packages, supplier responses, comparison, analysis review, award decision, and audit records |
| 336 | Cross-screen record relationships approved | The sourcing case owns the workflow chain; outputs link to their source/version lineage; original responses remain preserved; comparisons and award decisions retain evidence and approval relationships |
| 337 | Evaluate-responses readiness acknowledgment corrected and approved | The buyer’s acknowledgment is enabled only after Aera verifies that the comparison and resulting analysis satisfy the approved RFx, policy, and comparison requirements for award recommendation; the transition state is `ready-for-award-recommendation` |
| 338 | Sourcing-case fields approved | The sourcing case stores immutable identity, title, owner, timestamps, derived stage/status, and links to the business need, active RFx, comparison, award decision, and audit history without duplicating child-record detail |
| 339 | Business-need fields approved | The business-need record preserves the verbatim request, requester/source reference, objective, requested items, structured facts, constraints, buyer guidance, interpretation state, unresolved questions, evidence links, versions, and confirmation metadata |
| 340 | Source fields approved | The source record preserves source identity, type, location, locator, relationships, origin, timestamps, version/integrity, raw and extracted content, case/stage-specific relevance assessments, and access history; filenames and folders are not authoritative |
| 341 | RFx-version fields approved | The RFx version preserves immutable identity/versioning, status, business-need and source lineage, format contract, scope, line items, questionnaire, terms, award criteria, issues/treatments, readiness result, rendered content, supersession, approval metadata, and content integrity |
| 342 | Supplier/contact fields approved | Supplier and contact records preserve identity, aliases, contact details, field-level provenance, RFx-specific relevance, verification, conflicts, selection, buyer confirmation, alternate contact candidates, and version history |
| 343 | Invitation-package fields approved | The invitation package preserves the exact RFx-bound recipient message, template/source, personalization, attachments, response instructions, check results, approvals, email path, send/delivery evidence, retry history, and versions |
| 344 | Supplier-response fields approved | The supplier-response record preserves RFx/supplier linkage, all source formats and threads, relevance, versions, raw content, extraction quality, mapped values, questionnaire answers, terms, attachments, normalization, exceptions, processing state, and history |
| 345 | Comparison fields approved | The comparison preserves RFx and response-set lineage, original and normalized values, conversion/rate provenance, deterministic calculations, questionnaire and document comparisons, exceptions, evidence, readiness, analysis state, versions, and history |
| 346 | Analysis-review fields approved | The analysis review preserves buyer questions, Aera answers, output types, evidence/calculation references, scope boundaries, unresolved interpretation items, readiness, buyer acknowledgment, status, and version history without approving or recommending an award |
| 347 | Award-decision fields approved | The award decision preserves complete lineage, award/no-award outcome, selected supplier, criteria snapshot, recommendation, evidence, trade-offs, overrides, rationale, approval matrix/status, authority, timestamps, rendered record, and version history |
| 348 | Audit-record fields approved | Audit records are append-only and preserve event identity/type, actor, action, target version, state transition, inputs, outputs, evidence, authorization, reason, timestamp, correlation, sequence, and integrity metadata |
| 349 | Cross-screen data-model synthesis audit — correction required | The audit found an ambiguous singular `audit_record_id` on the Sourcing case; the case needs a stable audit stream reference or a defined one-to-many audit-event relationship before the data model can pass synthesis |
| 350 | Audit relationship correction approved | The Sourcing case uses `audit_stream_id`; append-only Audit records retain `case_id`, `sequence_number`, and `correlation_id` so the complete chronological history is addressable |
| 351 | Cross-screen data-model synthesis audit — passed | The approved records have explicit relationships and cardinality, preserve original and derived data separately, retain version/provenance/approval lineage, support the screen states and handoffs, and address the complete audit stream through `audit_stream_id` |
| 352 | AI-behavior-contract objective approved | Define Aera’s allowed interpretation, extraction, generation, recommendation, and refusal behaviors per screen, including inputs, evidence, outputs, uncertainty, deterministic handoffs, and buyer decisions |
| 353 | Common AI-behavior-contract fields approved | Every AI behavior contract records its screen/step, user outcome, inputs, relevance boundary, AI operation, context, output, evidence, deterministic handoff, human decision, failure behavior, state permissions, audit event, and verification method |
| 354 | Business-need interpretation behavior objective approved | Aera converts the buyer’s procurement request into structured facts and a proposed interpretation without altering the original request or inventing missing information |
| 355 | Business-need interpretation behavior contract approved | Aera extracts and interprets case-specific need facts with field-level evidence, explicit missingness, buyer correction, schema validation, bounded state changes, and an auditable output; it cannot approve the RFx |
| 356 | Source-relevance behavior objective approved | Aera determines which policy, past RFx, template, email, and supporting sources are relevant to the current sourcing case and RFx step using content and relationships rather than filenames, folders, or sender names alone |
| 357 | Source-relevance behavior contract approved | Aera retrieves and ranks case/stage-relevant sources using content and relationships, exposes evidence and conflicts, preserves provenance, supports buyer selection, and never silently treats weak or inaccessible sources as evidence |
| 358 | Policy-clause applicability behavior objective approved | Aera identifies policy clauses applicable to the current sourcing case and RFx step and shows their conditions, authority, provenance, and operational requirements |
| 359 | Policy-clause applicability behavior contract approved | Aera retrieves and interprets case/stage-applicable policy clauses with exact provenance, conditions, authority, conflicts, gaps, bounded state changes, and buyer resolution without modifying policy or approving the RFx |
| 360 | RFx-format/field-semantics behavior objective approved | Aera determines what each RFx field means, how the business need maps to it, and what rules apply when no approved schema exists |
| 361 | RFx-format/field-semantics behavior contract approved | Aera extracts and proposes field semantics and mappings from approved schemas, policy, past RFxs, buyer guidance, and the business need; deterministic checks validate them, and a proposed schema requires buyer approval before activation |
| 362 | RFx-draft-generation behavior objective approved | Aera generates a complete RFx draft from the approved business-need interpretation, applicable policy, confirmed field semantics, and relevant supporting evidence while preserving provenance and unresolved issues |
| 363 | RFx-draft-generation behavior contract approved | Aera generates a sourced draft using approved inputs and field semantics, exposes field-level provenance and missingness, runs deterministic schema/rendering checks, preserves issues, and cannot approve or send the RFx |
| 364 | RFx-issue/assumption behavior objective approved | Aera identifies material issues and assumptions in the RFx and proposes evidence-backed treatments for the buyer to decide |
| 365 | RFx-issue/assumption behavior contract approved | Aera independently detects case-relevant issues and assumptions, proposes evidence-backed treatments, preserves hidden evaluation separation, and updates RFx review state only after the buyer’s permitted decision |
| 366 | RFx-readiness behavior objective approved | Aera determines whether the exact RFx version is ready for buyer approval after issue treatments are resolved |
| 367 | RFx-readiness behavior contract approved | Aera evaluates the exact RFx version against approved policy, format, field, supplier-instruction, and issue-treatment conditions; it exposes evidence and affected sections, gates approval, and cannot approve the RFx itself |
| 368 | Supplier-contact discovery behavior objective approved | Aera finds candidate supplier contacts for the approved RFx and shows why each contact is relevant, verified, and supported by source evidence |
| 369 | Supplier-contact discovery behavior contract approved | Aera retrieves and extracts evidence-backed supplier contacts from configured sources, assesses RFx-specific relevance and verification, surfaces conflicts and alternatives, and cannot send invitations or select recipients without buyer confirmation |
| 370 | Invitation-template behavior objective approved | Aera finds or prepares a message template for the approved RFx and renders it for each confirmed supplier while preserving source, instructions, and supplier-specific details |
| 371 | Invitation-template behavior contract approved | Aera retrieves or proposes invitation messages from approved RFx and relevant sources, renders supplier-specific fields, exposes provenance, runs deterministic message checks, and cannot send without buyer confirmation |
| 372 | Invitation-package completeness behavior objective approved | Aera verifies that each supplier will receive the correct recipient, message, RFx attachment, deadline, response instructions, and required materials before sending is authorized |
| 373 | Invitation-package completeness behavior contract approved | Aera explains package findings while deterministic checks produce per-supplier pass/fail results; failed packages cannot be confirmed or sent, and every result is evidence-linked and auditable |
| 374 | Send-and-delivery behavior objective approved | Send only buyer-confirmed invitation packages and record the provider-backed delivery outcome for each supplier |
| 375 | Send-and-delivery behavior contract approved | Deterministic sending uses only buyer-confirmed complete packages, records provider-backed per-supplier outcomes and retries, prevents duplicate/unauthorized sends, and leaves AI to explain rather than execute sending |
| 376 | Supplier-response association behavior objective approved | Aera determines whether an incoming email, attachment, file, or image belongs to this RFx and supplier, including responses arriving on a different email thread |
| 377 | Supplier-response association behavior contract approved | Aera proposes evidence-backed RFx/supplier associations across emails, alternate threads, files, attachments, and images; deterministic identity/duplicate handling preserves originals, and ambiguous matches require review |
| 378 | Supplier-response extraction behavior objective approved | Extract line-item offers, questionnaire answers, commercial terms, and supporting-document content from associated responses regardless of file format or image quality |
| 379 | Supplier-response extraction behavior contract approved | Aera extracts response content across supported formats with field-level locations and quality warnings; originals remain unchanged, missing/ambiguous values stay explicit, and corrections are reviewable and auditable |
| 380 | Supplier-response mapping behavior objective approved | Map each extracted supplier value and answer to the correct RFx line item, questionnaire question, or commercial-term field without losing original wording or evidence location |
| 381 | Supplier-response mapping behavior contract approved | Aera proposes evidence-linked mappings to the approved RFx fields; deterministic schema checks validate targets, ambiguous mappings require review, and the approved RFx schema remains unchanged |
| 382 | Supplier-response normalization objective corrected and approved | Normalize unambiguous values deterministically; apply applicable policy for ambiguous values; preserve originals and flag cases where no approved basis exists |
| 383 | Supplier-response normalization behavior contract approved | Aera classifies transformations by ambiguity; deterministic conversions run directly, policy-defined ambiguity follows policy, and policy-silent/conflicting cases preserve originals, remain visibly non-comparable, and are auditable |
| 384 | Response-exception behavior objective approved | Aera identifies missing, conflicting, late, incomplete, or non-comparable supplier information and shows the evidence and applicable basis for how each should affect the comparison |
| 385 | Response-exception behavior contract approved | Aera detects and explains comparison-relevant exceptions with evidence and policy basis; deterministic checks classify response conditions, preserve originals, and prevent unsupported comparability or silent treatment |
| 386 | Comparison-construction behavior objective approved | Build one side-by-side comparison from associated, extracted, mapped, normalized, and exception-reviewed supplier responses while preserving every value’s provenance |
| 387 | Comparison-construction behavior contract approved | Aera organizes the evidence-backed comparison while deterministic mechanisms assemble aligned rows, apply approved calculations, preserve originals, and keep incomplete or non-comparable data visible; it cannot recommend an award |
| 388 | Comparison-analysis behavior objective approved | Answer the buyer’s questions about supplier responses using the comparison, calculations, exceptions, and source evidence without turning the analysis into an award recommendation |
| 389 | Comparison-analysis behavior contract approved | Aera answers in-scope comparison questions with evidence, deterministic calculations, explicit limitations, and supported outputs; it refuses or redirects irrelevant and award-decision questions and cannot recommend or approve an award |
| 390 | Comparison-readiness behavior objective approved | Determine whether the comparison and resulting analysis satisfy the conditions required to begin award recommendation |
| 391 | Comparison-readiness behavior contract approved | Aera and deterministic checks evaluate comparison and analysis entry conditions against approved RFx, policy, evidence, exceptions, and calculations; only a ready result enables buyer acknowledgment and transition, never award recommendation or approval |
| 392 | Award-criteria behavior objective approved | Establish the criteria, weights, thresholds, disqualifiers, and evidence requirements that govern the award recommendation for this RFx |
| 393 | Award-criteria behavior contract approved | Aera retrieves and reconciles criteria from the approved RFx and policy, exposes provenance/conflicts, creates a versioned snapshot, and supports governed change without silently altering the approved RFx |
| 394 | Award-recommendation behavior objective approved | Recommend the supplier that best satisfies the approved award criteria and explain the recommendation with explicit trade-offs, risks, and provenance |
| 395 | Award-recommendation behavior contract approved | Aera proposes an evidence-backed supplier recommendation using the versioned criteria snapshot; deterministic mechanisms apply the criteria, and the proposal cannot approve the award or silently change the decision basis |
| 396 | Criteria-change/override behavior objective approved | Show the consequences of a buyer-proposed award-criteria change and route it through the required approval process before it can govern the final award; unavailable in the guided demo |
| 397 | Criteria-change/override behavior contract approved | Aera compares original and proposed criteria, recalculates impacts, surfaces evidence and policy conflicts, and routes permitted changes through the defined approval path without silently changing the active basis; demo controls remain disabled |
| 398 | Award-rationale behavior objective approved | Draft a concise rationale connecting approved criteria, supplier evidence, trade-offs, risks, and the selected award outcome for buyer review and approval |
| 399 | Award-rationale behavior contract approved | Aera drafts an evidence-linked rationale from the final criteria and outcome; deterministic checks test consistency and support fields, buyer approval makes it part of the decision record, and it cannot approve the award |
| 400 | Award-authority/approval behavior objective approved | Determine whether the proposed award has the required decision authority and approvals before enabling final award approval |
| 401 | Award-authority/approval behavior contract approved | Aera explains policy/RFx approval requirements while deterministic controls verify identity, authority, sequence, versions, and pending approvals; only authorized humans can approve the award |
| 402 | Final-award-record behavior objective approved | Record the authorized buyer’s final award approval and generate a complete, evidence-backed decision record that can be reviewed and defended later |
| 403 | Final-award-record behavior contract approved | Aera assembles the evidence-backed decision record while deterministic controls verify prerequisites, freeze exact versions, commit only an authorized human approval, and preserve an immutable audit trail |
| 404 | Cross-screen AI-behavior synthesis audit — passed | The approved behaviors form a bounded chain from need interpretation and source/policy grounding through RFx generation/readiness, supplier invitation, response association/extraction/mapping/normalization, comparison analysis/readiness, recommendation, rationale, authority, and final award recording; AI outputs, deterministic checks, buyer decisions, evidence, refusals, and state handoffs are distinct and traceable |
| 405 | Deterministic-mechanism contract objective approved | Define the deterministic mechanisms, tools, state changes, permissions, calculations, storage operations, rendering, sending, and human actions required to execute each approved behavior contract reliably |
| 406 | Common deterministic-mechanism contract fields approved | Every deterministic mechanism records its linked behavior, purpose, inputs/versions, operation, outputs, invariants, permissions, state transition, failure behavior, human handoff, audit event, and verification method |
| 407 | Source-access/retrieval mechanism objective approved | Retrieve content from configured inboxes and repository locations while enforcing access, preserving originals, and returning source identity and provenance for every result |
| 408 | Source-access/retrieval mechanism contract approved | Authorized retrieval preserves source identity, originals, versions, relationships, content hashes, and access evidence while explicitly handling absent, inaccessible, stale, and unsupported sources |
| 409 | Content-parsing/OCR mechanism objective approved | Convert supported emails, documents, spreadsheets, PDFs, scans, and images into structured content while preserving source locations and reporting extraction quality |
| 410 | Content-parsing/OCR mechanism contract approved | Deterministic parsers and OCR produce location-linked extracted content, preserve originals, distinguish native text from OCR, and expose unsupported, unreadable, and partial extraction states |
| 411 | Schema/type-validation mechanism objective approved | Verify that generated RFx fields and extracted supplier values conform to approved field definitions, types, requiredness, units, and allowed values before downstream use |
| 412 | Schema/type-validation mechanism contract approved | Deterministic validation checks exact schema-version conformance, preserves missingness and original values, identifies the failed field/rule, and gates downstream use where required |
| 413 | Calculation/conversion mechanism objective approved | Execute approved unit conversions, currency treatment, formulas, totals, and derived comparison values reproducibly while preserving inputs, rates, methods, and results |
| 414 | Calculation/conversion mechanism contract approved | Deterministic conversions and calculations use approved rules and recorded inputs, preserve originals and intermediate values, refuse unsupported transformations, and produce reproducible, auditable results |
| 415 | State-transition/permission mechanism objective approved | Enforce which actions are available at each workflow state, who may perform them, which versions they apply to, and which conditions must be satisfied before a transition occurs |
| 416 | State-transition/permission mechanism contract approved | Deterministic controls enforce contract-defined actions, actors, versions, dependencies, and atomic transitions; invalid, stale, unauthorized, or disabled actions are rejected with reasons and audited |
| 417 | Storage/versioning mechanism objective approved | Persist every source, generated artifact, derived result, approval, and audit event with stable identity, version lineage, retrieval access, and original-content preservation |
| 418 | Storage/versioning mechanism contract approved | Deterministic storage preserves originals, versions, lineage, hashes, permissions, and append-only events; substantive changes create new versions and persistence failures never masquerade as successful saves |
| 419 | Document-rendering/export mechanism objective approved | Render approved RFx, comparison, analysis, and award records into readable, correctly formatted artifacts without changing their content or evidence lineage |
| 420 | Document-rendering/export mechanism contract approved | Deterministic rendering produces readable PDFs and appropriate comparison/analysis exports from exact record versions, preserves evidence links, and rejects partial or stale artifacts as complete |
| 421 | Email-sending mechanism objective approved | Send the exact buyer-confirmed invitation package through the selected email path and capture provider send and delivery evidence |
| 422 | Email-sending mechanism contract approved | Deterministic sending verifies authorization and exact package version, invokes the selected provider, records provider-backed outcomes, prevents duplicate sends, and routes failed/bounced messages to explicit buyer-confirmed retry |
| 423 | Approval/immutable-commit mechanism objective approved | Commit only authorized buyer decisions after all required conditions pass, freeze exact versions used, and create the immutable final record and audit events |
| 424 | Approval/immutable-commit mechanism contract approved | Deterministic commit verifies prerequisites, authority, sequence, and exact versions, then atomically freezes the decision and creates immutable records and audit events |
| 425 | Cross-screen deterministic-mechanism synthesis audit — correction required | The audit found that deterministic comparison assembly was only described as a handoff inside the AI behavior contract; it needs its own mechanism contract for row/column alignment, inclusion, ordering, and preservation |
| 426 | Comparison-assembly mechanism correction approved | Comparison assembly is a separately reviewable deterministic mechanism covering response inclusion, RFx-line ordering, supplier columns, missingness, exception placement, original/normalized pairing, provenance, and versioned output |
| 427 | Comparison-assembly mechanism contract approved | Deterministic assembly creates versioned RFx-ordered rows and supplier columns, preserves original/normalized pairs and provenance, places exceptions correctly, and rejects misleading incomplete outputs |
| 428 | Cross-screen deterministic-mechanism synthesis audit — passed | The approved mechanisms explicitly cover retrieval, parsing/OCR, schema validation, calculations/conversions, comparison assembly, state/permissions, storage/versioning, rendering/export, email sending, and immutable approval commit; each AI handoff has a deterministic execution path, failure behavior, and audit trail |
| 429 | Verification/evaluation objective approved | Verify each AI behavior, deterministic mechanism, state transition, user-facing outcome, and complete sourcing journey while separating runtime demo assets from hidden evaluation truth |
| 430 | Verification/evaluation asset fields approved | Every verification asset records its linked contracts, purpose, inputs, runtime boundary, action, expected behavior/state, evidence, deterministic and human assertions, failure condition, evaluation method, pass criteria, result, and run metadata |
| 431 | Verification coverage structure approved | Verification covers deterministic mechanisms, AI behaviors, contract handoffs, workflows, UI journeys, demo-asset integrity, and end-to-end regression |
| 432 | Deterministic-mechanism test objective approved | Verify every deterministic mechanism produces correct, reproducible results and enforces its approved invariants and failure behavior independently of the AI |
| 433 | Source-retrieval test set approved | Tests cover configured and nested locations, inbox threads, attachments, misleading names, duplicates/supersession, access and format failures, boundary enforcement, and provenance preservation |
| 434 | Parsing/OCR test set approved | Tests cover email, spreadsheets, PDFs, Word documents, scans, low-quality images, attachments, partial readability, unsupported formats, duplicates, and precise original-content locations |
| 435 | Schema/type-validation test set approved | Tests cover requiredness, types, units, allowed values, duplicate/unmapped fields, stale or changed schemas, missingness, and ambiguous semantics |
| 436 | Calculation/conversion test set approved | Tests cover deterministic units, ambiguous bases, fixed/dynamic currency policy, missing policy/rates, commercial adjustments, tax differences, rounding, precision, reproducibility, and preserved inputs |
| 437 | Comparison-assembly test set approved | Tests cover RFx ordering, supplier columns, partial and varied-format responses, missingness, original/normalized pairing, exception placement, questionnaire/document alignment, duplicates, wrong associations, conflicts, versions, and provenance |
| 438 | State/permission test set approved | Tests cover invalid and unauthorized actions, stale versions, unresolved gates, disabled demo controls, duplicate approvals/sends, distinct buyer/AI permissions, atomic commits, and audit events |
| 439 | Storage/versioning test set approved | Tests cover original preservation, derived lineage, new-version creation, approved-artifact immutability, failed writes, nested retrieval, duplicates, supersession, append-only audit, and access denial |
| 440 | Rendering/export test set approved | Tests cover readable RFx PDFs, long content, pagination, questionnaire/instructions, five-supplier comparisons, original/normalized values, exceptions, charts, CSV/XLSX, award records, evidence links, and version fidelity |
| 441 | Email-sending test set approved | Tests cover authorization, exact package/version, supplier-specific rendering, provider outcomes, pending/failure/bounce states, prepared retry, duplicate prevention, partial failure, package changes, and unauthorized retry |
| 442 | Approval/commit test set approved | Tests cover RFx and comparison gates, rationale and authority requirements, version invalidation, missing evidence, atomic commits, duplicate approvals, immutable records, and complete audit creation |
| 443 | AI behavior test set approved | Black-box tests cover extraction, relevance, policy applicability, schema semantics, issue detection, unsupported fallback, response association, image extraction, mapping, normalization, scope boundaries, recommendation readiness, criteria changes, rationale support, and hidden-evaluation isolation |
| 444 | Contract-handoff test set approved | Tests verify that each workflow output supplies the next step with the required records, versions, evidence, states, and approvals, from business need through immutable award record |
| 445 | Workflow test set approved | Tests cover the successful demo path, RFx/policy/schema gaps, contact and delivery failures, partial or poor-quality responses, normalization gaps, comparison readiness, scope boundaries, criteria overrides, authority, version changes, and atomic award commitment |
| 446 | UI-journey test set approved | Tests cover guided-demo entry, screen purpose/sequence, prepared content, evidence access, disabled actions, readiness gates, retry path, comparison boundaries, award controls, and successful final approval |
| 447 | Demo-asset integrity test set approved | Tests cover viewable scenario sources, contact/template provenance, five suppliers, 30 line items, questionnaire, varied attachments, delivery evidence, award basis, runtime/evaluation isolation, source links, and version consistency |
| 448 | End-to-end regression test set approved | Tests cover the successful guided demo, resume behavior, version changes, delivery retry, varied responses, normalization updates, analysis gating, criteria changes, final immutability, evidence chains, regression runs, and evaluation isolation |
| 449 | Verification/evaluation synthesis audit — correction required | Test categories are defined, but an explicit contract-to-test traceability matrix is still required to prove complete coverage of every approved behavior, mechanism, handoff, failure path, and user outcome |
| 450 | Contract-to-test traceability correction approved | Verification must map every approved AI behavior, deterministic mechanism, state transition, handoff, failure/recovery path, and user outcome to explicit tests with coverage status and applicable success/failure assertions |
| 451 | Contract-to-test traceability matrix structure approved | The matrix records contract type/ID, screen/step, linked tests, success/failure/handoff/user-outcome coverage, evidence assertion, status, gaps, and last verification run |
| 452 | Contract-to-test traceability matrix populated | `docs/CONTRACT_TEST_TRACEABILITY.md` maps all 35 approved behavior and mechanism contracts to explicit verification assets; coverage is currently `Planned` because execution has not begun |
| 453 | Contract-to-test traceability audit — passed with execution pending | All 35 mapped contracts have linked test IDs and non-empty success, failure/recovery, handoff/user-outcome, and evidence assertions; no coverage gap was found at specification level, but no test result is claimed until execution |
| 454 | Final implementation-readiness audit — correction required | Implementation is blocked by three concrete gaps: required inspectable demo assets are absent, the current UI does not implement the approved screen contracts, and verification tests are specified but not implemented or executed |
| 051 | Stage 1 reopened | Primary user and first tangible outcome changed; prior Stage 1 approval is superseded and requires re-audit |
| 052 | Revised Stage 1 drafted | Procurement-manager-led intake combines need capture, context grounding, policy use, and format mapping to produce a draft RFx |

The earlier error numbering E-001 through E-034 remains unchanged. E-035 is the ledger-structure correction recorded here.

This is the canonical record of decisions and reasoning failures for the re-approach of the sourcing workflow.

The ledger is part of the working specification. It prevents approved decisions, rejected assumptions, and corrected principles from being lost as the collaboration grows.

## Ledger rules

1. Approved decisions are recorded verbatim or as a faithful synthesis of the user's approval.
2. Error IDs are chronological and immutable. They are never reordered by conceptual importance.
3. An error entry records both the incorrect principle and the incorrect outcome it produced.
4. Conceptual relationships belong in a separate field; they must not change chronological numbering.
5. A step advances only after its dependencies are resolved and the user explicitly approves it.
6. A proposal, inference, or acknowledged gap is not an approved rule.
7. No implementation begins until the alignment sequence is complete and explicitly authorized.

## Approved decisions

### Step 1 — Project-level objective

**Status:** Approved

> Make and defend the best-supported supplier decision for a business requirement.

### Step 2 — Top-level workflow

**Status:** Approved

1. Understand and frame the business need.
2. Gather relevant organizational context.
3. Make the requirement quoteable.
4. Invite suitable suppliers.
5. Receive and understand supplier responses.
6. Compare offers fairly.
7. Make and defend the supplier decision.

### Step 3 — Stage 1 objective

**Status:** Approved

> Establish a shared, sufficiently clear understanding of what the business needs to source.

### Step 4 — Policy authority and evidence path

**Status:** Approved

> Establish the authoritative basis for determining whether a procurement stage is complete.

The policy-resolution hierarchy is:

1. Use an existing organizational procurement policy, confirmed by the procurement manager.
2. If no such policy document exists, use relevant past RFQs to construct a proposed policy.
3. If no past RFQs exist, construct a proposed policy from internal training knowledge.
4. At every branch, allow the procurement manager to provide guidance, corrections, constraints, or additional context alongside the available source.
5. Clearly label inferred or generated policy, including its assumptions, provenance, and user-provided guidance.
6. Seek explicit approval from the procurement manager before any inferred or generated policy governs workflow progression.

The procurement manager is the head pilot. The AI is the co-pilot: it retrieves, organizes, drafts, explains, and surfaces uncertainty, while the user may guide the work at any point rather than only at a final approval step.

This is a capability maturity path, not a promise that generic model knowledge can safely produce enterprise policy:

- **Level 1 — Day-one capability:** use an existing organizational policy as provided and confirmed by the authorized procurement user.
- **Level 2 — Proposed extension:** use a custom model trained and evaluated on high-quality procurement policies and past RFQs to draft policy from relevant historical RFQs, with user guidance and explicit approval.
- **Level 3 — Later extension:** generate a policy proposal when no past RFQs are available, subject to separate enterprise validation, stronger guardrails, and explicit approval.

Level 3 is not part of the day-one product capability and must not be represented as production-safe by default.

**Dependency:** Step 5 cannot be finalized until this authority and evidence path is applied to the stage-completion rules.

### Step 5 — Stage 1 completion contract

**Status:** In progress — completion definition approved; conditions and gate behavior pending

This draft translates Step 4's approved authority path into a reviewable contract. The conditions below are agent proposals, not approved organizational rules.

#### Proposed completion definition

Stage 1 is complete when the requester and procurement manager can confirm that the business need itself has been sufficiently understood and faithfully captured, with no unresolved critical ambiguity about the intended business outcome or the broad need being expressed.

**Definition status:** Approved by the user. This approval applies only to the definition above, not to the conditions, state model, blocking behavior, or exception rules below.

The condition that the business outcome must be stated in plain language is currently treated as a **derived operationalization** of “the intended business outcome ... has been sufficiently understood,” not as a separate decision to burden the user with. It remains subject to policy validation when the full contract is reviewed.

This does not mean that the requirement is quoteable or that organizational context has already been gathered. Those are later workflow objectives. Stage 1 may identify context that must be gathered in Stage 2 without prematurely resolving it.

#### Proposed conditions

| Condition | Minimum evidence | If missing or ambiguous | Proposed gate | Source status |
|---|---|---|---|---|
| Business outcome is stated | A plain-language description of the business need and intended outcome | Ask for clarification; record the ambiguity | Blocking if the outcome cannot be determined | Agent proposal |
| Scope and boundaries are stated | What is in scope, what is out of scope, and the relevant category or service | Ask the requester to define or confirm boundaries | Blocking if different interpretations would change supplier suitability | Agent proposal |
| Demand is represented | Known quantity, frequency, sites, service period, or an explicit statement that the value is not yet known | Mark unknown, identify the owner, and define when it must be resolved | Blocking only when the unknown materially affects supplier responses or comparability | Agent proposal |
| Required outcomes are separated from preferences | Must-have outcomes/constraints distinguished from desirable features | Ask the requester to classify the item | Blocking when a preference could be mistaken for a mandatory requirement | Agent proposal |
| Key stakeholders and decision ownership are known | Requester, business owner, and procurement decision owner identified or explicitly marked pending | Record the missing owner and route for confirmation | Blocking if nobody can confirm the need or approve an exception | Agent proposal |
| Material constraints are surfaced | Known timing, location, compliance, budgetary, operational, or risk constraints, or explicit unknowns | Record as an open issue with owner and resolution point | Blocking when the constraint could invalidate the sourcing path | Agent proposal |
| Open issues are dispositioned | Each material ambiguity is resolved, accepted as a controlled unknown, or assigned an owner and due point | Keep the stage in an unresolved state | Blocking for unowned or decision-critical issues | Agent proposal |
| The requirement summary is confirmed | Requester confirms that the summary faithfully represents the business need | Return to clarification | Blocking until confirmed | Agent proposal |

#### Proposed state model

- `draft`: information is being collected.
- `needs-clarification`: one or more material issues require requester input.
- `controlled-unknowns`: an unknown is recorded with an owner, impact, and resolution point.
- `ready-for-context`: the completion conditions are met or an approved policy permits the controlled unknowns.
- `blocked`: a decision-critical issue is unresolved, unowned, or contradicted by authoritative policy.
- `undetermined`: the governing policy or authority is not available or approved, so the gate cannot be evaluated.

#### Proposed evidence and approval rule

Each condition must be evaluated against the Step 4 hierarchy:

1. An organizational procurement policy governs if it exists and the procurement manager confirms it applies; user guidance may clarify or constrain its interpretation.
2. A rule inferred from past RFQs remains a proposal until explicitly approved; user guidance may be supplied before, during, or after that inference.
3. A rule generated without past RFQs is a later product extension, not a day-one fallback; it requires separate validation and must remain unavailable or explicitly experimental until that validation exists.
4. If the applicable authority cannot be established, the result is `undetermined`; the agent must not label the stage complete.

#### Approval required

The procurement manager must review:

1. whether the proposed conditions cover what “sufficiently clear” means in their organization;
2. which conditions are always blocking;
3. which unknowns may be controlled rather than resolved before proceeding;
4. who may approve exceptions; and
5. whether the proposed state model matches the organization's operating language.

Until the remaining conditions and gate behavior are reviewed and approved, this remains a partial draft contract and cannot govern workflow progression.

#### Concrete Step 5 draft for review

The product should evaluate Stage 1 in this order:

| Situation | Proposed Stage 1 result | System behavior |
|---|---|---|
| The requester has not explained the business outcome | Not complete | Ask what business result is needed and why the purchase is being considered |
| The business outcome is clear, but the broad thing to be sourced is unclear | Not complete | Show the competing interpretations and ask the requester to choose or clarify |
| The business outcome and broad need are clear, but detailed specifications are still missing | Complete for Stage 1; continue to Stage 2 | Record the missing details for organizational-context gathering; do not pretend the requirement is quoteable yet |
| A missing detail could change what category of supplier is suitable | Not complete | Ask for that detail before closing Stage 1 |
| There are multiple plausible interpretations of the need | Not complete | Present the interpretations and ask the requester to resolve the difference |
| The need is clear but the requester has not confirmed the written summary | Not complete | Show the summary and request confirmation or correction |
| The policy source is unavailable and no inferred/generated policy has been approved | Undetermined | Explain that the gate cannot be evaluated and route the proposed policy for approval |
| The need is clear and the applicable policy or approved proposal permits the remaining unknowns | Complete for Stage 1 | Close Stage 1 and carry the recorded unknowns into Stage 2 |

#### Proposed Stage 1 conditions derived from the approved definition

Stage 1 passes only when all of the following are true:

1. The intended business outcome is stated.
2. The broad need being sourced is identifiable.
3. The boundaries of that broad need are sufficiently clear to avoid materially different interpretations.
4. Any ambiguity that could change the type of supplier or solution being sought is resolved or handled according to an approved policy.
5. The requester confirms that the written summary faithfully represents the need.
6. The applicable policy authority is known, or a fallback policy proposal has been explicitly approved by the eventual procurement authority.

Detailed specifications, quantities, units, delivery dates, locations, commercial terms, and questionnaire answers are not automatically Stage 1 blockers. They become blockers only when their absence prevents the business need itself from being understood or when the applicable approved policy says they are required at this stage.

#### Concrete review requested

Review whether the table correctly separates information required to understand the business need now from information that may be gathered or made quoteable in later stages. This is a product-behavior review, not a request for the product manager to certify procurement policy.

## Chronological error register

### E-001 — Silent assumption about completeness authority

**When identified:** During the initial definition of Stage 1 completion.

**Incorrect principle applied:**

> A plausible workflow definition can be used to define what “complete” means.

**Incorrect outcome:** A Stage 1 completion definition was proposed without first establishing who or what had authority to determine completeness.

**Why it was wrong:** Completeness is a normative gate, not a descriptive observation. It requires an authoritative policy, an approved proxy, or an explicitly approved proposal.

**Corrected principle:** Every gate must have an identified authority and evidence basis. If the basis is missing, the state is undetermined—not complete, incomplete, or ready.

**Correct outcome:** Establish policy authority and the evidence path as Step 4 before defining the completion contract as Step 5.

**Related principles:** normative gates; provenance; known versus inferred versus proposed versus approved.

### E-002 — Advancing by conversational sequence

**When identified:** When “Step 5” was introduced while the prerequisite governing Step 4 was unresolved.

**Incorrect principle applied:**

> Once a gap has been identified and discussed, the conversation can advance to the next numbered step.

**Incorrect outcome:** Step 5 was introduced before Step 4 had been resolved and approved.

**Why it was wrong:** Conversation progression was mistaken for requirement resolution.

**Corrected principle:** Progression is governed by dependency state and explicit approval, not by conversational order.

**Correct outcome:** Step 4 remains active until its authority and evidence basis are approved; no dependent step begins before then.

**Related principles:** dependency-first sequencing; explicit sign-off.

### E-003 — Patching an invalid step instead of resequencing

**When identified:** When the authority question was retained as a sub-point of the existing Step 4.

**Incorrect principle applied:**

> Preserve the existing step number and add a newly discovered prerequisite inside it.

**Incorrect outcome:** The old completion-contract Step 4 was retained, with policy authority added as a sub-point.

**Why it was wrong:** The existing step depended on the newly discovered prerequisite and therefore could not remain at the same position.

**Corrected principle:** When a prerequisite is discovered, create it as an independent earlier step and renumber all dependent steps.

**Correct outcome:** Step 4 establishes policy authority; the former completion-contract step becomes Step 5.

**Related principles:** dependency graph over labels; invalidation and resequencing.

### E-004 — Narrow fallback for missing organizational policy

**When identified:** When the absence of a policy document was reduced to a choice about creating a prototype policy.

**Incorrect principle applied:**

> If organizational policy is unavailable, ask whether to create an explicit prototype policy.

**Incorrect outcome:** The proposed fallback skipped historical RFQs, procurement-manager guidance, provenance, and the possibility of generating a proposal from internal training knowledge only after those sources were exhausted.

**Why it was wrong:** It treated missing documentation as a binary choice instead of a real-world evidence-resolution problem.

**Corrected principle:** Resolve missing authority through a provenance-aware fallback ladder: existing policy, then confirmed historical proxies plus user guidance, then model-generated proposal. Inferred or generated policy requires explicit approval before use.

**Correct outcome:** Step 4 now defines a general policy authority and evidence path rather than assuming a prototype policy.

**Related principles:** source hierarchy; policy proxies; provenance; explicit approval.

### E-005 — Conflating stage completion with next-stage readiness

**When identified:** When the proposed Stage 1 completion definition said that the need must be sufficiently understood “to proceed to gathering organizational context.”

**Incorrect principle applied:**

> A stage's completion definition should be expressed primarily as readiness to enter the next stage.

**Incorrect outcome:** The Stage 1 contract made gathering organizational context appear to be the reason or condition for completing Stage 1, even though gathering context is the separate objective of Stage 2.

**Why it was wrong:** It blurred the boundary between understanding the business need and gathering organizational context. It also risked pulling later-stage requirements into the Stage 1 gate.

**Corrected principle:** Define each stage's completion contract against that stage's own objective. Define transition readiness separately, and do not use the next stage's activity as a hidden completion criterion.

**Correct outcome:** Stage 1 only establishes that the business need itself is sufficiently understood and faithfully captured. It may record context dependencies for Stage 2 without requiring them to be resolved in Stage 1.

**Related principles:** stage-boundary integrity; objective versus transition condition; no hidden downstream gates.

### E-006 — Asking the user to approve an obvious derived implication

**When identified:** When the user was asked whether stating the business outcome should be a mandatory condition immediately after approving a definition that explicitly requires the intended business outcome to be understood and captured.

**Incorrect principle applied:**

> Every individual operationalization should be presented as a separate user decision.

**Incorrect outcome:** The user was asked to approve a low-level consequence that could have been derived from the already approved definition.

**Why it was wrong:** It increased cognitive load without exposing a genuine policy choice. It also confused “derived from the approved objective” with “requiring new user judgment.”

**Corrected principle:** Derive mechanically implied conditions internally, show their rationale and provenance, and ask the user only about irreducible judgments such as materiality thresholds, blocking behavior, authority, or exception rights.

**Correct outcome:** Present a synthesized contract for review, with only the decisions that cannot be derived clearly from approved objectives, policy, or evidence isolated for user input.

**Related principles:** minimum cognitive load; derived versus discretionary decisions; attention allocation.

### E-007 — Asking for an abstract threshold instead of presenting concrete cases

**When identified:** When the user was asked to define what kinds of ambiguity would “materially change the business need.”

**Incorrect principle applied:**

> Ask the user to define the abstract boundary before presenting the operational cases governed by that boundary.

**Incorrect outcome:** The user was given an abstract policy question and was expected to translate it into procurement behavior without seeing concrete examples, proposed classifications, or consequences.

**Why it was wrong:** It increased cognitive load and moved the reasoning burden to the user. It also departed from the effective Step 4 interaction pattern, where the real-world evidence path and fallback behavior were made concrete before approval was requested.

**Corrected principle:** Elicit judgment at the altitude of the user's actual work. First show representative procurement cases, classify each as blocking, controlled unknown, or non-blocking, state the consequence of each classification, and ask only for the boundary that remains genuinely discretionary.

**Correct outcome:** The next Step 5 review must present concrete sourcing examples such as an unknown quantity, delivery date, product specification, site, or compliance requirement, with proposed treatment and rationale. The user should approve or correct the treatment rather than define an abstract threshold from scratch.

**Related principles:** concrete-before-abstract; case-grounded elicitation; minimize translation burden; user judgment at the decision boundary.

### E-008 — Failing to state the deliverable and roles before requesting review

**When identified:** When the user still did not understand what was expected of them or what the immediate objective was after the proposed case-grounded review was described.

**Incorrect principle applied:**

> Explaining the next reasoning technique is sufficient for the user to understand the collaboration task.

**Incorrect outcome:** The user was told how the next review should work but was not told clearly what artifact would be produced, what the agent would decide, what the user would review, or what response was expected.

**Why it was wrong:** It made the user reconstruct the operating contract from process language. That violates the minimum-cognitive-load requirement.

**Corrected principle:** Before every review, state four things explicitly: the objective, the deliverable, the agent's responsibility, and the user's single review action. Do not ask the user to design the framework when the agent can draft it.

**Correct outcome for Step 5:** The agent drafts a concrete case table for the Stage 1 gate. The procurement manager only accepts or corrects the proposed treatment of each case; they do not define “critical ambiguity” from scratch.

**Related principles:** explicit collaboration contract; agent-owned synthesis; user-owned organizational judgment; minimum cognitive load.

### E-009 — Assigning the user an unprovided domain-expert role

**When identified:** When the user was told to act as the procurement manager and validate whether proposed classifications matched organizational procurement practice.

**Incorrect principle applied:**

> The person guiding the product design can be treated as the domain SME whose approval establishes domain truth.

**Incorrect outcome:** The user, who is a product manager designing AI workflows for clients across industries, was assigned the role of procurement manager and asked to validate procurement policy decisions they had not claimed authority or expertise to make.

**Why it was wrong:** It conflated product-design authority with domain-policy authority. It also ignored the explicit Step 4 if/else flow, which defines what to do when an organizational policy or SME is available, unavailable, or must be inferred.

**Corrected principle:** Establish role and authority explicitly. The user is the product owner and workflow-design approver, not an assumed domain SME. Domain truth must come from the approved evidence hierarchy: confirmed organizational policy, relevant historical proxies plus supplied guidance, or a clearly labelled model proposal requiring client-side SME approval.

**Correct outcome:** The agent must design the policy-resolution and review workflow for the eventual procurement manager or client SME. The user reviews whether the product behavior faithfully implements that workflow, not whether an unsupported procurement classification is true in their organization.

**Related principles:** role-authority separation; no persona substitution; domain evidence over conversational authority; product approval versus policy approval.

### E-010 — Misreading a product-design fallback as a policy dependency

**When identified:** When the user's policy-resolution if/else example was interpreted as an approved binding branch structure that Step 5 had to mechanically propagate.

**Incorrect principle applied:**

> A user's example of how to reduce domain-expert effort should be treated as an already-approved policy-resolution dependency rather than as product-design reasoning to be understood and refined.

**Incorrect outcome:** The response over-focused on preserving the if/else branches as formal constraints and again implicitly positioned the user as the person who would validate procurement policy.

**Why it was wrong:** The user's actual point was about designing a low-cognitive-load experience for the eventual procurement manager: use existing policy where available, use past RFQs as practical proxies where policy is absent, and use a model-generated suggestion as the final fallback. The user was designing the product behavior, not claiming to be the procurement SME.

**Corrected principle:** Interpret user-provided examples at the level of intent first. Separate the product designer's proposed assistance strategy from the domain authority who must approve the resulting policy. A fallback that reduces SME effort is a product behavior, not automatically a policy rule.

**Correct outcome:** The system should guide the procurement manager through an evidence-based policy-resolution path:

1. Prefer an existing policy document.
2. If unavailable, use past RFQs and available user guidance to construct a draft.
3. If those are unavailable, offer a model-generated draft as the lowest-effort fallback.
4. Route the draft to the actual procurement manager or client authority for explicit approval.

The product manager reviews whether this workflow reduces cognitive load and preserves authority boundaries; they are not asked to certify procurement truth.

**Related principles:** intent-level interpretation; product authority versus domain authority; cognitive-load reduction; policy proposal versus policy approval.

**Correction to prior takeaway:** The earlier statement that “approved branches were not propagated into the dependent step” was itself incorrect and is superseded by this entry. The user's if/else flow was a reference for solution design, not a previously approved formal dependency.

**Correction status:** Approved by the user. The product-design intent, agent responsibility, and domain-approval responsibility are now separated as described above.

### E-011 — Replacing the concrete next step with meta-process language

**When identified:** When the user asked what was next and the response explained objectives, roles, deliverables, and assumptions instead of simply stating the next step and using the input already provided.

**Incorrect principle applied:**

> More explicit process framing always reduces ambiguity.

**Incorrect outcome:** The interaction became abstract and repetitive. The user was asked to reason about how the collaboration should work rather than reviewing the next concrete workflow step.

**Why it was wrong:** The working protocol was already established. Re-explaining it displaced the actual task and increased cognitive load.

**Corrected principle:** At each point, state the current step in plain language, use all already-approved input, make the necessary change or draft, and ask only for the one concrete review needed to proceed. Do not re-open the collaboration protocol unless a real ambiguity affects the product decision.

**Correct outcome:** The next action is to draft Step 5 using the approved Stage 1 definition and policy-resolution approach. The user reviews that concrete draft; they are not asked to define the process for creating it.

**Related principles:** direct progression; use prior input; no unnecessary meta-process; atomic review.

### E-012 — Repeating generic review requests after the user supplied sufficient input

**When identified:** When the user still did not know what was expected after being asked to review whether the Step 5 table made the correct distinction.

**Incorrect principle applied:**

> Presenting a broad artifact and asking “is this correct?” is an atomic review request.

**Incorrect outcome:** The user was repeatedly asked to review an entire abstract model without a specific decision, correction, or missing input being identified.

**Why it was wrong:** The user had already supplied the product-design logic needed for the next draft. The agent was responsible for synthesis. A generic review request shifted that work back to the user and recreated the meta-processing loop.

**Corrected principle:** If the user has supplied sufficient input, the agent must perform the synthesis and move the step forward. Ask for user input only when a specific unresolved decision cannot be derived from the approved material; phrase that request as a concrete case or change, never as a broad validation question.

**Correct outcome:** No further generic review question is required now. Step 5 should be treated as an agent-owned draft based on the approved definition and fallback strategy. Any later question must identify one exact behavior that remains unresolved.

**Related principles:** agent-owned synthesis; sufficient-input detection; specific review over broad validation; stop-loop rule.

## Current state

- Steps 1–4: approved.
- Step 5: in progress; completion definition approved, contract draft prepared, remaining gate behavior not approved.
- Chronological errors E-001 through E-013: recorded and closed as learning entries.
- Implementation: not authorized during alignment.

## Navigation snapshot

This snapshot must be updated whenever the active step changes. It exists so local discussion cannot erase the larger sequence.

### Approved steps

#### Step 1 — Project-level objective

Make and defend the best-supported supplier decision for a business requirement.

#### Step 2 — Top-level workflow

1. Understand and frame the business need.
2. Gather relevant organizational context.
3. Make the requirement quoteable.
4. Invite suitable suppliers.
5. Receive and understand supplier responses.
6. Compare offers fairly.
7. Make and defend the supplier decision.

#### Step 3 — Stage 1 objective

Establish a shared, sufficiently clear understanding of what the business needs to source.

#### Step 4 — Policy authority and evidence path

Establish the authoritative basis for determining whether a procurement stage is complete:

- use confirmed organizational policy when available;
- otherwise use past RFQs plus user guidance to construct a proposed policy;
- otherwise construct a model-generated proposal;
- obtain explicit approval from the eventual procurement authority before inferred or generated policy governs.

### Current step

**Step 5 — Define the Stage 1 completion contract.**

### Why Step 5 is next

Step 3 defines what Stage 1 is trying to accomplish. Step 4 defines whose policy or evidence can decide whether it has been accomplished. Step 5 now turns those two decisions into observable completion conditions and system behavior.

### Agent knowledge for Step 5

The agent knows:

- the Stage 1 objective;
- the approved definition of completion;
- the policy/evidence fallback path;
- the separation between product-manager authority and procurement-SME authority;
- that later-stage quoteability details must not be silently pulled into Stage 1.

The agent does not know any client's actual procurement policy. Therefore, client-specific rules must remain configurable or approval-dependent.

### Proposed action for Step 5

The agent will produce a concrete, implementation-neutral contract that:

1. identifies what evidence shows the business need is understood;
2. distinguishes Stage 1 blockers from information that belongs in later stages;
3. handles unresolved information as not complete, controlled unknown, or undetermined;
4. applies the Step 4 evidence path without treating the product manager as the procurement SME; and
5. records the result as a proposed product behavior until client policy authority approves any organization-specific rules.

### E-013 — Losing the project map during local step discussion

**When identified:** After the extended Step 5 discussion, when the user could no longer see the four approved steps, the active step, why it was next, or what the agent knew and proposed doing.

**Incorrect principle applied:**

> Focus on the current atomic question without repeatedly restating the larger decision sequence.

**Incorrect outcome:** Local attention was preserved, but global context was lost. The user could not tell how the current discussion related to the approved workflow or what would happen next.

**Why it was wrong:** Atomic focus and persistent navigation are both required. One cannot be optimized by removing the other.

**Corrected principle:** Every step interaction must carry a compact navigation snapshot: approved prior steps, current step, why it is next, known inputs, unknowns, proposed action, and completion status.

**Correct outcome:** Maintain the navigation snapshot above and include it whenever the active step changes or the discussion has materially expanded.

**Related principles:** local attention plus global continuity; persistent state; context preservation; explicit next-step rationale.

### E-014 — Stating the next action without its importance

**When identified:** When Step 5 was described as converting the approved inputs into concrete conditions and system behavior without explaining why that work matters.

**Incorrect principle applied:**

> Naming the next deliverable is sufficient to establish why the step should be taken.

**Incorrect outcome:** The user was told what would be produced, but not what problem the step solves or what risk exists if it is skipped.

**Why it was wrong:** Without the importance, the step sounds like implementation activity. The user cannot judge whether it is the logical next move or understand its relationship to the procurement outcome.

**Corrected principle:** Every step announcement must state: what the step is, why it matters now, what risk it prevents, and what will be produced. The “why” must be tied to the approved objective, not to the mechanics of the tool.

**Correct outcome for Step 5:** Define the completion contract so the workflow does not either advance with an incompletely understood business need or overburden the requester by demanding quote-ready detail too early. This creates a defensible boundary between “understood enough to continue” and “not yet understood enough to proceed.”

**Related principles:** why-before-what; stage-gate rationale; risk-based sequencing; objective over implementation.

### E-015 — Calling an unapproved boundary defensible

**When identified:** When Step 5 was described as creating a “defensible boundary” before its authority and evidence basis had been established.

**Incorrect principle applied:**

> A boundary is defensible because it is logically sensible and clearly documented.

**Incorrect outcome:** The wording implied that the agent could establish the authoritative threshold for Stage 1 completion from its own reasoning.

**Why it was wrong:** Defensibility requires more than internal coherence. It requires an identified authority, a source of evidence, explicit assumptions, and approval where the rule is inferred or generated.

**Corrected principle:** Never describe a proposed rule or boundary as defensible until its authority, evidence basis, scope, and approval status are explicit.

**Correct outcome:** At this point, Step 5 can define a **candidate boundary** and the mechanism for resolving it. The actual boundary must come from confirmed organizational policy, or from a proposed policy built through the Step 4 fallback path and approved by the eventual procurement authority.

**Related principles:** authority before defensibility; evidence-backed claims; proposal versus approved rule; provenance.

### E-016 — Deadlocking design work on unavailable runtime policy

**When identified:** When the Step 5 discussion became a loop because the actual organizational procurement policy was not available, yet the process was trying to finalize the policy-dependent boundary before proceeding.

**Incorrect principle applied:**

> Complete every policy decision during design-time alignment before designing or specifying any dependent behavior.

**Incorrect outcome:** The work became stuck in meta-processing. The agent repeatedly asked for authority or approval that could not exist in this collaboration because the user is a product manager and no client procurement SME or policy document was available.

**Why it was wrong:** It confused a runtime dependency with a design-time dependency. The product can be designed to handle multiple policy states without knowing the contents of one specific client's policy. Only the client-specific rule evaluation must wait for runtime evidence and approval.

**Corrected principle:** Separate invariant product behavior from policy-dependent parameters. Design the resolver, evidence states, provenance, approval path, and behavior for each policy state at design time. Defer the actual policy contents and client-specific thresholds to runtime.

**Correct outcome:** The next task is not to determine the universal procurement boundary. It is to specify a policy-parameterized Stage 1 gate:

1. identify the policy/evidence state;
2. retrieve or construct the applicable policy;
3. label its provenance and approval status;
4. evaluate the need against the approved policy when available;
5. otherwise return `needs-approval` or `undetermined`, rather than inventing a rule or blocking product design.

The prototype can use a clearly labelled example policy for demonstration, while the product model remains generic and supports actual client policy at runtime.

**Related principles:** design-time versus runtime separation; parameterized behavior; graceful handling of external dependencies; no deadlock on unavailable evidence.

## Revised working approach after E-016

For each future step, first separate:

- **invariants:** behavior the product must support regardless of client policy;
- **parameters:** values supplied by organizational policy, historical evidence, or approved model proposals;
- **runtime states:** what the system does when the parameter is found, inferred, awaiting approval, contradicted, or unavailable.

The agent may proceed with invariant and state-machine design without claiming that a client-specific parameter is known. Only the policy-dependent output remains pending at runtime.

## Step 5 — Policy-parameterized Stage 1 gate

**Status:** Product-behavior model approved; client-specific policy remains a runtime input.

**Approval recorded:** The user confirmed the separation between invariant product behavior and runtime actions, and approved separating product design from client-specific runtime policy evaluation.

### E-017 — Using “define” ambiguously for runtime policy behavior

**When identified:** When the next action was described as defining what happens for each policy case without distinguishing product behavior from the policy content or policy decision.

**Incorrect principle applied:**

> The agent may use the word “define” for both specifying system behavior and establishing the client’s domain policy.

**Incorrect outcome:** The wording implied that the agent would define the policy outcome for each case, reopening the authority confusion.

**Why it was wrong:** The agent can design how the product detects, presents, routes, records, and waits on runtime policy states. It cannot establish the client’s procurement rule or approve the resulting policy.

**Corrected principle:** Name the layer being designed. The agent specifies invariant product handling of runtime states; the evidence and authorized procurement actor determine client-specific policy content and approval.

**Correct outcome:** The runtime-flow artifact will specify product behavior for each evidence state—what is checked, retrieved, generated, displayed, routed, recorded, and paused—without claiming to define the policy itself.

**Basis:** approved invariant product behavior; approved policy fallback strategy; approved role/authority separation; generic workflow-state design. It is not based on an assumed client policy.

**Related principles:** precise verbs by abstraction layer; product behavior versus domain rule; authority separation.

### E-018 — Treating user guidance as a branch-specific input

**When identified:** When the fallback strategy was restated as policy document → past RFQs plus user guidance → model-generated proposal, making guidance appear relevant only to the historical-RFQ branch.

**Incorrect principle applied:**

> Preserve the named sequence literally even when one of its elements is a cross-cutting control input.

**Incorrect outcome:** The procurement user appeared to guide the AI only when past RFQs were being used, rather than being able to guide, correct, or supplement the work across all evidence states.

**Why it was wrong:** The user is the head pilot and the AI is the co-pilot. Guidance is an interaction capability available alongside policy documents, past RFQs, and model-generated proposals—not a step in the fallback ladder.

**Corrected principle:** Separate evidence sources from control inputs. Evidence sources form the fallback path; user guidance is a cross-cutting input that can influence interpretation, drafting, correction, and approval at every branch.

**Correct outcome:** The product accepts user guidance at any point, records it with provenance, shows how it changed the draft or interpretation, and still requires explicit approval where policy authority is needed.

**Related principles:** head-pilot/co-pilot relationship; cross-cutting controls; evidence versus instruction; user steerability.

### E-019 — Failing to separate universal approval guardrails from policy-defined approvals

**When identified:** When the runtime-flow task asked “what requires explicit approval?” without stating whether this referred to an invariant product safeguard or a client-specific approval rule.

**Incorrect principle applied:**

> Treat all approval requirements as one undifferentiated policy decision.

**Incorrect outcome:** The question obscured who can decide the product's minimum safety boundary versus who decides organizational approval rights.

**Why it was wrong:** Some approval requirements are universal product guardrails already established in this design. Others vary by organization and must come from policy or the authorized procurement user.

**Corrected principle:** Separate invariant approval guardrails from configurable approval policy. The product may impose a minimum safeguard; client policy may add stricter requirements, define approvers, and authorize exceptions.

**Correct outcome:** Inferred or model-generated procurement policy cannot govern workflow progression without explicit approval. The actual procurement authority decides whether that proposal applies and may define additional approval requirements. The product manager approves the product behavior and configuration model, not the client's procurement authority.

**Related principles:** minimum safe default; configurable governance; authority separation; universal guardrail versus client policy.

## Runtime policy-approval interaction

**Status:** Product interaction draft based on approved principles.

### Entry state

The AI shows:

- the policy source it found, if any;
- the past RFQs or other evidence used;
- the user's guidance already provided;
- the rules it extracted or drafted;
- assumptions and conflicts;
- what workflow decision the rule would affect.

The AI does not present an inferred rule as organizational truth.

### Procurement-manager interaction

The procurement manager can, at any point:

1. add guidance in plain language;
2. attach or select another source;
3. correct an extracted rule;
4. reject an assumption;
5. ask why the AI made a proposal;
6. approve the proposal for this workflow; or
7. approve it as a reusable organizational rule, if authorized to do so.

The AI must show the effect of each change before the user approves it.

### Resulting states

| User action | Recorded result | Workflow behavior |
|---|---|---|
| Approves extracted organizational policy | Confirmed policy with source and approver | Apply policy to the relevant gate |
| Approves an inferred or generated proposal for this workflow | Scoped approved policy proposal | Apply only within the stated scope |
| Approves an inferred or generated proposal as reusable policy | Reusable approved policy with authority and effective scope | Make available to future workflows according to configured governance |
| Provides correction or guidance | Updated draft with user input and provenance | Re-evaluate affected rules; remain pending approval if required |
| Rejects proposal | Rejected policy version with reason | Do not use it; request another source, guidance, or decision |
| Sources conflict | Conflict set with competing evidence | Pause policy-dependent decisions until resolved |
| No decision or approver unavailable | Pending approval | Do not allow policy-dependent progression |

### Universal guardrail

No inferred or model-generated policy may silently govern workflow progression. It must remain `needs-approval` until an authorized procurement authority approves it.

The product may continue non-policy-dependent work, such as organizing evidence or identifying possible ambiguities, while the policy decision is pending. It must label those outputs as provisional.

### Product-manager boundary

The product manager configures and reviews this interaction model. The product manager does not approve a client's procurement policy. The prototype demonstrates the interaction with a clearly labelled example policy and example approver state.

## Post-policy Stage 1 evaluation

**Status:** Product interaction draft based on approved principles.

### Evaluation input

The AI evaluates:

- the requester's original description;
- the AI's structured summary of the business outcome;
- the broad need or category being described;
- stated scope and boundaries;
- ambiguities identified during the conversation;
- user corrections and confirmations;
- the approved policy or approved policy proposal;
- the source and scope of that policy.

### Evaluation checks

| Check | Pass condition | Failure behavior |
|---|---|---|
| Business outcome | The intended business result is understandable | Ask the requester what outcome they need and why |
| Broad need | It is clear what kind of thing, service, or capability is being sought | Show the possible interpretations and ask the requester to clarify |
| Boundary | The wording does not support materially different interpretations of the need | Identify the conflicting interpretations and pause for clarification |
| Stage boundary | Missing details are either irrelevant to understanding the need or explicitly governed as later-stage inputs | Record the details for the later stage; block only when the need itself cannot be understood |
| User confirmation | The requester confirms or corrects the written summary | Keep the stage open until confirmation |
| Policy authority | The applicable policy is confirmed or a fallback proposal is approved | Return `needs-approval` or `undetermined`; do not silently apply a rule |

### Evaluation outputs

The AI returns one of these results:

- **`complete`:** the business outcome and broad need are sufficiently understood, the summary is confirmed, and the approved policy permits progression.
- **`needs-clarification`:** the need itself has a material ambiguity that the requester must resolve.
- **`needs-approval`:** a policy or policy proposal is available but the authorized procurement user has not approved it.
- **`needs-resolution`:** evidence or user guidance conflicts and must be resolved.
- **`undetermined`:** the system lacks an approved basis to evaluate a policy-dependent condition.

### User-visible result

The user sees:

1. the current business-need summary;
2. the exact evidence used;
3. each failed or passed check;
4. what is blocking progression, if anything;
5. whether the issue belongs to Stage 1 or a later stage;
6. the next action and responsible actor; and
7. an opportunity to add guidance, correct the summary, or approve the applicable policy.

The system must never display a bare “not ready” result. It must explain the evidence, the rule, the unresolved issue, and the action required.

### Stage 2 handoff

When the result is `complete`, the system carries forward:

- the confirmed business-need summary;
- accepted boundaries;
- unresolved but permitted unknowns;
- policy basis and approval record;
- evidence references;
- the list of details to gather in organizational-context work.

Stage 1 does not silently convert this handoff into a quote-ready requirement. That remains the responsibility of the later workflow stage.

## Stage 2 — Gather relevant organizational context

**Status:** Historical internal capability; superseded as a separate user-facing stage by the approved four-stage map.

### Objective

Understand the organizational circumstances that shape how the confirmed business need should be sourced.

### Definition

**Organizational context is the organization-specific facts, commitments, circumstances, and constraints surrounding this sourcing decision, apart from the business need itself and apart from the policy rules that govern it.**

It answers:

> “What is true about this organization and this purchase situation that should influence how we source it?”

It does not answer:

- **Business need:** What outcome does the requester need and what is broadly being sought?
- **Policy:** What is required, permitted, prohibited, or subject to approval?

### Context categories

| Category | What it captures | Example |
|---|---|---|
| Existing commitments | Contracts, renewals, incumbent arrangements, or approved supplier relationships | A current contract covers part of the requirement until a stated date |
| Operating environment | Sites, users, processes, systems, volumes, and operating conditions | The service must work across three plants with different operating hours |
| Timing and transition | Business deadlines, implementation windows, continuity needs, and transition constraints | The current arrangement ends before the replacement can be implemented |
| Financial setting | Budget availability, cost-center ownership, funding period, and commercial baseline | Funding is approved for this fiscal year but not yet allocated to a supplier |
| Supplier and market context | Known suppliers, incumbent performance, market capacity, geographic coverage, and prior supplier issues | A prior event showed that only suppliers with local service coverage were feasible |
| Risk and dependency context | Business-critical dependencies, data access, integration needs, operational risks, and known failure consequences | The supplier must integrate with an existing identity system |
| Organizational precedent | Previous RFQs, decisions, exceptions, evaluation approaches, and lessons learned | A previous sourcing event used a two-stage technical evaluation |
| Stakeholders and ownership | Requester, business owner, technical owner, finance owner, legal contact, and procurement owner | The requester owns the outcome but IT must confirm integration constraints |

These categories describe facts and circumstances. A policy clause may govern how the organization responds to them, but the fact itself remains context.

### What makes context relevant

Context is relevant when it can change one or more of:

- who may supply the requirement;
- what solution or scope is feasible;
- how suppliers must respond;
- the timing or transition plan;
- the commercial structure;
- the evaluation approach;
- the approvals or risks involved.

The AI must explain which sourcing decision a context item could affect. A file is not relevant merely because its name contains words such as “supplier,” “contract,” or “RFQ.”

### Context evidence record

For each context item, the system records:

- the fact or claim;
- source file and location;
- date and applicability period;
- evidence type: confirmed fact, historical precedent, user guidance, or unresolved claim;
- affected sourcing decision;
- confidence and conflicts;
- who must confirm it;
- whether it blocks RFx generation or can be carried forward.

### Stage-dependent context

Organizational context is not a static checklist. The same fact may matter differently at different stages, and some facts are irrelevant until a later decision is being made.

For every context item, the system must also record:

- applicable workflow stage;
- decision or action it informs;
- actor whose decision it supports;
- whether it is needed now, useful later, or irrelevant to the current action;
- validity period and conditions under which it applies.

Examples:

| Context item | Relevant stage or decision |
|---|---|
| Existing contract expiry date | Intake if it changes whether sourcing should begin; release planning if it affects supplier transition |
| Approved supplier list | Supplier invitation and eligibility evaluation |
| Budget approval threshold | RFx approval and award governance |
| Plant operating hours | Requirement shaping and supplier feasibility comparison |
| Prior supplier performance | Evaluation and award decision |
| Security integration constraint | Requirement definition and supplier questionnaire |

The AI must not retrieve or display context merely because it is related to the category. It must explain its relevance to the current stage and decision.

### E-034 — Treating organizational context as stage-independent

**When identified:** When organizational context was defined as a set of categories without modelling which workflow stage or decision makes each item relevant.

**Incorrect principle applied:**

> If a fact is relevant to the sourcing event, it is equally relevant throughout the workflow.

**Incorrect outcome:** The system could surface too much context too early, miss context needed at a later gate, or apply a fact to the wrong decision.

**Why it was wrong:** Context relevance depends on stage, action, actor, timing, and applicability conditions.

**Corrected principle:** Treat context as stage- and decision-scoped evidence. Retrieve and evaluate it against the current workflow action, while preserving future applicability for later stages.

**Correct outcome:** Each context item carries stage, decision, actor, validity, and applicability metadata. The AI shows only context relevant to the current decision and carries forward other validated context for later use.

**Related principles:** stage-aware retrieval; decision-scoped relevance; temporal applicability; context lifecycle.

## Turning the grounded request into the draft RFx

**Status:** Product behavior draft.

### Inputs used

The AI uses only the grounded and visible inputs:

- confirmed business-need summary;
- user guidance and corrections;
- applicable policy clauses and approval record;
- stage-relevant organizational context;
- organization-supplied or organization-confirmed RFx field contract;
- approved output and response format;
- resolved, controlled, and unresolved items from earlier work.

### Generation sequence

1. Select the confirmed RFx format and version.
2. Load its field definitions and validation rules.
3. Check whether the requested sourcing action is permitted.
4. Map the business-need and context facts to RFx fields.
5. Preserve units, currencies, dates, quantities, locations, and conditions.
6. Generate scope and line items from confirmed or explicitly proposed facts.
7. Generate the questionnaire from policy, risk, technical, and context requirements.
8. Generate terms and response instructions from the applicable policy and format contract.
9. Attach relevant evidence and identify which content is derived, user-provided, or proposed.
10. Run field, policy, and format validation.
11. Show the buyer a draft for review; do not release it to suppliers automatically.

### Field population rules

| Input condition | Draft behavior |
|---|---|
| Value is confirmed and maps to a defined field | Populate it and show source/provenance |
| Value is inferred but material | Show the proposed value and require buyer confirmation |
| Required value is missing | Leave it unresolved and block RFx approval or generation as appropriate |
| Multiple mappings are plausible | Show alternatives and ask the buyer to choose |
| Value conflicts with policy or context | Show the conflict and stop affected generation |
| Value does not map safely | Preserve it as an unmapped note; do not force it into a field |
| Detail belongs to a later stage | Record it for later completion rather than inventing it |

### What the buyer reviews

The buyer reviews the generated RFx as a decision artifact, not the AI's internal reasoning. The review surface must make visible:

- scope and boundaries;
- line items and commercial units;
- questionnaire and required supplier evidence;
- terms and conditions;
- response instructions and deadline;
- missing, inferred, or unresolved values;
- policy and format conflicts;
- evidence links for material content;
- changes since the buyer's last guidance.

### Generation outcomes

- **Draft generated:** all required mappings and policy checks pass; buyer review is required.
- **Draft generated with flagged issues:** safe drafting is possible, but material issues must be resolved before approval or release.
- **Generation blocked:** request is prohibited, required semantics are missing, or a material policy/format conflict exists.
- **Generation pending approval:** an inferred policy, format interpretation, or material field mapping requires authorized confirmation.

The draft RFx is the first tangible output. It is not supplier-ready until the buyer resolves blocking issues and explicitly approves it.

## Buyer review and approval of the draft RFx

**Status:** Product behavior draft.

### Review objective

Enable the procurement user to verify that the draft RFx faithfully represents the business need, complies with applicable rules, uses the correct format, and can be answered fairly by suppliers.

### Review sequence

1. **Summary:** confirm the business outcome, broad scope, and boundaries.
2. **Line items:** check descriptions, quantities, units, locations, timing, and commercial assumptions.
3. **Questionnaire:** check that supplier questions are relevant, answerable, and tied to the sourcing decision.
4. **Terms:** check policy-required clauses, buyer terms, conditions, and approval requirements.
5. **Response instructions:** check deadline, submission channel, requested attachments, and response format.
6. **Evidence and issues:** inspect provenance, inferred values, open questions, conflicts, and policy/format warnings.
7. **Final approval:** explicitly approve the RFx for supplier release.

The buyer may add guidance or edit a field at any point. The AI must show downstream effects when a change affects other fields, questionnaire questions, terms, or supplier instructions.

### Issue handling

| Issue | Buyer action | Release consequence |
|---|---|---|
| Missing required value | Provide or request the value | Blocks approval |
| Ambiguous field mapping | Choose or correct the mapping | Blocks approval when material |
| Incorrect AI inference | Edit or reject the value | AI revalidates affected content |
| Policy conflict or prohibited request | Resolve, obtain exception, or stop | Blocks release |
| Format/schema conflict | Correct the structure or confirm the applicable format | Blocks approval |
| Non-material wording issue | Edit or accept | Does not block if policy permits |
| Controlled unknown allowed by policy | Assign owner and resolution point | May proceed only if policy permits |

### Approval gate

The RFx can be approved for release only when:

- the buyer has confirmed the business need and scope;
- all policy-prohibited or policy-dependent issues are resolved;
- required fields are populated or explicitly permitted to remain open;
- material mappings are confirmed;
- the questionnaire and terms are consistent with policy and format;
- supplier response instructions are clear and fair;
- the buyer has explicitly approved the final version.

Approval records the approver, timestamp, policy/version, format/version, evidence set, guidance, and final RFx version.

### Release boundary

Draft generation and buyer approval are separate states. The system must never treat a generated draft as approved, and must never send an RFx merely because all fields happen to be populated.

This stage matters because the same business need can require different sourcing decisions depending on existing contracts, approved suppliers, policies, budgets, risk requirements, operating locations, timing, and prior organizational experience.

### Starting point

Stage 2 begins only with the Stage 1 handoff:

- confirmed business-need summary;
- accepted boundaries;
- permitted unknowns;
- policy basis and approval record;
- evidence references;
- details identified for context gathering.

The system must not ask the requester to repeat the Stage 1 conversation.

### Context for understanding the business need

Organizational context is not only used to shape the later sourcing path. It may be needed to understand what the requester means.

Examples:

| Requester wording | Context that may clarify it | Possible effect |
|---|---|---|
| “Renew the packaging supply” | Existing contract, prior RFQ, or plant usage record | Clarifies which packaging, site, supplier relationship, and renewal scope are intended |
| “Use the standard specification” | Current approved specification or prior sourcing event | Identifies which version and technical requirements “standard” refers to |
| “We need regular deliveries” | Demand history, operating calendar, or prior order pattern | Clarifies frequency, seasonality, and delivery locations |
| “Use our usual suppliers” | Approved supplier list, incumbent records, or prior event | Identifies whether this means an approved list, an incumbent, or a historical shortlist |

When context changes the interpretation of the business need, the AI must return to the requester with the evidence and proposed clarification. It must not silently rewrite the need.

### Context-question generation

The AI generates evidence questions from:

- ambiguous or overloaded terms in the request;
- missing qualifiers that could change the broad need;
- references to “last year,” “usual,” “standard,” or “approved”;
- policy clauses that require a particular organizational fact;
- template fields whose meaning depends on organizational context;
- differences between the request and relevant historical evidence;
- user-provided guidance.

Each evidence question includes the phrase or decision that triggered it, the possible interpretations, the evidence that would distinguish them, sources searched, result, confidence, and clarification needed.

Stage 2 therefore works as a controlled loop with Stage 1: context may clarify the need, and a clarified need may change which context is relevant.

### Context sources

The AI may use:

- approved organizational policies;
- prior RFQs and sourcing events;
- existing contracts and supplier records;
- approved supplier lists;
- procurement templates and questionnaires;
- budget or finance guidance;
- compliance, legal, security, or risk documents;
- relevant internal correspondence;
- user-provided guidance, corrections, and additional files.

User guidance is available alongside every source type. File names are discovery hints, not proof of relevance.

### Context checks

| Context question | Evidence sought | If unresolved |
|---|---|---|
| Is there an existing contract or approved supplier arrangement? | Contract, supplier record, or confirmed user guidance | Show the possibility and request confirmation if it could change the sourcing path |
| Are there policy or compliance constraints? | Applicable policy, control, legal, security, or risk evidence | Mark the constraint as unresolved; do not assert compliance requirements from a file name alone |
| Are there budgetary or approval constraints? | Budget guidance, approval matrix, or user guidance | Record as pending context unless it changes whether sourcing may proceed |
| Does location, timing, or operating model affect the sourcing approach? | Prior events, operating documents, or requester guidance | Ask for clarification when it changes supplier eligibility or feasibility |
| Is there relevant organizational precedent? | Past RFQs, contracts, decisions, or correspondence | Show the precedent and its relevance; do not assume it is still applicable |
| Do sources conflict? | Contradictory documents or user statements | Present the conflict and route it for resolution |

### AI behavior

For every retrieved source, the AI records:

- source identity and location;
- extracted fact or guidance;
- relevance explanation;
- applicable date or version, when available;
- confidence and uncertainty;
- whether the source is authoritative, a proxy, or contextual evidence;
- the user guidance that changed or constrained the interpretation.

The AI proposes context; it does not silently convert historical practice into current policy.

### Stage 2 outputs

The stage produces:

- an organizational-context summary;
- confirmed constraints;
- relevant precedent and its applicability;
- existing supplier or contract implications;
- conflicts and unresolved questions;
- evidence references and provenance;
- assumptions requiring confirmation;
- inputs that must be carried into requirement shaping.

### Completion behavior

Stage 2 may be considered complete when the applicable policy or organizational authority permits the identified context unknowns to remain open, or when the material context has been confirmed. If a missing or conflicting context item could change the sourcing path, the system must keep it open and explain the required resolution.

Stage 2 does not yet produce the final quoteable RFx. It prepares the organizational context needed for Stage 3: making the requirement quoteable.

**Approval state:** Approved by the user with the corrections captured through E-037.

## Stage 2 re-audit — Full step contract

**Status:** Draft re-audit for review. The previously approved Stage 2 objective remains unchanged.

### Objective

Use organization-specific evidence to clarify the business need and shape the sourcing decisions that follow.

### Importance

Context prevents the system from misinterpreting organization-specific language, overlooking existing commitments, inviting unsuitable suppliers, or carrying the wrong assumptions into RFx construction.

### User journey

1. The system shows the Stage 1 business-need summary.
2. The AI highlights terms, missing qualifiers, or decisions that may need organizational context.
3. The user connects or selects permitted sources and may add guidance.
4. The AI searches source content and shows candidate evidence with relevance explanations.
5. The user includes, excludes, corrects, or supplements the evidence.
6. The AI updates the interpretation and shows whether the business-need summary changed.
7. The user confirms the clarified interpretation or resolves the remaining question.
8. The system records context that is relevant now and carries later-stage context forward.

This is part of the RFx-intake journey. It is not a mandatory standalone setup screen.

### Execution responsibility

| Behavior | LLM | Tool | Deterministic system | Human |
|---|---|---|---|---|
| Identify ambiguity or missing qualifier | Interpret language and propose alternatives | — | Apply the materiality test | Requester clarifies meaning |
| Generate evidence question | Form the question and possible interpretations | — | Store trigger, state, and responsible actor | User refines or answers |
| Find context | Propose search concepts and relevance explanation | Search connected files and subfolders | Apply source boundary, metadata filters, and retrieval logging | User adds guidance or sources |
| Evaluate source relevance | Interpret content and applicability | Retrieve content and metadata | Preserve source location, version, and confidence state | User includes/excludes or corrects |
| Update need/context | Draft revised summary and context claims | Retrieve supporting evidence | Version records and maintain links between need and context | Requester confirms or rejects |
| Carry context forward | Explain future applicability | — | Attach stage, decision, actor, validity, and provenance metadata | Authorized user confirms where required |

### Stage 2 outputs

- clarified business-need interpretation;
- organization-specific facts and constraints;
- context-to-decision links;
- relevant source excerpts and provenance;
- policy/context conflicts;
- unresolved questions and responsible actors;
- facts relevant now versus later;
- updated inputs for RFx construction.

### Implementation outputs

- source connector and repository boundary;
- content extraction and indexing interface;
- evidence-question object;
- context-item object with stage/decision applicability;
- relevance explanation and provenance record;
- need/context version linkage;
- user guidance and correction history;
- context lifecycle and handoff interface;
- state transitions for clarification, conflict, and confirmation.

### Verification

We must verify that:

- the AI finds context that clarifies ambiguous business language;
- content relevance is not inferred from filenames alone;
- the AI explains which ambiguity or decision each source informs;
- irrelevant or stale context is not silently applied;
- context that changes the need returns the user to confirmation;
- stage-specific context is not applied to the wrong decision;
- source date, version, authority, and provenance survive the handoff;
- deterministic state transitions cannot be bypassed by model output;
- user guidance and corrections are preserved.

### Completion

Stage 2 is complete when material context affecting the current interpretation or sourcing decision is confirmed, or an authorized rule permits it to remain open with an owner, impact, and resolution point. Context that is relevant only to a later stage is carried forward rather than used to block the current step.

### Journey correction: procurement manager as primary user

The primary system user is the procurement manager. The requester is an upstream participant whose information may arrive through the procurement manager, email, documents, or other channels. Direct requester interaction with the product is optional, not assumed.

The primary intake outcome should therefore be:

1. Procurement manager starts a sourcing request.
2. Procurement manager provides or imports the requester’s need.
3. AI uses policy, context, user guidance, and the confirmed RFx field contract to clarify the need.
4. AI produces a draft RFx.
5. Procurement manager reviews and corrects the draft.
6. Procurement manager approves it for supplier release.

Context retrieval and need clarification are supporting capabilities within this intake journey. They may loop internally and surface targeted questions to the procurement manager, but they should not be presented as separate stages that require the requester to operate the system.

### E-050 — Duplicating need understanding across stages and assigning an unsupported requester role

**When identified:** When Stage 1 was defined as understanding the need and Stage 2 was separately defined as using context to clarify that same need, while the requester was treated as a system user.

**Incorrect principle applied:**

> Separate conceptual information activities into user-facing stages and assign all upstream participants a direct product role.

**Incorrect outcome:** Stage 1 and Stage 2 substantially overlapped, creating ambiguity about where need clarification occurred. The journey also required requester interaction without evidence that the requester would use the system.

**Why it was wrong:** The stage boundary should follow the primary user's real workflow and tangible output. The procurement manager is responsible for gathering and shaping requester input; the requester is not automatically a product user.

**Corrected principle:** Design the primary journey around the actual system user and the first meaningful artifact. Keep interdependent reasoning capabilities inside that journey unless they produce a distinct user outcome or require a distinct actor decision.

**Correct outcome:** The procurement manager's intake journey combines need capture, context retrieval, policy grounding, and clarification, culminating in a draft RFx for procurement-manager review. Requester interaction is optional and channel-dependent.

**Related principles:** primary-user fidelity; artifact-led stage boundaries; no unsupported persona assignment; capability versus stage; responsibility before interface.

### E-051 — Failing to reopen an approved step after a foundational interpretation changed

**When identified:** When the primary user changed from an assumed requester-plus-procurement interaction to a procurement-manager-led journey, while the earlier Stage 1 approval remained active.

**Incorrect principle applied:**

> Once a step has been approved, later corrections can be layered onto it without invalidating the approval.

**Incorrect outcome:** Stage 1 could have remained marked approved even though its actor model, user journey, and first tangible outcome had materially changed.

**Why it was wrong:** An approval is scoped to the assumptions and contract version that were reviewed. A foundational change invalidates dependent approval.

**Corrected principle:** When a foundational assumption changes—such as primary user, objective, output, authority, or stage boundary—reopen the affected step and all dependent steps. Supersede the old approval explicitly; do not patch it silently.

**Correct outcome:** Stage 1 is reopened for a clean re-audit around the procurement manager as primary user and the draft RFx as the first tangible outcome. Dependent stage interpretations remain provisional until the revised Stage 1 is approved.

**Related principles:** approval scope; invalidation on foundational change; dependency-aware rework; no patching across changed assumptions.

## Principles for defining the deterministic substrate

The deterministic substrate is the machine-checkable base that the AI reasons over and acts through. It is not merely a list of code tasks. It represents facts, states, constraints, permissions, transformations, and receipts in a way that does not depend on an LLM being persuasive or consistent.

### First-principles method

For every behavior in a workflow step:

1. identify what must be true in the world;
2. identify what must be represented exactly;
3. identify what may change and who controls that change;
4. identify what the AI may propose versus what the system must enforce;
5. identify what action or state transition may follow;
6. identify what evidence and receipt must be retained; and
7. identify how failure, uncertainty, reversal, and replay are handled.

### Deterministic-substrate principles

1. **Canonical representation:** represent important entities, facts, events, relationships, units, versions, and states in typed structures rather than leaving them only in text.
2. **Explicit state:** model workflow states and allowed transitions directly; do not infer state from the latest model message.
3. **Machine-checkable invariants:** enforce conditions that must always hold, such as identity, provenance, authorization, schema validity, and arithmetic integrity.
4. **Authority and scope:** every rule has an owner, source, scope, effective period, and approval status. Runtime policy values remain configurable.
5. **Evidence binding:** every important fact, transformation, decision, and generated value links to its source, version, and operation history.
6. **Separation of proposal and commitment:** the AI may propose facts, mappings, rules, or actions; deterministic controls decide whether they can be committed or executed.
7. **Typed transformations:** conversions, calculations, mappings, and validations declare their inputs, output type, assumptions, precision, and failure behavior.
8. **Explicit uncertainty:** unknown, ambiguous, conflicting, inferred, stale, unavailable, and approved are distinct states—not nulls or confident prose.
9. **Least privilege:** actions are allowed only when the actor, scope, authorization, and policy conditions permit them.
10. **Fail closed for consequential actions:** when authority, identity, evidence, or required conditions are missing, the system pauses or routes for resolution rather than silently proceeding.
11. **Reversibility and idempotency:** consequential operations can be reviewed, replayed safely, corrected, or reversed where possible, with duplicate execution prevented.
12. **Temporal correctness:** effective dates, response versions, policy revisions, supersession, and event ordering are explicit.
13. **Composability:** each deterministic component has a clear input/output contract and can be composed without hidden side effects.
14. **Observability:** every state change, rule evaluation, tool action, transformation, and human decision produces an inspectable receipt.
15. **Mechanism fit:** use deterministic execution where exactness, authorization, repeatability, or auditability is required; use tools for external operations; use humans for authority and judgment; use models for interpretation and proposals; use hybrids where these must be composed.

### What the AI reasons over

The AI should receive a structured working context containing:

- current state;
- verified facts;
- candidate facts and their confidence;
- applicable rules and their authority;
- available actions;
- constraints and invariants;
- unresolved questions;
- evidence references;
- history and versions;
- required human approvals.

The AI may reason over this context and propose the next step. The deterministic substrate validates the proposal against the contracts before changing state or invoking an external action.

### Mechanism-selection record

For every behavior, the product specification should record:

- behavior being performed;
- required accuracy and authority;
- reversibility and consequence of error;
- chosen mechanism: model, deterministic logic, tool, human, or hybrid;
- input/output contract;
- enforced invariants;
- provenance and audit requirement;
- fallback and failure state;
- verification method.

### E-052 — Defining deterministic mechanisms by local examples rather than general principles

**When identified:** When Stage 1 mechanisms were listed as plausible combinations such as LLM plus deterministic rules, tools plus provenance handling, or human decision plus state controls without first defining how any deterministic mechanism should be selected.

**Incorrect principle applied:**

> Assign a mechanism based on the apparent task type or a familiar implementation pattern.

**Incorrect outcome:** The table could look technically reasonable while missing the underlying questions of exactness, authority, state, provenance, reversibility, temporal correctness, and failure behavior.

**Why it was wrong:** The deterministic substrate is the foundation that makes AI reasoning reliable. It must be derived from the behavior's required guarantees, not selected ad hoc.

**Corrected principle:** Decompose every behavior into world facts, invariants, state transitions, authority, transformations, external actions, human judgments, evidence, and failure handling before assigning an execution mechanism.

**Correct outcome:** Mechanism selection becomes a traceable design decision based on risk and required guarantees. The AI reasons over a structured, versioned, evidence-bound substrate and cannot bypass deterministic controls.

**Related principles:** machine-checkable substrate; mechanism fit; explicit contracts; risk-based allocation; AI as bounded proposer.

## Stage 1 mechanism audit

**Status:** Draft audit. This does not change the approved Stage 1 user journey.

| Behavior | Deterministic substrate | AI may propose | Other execution | Required control |
|---|---|---|---|---|
| Capture requester input | Original input, source, actor, timestamp, and version | A structured summary | Procurement manager supplies or imports the input | Original content remains immutable |
| Identify material ambiguity | Ambiguity record, materiality state, affected decision, and evidence-question status | Possible interpretations and evidence question | Procurement manager/requester clarifies | No silent rewrite; materiality rule is explicit |
| Find relevant context | Source index, content locations, metadata, retrieval event, and provenance | Search concepts and relevance explanation | Repository/search tool retrieves content | Filename alone cannot establish relevance |
| Interpret policy | Policy version, clause identity, applicability fields, approval state, and source location | Candidate clauses, extracted rule, and applicability proposal | Authorized procurement user confirms when unresolved | Candidate ranking is not authorization |
| Incorporate guidance | Guidance record, author, scope, version, and affected objects | Revised interpretation or mapping | Procurement manager provides guidance | Guidance cannot silently override policy authority |
| Map facts to RFx fields | Typed field schema, mapping state, units, and validation status | Candidate mapping and confidence | Procurement manager resolves material ambiguity | No label-only mapping or dropped input |
| Check permission to construct RFx | Policy state, permission result, required inputs, and transition state | Explanation of proposed result | Authorized user resolves policy uncertainty | Model cannot bypass transition controls |
| Generate draft RFx | Versioned structured RFx object and provenance links | Draft wording and structure | Deterministic renderer produces document | Only grounded, permitted inputs can populate material fields |

### Stage 1 mechanism decisions

- The LLM interprets and proposes; it does not own truth, authority, or workflow state.
- Repository tools retrieve content; they do not determine policy applicability.
- Deterministic logic enforces state, schema, provenance, permissions, and exact transformations.
- The procurement manager supplies organizational guidance and approvals; the product manager does not supply domain policy.
- Hybrid chains must expose the handoff between proposal, validation, human decision, and committed state.

### Stage 1 verification mapping

Each behavior must have:

- unit tests for deterministic validation and state transitions;
- retrieval evaluations for source relevance and missed evidence;
- model evaluations for summary faithfulness, ambiguity detection, and clause extraction;
- integration tests for repository/source provenance;
- human review for materially ambiguous mappings and policy applicability;
- end-to-end tests proving that unresolved or prohibited requests cannot reach RFx construction.

This is the first mechanism audit using the general deterministic-substrate principles. It is ready for review before the same method is applied to Stage 2.

## Production review model for AI-augmented product development

**Status:** Proposed operating model.

### Core objective

Enable a PM, their manager, designers, engineers, AI/evaluation specialists, and production owners to review the same product decision at the right level of abstraction, while retaining enough traceability that downstream artifacts faithfully implement the reviewed intent.

The goal is not to have humans read every generated document line by line. The goal is to create a compact, auditable review spine whose approved decisions constrain and explain all downstream detail.

### Review abstraction layers

#### Layer 1 — Outcome and risk

Review:

- user and business outcome;
- workflow problem;
- affected actors;
- consequences of failure;
- production risks and non-negotiable guardrails;
- success measures.

This answers: **Why should this exist and what must never go wrong?**

#### Layer 2 — Workflow and state behavior

Review:

- workflow steps and boundaries;
- current state and allowed transitions;
- user decisions;
- AI responsibilities;
- human authority;
- failure and recovery states;
- tangible outputs.

This answers: **What must happen, in what order, and under whose authority?**

#### Layer 3 — Contract and mechanism behavior

Review:

- inputs and sources;
- policy and data contracts;
- invariants;
- model/tool/human/deterministic/hybrid mechanism assignments;
- runtime parameters;
- evidence and provenance;
- acceptance and evaluation criteria.

This answers: **What must each component guarantee, and how is that guarantee established?**

#### Layer 4 — Implementation detail

Review:

- UI screens and interaction states;
- data models and APIs;
- prompts and model configuration;
- retrieval/indexing;
- deterministic services and validators;
- integrations, storage, deployment, and observability.

This answers: **How will the reviewed behavior be built and operated?**

Higher-level review does not replace lower-level verification. It constrains it and makes it selective.

### Review spine

Every step should produce a compact review spine containing:

- objective;
- importance and failure risk;
- primary user and other actors;
- start state and desired end state;
- key decisions and authority;
- invariant behavior;
- runtime parameters;
- major failure states;
- output artifact;
- acceptance evidence;
- unresolved decisions;
- links to detailed UX, data, AI, implementation, and test artifacts.

The review spine is the PM's and manager's review surface. Designers, engineers, and AI/evaluation specialists can open the linked detail relevant to their work without losing the shared decision context.

### Role-based review

| Reviewer | Primary review question |
|---|---|
| PM | Does this solve the intended user/business problem and preserve the workflow outcome? |
| PM's manager | Is the problem framing, scope, risk, and proposed product behavior sound? What has been missed? |
| Designer | Can the user understand and complete the behavior through the journey and UI states? |
| Engineer | Are the contracts, states, interfaces, and failure paths buildable and unambiguous? |
| AI/evaluation reviewer | Are model responsibilities bounded, evidence-grounded, and testable? |
| Security/compliance/operations | Are authority, data access, audit, deployment, and operational risks controlled? |
| Production owner | Can the behavior be monitored, supported, corrected, and safely changed? |

Reviewers critique the same spine from different responsibilities. They do not create disconnected versions of truth.

### Review sequence

1. PM or agent produces the step contract and review spine.
2. PM checks internal coherence and unresolved decisions.
3. PM's manager critiques the problem, scope, risks, and proposed behavior.
4. Designer reviews the user journey and interaction implications.
5. Engineers review contracts, mechanisms, interfaces, and failure behavior.
6. AI/evaluation reviewers review model boundaries, data, guardrails, and evaluation.
7. Conflicts are recorded as explicit decisions; they are not silently reconciled.
8. The PM updates the canonical contract and change-impact map.
9. Relevant owners explicitly approve the contract at their layer.
10. Build and verification begin only for approved behavior.

### Faithful reproduction standard

Higher-level approval can support confidence in downstream behavior only when every important decision has:

- an unambiguous statement;
- an owner and authority;
- a traceability link to downstream artifacts;
- a defined implementation mechanism;
- an acceptance or evaluation method;
- explicit treatment of exceptions and unresolved states.

This is not a mathematical guarantee of faithful reproduction. It is an evidence-backed chain of custody from intent to implementation.

### AI-specific review guardrails

- Generated documentation is a draft, never self-approving evidence.
- Model confidence is not product confidence.
- Compression into a higher abstraction must preserve decisions, constraints, exceptions, and unresolved items.
- Every abstraction layer must show coverage and gaps in the layer below.
- A change to an upper-layer decision triggers impact analysis across linked UX, data, AI, deterministic, test, and operational artifacts.
- Human reviewers approve decisions within their authority; they do not approve claims they cannot assess.
- The agent may identify missing review roles or evidence and must not mark the work complete because documents exist.

### Product-development artifact chain

> Review spine → step contract → user journey/UI design → data and source design → agent/tool/deterministic design → implementation → evaluation/tests → operational readiness.

Each arrow is a traceability relationship, not merely a handoff. The downstream artifact must be explainable from the upstream approved decision.

### E-054 — Prematurely collapsing the review spine into a complete document

**When identified:** When the production review model was presented as a complete multi-layer document instead of being defined through the approved step-definition contract one bounded decision at a time.

**Incorrect principle applied:**

> Once the need for a higher-level review model is understood, synthesize the entire model in one pass.

**Incorrect outcome:** The review spine contained layers, roles, review sequence, and traceability rules before its own objective, users, required decisions, and completion conditions had been reviewed and approved.

**Why it was wrong:** The step-definition contract applies recursively to the process used to define the product. A review artifact is itself a product-development artifact and must be designed through the same controlled sequence.

**Corrected principle:** Apply the step-definition contract recursively. Define the review spine one bounded step at a time, beginning with its objective and importance, then its users, information, review decisions, outputs, and verification. Do not synthesize downstream layers before upstream review decisions are approved.

**Correct outcome:** Reopen the review-spine design at Step 1: define what the review spine must accomplish and why it matters. Later fields and layers remain proposed until their prerequisites are explicitly approved.

**Related principles:** recursive contract application; sequence before synthesis; no premature compression; design the development process with the same discipline as the product.

## Review-spine Step 1 — Objective and importance

**Status:** Approved.

### Objective

Enable the PM, manager, designers, engineers, AI/evaluation reviewers, and production owners to review and align on the important product decisions at the right level of abstraction, while retaining traceable links to the detailed work that implements those decisions.

### Importance

AI increases both the amount of product documentation and the complexity of what must be reviewed. Without a shared review spine:

- reviewers may read large volumes without seeing the important decisions;
- generated detail may appear complete while hiding unresolved assumptions;
- different functions may review disconnected versions of the product truth;
- a decision approved at a high level may be implemented incorrectly downstream;
- changes may create contradictions across UX, data, AI, deterministic logic, tests, and operations.

The review spine is therefore intended to make important decisions reviewable and traceable without requiring every reviewer to read every generated detail. It is not merely a summary. It must preserve constraints, authority, exceptions, unresolved decisions, and links to supporting evidence.

### Intended success condition

A reviewer should be able to answer:

> “What are we deciding, why does it matter, what must be true, who has authority, what remains unresolved, and where can I inspect the detailed implementation?”

without reconstructing the answer from a large collection of documents.

## Review-spine Step 2 — Users and decisions

**Status:** Superseded by the revised Step 2 below.

### Objective

Define who uses the review spine, what decision each person is accountable for, and what information they need to make that decision without reviewing irrelevant detail.

### Primary users and decisions

| User | Decision they own | Information they need first |
|---|---|---|
| PM | Whether the product solves the intended problem and whether the proposed scope is coherent | Outcome, users, workflow, key behavior, risks, unresolved decisions |
| PM's manager | Whether the PM's framing, scope, trade-offs, and risks are sound | Problem evidence, objective, alternatives, assumptions, risks, expected value, decision requests |
| Product designer | Whether users can understand and complete the workflow | Primary user, journey, screen purpose, information hierarchy, interaction states, copy, permissions, failure paths |
| Product/engineering lead | Whether the behavior is buildable and sufficiently specified | Inputs/outputs, state transitions, interfaces, data contracts, mechanism assignments, dependencies, edge states |
| AI/evaluation reviewer | Whether model behavior is bounded, grounded, and testable | Model responsibilities, context, prompts/tools, evidence, uncertainty, guardrails, evaluation cases |
| Security/compliance/operations reviewer | Whether the product can operate safely in the target environment | Data access, authority, auditability, retention, failure behavior, deployment, monitoring, recovery |
| Automated executor | Which approved decisions and contracts it may consume or act on | Machine-readable objective, constraints, state, allowed actions, approval requirements, source links, and version |

### Authority boundary

The review spine distinguishes:

- **reviewer:** critiques and provides feedback;
- **decision owner:** has authority to approve a decision;
- **contributor:** supplies evidence or implementation detail;
- **executor:** carries out an approved action;
- **observer:** needs visibility but does not approve.

One person may hold multiple roles, but the roles must not be silently conflated. In particular, reviewing product behavior does not make someone a domain-policy authority.

### Review information rule

Each reviewer receives:

1. the shared decision and its rationale;
2. the constraints and risks relevant to their responsibility;
3. the unresolved decisions they are authorized to resolve;
4. links to supporting detail;
5. the expected review action and approval status.

The spine should not show all generated detail to everyone by default. It should provide progressive detail without hiding information that affects the decision.

### Feedback handling

Feedback must be recorded as one of:

- clarification;
- correction;
- new requirement;
- risk;
- dependency;
- disagreement;
- approval;
- rejection;
- request for evidence.

Each feedback item includes its author, role, affected decision, rationale, status, owner, and downstream impact.

### Completion

This step is complete when every intended reviewer role has:

- an explicit decision responsibility;
- a defined information need;
- a known authority boundary;
- an expected feedback action;
- a path to approve, reject, defer, or escalate.

No reviewer is expected to approve a decision outside their authority or expertise.

### Actor model correction

The actor categories are derived from responsibility and decision rights, not from the technologies used to perform the work:

- **Accountable decision owner:** approves the product or workflow decision and accepts its consequences.
- **Domain authority:** confirms organizational rules, policy interpretation, or operational truth.
- **Primary workflow user:** performs the real work the product supports.
- **Affected participant:** provides inputs, receives outputs, or experiences the consequences of the workflow without owning the product decision.
- **Product/design owner:** defines the user problem, product behavior, scope, and experience.
- **Delivery/technical owner:** builds, integrates, verifies, and operates the product.
- **Risk/control owner:** reviews security, legal, compliance, audit, and operational controls.

These are responsibility categories. One person may occupy several categories, but the categories themselves remain distinct. An LLM, tool, deterministic service, or automated process is an execution mechanism, not a stakeholder category. It belongs in the step contract's execution-mechanism field.

### E-056 — Copying a technology phrase into the stakeholder model

**When identified:** When “configured agentic process” was listed as a user/stakeholder alongside human product, design, engineering, and governance roles.

**Incorrect principle applied:**

> Any participant mentioned in the product-development context can be represented as an actor or stakeholder category.

**Incorrect outcome:** An execution mechanism/consumer was mixed into a human responsibility model, and the stakeholder taxonomy was not derived as a mutually exclusive, collectively sufficient set of responsibilities.

**Why it was wrong:** Stakeholders are defined by their relationship to the decision, workflow, authority, or consequence. Automated processes do not own organizational decisions; they execute approved behavior.

**Corrected principle:** Derive actors from responsibility, authority, participation, and impact. Model systems and agentic processes separately as execution mechanisms or consumers of approved contracts.

**Correct outcome:** The review spine uses responsibility-based actor categories and records automated executors in the step's mechanism, interface, permission, and verification sections.

**Related principles:** MECE actor modelling; responsibility before role naming; human authority versus system execution; no prompt mirroring.

## Review-spine Step 2 revised — Responsibility and decision rights

**Status:** Superseded by the concrete-role version below.

### Objective

Define the human responsibility categories involved in reviewing a product decision and the exact decision or action each category owns, validates, contributes to, or is affected by.

### Why it matters

AI-generated product work crosses multiple forms of authority. A person may be able to critique the product experience but not approve domain policy; a technical owner may verify implementation but not approve the business outcome. If these responsibilities are mixed, the wrong person can approve the wrong thing or an important decision can have no accountable owner.

### MECE responsibility categories

For each decision, assign each responsibility instance to one category:

| Category | Relationship to the product decision | Review action |
|---|---|---|
| Accountable decision owner | Owns the decision and accepts its consequences | Approve, reject, defer, or escalate |
| Domain authority | Owns the truth, rule, or operational practice being represented | Confirm, correct, or qualify domain content |
| Primary workflow user | Performs the real work the product supports | Validate whether the workflow is usable and faithful to the work |
| Affected participant | Supplies inputs, receives outputs, or experiences consequences without owning the product decision | Provide evidence, constraints, or impact feedback |
| Product/design owner | Owns the problem framing, product scope, behavior, and user experience | Define, synthesize, prioritize, and incorporate feedback |
| Delivery/technical owner | Owns buildability, integration, reliability, and technical operation | Specify, implement, verify, and operate |
| Risk/control owner | Owns security, legal, compliance, audit, safety, or operational control review | Approve, constrain, or escalate risk controls |

These categories classify responsibilities, not job titles. One person may hold several categories in a particular organization, but each decision must still show which responsibility they are exercising.

Automated systems, tools, LLMs, and deterministic services are not stakeholder categories. They are recorded separately as execution mechanisms and contract consumers.

### Decision assignment

For every important product decision, the review spine records:

- decision statement;
- decision category;
- accountable decision owner;
- domain authority, if domain truth is involved;
- required reviewers and their responsibility categories;
- evidence needed;
- approval or feedback action;
- unresolved disagreement;
- downstream artifacts affected;
- final status and timestamp.

### Reviewer information

Each responsibility category receives only the information needed for its decision, plus access to supporting detail:

- **Accountable decision owner:** outcome, scope, trade-offs, risks, unresolved decisions, and recommendation.
- **Domain authority:** exact domain claim or rule, evidence, applicability, assumptions, and proposed interpretation.
- **Primary workflow user:** actual workflow, user actions, system responses, exceptions, and recovery paths.
- **Affected participant:** required inputs, outputs, dependencies, and consequences of change.
- **Product/design owner:** problem, intended behavior, user journey, scope, and product trade-offs.
- **Delivery/technical owner:** inputs/outputs, states, interfaces, mechanisms, dependencies, and verification.
- **Risk/control owner:** data access, authority, audit, failure, retention, deployment, and recovery controls.

### Review actions

Feedback must identify both the decision and the action:

- `approve`: accept within the reviewer's authority;
- `correct`: identify an inaccurate statement or behavior;
- `challenge`: question the rationale or evidence;
- `constrain`: add a control or boundary;
- `request-evidence`: require supporting information;
- `escalate`: route to a higher or different authority;
- `defer`: postpone pending a named dependency;
- `reject`: decline the proposal within the reviewer's authority.

The review spine must not convert feedback from one category into approval owned by another category.

### Completion

This step is complete when every important decision has:

- one accountable decision owner;
- a domain authority where domain truth is involved;
- identified primary workflow users and affected participants;
- relevant product, technical, and risk reviewers;
- a defined review action;
- an explicit approval, rejection, deferral, or unresolved state.

### Product-development use

This actor model informs the step contract by identifying who supplies each input, who reviews each behavior, who can approve it, and who executes the resulting work. It does not prescribe a particular organizational structure or assume that every client has all categories as separate people.

### E-057 — Failing to rebuild the actor model after identifying its wrong abstraction

**When identified:** When the stakeholder model was corrected to distinguish human responsibilities from automated execution, but the original Review-spine Step 2 was not fully rebuilt from that basis.

**Incorrect principle applied:**

> A corrected row or label is sufficient when the underlying actor model has changed.

**Incorrect outcome:** The review-spine step could retain assumptions from the old model even after “configured agentic process” was identified as the wrong category.

**Why it was wrong:** The correction affected the step's objective, classification basis, information needs, and decision assignments—not only one row.

**Corrected principle:** When the abstraction basis changes, invalidate and rebuild the affected step from that new basis. Do not patch a changed model locally.

**Correct outcome:** Review-spine Step 2 now classifies responsibility instances by authority, participation, impact, product ownership, technical ownership, and control ownership. Automated execution is kept outside the stakeholder model.

**Related principles:** model-level rework; responsibility-based MECE classification; rebuild over patch; execution versus stakeholder separation.

## Review-spine Step 2 concrete — Real roles and stakeholders

**Status:** Partially approved. The Layer 1 product-development reviewer roles are approved; procurement workflow actors and the full step remain for Layer 2 review.

### Objective

Identify the real people and teams who participate in the procurement workflow or product-development review, and state the decision or contribution each makes.

### Why it matters

The review spine must help real people review real work. “Domain authority” or “affected participant” is too abstract unless it is connected to a role such as procurement manager, requester, supplier contact, legal reviewer, or engineering lead.

### Procurement workflow actors

| Real role | How they participate in the sourcing workflow | Typical decisions or inputs |
|---|---|---|
| Procurement manager/buyer | Primary user operating the sourcing workbench | Shapes the request, guides the AI, reviews the RFx, selects suppliers, approves release, and manages responses |
| Requester/business owner | Originates the business need; may not use the product directly | Explains the desired outcome, clarifies ambiguous need, confirms business accuracy |
| Procurement head or delegated approver | Provides higher-level procurement authority where required | Approves policy interpretation, exceptions, spend or sourcing decisions |
| Category manager or procurement SME | Supplies category-specific knowledge when the buyer needs it | Confirms specifications, supplier market context, precedent, and evaluation approach |
| Finance approver | Confirms financial or budget-related constraints when applicable | Validates budget, funding, commercial approval, or spend authority |
| Legal/compliance/security reviewer | Reviews applicable control requirements when the category requires it | Confirms clauses, risks, data/security requirements, and exceptions |
| Technical/operations owner | Confirms operational, technical, integration, or service constraints | Validates feasibility, technical requirements, locations, service levels, and dependencies |
| Supplier contact | Receives the RFx and submits a response | Provides pricing, capabilities, questionnaire answers, terms, and attachments |
| Evaluation participant | Reviews supplier responses against an authorized criterion | Provides technical, commercial, quality, or operational assessment |

These are real workflow roles, not a claim that every organization has each role as a separate person. Applicability is determined by the sourcing category, policy, spend, risk, and organization structure.

### Product-development reviewers

**Status:** Approved for Layer 1.

| Real role | What they review in the product |
|---|---|
| Product manager | Problem framing, target user, workflow, scope, trade-offs, and product behavior |
| Product manager's manager | Completeness of reasoning, strategic fit, risks, prioritization, and missed implications |
| Product designer | User journey, screen purpose, information hierarchy, copy, controls, and interaction states |
| Engineering lead or engineer | Data model, interfaces, state transitions, integrations, reliability, and buildability |
| AI/ML or evaluation engineer | Model boundaries, prompts, retrieval, context, evaluations, confidence, and failure modes |
| Client procurement SME or policy owner | Accuracy of procurement rules, policy applicability, and operational fit |
| Security, legal, compliance, or operations reviewer | Data access, auditability, deployment, retention, controls, and recovery |

These product-development roles review the same product decision from different responsibilities. They are not automatically the same people as the procurement workflow actors.

**Approval scope:** The user approved this product-development reviewer table only. This does not approve the procurement workflow actor table, the role-applicability rules, or the complete Review-spine Step 2.

## Review-spine Step 3 — Reviewer-specific information

**Status:** Approved. Layer 1 only.

### Objective

Give each approved product-development reviewer the smallest complete view needed to make their decision, with direct access to supporting detail when they need to inspect it.

### Why it matters

AI-generated product work creates more detail than any one reviewer should read by default. A reviewer needs enough context to make a responsible decision, but not unrelated implementation detail that obscures the issue.

### Shared information shown to every reviewer

- product/workflow objective;
- current step and desired outcome;
- primary user and affected workflow actors;
- decision being requested;
- importance and failure risk;
- approved constraints and guardrails;
- unresolved decisions;
- current status and version;
- links to evidence and detailed artifacts.

### Role-specific review view

| Reviewer | Must see first | Decision or feedback requested | Drill-down available |
|---|---|---|---|
| Product manager | Problem, target user, workflow outcome, scope, trade-offs, open decisions | Approve product intent and scope | Full step contract, research, alternatives, dependencies |
| Product manager's manager | Problem evidence, strategic fit, risks, prioritization, assumptions, missed implications | Challenge or approve direction, scope, and risk acceptance | Full reasoning, rejected alternatives, impact analysis |
| Product designer | Primary user's goal, journey, screen purposes, decisions, states, content, failure paths | Confirm the experience is understandable and complete | Wireframes, copy, interaction specs, accessibility details |
| Engineering lead/engineer | Inputs/outputs, data contracts, state transitions, mechanisms, integrations, non-functional needs | Confirm buildability and identify technical risks | Schemas, APIs, architecture, implementation plan, recovery behavior |
| AI/ML/evaluation engineer | Model responsibility, context, tools, deterministic boundaries, guardrails, failure modes | Confirm model behavior is bounded and testable | Prompts, retrieval strategy, eval set, traces, thresholds, model configuration |
| Client procurement SME/policy owner | Policy claims, applicable clauses, operational assumptions, approval boundaries | Confirm domain accuracy and policy applicability | Source documents, clause extraction, provenance, conflicts, inferred rules |
| Security/legal/compliance/operations reviewer | Data access, authority, audit, retention, deployment, recovery, operational risk | Approve or constrain production controls | Threat model, data flows, logs, runbooks, incident and rollback plans |

### Information rules

1. The reviewer sees the decision before the detail.
2. Every claim that could change the decision links to evidence.
3. Generated content is labelled as proposed until approved.
4. Unresolved decisions are visible rather than buried in attachments.
5. A reviewer can see what changed since their last review.
6. The view does not hide a risk merely because it is outside that reviewer's primary responsibility.
7. Reviewers may request detail without making the default view overwhelming.

### Review output

Each reviewer records one of:

- approve;
- approve with condition;
- correct;
- challenge;
- request evidence;
- identify risk;
- defer;
- reject.

The response is attached to the exact decision and version reviewed.

### Completion

This step is complete when each approved Layer 1 reviewer role has:

- a defined default view;
- a clear decision or feedback request;
- links to relevant detail;
- visibility into changes, assumptions, and unresolved items;
- a recorded review outcome.

## Review-spine Step 4 — Feedback consolidation and canonical decision

**Status:** Approved. Layer 1 only.

### Objective

Turn feedback from multiple product-development reviewers into one explicit, versioned product decision without allowing the AI or an informal discussion to silently reconcile disagreements.

### Why it matters

AI-generated work creates many possible edits and reviewers may identify conflicting concerns. Without a consolidation process, the team can build from different versions of the product truth, lose the reason for a change, or treat feedback as approval when the responsible owner has not decided.

### Feedback flow

1. Capture each comment against the exact decision, step, artifact, and version reviewed.
2. Identify the reviewer's role and authority.
3. Classify the feedback as clarification, correction, new requirement, risk, dependency, disagreement, evidence request, approval, rejection, or deferral.
4. Identify whether it affects the current decision, a downstream artifact, or only an implementation detail.
5. Detect duplicate, related, and conflicting feedback.
6. Ask the relevant decision owner or domain authority to resolve conflicts.
7. Record the decision, rationale, evidence, and dissenting views where applicable.
8. Update the canonical contract as a new version.
9. run impact analysis across UX, data, AI, tools, deterministic logic, tests, and operations.
10. Route affected artifacts back to their owners for review.

### Decision ownership

| Feedback concerns | Decision owner |
|---|---|
| Product problem, scope, or intended behavior | Product manager, with PM manager approval where required |
| User journey or interaction | Product manager and product designer |
| Procurement rule or operational truth | Client procurement SME, policy owner, or authorized procurement authority |
| Technical feasibility or reliability | Engineering lead or technical owner |
| Model boundary, retrieval, or evaluation | AI/ML or evaluation owner |
| Security, legal, compliance, or operations control | Relevant control owner |

The AI may cluster feedback, identify conflicts, and propose resolutions. It cannot decide which reviewer is right when authority or product trade-offs are involved.

### Feedback states

| State | Meaning |
|---|---|
| `captured` | Feedback is recorded but not yet assessed |
| `triaged` | Affected decision and responsible owner are identified |
| `needs-evidence` | The claim cannot be assessed from available evidence |
| `needs-conflict-resolution` | Reviewers or sources disagree |
| `accepted` | Decision owner accepts the feedback and its impact |
| `rejected` | Decision owner rejects it with rationale |
| `deferred` | Decision is postponed with an owner and due point |
| `implemented-pending-review` | Change is built but not yet re-approved |
| `closed` | Decision and affected artifacts are updated and verified |

### Canonical decision record

Every resolved feedback item records:

- original feedback;
- author and reviewer role;
- affected decision and version;
- evidence and source;
- conflict or trade-off;
- decision owner;
- accepted/rejected/deferred result;
- rationale;
- affected artifacts;
- required re-reviewers;
- implementation and verification status.

### No silent reconciliation

The AI must not merge conflicting feedback into a compromise and present it as consensus. It must show the disagreement, identify the decision owner, and preserve the rejected or dissenting views.

### Completion

This step is complete when all feedback for the reviewed version is either:

- resolved and reflected in a new canonical version;
- rejected with rationale;
- deferred with owner and due point; or
- explicitly accepted as an unresolved risk.

All affected downstream artifacts have an impact status and required re-review path.

## Review-spine Step 5 — Traceability and coverage

**Status:** Approved. Layer 1 only.

### Objective

Link every important approved product decision to the detailed user experience, data, AI, tool, deterministic, implementation, verification, and operational artifacts that realize it.

### Why it matters

High-level alignment is valuable only if it survives translation into downstream work. Traceability makes it possible to see whether an approved decision is implemented, where it is implemented, what proves it works, and what becomes affected when the decision changes.

### Traceability chain

Every important decision should link through:

> Approved decision → step contract → user journey/UI → data/source contract → execution mechanism → implementation → test/evaluation → operational control

The links must work in both directions:

- from a high-level decision down to implementation and evidence;
- from an implementation, test, or user-feedback item back to the decision it supports.

### Coverage record

For each decision, record:

- linked downstream artifact;
- artifact owner;
- artifact version;
- implementation status;
- verification status;
- reviewer and approval status;
- unresolved gap;
- contradiction or drift;
- last checked date;
- required re-review.

### Coverage states

| State | Meaning |
|---|---|
| `not-mapped` | No downstream artifact is linked |
| `mapped-not-started` | Required artifact is identified but work has not begun |
| `in-progress` | Artifact is being designed or built |
| `implemented-unverified` | Artifact exists but evidence is incomplete |
| `verified` | Required tests/evaluations/review are complete |
| `drift-detected` | Artifact no longer matches the approved decision |
| `contradiction` | Linked artifacts contain incompatible behavior |
| `waived` | Gap is explicitly accepted by the decision owner with rationale |
| `closed` | Artifact is approved, verified, and operationally accounted for |

### What the review spine exposes

The reviewer sees:

- coverage percentage only as a navigation aid, never as proof of quality;
- decisions with no linked artifacts;
- artifacts with no approving decision;
- unresolved contradictions;
- unverified implementations;
- stale versions;
- changes requiring re-review;
- evidence supporting completion.

The system must not collapse `implemented` and `verified`, or `linked` and `approved`.

### Change impact

When an approved decision changes, the system identifies affected:

- UI screens, copy, and interaction states;
- data and source contracts;
- prompts, model behavior, retrieval, and evaluations;
- tools and integrations;
- deterministic rules, calculations, and state transitions;
- tests and fixtures;
- security, audit, deployment, and operational controls.

Affected artifacts return to the appropriate review state. The AI may propose the impact set, but owners confirm whether each artifact is actually affected.

### Completion

This step is complete when every important decision in the review spine has:

- a downstream mapping;
- an owner;
- a verification method;
- an approval status;
- a current version;
- a known treatment for gaps, contradictions, and changes.

This does not mean every detail is complete. It means no important decision or implementation dependency is invisible.

## Review-spine Step 6 — Review-package circulation readiness

**Status:** Approved. Layer 1 only.

### Objective

Determine whether the specific product-development review package is sufficiently prepared for its intended reviewers to make the requested decisions.

### Why this matters

A package can be traceable yet still be impossible to review if it lacks required evidence, ownership, context, or a clear decision request. The review process must distinguish a package that is ready for review from one that needs information, is blocked by a dependency, or is being circulated with an explicitly accepted risk.

### Proposed behavior

Before circulation, the system checks:

- the exact decisions reviewers are being asked to make;
- the intended reviewers and decision owners;
- required supporting artifacts and evidence;
- dependencies on earlier approved decisions;
- unresolved contradictions or missing inputs;
- traceability to implementation and verification work;
- version consistency across linked artifacts; and
- whether any exception has an owner and explicit authorization.

The package is not marked ready merely because documents exist. It is ready only when the required review decision can be made from the supplied information.

### Readiness outcomes

The system reports one of these outcomes after checking the review package:

| Outcome | Meaning |
|---|---|
| `ready-for-review` | The intended reviewers can make the requested decisions |
| `needs-information` | Required evidence or input is missing |
| `blocked-by-dependency` | An earlier decision or artifact is unresolved |
| `conflict-requires-resolution` | Linked sources or reviewers disagree |
| `ready-with-approved-risk` | Circulation is allowed despite a known gap, with a named owner and authorization |

### Readiness explanation

Each reported outcome includes:

- the decisions being requested;
- the checks performed;
- the evidence used;
- the exact missing information, if any;
- the unresolved dependency and its owner;
- the conflicting sources or feedback; or
- the approved risk, authorizer, and expiry or review condition.

This lets the recipient understand immediately whether they can review, what is preventing review, and what action is needed.

### Risk authorization

The AI may identify and explain a risk, but it cannot authorize circulation. The person who owns the affected product decision or organizational control must explicitly authorize the risk. The record includes that person's role, scope, rationale, expiry or review condition, and affected artifacts.

### Validity and completion

A readiness result is valid only when it has:

- exactly one readiness outcome;
- the requested review decisions identified;
- the relevant checks and evidence attached;
- all missing inputs, dependencies, or conflicts named;
- an accountable owner for the next action;
- current versions of linked artifacts; and
- explicit risk authorization where applicable.

Step 6 is complete when these conditions are explicitly recorded. If any condition is missing, the package cannot be circulated as ready and returns to `needs-information` or `blocked-by-dependency`.

## Review-spine Step 7 — Reviewer actions after circulation

**Status:** Approved. Layer 1 only.

For each requested decision, the reviewer can:

- approve;
- reject;
- request clarification;
- request evidence;
- propose a correction;
- identify a risk; or
- defer the decision with an owner and due point.

Each action attaches to the exact decision, artifact, and version being reviewed. The response then enters the approved feedback-consolidation process from Review-spine Step 4.

## Review-spine Step 8 — Resulting decision states

**Status:** Approved. Layer 1 only.

| State | Meaning |
|---|---|
| `approved` | The decision owner accepts the decision for the current version |
| `approved-with-condition` | The decision owner accepts the decision subject to an explicitly recorded condition |
| `rejected` | The decision owner rejects it with rationale |
| `needs-clarification` | The reviewer cannot decide without clarification |
| `needs-evidence` | Required support is missing |
| `needs-correction` | The artifact or proposed behavior must change |
| `risk-accepted` | An identified risk is explicitly accepted by the authorized owner |
| `deferred` | The decision is postponed with an owner and due point |
| `superseded` | The decision is replaced by a newer decision version |

These states describe the decision outcome; they do not silently change the product. Any accepted correction creates a new version and triggers the approved impact-analysis process.

### Conditional approval requirements

`approved-with-condition` is valid only when the record includes:

- the condition that must be satisfied;
- the decision owner who approved it;
- the person responsible for satisfying it;
- the affected artifact or behavior;
- the deadline or review point;
- whether the condition blocks release, implementation, or only closure;
- the evidence required to prove satisfaction; and
- the transition after the condition is satisfied or missed.

Until these are recorded, the decision cannot be treated as fully approved or closed.

### Layer 1 reviewer-to-evidence mapping

| Reviewer | Decision they make | Minimum evidence | Decision owner |
|---|---|---|---|
| Product manager | Product solves the intended problem within scope | Problem, target user, workflow outcome, proposed behavior, trade-offs | Product manager |
| PM manager | Direction and prioritization are sound | Problem evidence, alternatives, risks, strategic rationale | PM manager |
| Product designer | Users can understand and complete the journey | User goal, screen sequence, states, copy, failure/recovery paths | Product manager and designer |
| Engineer | Behavior is buildable and reliable | Inputs/outputs, data contract, states, interfaces, dependencies | Engineering lead |
| AI/evaluation reviewer | AI behavior is bounded and testable | Model responsibilities, context, tools, guardrails, evaluation cases, failure modes | AI/evaluation owner |
| Procurement SME/policy owner | Procurement behavior reflects operational rules | Applicable policy clauses, interpretation, scenarios, exceptions, provenance | Authorized procurement or policy owner |
| Security/legal/operations reviewer | Product can operate safely | Data flows, permissions, audit, retention, deployment, recovery controls | Relevant control owner |

## Review-spine Step 9 — New decision-version rule

**Status:** Approved. Layer 1 only.

A new canonical decision version is required when a change affects any approved objective, scope, actor, authority, workflow behavior, user journey, input/output contract, guardrail, permission, policy interpretation, execution boundary, acceptance criterion, evaluation, operational control, or supporting evidence.

A purely editorial correction may update the artifact without creating a new product-decision version, provided it does not alter meaning. If uncertain, the change is treated as substantive and routed for review.

## Review-spine Step 10 — Review-cycle completion

**Status:** Approved. Layer 1 only.

A review cycle is complete only when:

- every requested decision has a recorded outcome;
- no decision remains in `needs-clarification`, `needs-evidence`, or `needs-correction`;
- rejected or deferred decisions include rationale, owner, and next action;
- accepted risks include explicit authorization;
- all affected artifacts are updated or explicitly marked unaffected;
- required re-reviewers have completed their review; and
- the canonical decision version is published with its evidence and traceability links.

A review cycle is not complete merely because all reviewers have responded. Responses must be resolved into canonical decisions.

## Review-spine Step 11 — Layer 1 synthesis audit

**Status:** Approved. Layer 1 only.

Verify that the complete review spine gives each product-development reviewer enough relevant information to make their assigned decisions, while preserving traceability, authority, unresolved issues, and downstream impact.

The audit checks:

- every approved product decision has an owner and reviewer;
- every reviewer has a concrete decision to make;
- every decision has the evidence and artifacts required;
- workflow actors and product-development roles are not conflated;
- no approval is inferred;
- no unresolved dependency is hidden;
- every substantive change has an impact path;
- every review outcome has a canonical state; and
- the review spine is usable without requiring reviewers to read every generated document.

This is a synthesis audit of the approved steps, not a new product requirement.

### Execution result

**Result:** Conditional pass; not implementation-ready.

#### Finding 1 — Decision-state contradiction

Review-spine Step 3 allows the reviewer action `approve with condition`, but Review-spine Step 8 does not define a corresponding canonical decision state. The system cannot faithfully record that action without either adding a state or removing the action.

#### Finding 2 — Step 2 remains only partially approved

The Layer 1 product-development reviewer roles are approved, but the procurement workflow actor model and full role-applicability rules remain outside the approved Layer 1 scope. The review spine must not present those portions as fully settled.

#### Finding 3 — Readiness checks need decision-level mapping

Step 6 names required evidence, dependencies, and linked artifacts, but the audit cannot yet confirm that every reviewer-specific decision in Step 3 has an explicit minimum evidence set and owner. That mapping is required before circulation readiness can be evaluated consistently.

#### Finding 4 — Completion claims are not yet fully reconciled

Step 10 defines review-cycle completion, while Step 11 is approved as an audit objective, but the audit result itself must remain visible as conditional until the findings above are resolved and re-reviewed.

#### Required correction path

1. Resolve the `approve with condition` state contradiction.
2. Map each Layer 1 reviewer decision to its minimum evidence, owner, and required review action.
3. Re-run the Layer 1 synthesis audit.

No product-development review package should be marked implementation-ready based on the current conditional result.

### Scope correction

The procurement workflow actor model is not required to complete the Layer 1 product-development review spine. It remains a Layer 2 SME-review asset for later scenario-led validation. Its pending Layer 2 status must not block Layer 1 implementation readiness.

### Re-audit result

After the approved corrections:

- the `approve with condition` action has a canonical state and validity contract;
- every Layer 1 reviewer decision has minimum evidence and an accountable owner;
- the procurement workflow actor model is correctly scoped to Layer 2; and
- the audit result and remaining scope are explicitly recorded.

**Result:** Layer 1 review-spine synthesis audit passed for the approved scope. Layer 2 and Layer 3 review assets remain future documentation work and are not silently treated as approved.

### E-060 — Treating acknowledgement as approval

**When identified:** When the user replied “okay” after a draft step had been presented.

**Incorrect principle applied:**

> Acknowledgement of a draft can be treated as approval when the conversation is moving forward.

**Incorrect outcome:** The workflow risked advancing without knowing whether the user accepted the step or was merely acknowledging receipt.

**Why it was wrong:** Approval is a state-changing decision and must be explicit, especially when the collaboration protocol requires approval before proceeding.

**Corrected principle:** Treat acknowledgement, silence, and conversational continuation as non-approval. Record approval only when the user explicitly approves the named scope.

**Correct outcome:** Step 6’s objective and proposed behavior are approved because the user explicitly approved that scope. Its remaining fields are not implicitly approved.

### Role applicability

For each step and decision, the review spine records:

- which real roles are involved;
- whether each role is required, conditional, or not involved;
- the organization-specific person or team assigned to the role;
- what information they supply or review;
- the decision they can make;
- the approval or feedback action available;
- what happens if the role is unavailable.

### Concrete example for RFx construction

| Decision | Primary owner | Other relevant actors |
|---|---|---|
| Is the request accurately understood? | Procurement manager and requester/business owner | Category manager if terminology or specifications are unclear |
| Is the sourcing action allowed? | Procurement manager under organizational policy | Procurement head or delegated approver if policy requires escalation |
| Are technical requirements correct? | Technical/operations owner | Requester and category manager |
| Is the RFx format correct? | Procurement manager or template owner | Product designer for usability; policy owner if format is policy-controlled |
| Is the RFx ready to release? | Procurement manager or designated approver | Legal, finance, security, or procurement head when required by policy |

### Automated systems

The AI agent, retrieval system, deterministic services, and document renderer are not stakeholders. They are product components whose behavior is reviewed by the relevant product-development roles and controlled by the approved contracts.

### E-059 — Treating approval of an atomic requirement as approval of the whole step

**When identified:** After the user confirmed the specific question that important decisions must trace bidirectionally to implementation and verification artifacts.

**Incorrect principle applied:**

> A positive response to one review question is approval of the entire step containing that question.

**Incorrect outcome:** Review-spine Step 5 was marked approved even though the user had only approved one atomic requirement within it.

**Why it was wrong:** Approval must be scoped to the exact proposition or field reviewed. A step can contain multiple objectives, rules, outputs, and completion conditions; approving one does not approve the rest.

**Corrected principle:** Record approval at the smallest explicitly reviewed unit. Keep the parent step in draft until all of its required contents and completion conditions have been reviewed and approved.

**Correct outcome:** The bidirectional-traceability requirement is approved and recorded as an atomic decision. Review-spine Step 5 remains draft; no Step 6 should be treated as active until Step 5 is complete.

**Related principles:** scoped approval; atomic review; parent-child decision state; no inferred approval.

### Completion

This step is complete when each workflow decision and each product-development decision has:

- concrete participating roles;
- an accountable owner;
- conditional reviewers where applicable;
- required evidence or input;
- an explicit feedback or approval action;
- a defined response when the role or evidence is unavailable.

### E-058 — Abstracting away the real roles and stakeholders

**When identified:** When Review-spine Step 2 was defined primarily through abstract categories such as “accountable decision owner,” “domain authority,” and “affected participant,” without grounding those categories in the actual procurement and product-development roles.

**Incorrect principle applied:**

> A generic responsibility taxonomy is more reusable and therefore more useful than concrete role modelling.

**Incorrect outcome:** The review spine became difficult to apply. It did not clearly show how a procurement manager, requester, supplier, PM manager, designer, engineer, or client policy owner would use it.

**Why it was wrong:** Reusability should come from a clear role model with configurable applicability, not from removing real-world actors. Abstraction is useful only after the concrete roles and decisions are understood.

**Corrected principle:** Ground the model in real roles and workflow decisions first. Generalize through explicit role applicability and configurable ownership, while retaining the concrete actor names needed for review.

**Correct outcome:** The review spine distinguishes procurement workflow actors from product-development reviewers, identifies which roles are required or conditional for each decision, and keeps automated systems in the execution-mechanism model.

**Related principles:** concrete before abstract; role-to-decision mapping; configurable applicability; real-world fidelity; abstraction after grounding.

## Review architecture and delivery priority

**Status:** User-defined direction for the product-development plan.

### Three review layers

#### Layer 1 — Product-development review

**Purpose:** Build the right product before release.

**Reviewers:** PM, PM's manager, product designer, engineers, AI/evaluation reviewers, and relevant risk/operations reviewers.

**Information level:** Highest detail. Includes step contracts, user journey, UI states, data and source contracts, model/tool/human/deterministic mechanisms, guardrails, acceptance criteria, evaluations, implementation mapping, and operational readiness.

**Review mode:** Detailed, step-by-step, decision-level review.

#### Layer 2 — Procurement workflow SME review

**Purpose:** Validate that the agentic workflow works across a wide variety of real procurement scenarios.

**Reviewers:** Procurement managers, requesters/business owners, category managers, procurement heads, supplier-facing participants, and other applicable workflow actors.

**Information level:** Middle abstraction. It must be comprehensive enough to show the whole workflow, scenarios, exceptions, user responsibilities, AI behavior, and outcomes, but must not expose all implementation detail.

**Review mode:** Scenario-led and end-to-end. Reviewers should be able to inspect how the workflow handles common, ambiguous, exceptional, conflicting, and incomplete procurement situations.

#### Layer 3 — Production-client review and feedback

**Purpose:** Capture feedback from live users and operational signals after deployment, then route the right evidence back into product improvement.

**Reviewers:** Procurement users and other client participants in the live workflow.

**Information level:** Task-specific and contextual. Production users should see the minimum information needed for their current action, not a holistic review model.

**Review mode:** Distributed feedback across conversations, corrections, approvals, source files, support requests, usage signals, and workflow outcomes. The system must consolidate this feedback and present relevant implications to the appropriate Layer 1 reviewers.

### Delivery priority

1. Put Layer 1 review artifacts, process, and traceability in place.
2. Complete the decision log for the full procurement workflow.
3. Complete the prototype against the approved workflow contracts.
4. Review and sign off the prototype.
5. Complete repository documentation and push to GitHub.
6. In the documentation, define Layer 2 and Layer 3 review assets and processes.
7. Document adjacent AI-enabled solutions across the larger procurement lifecycle, without expanding the immediate prototype scope unless explicitly approved.

### Scope control

Layer 2 and Layer 3 are required design and documentation outputs, but they are not current implementation priorities. Their existence must inform Layer 1 contracts where necessary, especially for feedback capture, traceability, and future review routing, but must not create premature product scope.

The immediate working question is therefore: what must Layer 1 reviewers see and approve for each workflow step so that the product can be built and verified correctly?

## Revised user-facing stage map

**Status:** Approved; revised after user correction.

The user-facing workflow is proposed as four stages:

| Stage | User-facing label | Tangible outcome | Internal capabilities included |
|---|---|---|---|
| 1 | Create and approve RFx | An approved RFx ready for supplier invitation | Need capture, context/policy retrieval, field-semantic mapping, quoteability checks, draft generation, buyer review, and approval |
| 2 | Invite suppliers | The approved RFx is sent to suitable, verified suppliers through the chosen channel | Supplier discovery, eligibility checks, contact verification, message generation, sending, delivery tracking |
| 3 | Evaluate responses | A transparent side-by-side comparison is available on a common basis, with supplier answers and evidence understood | Inbound monitoring, response association, extraction, mapping, versioning, normalization, comparison, calculations, questionnaire analysis, and evidence display |
| 4 | Decide and defend award | A supported supplier decision and award rationale are recorded | Natural-language analysis, scenario evaluation, policy checks, decision approval, rationale, export, and audit record |

Organizational context and “make the requirement quoteable” are not separate user-facing stages. They are internal capabilities or buyer interactions within Stage 1 unless a missing dependency requires a visible resolution state.

The existing numbered contracts must be mapped to this revised map before any later-stage approval is reused.

### Cross-stage synthesis audit

**Result:** Conditional pass; canonical ledger consolidation is required.

#### Finding 1 — Current canonical model is stale

The “Current canonical model” still lists the former seven-stage workflow and says Stage 2 is a separate capability, despite the approved four-stage map.

#### Finding 2 — Duplicate and superseded contracts remain visibly active

Old Stage 2 context, Stage 3 quoteability, Stage 5 response understanding, Stage 6 comparison, and the earlier Stage 1 transition sections remain in the ledger with statuses that can be mistaken for current contracts.

#### Finding 3 — Revised Stage 3 and Stage 4 are not consolidated as canonical sections

Their approved decisions exist in the event log, but the ledger does not yet contain one clean canonical contract for each revised stage. This creates a gap between decision approval and implementation-ready documentation.

#### Finding 4 — Approval status lacks version/scope discipline in the old summary

The summary uses broad labels such as “Stage 4 approved” and “Stage 6 approved” without making clear that those historical approvals are superseded or scoped to the former stage map.

#### Finding 5 — Legacy Stage 1 transition remains contradictory

The older “Stage 1 transition to RFx construction” section is still present as product behavior draft, although the approved Stage 1 contract treats RFx construction as internal behavior and ends at the approved-RFx state.

#### Required correction path

1. Update the current canonical model to the approved four-stage map.
2. Mark old stage sections as historical/superseded or consolidate them into the revised canonical contracts.
3. Create clean canonical Stage 3 and Stage 4 contracts from the approved decisions.
4. Reconcile all cross-stage transitions and dependencies.
5. Re-run the cross-stage synthesis audit.

### E-062 — Letting an internal AI capability become a user-facing stage

**When identified:** When supplier-response understanding was separated from comparison as its own user-facing Stage 3, even though the buyer's intended outcome is a fair comparison.

**Incorrect principle applied:**

> A meaningful AI capability should become a separate user-facing workflow stage.

**Incorrect outcome:** The workflow exposed “receive and understand responses” as a separate outcome instead of presenting the buyer with the comparison that this capability enables.

**Why it was wrong:** The distinction was derived from internal processing rather than the buyer's tangible objective. Capability boundaries and user-facing stage boundaries are different abstractions.

**Corrected principle:** Define user-facing stages by tangible real-world outcomes. Keep AI capabilities inside the stage whose outcome they enable unless the capability creates a distinct user decision or artifact.

**Correct outcome:** Supplier-response association, extraction, mapping, versioning, and normalization are capabilities within **Evaluate responses**, whose buyer-facing outcome is the transparent comparison.

### Stage 1 outcome correction

Stage 1 includes both draft RFx generation and explicit procurement-manager approval. The draft is an intermediate state: `draft-rfx-awaiting-buyer-review`. The stage's completed outcome is `approved-rfx-ready-for-supplier-invitation`.

### Stage 1 downstream impact from approved-RFx outcome

The Stage 1 outcome change reopens these contract fields for review:

- explicit buyer action to approve, reject, or return the draft for correction;
- the approval authority and approval event record;
- rejection and return-for-correction states;
- completion evidence proving approval of the exact RFx version;
- the distinction between a draft awaiting review and an approved RFx;
- the dependency consumed by Stage 2; and
- verification that supplier invitation is blocked until the approved-RFx state exists.

The Stage 1 outcome correction is approved, but these dependent fields must be reconciled before the Stage 1 contract is treated as fully stable.

### Approved buyer-approval contract

- The buyer reviews the draft RFx and chooses **Approve RFx**, **Return for correction**, or **Reject/cancel request**.
- Approval records the exact RFx version, approving procurement manager, timestamp, evidence and policy/format checks, unresolved issues, and rationale where required.
- Approval is allowed only when no blocking or undetermined issue remains.
- Returning for correction creates a new draft version and preserves the reason.
- Any edit after approval creates a new draft version and removes the approved status.
- `approved-with-condition` does not unlock supplier invitation unless applicable policy explicitly permits it and the condition is recorded.
- The completed state is `approved-rfx-ready-for-supplier-invitation`.

### E-063 — Failing to run and record impact analysis after an outcome change

**When identified:** When the user changed and approved Stage 1’s final outcome as `approved-rfx-ready-for-supplier-invitation`.

**Incorrect principle applied:**

> Once the new outcome is approved, the existing step contract can be treated as complete unless a downstream problem is later noticed.

**Incorrect outcome:** The assistant presented Stage 1 as fully approved without immediately reopening the dependent approval actions, states, evidence, authority, and Stage 2 transition contract. The impact was later recorded as a status note, but not as an explicit error-register entry.

**Why it was wrong:** A change to a step’s outcome changes the contract’s completion condition and can affect every field that proves, authorizes, verifies, or consumes that outcome. Impact analysis is required at the moment of the change, not only after a user discovers a consequence.

**Corrected principle:** Treat every approved change to an objective, output, state, authority, or transition as a dependency-changing event. Immediately identify affected fields and downstream contracts, reopen them, and record both the impact and the reasoning error if the impact was missed.

**Correct outcome:** Stage 1’s approved outcome is retained, while its dependent approval and transition fields remain explicitly reopened until reconciled. Stage 2 cannot rely on the new outcome as a complete dependency until that reconciliation is approved.

**Related principles:** impact analysis at change time; outcome-to-contract propagation; error-register completeness; approval scope; dependency integrity.

## Stage 3 — Evaluate responses

**Status:** Approved canonical contract.

### Objective

Enable the procurement manager to evaluate supplier offers on a transparent, comparable basis while preserving each supplier’s original response, differences, limitations, and supporting evidence.

### Boundary

- Supplier-response association, extraction, versioning, mapping, and normalization are internal capabilities.
- The buyer-facing outcome is the comparison workspace.
- Deterministic mechanisms perform calculations, conversions, and validation.
- AI interprets varied responses, proposes mappings, explains differences, and supports analysis.
- Stage 3 does not make the award decision.

### Starting state and authoritative inputs

Stage 3 begins from an approved RFx, recorded supplier invitations, response-channel context, and inbound supplier messages or files. The applicable policy or authorized buyer decision must establish whether evaluation may begin.

| Input | Authority |
|---|---|
| Requested lines, units, questionnaire, and terms | Approved RFx |
| Supplier offers and claims | Original supplier messages and attachments |
| Supplier identity and response version | Release record, supplier records, and message evidence |
| Treatment of late, incomplete, or non-comparable responses | Applicable policy or authorized procurement decision |
| Currency/unit conversion basis | Policy, RFx terms, or authorized buyer guidance |
| Evaluation criteria and weights | Approved RFx, policy, or authorized procurement decision |
| Corrections and clarifications | Procurement manager |
| Calculations and validation | Deterministic mechanisms |
| Interpretation and proposed mappings | AI, subject to buyer review |

### Internal capability sequence

1. Preserve inbound messages and attachments.
2. Associate each response with the RFx and supplier using multiple evidence signals.
3. Classify responses, revisions, clarifications, duplicates, unrelated items, and unknown associations.
4. Extract and map content to RFx lines, questionnaire fields, and terms.
5. Surface uncertain mappings, missing values, conflicts, substitutions, and deviations.
6. Let the buyer resolve material association and mapping issues.
7. Apply policy-authorized treatment to incomplete, late, conflicting, or non-comparable responses.
8. Deterministically normalize units, currencies, dates, and commercial bases.
9. Deterministically calculate totals and derived values with visible formulas.
10. Present the side-by-side comparison with evidence and provenance.

### Comparison readiness

The comparison may open only when associations, active versions, material mappings, provenance, transformation bases, calculations, policy permission, and exception authority are explicit.

| Outcome | Meaning |
|---|---|
| `comparison-ready` | Integrity checks pass and policy permits comparison |
| `comparison-ready-with-approved-exceptions` | Policy or authorized procurement decision permits visible exceptions |
| `comparison-blocked` | Data integrity, policy authority, or required evidence is insufficient |

### Buyer-facing workspace

The buyer sees readiness, a side-by-side line-item table, original and normalized values, formulas, questionnaire answers, commercial terms, documents, deviations, exceptions, evidence links, and issue-resolution controls. Buyer questions and files are relevance-checked against the current RFx comparison. Unsupported inputs do not produce invented answers.

### Evaluation authority

Approved criteria may be applied. AI may propose new criteria or analysis, but changing an approved criterion or weight requires an authorized procurement decision and a new evaluation-basis version.

### Completion and transition

Stage 3 completes at `comparison-ready-for-award-decision`. It remains `comparison-blocked` when required conditions are unresolved. The next stage owns supplier selection and award rationale.

## Stage 4 — Decide and defend award

**Status:** Approved canonical contract.

### Objective

Enable the procurement manager to select a supplier through an authorized decision process and produce a defensible award rationale grounded in the approved comparison, policy, evidence, and documented trade-offs.

### Boundary

- Stage 3 comparison is the factual and numerical foundation.
- AI answers questions, explains trade-offs, evaluates approved scenarios, and proposes recommendations.
- Deterministic mechanisms validate criteria, permissions, calculations, decision state, and audit records.
- The procurement manager or authorized approver makes the award decision.
- Award communication or contract execution is outside this stage unless separately approved.

### Starting state and authority

Stage 4 begins only from `comparison-ready-for-award-decision` with current comparison and evaluation-basis versions, visible supplier evidence and exceptions, and an applicable award-governance basis.

The AI proposes and explains. It cannot approve the award or override policy. Original supplier evidence, deterministic comparison outputs, approved criteria, policy clauses, buyer guidance, and authorized human decisions retain distinct authority.

### Buyer decision journey

1. The buyer asks a question or requests analysis over the comparison.
2. The AI responds using comparison data and linked supplier evidence.
3. The buyer inspects totals, criteria, questionnaire answers, exceptions, and trade-offs.
4. The AI may propose a supplier and explain the recommendation.
5. The buyer confirms or changes the decision basis within authorized limits.
6. The system checks award policy, required approvals, exceptions, and conflicts.
7. The buyer records the intended decision or routes it to the required approver.
8. The authorized decision-maker approves, rejects, or returns it for correction.
9. The system creates the final award rationale and audit record.

### Policy-based award gate

The system identifies the comparison-to-award transition, retrieves candidate award-governance clauses, extracts conditions and required authority, evaluates applicability, and checks approvals, conflicts, and evidence. It does not invent universal award blockers.

### Decision and rationale record

The record contains RFx and comparison versions, selected supplier and scope, evaluation-basis version, decision-maker and authority, policy clauses, supplier evidence, criteria, calculations, trade-offs, alternatives considered, risks, assumptions, AI analysis versus human confirmation, final status, and audit history.

### Completion states

| State | Meaning |
|---|---|
| `award-decision-ready` | Prerequisites for an authorized decision are satisfied |
| `needs-policy-resolution` | Award treatment is unclear under applicable policy |
| `needs-approval` | A required approver has not decided |
| `needs-decision-evidence` | Required support is missing |
| `award-blocked` | Applicable policy prohibits the decision |
| `award-returned-for-correction` | Decision or rationale requires revision |
| `award-approved` | An authorized supplier award is recorded |
| `no-award-approved` | An authorized no-award decision is recorded |

Stage 4 ends at `award-approved` or `no-award-approved`. The final record remains traceable and exportable.

## Stage 1 — Create and approve RFx

**Status:** Approved. This supersedes the earlier Stage 1 contract.

### Step name

Create a draft RFx from the requester’s business need.

### Objective

Help the procurement manager turn a requester’s business need and the organization’s available evidence into an approved RFx ready for supplier invitation.

### Importance

The procurement manager needs a usable, buyer-approved RFx before anything is sent externally. The system must help them gather and clarify the requester’s input, apply relevant organizational evidence, respect policy and format requirements, expose unresolved issues, and support explicit buyer approval.

### Primary user and upstream participant

- **Primary product user:** procurement manager.
- **Upstream participant:** requester, whose input may arrive through the procurement manager, email, documents, forms, or another channel.
- Direct requester interaction with the product is optional and must not be assumed.

### Starting state

The procurement manager starts a new sourcing request and has either:

- a requester message or description;
- an attached requester document;
- a prior RFx or related organizational reference; or
- enough initial information to ask the AI for help gathering the need.

### User journey

1. The procurement manager starts a new RFx.
2. They provide or import the requester’s input.
3. The AI summarizes the business outcome and broad need.
4. The AI highlights only material ambiguity or missing qualifiers.
5. The AI identifies which policy clauses, organizational context, and RFx format definitions are needed.
6. The manager connects or selects permitted sources and adds guidance.
7. The AI retrieves evidence, explains relevance, and proposes clarifications or field mappings.
8. The manager corrects, adds, excludes, or confirms information.
9. The AI checks permission to source, applicable policy, format semantics, and required mappings.
10. The AI generates a draft RFx for procurement-manager review.
11. The procurement manager approves, rejects, or returns the draft for correction.

Need clarification and source grounding may loop within this journey. The requester is not required to operate the product.

### Inputs and authority

| Input | Source/authority |
|---|---|
| Requester need | Requester-provided content, supplied through the procurement manager or configured channel |
| Organizational policy | Organization policy, version, and authorized procurement confirmation |
| Organizational context | Connected evidence and procurement-manager guidance |
| RFx format and field semantics | Organization-supplied or organization-confirmed template/schema |
| Clarifications and preferences | Procurement manager, acting as head pilot |
| Permission to source | Applicable policy clause or authorized procurement decision |

### Execution mechanisms

| Behavior | Mechanism |
|---|---|
| Interpret requester language and propose summary | LLM |
| Identify material ambiguity and evidence questions | LLM + deterministic materiality/state rules |
| Search policy, context, and template sources | Search/repository tools + deterministic source/provenance handling |
| Extract policy clauses and field semantics | LLM + deterministic version/source tracking |
| Confirm authority and approval states | Human decision + deterministic permission/state controls |
| Map facts to RFx fields | LLM proposal + deterministic schema validation + human correction where material |
| Normalize units, currencies, and dates | Deterministic code, using approved rules or user-confirmed basis |
| Generate RFx wording and structure | LLM constrained by confirmed policy and field contract |
| Store versions, evidence, and audit events | Deterministic storage and event logging |
| Render output | Deterministic document-generation tool |

### Output

The step produces an intermediate **draft RFx for procurement-manager review** and, after explicit buyer approval, an **approved RFx ready for supplier invitation**, including:

- scope and boundaries;
- line items;
- quantities and units;
- questionnaire;
- terms and conditions;
- response instructions;
- attachments and evidence requirements;
- policy and format references;
- assumptions, missing values, and unresolved issues;
- field-level provenance;
- validation results.

The draft is not approved for supplier release until the procurement manager explicitly approves it. The completed stage outcome is `approved-rfx-ready-for-supplier-invitation`.

### Completion evidence

This step is complete when:

- the procurement manager has supplied or confirmed the requester’s need;
- material ambiguity about what is being sourced is resolved or explicitly classified as non-blocking;
- the applicable policy status and permission to source are known;
- the RFx format and material field meanings are organization-supplied or confirmed;
- the AI has produced a traceable draft RFx;
- unresolved issues are visible with responsible next action;
- the draft is ready for buyer review;
- the procurement manager has explicitly approved the RFx; and
- the approved RFx version is recorded as `approved-rfx-ready-for-supplier-invitation`.

### Failure states

- `needs-requester-input`;
- `needs-context`;
- `needs-policy-confirmation`;
- `policy-prohibits-request`;
- `needs-format-confirmation`;
- `needs-field-mapping`;
- `conflicting-evidence`;
- `missing-required-value`;
- `draft-rfx-awaiting-buyer-review` is not a failure state and is represented only by the next-transition outcome.

### Next transition

The intermediate transition is **`draft-rfx-awaiting-buyer-review`**. After explicit buyer approval, the completed stage transitions to **`approved-rfx-ready-for-supplier-invitation`**. Only the latter is an input to supplier invitation; it does not itself send the RFx.

### Verification

The team must verify that:

- a requester does not need to use the product directly;
- the manager can begin with unstructured requester input;
- context can clarify the business need inside the same journey;
- policy and format are separately grounded;
- model proposals cannot bypass deterministic permission or state controls;
- unsupported policy or opaque-template generation is not presented as day-one capability;
- the generated RFx remains traceable to requester input, policy, context, guidance, and template semantics; and
- supplier invitation cannot proceed without the explicit buyer approval state.

### Stage 1 review-spine audit

**Result:** Conditional pass; Stage 1 remains draft for approval.

#### Finding 1 — Contradictory transition definitions

The contract first defines the next transition as `draft RFx ready for procurement-manager review`, then later defines it as a transition to RFx construction. These are not the same state. The latter reflects the superseded internal-stage interpretation and must be removed or explicitly reclassified as internal behavior.

#### Finding 2 — Success state is listed as a failure state

`draft-rfx-ready-for-review` appears in the failure-state list even though it is the intended successful output state. Failure states and successful completion states must be separate.

#### Finding 3 — Completion and buyer review are not fully separated

The contract says the step is complete when the draft is ready for buyer review, but it does not yet state the exact state that represents “draft generated and awaiting buyer review,” or how that state differs from a draft with unresolved issues that cannot be reviewed responsibly.

#### Finding 4 — Review evidence is not yet mapped to Stage 1 decisions

The output contains policy, format, provenance, assumptions, and validation information, but the contract does not yet identify which exact buyer decision each evidence group supports. The approved Layer 1 reviewer-evidence mapping must be applied to Stage 1 before implementation readiness.

#### Required correction path

1. Retain one user-facing transition: draft RFx ready for procurement-manager review.
2. Remove “RFx construction” as a user-facing next transition; retain construction as internal execution where applicable.
3. Separate successful output states from failure states.
4. Define the buyer-review waiting state and its boundary against unresolved/blocking issues.
5. Map Stage 1 evidence to the buyer, product, design, engineering, AI/evaluation, policy, and control decisions that require it.

### Approved transition correction

- Internal AI/system behavior: construct the draft RFx.
- Successful user-facing outcome: `draft-rfx-awaiting-buyer-review`.
- This is the single next transition from Stage 1.
- `draft-rfx-awaiting-buyer-review` is a completion state, not a failure state.
- Blocking states remain separate, including `needs-requester-input`, `needs-policy-confirmation`, `needs-format-confirmation`, `needs-field-mapping`, `conflicting-evidence`, and `policy-prohibits-request`.

### Approved reviewability boundary

`draft-rfx-awaiting-buyer-review` is allowed only when:

- all required RFx fields have a confirmed meaning;
- required values are present or explicitly permitted as assumptions;
- policy and format checks have an applicable basis;
- no issue is classified as blocking by the applicable policy, format contract, or field contract; and
- any remaining non-blocking issues are visible in the draft.

If an issue may be blocking but the applicable rule is unclear, the system does not guess. It remains in a resolution state such as `needs-policy-confirmation`, `needs-format-confirmation`, or `needs-field-mapping`.

The product does not invent a universal blocker checklist; the relevant policy or approved contract determines the consequence.

### Stage 1 evidence-to-decision mapping

| Buyer decision | Evidence shown |
|---|---|
| Does the RFx accurately reflect the business need? | Requester input, AI summary, assumptions, and field-level source links |
| Is this sourcing action permitted? | Applicable policy version, clause, scope, interpretation, and authority |
| Is the RFx in the approved format? | Selected template/schema, field definitions, and format validation |
| Are the line items and questionnaire usable for suppliers? | Field mappings, units, quantities, required/optional status, and supplier response instructions |
| Are all material issues resolved? | Validation results, unresolved issues, blocker basis, owner, and next action |
| Can this draft proceed to buyer approval? | Consolidated status showing whether any policy, format, field, or evidence dependency remains unresolved |

The buyer can inspect the evidence behind each decision without searching through raw files.

### Revised Stage 1 re-audit result

The approved transition correction was applied: the stale RFx-construction transition was removed, and the successful outcome is now `draft-rfx-awaiting-buyer-review`.

One issue remains before Stage 1 can pass its synthesis audit. The failure state `draft-with-visible-issues` is ambiguous because the approved boundary permits non-blocking issues to remain visible in a buyer-reviewable draft, while material unresolved or potentially blocking issues must keep the request in a resolution state.

The state needs a clear distinction between:

- a reviewable draft with explicitly non-blocking issues; and
- a request that cannot produce a reviewable draft because an issue may be blocking or its consequence is undetermined.

### Approved issue-state correction

- Remove `draft-with-visible-issues` as a separate workflow state.
- Keep one successful state: `draft-rfx-awaiting-buyer-review`.
- Attach issue classification to the draft as `non-blocking-issue`, `blocking-issue`, or `blocking-status-undetermined`.
- Allow the successful state only when every issue is explicitly `non-blocking-issue`.
- If an issue is `blocking-issue` or `blocking-status-undetermined`, remain in the relevant resolution state.

Workflow state is therefore separate from issue detail. The system never treats an unresolved potentially blocking issue as a reviewable draft.

### Final Stage 1 synthesis audit

**Result:** Passed for the revised Stage 1 scope.

The audit confirms:

- the procurement manager is the primary product user;
- the draft RFx is the first tangible outcome;
- internal construction is separated from the user-facing transition;
- the successful transition is `draft-rfx-awaiting-buyer-review`;
- blocking consequences come from applicable policy, format, or field contracts;
- issue severity is separate from workflow state;
- buyer decisions have mapped evidence and accountable ownership;
- policy, format, field semantics, requester input, guidance, and provenance remain distinct; and
- the draft cannot be produced for buyer review when a potentially blocking issue is unresolved or undetermined.

Stage 1 is now ready for explicit user approval as a complete workflow-step contract. This approval is separate from approval of its implementation, UI, or prototype.

### Stage-map correction required

The earlier numbered stage map cannot be retained automatically. Stage 2 is no longer a separate user-facing stage, and the approved Stage 1 outcome may overlap with the earlier Stage 3 “make the requirement quoteable” contract. Therefore the user-facing stage labels, boundaries, and transitions must be re-derived from the approved outcomes before Stages 3–6 are re-audited.

### E-078 — Treating the RFx attachment as the complete supplier invitation

**When identified:** During the definition of Stage 2 starting state and authority.

**Incorrect principle applied:** Treat the approved artifact being transmitted as the whole communication required for the workflow step.

**Incorrect outcome:** The Stage 2 contract accounted for the RFx attachment and delivery status but omitted the supplier-facing subject and message body.

**Why it was wrong:** A supplier invitation is an outbound communication package. The message establishes context, identifies the action expected from the supplier, and carries response instructions that may not belong inside the attachment. The subject and body also require template, policy, version, and approval handling.

**Corrected principle:** Define every externally actionable communication as a complete package: recipient, subject, message body, attachments, response instructions, sender identity, channel, and delivery outcome. Each component needs an approved or explicitly confirmed basis.

**Correct outcome:** Stage 2 must include subject/body template selection or creation, buyer review, and inclusion of the approved subject/body with the RFx attachment in the send record.

**Related principles:** complete outbound artifact; supplier action clarity; template authority; communication provenance; delivery evidence.

### E-126 — Treating specified verification as executed verification

**When identified:** During the final implementation-readiness audit, when the traceability matrix was marked `Planned` and no executable test results existed.

**Incorrect principle applied:** Treat a complete verification specification as evidence that the product has been verified.

**Incorrect outcome:** Implementation readiness could be overstated even though no deterministic, AI, workflow, UI, asset-integrity, or end-to-end test had run.

**Why it was wrong:** Readiness requires observed results, not only planned assertions.

**Corrected principle:** Keep specification, implementation, execution, and result states separate. A test becomes `Passed`, `Failed`, or `Blocked` only after execution evidence exists.

**Correct outcome:** The matrix remains `Planned` until executable tests and run metadata are created; implementation readiness cannot pass on the matrix alone.

### E-125 — Retaining an older UI after approving new screen contracts

**When identified:** During the final implementation-readiness audit, when the current UI was compared with the approved five-screen journey.

**Incorrect principle applied:** Treat an existing prototype as implementation progress even after its governing screen contracts have changed.

**Incorrect outcome:** The current app still contains the older sources/prompt/RFx/send/replies/compare/award flow, including an award screen that functions as an analysis view, rather than the approved screen contracts.

**Why it was wrong:** Once the product contracts are approved, implementation must be assessed against the canonical contracts, not the historical prototype.

**Corrected principle:** Reconcile implementation against the current canonical reference before readiness can pass; superseded UI is rework, not partial compliance.

**Correct outcome:** Rebuild or replace the affected UI flow so it implements the approved five screens, sections, ownership, states, evidence access, and guided-demo controls.

### E-124 — Claiming inspectable demo assets without creating them

**When identified:** During the final implementation-readiness audit, when the repository was checked for the policy, past RFx, supporting sources, contact evidence, invitation template, and supplier-response files required by the guided demo.

**Incorrect principle applied:** Treat a manifest and embedded snippets as equivalent to the concrete artifacts the buyer must inspect in the demo.

**Incorrect outcome:** The UI could show source names and metadata but could not reliably open the actual documents, emails, images, or templates promised by the screen contracts.

**Why it was wrong:** Evidence-viewing interactions require real runtime assets, not references or representative text alone.

**Corrected principle:** Create, validate, link, and test every concrete demo artifact before implementation readiness is claimed.

**Correct outcome:** The guided demo contains scenario-relevant viewable files/messages and their provenance, including the complete response and delivery paths.

### E-123 — Defining test categories without proving contract coverage

**When identified:** During the verification/evaluation synthesis audit, when checking whether every approved AI behavior and deterministic mechanism had explicit test coverage.

**Incorrect principle applied:** Treat a broad set of test categories as evidence of coverage without mapping each approved contract to concrete tests.

**Incorrect outcome:** The system could contain untested behaviors or mechanisms while appearing comprehensive at the category level.

**Why it was wrong:** Verification must demonstrate coverage of the approved product contract, not merely contain a plausible collection of test types.

**Corrected principle:** Maintain an explicit traceability matrix from every approved behavior, mechanism, handoff, state transition, failure path, and user outcome to one or more verification assets.

**Proposed correction:** Create a contract-to-test matrix with coverage status and gaps, requiring at least success, failure, handoff, and user-outcome assertions where applicable.

### E-122 — Hiding deterministic comparison assembly inside an AI handoff

**When identified:** During the deterministic-mechanism synthesis audit, when checking whether every system action had an explicit mechanism contract.

**Incorrect principle applied:** Treat a deterministic operation as a detail of an AI behavior rather than as an independently reviewable mechanism.

**Incorrect outcome:** The product had no explicit contract for how the comparison assembles supplier rows and RFx columns, decides inclusion, preserves ordering, or handles missing values.

**Why it was wrong:** The side-by-side comparison is a core user outcome. Its correctness depends on deterministic assembly independent of model interpretation.

**Corrected principle:** Give every material deterministic operation its own contract when it affects a user-visible output, state transition, calculation, permission, or audit result.

**Proposed correction:** Define a Comparison-assembly mechanism covering response inclusion, RFx-line ordering, supplier columns, missingness, exception placement, original/normalized pairing, provenance links, and versioned output.

### E-121 — Leaving ambiguous normalization treatment undefined

**When identified:** When the normalization objective referred to an “approved treatment for ambiguous cases” without stating what determines that treatment.

**Incorrect principle applied:** Use a broad approval phrase instead of defining the decision basis for a transformation.

**Incorrect outcome:** It was unclear when Aera should normalize automatically, consult policy, or stop and flag a missing basis.

**Why it was wrong:** Normalization can change how supplier offers are compared. The system needs an explicit distinction between deterministic conversions and interpretations requiring policy.

**Corrected principle:** Classify transformations by ambiguity. Apply deterministic conversions directly; use applicable policy for policy-defined ambiguity; preserve and flag values when no approved basis exists.

**Correct outcome:** Unambiguous conversions run automatically. Ambiguous cases follow applicable policy. Policy-silent or conflicting cases remain unnormalized and are not presented as safely comparable.

### E-120 — Using a singular audit link for an append-only event history

**When identified:** During the cross-screen data-model synthesis audit, when reconciling the Sourcing case’s `audit_record_id` with the Audit record’s one-event-per-record design.

**Incorrect principle applied:** Use a singular convenience link for a history that is actually a collection of immutable events.

**Incorrect outcome:** It was unclear how the Sourcing case would retrieve the complete chronological audit history rather than one audit record.

**Why it was wrong:** Auditability requires a complete, ordered event stream. A singular field cannot represent that relationship without an undefined aggregation layer.

**Corrected principle:** Model cardinality explicitly. A parent record should reference a stable audit stream, while individual append-only events reference the parent and preserve sequence.

**Proposed correction:** Replace `audit_record_id` on the Sourcing case with `audit_stream_id`; each Audit record retains `case_id`, `sequence_number`, and `correlation_id`.

### E-119 — Allowing analysis completion without downstream readiness

**When identified:** When the comparison screen used a checkbox that only acknowledged review, allowing transition without verifying that the next screen could support an award recommendation.

**Incorrect principle applied:** Treat user review completion as sufficient for a workflow transition without checking the receiving step’s entry conditions.

**Incorrect outcome:** The buyer could proceed to award decision and discover that the comparison lacked required coverage, normalization, provenance, resolved exceptions, or sufficient analysis.

**Why it was wrong:** A handoff must guarantee that the next real-world task is actionable. Buyer acknowledgment cannot substitute for system readiness checks.

**Corrected principle:** Define every transition by the receiving step’s entry contract. Run the required checks before enabling the buyer acknowledgment and transition action.

**Correct outcome:** Aera verifies comparison and analysis readiness against the approved RFx, policy, and comparison contract. Only then is the buyer’s acknowledgment enabled: `I acknowledge that the comparison and resulting analysis are accurate and sufficient for award recommendation.`

### E-118 — Softening a required workflow boundary

**When identified:** When the Evaluate responses boundary copy said the comparison “helps you understand” the offers and that recommendations were handled next.

**Incorrect principle applied:** Use diplomatic, positive framing for a workflow boundary even when the user needs a direct statement of what the current screen is not for.

**Incorrect outcome:** The buyer could interpret the analysis screen as also supporting an award decision.

**Why it was wrong:** A stage boundary must be unmistakable when crossing it changes the buyer’s task and the system’s allowed behavior.

**Corrected principle:** State the current purpose and excluded action directly, then name where the excluded action occurs.

**Correct outcome:** `This screen is for understanding the comparison, not choosing the award. Award recommendations come next.`

### E-117 — Defaulting operational delivery recovery to unspecified communication rules

**When identified:** When the send-and-delivery flow said failed or bounced messages should surface a next action “according to applicable workflow rules.”

**Incorrect principle applied:** Default an operational recovery path to a broad policy lookup instead of defining the concrete action for the known failure state.

**Incorrect outcome:** The buyer was not told what happens after a delivery failure or bounce, and the product behavior was left ambiguous behind “communication rules.”

**Why it was wrong:** A failed delivery has a known operational owner and a direct recovery: the buyer supplies an alternative email for that supplier and explicitly retries. The system must make that path concrete.

**Corrected principle:** Define recovery from the observed failure state and the responsible actor’s real-world action. Use governance rules only where they determine a genuinely variable or consequential exception.

**Correct outcome:** Show the failure reason, let the buyer provide an alternative supplier email, validate that it is present, enable an explicit retry, and record the retry outcome.

### E-116 — Omitting supplier-contact evidence assets

**When identified:** When reviewing the Invite suppliers screen’s supplier-contact discovery and provenance requirement.

**Incorrect principle applied:** Treat extracted supplier contacts as screen data rather than as evidence-backed runtime outputs requiring inspectable source assets.

**Incorrect outcome:** The demo asset plan required template/source evidence but did not explicitly require source records for the supplier names, email addresses, roles, and relevance decisions shown to the buyer.

**Why it was wrong:** Recipient selection is an externally consequential buyer decision. The buyer must be able to verify where each contact came from and why it is relevant before approving the recipient set.

**Corrected principle:** Every extracted value that influences an externally consequential decision must have a concrete source asset, provenance record, relevance basis, and working inspection path.

**Correct outcome:** Create demo supplier-contact records linked to their originating inbox messages or repository documents, with contact field, source, date/version where available, relevance basis, conflicts, and `View source` access.

### E-115 — Failing to verify invitation evidence assets

**When identified:** When the buyer asked whether the invitation template and source had been covered in the demo assets.

**Incorrect principle applied:** Treat a screen interaction requirement as complete without tracing it to the concrete runtime assets needed to demonstrate it.

**Incorrect outcome:** The demo asset plan did not explicitly require an inspectable invitation template and source, so the buyer could not yet be guaranteed the promised `View template` and `View source` actions.

**Why it was wrong:** A guided demo must demonstrate the real workflow with actual inspectable artifacts. Evidence access cannot be represented by labels alone.

**Corrected principle:** Every evidence-viewing interaction must map to a concrete runtime asset, provenance record, and verification check before implementation.

**Correct outcome:** Create and link the invitation template, its source message/document, version, provenance, and rendered usage for the demo; verify that both can be opened from the invitation screen.

### E-114 — Omitting template and source inspection from the invitation screen

**When identified:** During review of the Invite suppliers screen layout.

**Incorrect principle applied:** Show the selected template and provenance as metadata without making the underlying artifacts directly inspectable.

**Incorrect outcome:** The buyer could review the rendered message but could not view the actual template or the source used to select it.

**Why it was wrong:** The buyer must be able to verify the basis of an externally consequential message before approving it.

**Corrected principle:** When a workflow decision depends on a template or source, expose direct access to both the selected artifact and its source at the decision point.

**Correct outcome:** The Invitation section includes `View template` and `View source`, alongside the subject, body, version, provenance, and resolved recipient fields.

### E-113 — Promoting internal validation into a separate user-facing step

**When identified:** When the buyer questioned why a separate Validation section existed after issues and assumptions had been resolved.

**Incorrect principle applied:** Treat every internal capability that checks completion as a separate user-facing workflow step.

**Incorrect outcome:** The buyer was asked to navigate an additional Validation section even though the real-world outcome was simply to resolve the issues and then approve the RFx.

**Why it was wrong:** The product workflow must follow the buyer’s real decision sequence. A system check can run automatically at a transition point without creating another user task or approval layer.

**Corrected principle:** Keep internal readiness checks inside the user-facing step whose outcome they govern. Surface the result, route failures to the relevant section, and expose a user action only for the distinct real-world decision.

**Correct outcome:** After the buyer confirms all issue treatments, Aera automatically checks policy, format, required fields, and supplier instructions. If the checks pass, the same workspace shows `RFx ready for approval` and `Approve RFx`. If they do not pass, the buyer is taken to the relevant unresolved section.

**Related principles:** tangible user outcome; internal capability versus user-facing step; single approval authority; automatic readiness gate; no duplicate workflow layer.

### E-112 — Blurring system validation with buyer review

**When identified:** When the section was titled `Validation` while the supporting line said `Check the RFx before approval`.

**Incorrect principle applied:** Use concise action language without naming who performs the action.

**Incorrect outcome:** The interface made it unclear whether Aera or the procurement manager was responsible for validation.

**Why it was wrong:** Product copy must make actor ownership explicit when a system activity precedes a human decision.

**Corrected principle:** Name the system’s result separately from the user’s responsibility. The system runs checks; the buyer reviews the results and decides whether to approve the RFx.

**Correct outcome:** Use `Validation results` with supporting copy such as `Aera checked the RFx. Review the results before approval.`

### E-111 — Creating a duplicate human approval for validation

**When identified:** When the Validation section included a buyer action called `Confirm validation` before RFx approval.

**Incorrect principle applied:** Every important system check should have a separate user confirmation action.

**Incorrect outcome:** The buyer faced two overlapping confirmations: confirming validation and approving the RFx, with no distinct real-world decision between them.

**Why it was wrong:** Validation is an internal/system result that determines whether approval is permitted. RFx approval is the buyer’s real-world authority decision. Converting the former into a human approval duplicates work and obscures the stage outcome.

**Corrected principle:** Expose system checks as results and gate conditions. Create a user action only when it represents a distinct real-world decision or authority transition.

**Correct outcome:** The system runs validation and shows `Passed`, `Needs review`, or `Blocked`. The buyer reviews the basis; when permitted, the buyer uses `Approve RFx` as the single explicit approval action.

**Related principles:** system-result versus human-decision separation; no duplicate approval; outcome-oriented actions; gated authority transition.

### E-110 — Leaking expected issues and treatments into the guided demo

**When identified:** When the guided-demo issue set included prepared issue treatments for the agent to show.

**Incorrect principle applied:** Make the demo deterministic by predefining the issues and treatments the agent should surface.

**Incorrect outcome:** The agent could appear successful by following an answer key embedded in the demo design, defeating the purpose of testing real extraction, relevance, reasoning, and proposal behavior.

**Why it was wrong:** Runtime inputs and evaluation truth serve different purposes. The agent must reason from the raw scenario and authoritative sources; the evaluator needs hidden assertions to determine whether it did so correctly.

**Corrected principle:** Separate asset generation, runtime execution, and evaluation. Generate raw, scenario-realistic inputs and authoritative source documents without issue labels or expected treatments. Keep expected findings, acceptable treatments, and coverage assertions in a separate evaluation harness that is not passed to the agent or exposed in the UI.

**Correct outcome:** The guided demo loads the raw corrugated-packaging scenario. Aera independently identifies and explains the issues, proposes treatments from the available policy and evidence, and presents them for buyer confirmation. The hidden harness evaluates whether the expected conditions were discovered and handled.

**Related principles:** test-data/evaluation separation; no answer-key leakage; runtime independence; hidden ground truth; real AI-loop verification.

### E-109 — Generating source assets without validating demo relevance

**When identified:** When treating recursive policy and source generation as sufficient without requiring the content to be grounded in the specific demo scenario expected by Aerchain.

**Incorrect principle applied:** A coherent, realistic source pack is adequate even if its scenario alignment has not been demonstrated.

**Incorrect outcome:** The demo could show generic policy clauses, past RFxs, and supporting documents that do not produce the intended RFx, issues, or downstream behavior.

**Corrected principle:** Derive demo source assets backward from the assigned scenario and forward from the workflow behavior they must trigger. Validate that the policy, past RFxs, supporting sources, generated RFx, issues, responses, and award analysis form one coherent scenario.

**Correct outcome:** The source pack is scenario-specific, internally consistent, and tested against the exact guided-demo behavior before being used in the prototype.

### E-108 — Making the demo user solve the issues the demo is meant to demonstrate

**When identified:** When defining Issues and assumptions as a generic resolution workspace for the guided demo.

**Incorrect principle applied:** Realism requires the demo user to discover or supply the resolution for each issue.

**Incorrect outcome:** The procurement manager would face empty problem-solving work instead of seeing how Aera surfaces relevant issues and proposes usable treatments.

**Corrected principle:** Demonstrate system behavior through prepared, realistic runtime conditions. In a guided demo, issues may be present and the system’s proposed treatments must already be available for buyer confirmation; the buyer should not be forced to act as the domain expert who invented the answer.

**Correct outcome:** Show a small, non-duplicative set of scenario-relevant issues, each with a prepared proposal, evidence/policy basis, status, and confirmation action.

### E-107 — Positive-framing a disabled demo action

**When identified:** When the disabled `Add source` message said “Adding sources is supported” and described live-workflow capability instead of stating the demo limitation.

**Incorrect principle applied:** Soften a product limitation by leading with the capability that exists outside the current context.

**Incorrect outcome:** The copy obscured the immediate state and sounded promotional rather than clear.

**Why it was wrong:** A disabled control creates a moment of uncertainty. The copy’s first duty is truthful state communication: what is disabled and why.

**Corrected principle:** Use direct negative framing for disabled or unavailable actions. State the limitation, scope, and reason plainly; do not put a positive spin on it.

**Correct outcome:** The pop-up says: “Add source is disabled for this demo.”

### E-106 — Naming the workflow instead of the product in the demo CTA

**When identified:** When the guided-demo section used “A guided example is ready” and “Try the sourcing workflow.”

**Incorrect principle applied:** Describe the user’s next activity rather than the experience the landing page is inviting them to try.

**Incorrect outcome:** The section sounded like a generic workflow entry point and weakened the product-specific invitation to experience Aera.

**Corrected principle:** A product demo CTA should frame the content as a demo and invite direct product experience with an immediate, product-specific action.

**Correct outcome:** Use “A DEMO IS READY” and “Try Aera in action.”

### E-105 — Repeating pain and relief in the solution overview

**When identified:** When the first workflow block repeated “Building an RFx takes time” and “Get an RFx you can approve and stand behind” after the preceding section had already established the problem and relief.

**Incorrect principle applied:** Use the same pain-to-relief structure in every landing-page section regardless of the section’s role.

**Incorrect outcome:** The workflow overview failed to explain how the product works at a human-functional level.

**Why it was wrong:** Sections have different jobs. The problem-to-relief section establishes why the buyer cares; the workflow section explains what the solution does across the journey.

**Corrected principle:** Once pain and relief are established, explain the solution as observable user-level behavior—what the product takes in, does, and gives back—without describing underlying model mechanics.

**Correct outcome:** Step 1 should explain that the co-pilot brings the business need, policy, past RFxs, and guidance together and shapes them into an RFx the buyer can review and approve.

### E-104 — Replacing plain user language with abstract product language

**When identified:** When “a comparison that doesn’t break your head” was replaced with “trust the comparison,” and “get an RFx you can stand behind” was replaced with “send an RFx you can stand behind.”

**Incorrect principle applied:** Translate the user’s concrete felt outcome into more polished or abstract product language.

**Incorrect outcome:** The copy became less emotionally accurate and changed the user’s outcome from receiving a usable RFx to sending one.

**Why it was wrong:** The user had already supplied the sharper language. The task was to preserve its meaning and apply minimal correction, not optimize it into generic SaaS phrasing.

**Corrected principle:** When the user supplies a concrete, workflow-grounded expression of pain or relief, preserve its meaning and tone unless it conflicts with an approved principle. Make only the requested correction.

**Correct outcome:** Use “Get an RFx you can stand behind, a comparison that doesn’t break your head, and an award you can explain with confidence.”

### E-103 — Reducing RFx construction burden to an inferred unclear need

**When identified:** When the first pain was summarized as “unclear business need.”

**Incorrect principle applied:** Replace the user’s described operational burden with a shorter causal abstraction without checking whether the abstraction preserves the work, risk, and stakes.

**Incorrect outcome:** The copy omitted that the buyer must construct a complex, time-consuming, thorough RFx from multiple sources, comply with organizational policy, and ensure it is correct before sending it to suppliers.

**Why it was wrong:** A copy task must preserve the actual pain model before compressing language. The RFx is a consequential external document, not merely a clarification of an unclear request.

**Corrected principle:** Derive pain from the user’s real work, effort, risk, and accountability. Compress only after verifying that the shorter phrasing retains the operational burden and consequence.

**Correct outcome:** The first pain is RFx construction under source, policy, thoroughness, and supplier-facing constraints.

### E-102 — Describing relief as a clearer input rather than a post-workflow outcome

**When identified:** When the relief statement began with “Start with a clear ask.”

**Incorrect principle applied:** Describe the improved starting input as the relief.

**Incorrect outcome:** The copy repeated the business request concept instead of expressing the buyer’s resulting clarity about what needs to be sourced.

**Why it was wrong:** Relief must be positioned after the product has done its work. The buyer should feel clear about the sourcing requirement, confident in the comparison, and able to stand behind the award.

**Corrected principle:** Express relief as the user’s resulting state—what they now understand, trust, or can do—not as a better version of the initial input.

**Correct outcome:** Use outcome language such as “Be clear on what needs to be sourced, confident in the comparison, and ready to stand behind the award.”

### E-101 — Addressing only the final pain in the relief statement

**When identified:** When the relief addressed clear trade-offs, making the right decision, and explaining it with evidence, while leaving incomplete business needs and inconsistent supplier replies unaddressed.

**Incorrect principle applied:** Focus the relief on the most consequential pain rather than mirroring the complete pain pattern.

**Incorrect outcome:** The copy promised relief for award justification but not for the earlier cognitive burden of shaping the ask or comparing unlike responses.

**Why it was wrong:** Pain-to-relief copy must resolve the full user problem represented in the section. Concision does not justify dropping two of the three pains.

**Corrected principle:** Map each material pain to a concise felt or practical outcome, then compress the set without reducing coverage or turning it into a product-capability list.

**Correct outcome:** The relief communicates clarity about what to ask, confidence in comparing supplier offers, and readiness to stand behind the award.

### E-100 — Replacing unaffected approved pain content during a local copy correction

**When identified:** When the user challenged only the phrase “the reasoning behind the award gets harder to reconstruct.”

**Incorrect principle applied:** Rebuild the entire section whenever one line is corrected.

**Incorrect outcome:** The valid pain about incomplete business needs and inconsistent supplier responses was removed instead of preserved.

**Why it was wrong:** Corrections have scope. A challenged clause does not invalidate adjacent content unless the user says the underlying idea is wrong.

**Corrected principle:** Apply the smallest coherent change that resolves the identified flaw. Preserve approved content outside the correction scope and re-synthesize only the affected sentence or dependency.

**Correct outcome:** Retain the broader pain and replace only the awkward clause with a direct statement about the difficulty of justifying the award.

### E-099 — Over-correcting landing copy into explanatory copy

**When identified:** When revising the problem-to-relief section after the user corrected the pain, relief, and rationale/evidence order.

**Incorrect principle applied:** Address every nuance explicitly in the section copy and visual treatment.

**Incorrect outcome:** The section became longer and more emphatic than necessary, diluting the single pain and relief it needed to communicate.

**Why it was wrong:** The attention principle requires sufficient attention to the important point, not maximal explanation. Once the insight is clear, additional language becomes cognitive load.

**Corrected principle:** After resolving a copy issue, re-test for brevity, directness, and one clear user insight. Remove any explanation that does not advance that insight.

**Correct outcome:** The section uses one concise pain statement, one concise felt-outcome statement, and only the minimum supporting visual needed to make the sequence understandable.

### E-098 — Reversing rationale and evidence in the landing narrative

**When identified:** When the problem-to-relief visual placed evidence before award rationale.

**Incorrect principle applied:** Treat evidence as the primary endpoint before explaining the decision it supports.

**Incorrect outcome:** The narrative led with evidence and made award rationale appear secondary, reversing how the procurement manager needs to understand and defend the decision.

**Corrected principle:** Follow the user’s decision sequence: understand the award rationale, then inspect the evidence supporting it.

**Correct outcome:** The visual sequence is `award rationale → supporting evidence`.

### E-097 — Describing product organization as relief

**When identified:** When the relief statement said that keeping requirements, responses, trade-offs, approvals, and evidence together would make the decision feel clear and defensible.

**Incorrect principle applied:** Describe the internal product mechanism as the user’s relief.

**Incorrect outcome:** The copy described an organized medicine cabinet rather than the buyer’s felt outcome after using the product.

**Corrected principle:** Pain-to-relief copy must move from the lived burden to the felt and practical relief: lower cognitive load, confidence in the choice, and readiness to explain it.

**Correct outcome:** The relief should describe the buyer being able to make and explain the decision with confidence; the product mechanism belongs in the supporting explanation.

### E-096 — Bundling implementation readiness into one review task

**When identified:** When proposing one task to map approved contracts simultaneously into screens, data/state, AI behavior, deterministic mechanisms, and verification assets.

**Incorrect principle applied:** A complete synthesis artifact should be the first implementation-readiness review.

**Incorrect outcome:** The review task became too broad to inspect reliably and risked making the user reason across dependent layers at once.

**Why it was wrong:** The layers have dependencies. The product surface should first make the user journey concrete; state and data then support that surface; execution mechanisms then implement the behavior; verification assets then test it.

**Corrected principle:** Decompose implementation readiness into concrete artifacts and review them in dependency order, asking for one bounded decision at a time.

**Correct outcome:** Start with the screen map, then derive state/data, AI and deterministic behavior, and verification assets in sequence. Do not write implementation code until those artifacts are aligned.

**Related principles:** dependency-ordered review; one-artifact attention; concrete-before-abstract; implementation readiness without cognitive overload.

### E-095 — Leaving recommendation readiness to vague AI judgment

**When identified:** When the award-recommendation behavior said the system should identify a “missing basis” without defining the contract or tests that determine what is missing.

**Incorrect principle applied:** The AI can decide whether enough evaluation basis exists and simply ask the buyer when it feels insufficient.

**Incorrect outcome:** Recommendation generation could be blocked or permitted based on opaque model judgment, with no clear explanation of the missing criteria, weights, thresholds, or authority.

**Why it was wrong:** A recommendation is only as defensible as its evaluation basis. Readiness must be observable and traceable before the AI is asked to recommend.

**Corrected principle:** Define the evaluation-basis contract before recommendation. Derive its elements from applicable policy, approved RFx evaluation criteria, and buyer guidance; test each required element deterministically; surface the exact missing or conflicting element and its source basis.

**Correct outcome:** The system can generate a recommendation only when the applicable contract contains the criteria and treatment needed for the requested analysis. Otherwise it presents a specific evaluation-basis gap for buyer resolution, without inventing weights, thresholds, or priorities.

**Related principles:** authority-before-recommendation; contract-derived readiness; observable gating; no opaque model thresholds.

### E-094 — Leaving the missing-RFx-schema path undefined

**When identified:** When reviewing the Stage 1 contract’s statement that RFx format and field semantics must be supplied or confirmed, without specifying behavior when policy and past RFx examples exist but no approved schema exists.

**Incorrect principle applied:** Naming an input dependency is sufficient; the absence of that input can remain a generic failure state.

**Incorrect outcome:** The system had no explicit behavior for using past RFx examples as format proxies, constructing a proposed schema, or obtaining buyer approval before RFx generation.

**Why it was wrong:** Past RFx documents can provide useful evidence about recurring fields and structure, but they are not automatically an approved current contract. The product needs a safe co-pilot path that reduces buyer effort without treating historical practice as authority.

**Corrected principle:** When an authoritative contract is absent, use approved proxies and buyer guidance to propose the missing contract, expose provenance and differences, and require explicit owner approval before dependent generation or validation uses it.

**Correct outcome:** Policy and past RFx examples produce a proposed RFx schema. The procurement manager reviews, edits, approves, or rejects it. Until approval, the system may show a provisional draft for inspection but cannot treat it as the approved RFx format or complete Stage 1.

**Related principles:** proxy-versus-authority distinction; contract-before-dependent-generation; co-pilot with human authority; historical-evidence provenance.

### E-093 — Framing comparison analysis as justification after the decision

**When identified:** When the comparison boundary message said the analysis would help the buyer understand what was “behind that decision.”

**Incorrect principle applied:** Describe the value of analysis as explaining or defending a decision that already exists.

**Incorrect outcome:** The copy positioned the comparison as retrospective justification rather than decision support.

**Why it was wrong:** At this point in the workflow, the buyer has not made the award decision. The screen’s value is reducing cognitive load so the buyer can choose correctly using the available evidence.

**Corrected principle:** Describe product value according to the user’s current job and temporal position in the workflow. Use forward-looking language when the user is still evaluating options.

**Correct outcome:** The boundary message should say that the comparison helps the buyer make the right decision, while reserving award recommendation and approval for the next stage.

**Related principles:** workflow-positioned copy; forward-looking user benefit; current-job language; decision-support boundary.

### E-092 — Letting comparison chat extend into award recommendation

**When identified:** When the comparison screen was defined to handle award-related questions by helping the buyer prepare a decision basis.

**Incorrect principle applied:** A screen may support adjacent downstream intent as long as it remains evidence-backed.

**Incorrect outcome:** The comparison screen’s chat could become a recommendation surface, weakening its singular purpose and allowing the next stage’s AI behavior to begin early.

**Why it was wrong:** Evidence quality does not resolve a scope-boundary problem. The screen exists to reduce cognitive load while analyzing supplier responses; recommendation is a distinct user objective with different behavior and authority.

**Corrected principle:** Give each screen one governing user purpose. Every control and AI capability on the screen must serve that purpose only. Route a downstream objective to the next stage rather than partially implementing it in the current screen.

**Correct outcome:** Comparison chat answers questions that help the buyer understand supplier responses. A request for an award recommendation is outside this screen’s purpose and is handled only after the buyer completes the analysis outcome and enters the award-decision stage.

**Related principles:** singular screen purpose; capability subordination; stage-boundary integrity; cognitive-load reduction.

### E-091 — Exposing an internal stage transition as the user-facing outcome

**When identified:** When the comparison screen was given the CTA `Move to award decision`.

**Incorrect principle applied:** Represent the product’s internal workflow boundary directly in the interface.

**Incorrect outcome:** The buyer was asked to navigate to a system stage instead of being helped to complete the real procurement task of understanding the offers and preparing a defensible award decision.

**Why it was wrong:** Workflow continuity requires the product to mirror the buyer’s job, not expose its internal state machine. A stage boundary may control permissions and records without becoming the user-facing message or action.

**Corrected principle:** Express user-facing purpose and actions in the language of the buyer’s real-world objective. Use internal transitions as system behavior; expose them only when they correspond to a meaningful buyer action.

**Correct outcome:** The comparison screen reinforces that the buyer is examining evidence, trade-offs, and exceptions to support an award decision. Any next action is phrased around that work, not around moving between product stages.

**Related principles:** workflow continuity; user-outcome language; internal-state invisibility; product as operating surface.

### E-090 — Pulling award recommendation into the comparison-analysis screen

**When identified:** When defining analysis execution, by adding recommendation behavior to a screen whose approved capability is answering questions over the comparison.

**Incorrect principle applied:** Maximize the capability implied by a possible user question rather than defining the screen by its approved stage outcome.

**Incorrect outcome:** The Stage 3 analysis screen could appear responsible for recommending or deciding the award, blurring the boundary with Stage 4.

**Why it was wrong:** A buyer may ask a preference-oriented question while exploring the comparison, but that does not make award recommendation the screen’s default outcome. The workflow boundary must be determined by the user’s authorized action and the stage contract.

**Corrected principle:** Define each screen by the tangible user outcome it is designed to produce. Support questions within that outcome; route a transition to a different outcome when the user moves from understanding trade-offs to proposing or approving an award.

**Correct outcome:** The Stage 3 screen returns grounded comparative analysis—facts, calculations, trade-offs, exceptions, and evidence. Stage 4 handles award recommendation, decision rationale, authorization, and award approval.

**Related principles:** outcome-defined scope; capability-versus-outcome separation; stage boundary integrity; explicit transition.

### E-089 — Routing exact unit conversions through policy by default

**When identified:** When the broader normalization proposal required policy coverage before applying conversions such as centimetres to inches or kilograms to pounds.

**Incorrect principle applied:** Every normalization is organizationally governed because it changes a supplier value.

**Incorrect outcome:** The system could create unnecessary policy gaps and buyer work for exact, reversible, mathematically defined conversions.

**Why it was wrong:** It failed to distinguish mechanical transformation from semantic interpretation. A canonical unit conversion has a stable basis independent of organizational preference; ambiguity begins when the system must decide what the value means or how the organization wants it treated.

**Corrected principle:** Classify each transformation before execution. Apply deterministic code directly for exact, reversible, lossless-or-explicitly-rounded conversions with a canonical basis. Consult policy when equivalence, commercial treatment, applicability, external rates, or interpretation is ambiguous or organization-dependent.

**Correct outcome:** Centimetres-to-inches and kilograms-to-pounds can run automatically with the formula and rounding recorded. Currency conversion, package equivalence, landed cost, tax treatment, and alternative specifications use policy when their treatment is not mechanically determined.

**Related principles:** behavior-before-technology; deterministic-substrate classification; mechanical-versus-semantic distinction; policy only where ambiguity or governance requires it.

### E-088 — Treating policy as the source of runtime conversion values

**When identified:** When stating that the comparison currency, exchange-rate source, rate type, and timing must come directly from policy, without distinguishing the policy method from runtime data acquisition.

**Incorrect principle applied:** Every input used by a governed calculation must itself be supplied by the governing policy.

**Incorrect outcome:** The system could treat a missing runtime value as a policy problem, or fail to recognize that policy coverage must first determine whether and how a multi-currency quote may be converted.

**Why it was wrong:** A policy is a normative procedure. It defines whether conversion is allowed and how to select, time, and record the rate; it does not necessarily contain the live rate itself. Policy applicability and policy gaps are separate runtime checks.

**Corrected principle:** First determine whether an applicable policy clause covers the observed condition. If covered, execute the policy-defined method using the required runtime sources and record the result. If not covered, flag the policy gap and prevent an unsupported treatment from entering the comparison.

**Correct outcome:** A multi-currency quote is evaluated against the organization’s multi-currency policy. Fixed or dynamic conversion proceeds according to that policy. If no applicable provision exists, the system raises `missing-policy-for-multi-currency` rather than selecting its own conversion method.

**Related principles:** policy-as-procedure; applicability-before-execution; policy-gap detection; runtime-data acquisition; governed calculation.

### E-087 — Treating currency conversion as a context-free normalization

**When identified:** When defining normalization without specifying the exchange-rate source, as-of time, live-rate behavior, or audit record.

**Incorrect principle applied:** A currency code is sufficient to convert supplier prices into a common comparison currency.

**Incorrect outcome:** The system could apply an ungoverned or changing exchange rate, making supplier comparisons non-reproducible and potentially misleading.

**Why it was wrong:** Currency conversion is a time-dependent commercial calculation. The same offer can produce different normalized values depending on the rate source, timestamp, quote direction, and treatment of taxes, freight, duties, or fees.

**Corrected principle:** Treat every external or time-dependent conversion as a governed calculation. Obtain the rate basis from policy, the RFx, an approved evaluation rule, or buyer guidance; snapshot the source, rate, quote direction, timestamp, and calculation; and preserve the original currency value.

**Correct outcome:** If a governed live-rate rule exists, retrieve and snapshot the rate at the defined event/time. If no rate basis exists, do not silently convert; show original values and require an authorized basis before making a normalized comparison.

**Related principles:** time-aware normalization; external-data provenance; reproducible calculation; original-value preservation; policy-derived conversion.

### E-086 — Registering accessible emails before testing RFx relevance

**When identified:** When defining response registration from an authorized inbox without explicitly placing relevance assessment before response association.

**Incorrect principle applied:** Access to a mailbox and a possible supplier sender are sufficient to treat a message as part of the active response set.

**Incorrect outcome:** Unrelated emails could enter the RFx comparison, while relevant responses could be missed or misclassified.

**Why it was wrong:** Repository or inbox access expands the candidate set; it does not establish relevance. Relevance is a prerequisite to association and extraction.

**Corrected principle:** Apply relevance assessment at the boundary of every broad source before registering an artifact for a workflow. Use the active RFx, invitation records, thread metadata, sender/recipient relationships, content, attachments, and timing as evidence. Keep irrelevant, relevant, and uncertain candidates distinct; never silently discard uncertain candidates.

**Correct outcome:** Accessible emails first enter a candidate set. Relevant candidates proceed to association, irrelevant candidates are excluded with a reason, and uncertain candidates remain visible for buyer review.

**Related principles:** relevance-before-association; candidate-set separation; source-boundary control; reviewable uncertainty.

### E-085 — Treating familiar office formats as exhaustive response coverage

**When identified:** When defining Stage 3 inputs as emails, spreadsheets, PDFs, documents, and attachments without including supplier-submitted images or low-quality mobile-camera captures explicitly called out in the assignment.

**Incorrect principle applied:** Cover the common document extensions and treat the remaining response formats as generic attachments.

**Incorrect outcome:** Image-based supplier evidence could be omitted from the extraction, quality assessment, comparison, and evidence-preservation design.

**Why it was wrong:** Input coverage must be derived from how the workflow actually receives information and from every format named in the brief, not from familiar office-file categories. A photo may contain the only evidence of packaging, labels, specifications, or signed documents.

**Corrected principle:** Build a MECE response-input inventory by content modality and acquisition path. Treat each modality—including images and degraded scans/photos—as a first-class input with extraction, quality, provenance, uncertainty, and review behavior.

**Correct outcome:** Stage 3 explicitly supports email text, documents, spreadsheets, PDFs, scans, images, low-quality mobile-camera captures, and other response artifacts, while preserving the original and surfacing extraction limitations.

**Related principles:** brief-derived coverage; modality completeness; workflow-realistic input inventory; evidence preservation; quality-aware extraction.

### E-084 — Treating the supplier message as one shared static artifact

**When identified:** When defining complete invitation review without modeling recipient-specific template fields.

**Incorrect principle applied:** Approve and validate the shared subject/body before sending it to all recipients.

**Incorrect outcome:** Supplier name or other personalized details could remain unresolved, be inserted incorrectly, or be applied uniformly when the template requires recipient-specific values.

**Why it was wrong:** A template is a message structure, not necessarily the final message. Personalization changes the rendered content and therefore must be validated and reviewed at the recipient level.

**Corrected principle:** Separate template structure from rendered communication. Classify fields as fixed, recipient-specific, RFx-specific, or optional; resolve each from an authorized source; validate every rendered message; and preserve the exact rendered version per recipient.

**Correct outcome:** The buyer reviews the personalization mapping and the rendered supplier messages before approval. Missing, conflicting, or unsupported personalization prevents the affected message from being approved or sent.

**Related principles:** template-versus-instance distinction; field-level provenance; recipient-level validation; exact outbound record.

### E-083 — Treating template absence as permission for freeform generation

**When identified:** When the message-generation behavior said the AI could “draft a new message when no suitable template exists.”

**Incorrect principle applied:** If retrieval does not find a reusable prior artifact, generation can fill the gap through general language capability.

**Incorrect outcome:** The wording implied that the AI could invent a new supplier communication after template retrieval failed.

**Why it was wrong:** Template retrieval and message generation are different paths, but both require a bounded communication contract. A missing template removes a reusable example; it does not supply authority for new content.

**Corrected principle:** Generate only from confirmed runtime inputs and an approved contract. If no template exists, produce a clearly marked proposal derived from the message contract, approved RFx, recipients, and buyer guidance; require explicit buyer approval before it becomes part of the invitation.

**Correct outcome:** The buyer sees whether the message was adapted from a source or newly proposed from the contract. Unsupported content is rejected by validation, and no new message is sent without buyer approval.

**Related principles:** bounded generation; source-versus-contract distinction; explicit provenance; human approval for novel output.

### E-082 — Referring to undefined message requirements

**When identified:** When describing final-message validation as pass/fail against “each defined requirement” without naming who or what defines those requirements.

**Incorrect principle applied:** A generic quality checklist can be treated as the contract for message validation.

**Incorrect outcome:** The system could appear to enforce mandatory subject/body content that was never supplied or approved by the organization or buyer.

**Why it was wrong:** Validation authority must precede validation. AI-generated criteria are suggestions, not organizational requirements.

**Corrected principle:** Every validation condition must trace to an authoritative input: applicable policy, approved communication template or schema, the approved RFx and its response instructions, or explicit buyer guidance. If no source makes a condition mandatory, it may be presented as a suggestion or omitted—not silently enforced.

**Correct outcome:** The system first constructs the message contract from authoritative sources, shows its basis, and then evaluates the final message against that contract. Missing authority is resolved before a requirement becomes a gate.

**Related principles:** authority-before-validation; contract-derived checks; suggestion-versus-gate separation; no invented requirements.

### E-081 — Carrying retrieval uncertainty into final-message validation

**When identified:** When the final supplier message was given a user-facing `message-evidence-needed` state after the RFx and recipients were approved.

**Incorrect principle applied:** Every AI-related uncertainty should become a final workflow state.

**Incorrect outcome:** A final message generated from approved RFx data and approved recipients could remain “undetermined,” even though its required conditions should be directly testable.

**Why it was wrong:** It confused uncertainty in retrieving and ranking a prior template with validation of the final message. In this bounded flow, message generation has sufficient approved inputs: the RFx, recipients, response requirements, and any confirmed guidance.

**Corrected principle:** Place uncertainty at the earliest point where it genuinely exists. Once prerequisites are approved, validate each final-message requirement against those inputs with a defined pass/fail result. If a prerequisite is missing, do not generate the final message; identify the missing prerequisite instead.

**Correct outcome:** Prior-template retrieval may produce candidate relevance uncertainty. The final generated or adapted message has only pass/fail checks. All required checks must pass before buyer confirmation; any failed check routes to correction and prevents approval or sending.

**Related principles:** earliest-point resolution; bounded generation; prerequisite completeness; binary validation where conditions are defined.

### E-080 — Listing message checks without defining their consequences

**When identified:** When defining validation of the supplier-facing subject and message body.

**Incorrect principle applied:** Naming quality checks is sufficient to specify the system behavior.

**Incorrect outcome:** The proposal listed message checks but did not say what happens when all checks pass, when a check fails, or when the result is undetermined.

**Why it was wrong:** A check has product value only when its result changes the available action or state. Without consequences, the buyer cannot tell whether to approve, correct, investigate, or proceed.

**Corrected principle:** Define every check as an evaluated condition with an evidence basis, result state, permitted next action, and transition consequence. Required-check consequences come from the applicable policy, communication contract, or approved template rules; they must not be universal assumptions.

**Correct outcome:** Passing checks make the message eligible for buyer review. A failed required check routes to correction and prevents invitation approval. An undetermined required check routes to evidence review or buyer decision and also prevents invitation approval. A non-blocking failed check remains visible with its permitted treatment and cannot be silently ignored.

**Related principles:** check-to-action mapping; policy-derived gating; explicit state transitions; recoverable correction.

### E-079 — Treating one Stage 2 subproblem as the complete stage design

**When identified:** When defining inbox-first retrieval for a prior invitation template.

**Incorrect principle applied:** Once one important subproblem has a realistic solution, describe that solution as the Stage 2 design.

**Incorrect outcome:** The proposal covered retrieval and approval of the subject/message template but did not keep supplier discovery and recipient verification, complete-package approval, sending, and delivery evidence visible as dependencies of the stage outcome.

**Why it was wrong:** A stage is complete only when every component required for its approved real-world outcome is handled. Solving one component cannot be presented as the stage design without checking outcome completeness and dependency closure.

**Corrected principle:** After defining any section, re-check it against the full stage objective, required output components, actors, authority, failure states, and handoff. Treat partial designs as partial until all outcome dependencies are represented.

**Correct outcome:** Stage 2 must cover supplier candidate retrieval, recipient verification, subject/body template retrieval or creation, complete invitation review, authorized sending, and per-recipient delivery evidence.

**Related principles:** stage-outcome completeness; dependency closure; synthesis-before-progression; complete outbound package.

### E-077 — Collapsing a multi-decision RFx review into one action

**When identified:** When the Stage 1 journey described “review the generated RFx” and “correct or return it” without decomposing the decisions and work contained within them.

**Incorrect principle applied:**

> Once related actions are kept in one workspace, they can be represented as one review step.

**Incorrect outcome:** The buyer’s review of scope, line items, questionnaire, terms, evidence, assumptions, validation issues, and approval was compressed into a vague review action.

**Why it was wrong:** Artifact continuity and attention granularity are separate dimensions. A single workspace can contain multiple focused sections, each with its own objective, evidence, action, state, and consequence.

**Corrected principle:** Preserve one artifact context while decomposing every material decision inside it. Use dedicated sections and progressive states; allow correction at the point of the issue, regenerate a new version, show what changed, and gate approval on the resulting checks.

**Correct outcome:** RFx review must separately address scope/boundaries, line items, questionnaire, terms, source/evidence, assumptions and issues, validation, correction/versioning, and final approval.

**Related principles:** attention granularity; artifact continuity; section-level objectives; point-of-issue correction; versioned regeneration; gated approval.

### E-076 — Over-splitting atomic actions into separate screens

**When identified:** When the handoff screen was narrowed to requirement/source collection and the draft review and approval were implicitly pushed to separate screens.

**Incorrect principle applied:**

> The attention principle requires one screen for every atomic action.

**Incorrect outcome:** The buyer could be forced to leave the RFx workspace between creating the draft, reviewing it, and approving it, adding navigation and context-switching without adding clarity.

**Why it was wrong:** Atomic attention is about giving each decision and action a clear sequence and visible state. It does not require separate pages when the same user is working on the same artifact and owns the successive decisions.

**Corrected principle:** Keep related actions in one evolving workspace when they share an artifact, actor, and decision context. Use explicit progressive states, gated actions, and section-level focus within that workspace.

**Correct outcome:** Stage 1 may use one RFx workspace that progresses from input/source confirmation to draft generation, draft review, correction, and explicit approval. Approval appears only after the relevant checks pass.

**Related principles:** artifact continuity; progressive state; atomic attention without page fragmentation; context preservation; gated approval.

### E-075 — Using a stage outcome as a screen task title

**When identified:** During the synthesis audit of the Stage 1 handoff screen.

**Incorrect principle applied:**

> A screen may use the full workflow-stage name even when the user is performing only an intermediate task on that screen.

**Incorrect outcome:** “Create and approve RFx” suggests that approval is happening on the handoff screen, although the screen only collects the requirement and sources before generating a draft.

**Why it was wrong:** Screen copy must orient the user to the current task and state. Stage-level outcomes can be shown in navigation or progress context, but should not replace the immediate task title.

**Corrected principle:** Separate stage labels from screen-task labels. The screen title names the current user action; the stage context can remain visible as secondary orientation.

**Correct outcome:** Replace the handoff screen title with a concise task label such as “Prepare the RFx” or “Start the RFx,” subject to final copy review. Keep “Create and approve RFx” as the Stage 1 label.

**Related principles:** current-task clarity; stage versus screen abstraction; state truth; no overpromising; progressive disclosure.

### E-074 — Using explanatory copy where a task label is sufficient

**When identified:** When the Stage 1 handoff used long explanatory sentences for the business-need and source inputs.

**Incorrect principle applied:**

> More context in the interface always helps the user understand what to do.

**Incorrect outcome:** The copy added words without adding a decision, instruction, or useful consequence. It increased reading load at the moment the buyer needed to act.

**Why it was wrong:** Product copy should match the user’s cognitive need. At an obvious input step, the user needs a precise task label; broader rationale belongs in supporting context only when it changes the decision.

**Corrected principle:** Use the shortest domain-accurate imperative that identifies the action and, where necessary, its governing purpose. Remove setup language, conversational padding, and repeated context.

**Correct outcome:** Use concise labels such as “Enter the sourcing requirement” and “Link the sources that govern the RFx,” refined for domain accuracy and screen context.

**Related principles:** functional brevity; imperative task language; cognitive-load matching; domain precision; rationale only when decision-relevant.

### E-073 — Treating the product workflow as separate from the real job

**When identified:** When the product-copy model was defined without explicitly requiring continuity between the procurement manager’s work outside the product and the work represented inside it.

**Incorrect principle applied:**

> Product copy can be designed from the system’s screens, capabilities, and states without first mapping them to the user’s existing work.

**Incorrect outcome:** The product risked making the buyer learn an artificial workflow and treating external procurement work as background context rather than as the source of the product’s tasks, artifacts, decisions, and handoffs.

**Why it was wrong:** The product is an operating boundary around an existing job. It should reduce cognitive load by carrying the real work into a structured environment, not create a second invented job around the AI.

**Corrected principle:** Preserve workflow continuity. Map each in-product task to a real user responsibility, artifact, decision, or handoff. Make the product boundary explicit: what enters from outside, what the system assists or executes, what the user confirms, and what leaves the product for the next real-world action.

**Correct outcome:** Product copy and UI should use real procurement concepts and make external-to-product and product-to-external handoffs visible without exposing internal capabilities as user tasks.

**Related principles:** workflow fidelity; continuity of work; explicit system boundary; real-world artifacts; responsibility mapping; handoff clarity.

### Workflow-continuity impact analysis

| Approved artifact | Impact | Treatment |
|---|---|---|
| Project objective and four procurement outcomes | No change to the outcomes | Retain |
| Review-spine role and evidence model | Add continuity and handoff checks to product/design review | Re-audit product-facing use |
| Stage 1 contract | Confirm requester input, buyer responsibility, draft-to-approval work, and approved-RFx handoff | Re-audit product surface and copy |
| Stage 2 contract | Confirm supplier/contact retrieval, buyer confirmation, outbound send, and delivery status as real-world handoffs | Re-audit product surface and copy |
| Stage 3 contract | Confirm supplier evidence enters the product, buyer reviews the comparison, and award analysis receives the comparison record | Re-audit product surface and copy |
| Stage 4 contract | Confirm the buyer owns the decision and the award rationale leaves the product as a usable record; communication remains out of scope unless separately approved | Re-audit product surface and copy |
| Landing page and handoff | Must orient the buyer to the real job before entering Stage 1 | Reopen |
| Product-copy model | Must include workflow continuity and handoff clarity | Reopen for synthesis |
| Data/source contracts | Must represent external source, product processing, user confirmation, and downstream artifact boundaries | Re-audit before implementation |
| AI and deterministic mechanism assignments | Core assignments remain, but each must be tied to the real task and handoff it supports | Re-audit before implementation |
| Existing prototype screens | Must not expose internal capabilities as artificial user tasks | Reopen for product-design review |

Approved procurement outcomes are not reopened merely because their product representation is being re-audited. Only affected product-facing and implementation artifacts change state.

### E-072 — Drafting product copy before defining its functional principles

**When identified:** When the landing-to-workflow handoff was written before the product-copy model had been agreed.

**Incorrect principle applied:**

> Copy that sounds clear and reassuring is sufficient for a product handoff.

**Incorrect outcome:** The copy described the guided example and real-use option without clearly grounding the buyer in the current objective, action, consequence, system state, or responsibility.

**Why it was wrong:** Product copy is part of the workflow control surface. It affects what the buyer understands, supplies, approves, and believes the system has done. It must be designed with the same rigor as the underlying behavior.

**Corrected principle:** Define product-copy principles before drafting. Every meaningful string must help the right role perform the current objective, understand the action and consequence, see the system state and authority, and know what happens next.

**Correct outcome:** The product-copy model must govern screen titles, instructions, buttons, helper text, status messages, evidence labels, warnings, errors, and AI responses.

**Related principles:** copy as workflow behavior; role and moment; action clarity; state transparency; consequence visibility; progressive disclosure; no reassurance without evidence.

### E-071 — Dropping the pain-to-relief principle in downstream copy

**When identified:** When the landing-page workflow overview was written as four stage summaries describing what the product does and produces.

**Incorrect principle applied:**

> The pain-to-relief framing is needed for the hero, while supporting sections can use feature or stage summaries.

**Incorrect outcome:** The workflow section became a product outline. It did not make the procurement manager feel the burden at each step or understand how the product reduces risk and cognitive load.

**Why it was wrong:** The attention principle applies section by section. Every section must earn relevance by connecting a real pain to a concrete relief; otherwise the page falls back into generic product language immediately below the hero.

**Corrected principle:** Apply pain → pressure/risk → relief to every major section and stage explanation. The workflow overview should show how each outcome removes a specific burden while helping the buyer move quickly and safely.

**Correct outcome:** Each stage description should pair the buyer’s lived difficulty with the safer, more confident state the product enables.

**Related principles:** section-level attention; pain-to-relief continuity; stage-specific burden; safe-speed framing; no feature-summary fallback.

### E-070 — Omitting the buyer’s personal accountability and safety need

**When identified:** When the hero headline was reduced to “Move quickly. Defend every award.”

**Incorrect principle applied:**

> Organizational speed and stakeholder defensibility fully represent the procurement manager’s motivation.

**Incorrect outcome:** The copy omitted the buyer’s personal exposure when an award is wrong, non-compliant, poorly supported, or difficult to defend.

**Why it was wrong:** The procurement manager is accountable for the decision. Their desired relief is not only speed and explanation; it is confidence that they can move quickly without taking an unsafe decision.

**Corrected principle:** Include the accountable operator’s personal risk in the problem and relief model. “Safe” must mean grounded, policy-aligned, reviewable, and defensible—not merely cautious.

**Correct outcome:** The hero headline should communicate speed together with safe decision-making and defensibility.

**Related principles:** operator accountability; safe speed; decision risk; personal exposure; trust under scrutiny.

### E-069 — Understating the procurement manager’s dual pressure

**When identified:** When the hero copy focused on reconstructing sourcing information but did not express the cognitive overload created by the manual process under simultaneous demands for speed and defensibility.

**Incorrect principle applied:**

> Naming the manual information problem is sufficient to communicate the buyer’s pain.

**Incorrect outcome:** The copy described operational mess but missed the pressure of delivering a fast award decision that internal stakeholders can trust, challenge, and defend.

**Why it was wrong:** The pain is a tension between time and rigor, amplified by stakeholder scrutiny. The relief must promise both faster progress and explicit evidence/trade-offs.

**Corrected principle:** Frame the pain as the cognitive burden plus the competing demands it creates. Frame the relief as a confident, timely decision that makes evidence and trade-offs legible to the people who need to trust it.

**Correct outcome:** The hero should sell relief from cognitive overload and confidence under stakeholder scrutiny, not merely document consolidation.

**Related principles:** pain tension; speed-versus-defensibility; stakeholder trust; emotional relief plus operational outcome.

### E-068 — Replacing domain-accurate outcomes with generic AI language

**When identified:** When the hero copy described an “unclear request” and said the system would “keep the reasoning behind the decision visible.”

**Incorrect principle applied:**

> Generic AI-product language about ambiguity and transparency can stand in for the user’s domain language and tangible outcome.

**Incorrect outcome:** “Business need” was weakened into “unclear request,” and an internal product property—reasoning visibility—was presented instead of the buyer’s desired award artifact.

**Why it was wrong:** The procurement manager does not primarily want an abstractly clearer request or visible internal reasoning. They want to present an award decision with the reasoning and evidence needed to support it.

**Corrected principle:** Preserve the domain’s own language for the problem and name the user-visible outcome. Describe internal mechanisms only when they help explain how that outcome is achieved.

**Correct outcome:** Use “business need” where that is the real workflow concept, and describe the result as an award decision presented with its reasoning and evidence.

**Related principles:** domain language before generic AI language; tangible outcome over internal mechanism; buyer-facing artifact; semantic fidelity.

### E-067 — Describing product transformation without selling user relief

**When identified:** When the landing-screen solution line described an “evidence-backed sourcing thread” without making the procurement manager’s current pain and resulting confidence tangible.

**Incorrect principle applied:**

> A high-level description of the product transformation is sufficient landing-page copy.

**Incorrect outcome:** The line sounded abstract and product-centric. It explained what the system connects, but not the frustration the buyer escapes or the confidence they gain.

**Why it was wrong:** The landing screen must establish emotional and practical relevance before explaining the mechanism. Procurement managers are buying relief from reconstruction, uncertainty, and defensibility risk—not a “thread.”

**Corrected principle:** Write the core line from lived pain to experienced relief: name the painful work the buyer is tired of doing, then show the confident state the product enables. Use workflow structure as supporting explanation.

**Correct outcome:** The copy should make the buyer recognize the burden of chasing fragmented sourcing information and imagine entering the award decision with the full story and evidence at hand.

**Related principles:** pain-to-relief framing; lived user language; emotional outcome plus practical outcome; mechanism after value.

### E-066 — Replacing a value proposition with a workflow list

**When identified:** When the landing-screen solution sentence listed the four workflow outcomes separated by commas.

**Incorrect principle applied:**

> A concise summary of all workflow stages is an effective one-sentence solution statement.

**Incorrect outcome:** The line was repetitive and described product structure rather than the procurement manager’s central problem and desired change.

**Why it was wrong:** A value proposition should express the single transformation the product enables. The workflow steps can explain how that transformation happens beneath it.

**Corrected principle:** Find the unifying user-level transformation first. Use the workflow steps as supporting proof, not as a comma-separated substitute for the value proposition.

**Correct outcome:** The landing screen’s solution line should connect fragmented sourcing work to one evidence-backed, defensible supplier decision.

**Related principles:** value proposition before feature inventory; one throughline; user outcome over product structure; copy compression without repetition.

### E-065 — Conflating product entry with the first workflow stage

**When identified:** When the implementation-readiness inventory began directly with Stage 1 instead of including a preliminary landing/entry screen.

**Incorrect principle applied:**

> The product experience can begin at the first operational workflow stage because that is where the user’s work begins.

**Incorrect outcome:** The product had no context-setting entry point explaining the procurement problem, the solution, the workflow, or how the user can start the guided experience.

**Why it was wrong:** A product has an entry experience before operational work begins. The landing screen establishes relevance, user orientation, value, scope, and the transition into the workflow. It is part of the product journey but not part of the procurement workflow itself.

**Corrected principle:** Model product entry, workflow execution, and post-workflow outcomes as distinct layers. Design the preliminary landing/entry screen before the first workflow screen, with its own objective, sequence, layout, copy, and start action.

**Correct outcome:** The prototype begins with a procurement-manager-facing landing/entry screen, then transitions explicitly into Stage 1 — Create and approve RFx.

**Related principles:** product journey versus workflow; orientation before action; entry-state design; screen-purpose separation; no direct drop into operations.

### E-064 — Treating preservation as the default after supersession

**When identified:** When the assistant said it would preserve older detailed sections as historical source material without evaluating their continuing value or proposing deletion where they only created duplication.

**Incorrect principle applied:**

> Existing material should be preserved whenever possible, even after it is superseded.

**Incorrect outcome:** The repository retained duplicate and obsolete workflow contracts that increase cognitive load and could be mistaken for implementation guidance.

**Why it was wrong:** Preservation is not free. Superseded material should remain only when it provides necessary audit history, legal/operational evidence, or reusable source material that cannot be represented more clearly elsewhere. Otherwise it should be deleted or moved to a clearly separated archive.

**Corrected principle:** After a model or contract changes, classify every affected artifact as retain, rewrite, archive, or delete. Keep one canonical implementation reference. Do not preserve obsolete content in the reader's primary path merely because it already exists.

**Correct outcome:** The chronological error and approval history remain for traceability, while duplicate implementation contracts become candidates for deletion or relocation to a clearly separated archive after review.

**Related principles:** canonical truth; information hygiene; deletion as a valid outcome; archive boundary; cognitive-load control; supersession impact analysis.

### Artifact disposition review

| Material | Proposed disposition | Reason |
|---|---|---|
| Chronological event log and error register | Retain | Required to preserve decision history and learning |
| Current canonical model and approved four-stage contracts | Retain as implementation reference | Current source of truth |
| Old Stage 2 organizational-context user-facing contract | Archive or delete from primary ledger path | Superseded as a separate user-facing stage |
| Old Stage 3 quoteability contract | Rewrite as a capability reference or archive | Its behavior now belongs inside Stage 1 |
| Old Stage 5 response-understanding contract | Rewrite as internal capability reference or archive | Its behavior now belongs inside Stage 3 |
| Old Stage 6 comparison contract | Archive or delete after extracting any unique evidence | Its behavior is consolidated into revised Stage 3 |
| Old Stage 1 RFx-construction transition | Delete from active documentation | Explicitly superseded by the approved-RFx transition |
| Duplicate detailed Stage 5/Stage 6 sections | Delete after confirming no unique decisions remain | Duplicate contracts create competing truths |

No deletion has been performed. Each proposed deletion or archive move requires review of whether it contains unique evidence not represented in the canonical contract or error register.

### E-061 — Advancing by historical status instead of current review state

**When identified:** When the assistant selected Stage 6 as the next incomplete contract because Stages 3–5 were labelled approved, without checking whether those approvals predated the completed Layer 1 review spine and revised Stage 1 boundary.

**Incorrect principle applied:**

> A historical approval label is sufficient evidence that a workflow step is complete for a later review process.

**Incorrect outcome:** The assistant began auditing Stage 6 before re-auditing Stages 3–5 and without first reconciling the changed user-facing stage map.

**Why it was wrong:** A foundational change to the user journey can change stage boundaries, outputs, and dependencies. Approval is valid only within its scope, version, and review process.

**Corrected principle:** After a foundational workflow change, re-derive the canonical stage map and re-audit dependent steps in sequence against the current review contract. Do not use historical labels as current completion evidence.

**Correct outcome:** Pause Stage 6 work. Reopen the stage map, resolve the Stage 1/Stage 3 boundary, then re-audit the resulting stages in order.

### E-021 — Treating draft completion as user approval

**When identified:** When Stage 3 was proposed as the next task after Stage 2 was drafted, despite the user explicitly saying they would review Stage 2 later.

**Incorrect principle applied:**

> If an artifact has been drafted and no immediate correction is given, it can be treated as approved for progression.

**Incorrect outcome:** The workflow advanced to Stage 3 while Stage 2 was still awaiting review.

**Why it was wrong:** A draft, permission to continue drafting, acknowledgement, and explicit approval are different states. The user had explicitly withheld approval.

**Corrected principle:** Approval is an explicit state transition. Silence, “okay,” permission to perform a different action, or draft completion never implies approval. A dependent step cannot begin while the current step is awaiting review.

**Correct outcome:** Return to Stage 2 as the active step. Stage 3 remains pending until the user explicitly approves Stage 2.

**Related principles:** explicit sign-off; state integrity; no silent advancement; draft versus approved.

### E-022 — Turning internal reasoning layers into unnecessary user-facing stages

**When identified:** When Stage 2 was presented as a separate mandatory stage before producing the first tangible outcome, even though the requester and procurement user may already have supplied enough information to generate an RFx under the confirmed-policy path.

**Incorrect principle applied:**

> Every conceptual reasoning layer should become a sequential user-facing workflow stage.

**Incorrect outcome:** The product journey was delayed by an extra organizational-context stage and moved away from the user's first real-world outcome: generating a reviewable RFx.

**Why it was wrong:** It confused the agent's internal work decomposition with the buyer's workflow. Organizational context is often a supporting retrieval and reasoning capability inside intake. It should become a separate blocking interaction only when missing context prevents safe RFx generation.

**Corrected principle:** Design the primary journey around the user's next tangible outcome. Keep internal reasoning layers behind the interface unless they require a user decision or produce a distinct user-valued artifact.

**Proposed correction:** Under the confirmed-policy path, the intake experience should gather the need, retrieve relevant context when needed, and generate a draft RFx as the first tangible outcome. Context gathering remains available as an agent capability and exception path. It becomes a blocking step only when policy or material context is required before an RFx can be safely drafted.

**Related principles:** user outcome over internal decomposition; minimum sufficient path; capability versus stage; exception-driven blocking; tangible artifact first.

### E-023 — Referring to confirmed policy and relevant context without specifying how they are established

**When identified:** When the corrected RFx-first flow said that the AI would use “the confirmed policy and relevant context” without explaining how the system obtains, verifies, and selects them.

**Incorrect principle applied:**

> Once a source is conceptually required, it can be referred to as available without designing the acquisition and confirmation behavior.

**Incorrect outcome:** The flow appeared to rely on invisible knowledge. It did not explain how the AI knows which policy is authoritative or why a context file is relevant.

**Why it was wrong:** Policy and relevance are runtime states that must be established through evidence and user interaction. File names, folder placement, and model intuition are not sufficient.

**Corrected principle:** Every required runtime input needs an explicit acquisition, verification, selection, and provenance path.

**Correct outcome:** Before RFx generation, the product must:

1. connect the organization’s allowed source location;
2. inspect source contents rather than trusting names or folders;
3. identify candidate policy documents and relevant context;
4. explain why each source was selected;
5. show date, version, authority, conflicts, and uncertainty;
6. allow the procurement user to guide, correct, add, or exclude sources;
7. obtain explicit confirmation of the applicable policy; and
8. carry the confirmed policy and selected context into RFx generation with provenance.

If policy confirmation is unavailable, the product must not silently call a policy “confirmed.” If context relevance is uncertain, it must show the candidate and uncertainty rather than silently use it.

**Related principles:** runtime input establishment; evidence before assertion; content over filename; relevance with provenance; no invisible dependencies.

### E-024 — Making source grounding a separate prerequisite instead of part of RFx intake

**When identified:** When the source-grounding step was presented as a standalone step that had to be completed before the user could begin expressing the business need or creating an RFx.

**Incorrect principle applied:**

> A runtime dependency should become a separate sequential user-facing screen before the primary user outcome begins.

**Incorrect outcome:** The user would have to complete source setup before using the central “Create RFx” action, creating unnecessary separation between stating the need and grounding the AI that is helping shape it.

**Why it was wrong:** Source grounding and business-need capture inform one another. The business need tells the AI what sources are relevant; the sources help the AI clarify and shape the need. The user should experience this as one guided intake journey, not as disconnected setup work.

**Corrected principle:** Combine interdependent activities into one user-outcome journey while preserving their internal states. Expose a separate interaction only when it serves a distinct user decision or artifact.

**Correct outcome:** The user selects **Create RFx**, states the business need, and is guided to connect or select sources as the AI identifies what grounding is needed. The AI can do these activities sequentially or in parallel, then produces a grounded draft RFx for review.

**Related principles:** outcome-led orchestration; co-pilot interaction; interdependent inputs; internal state versus user-facing step; no setup tax.

### E-025 — Anchoring the next task on the user's example label

**When identified:** When the user's example of a “Create RFx” entry point was converted directly into the next task instead of first checking whether that was the unresolved design decision.

**Incorrect principle applied:**

> A concrete example supplied by the user is necessarily the name and scope of the next task.

**Incorrect outcome:** The next task was prematurely framed as designing the “Create RFx” intake journey, even though the user had used that phrase to illustrate a desired relationship between need capture and source grounding.

**Why it was wrong:** The example clarified an interaction principle, not necessarily the next work item. I followed the surface label instead of synthesizing the broader workflow implications.

**Corrected principle:** Treat examples as evidence of intent, not as preselected work breakdowns. Determine the next task from the current approved state, unresolved dependency, and desired outcome.

**Correct outcome:** First rebaseline the end-to-end buyer journey around the first tangible RFx outcome and place source grounding, policy resolution, need capture, and review within that journey. Only then define individual screens or entry-point labels.

**Related principles:** intent over wording; synthesis before decomposition; example versus decision; outcome-led sequencing.

## Rebaselined buyer journey

**Status:** Proposed journey model; replaces the earlier assumption that source grounding and organizational context must be separate user-facing stages.

### Primary buyer outcome

The buyer wants to turn a business need into a reviewable, evidence-grounded RFx that can be sent to suppliers.

### Journey sequence

| Buyer step | Buyer sees or does | AI work behind the step | Buyer-visible outcome |
|---|---|---|---|
| 1. Start a sourcing request | Selects the action to begin an RFx | Opens a new sourcing workspace | A clear starting point |
| 2. Explain the need | Describes the business need in their own words and adds guidance | Extracts the outcome, broad need, boundaries, ambiguity, and evidence needs | A plain-language need summary |
| 3. Ground the request | Connects or selects permitted sources; adds guidance; confirms or corrects candidates | Inspects source content, finds policy/context candidates, explains relevance, preserves provenance, and identifies conflicts | A grounded request with visible evidence |
| 4. Draft the RFx | Reviews the AI's proposed scope, lines, questionnaire, terms, and response instructions | Converts the grounded request into a structured RFx and labels assumptions/open issues | A first tangible artifact: draft RFx |
| 5. Resolve and approve | Corrects content, resolves blocking issues, and approves the RFx | Re-runs checks, updates evidence links, and prevents progression while material issues remain unresolved | An approved RFx ready to release |
| 6. Release to suppliers | Chooses the supplier channel and sends the RFx | Creates the outbound package and records the release event | Supplier invitation sent with evidence intact |

### Important structural decision

Source grounding, policy resolution, relevance checking, and organizational-context gathering are AI capabilities within this journey. They become visible to the buyer when a decision or input is needed, but they do not automatically become separate stages.

### Blocking rule

The journey may continue through need capture and evidence discovery while policy or context is being resolved. The system may not present the RFx as approved or release it to suppliers when a policy-dependent or material business-need issue is unresolved.

### Internal capability versus buyer-facing step

| Internal capability | Where it appears in the journey |
|---|---|
| Need extraction | Explain the need |
| Policy discovery and confirmation | Ground the request |
| Context retrieval and relevance evaluation | Ground the request |
| Requirement structuring | Draft the RFx |
| Validation and gate evaluation | Resolve and approve |
| Artifact generation and outbound packaging | Draft, approve, and release |

### Design consequence

The first screen after the landing page should help the buyer begin expressing the need. Source connection should appear as part of that same sourcing workspace, timed to the AI's evidence needs. The interface should not make the buyer complete invisible system setup before they can begin.

The next design task, after this journey is approved, is to decompose each buyer step into screens and atomic sections.

## Step-definition contract

**Status:** Working method for reviewing and defining every workflow step.

Every step must be represented as a bounded decision-and-outcome unit. A step is not complete merely because an activity or feature has been described.

### Required fields

| Field | Required content |
|---|---|
| Step name | Plain-language name of the buyer outcome or decision |
| Objective | What must be accomplished, independent of the tool |
| Importance | Why it matters now and what risk exists if it is skipped or done poorly |
| Starting state | What is already known, confirmed, or available when the step begins |
| Inputs | Information, files, guidance, or decisions needed |
| Input authority | Who or what supplies or confirms each important input |
| AI work | Extraction, retrieval, reasoning, generation, validation, or routing performed by the AI |
| Execution mechanism | Whether the behavior is performed by model inference, deterministic code/rules, an external tool, or a hybrid of these |
| User work | The exact action required from the relevant workflow user, if any |
| Output | The artifact, decision, or state produced |
| Evidence | What supports the output and how provenance is preserved |
| Authority | Who can approve, reject, override, or resolve the result |
| Completion evidence | Observable conditions proving the step is complete |
| Failure states | Missing, ambiguous, conflicting, prohibited, unapproved, or unavailable conditions |
| Next transition | The proposed next state/action and what authorizes it |
| Runtime parameters | Organization-specific values that are supplied at runtime rather than assumed in product design |
| User-facing surface | What the user sees and does, if the step requires a visible interaction |
| Product implementation | Components, interfaces, storage, tools, and services that implement the behavior |
| Verification | Tests, evaluations, fixtures, human review, and observability proving the behavior works |

### Review rules

1. The objective must be tool-agnostic.
2. The importance must connect to the approved project outcome.
3. Inputs must have a source and authority; no invisible dependencies.
4. AI work must be separated from user work and domain authority.
5. Derived conditions must be distinguished from policy-dependent conditions.
6. Runtime unknowns must not deadlock design-time product behavior.
7. Internal capabilities must not automatically become user-facing stages.
8. A step may advance only after its completion evidence and approval state are explicit.
9. A new prerequisite becomes a new step and causes dependent steps to be resequenced.
10. Every user question must be concrete, necessary, and answerable without requiring the user to impersonate an unavailable SME.
11. Every generated artifact must have an intended consumer, format, source basis, and review path.
12. The current workflow map must remain visible while a step is being reviewed.
13. Runtime model behavior must be distinguished from deterministic execution that the model invokes or configures.
14. Every important behavior must map to an implementation component and a verification method.
15. A step contract is both a workflow specification and a product-development contract; it must support design, build, test, and review.

### Status vocabulary

- `proposed`: drafted by the agent; not approved.
- `approved`: explicitly accepted for the stated scope.
- `approved-with-runtime-parameters`: product behavior accepted; client-specific values remain runtime inputs.
- `needs-input`: a specific required input is missing.
- `needs-authority`: the relevant domain authority or policy approval is missing.
- `blocked`: a known condition prevents the step from proceeding.
- `superseded`: replaced by a later approved decision.
- `not-started`: no draft exists.

### Step-review handoff

Before requesting review, the agent must state:

- the current workflow map;
- the step being reviewed;
- its objective and importance;
- what is already known;
- what has been proposed;
- what is not being assumed;
- the exact user decision, if one is genuinely required.

The user should never be asked to approve an entire reasoning system when only one decision is unresolved.

## Stage 1 contract audit

**Status:** Approved after re-audit.

### Current workflow map

1. Understand and frame the business need — Stage 1.
2. Gather relevant organizational context — approved as a stage-aware capability, but not necessarily a separate blocking screen.
3. Make the requirement quoteable — Stage 3 approved.
4. Invite suitable suppliers — Stage 4 approved.
5. Receive and understand supplier responses — Stage 5 drafted.
6. Compare offers fairly — not yet defined.
7. Make and defend the supplier decision — not yet defined.

### Stage 1 step card

| Contract field | Stage 1 definition | Status |
|---|---|---|
| Step name | Understand and frame the business need | Approved workflow step |
| Objective | Establish a shared, sufficiently clear understanding of what the business needs to source | Approved |
| Importance | Prevent the workflow from sourcing the wrong thing while avoiding premature demand for quote-ready detail | Approved rationale |
| Starting state | A requester has a business need, possibly expressed in plain language, files, or guidance | Proposed runtime assumption |
| Inputs | Requester description, user guidance, relevant evidence, applicable policy clauses, and organization-confirmed RFx semantics when needed | Mixed: approved principles plus runtime inputs |
| Input authority | Requester supplies the need; policy owner/procurement authority supplies policy; organization/template owner confirms RFx semantics; AI identifies evidence | Defined role split |
| AI work | Extract outcome and broad need; identify ambiguity; form evidence questions; retrieve relevant context; retrieve applicable policy clauses; preserve provenance; propose a clarified summary | Proposed product behavior |
| User work | State or correct the need, add guidance, select or exclude evidence, and confirm the summary | Proposed product behavior |
| Output | Confirmed business-need summary, accepted boundaries, unresolved items, evidence references, and policy status | Proposed product output |
| Evidence | Request text, user guidance, source content, applicable policy clauses, and confirmation record | Defined evidence classes |
| Authority | Requester confirms the need; authorized procurement user confirms policy applicability; template owner confirms field semantics where relevant | Runtime authority |
| Completion evidence | Need outcome and broad scope are understood; material ambiguity about what is being sourced is resolved or governed; requester confirms the summary; policy status is known for any policy-dependent decision | Product rule draft; policy parameters runtime |
| Failure states | Needs clarification; needs context; needs policy confirmation; needs interpretation; conflicting evidence; policy undetermined | Defined state pattern |
| Next transition | Move into RFx construction when the need is clear, policy-dependent restrictions are resolved, and the required format/field contract is available or confirmed | Proposed transition |
| Runtime parameters | Applicable policy version/clauses, user guidance, organization context, RFx format, field contract, and approval roles | Explicitly runtime |
| User-facing surface | A single sourcing-intake journey where the requester states the need, the AI surfaces evidence needs, and source grounding occurs when needed | Proposed journey |

### Audit findings

The Stage 1 contract is sufficiently defined at the product-behavior level. The remaining client-specific values are intentionally runtime parameters. The main unresolved item is not the Stage 1 objective; it is the exact transition rule for when the clarified need may enter RFx construction under the applicable policy and confirmed RFx field contract.

This audit does not approve the remaining runtime parameters or the next transition. It makes their ownership and resolution path explicit.

### Stage 1 implementation and verification audit

| Behavior | Model-mediated work | Deterministic product work | Verification |
|---|---|---|---|
| Capture the need | Interpret requester language and draft a summary | Store original input, version the summary, and record confirmation state | Representative need examples; summary faithfulness review |
| Detect ambiguity | Identify overloaded terms and competing interpretations | Apply the materiality/state rules and create an evidence-question record | Ambiguous versus harmless wording evaluation set |
| Retrieve context | Propose search concepts and explain likely relevance | Search indexed sources, apply metadata filters, retain source locations, and log retrieval events | Retrieval relevance and missed-evidence evaluation |
| Interpret policy | Extract candidate clauses and propose applicability | Enforce policy version/effective-date filters and approval states | Clause extraction/applicability evaluation with known policies |
| Use user guidance | Incorporate guidance into interpretation and revised summary | Store guidance, provenance, version history, and affected fields | Guidance correction and regression cases |
| Confirm the need | Generate a concise confirmation summary | Require explicit confirmation and prevent silent transition | Confirmation-state and rejection-path tests |
| Advance to RFx construction | Explain the proposed transition and unresolved assumptions | Enforce state transition, required-input checks, and policy/format status | State-machine, permission, and blocked-transition tests |

### Stage 1 implementation outputs

The product implementation must provide:

- request and conversation record;
- structured business-need object;
- ambiguity and evidence-question records;
- source and policy retrieval interfaces;
- clause applicability record;
- user-guidance and correction history;
- confirmation and approval records;
- policy/format runtime-state objects;
- Stage 1 state machine;
- audit and provenance events;
- handoff interface to RFx construction.

### Stage 1 verification outputs

The team must verify:

- the AI does not silently rewrite the need;
- content-based retrieval is more than filename matching;
- user guidance changes are traceable;
- policy clauses are not applied without applicability evidence;
- prohibited or unresolved requests cannot transition to RFx construction;
- deterministic state transitions cannot be bypassed by model output;
- missing or ambiguous mappings remain visible;
- approved and rejected decisions survive refresh and version changes.

This completes the expanded-contract audit for Stage 1 at the design level. It does not yet constitute implementation or test execution.

## Stage 1 transition to RFx construction

**Status:** Historical internal behavior; superseded by the approved Stage 1 contract, which ends at buyer-approved RFx.

### Current state

The business need has been captured and context-driven clarification has completed for the current interpretation.

### Proposed transition

Move from **business need understood** to **RFx construction may begin**.

This transition is not the same as RFx approval or supplier release.

### Conditions for transition

RFx construction may begin only when:

1. the intended business outcome is clear;
2. the broad need and boundaries are confirmed by the requester;
3. context-driven ambiguity about what is being sourced has been resolved;
4. the applicable policy rule for whether this sourcing action may proceed is confirmed or an authorized scoped rule applies;
5. no confirmed policy prohibition prevents the request;
6. the organization-supplied or organization-confirmed RFx field contract is available;
7. material required field meanings are known; and
8. any remaining unknowns are either not needed to understand the need or are explicitly governed for later handling.

These conditions define product behavior. The actual policy thresholds, prohibitions, approvals, and allowed unknowns are runtime inputs from the organization.

### Transition results

| Result | Meaning | Next product behavior |
|---|---|---|
| `rfq-construction-allowed` | Need, policy permission, and field semantics are sufficiently established | Begin generating the draft RFx |
| `needs-need-clarification` | The business need remains materially ambiguous | Return to requester with concrete alternatives |
| `needs-policy-confirmation` | Policy source or applicability is not confirmed | Route to authorized procurement user; do not construct the RFx |
| `policy-prohibits-request` | Applicable policy prohibits the sourcing action | Do not create the RFx; route to the appropriate alternative or exception process |
| `needs-format-confirmation` | RFx template or field meanings are not organization-confirmed | Route to template owner or authorized procurement user |
| `needs-context` | Missing context could change the broad need or sourcing permission | Generate a specific evidence question and return to context/clarification |
| `controlled-unknowns` | Policy explicitly permits specified unknowns to be handled later | Begin construction and carry the unknowns visibly into the draft |

### What may happen before the transition

The AI may inspect sources, identify ambiguity, propose interpretations, and prepare provisional mappings before this transition. It must label those outputs as provisional and must not create an RFx that appears valid or ready for release.

### What this transition authorizes

It authorizes only internal construction of a buyer-reviewable draft. It does not authorize:

- final RFx approval;
- supplier communication;
- supplier release;
- evaluation or award;
- treating inferred values as confirmed facts.

### Transition evidence

The system records:

- confirmed need summary and requester confirmation;
- context evidence and relevance explanations;
- applicable policy clause and approval record;
- format/field contract and version;
- unresolved items and their policy treatment;
- transition result and timestamp;
- responsible actor for any next approval.

The draft RFx must be traceable back to this transition record.

## RFx generation and buyer approval step card

**Status:** Approved.

### Step name

Generate and approve the draft RFx.

### Objective

Turn the permitted, clarified business need into an RFx that accurately represents the request, follows the confirmed policy and field contract, and is explicitly approved before supplier release.

### Importance

This is the control point between internal requirement shaping and external supplier communication. It prevents the system from sending a request that is prohibited, incorrectly mapped, incomplete, inconsistent with policy, or difficult for suppliers to answer.

### Starting state

- Stage 1 transition to RFx construction is approved;
- business need and boundaries are confirmed;
- relevant context and policy clauses are available with provenance;
- an organization-supplied or organization-confirmed RFx field contract is available;
- policy and format conflicts are either resolved or visible.

### Inputs and authority

| Input | Source/authority |
|---|---|
| Business need and boundaries | Requester confirmation |
| Policy clauses | Organization policy and authorized procurement confirmation |
| Organizational context | Source evidence and procurement-user guidance |
| RFx field contract | Organization/template owner confirmation |
| User guidance | Procurement user, acting as head pilot |
| Output format | Organization-confirmed format or explicitly allowed system format |

### AI work

1. Load the confirmed RFx format and field definitions.
2. Check whether the sourcing action is permitted.
3. Map grounded need and context into fields.
4. Generate scope, line items, questionnaire, terms, attachments, and response instructions.
5. Preserve units, currencies, dates, quantities, and conditions.
6. Show inferred, missing, conflicting, and unmapped values.
7. Validate against policy, field semantics, format, and dependencies.
8. Explain evidence and downstream effects of changes.

### Buyer work

The procurement user reviews and may:

- correct the need or scope;
- edit line items and values;
- resolve mappings;
- add or remove questionnaire items;
- correct terms or response instructions;
- add guidance or evidence;
- request clarification from the requester;
- approve or reject the RFx for release.

### Output

- buyer-reviewable RFx draft;
- field-level provenance;
- policy and format validation results;
- assumptions and unresolved items;
- buyer corrections;
- final approved RFx version, once explicitly approved.

### Completion evidence

The step is complete only when:

- the draft represents the confirmed business need;
- policy and format checks pass or are handled by an approved rule;
- material field mappings are confirmed;
- required values and terms are present;
- issues that block release are resolved;
- the procurement user explicitly approves the final version.

### Failure states

- `needs-clarification`;
- `needs-policy-confirmation`;
- `policy-prohibits-request`;
- `needs-format-confirmation`;
- `needs-field-mapping`;
- `needs-requester-input`;
- `conflicting-evidence`;
- `draft-with-visible-exceptions`;
- `approved-for-release`.

The system must not treat `draft-with-visible-exceptions` as `approved-for-release` unless the applicable policy and authorized user permit that transition.

### Next transition

Only `approved-for-release` may transition to supplier invitation. The approval record contains the RFx version, policy/version, format/version, evidence set, guidance, approver, and timestamp.

### E-044 — Approving a dependent stage before its required approval step

**When identified:** During the Stage 1 transition approval review, when Stage 4 had already been marked approved even though the buyer review and RFx approval behavior that supplies its required approved RFx remained a draft.

**Incorrect principle applied:**

> A later stage can be approved based on its own behavior even when an upstream artifact or approval contract it requires is not yet approved.

**Incorrect outcome:** The ledger stated that supplier invitation was approved while the buyer approval gate producing the approved RFx was still unresolved.

**Why it was wrong:** Workflow approvals must respect dependency order. A stage cannot be operationally approved if its required input state is not defined and approved.

**Corrected principle:** Before approving a step, verify that every required upstream state, artifact, and transition is approved or explicitly available as a runtime input. If not, mark the downstream step as draft or conditionally approved.

**Correct outcome:** The Stage 4 supplier-invitation logic remains a draft pending completion of the buyer review/approval contract, unless its dependency is explicitly represented as a runtime input and separately approved.

**Related principles:** dependency integrity; approval propagation; upstream contract before downstream approval; no orphaned approvals.

## RFx format as a separate runtime input

The policy and RFx format must be modelled as related but distinct inputs.

### Policy

Policy tells the AI what is required, permitted, prohibited, or subject to approval for the procurement manager, requester, suppliers, and workflow stages.

### RFx format specification

The format specification tells the AI how the RFx must be structured and delivered, including:

- required sections;
- line-item fields and ordering;
- questionnaire structure;
- terms and declarations;
- response format and channel constraints;
- required attachments;
- naming, numbering, and version conventions;
- output format such as PDF, spreadsheet, portal payload, or email package.

The format may be contained inside a policy document, but the product must not assume that it is. It must be discoverable and modelled separately so it can be retrieved, versioned, validated, and replaced without changing the policy model.

### Runtime grounding inputs

The grounded RFx workspace should distinguish:

1. policy rules;
2. approved RFx template or format specification;
3. current business need;
4. organizational context;
5. user guidance and preferences;
6. system defaults, used only when no stronger source exists and clearly labelled.

User guidance may clarify any of these inputs. For example, the user may identify which template applies, explain that a policy clause has a special interpretation, or request an approved output format.

### RFx-generation behavior

Before generating the RFx, the AI must identify the applicable policy and format specification, show their sources and versions, and surface conflicts. It must then validate the generated RFx against both:

- policy requirements; and
- format requirements.

A policy-compliant document can still be unusable if it violates the approved RFx format. Conversely, a correctly formatted document can still be invalid if it omits policy-required content.

If no approved format exists, the system must state that clearly. It may use a labelled system or demo format only where the organization permits that behavior; it must not present the default as an organizational standard.

### E-026 — Assuming the RFx format is contained in policy

**When identified:** When the journey was framed around grounding the need with policy and context without explicitly identifying an approved RFx format or template as a separate required input.

**Incorrect principle applied:**

> A policy source is sufficient to determine both what the RFx must contain and how the RFx must be structured and delivered.

**Incorrect outcome:** The design risked generating an RFx that was substantively aligned to policy but structurally incompatible with the organization's template, channel, or buyer preference.

**Why it was wrong:** Normative policy and artifact format are different concerns. They may share a document, but they need separate data models and validation paths.

**Corrected principle:** Model obligations and artifact structure separately, while allowing them to be linked when a source contains both. RFx generation must validate against both contracts.

**Correct outcome:** The product grounds RFx generation in policy, format specification, current need, organizational context, and cross-cutting user guidance. Missing or conflicting format information is surfaced rather than silently filled with a default.

**Related principles:** policy versus schema; artifact contract; separate validation dimensions; user preference as guidance; no hidden format assumptions.

## RFx template semantics and field mapping

An RFx template is not self-explanatory. The product needs a semantic contract for every field before it can reliably map a user's request into the template.

### Field definition required

For each template field, the AI must establish or obtain:

- field identifier and label;
- business meaning;
- data type and allowed values;
- unit, currency, date, or measurement basis;
- whether it is required, optional, conditional, or informational;
- applicable workflow stage and actor;
- whether it applies to the request, line item, supplier, questionnaire, terms, or evaluation;
- source or authority for the definition;
- examples and disallowed interpretations;
- dependencies on other fields;
- whether the value must be buyer-provided, supplier-provided, or AI-derived.

### Mapping behavior

The AI maps user input to template fields by:

1. extracting candidate facts from the user's text and files;
2. normalizing concepts, units, dates, currencies, and terminology;
3. matching candidates to field definitions;
4. showing the evidence supporting each mapping;
5. assigning confidence and identifying conflicts or missing values;
6. asking the buyer only about materially ambiguous mappings;
7. preserving unmapped input rather than discarding it; and
8. validating the populated RFx against field requirements and dependencies.

The AI must not map based on label similarity alone. A field called “requirement,” “description,” or “quantity” may have a different meaning across organizations and templates.

### Mapping states

| State | Meaning | Product behavior |
|---|---|---|
| `mapped-confirmed` | Meaning and value are supported by evidence or user confirmation | Populate the field and show provenance |
| `mapped-inferred` | A plausible mapping exists but needs confirmation | Show the proposed mapping and request confirmation when material |
| `ambiguous` | Multiple fields or meanings are plausible | Present alternatives and ask the buyer to choose |
| `missing` | A required field has no usable value | Ask for the value or show why the RFx cannot proceed |
| `not-applicable` | The field does not apply under the current policy/template conditions | Record the rationale and leave it unpopulated |
| `preserved-unmapped` | Input does not map safely to a known field | Retain it for review; never silently drop it |

### E-027 — Treating template structure as sufficient for semantic mapping

**When identified:** When the RFx format was described as a separate input without asking how the AI would know what each field means or map user input into it.

**Incorrect principle applied:**

> A field label and position in a template are sufficient to determine its meaning.

**Incorrect outcome:** The AI could populate the wrong field, normalize data incorrectly, omit relevant input, or produce a superficially formatted but semantically invalid RFx.

**Why it was wrong:** Artifact structure and field semantics are distinct. Reliable generation needs a field-definition and mapping contract.

**Corrected principle:** Treat every template field as a semantic object requiring definition, provenance, mapping rules, validation, and an explicit ambiguity state.

**Correct outcome:** The product first learns or receives the template field definitions, then maps user input with evidence and confidence, asks for confirmation where material, preserves unmapped information, and validates the populated RFx before approval.

**Related principles:** semantic schema; field-level provenance; mapping before rendering; ambiguity preservation; no label-only inference.

## Ownership and supply of the RFx field contract

The field contract must come from the organization that owns the RFx template, not from the product manager and not from generic model inference.

### Supply paths

1. **Preferred day-one path:** the organization supplies an annotated template, schema, data dictionary, or template owner who can explain the fields.
2. **Supported assisted path:** the organization supplies the template; the AI extracts a proposed field contract; the authorized procurement user or template owner confirms the meanings, requiredness, and mappings.
3. **Future capability:** a validated custom model proposes field semantics from a large corpus of high-quality templates and examples, but those semantics still require organizational confirmation before governing production RFx generation. This includes the case where the organization supplies only an opaque template and no one can confirm its semantics.

An opaque template with no confirming owner is not a day-one supported path. The product must report the capability boundary and route to an organization-supplied or organization-confirmed field contract. A future custom-model capability may assist with this case after separate accuracy evaluation and enterprise validation.

### Responsibility split

- **Organization/template owner:** supplies or confirms field meaning and format requirements.
- **Procurement manager:** guides usage for the current RFx and approves applicable interpretation.
- **AI:** extracts a proposed contract, maps evidence, exposes uncertainty, and validates against the confirmed contract.
- **Product manager:** designs this capability and its boundaries, but does not supply procurement semantics.

### E-028 — Introducing a semantic contract without identifying its owner

**When identified:** When the field-definition contract was proposed without stating who supplies it, who confirms it, or what the product does when it is unavailable.

**Incorrect principle applied:**

> If a contract is necessary for reliable behavior, the agent may introduce it without first establishing its source and authority.

**Incorrect outcome:** The design created an apparently necessary artifact with no accountable owner and implied that the product or model could supply authoritative field semantics.

**Why it was wrong:** Semantic definitions are organizational knowledge. Without an owner or evidence source, the contract is only a proposal.

**Corrected principle:** Every required contract must have a named source, owner, confirmation path, and fallback state. Missing semantic authority is a capability boundary, not an invitation for silent inference.

**Correct outcome:** Day-one support requires an organization-supplied or organization-confirmed field contract. AI-assisted extraction may reduce setup effort, but it remains a proposal until confirmed.

**Related principles:** contract ownership; semantic authority; capability boundary; human confirmation of inferred schema.

**Approval status:** The user aligned with the organization-supplied/confirmed paths (1 and 2). Path 3 is classified as a future custom-model extension, not a production fallback.

### E-029 — Treating opaque-template degradation as an acceptable production fallback

**When identified:** When an opaque template without a confirming owner was proposed as a labelled draft path rather than being treated as a future capability.

**Incorrect principle applied:**

> Labelling an uncertain output as a draft is sufficient to make an unsupported capability safe for production use.

**Incorrect outcome:** The product appeared to support arbitrary opaque templates despite lacking reliable field semantics, creating a risk of incorrect mappings and structurally valid but semantically wrong RFx documents.

**Why it was wrong:** A warning label does not create accuracy, provenance, or organizational validity. This was inconsistent with the stricter production boundary correctly applied to policy generation without historical evidence.

**Corrected principle:** Apply the same capability-maturity and evidence threshold to template semantics as to policy semantics. Unsupported inference from an opaque template belongs in a future custom-model extension with evaluation and enterprise validation.

**Correct outcome:** Day-one support is limited to organization-supplied or organization-confirmed field contracts. Opaque-template interpretation is a future extension and cannot silently produce production RFx output.

**Related principles:** consistent production thresholds; warning versus safety; custom-model extension; semantic accuracy before format coverage.

## Relationship between policy and annotated RFx schema

An annotated RFx template/schema can be sufficient to generate a structurally and semantically aligned RFx, but it is not automatically a complete procurement policy.

### What the schema can establish

- fields and their meanings;
- required, optional, and conditional fields;
- line-item and questionnaire structure;
- units, currencies, and allowed values;
- output and response format;
- template-specific validation rules.

### What still requires policy or authorized guidance

- who may approve or release the RFx;
- spend thresholds and approval levels;
- supplier eligibility rules;
- mandatory sourcing channels;
- legal, compliance, security, or risk controls;
- exceptions and escalation rights;
- evaluation and award governance;
- retention and audit requirements.

If the organization confirms that the annotated schema also contains these governance rules, it may serve as a scoped RFx policy contract for that workflow. The system must record that scope explicitly; it must not treat the schema as general procurement policy by default.

### E-030 — Treating policy presence as a binary prerequisite for RFx generation

**When identified:** When the model implicitly placed policy and template semantics side by side as though both were always required before any RFx could be generated.

**Incorrect principle applied:**

> A complete RFx can be generated only when a general procurement policy and a template schema are both available.

**Incorrect outcome:** The product would unnecessarily block structurally valid RFx generation when an annotated schema is available, while failing to distinguish which governance decisions remain unknown.

**Why it was wrong:** Template semantics and procurement governance answer different questions. A schema may be sufficient for artifact construction but insufficient for approval, supplier eligibility, or award governance.

**Corrected principle:** Evaluate each required capability against the authoritative contract that governs it. Allow schema-supported generation where safe, while separately gating unresolved policy-dependent actions.

**Correct outcome:** An annotated and organization-confirmed schema can support RFx drafting without a general policy document only for policy-independent construction. Before the RFx is created or released, the system must check whether the request is subject to a known policy prohibition, restriction, or approval requirement. Any unresolved policy-dependent issue remains gated.

**Related principles:** capability-specific prerequisites; partial completion; scoped authority; artifact construction versus governance.

## Pre-generation policy compliance gate

Before producing an RFx that could be treated as a real sourcing artifact, the system must evaluate whether the requested item, service, or sourcing action is permitted under the applicable confirmed policy or scoped governance contract.

| Policy evaluation | Product behavior | RFx state |
|---|---|---|
| Request is permitted | Continue with schema mapping and RFx generation | `draftable` |
| Request is prohibited | Explain the policy conflict and route to the appropriate alternative or exception process | No RFx created |
| Request requires prior approval | Collect or route for that approval before generating the supplier-facing RFx | `needs-approval` |
| Policy applicability is unclear | Show the relevant rule and uncertainty; request authorized resolution | `needs-resolution` |
| No applicable policy is available | Do not claim compliance; allow only explicitly scoped internal drafting if safe, with policy status visible | `policy-undetermined` |

The system may create an internal clarification or exception-request record where appropriate. That is different from creating an RFx for supplier release.

### E-031 — Failing to test the policy-violation case

**When identified:** When the schema was described as potentially sufficient for RFx generation without first asking what happens if the requested item or sourcing action violates a confirmed procurement policy.

**Incorrect principle applied:**

> If the RFx can be structurally and semantically populated, it is safe to create the RFx.

**Incorrect outcome:** The product could generate an RFx for a prohibited request or move a non-compliant request toward suppliers.

**Why it was wrong:** Artifact completeness is not permission to act. Policy contains negative constraints and approval gates, not only formatting or required fields.

**Corrected principle:** Evaluate permission and prohibition before artifact generation. A system must check whether the requested sourcing action is allowed before it checks whether it can format the request.

**Correct outcome:** A prohibited request produces no RFx. A request requiring approval pauses before RFx creation. An unclear or unavailable policy produces an explicitly gated state. Only a permitted request can proceed to schema mapping and RFx drafting.

**Related principles:** negative constraints; permission before construction; compliance preflight; no supplier-facing artifact for prohibited work; agreement is not analysis.

## Policy as a versioned, stage-aware source

An organization may maintain one standard procurement policy document that is revised over multiple years and covers many stages, actors, decisions, and controls. The product should model that document as a structured policy source rather than assume that the whole file is equally relevant to every action.

### Policy structure

The system should represent:

- policy identity;
- version and effective date;
- section and clause boundaries;
- applicable workflow stage;
- applicable actor;
- governed action or decision;
- conditions and exceptions;
- positive requirements and prohibitions;
- approval authority;
- superseded or conflicting versions;
- source location and provenance.

### Runtime use

For the current workflow stage and request, the AI should:

1. identify the action being considered;
2. retrieve candidate clauses from the applicable policy version;
3. evaluate stage, actor, category, spend, timing, location, and other applicability conditions;
4. show the relevant clause and why it applies;
5. allow user guidance to identify context or challenge applicability;
6. check for exceptions, amendments, and conflicts; and
7. return a decision with the exact policy basis and approval path.

The AI must not treat a section as applicable solely because its heading resembles the current task. It must also not treat a newer file as authoritative without checking effective dates, scope, and approval status.

### Policy corpus extension

Although one standard document may be the primary source, the model must also support linked supplemental artifacts such as approval matrices, category policies, legal addenda, security controls, and amendments. These may override or refine the standard policy within a defined scope.

The correct abstraction is therefore:

> **versioned policy corpus → applicable clauses → stage/action decision**

not:

> **one file → one global rule set**

### Product implication

The source-grounding experience should let the user confirm the policy version and see the specific clauses relevant to the current RFx. The RFx should retain clause-level provenance so later review can establish why a field, approval, or restriction was applied.

### E-032 — Treating policy as a monolithic file instead of a versioned, stage-aware source

**When identified:** When the policy discussion had not yet modelled that one evolving policy document can govern different stages and actions through different sections.

**Incorrect principle applied:**

> A policy document can be retrieved and applied as one undifferentiated source for the whole procurement journey.

**Incorrect outcome:** The AI could apply an irrelevant clause, miss a stage-specific restriction, use a superseded version, or fail to explain which policy language governed a decision.

**Why it was wrong:** Policy relevance is conditional on version, stage, actor, action, scope, and exceptions.

**Corrected principle:** Retrieve and evaluate policy at clause level against the current stage and action, while preserving version and applicability provenance.

**Correct outcome:** The system supports one evolving standard document as a structured policy source, plus linked supplemental policies, and uses only confirmed applicable clauses for each decision.

**Related principles:** policy versioning; clause-level retrieval; applicability conditions; stage-aware governance; provenance.

### E-033 — Inventing an artifact name instead of describing the behavior

**When identified:** When the next task was named “RFx-generation preflight,” making a set of internal checks sound like a new artifact or user-facing stage.

**Incorrect principle applied:**

> Introducing a compact technical label makes the next product task clearer.

**Incorrect outcome:** The user had to ask what “preflight” meant and whether another artifact had been invented.

**Why it was wrong:** The label was not part of the user's procurement language or an approved product concept. It added translation work and obscured the actual behavior.

**Corrected principle:** Use the user's domain language first. Introduce a new name only when it identifies a real, necessary product object or user action. Describe internal checks as checks unless they become a deliberate product concept.

**Correct outcome:** The next task is stated plainly: define the checks the AI performs before generating the draft RFx. These checks are internal behavior, not a new artifact or stage.

**Related principles:** plain language; no invented objects; behavior before naming; minimize translation burden.

### E-035 — Mixing chronological history with the current canonical model

**When identified:** When the user asked whether decisions were recorded chronologically and the ledger contained chronological errors but topic-grouped decisions and drafts without a clear authoritative reading order.

**Incorrect principle applied:**

> One document can serve as both an evolving current specification and an unambiguous chronological decision history without separate structures.

**Incorrect outcome:** The reader could not reliably distinguish what was approved, what was superseded, what was merely drafted, and the order in which the decisions occurred.

**Why it was wrong:** Current truth and historical sequence have different purposes and require different representations.

**Corrected principle:** Maintain separate canonical-state, chronological-event, and error-history structures. The canonical model shows the latest status; the event log preserves order; the error register preserves learning.

**Correct outcome:** The ledger now has an explicit reading order, current canonical model, chronological event log, and error register. Future updates must change the appropriate layer without rewriting history.

**Related principles:** immutable history; current-state projection; separation of concerns; decision traceability.

### E-045 — Conflating model work with deterministic execution

**When identified:** When the step cards used “AI work” as one category for reasoning, extraction, generation, validation, and deterministic operations such as calculations or normalization.

**Incorrect principle applied:**

> Any behavior performed in an AI-enabled workflow can be described as one undifferentiated category of AI work.

**Incorrect outcome:** The design did not show which work requires model judgment and which work should be performed by deterministic code, rules, or tools. This obscures reliability, testing, and guardrail boundaries.

**Why it was wrong:** An AI workflow may involve model inference directly and deterministic execution indirectly. For example, a model may identify fields or provide parameters while code performs currency conversion, arithmetic, validation, or document rendering.

**Corrected principle:** Describe the behavior and its execution mechanism separately. Classify each behavior as model inference, deterministic rule/code, external tool execution, or hybrid. Treat deterministic work as deterministic even when an AI agent initiates it.

**Correct outcome:** Every step card includes an execution-mechanism field and maps model outputs to deterministic actions, validations, and calculations where appropriate.

**Related principles:** model versus tool boundary; deterministic execution; hybrid orchestration; testability by mechanism.

### E-046 — Treating step contracts only as workflow descriptions

**When identified:** When the step-definition contract captured workflow behavior but did not explicitly connect each step to product architecture, implementation, tests, evaluation, and observability.

**Incorrect principle applied:**

> Once a workflow step is logically specified, product development can be treated as a separate downstream activity.

**Incorrect outcome:** The contracts could guide discussion but not reliably guide what must be built, how it should be tested, or how to detect drift between intended and implemented behavior.

**Why it was wrong:** These contracts are product-development artifacts. Their fields must expose the information needed by design, engineering, AI evaluation, QA, and deployment review.

**Corrected principle:** Define each step as a product contract that connects user outcome, agent behavior, deterministic execution, runtime data, implementation components, acceptance tests, evaluation cases, and observability.

**Correct outcome:** Product development follows a closed loop:

1. approve the step contract;
2. derive UX, data, agent, and deterministic execution requirements;
3. implement the mapped components;
4. verify behavior against the contract;
5. review failures and update the contract only through explicit decisions;
6. release only when the contract's completion and verification evidence are satisfied.

**Related principles:** specification-to-build traceability; contract-driven development; verification before release; controlled change.

### E-047 — Applying a global contract correction only to the latest stage

**When identified:** When the expanded step-definition contract was proposed, but the next action was to audit only Stage 6 because that was the stage under discussion.

**Incorrect principle applied:**

> A newly discovered contract requirement needs to be applied first or only to the current step.

**Incorrect outcome:** Earlier steps could retain missing implementation, execution-mechanism, and verification fields even though the contract had changed globally.

**Why it was wrong:** The step-definition contract is a governing specification for every workflow step. A change to it creates a cross-cutting audit requirement.

**Corrected principle:** When a governing contract changes, audit all affected existing steps from the beginning of the sequence, in chronological workflow order. Do not anchor the audit on the step where the gap was discovered.

**Correct outcome:** Audit Stage 1 first, then Stage 2, and continue sequentially through every defined step before advancing the workflow or implementation.

**Related principles:** global contract propagation; sequence-wide audit; no local patching; specification consistency.

## Step contract as a product-development artifact

The step contract is the bridge between workflow design and product development. It should not be written only for conversation review.

### Development mapping

| Contract information | Product-development output |
|---|---|
| Objective and importance | Product requirement and prioritization rationale |
| Starting state and inputs | Data model, source connections, and entry conditions |
| AI work | Prompts, model calls, extraction/reasoning tasks, and agent tools |
| Execution mechanism | Deterministic services, rules, calculations, validators, renderers, and integrations |
| User work and authority | UX flow, permissions, approvals, and escalation paths |
| Output | Domain objects, artifacts, events, and APIs |
| Evidence and provenance | Storage model, citations, audit trail, and observability |
| Completion and failure states | State machine, gates, error handling, and recovery paths |
| Runtime parameters | Configuration, tenant data, policy, templates, and feature flags |
| Verification | Unit tests, integration tests, model evaluations, fixtures, end-to-end tests, and human review |

### Two execution layers

Each step must distinguish:

1. **Model-mediated work:** interpretation, extraction, relevance assessment, drafting, classification, or reasoning where model behavior is appropriate.
2. **Deterministic product work:** arithmetic, unit/currency conversion, schema validation, state transitions, permission checks, document rendering, storage, event logging, and sending through an integration.
3. **Tool-mediated work:** search, repository access, email transport, file parsing, OCR, external APIs, or other operations performed by an explicitly integrated tool.
4. **Human work:** guidance, confirmation, correction, approval, exception handling, or domain judgment that must remain with an authorized person.
5. **Hybrid work:** a controlled sequence in which one mechanism supplies an input to another, such as model extraction → deterministic validation → human approval → tool execution.

The model may propose a value, parameter, or action for code, a tool, or a human to act on. That does not make the downstream operation model behavior.

### Product-development lifecycle

For each approved step, product development should proceed through:

1. contract decomposition;
2. user-journey and interaction design;
3. data, source, and interface design;
4. model, prompt, and tool design;
5. deterministic implementation;
6. integration and human-approval implementation;
7. evaluation and testing;
8. human review against the step contract;
9. deployment and observability;
10. explicit change control when the contract changes.

The contract must identify which behaviors use each execution mechanism and how they connect. This prevents an LLM from being used for work that should be exact, prevents tools from being treated as reasoning, and prevents a technically functioning system from having a broken user journey.

### E-048 — Narrowing execution assignment to model versus deterministic code

**When identified:** When the product-development principles described execution assignment only as separating model work from deterministic code.

**Incorrect principle applied:**

> The meaningful execution choice in an AI system is whether work is probabilistic or deterministic.

**Incorrect outcome:** External tools, human actions, and hybrid orchestration were not represented as distinct mechanisms.

**Why it was wrong:** Real workflow behavior may involve model inference, code, tools, humans, or controlled sequences of these.

**Corrected principle:** Define behavior first, then assign each behavior to model, deterministic logic, tool, human, or hybrid execution based on accuracy, authority, reversibility, integration, latency, and audit requirements.

**Correct outcome:** Every step records its execution mechanisms, handoffs, and verification method.

**Related principles:** mechanism fit; hybrid orchestration; human-in-the-loop; behavior-to-mechanism traceability.

### E-049 — Omitting product design from the development lifecycle

**When identified:** When product development was described through data, AI, deterministic implementation, testing, and deployment without treating the user journey and UI as first-class design work.

**Incorrect principle applied:**

> Once workflow behavior is specified, product design is implicitly covered by implementation.

**Incorrect outcome:** The system could function technically while failing to give the buyer a coherent, understandable way to complete the workflow.

**Why it was wrong:** Product design translates the step contract into user-visible sequence, information hierarchy, copy, controls, and interaction states.

**Corrected principle:** Treat product design as a first-class development activity between the workflow contract and implementation, and verify it against the user's objective and step states.

**Correct outcome:** The development lifecycle explicitly includes user-journey and interaction design before engineering implementation.

**Related principles:** user-journey traceability; UI as operating surface; design before build; interaction-state completeness.

## Checks before generating the draft RFx

**Status:** Product behavior draft.

Before generating a supplier-facing RFx draft, the AI must check the following inputs and stop or ask for guidance where they are not safe to use.

| Check | What the AI verifies | If the check fails |
|---|---|---|
| Business need | The business outcome and broad need are understood and confirmed | Ask the requester to clarify; do not generate the RFx |
| Applicable policy | The relevant policy version and clauses are identified and confirmed, or a scoped approved contract applies | Show `needs-policy-confirmation` or `needs-resolution` |
| Permission to source | The request is not prohibited and any required prior approval is present | Do not create the RFx; route to clarification, exception, or approval |
| Organizational context | Material contracts, supplier arrangements, constraints, and precedents have been checked or are explicitly permitted to remain open | Ask for resolution when the missing context could change the sourcing path |
| RFx format | An organization-supplied or organization-confirmed template/schema is available | Do not claim arbitrary-template support; route to the template owner or approved format path |
| Field meanings | Required template fields have confirmed or organization-approved definitions | Do not silently map ambiguous fields; request confirmation or preserve them as unresolved |
| Input mapping | User input can be mapped to the required fields with evidence, units, dates, and currencies intact | Show the ambiguous or missing mappings and ask for correction |
| Supplier response design | The requested response format, questionnaire, terms, and attachments are consistent with the approved format and policy | Show the conflict and keep the RFx in review |
| Open issues | Material issues have been resolved or explicitly allowed as controlled unknowns | Keep the RFx from being approved or released |

### Allowed result

The AI may generate a **draft RFx for buyer review** only when the request is permitted, the applicable policy basis is known, the format contract is sufficiently understood, and all material mappings are safe or explicitly governed.

Generation of a draft is not approval to release it. The buyer must still review the scope, line items, questionnaire, terms, response instructions, assumptions, and evidence links.

### Output of the checks

The system shows:

- each check passed, failed, or unresolved;
- the source or evidence behind the result;
- the exact policy clause or format rule used;
- the affected RFx field or decision;
- the responsible actor;
- the action needed to resolve it.

It must not show only a generic “ready” or “not ready” message.

## Source-grounding step before RFx generation

**Status:** Product interaction draft.

### Objective

Give the AI an explicit, inspectable evidence boundary before it drafts the RFx.

### Why it matters

The AI cannot responsibly use “the organization’s policy” or “relevant context” unless the product has established which sources are available, what they contain, why they matter, and whether the authorized procurement user accepts them.

### Procurement-user flow

1. The user connects the organization’s permitted repository or selects a configured source location.
2. The user may add plain-language guidance, such as what type of policy or prior sourcing evidence to look for.
3. The AI scans the available files and subfolders.
4. The AI identifies candidate policy documents and supporting context based on content.
5. The AI shows each candidate with its relevance explanation, source location, date/version, authority signals, and uncertainty.
6. The user can include, exclude, correct, or add sources and guidance.
7. The AI updates its source interpretation and shows what changed.
8. The user confirms the applicable policy source for this RFx.
9. The system creates a grounded-workspace record and passes it to RFx drafting.

### Day-one behavior

Day one supports an existing organizational policy supplied through the connected source location and confirmed by the authorized procurement user. It does not claim to generate enterprise policy from generic model knowledge.

### Grounded-workspace record

The record passed to RFx drafting contains:

- connected source boundary;
- confirmed policy source and version;
- policy excerpts used;
- selected supporting context;
- relevance explanations;
- user guidance and corrections;
- excluded or conflicting sources;
- unresolved questions;
- provenance and approval record;
- capability level used.

### Exit states

| State | Meaning | Next action |
|---|---|---|
| `grounded` | Applicable policy confirmed and supporting sources selected | Draft the RFx |
| `needs-source-selection` | Candidate sources found but applicability is unclear | User selects, excludes, or guides the AI |
| `needs-policy-confirmation` | Policy candidate found but authorized confirmation is missing | Route to authorized procurement user |
| `source-conflict` | Sources or user guidance disagree | Show conflict and request resolution |
| `no-policy-day-one` | No confirmed organizational policy is available | Explain the day-one boundary and route to a human-defined policy path |
| `no-relevant-context` | No supporting context was found | Proceed only if policy and Stage 1 data permit; record that no context was found |

### RFx-generation handoff

RFx drafting may begin only when the state is `grounded`, or when the confirmed policy explicitly permits drafting with no additional context. The draft must cite the grounded-workspace record so the buyer can see which evidence shaped each important RFx element.

### Objective

Decide whether the business need is sufficiently understood to close Stage 1, without requiring the product designer to know a client's procurement policy and without forcing the requester to provide quote-ready detail prematurely.

### Invariant product behavior

Regardless of organization or policy source, the system must:

1. capture the requester's description of the business outcome and broad need;
2. identify ambiguities and missing information;
3. distinguish ambiguities that affect what is being sourced from details needed later for quoteability;
4. show the evidence and policy basis used for each gate decision;
5. preserve unresolved items with owner, impact, and next resolution point;
6. prevent silent progression when the applicable rule is unavailable or unapproved; and
7. allow an authorized procurement user to approve, reject, or override a proposed policy decision.

### Runtime policy states

| Runtime state | Available evidence | Product behavior | Stage 1 result |
|---|---|---|---|
| `policy-confirmed` | Organizational policy found and confirmed by authorized procurement user | Apply the policy and show the relevant rule | Evaluate normally |
| `policy-draft-from-history` | No policy document; relevant past RFQs and user guidance available | Construct a draft, show source files and assumptions, request approval | `needs-approval` until approved |
| `policy-draft-from-model` | No policy and no usable past RFQs | Day-one behavior: do not generate a production policy; show that this capability is not available and route to an authorized human-defined policy path. Future behavior: an explicitly experimental, separately validated extension may generate a proposal for approval | `undetermined` |
| `policy-contradicted` | Sources disagree or the user disputes the extracted rule | Show the conflict and stop policy-dependent evaluation | `needs-resolution` |
| `policy-unavailable` | No usable source and no approved proposal | Explain why the gate cannot be evaluated | `undetermined` |
| `policy-approved-fallback` | Historical-RFQ-derived draft explicitly approved by authorized procurement user | Apply the approved draft and retain provenance; available only when the validated historical-evidence capability is enabled | Evaluate normally |

### Policy-independent evaluation

The system may still evaluate whether the request contains an understandable business outcome and broad need. It may identify and display potential issues. It must not convert those observations into an organization-specific blocking decision unless an applicable policy is confirmed or an inferred/generated policy is approved.

### Output contract

Every Stage 1 evaluation returns:

- `stage_status`: `complete`, `needs-clarification`, `needs-approval`, `needs-resolution`, or `undetermined`;
- `business_need_summary`;
- `evidence_used`;
- `policy_basis`;
- `assumptions`;
- `open_items`;
- `blocking_reason`, when applicable;
- `required_actor` for the next action;
- `next_action`;
- `approval_record`, when a fallback policy is used.

### Prototype configuration

The prototype may ship with an example policy configuration solely to demonstrate the day-one confirmed-policy interaction. It must be labelled as demo policy, keep the policy schema separate from the gate logic, and show the same approval and provenance states that a real client would use.

The prototype must not simulate the future model-training capabilities as if they are already production-ready. It may show them as clearly labelled roadmap states or disabled paths.

This is the reusable product design. The actual threshold values for a client are runtime policy parameters, not assumptions embedded in the workflow.

### Capability boundary for implementation

| Capability | Day-one product status | Required evidence or validation |
|---|---|---|
| Read and apply an existing organizational policy | Supported | Policy supplied and confirmed by authorized procurement user |
| Accept user guidance alongside policy evidence | Supported | Guidance recorded with provenance and approval state |
| Draft policy from relevant historical RFQs | Future extension | Custom model, high-quality training set, evaluation, and enterprise validation |
| Draft policy with no historical RFQs | Later extension | Separate validation, stronger guardrails, and explicit enterprise approval |
| Use generic model knowledge as enterprise policy | Not supported | Must never be presented as a production fallback |

### E-020 — Treating generic model knowledge as a production policy fallback

**When identified:** When the policy-resolution path presented model knowledge as the final fallback after policy documents and past RFQs.

**Incorrect principle applied:**

> If a model can produce a plausible policy and a user can approve it, it is an acceptable production fallback.

**Incorrect outcome:** The design implied that a generic model could generate enterprise procurement policy in the absence of organizational evidence, creating a serious risk of unsupported rules and slop for leading enterprise clients.

**Why it was wrong:** Approval does not compensate for weak provenance, insufficient training quality, lack of domain validation, or an unproven model capability. Production readiness is a capability and evaluation question, not only a human-approval question.

**Corrected principle:** Separate capability maturity from theoretical fallback coverage. Day-one product behavior should support confirmed organizational policy. Policy generation from historical RFQs is a validated future extension requiring a high-quality custom model and evaluation. Generation without historical evidence is a later, separately validated extension—not a default production fallback.

**Correct outcome:** The prototype and product specification must distinguish Level 1 day-one capability from Level 2 and Level 3 extensions. If no policy or historical evidence exists, the product reports the capability boundary and routes to an explicitly human-defined policy path rather than generating enterprise policy by default.

**Related principles:** production evidence threshold; capability maturity; provenance over plausibility; no generic-model policy invention; enterprise guardrails.

### E-036 — Hiding the core context-relevance reasoning

**When identified:** When Stage 2 said that the AI would identify decisions affected by context without defining how it generates those questions or showing that context can clarify ambiguous business language.

**Incorrect principle applied:**

> Relevance can be represented as an internal AI step without making the evidence questions and feedback loop explicit.

**Incorrect outcome:** The most important reasoning in Stage 2 was hidden. The design did not show how the AI knows what to search for, how context resolves ambiguity, or how clarified context updates the business need.

**Why it was wrong:** Relevance is not a generic retrieval operation. It is a hypothesis-driven process tied to ambiguous language, missing qualifiers, stage decisions, policy conditions, and template semantics.

**Corrected principle:** Make relevance reasoning explicit at the level of evidence questions. Context retrieval must support both interpretation of the current business need and decisions in later workflow stages, with a controlled feedback loop rather than a one-way handoff.

**Correct outcome:** The AI identifies ambiguity or decision risk, asks what evidence would resolve it, searches content, explains the result, and returns to the requester when the business-need interpretation changes.

**Related principles:** evidence-question generation; context-to-need feedback; hypothesis-driven retrieval; explicit relevance reasoning.

### Operational definitions for Stage 2 triggers

#### Ambiguous language

Language is ambiguous when the request supports two or more materially different interpretations in the current organization or sourcing situation.

Examples:

- “standard specification” could refer to two active versions;
- “usual suppliers” could mean incumbents or the approved supplier list;
- “regular deliveries” could mean weekly, monthly, or seasonal delivery;
- “renew the packaging supply” could refer to one site or several sites.

The AI should flag ambiguity only when the interpretations could change the scope, supplier pool, response requirements, timing, evaluation, or approval path. Mere wording variation is not enough.

#### Missing qualifier

A qualifier is a detail that narrows or conditions a statement. It is missing when its absence prevents the AI from selecting between materially different interpretations or evaluating a required rule.

Examples:

- quantity without period or location;
- “delivery” without destination or required date;
- “approved supplier” without the relevant category or business unit;
- “compliant” without the applicable compliance regime;
- “renewal” without the contract or incumbent being referenced.

The AI should not ask for every possible detail. It should ask for a missing qualifier only when it affects the current decision or a policy/template requirement.

#### Sourcing decision

A sourcing decision is a choice the buyer, procurement team, or supplier process must make that can change the path or outcome of the sourcing event.

Examples:

- whether an existing contract means a new RFx is needed;
- which suppliers may be invited;
- whether the requirement needs a technical questionnaire;
- whether a site or timing constraint changes supplier eligibility;
- whether an approval or exception is required;
- how supplier responses will be compared.

The AI identifies a sourcing decision by linking it to a workflow action, responsible actor, policy clause, template requirement, or evaluation outcome.

#### Detection rule

For each phrase, fact, or context item, the AI must test:

1. Are there multiple plausible interpretations or outcomes?
2. Would the difference change the current workflow decision or a required RFx field?
3. Is there evidence that can distinguish the alternatives?
4. Is clarification needed now, or can the issue wait for a later stage?

Only when the answer to the first two questions is yes should the AI create a Stage 2 evidence question. The resulting question must name the phrase, alternatives, affected decision, evidence sought, and required actor.

### E-037 — Using undefined trigger terms in the context workflow

**When identified:** When Stage 2 referred to “ambiguous language,” “missing qualifiers,” and “sourcing decisions” without defining how the AI recognizes them or decides whether they matter.

**Incorrect principle applied:**

> Familiar domain terms can be used as self-explanatory reasoning instructions.

**Incorrect outcome:** The user could not tell what the AI would flag, what it would ignore, or why a context search would be initiated.

**Why it was wrong:** These terms determine the core retrieval behavior. Without operational definitions and an impact test, the system risks both irrelevant searches and missed ambiguity.

**Corrected principle:** Every trigger for agent action must have an operational definition, an impact threshold, an evidence question, and a timing rule.

**Correct outcome:** The AI flags only ambiguity or missing information that could change the current sourcing decision or a required policy/template field, and explains the exact trigger and consequence.

**Related principles:** operational definitions; impact-based escalation; precision over exhaustive questioning; trigger-to-action traceability.

## Stage 3 — Make the requirement quoteable

**Status:** Historical internal capability; superseded as a separate user-facing stage by the approved Stage 1 contract.

### Objective

Turn the clarified business need and relevant organizational context into a requirement that suitable suppliers can understand and answer in a comparable way.

### Why this matters

A business need can be clear to the buyer but still be too vague for suppliers to quote. Suppliers need consistent information about what is being requested, how much, where, when, under what conditions, and how their responses will be evaluated.

### Inputs

Stage 3 uses:

- confirmed business-need summary;
- clarified terms and boundaries from Stage 2;
- stage-relevant organizational context;
- applicable policy clauses;
- confirmed RFx field contract and format;
- user guidance and preferences;
- approved or controlled unknowns;
- required buyer and supplier roles.

### Requirement structure

The AI prepares:

- purpose and scope;
- in-scope and out-of-scope boundaries;
- line items or work packages;
- specifications or service outcomes;
- quantities, units, currencies, and assumptions;
- delivery locations and timing;
- quality, compliance, technical, and operational requirements;
- supplier questionnaire;
- commercial response fields;
- terms, conditions, and required declarations;
- requested attachments or evidence;
- response deadline and submission instructions;
- evaluation dimensions and weighting where authorized;
- unresolved items requiring buyer action.

### Quoteability checks

| Check | Good outcome | Failure behavior |
|---|---|---|
| Scope | Supplier can tell what is included and excluded | Ask the buyer to resolve the boundary |
| Line items | Each item has a meaningful description and applicable unit or work package | Show missing or ambiguous fields |
| Quantity and demand | Quantity, frequency, duration, or permitted estimate is clear | Ask for clarification or record an approved assumption |
| Timing and location | Delivery/service window and location are stated where material | Block when supplier feasibility could change |
| Requirements | Mandatory outcomes are separated from preferences | Ask the buyer to classify ambiguous requirements |
| Supplier response | Suppliers are asked for comparable information | Add or correct response fields |
| Evaluation | Response information maps to authorized evaluation dimensions | Surface missing or unauthorized criteria |
| Terms | Required policy and commercial terms are included | Block when a required term is missing or conflicts |
| Format | The RFx conforms to the confirmed field contract and output format | Route the conflict for correction or confirmation |

### Handling unknowns

The AI must not invent quoteable details. For each missing value it must classify it as:

- required before supplier invitation;
- an approved assumption shown to suppliers;
- a supplier question intended to elicit the value;
- a controlled unknown permitted by policy; or
- not applicable.

The classification must show its policy, context, or user-guidance basis.

### Stage 3 output

Stage 3 produces a structured draft RFx package containing:

- buyer-facing RFx content;
- supplier response structure;
- questionnaire and terms;
- field-level provenance;
- assumptions and open issues;
- validation results;
- version and format metadata.

This is the draft RFx the buyer reviews. It is not released to suppliers until the buyer approval step is complete.

### Stage 3 completion

Stage 3 is complete when:

- the requirement is understandable and quoteable;
- mandatory fields and terms are present;
- supplier responses can be compared on common dimensions;
- unresolved items are resolved, explicitly permitted, or converted into supplier questions;
- policy and format checks pass; and
- the buyer has a reviewable draft RFx package.

## Stage 2 — Invite suppliers

**Status:** Approved after re-audit against the revised four-stage map.

### Objective

Identify suitable suppliers, send them the approved RFx through the chosen channel, and create a reliable record of what was sent, to whom, when, and under which version.

### Why this matters

An accurate RFx can still fail if it is sent to unsuitable suppliers, stale addresses, the wrong contact, or without the context and response instructions needed for a fair response.

### Inputs

Stage 2 uses:

- approved RFx and version;
- applicable supplier-eligibility rules;
- supplier records and contact details;
- approved supplier lists or relevant market evidence;
- prior supplier performance or relationship context where applicable;
- buyer guidance on supplier selection;
- chosen outbound channel;
- approved email or message content and attachments.

### Supplier selection

The AI may propose suppliers using confirmed evidence such as:

- category and capability fit;
- geography and service coverage;
- approved-supplier status;
- prior performance;
- capacity or operating constraints;
- conflict, risk, or exclusion records;
- buyer-provided recommendations.

The AI must show why each supplier was proposed. It must not infer suitability solely from a company name or assume that a historical supplier remains eligible.

The buyer can add, remove, or correct suppliers and provide guidance. If policy requires a minimum number, approved-list restriction, conflict check, or additional approval, the system must apply it before release.

### Supplier contact verification

Before sending, the system must establish:

- supplier identity;
- recipient name or role where required;
- email address or channel identifier;
- source of the contact detail;
- date of verification;
- whether the contact is authorized for RFx communication;
- duplicate or conflicting contacts.

If a contact detail is missing, stale, conflicting, or inferred, the system must request correction or confirmation. It must not invent an email address.

### Channel selection

The buyer chooses an approved outbound channel, such as email or an organization-configured supplier portal. The system records:

- channel;
- sender identity;
- reply destination;
- attachments or links;
- delivery and authentication status;
- message and RFx versions.

The prototype may stub transport plumbing, but the message generation, recipient resolution, release rules, and event record must be real.

### Release sequence

1. Show the approved RFx version and proposed supplier list.
2. Show supplier-selection evidence and any exclusions or risks.
3. Verify recipients and reply path.
4. Let the buyer add guidance or edit the message within allowed controls.
5. Check that the RFx is approved and all release-blocking conditions are resolved.
6. Show the final message, attachments, deadline, and response instructions.
7. Require explicit buyer confirmation to send.
8. Send through the chosen channel.
9. Record the release event and delivery status.
10. Open the response-monitoring state so incoming supplier replies can be associated with this RFx.

### Release outcomes

| Outcome | Product behavior |
|---|---|
| Supplier and contact confirmed | Include in the release set |
| Supplier proposed but eligibility unclear | Show evidence and request buyer decision or policy resolution |
| Contact missing or conflicting | Keep supplier unsent until corrected |
| RFx not approved | Block sending and return to buyer review |
| Policy or channel restriction | Explain the restriction and route for approval or correction |
| Send confirmed | Send and record message, recipient, version, and timestamp |
| Delivery failure | Show failure, preserve the event, and provide a correction/resend path |

Delivery is tracked per supplier as `delivery-pending`, `delivered`, `delivery-failed`, or `bounced`. These statuses are separate from `send-confirmed` and may change after the send event.

### Stage 2 output

Stage 2 produces:

- released RFx version;
- supplier and recipient list;
- supplier-selection rationale;
- outbound message and attachments;
- channel and sender record;
- delivery events;
- reply destination and correlation identifier;
- deadline and response-monitoring configuration.

The release record is the basis for associating later replies with the correct RFx, supplier, and sourcing event.

### Stage 2 audit

**Result:** Passed after approved corrections.

The stale Stage 4 references were removed, send and delivery are represented as separate events/statuses, and supplier/contact retrieval now requires RFx-grounded relevance, provenance, verification, and buyer resolution of ambiguity.

### Approved send and delivery separation

- `send-confirmed` records that the system accepted the outbound message for a specific supplier.
- Delivery is tracked separately per supplier as `delivery-pending`, `delivered`, `delivery-failed`, or `bounced`.
- The stage must not claim delivery merely because sending was accepted.
- The buyer sees the send event and current delivery status for every supplier.
- A delivery failure preserves the send record and creates a correction/resend path.
- The invitation stage completes only when every intended supplier has a recorded send outcome; unresolved delivery failures remain visible for buyer action.

### Approved supplier/contact retrieval relevance

- Retrieval context comes from the approved RFx: category, line items, required capabilities, geography, timing, eligibility requirements, and supplier-contact role.
- Search may use supplier records, approved lists, prior sourcing records, and other permitted sources.
- Filenames, folder names, or company-name matches are not proof of relevance or identity.
- Each proposed supplier or contact shows matching evidence, source file or system, source version/date, contact role, verification status, and conflicts or missing facts.
- The AI proposes candidates; it does not silently decide suitability or invent contacts.
- The buyer confirms, removes, adds, or corrects suppliers and recipients.
- If relevance or contact identity remains ambiguous, the supplier remains unsent pending resolution.

## Stage 5 step card — Receive and understand supplier responses

**Status:** Historical internal capability; superseded as a separate user-facing stage by the approved Stage 3 — Evaluate responses contract.

### Objective

Collect supplier replies in whatever form they arrive, associate them with the correct sourcing event, and convert them into structured, traceable response records without losing the original evidence.

### Importance

Suppliers may reply with their own documents, spreadsheets, emails, substitutions, partial answers, or follow-up messages. If those responses are not correctly associated and understood, later comparison may compare the wrong supplier, wrong version, or wrong value.

### Starting state

- an RFx has been approved and released;
- release recipients and response channel are recorded;
- RFx version, line items, questionnaire, terms, deadline, and correlation identifier are known;
- supplier records and verified contacts are available.

### Inputs and authority

| Input | Source/authority |
|---|---|
| Inbound message or file | Chosen response channel |
| Supplier identity | Release record and supplier records |
| RFx association | Correlation identifier, thread, sender, and content evidence |
| RFx field meanings | Confirmed RFx field contract |
| Policy treatment | Applicable policy clauses and authorized guidance |
| Clarifications and corrections | Procurement user, acting as head pilot |

### AI work

1. Receive or discover the inbound response.
2. Preserve the original message and attachments.
3. Associate it with an RFx and supplier using multiple evidence signals.
4. Classify it as a response, clarification, revision, duplicate, notification, unrelated item, or unknown association.
5. Extract text, tables, images, and structured values.
6. Map values to RFx fields and line items.
7. Normalize units, currencies, dates, quantities, lead times, and commercial conditions without changing meaning.
8. Identify missing values, contradictions, substitutions, exclusions, and deviations.
9. Link every material value to its source location.
10. Maintain response versions and identify the active version when evidence supports it.
11. Show uncertainty and request buyer correction where the association or mapping is material and unclear.

### Buyer work

The procurement user can:

- correct supplier or RFx association;
- confirm the active response version;
- correct field mapping or normalization;
- classify an item as relevant or irrelevant;
- add guidance or request clarification;
- inspect original evidence;
- approve the response record for downstream use.

The buyer is not asked to recreate the supplier response in the organization's template.

## Stage 6 step card — Compare offers fairly

**Status:** Historical source material; superseded as a separate user-facing stage by the approved Stage 3 — Evaluate responses contract.

### Stage 6 review-spine audit

**Result:** Conditional pass; Stage 6 remains draft for approval.

#### Finding 1 — Response-understanding material is duplicated inside Stage 6

The comparison step contains a second output, completion section, failure-state list, and transition that describe understanding supplier responses. That content belongs to Stage 5 and creates competing contracts for the same behavior.

#### Finding 2 — Stage 6 has multiple competing completion and transition definitions

The comparison card defines a comparison output and completion, then later defines a response-record output and a transition to comparison open. A workflow step must have one user-facing outcome and one next transition; internal preparation may be represented as a prerequisite state, not as a second user-facing contract.

#### Finding 3 — AI work includes deterministic calculations without an execution boundary

“Calculate totals, scenarios, and derived values” is listed under AI work, but numeric calculation, formula execution, and validation require an explicit deterministic mechanism. The AI may propose scenarios or explain results; it must not be the unverified calculator.

#### Finding 4 — Buyer journey is underspecified

The buyer-work list names possible actions but does not define the order in which the buyer sees the comparison, inspects evidence, resolves issues, authorizes criteria, and reaches a comparison outcome.

#### Finding 5 — Evaluation-criteria authority is unresolved

The contract says the buyer may apply or change evaluation criteria, while the input table says criteria and weights come from policy or an authorized procurement decision. The contract must distinguish proposing criteria, selecting among authorized criteria, and changing an approved evaluation basis.

#### Required correction path

1. Remove duplicated supplier-response-understanding content from Stage 6 and retain it under Stage 5.
2. Keep one Stage 6 outcome and transition.
3. Separate AI proposal/reasoning from deterministic calculation and validation.
4. Define the buyer's comparison journey and screen decisions.
5. Define authority for evaluation criteria and changes.

### Objective

Compare supplier responses on a common, transparent basis while preserving important differences, limitations, and supporting evidence.

### Importance

Suppliers answer in different formats and may use different units, currencies, assumptions, scopes, and commercial terms. A superficial comparison can make one offer appear cheaper or stronger simply because the data was normalized incorrectly or important differences were hidden.

### Starting state

- supplier response records are understood;
- original messages and attachments are preserved;
- RFx lines, questionnaire, terms, and response requirements are known;
- response versions and supplier associations are recorded;
- policy rules governing evaluation and comparison are available or their status is explicit.

### Inputs and authority

| Input | Source/authority |
|---|---|
| Requested lines and units | Approved RFx |
| Supplier values | Supplier response evidence |
| Currency and normalization rules | Applicable policy, RFx terms, or authorized buyer guidance |
| Evaluation criteria and weights | Applicable policy and authorized procurement decision |
| Supplier deviations and assumptions | Supplier response and buyer confirmation where needed |
| Missing or conflicting values | Response evidence and buyer resolution |
| Comparison permission | Applicable policy clause or authorized procurement decision |

### AI work

1. Align supplier responses to the same RFx lines and questionnaire questions.
2. Preserve the supplier's original value alongside every normalized value.
3. Normalize units, currencies, quantities, time periods, and commercial bases only when the governing rule and conversion basis are known.
4. Separate requested values from supplier offers, substitutions, exclusions, and assumptions.
5. Identify missing, non-comparable, conditional, and conflicting values.
6. Apply authorized evaluation criteria and weights.
7. Keep questionnaire answers and attached evidence alongside the numeric comparison.
8. Calculate totals, scenarios, and derived values with visible formulas and assumptions.
9. Show sensitivity where a conversion, assumption, or unresolved value could change the result.
10. Link every comparison value and conclusion to its source evidence.

### Buyer work

The procurement user can:

- inspect original supplier evidence;
- correct a mapping or normalization;
- confirm a conversion basis or assumption;
- decide how to treat a supplier deviation where policy allows discretion;
- request supplier clarification;
- apply or change authorized evaluation criteria;
- filter, compare, export, and annotate the comparison;
- record the rationale for proceeding with visible exceptions when authorized.

The system must not ask the buyer to accept a hidden normalization or unexplained score.

### Comparison output

The comparison workspace contains:

- common RFx lines and supplier columns;
- original and normalized values;
- units, currencies, and conversion basis;
- totals and calculation formulas;
- questionnaire answers;
- supplier documents and evidence links;
- deviations, assumptions, exclusions, and missing values;
- evaluation criteria and scores;
- policy basis for inclusion, exclusion, or exceptions;
- confidence and unresolved issues;
- exportable comparison record.

### Fairness conditions

The product defines fairness as transparent comparability, not forced sameness. It must make differences visible when suppliers offered different scope, terms, lead times, quality, or assumptions. It must not erase a material difference merely to fit a common table.

Whether a response is excluded, scored, or compared with an exception remains policy-dependent.

### Completion evidence

Comparison is complete when:

- all included supplier records are traceable to the correct RFx and active response version;
- common-line mapping is visible;
- all transformations have a known basis and formula;
- missing, conflicting, and non-comparable values are visible;
- questionnaire answers and documents are available alongside the relevant lines;
- authorized evaluation criteria are applied transparently;
- policy-dependent inclusion and exception decisions are recorded;
- the buyer has a comparison record suitable for decision-making.

### Failure states

- `comparison-not-authorized`;
- `needs-response-resolution`;
- `needs-normalization-basis`;
- `not-comparable`;
- `missing-evidence`;
- `conflicting-evidence`;
- `policy-undetermined`;
- `comparison-with-approved-exceptions`;
- `comparison-complete`.

### Next transition

The next proposed transition is from **comparison complete** to **supplier decision and award rationale**. The system must preserve the comparison evidence and policy basis so the eventual award can be defended.

### Output

For each supplier, the system produces:

- original messages and attachments;
- RFx and supplier association;
- active response version;
- normalized line-item values;
- questionnaire answers;
- commercial terms and conditions;
- substitutions and deviations;
- missing and conflicting values;
- source-level provenance;
- extraction confidence;
- buyer corrections;
- status for downstream comparison evaluation.

### Completion evidence

The response record is understood when:

- its RFx and supplier association is confirmed or explicitly unresolved;
- its active version is identified or explicitly unresolved;
- material values are mapped or marked missing, conflicting, deviating, or unmapped;
- original evidence is preserved;
- normalization is transparent;
- irrelevant material is excluded from the response record with a reason;
- buyer corrections are recorded;
- policy-dependent treatment is not silently assumed.

This does not mean every supplier response is complete or comparable. It means the system has faithfully represented what each supplier did and did not provide.

### Failure states

- `unknown-association`;
- `needs-supplier-confirmation`;
- `needs-rfx-confirmation`;
- `needs-version-resolution`;
- `ambiguous-mapping`;
- `missing-value`;
- `conflicting-value`;
- `supplier-deviation`;
- `irrelevant-item`;
- `unmapped-content`;
- `extraction-failure`;
- `understood-with-limitations`;
- `ready-for-policy-evaluation`.

### Next transition

The next proposed transition is from **supplier responses understood** to **comparison open**. Whether incomplete, late, conflicting, or non-comparable responses may be included is determined by the applicable policy clause or authorized procurement decision. The product only supplies the evidence and data-integrity status.

## Stage 5 — Receive and understand supplier responses

**Status:** Historical internal capability; superseded as a separate user-facing stage by the approved Stage 3 — Evaluate responses contract.

### Objective

Collect supplier replies in whatever form they arrive, associate them with the correct sourcing event, and convert them into structured, reviewable response records without losing the supplier's original evidence.

### Why this matters

Suppliers may reply by email, attachment, spreadsheet, PDF, document, portal export, or an unstructured message. They may use their own format, refer to an earlier message, omit fields, include substitutions, or send material that is unrelated to the RFx. The buyer needs one reliable record per supplier before responses can be compared.

### Intake sources

The system monitors or receives responses through the channel selected at release. It uses:

- RFx identifier and correlation token;
- sender identity and verified supplier contact;
- reply-to address or channel identity;
- thread and message metadata;
- attachment metadata and content;
- supplier records;
- release record and RFx version;
- buyer guidance.

An email address or filename alone is not sufficient to associate a response with an RFx.

### Response association

The AI checks, in order:

1. explicit RFx identifier or correlation token;
2. reply thread and recipient relationship;
3. sender identity against the released supplier/contact record;
4. supplier name and references in the message or attachment;
5. RFx subject, line-item, deadline, and requirement references;
6. content similarity to the released RFx.

The system shows the evidence supporting the association. If multiple RFx events or suppliers are plausible, it does not silently attach the response.

### Response classification

Every inbound item is classified as:

- response to this RFx;
- response to another RFx;
- supplier clarification or question;
- revised response or replacement;
- duplicate;
- out-of-office or delivery notification;
- unrelated message;
- unknown association.

Irrelevant messages and files are retained with their classification and reason, but they do not populate the supplier response record.

### Extraction sequence

For a response associated with this RFx, the AI:

1. preserves the original message and files;
2. extracts text, tables, images, and structured values;
3. identifies the supplier's own terminology and document structure;
4. maps response content to RFx fields and line items;
5. normalizes units, currencies, dates, quantities, lead times, and commercial conditions;
6. identifies substitutions, exclusions, assumptions, and deviations;
7. extracts questionnaire answers and attached evidence;
8. links every material value to its source location;
9. identifies missing, contradictory, or ambiguous values; and
10. produces a supplier response record for buyer review.

The AI must not fill a missing supplier value from the buyer's RFx or from another supplier's response. It must mark the value as missing or inferred and preserve the distinction.

### Response mapping states

| State | Meaning | Product behavior |
|---|---|---|
| `mapped-confirmed` | Supplier value maps clearly to an RFx field | Store normalized value with source evidence |
| `mapped-inferred` | Mapping is plausible but not certain | Show the proposed mapping and request buyer review |
| `missing` | Required supplier value was not provided | Mark missing; do not invent a value |
| `conflicting` | Message, attachment, or revised response contains inconsistent values | Show the conflict and retain both sources |
| `deviation` | Supplier proposes a substitution, exception, or alternative | Show the deviation separately from the requested value |
| `unmapped` | Content cannot be safely linked to an RFx field | Preserve it for review |
| `irrelevant` | Item does not belong to this RFx response | Exclude from comparison and explain why |

### Revised responses

If a supplier sends a revised response, the system must:

- retain the original response;
- identify the replacement or supersession evidence;
- compare changed fields;
- preserve timestamps and message order;
- show which version is currently active;
- request buyer confirmation when supersession is unclear.

### Buyer review

The buyer can correct supplier association, field mapping, normalization, response version, or relevance classification. Corrections are recorded and revalidated without altering the original supplier evidence.

### Stage 5 output

The stage produces, for each supplier:

- original messages and attachments;
- verified association to the RFx and supplier;
- active response version;
- normalized line-item responses;
- questionnaire answers;
- terms and commercial conditions;
- substitutions and deviations;
- missing and conflicting values;
- source-level provenance;
- extraction confidence;
- buyer corrections;
- readiness state for comparison.

The next stage may compare only records whose association and material extraction state are clear. Unresolved records remain visible and are not silently treated as complete responses.

### Comparison-readiness gate

The product must evaluate two different things:

1. **Data integrity invariants:** the system must preserve source evidence, identify supplier/RFx association, resolve response versions, map values transparently, normalize without changing meaning, and never invent missing values.
2. **Permission to compare:** the applicable policy clause or authorized procurement decision determines whether incomplete, conflicting, late, or non-comparable responses may be included, excluded, or compared with exceptions.

The product must not label a condition as a hard blocker or an allowed exception from its own judgment. It must retrieve and show the relevant policy basis, including stage, action, version, applicability, and approval authority.

All suppliers do not necessarily need complete responses before comparison can open. Whether partial responses are permitted, and under what conditions, is policy-dependent.

### Readiness states

| State | Meaning | Comparison behavior |
|---|---|---|
| `ready` | Data integrity checks pass and applicable policy permits comparison | Open comparison |
| `ready-with-exceptions` | Data limitations are visible and applicable policy explicitly permits comparison with exceptions | Open comparison with policy-linked warnings |
| `blocked` | Applicable policy or authorized decision prohibits comparison, or data integrity is insufficient | Resolve before comparison |
| `awaiting-cutoff` | Responses may still arrive or the buyer has not chosen to proceed | Keep intake open |
| `policy-undetermined` | Applicable policy does not establish whether evaluation may begin | Route for authorized decision |

The buyer may choose to compare with exceptions only when policy permits or the authorized procurement user explicitly records the decision. That choice does not erase the exceptions. If neither policy nor authority resolves the question, the state remains `policy-undetermined`.

### E-038 — Leaving comparison readiness underspecified

**When identified:** When Stage 5 said comparison could begin when association and material extraction were clear, without defining the complete set of conditions or how incomplete but usable responses should be handled.

**Incorrect principle applied:**

> A broad statement about extraction clarity is sufficient to determine readiness for comparison.

**Incorrect outcome:** The system had no explicit gate for active response version, normalization, response cutoff, provenance, supplier deviations, or partial responses.

**Why it was wrong:** Comparison readiness is a distinct decision requiring a multi-condition evidence check. Real supplier responses are often incomplete, so the gate must distinguish safe comparison with visible exceptions from unsafe comparison.

**Corrected principle:** Define readiness as a condition set with explicit states, blockers, exceptions, and authority to proceed. Missing data may remain visible, but unresolved identity, material mapping, normalization, provenance, or policy authority cannot be silently ignored.

**Correct outcome:** The system returns `ready`, `ready-with-exceptions`, `blocked`, `awaiting-cutoff`, or `policy-undetermined`, with the exact unresolved conditions and responsible next action.

**Related principles:** comparison integrity; exception visibility; multi-condition gates; partial-response handling; no silent completeness.

### E-039 — Inventing universal blocker and exception classifications

**When identified:** When comparison-readiness criteria classified incomplete or non-comparable supplier responses as blockers or exceptions without grounding that classification in the applicable policy section.

**Incorrect principle applied:**

> If a condition seems important for fair comparison, the product may decide whether it blocks comparison or is an allowed exception.

**Incorrect outcome:** The product could impose its own procurement governance instead of applying the organization's stage-specific policy.

**Why it was wrong:** Policy determines whether partial, late, conflicting, or non-comparable responses may be evaluated. The product can enforce data integrity, but it cannot invent the organization's permission to proceed.

**Corrected principle:** Separate universal data-integrity safeguards from policy-dependent progression permissions. Retrieve the applicable policy clause and let policy or an authorized procurement decision determine blocker, exception, or permission status.

**Correct outcome:** The system shows the evidence and policy basis for comparison readiness. If the basis is missing or unclear, it returns `policy-undetermined` rather than choosing blocker or exception itself.

**Related principles:** policy-driven gates; integrity versus permission; stage-specific authority; no invented governance.

### E-040 — Confusing the current workflow state with the proposed next action

**When identified:** When the comparison-policy task said to identify the “current action: comparing supplier responses” and then determine whether comparison may proceed.

**Incorrect principle applied:**

> The action whose permission is being evaluated can be described as though it is already occurring.

**Incorrect outcome:** The wording implied that the system had begun comparison before establishing whether policy permitted the transition.

**Why it was wrong:** Workflow state, proposed transition, and authorization are different concepts.

**Corrected principle:** Name these separately:

- **Current workflow state:** supplier responses have been received and understood.
- **Proposed next action:** open the supplier-response comparison.
- **Policy question:** is that transition permitted under the applicable policy and response conditions?

**Correct outcome:** The AI evaluates permission to transition from “responses understood” to “comparison open.” It retrieves the policy clause governing that transition and does not represent comparison as active until the transition is authorized.

**Related principles:** state versus transition; authorization before action; precise workflow language.

### E-041 — Using “permitted” without stating the operational question

**When identified:** When the comparison transition was described as needing to be “permitted” without explaining what that means in workflow terms.

**Incorrect principle applied:**

> A governance term is clear enough without stating the conditions it represents.

**Incorrect outcome:** The user had to ask whether “permitted” meant a generic system decision, a policy requirement, or an approval from a person.

**Why it was wrong:** The phrase concealed the actual question: what must be true, according to the applicable policy, before the workflow may move from responses understood to comparison open?

**Corrected principle:** Translate governance language into a state-transition question with conditions, evidence, authority, and consequence.

**Correct outcome:** The AI must retrieve the applicable policy clause and determine whether its required conditions for opening comparison are satisfied. If the clause requires an approval, the system routes to the authorized person. If no applicable rule can be established, the result is `policy-undetermined`.

**Related principles:** operational governance language; transition conditions; policy evidence; authority-specific approval.

### Policy-clause interpretation for a workflow transition

“Relevant policy clause” means a clause that governs the proposed transition from the current workflow state to the next state. The AI must not assume that a policy document already contains machine-readable conditions.

For each candidate clause, the AI must extract a proposed rule with:

- governed stage and proposed transition;
- applicable actor;
- scope and category;
- triggering event;
- preconditions and required evidence;
- thresholds or time windows, if stated;
- permissions and prohibitions;
- exceptions;
- required approver;
- consequence when a condition is not met;
- effective date/version;
- exact source location and text;
- interpretation uncertainty.

For the comparison example, “conditions” means the requirements stated by the applicable organization policy for opening comparison—not a universal checklist invented by the product. They might include a response deadline, a minimum response rule, a required approval, or handling instructions for late responses, but only if the applicable policy says so.

If the AI cannot reliably extract the rule or applicability, it must show the candidate clause and its proposed interpretation to the authorized procurement user. It must not convert an ambiguous clause into a binding gate.

### E-042 — Treating policy-clause retrieval as if interpretation were already solved

**When identified:** When the comparison transition was described as retrieving a relevant clause and identifying “its conditions” without defining how the AI finds the clause, extracts its rule, or establishes applicability.

**Incorrect principle applied:**

> Retrieval of a policy passage is equivalent to understanding the policy rule it contains.

**Incorrect outcome:** The hardest work—turning policy language into a scoped, stage-specific, evidence-checkable rule—was hidden behind two vague instructions.

**Why it was wrong:** A clause may be ambiguous, conditional, versioned, cross-referenced, or applicable only to a particular actor or category. Text retrieval alone cannot establish permission to transition.

**Corrected principle:** Separate policy retrieval, rule extraction, applicability evaluation, and authorization. Each must preserve source text, proposed interpretation, conditions, uncertainty, and approval status.

**Correct outcome:** The AI retrieves candidate clauses using the proposed transition as the search context, extracts a proposed structured rule, checks scope and applicability, shows the evidence, and routes ambiguous interpretations to the authorized procurement user.

**Related principles:** retrieval versus interpretation; rule extraction; applicability evaluation; clause-level provenance; no policy-text shortcut.

### Candidate-clause retrieval

The AI proposes candidate clauses. It does not decide that a candidate is authoritative merely because it ranked highly.

The retrieval request is built from:

- current workflow state;
- proposed next transition;
- actor taking or approving the action;
- RFx category and scope;
- known spend, timing, location, and supplier facts;
- response conditions being evaluated;
- policy version and effective date;
- user guidance.

The policy source is indexed at section and clause level with metadata such as stage, action, actor, category, effective period, approval authority, and cross-references. Candidate retrieval combines exact terms, synonyms, semantic similarity, metadata filters, and linked-clause expansion. The system shows why each candidate was retrieved.

Candidate retrieval is a recall-oriented step: it should surface plausible clauses for interpretation. Rule extraction and applicability evaluation then determine whether a clause actually governs. If candidates conflict or none can be established as applicable, the system returns `needs-resolution` or `policy-undetermined` rather than selecting a rule silently.

The authorized procurement user or policy owner confirms applicability when the policy text, metadata, or evidence does not resolve it. User guidance can refine the search and challenge the candidate set at any point.

### E-043 — Leaving candidate-clause selection without an explicit basis

**When identified:** When the policy workflow referred to “candidate clauses” without explaining who produces them, what search context determines them, or how candidate retrieval differs from authoritative applicability.

**Incorrect principle applied:**

> A candidate clause can be referenced without specifying the retrieval basis or the authority that confirms it.

**Incorrect outcome:** The design left open whether candidates were selected by filenames, model intuition, similarity alone, or an authorized policy owner.

**Why it was wrong:** Candidate retrieval needs high recall, while applicability needs authority and rule interpretation. Ranking is not authorization.

**Corrected principle:** Separate candidate retrieval from authoritative selection. The system proposes candidates using the current transition and policy metadata; the applicable policy and authorized user determine what governs when ambiguity remains.

**Correct outcome:** The product shows the candidate set, retrieval rationale, extracted rules, conflicts, and approval state. It never silently treats the top-ranked clause as the governing rule.

**Related principles:** recall versus authority; retrieval provenance; ranking is not authorization; candidate-set transparency.

### Applicability evaluation

**Status:** Approved.

For each candidate clause, the AI compares the clause's extracted scope and conditions with the known sourcing situation.

#### Evaluation sequence

1. Confirm the policy version and effective period.
2. Identify the clause's governed stage and action.
3. Identify the actor or approval role named by the clause.
4. Compare category, scope, spend, location, timing, supplier, and other stated qualifiers.
5. Resolve cross-references, amendments, and exceptions.
6. Compare the clause conditions with the evidence in the current sourcing record.
7. Identify missing facts needed to evaluate applicability.
8. Incorporate user guidance and corrections.
9. Return a result with the clause, evidence, interpretation, and confidence.

#### Applicability results

| Result | Meaning | Product behavior |
|---|---|---|
| `applicable` | Clause scope and conditions match the current situation | Use it as a governing rule and show its evidence |
| `not-applicable` | Clause scope or conditions clearly do not match | Record why it was excluded |
| `needs-context` | Applicability depends on a missing organizational fact | Generate a context question and pause the affected decision |
| `needs-interpretation` | Clause language or cross-reference is ambiguous | Show the proposed interpretation and route it for authorized guidance |
| `conflicting` | Two applicable clauses or sources produce different requirements | Show the conflict and route it for resolution |
| `superseded` | Clause is replaced by a later applicable version or amendment | Exclude it and preserve the supersession evidence |
| `policy-undetermined` | No candidate can be established as applicable | Do not use a policy-dependent rule |

#### Applicability record

The AI records:

- candidate clause and exact source location;
- policy identity, version, and effective date;
- extracted scope and conditions;
- current facts used in the comparison;
- missing facts;
- user guidance;
- cross-references and exceptions;
- result and confidence;
- authorized confirmation or unresolved status.

The AI must not promote a candidate to `applicable` merely because it is the highest-ranked result. When applicability depends on facts the system cannot establish, it must ask for those facts or route the issue to the authorized policy owner.

#### Gate behavior

Only an `applicable` clause or an explicitly approved scoped policy contract may govern a workflow transition. `not-applicable` and `superseded` clauses cannot govern. `needs-context`, `needs-interpretation`, `conflicting`, and `policy-undetermined` states remain unresolved for any decision that depends on them.

This evaluation is reusable across all workflow stages. The stage and proposed transition change; the evidence, provenance, and authority discipline remain constant.

## Transition to supplier-response comparison

**Status:** Product behavior draft.

### Current state

Supplier responses have been received and interpreted. Each response has an association, active version, extraction record, field mappings, provenance, and unresolved issues where applicable.

### Proposed next action

Open the supplier-response comparison for the current RFx.

This is a proposed transition, not an action that has already occurred.

### Checks before the transition

#### Universal data-integrity checks

The system must verify that:

- each included response is linked to the correct RFx and supplier;
- revised or duplicate responses have an identified active version;
- material values are mapped to the correct line item or questionnaire field;
- units, currencies, quantities, dates, and commercial bases are preserved or normalized transparently;
- substitutions, exclusions, and deviations are separate from the requested values;
- missing and conflicting values are visible;
- questionnaire answers and attached evidence remain linked;
- no value was invented or copied from another supplier; and
- material values have source-level provenance.

These are product integrity requirements. The product enforces them regardless of client policy.

#### Policy-controlled checks

The system then retrieves and evaluates the applicable policy rules for opening comparison, including any rules concerning:

- response deadline or cutoff;
- minimum or required response conditions;
- late, revised, or incomplete responses;
- required approvals before evaluation;
- supplier exclusions or qualification status;
- treatment of non-comparable offers;
- exceptions and escalation rights.

The product does not decide whether these conditions are blockers or exceptions. That result comes from the applicable policy clause or an authorized procurement decision.

### Transition results

| Result | Meaning | Product behavior |
|---|---|---|
| `comparison-open` | Integrity checks pass and applicable policy permits comparison | Open comparison with evidence and policy links |
| `comparison-open-with-policy-exceptions` | Policy explicitly permits comparison with identified exceptions | Open comparison; show each exception and its policy basis |
| `needs-data-resolution` | Supplier association, version, mapping, or provenance is insufficient | Keep comparison closed; resolve the data issue |
| `needs-policy-resolution` | Applicability or policy treatment is unclear | Keep comparison closed; route to authorized resolution |
| `needs-approval` | Policy requires an approval that is not recorded | Keep comparison closed until approval |
| `awaiting-cutoff` | The response period is still open or the buyer has not chosen to proceed | Keep response intake open |
| `comparison-blocked-by-policy` | Applicable policy prohibits the transition | Do not open comparison; show the rule and next route |

### Buyer-visible decision

Before comparison opens, the buyer sees:

- response count and supplier identities;
- active response versions;
- data-integrity issues;
- missing, conflicting, and non-comparable values;
- applicable policy clauses;
- approvals and exceptions;
- the proposed transition result;
- the next action and responsible actor.

Opening comparison does not erase exceptions or make incomplete responses complete. It only permits the comparison workspace to be opened under the recorded policy basis.

| 455 | Runtime demo asset set created | Created a scenario-specific, inspectable runtime set for RFx-2026-014: organization policy, prior RFx schedule and template, technical specification, prior invitation correspondence, supplier contact evidence, five varied supplier responses, real Office attachments, a low-quality-style image response, a runtime manifest, and a separate hidden evaluation set. Runtime inputs contain no expected findings or treatment list. |
| 456 | Runtime demo asset validation passed | Confirmed all 14 manifest paths exist; the five suppliers and 30-line prior schedule are present; `.xlsx` and `.docx` packages have valid roots and pass `unzip -t`; JSON manifest and hidden evaluation files parse; build artifacts and duplicate raw files were removed. Native SVG is retained for the image response because this environment cannot render a raster image; no unproduced PDF is claimed. |

### E-127 — Executing demo-asset generation before asset contracts were approved

**When identified:** When the user approved the asset-pack objective and boundary after the assistant had already created a provisional runtime asset set.

**Incorrect principle applied:** Treat an instruction to proceed as execution authority when the requested work is a substantial new artifact set whose objective, boundaries, asset families, generation rules, and validation contract have not yet been aligned.

**Incorrect outcome:** Files were created before the asset-pack decisions and contracts were reviewed. This repeated the earlier failure mode of jumping from broad product contracts directly into implementation and made the generated files appear more authoritative than they were.

**Why it was wrong:** Asset generation is product-development work. The assets encode scenario assumptions, coverage decisions, provenance relationships, runtime boundaries, and evaluation separation. Those decisions must be explicit and approved before file creation.

**Corrected principle:** For every substantial asset set, align and approve the asset objective, boundary, asset families, per-family contracts, generation method, runtime/evaluation separation, and completeness validation before creating any file. “Proceed” means execute only after that contract sequence is complete.

**Correct outcome:** The existing files remain provisional source material only. No new asset work proceeds until the asset-family boundary and subsequent contracts are approved; the ledger records this failure before the workflow continues.

### E-128 — Leaving a stale validation count in the decision ledger

**When identified:** During the post-correction audit, after the runtime manifest gained an attachment path and the validation count changed from 13 to 14.

**Incorrect principle applied:** Treat a previously recorded validation statement as stable after the underlying asset manifest changes.

**Incorrect outcome:** Decision 456 reported 13 manifest paths even though the final manifest contained 14.

**Why it was wrong:** Validation claims are versioned facts. Any asset or manifest change requires re-running the affected validation and updating the recorded result.

**Corrected principle:** Revalidate and reconcile every dependent ledger claim after an approved or incidental change to the artifact set; never preserve a stale count for convenience.

| 457 | Business-need input asset contract approved | Runtime business-need assets must represent real-world, imperfect need input; support facts, assumptions, ambiguity, provenance, buyer guidance, and material-gap detection without embedding a finished RFx or expected findings. |
| 458 | Organizational-policy asset contract approved | Runtime policy assets must preserve identity, owner, version, effective date, approval, stage-relevant clauses, conditions, exceptions, authority, and provenance; Aera must determine applicability and must not use a precomputed answer key. |
| 459 | Prior-RFx and format/schema asset contract approved | Prior RFx material must be distinguishable from an approved schema, historical proxy, obsolete format, or supplier-facing document; field semantics require evidence, and a proposed format requires buyer approval when no authoritative schema exists. |
| 460 | Supporting-source asset contract approved | Technical, commercial, operational, and contextual sources must preserve origin, date/version, authority, relevance, conflicts, and provenance; relevance must be assessed from content and evidence rather than filenames or folder placement. |
| 461 | Supplier identity and contact-evidence asset contract approved | Supplier and recipient assets must support identity resolution, evidence-based contact discovery, stale/conflicting record handling, provenance, buyer confirmation, and versioned recipient use; unconfirmed recipients cannot receive the RFx. |
| 462 | Invitation-message asset contract approved | Invitation assets must support inbox/repository retrieval, subject/body separation, event-specific and supplier-specific placeholders, source provenance, complete response instructions, rendered review, buyer approval, and safe new-message proposals when no suitable template exists. |

### E-129 — Failing to record approved asset contracts

**When identified:** After six asset-family contracts had been explicitly approved in conversation but were absent from the decision ledger.

**Incorrect principle applied:** Treat the conversation as a sufficient working specification and postpone ledger recording until a later synthesis point.

**Incorrect outcome:** The approved business-need, policy, prior-RFx/schema, supporting-source, supplier-contact, and invitation-message contracts could be lost, misremembered, or incorrectly treated as drafts during later asset generation.

**Why it was wrong:** The ledger is the durable source of truth for approved decisions. An approval must become an artifact immediately, especially before dependent work proceeds.

**Corrected principle:** Record every explicit approval as an immutable chronological decision before moving to the next dependent step. Conversation context cannot substitute for the ledger.

**Correct outcome:** Decisions 457–462 now preserve the six approved asset contracts. Future asset work must use these decisions as binding inputs and must stop if a required contract is missing or ambiguous.

| 463 | Asset-contract record completeness correction | Every asset-family contract record must preserve four distinct layers: the governing design principle, the asset-family objective, the boundary of what is and is not included, and the detailed contract. Decisions 457–462 preserve the approved contract content but require this governing context to be attached before implementation use. |

### E-130 — Omitting principle, objective, and boundary from approved asset-contract records

**When identified:** After recording Decisions 457–462 for the six approved asset-family contracts.

**Incorrect principle applied:** Treat the detailed contract as the complete decision record and collapse its governing rationale and scope into the contract summary.

**Incorrect outcome:** The ledger recorded what each asset family must contain but did not preserve the principle that governs its design, the objective it serves, or its boundary. Later generation could therefore satisfy the checklist while drifting from the intended user outcome or runtime/evaluation separation.

**Why it was wrong:** A contract is only interpretable in relation to its objective and boundary. The principle explains the design logic; the objective explains the user/workflow outcome; the boundary prevents scope drift and leakage.

**Corrected principle:** Every approved step, asset family, and contract must be recorded as principle → objective → boundary → contract → validation basis. These layers remain distinct and cannot be collapsed into one summary.

**Current status:** The asset-pack objective and runtime/evaluation boundary were approved in the preceding decision. The six family contracts were approved, but their individual principle/objective/boundary mappings must be completed and reviewed before asset generation begins.

| 464 | Approval-layer recording correction required | The asset-pack principle, objective, and boundary must each have an explicit decision record and approval status. The objective and boundary were approved by the user; no approval of the governing principle is claimed because it was not separately presented for approval. |

### E-131 — Failing to record approval of the governing decision layers

**When identified:** When reviewing the ledger entries for the asset-pack objective, boundary, and family contracts.

**Incorrect principle applied:** Treat approval of a structured proposal as approval of all of its conceptual layers without recording those layers and their approval status separately.

**Incorrect outcome:** The ledger did not contain explicit decisions for the asset-pack principle, objective, and boundary. It therefore could not show which layers were approved, which were proposed, and which remained open.

**Why it was wrong:** Approval is meaningful only when the object of approval is explicit. Principle, objective, and boundary govern all downstream contracts and cannot be inferred from a later contract approval.

**Corrected principle:** Record and obtain explicit approval for each governing layer—principle, objective, and boundary—before recording dependent contracts. Preserve approval status per layer; never infer it from conversational sequence.

### E-132 — Misunderstanding a correction about missing approvals

**When identified:** In the response to the user’s clarification that the problem was the missing decision to approve the principle, objective, and boundary.

**Incorrect principle applied:** Interpret a correction through the next planned work task instead of resolving the exact decision-recording gap the user identified.

**Incorrect outcome:** I proposed mapping the family contracts rather than acknowledging that the governing-layer approvals themselves were missing and needed to be distinguished.

**Why it was wrong:** The user was correcting the decision ledger’s approval semantics, not requesting the next asset-design activity.

**Corrected principle:** When the user identifies a missing approval or ledger layer, first repair and state the approval record precisely; do not advance to dependent work until the status gap is resolved.

### E-133 — Inventing a named artifact for a design layer

**When identified:** When referring to the asset-generation principle as a “governing asset-pack principle.”

**Incorrect principle applied:** Turn a conceptual layer in the design method into a named artifact or object without the user defining or approving it.

**Incorrect outcome:** The conversation introduced a random-sounding “governing asset-pack” concept and implied that it was a separate approval object, creating unnecessary abstraction and confusion.

**Why it was wrong:** Principle, objective, and boundary are attributes used to define an activity or contract. They are not automatically separate artifacts, entities, or workflow steps.

**Corrected principle:** Introduce only artifacts, entities, labels, and workflow steps that are necessary, explicitly defined, or approved. Keep design attributes attached to the activity or contract they govern unless a separate artifact is deliberately agreed.

**Correct outcome:** There is no separate governing asset-pack artifact. The asset-generation activity will be defined using principle, objective, boundary, family contracts, and validation basis, without inventing another named object.

| 465 | Asset-contract structure restored | The existing asset-family contract structure remains unchanged. The only missing record was the prior approval decision for the principle, objective, and boundary used for the asset-pack exercise; that omission does not require changing the contract format. Decisions 463–464 are superseded to the extent that they implied such a format change. |

### E-134 — Treating a missing approval record as a contract-format problem

**When identified:** After the user clarified that the asset-family contract structure was already correct and that only the approval decision for the asset-pack principle, objective, and boundary had been omitted from the ledger.

**Incorrect principle applied:** Modify an already-approved contract structure to compensate for a missing decision record.

**Incorrect outcome:** I introduced additional layers into the contract format and implied that the six approved contracts were incomplete because those layers were not embedded in each contract record.

**Why it was wrong:** The user was asking for a missing approval to be recorded, not for the contract structure to be redesigned. A ledger omission and a contract-design defect are different problems.

**Corrected principle:** Preserve an approved contract structure unless the user identifies a contract defect. Repair missing decision records directly; do not alter the approved format to address a recording failure.

**Correct outcome:** The existing asset-family contract format remains in force. Only the missing approval decision for the asset-pack exercise’s principle, objective, and boundary needs to be recorded accurately.

| 466 | Asset-pack planning basis approved and restored | Before creating files, the asset-pack exercise must align its principle, objective, and boundary. Principle: a substantial asset set requires approved planning decisions and contracts before execution. Objective: create an inspectable runtime set that demonstrates the complete guided sourcing journey across realistic source and response conditions. Boundary: keep runtime inputs and independently created hidden evaluation material strictly separate; runtime inputs must not contain expected findings, treatments, assertions, or answer keys. |
| 467 | Supplier-response asset contract approved | Runtime responses must represent five suppliers responding to 30 RFx lines through varied channels and formats, including complete and partial coverage, questionnaire answers, commercial terms, delivery, quality evidence, attachments, images, deviations, and missing or conditional values. Original material, extraction, mappings, and provenance must remain inspectable; expected issues and treatments must remain hidden. |
| 468 | Delivery-status asset contract approved | Runtime delivery assets must represent approved supplier-specific packages, successful outcomes, failure or bounce, evidence-backed alternative contact discovery, buyer-confirmed retry, and preserved delivery history. Sending plumbing may be stubbed, but package identity, state transitions, permissions, and retry behavior must be real. |

### E-135 — Failing again to record approved asset contracts immediately

**When identified:** After the user approved the supplier-response and delivery-status contracts and the approvals were not recorded in the decision ledger.

**Incorrect principle applied:** Resume normal step progression after correcting a prior ledger omission without enforcing immediate recording for each subsequent approval.

**Incorrect outcome:** Decisions for the supplier-response and delivery-status contracts existed only in the conversation, repeating the exact loss-of-durable-record problem already identified in E-129.

**Why it was wrong:** The ledger rule applies uniformly to every approval. A previous correction does not justify relying on conversational memory for new decisions.

**Corrected principle:** After every explicit approval, stop progression long enough to record that approval with its exact scope and status before presenting the next step.

**Correct outcome:** Decisions 467 and 468 now preserve the two approvals. No further contract or asset-generation work should proceed without recording the next approval immediately.
| 469 | Supplier-attachment and evidence asset contract approved | Attachments must remain associated with the correct supplier and response version, be independently inspectable, and support evidence extraction, applicability, provenance, and insufficiency detection without being treated as automatic proof or exposing hidden evaluation assertions. |
| 470 | Hidden-evaluation asset contract approved | Evaluation assets must independently test association, extraction, coverage, normalization, commercial and delivery exceptions, evidence sufficiency, policy applicability, readiness, comparison, award, provenance, and recovery behavior without being accessible to Aera or copied into runtime metadata. |
| 471 | Asset-pack validation contract approved | Asset readiness requires file integrity, scenario integrity, runtime-boundary isolation, and evaluation independence. Validation confirms that the approved asset set is usable and testable; it does not claim that Aera’s extraction or reasoning is correct. |
| 472 | Asset-pack cross-synthesis audit — correction required | The approved contracts are coherent, but the provisional set is not generation-ready: no business-need input asset, questionnaire content, or delivery-status event assets are present; KraftBox’s email claims a 30-line workbook and certificate but the attached workbook is only a summary and no certificate is linked; PackRight’s certificate is a source document rather than a response attachment relationship; the invitation lacks an event-specific deadline; and the hidden evaluation set was created before a runtime asset freeze, so independent-generation provenance is not established. No asset generation may proceed until these dependencies are resolved under the approved contracts. |
| 473 | Business-need content approved | The runtime business-need input is a natural-language request for the Pune plant’s next quarterly corrugated-carton requirement: approximately 30 sizes, current schedule as supporting material, delivery by 15 October 2026, and supplier confirmation of line coverage, construction, quality evidence, delivery, and commercial terms. It remains a business request rather than a finished RFx and contains no expected findings or treatments. |
| 474 | Policy content approved | The runtime policy is Northstar Manufacturing Procurement Policy version 4.0, effective 1 April 2026, covering RFx fields, commercial transparency, quality evidence and exceptions, physical-unit normalization, multi-currency treatment, award criteria, and award authority across relevant workflow stages. It is one versioned policy document; Aera must retrieve applicable clauses rather than use a precomputed finding list. |
| 475 | Prior-RFx/schema UX cross-synthesis gap identified | The approved asset content requires the UI to distinguish current policy authority, historical prior-RFx evidence, Aera’s proposed current structure, and buyer-approved RFx format. The current implementation does not yet make those distinctions or support field-basis inspection and format approval; this must be resolved in the screen contract before implementation. |
| 476 | RFx screen contract correction approved | Screen 2 remains one Create and approve RFx workspace. It must show the business need, source roles, proposed current RFx structure, field-level basis, generated RFx, issues, and approval in sequence. Policy is authoritative, prior RFx material informs structure, supporting sources add context, and buyer approval is blocked until the proposed structure and RFx are ready. |
| 477 | Supporting-specification content approved | The runtime technical source is the current Pune Plant Packaging Specification, revision 2026.2, covering internal dimensions, quarterly quantities, delivery location, line-specific construction, deviations, quality evidence, commercial fields, and complete line return. It provides current technical context without replacing policy or defining the questionnaire. |
| 478 | Questionnaire content approved | The RFx questionnaire must ask suppliers about line coverage, construction and test standard, delivery commitment, responsible entity/site, quality evidence, deviations, capacity, assumptions, and separated commercial terms. Answers must support structured values, explanations, evidence references, and provenance without containing expected answers or treatments. |
| 479 | Supplier-contact content approved | The runtime contact source contains current FY2026 packaging contacts for KraftBox, PackRight, NexCorrugate, BoxSmith, and GreenFold with names, roles, addresses, review context, and a rule that alternate contacts require their own evidence and buyer confirmation before retry or sending. |
| 480 | Invitation-message content approved | The runtime invitation has a separate subject and body template with supplier, RFx, location, deadline, attachment, response, questionnaire, commercial, quality, delivery, deviation, and assumption content. It is rendered per confirmed supplier and requires buyer approval before sending. |
| 481 | KraftBox response content approved | KraftBox’s runtime response is an email with an attached Excel quotation and current quality certificate. It covers all 30 RFx lines with line-level INR per-piece pricing, separate freight and taxes, delivery, payment, validity, questionnaire answers, manufacturing evidence, capacity, deviations, and assumptions. |
| 482 | PackRight response content approved | PackRight’s runtime response is a structured quotation covering all 30 lines with INR per-piece pricing, separated commercial terms, delivery, payment, validity, questionnaire answers, a conditional volume rebate, and an attached inspectable quality certificate. |
| 483 | NexCorrugate response content approved | NexCorrugate’s runtime response is a concise email covering lines L-01 through L-27, with INR per-piece pricing, separated freight and taxes, delivery, payment, validity, contact and supplier identity, partial questionnaire content, and quality evidence promised only after commercial confirmation. |
| 484 | BoxSmith response content approved | BoxSmith’s runtime response is a photographed quotation image containing RFx identity, supplier identity, four quoted lines, USD per-piece prices, later delivery, separate freight, and pending quality evidence, without a complete schedule, certificate, or complete questionnaire response. |

### E-136 — Failing to record BoxSmith response approval immediately

**When identified:** When the user approved the BoxSmith response content and then identified the broader email-thread issue.

**Incorrect principle applied:** Continue to the next design concern after an approval without first recording the approval in the decision ledger.

**Incorrect outcome:** The BoxSmith response approval was temporarily present only in conversation, repeating the ledger-discipline failure recorded in E-135.

**Why it was wrong:** Every explicit approval must be durable before dependent reasoning continues.

**Corrected principle:** Record the current approval first, then address the newly raised correction as a separate decision dependency.

### E-137 — Defining Screen 3 around outbound invitation activity

**When identified:** When the user clarified that Screen 3’s objective is to move relevant supplier responses toward completeness.

**Incorrect principle applied:** Define a workflow screen by the system’s first action—sending invitations—instead of by the buyer’s tangible real-world outcome.

**Incorrect outcome:** Screen 3 was framed primarily as “Invite suppliers,” with responses and follow-up treated as downstream handling rather than the central work of obtaining usable supplier responses.

**Why it was wrong:** The procurement manager’s objective is to obtain sufficiently complete, comparable supplier responses. Sending the initial email is only one mechanism within that objective.

**Corrected principle:** Define each screen and its marketing copy by the user’s real-world outcome. Internal actions such as invitation, clarification, extraction, and retry are subordinate mechanisms.

**Proposed correction status:** The revised Screen 3 objective and related copy require user review and approval.

| 485 | Screen 3 objective correction proposed | Reframe Screen 3 from invitation sending to moving each relevant supplier response toward completeness for fair comparison. The initial invitation, follow-up questions, reply association, attachment handling, and buyer-approved retries are mechanisms within that objective. Related screen labels and marketing copy require re-audit. |
| 486 | Screen 3 objective and copy correction approved | Screen 3 is about closing gaps in supplier responses and getting each relevant response ready for a fair comparison. Approved copy: heading “Close the gaps in supplier responses.”; supporting line “Get each response ready for a fair comparison.”; landing capability “Closes the gaps in supplier responses before comparison.” The copy states buyer relief and tangible outcome without describing internal AI mechanisms. |
| 487 | GreenFold response content approved | GreenFold’s runtime response is a DOCX covering all 30 lines with INR per-piece pricing, separated commercial terms, delivery, questionnaire content, manufacturing and quality references, deviations and assumptions, and a conditional volume discount that remains separate from quoted unit price. |

### E-138 — Failing to perform impact analysis after changing Screen 3’s objective

**When identified:** When the user pointed out that reframing Screen 3 around moving responses toward completeness affects AI behavior, deterministic behavior, UI, and multiple contracts.

**Incorrect principle applied:** Continue defining individual response assets after an objective correction without first tracing the correction across all dependent product contracts and verification assets.

**Incorrect outcome:** Supplier response content was approved while material cross-contract implications remained unreviewed.

**Why it was wrong:** A screen objective is a product-level contract. Changing it changes the meaning, completion state, ownership, interactions, system behavior, and evidence required across every dependent layer.

**Corrected principle:** After any approved objective or scope correction, pause dependent work and run a complete impact analysis across user journey, copy, AI behavior, deterministic mechanisms, state transitions, data model, integrations, assets, and verification before continuing.

| 488 | Screen 3–4 completion-boundary correction proposed | Screen 3 completion must mean that required response information is present or resolved through an applicable policy-authorized route; it must not mean that every value is filled or that all deviations disappear. Screen 4 may display and help the buyer understand policy-permitted exceptions and non-comparable conditions, but unresolved comparison-blocking conditions must prevent transition or route back for resolution. The procurement manager may take policy-authorized actions that permit transition, with the action, authority, and exception basis preserved. |
| 489 | Screen 3–4 completion-boundary correction approved | Screen 3 resolves required supplier-response conditions or records the policy-authorized route for unresolved conditions. Screen 4 remains the comparison-understanding workspace: it displays deviations, conditional terms, non-comparable values, and policy-permitted exceptions, while comparison-blocking conditions prevent transition or route back for resolution. Buyer actions must retain policy basis, authority, evidence, and exception history. |
| 490 | Screen 3 objective impact audit — correction required | The approved objective affects Screen 3, Screen 4, their transition, AI response interpretation and clarification, deterministic completeness/version/state controls, conversation and attachment data, outbound email behavior, runtime multi-message assets, hidden evaluations, verification traceability, and marketing/in-product copy. Existing one-shot response contracts must be revised before further supplier-asset definition or generation. Open decisions remain around supplier-level completion states, relevant-supplier scope, follow-up stopping conditions, policy-authorized resolution routes, and the exact transition gate. |
| 491 | Supplier-level response completion contract approved | Each relevant supplier is assessed against the approved RFx, questionnaire, applicable policy, supporting sources, and that supplier’s own evidence. Aera identifies specific gaps, drafts buyer-approved follow-ups, associates replies and attachments, versions responses, and re-evaluates them. Completion requires required information or an applicable policy-authorized route; no value may be invented, overwritten, or silently accepted. Screen 4 opens only when every relevant supplier has a resolved outcome. |
| 492 | Supplier-scope rule added to completion contract | The completion gate covers every supplier approved for the RFx and any supplier later added by the buyer. A supplier remains in scope until its response is complete or the buyer records a policy-authorized route for non-response, removal, or exception. Replies from another thread are included when reliably associated with the supplier and RFx. |
| 493 | Follow-up and stopping rules added to completion contract | Aera may draft a supplier follow-up only for a missing required field, ambiguous or contradictory answer, comparability-affecting condition, missing evidence, or uncovered required line. It must ask for the specific information needed, require buyer approval, and stop when the requirement is satisfied, the supplier cannot provide it, or the buyer records the applicable policy-authorized route. No arbitrary question count or automatic chase loop is permitted. |
| 494 | Policy-resolution rule added to completion contract | For an unresolved supplier condition, Aera must identify the requirement, retrieve and interpret the applicable policy clause, show its conditions and authority with supplier evidence, and permit only an explicitly recorded action by an authorized buyer. If policy coverage is absent, Aera must not decide treatment and must route the matter to the authorized policy owner or procurement authority. |
| 495 | Screen 3–4 transition contract approved | Comparison opens only when every in-scope supplier has a resolved response outcome, required fields are present or policy-authorized, associations, versions, mappings, and provenance are reliable, and applicable policy permits comparison. Policy-permitted exceptions remain visible in Screen 4; unresolved or policy-prohibited conditions block or route back for resolution. |
| 496 | Supplier-completeness AI behavior contract approved | Aera reviews each supplier response against the approved RFx, questionnaire, applicable policy, and relevant sources; identifies evidence-backed gaps and their significance; drafts the smallest useful clarification; and re-evaluates after every reply or attachment. It must not infer answers, decide policy treatment, send without buyer approval, overwrite history, or mark a response complete because a follow-up was sent. |
| 497 | Supplier-completeness deterministic contract approved | Deterministic mechanisms derive requirements from the approved RFx/questionnaire, preserve source and version provenance, track field-level response states, re-evaluate after events, enforce response-version integrity and permissions, calculate supplier-level completion from facts and policy outcomes, and enforce the Screen 3–4 gate. They must not silently classify, merge, complete, send, or bypass unresolved conditions. |
| 498 | Supplier-response data and state contract approved | Each supplier record preserves identity, RFx/version, conversation and message history, response versions, extracted values, mappings, attachments, delivery events, clarification requests, buyer approvals, policy actions, completion state, and provenance. New events update a traceable view without erasing prior records; the Screen 3–4 transition reads from this recorded state. |
| 499 | Corrected Screen 3 interface contract approved | Screen 3 closes supplier-response gaps through a supplier list, response state, full conversation, attachments, extracted values, requirement/evidence basis, targeted buyer-approved follow-ups, delivery/retry history, and recalculated state. “Continue to comparison” is available only when every in-scope supplier has a resolved outcome under the approved policy and transition contract. |
| 500 | Corrected Screen 4 interface contract approved | Screen 4 helps the buyer understand the side-by-side comparison, questionnaire answers, evidence, deviations, conditions, and policy-permitted exceptions. Its chat explains comparison evidence but cannot recommend or approve an award or resolve supplier gaps. The buyer acknowledgement unlocks “Continue to award decision” only after readiness checks pass. |
| 501 | Multi-message supplier exchange contract approved | Supplier interaction is an evolving exchange of approved invitation, response, completeness assessment, buyer-approved clarification, delivery, supplier reply or attachment, updated response version, and reassessment. Every message and version is preserved; replies may arrive on another thread; follow-ups are targeted and buyer-approved; no silence, reply, or merge can silently complete a response. |
| 502 | NexCorrugate exchange content approved | NexCorrugate’s partial email response is followed by a buyer-approved targeted request for the three missing lines, quality evidence, manufacturing identity, capacity, payment, validity, deviations, and assumptions. The supplier replies with the missing information and certificate attachment as a new response version while preserving the initial email and provenance. |
| 503 | RFx currency-treatment content approved | RFx-2026-014 uses the Northstar Finance FX Rate Sheet dated 26 August 2026, at 1 USD = INR 83.95, with INR as comparison currency. Original values remain visible; normalized values, rate source, and date are deterministic and traceable. Freight, taxes, rebates, and other terms remain separate unless explicitly covered. Missing rate treatment preserves original currency and keeps comparison incomplete. |
| 504 | Finance FX source content approved | The runtime Finance source is an approved Northstar Finance FX Rate Sheet for RFx-2026-014, issued and effective 26 August 2026, specifying INR as comparison currency and 1 USD = INR 83.95 with source, approval, and validity metadata. It supports normalization only and contains no supplier outcome or evaluation assertion. |
| 505 | BoxSmith exchange content approved | BoxSmith’s initial image quotation is followed by a buyer-approved targeted clarification for missing lines, currency basis, delivery, identity, quality evidence, capacity, terms, deviations, and assumptions. The supplier replies on a different thread with RFx evidence, a complete spreadsheet, questionnaire answers, and quality certificate; Aera associates it using combined evidence and creates a new response version without overwriting the image. |
| 506 | BoxSmith alternate-contact content approved | The runtime contact evidence includes Priya Menon, Customer Operations, salesdesk@boxsmith.co, as a current Northstar vendor-master alternate for BoxSmith, reviewed 20 August 2026. It is distinct from the primary contact and may be used only after buyer confirmation following a failed or bounced delivery. |
| 507 | Delivery-event content approved | Four approved supplier invitations are delivered successfully. BoxSmith’s primary delivery bounces; the buyer sees the provider result and source-backed alternate contact, confirms it, and retries the same approved package. The retry delivers successfully, the original failure remains visible, and the later image response and alternate-thread clarification are preserved as separate events. |
| 508 | Asset-content cross-synthesis audit — correction required | The approved content decisions cover the business need, policy, prior RFx, supporting specification, questionnaire, contacts, invitation, five initial supplier responses, multi-message exchanges, Finance rate source, alternate contact, and delivery sequence. Before file generation, exact line-level response data, exact follow-up attachments and their provenance, message/thread metadata, current RFx package contents, and the runtime representation of delivery events still require definition. The provisional hidden evaluation set must be discarded and independently re-authored only after the runtime set is frozen. |
| 509 | KraftBox exact response data approved | KraftBox’s response uses the approved 30-line schedule with the specified unit prices, INR currency, line-unit basis, separate quarterly freight, separate taxes, delivery, payment, validity, questionnaire answers, manufacturing evidence, and current quality-certificate metadata. |
| 510 | PackRight exact-data dependency identified | Before defining PackRight’s line-level values, the approved content contains a unit-basis conflict: the RFx schedule defines L-15 and L-16 as sets, while the PackRight content says INR per-piece pricing for all 30 lines. This cannot be silently normalized because policy prohibits inferring pricing basis. The PackRight response contract must be clarified before exact values are defined. |
| 511 | PackRight pricing-basis treatment approved | PackRight’s stated per-piece basis for L-15 and L-16 is preserved as an explicit supplier deviation. It is not converted to per-set pricing, and those lines are not treated as directly comparable until the applicable policy route or buyer decision resolves the difference. |
| 512 | PackRight exact response data approved | PackRight’s response contains all 30 line-level INR prices, explicitly per-piece pricing including the L-15/L-16 basis deviation, separate freight and taxes, delivery, payment, validity, conditional rebate, complete questionnaire data, manufacturing details, and quality-certificate metadata. |
| 513 | NexCorrugate exact follow-up data approved | NexCorrugate’s follow-up adds L-28 to L-30 at INR 12.70, 18.10, and 25.80 per piece, confirms prior terms and delivery, supplies payment, validity, manufacturing site, capacity, construction, deviations, assumptions, and a current quality-certificate attachment as a new response version. |
| 514 | BoxSmith exact follow-up data approved | BoxSmith’s alternate-thread reply confirms the four image prices, adds L-05 to L-30 with USD per-piece prices, confirms delivery, commercial terms, manufacturing site, capacity, questionnaire data, deviations, assumptions, and a current quality-certificate attachment as a new response version while preserving the original image. |
| 515 | GreenFold exact response data approved | GreenFold’s DOCX response contains 30 INR per-piece prices, separate commercial terms, delivery, payment, validity, full questionnaire data, manufacturing and capacity details, a conditional full-volume discount, and a special-printing exclusion without a separate quality attachment. |
| 516 | Current RFx package content approved | RFx-2026-014 contains the current 30-line quarterly corrugated-carton requirement, Pune delivery, 15 October 2026 required date, 26 August 2026 response deadline, approved supplier-return fields, questionnaire, explicit award basis, Finance currency treatment, original-value preservation, response instructions, policy/source basis, version, and buyer approval requirement. |
| 517 | Message and thread metadata approved | Every supplier-specific invitation, reply, follow-up, retry, attachment, delivery event, and response version must preserve message/thread IDs, participants, RFx/version, body and attachment versions, timestamps, delivery status, approvals, and cross-thread association evidence. |
| 518 | KraftBox certificate content approved | The KraftBox attachment is a viewable quality certificate with ID KB-QMS-2026-081, Nashik site, corrugated-kraft scope, 3-ply and 5-ply coverage, IS 2771, issue/validity dates, issuer, signatory, and RFx relationship, linked to the email, workbook, questionnaire answer, and response version. |
| 519 | NexCorrugate certificate content approved | The NexCorrugate follow-up attachment is a viewable quality certificate with ID NC-QMS-2026-204, Aurangabad site, corrugated-kraft scope, 3-ply and 5-ply coverage, IS 2771, issue/validity dates, issuer, signatory, and RFx relationship, linked specifically to the follow-up reply and updated response version. |
| 520 | BoxSmith certificate content approved | The BoxSmith follow-up attachment is a viewable quality certificate with ID BS-QMS-2026-077, Pune site, corrugated-kraft scope, 3-ply and 5-ply coverage, IS 2771, issue/validity dates, issuer, signatory, and RFx relationship, linked to the alternate-thread reply, completed workbook, questionnaire answers, and updated response version while the original image remains separate. |
| 521 | PackRight certificate content approved | The PackRight attachment is a viewable quality certificate with ID QMS-2026-118, Bhiwandi site, corrugated-kraft scope, 3-ply and 5-ply coverage, IS 2771 and internal burst-strength method, issue/validity dates, issuer, signatory, and RFx relationship, linked to the quotation, quality answer, supplier response, and comparison evidence. |
| 522 | Exact message and delivery-event records approved | RFx-2026-014 uses supplier-specific invitation records, four successful deliveries, one BoxSmith bounce, buyer-confirmed alternate retry, and preserved NexCorrugate and BoxSmith multi-message exchanges with message, thread, attachment, approval, version, and delivery relationships. |
| 523 | Pre-generation content synthesis audit — correction required | File creation remains blocked by unresolved dependencies: the current RFx refers to current quantities but only a historical FY2025 schedule has been defined; line-level construction data is not yet specified consistently for supplier workbooks; the policy has no explicit treatment for PackRight’s set-versus-piece basis deviation or BoxSmith’s later delivery; GreenFold’s required quality evidence has no attachment or follow-up route; and exact timestamps, source relationships, and final RFx/current-schedule lineage still need definition. The provisional hidden evaluation set must not be reused. |
| 524 | FY2026 requirement schedule approved | The current RFx schedule is a new FY2026.2 schedule with 30 existing line identities, current quarterly quantities, line-specific ply and units, internal-millimetre dimensions, Pune delivery, and 15 October 2026 required delivery. It is authoritative for current quantities and dates; FY2025 material remains historical structure evidence. |
| 525 | Supplier-deviation policy treatment approved | Pricing-basis deviations require supplier correction or Procurement Operations approval before affected lines are comparable; late delivery remains visible as a deviation and requires procurement-manager acceptance before award; missing quality evidence prevents quality qualification until the certificate or an approved Quality exception is recorded. |
| 526 | GreenFold quality-evidence follow-up content approved | GreenFold’s initial response references but does not attach quality evidence. A buyer-approved targeted follow-up requests the certificate, test-report reference, manufacturing site, legal entity, and coverage confirmation. GreenFold replies with certificate GF-QMS-2026-091, Bengaluru site, corrugated-kraft scope, 3-ply/5-ply coverage, IS 2771, issue/validity dates, issuer, signatory, and RFx reference as a new evidence record. |
| 527 | Final pre-generation synthesis audit — correction required | Approved content is coherent across workflow, UI, AI, deterministic behavior, messages, attachments, and evaluation separation, but generation remains blocked because each supplier response must explicitly carry line-level construction fields—board grade, ply, dimensions, and test standard—for every quoted line or an equally explicit line-level reference. A general statement that the RFx schedule was followed is insufficient under the approved policy. |
| 528 | KraftBox line-level construction data approved | KraftBox’s workbook explicitly carries the current RFx’s 30 line IDs, dimensions, line-specific ply, kraft board grade, IS 2771 test standard, quantities, units, prices, and no construction deviations. |
| 529 | PackRight line-level construction data approved | PackRight’s quotation explicitly carries the current RFx’s 30 line-level dimensions, kraft grade, line-specific ply, quantities, units, and IS 2771 test standard. Construction matches the RFx; the disclosed deviation is limited to per-piece pricing for L-15 and L-16. |
| 530 | NexCorrugate line-level construction data approved | NexCorrugate’s initial and follow-up response data explicitly identifies line-level dimensions, kraft grade, line-specific ply, quantities, units, IS 2771, prices, and deviations for all 30 lines, with the follow-up completing L-28 to L-30 and the certificate relationship. |
| 531 | BoxSmith line-level construction data approved | BoxSmith’s initial image remains a partial original response. Its alternate-thread follow-up spreadsheet explicitly supplies construction fields for all 30 lines, including dimensions, kraft grade, line-specific ply, quantities, units, IS 2771, prices, USD per-piece basis, delivery, deviations, and certificate relationship. |
| 532 | GreenFold line-level construction data approved | GreenFold’s DOCX explicitly supplies construction fields for all 30 lines, including dimensions, kraft grade, line-specific ply, quantities, units, IS 2771, prices, per-piece basis, special-printing exclusion, conditional discount, and later quality-certificate relationship. |
| 533 | Final content audit — RFx output-format decision required | Supplier data is now defined at line level, but the current RFx package content does not specify its buyer/supplier-facing export format, rendering requirements, or attachment identity. The RFx must have an approved inspectable format before message and attachment generation; Markdown must not be assumed. |
| 534 | RFx deliverable format approved | The current RFx is a professionally formatted, multi-page PDF with identity, instructions, readable 30-line schedule, questionnaire, commercial and currency instructions, award basis, source/version/approval record, and immutable approved version. The UI may provide an interactive review, but the downloadable buyer/supplier artifact is the PDF. |
| 535 | Asset-generation execution sequence and replacement disposition approved | Freeze Decisions 457–534 as the generation specification; replace the provisional demo files; create and validate the runtime set; freeze it; independently create and validate hidden evaluation assets; then run the complete asset-pack validation and isolation audit. |

### E-140 — Over-separating a completion-scope rule into a redundant contract

**When identified:** When presenting a standalone relevant-supplier scope contract after the supplier-level response completion contract had already been approved.

**Incorrect principle applied:** Create a separate contract for every dependent concept instead of placing a necessary rule inside the contract that already owns the behavior.

**Incorrect outcome:** The user was asked to review an abstract, redundant contract whose purpose was unclear.

**Why it was wrong:** The relevant-supplier rule exists only to make the approved completion gate operational. It is not an independent user outcome or asset family.

**Corrected principle:** Introduce a separate contract only when it represents a distinct user outcome, authority boundary, system behavior, or artifact. Otherwise, keep the rule within the owning contract.

**Correct outcome:** The relevant-supplier definition will be incorporated into the approved supplier-level response completion contract; no standalone contract is required.

### E-139 — Failing to record the downstream Screen 4 impact

**When identified:** When the user approved the Screen 3–4 completion-boundary correction and noted that the Screen 4 impact had not been recorded.

**Incorrect principle applied:** Treat the changed Screen 3 objective as a local correction and record only the immediate transition wording, without separately recording the downstream screen affected by that transition.

**Incorrect outcome:** Screen 4’s continued role, exception display, comparison-blocking behavior, and policy-authorized transition path were present in discussion but not recorded as an approved cross-stage decision.

**Why it was wrong:** Screen 3’s completion state is Screen 4’s entry condition. Changing one changes the other’s meaning and behavior.

**Corrected principle:** For every objective or completion-state change, enumerate and record all affected upstream and downstream surfaces, including screens, transitions, contracts, AI behavior, deterministic behavior, data/state, assets, and verification. Do not assume a surface is unaffected without auditing it.

| 536 | Runtime asset generation corrections recorded | During execution, the approved asset specification was applied at the generator level: the RFx PDF is paginated across readable pages; supplier workbooks carry the approved line-level commercial and construction fields; the historical template and approved quality certificates are materialized; GreenFold’s response carries line-level construction data; and the manifest lists every actual runtime attachment. |
| 537 | Runtime set frozen | The rebuilt runtime set for RFx-2026-014 is frozen by manifest and SHA-256 content hashes. The freeze includes 28 declared runtime inputs and explicitly excludes the hidden evaluation directory, repository metadata, and freeze metadata from agent inputs. |
| 538 | Hidden evaluation set independently authored after runtime freeze | The hidden evaluation set was created only after the runtime freeze and is not listed in the runtime manifest. It contains supplier-completeness, alternate-thread, policy-deviation, evidence-follow-up, currency, and RFx-integrity assertions without exposing an expected-finding or treatment list to the runtime agent. |

### E-141 — Initial runtime generator did not faithfully materialize the approved asset contract

**When identified:** During the approved pre-generation execution and asset validation.

**Incorrect principle applied:** Treat a file’s nominal existence and primary response message as sufficient evidence that the complete asset contract had been implemented.

**Incorrect outcome:** The first generated set had a single-page RFx PDF whose later lines could fall outside the page, a KraftBox workbook without approved price/commercial fields, missing approved certificate/template files, and a manifest that omitted material attachments.

**Why it was wrong:** An asset contract is satisfied only when the user can inspect the required content in the required format and the runtime manifest makes every relevant evidence object available. File presence alone is not enough.

**Corrected principle:** Validate every generated asset at three levels: semantic completeness against the approved contract, physical inspectability in its declared format, and manifest/provenance completeness across all attachments and versions. Correct the generator rather than patching one output.

**Correct outcome:** The generator now produces a two-page PDF, complete line-level workbook/DOCX content, actual approved attachments, and a manifest with no missing or duplicate runtime paths. The corrected set was frozen and independently evaluated.

### E-142 — Framing UI implementation as reconciliation with provisional work

**When identified:** When describing the remaining UI work after the provisional demo assets had been replaced.

**Incorrect principle applied:** Preserve the existing implementation by reconciling it with the approved screen contracts.

**Incorrect outcome:** The remaining UI work was framed as incremental alignment, creating a risk that provisional structure, copy, interactions, or visual assumptions would be carried forward merely because they already existed.

**Why it was wrong:** The existing UI and the earlier demo assets have the same status: provisional implementation. Once the approved screen contracts are the source of truth, prior implementation is evidence to inspect, not a constraint to preserve.

**Corrected principle:** When foundational product decisions have been approved and the existing implementation is provisional, rebuild the affected surface from the approved contracts. Preserve existing code only when it independently satisfies the contract and does not distort the new design; otherwise replace it.

**Correct outcome:** The UI workstream is now defined as a contract-led redevelopment of the landing page and four user-facing workflow screens, followed by interaction and visual validation. It is not a reconciliation exercise.

| 539 | Contract-surface verification passed | Fourteen deterministic checks passed across the rebuilt landing page, four-stage journey, inspectable source links, live intake/analysis paths, supplier message content, disabled demo boundaries, comparison acknowledgement gate, award boundary, runtime manifest, and hidden-evaluation isolation. TypeScript checks and production build also passed. |
| 540 | Browser journey verification remains blocked | The Playwright browser smoke suite is implemented but could not start in the current macOS environment because the available Chromium process aborts before page load and the matching browser revision is unsupported for this target. No browser assertion is marked passed; the required run remains for a supported environment. |

### E-143 — Treating an environment-blocked browser run as a product test result

**When identified:** During execution of the browser verification suite.

**Incorrect principle applied:** Treat the presence of a browser binary as sufficient to classify the browser journey as executable.

**Incorrect outcome:** The initial verification attempt could have been reported as a product failure or—worse—as a completed test run, even though the browser process terminated before the application loaded.

**Why it was wrong:** A verification result requires the test to reach the system under test. An infrastructure failure before page load is neither a product pass nor a product failure.

**Corrected principle:** Separate test outcome from test-environment outcome. Record browser checks as `Blocked` when the runner cannot reach the application, preserve the executable test, and use independent deterministic checks only for claims they can actually establish.

**Correct outcome at the time:** The deterministic contract-surface checks were marked passed; the browser journey was explicitly documented as blocked until the process could be run outside the restricted sandbox. Decision 541 records the subsequent successful browser run.

| 541 | Browser journey verification passed | After moving the browser process outside the restricted sandbox, the complete guided journey passed 19/19 checks: landing entry, five inspectable source assets, RFx creation, five recipients, disabled demo boundary messaging, send state, comparison acknowledgement gate, award transition, and analysis rendering. |

### E-144 — Browser verifier used a non-unique action selector

**When identified:** During the first browser run after the environment issue was resolved.

**Incorrect principle applied:** Treat a partial accessible-name match as sufficient when a progress-navigation control and a primary action share the same label.

**Incorrect outcome:** The verifier stopped before testing the RFx creation action because Playwright found both the navigation button and the primary button.

**Corrected principle:** Verification selectors must identify the intended user action uniquely, especially where navigation and primary actions share domain language.

**Correct outcome:** The verifier uses an exact accessible-name match for the primary `Create RFx` action and completes the journey.

### E-145 — Browser verifier treated an intentionally clickable disabled-demo control as disabled

**When identified:** During the second browser run.

**Incorrect principle applied:** Treat `aria-disabled` as equivalent to native `disabled` for every test interaction.

**Incorrect outcome:** The verifier could not click the recipient `Edit` control, although the product intentionally keeps it clickable to explain that editing is disabled for the demo.

**Corrected principle:** Test the intended interaction contract, not only the accessibility state token. A demo-disabled control may remain actionable when its purpose is to show the boundary explanation.

**Correct outcome:** The verifier force-clicks only this explicitly boundary-testing control and confirms the explanatory message; product controls remain unchanged.

| 542 | Expanded implementation verification passed | The executable verification now passes 24/24 deterministic contract and AI-harness checks, 19/19 browser journey checks, TypeScript checks, and the production build. Coverage includes the guided demo, evidence links, gates, disabled demo boundaries, live API invocation paths, zero temperature, non-persistent structured AI calls, relevance outcomes, filename-only rejection, alternate-thread handling, no-invention behavior, source-scoped retrieval, human authority, comparability guardrails, and runtime/evaluation isolation. |
| 543 | Contract-matrix execution audit recorded | The smoke suites pass only for the implemented subset. The current product still fails or blocks against approved contracts for the RFx approval state, issue-treatment loop, true 30-line comparison assembly, calculated comparison readiness, persisted response/version state, real provider delivery/retry, criteria override, rationale, authority, and final award commit. These rows remain unpassed; the detailed result is in `docs/CONTRACT_MATRIX_RUN.md`. |
| 544 | RFx approval boundary implemented and verified | Stage 1 now keeps the generated RFx in the review workspace, surfaces open decisions, prevents approval while required issues remain, records explicit buyer approval, and only then enables the supplier-invitation transition. The browser journey verifies this boundary as part of 20 passing checks. |
| 545 | RFx issue-treatment loop implemented and verified | Stage 1 now presents each model-surfaced open issue for buyer-confirmed input, keeps approval disabled while the issue remains unresolved, removes the issue only after the confirmed answer is supplied, and enables RFx approval afterward. The browser journey verifies the blocked, resolved, and approved states; the full journey now passes 23 checks. |
| 546 | Comparison surface and local response-state snapshot implemented | The evaluation screen now renders all 30 requested lines, supplier columns, normalized INR display, conversion basis, visible PackRight basis treatment, source links, and a persisted local response-state snapshot. This is a surface/state step only; the values are not yet claimed as runtime-extracted data. |

### E-147 — Using frontend projections while implementing the comparison surface

**When identified:** During verification of the 30-line comparison implementation.

**Incorrect principle applied:** Treat a structurally complete comparison view as sufficient evidence that the comparison is based on extracted supplier data.

**Incorrect outcome:** The UI displayed 30 normalized-looking rows from frontend constants, which could be mistaken for the result of real extraction and normalization from the approved runtime files.

**Why it was wrong:** The assignment requires real extraction and reasoning. A visual projection can verify layout and state wiring, but it cannot satisfy the data lineage or evidence contract.

**Corrected principle:** Separate surface verification from data-provenance verification. A comparison may be marked structurally rendered only when its rows exist, but it may be marked decision-ready only when each value is traceable to extracted source evidence, an approved mapping, and a deterministic normalization record.

**Correct outcome:** The 30-row surface and local persistence are retained as implementation scaffolding and explicitly labelled partial. The next implementation slice must replace frontend projections with real extraction/normalization output and calculate readiness from that recorded state.

### E-146 — Browser verifier used a non-unique post-approval action selector

**When identified:** During verification of the newly implemented RFx approval boundary.

**Incorrect principle applied:** Treat the shared label `Invite suppliers` as a unique selector even though it appears in both progress navigation and the post-approval primary action.

**Incorrect outcome:** The verifier stopped after approval without testing the transition into the supplier-invitation screen.

**Corrected principle:** Every verification action must select the intended control uniquely, including after state transitions where navigation labels and primary actions overlap.

**Correct outcome:** The verifier uses an exact accessible-name match and confirms the approved RFx transitions into supplier invitation.

### E-148 — Incomplete runtime asset dependency during comparison binding

**When identified:** During the first runtime comparison asset check.

**Incorrect principle applied:** Treat a partially added supplier-source set as sufficient to begin wiring the consumer screen.

**Incorrect outcome:** The comparison loader referenced a PackRight line-item file that the generator did not yet create, so the runtime check failed before the UI could assemble its evidence.

**Corrected principle:** Before wiring a consumer to runtime evidence, verify the complete producer-to-consumer dependency chain: every declared source exists, has the expected record shape/count, is included in the runtime manifest, and is copied into the served runtime boundary.

**Correct outcome:** The missing PackRight source was added, all five 30-row files were validated, the manifest and runtime freeze were regenerated, and the served public runtime was refreshed before browser verification.

| 547 | Comparison bound to runtime evidence and deterministic normalization | Added inspectable line-item response files for PackRight, NexCorrugate, and GreenFold; the evaluation screen now loads all five supplier response files at runtime, maps rows by line ID, converts USD to INR using the declared Finance rate of 83.95, persists the source and normalization trail, and keeps the acknowledgement/award transition locked until all 30 records load. Verification passed: 26/26 deterministic checks, 25/25 browser checks, TypeScript, and production build. |

### E-149 — Treating a code-side rule list as sufficient policy grounding

**When identified:** During review of the native-format comparison endpoint before final verification.

**Incorrect principle applied:** Treat the policy-derived requirement list embedded in the endpoint as equivalent to evaluating the runtime policy source.

**Incorrect outcome:** The endpoint could have reported policy readiness even if the selected policy document did not contain the fields that the rule list claimed to enforce.

**Corrected principle:** When behavior is governed by organizational policy, the readiness mechanism must read the selected policy source and verify that the applicable requirements are present before applying them. Code may implement the check; it must not silently become the authority.

**Correct outcome:** The endpoint now reads the runtime policy artifact, derives the minimum required comparison fields from the policy text, and only marks claims ready when both the policy basis and extracted observations satisfy the rule.

| 548 | Native-format extraction orchestration and policy-derived readiness implemented | Added a comparison API boundary that reads XLSX, DOCX, HTML, EML, CSV, and SVG runtime artifacts, invokes the live structured extraction model with evidence and claim status, maps extracted claims by line ID, applies the runtime policy source to the minimum readiness rule, and returns provenance plus normalization metadata to the UI. The browser verifier stubs this endpoint to test the UI contract; live-provider execution remains an external integration check. Verification passed: 27/27 deterministic checks, 25/25 browser checks, TypeScript, and production build. |

| 549 | Asset-backed verification layer added | Added `verify:assets` and `docs/ASSET_TEST_MATRIX.md` to execute concrete checks revealed by the finalized asset pack: manifest and served-runtime isolation, RFx PDF fidelity, XLSX/DOCX package readability, five 30-line supplier responses, image evidence, alternate-thread and multi-message fixtures, quality follow-up, FX/policy source presence, commercial evidence preservation, and runtime-freeze integrity. Verification passed 23/23. These checks validate fixture readiness and remain separate from the runtime agent and hidden evaluation set. |

### E-150 — Local TypeScript scope excluded the deployed API function

**When identified:** During the first Vercel production build.

**Incorrect principle applied:** Treat a passing client-only TypeScript configuration as sufficient evidence for a project containing serverless API functions.

**Incorrect outcome:** Local checks passed while Vercel caught syntax/type errors in `api/comparison.ts` during its broader function build.

**Corrected principle:** Verification scope must include every executable deployment surface, not only the files included by the local client compiler. Serverless functions require an explicit API-inclusive type check before deployment.

**Correct outcome:** The malformed schema and implicit API type were fixed, an API-inclusive TypeScript command was run locally, and the subsequent Vercel build completed successfully.

### E-151 — Live model supplier identifiers did not match UI canonical identifiers

**When identified:** During the first successful live-provider response inspection.

**Incorrect principle applied:** Assume the model will preserve application-defined supplier identifiers when the prompt supplies them.

**Incorrect outcome:** The model returned bundle keys such as `kraft` and `pack`; the UI expected canonical supplier names, and provenance lookup returned empty arrays.

**Corrected principle:** AI-generated identifiers must be normalized against an application-owned canonical identity map before they cross the API boundary. Prompt instructions are not a reliable identity contract.

**Correct outcome:** The API now maps model keys to canonical supplier names and returns the corresponding source files. The live response verifies five canonical suppliers with non-empty provenance.

| 550 | Production deployment and live-provider validation passed | Deployed the latest code to `https://aerchain-sourcing-workbench.vercel.app`. Vercel production build completed successfully; the live comparison endpoint returned `live_ai_plus_deterministic_rules`, five canonical suppliers, 30 extracted claims per supplier, non-empty source provenance, policy-backed readiness, and Finance FX metadata. |

### E-152 — Structured line parser dropped disclosed deviation and original follow-up provenance

**When identified:** During semantic validation of the live comparison result.

**Incorrect principle applied:** Assume positional parsing and attachment-level provenance are sufficient when a response package contains follow-up evidence and explicit exception columns.

**Incorrect outcome:** The deviation column was read at the wrong position, so PackRight’s L-15/L-16 policy route disappeared. NexCorrugate’s later lines were attributed to the generated line-item attachment instead of the original follow-up email.

**Corrected principle:** Deterministic parsing must be schema-position verified against the declared header, and claim provenance must prefer the original artifact that explicitly contains the observed line before using a derived attachment.

**Correct outcome:** The parser now maps the declared deviation column correctly and resolves evidence to the original artifact containing each line. The live semantic test confirms both PackRight exclusions and NexCorrugate follow-up provenance.

| 551 | Semantic live-provider audit passed | Added and passed `verify:live` with 9 checks against production. The result confirms five canonical suppliers, 30 extracted claims each, non-empty provenance, follow-up evidence, observed USD, explicit PackRight policy-route exclusions, and Finance FX metadata. `responseReady` is true while `decisionReady` is false because L-15/L-16 remain non-comparable pending approved policy treatment. |

### E-153 — Treating an invitation as one local sent flag

**When identified:** During the pre-deployment audit of the email path.

**Incorrect principle applied:** Treat the UI click and one aggregate `sent` boolean as sufficient representation of an email workflow.

**Incorrect outcome:** The prototype could not show which supplier received the package, which message ID was recorded, what bounced, or how the buyer could retry without manually reconstructing the recipient.

**Corrected principle:** An outbound communication is a per-recipient workflow record. The product must preserve the approved package identity, recipient provenance, message ID, delivery outcome, attempt number, and supplier-specific next action. Plumbing may be stubbed, but the product behavior around the plumbing must be real.

**Correct outcome:** Added an explicit fake-SMTP send endpoint backed by the prepared delivery event, per-supplier delivery rendering, bounce handling, and a prepared alternate-recipient retry for BoxSmith. Durable persistence and a real provider remain production extensions rather than hidden claims of completion.

| 552 | Fake-SMTP invitation path implemented and verified | Added `api/mail/send.ts`; it validates the approved RFx/version and complete recipient set, records subject/body and per-supplier message IDs/outcomes, exposes the prepared BoxSmith alternate-recipient retry, and returns a clear fake-provider provenance marker. Updated browser and contract checks pass for send, delivery, bounce, and retry behavior. |

### E-154 — Browser comparison gate does not yet consume live decision readiness

**When identified:** During the post-deployment comparison audit.

**Incorrect principle applied:** Treat successful line loading as equivalent to the API’s complete decision-readiness result.

**Incorrect outcome:** The live API correctly reports `responseReady: true` but `decisionReady: false` for PackRight’s policy-routed L-15/L-16; the current browser stub and UI gate still use only the line-loading result and can present an award transition without consuming the server-side decision-readiness state.

**Corrected principle:** A user-facing transition must be governed by the authoritative readiness contract for that transition, including policy-routed exceptions—not by a lower-level loading success signal.

**Status:** Resolved in the prototype slice. The comparison loader now rejects a response unless the API reports `decisionReady: true`, including the policy-permitted exception route.

| 553 | Authoritative comparison readiness consumed by the UI | The comparison loader now consumes the API decision-readiness result rather than treating line loading as sufficient. The policy source explicitly permits the prepared PackRight exception route, so the deployed result is `ready-with-policy-exceptions` and the transition may proceed with the warning preserved. |

| 554 | Buyer award approval and record boundary implemented | Added the award commit endpoint and buyer-facing approval section. The recommendation remains AI-generated analysis; the buyer supplies or accepts the rationale and explicitly approves. The endpoint requires the approved RFx version, decision-ready comparison status, valid supplier identity, and non-empty rationale before returning a deterministic award record ID. |

| 555 | Cross-workflow live validation completed for implemented prototype surfaces | Added a deployed live workflow verifier covering intake, relevance, extraction, inbound association, bounded analysis, and award approval. All 6 checks passed against the production deployment. Browser coverage now passes 29/29; deterministic contract coverage passes 31/31; asset coverage remains 23/23. Remaining traceability rows stay explicitly Planned/Blocked where implementation or production infrastructure is absent. |

| 556 | RFx intake now receives authorized source grounding | The live intake call now passes the selected policy, historical template, current schedule, and supporting specification through an allowlisted runtime source boundary. The AI is instructed to map template semantics and policy requirements, surface conflicts, and preserve missing information rather than generating an ungrounded RFx. |

| 557 | Prototype retrieval, response versioning, and criteria-impact mechanisms added | Runtime repository search now returns source-scoped content and provenance; response-state records preserve message versions and hashes; criteria checks identify policy conflicts and approval requirements. These are prototype mechanisms and do not claim durable production persistence. |

| 558 | Expanded deployed workflow verification passed | Expanded `verify:workflow` from 6 to 9 checks. The deployed result passes live intake, relevance, extraction, inbound association, bounded analysis, award approval, authorized repository retrieval, response version increment/original preservation, and criteria policy-conflict/approval handling. |

| 559 | Final prototype audit gate passed | Latest Vercel deployment is Ready. Final verification passed: 35/35 deterministic checks, 23/23 asset checks, 29/29 browser journey checks, 9/9 live comparison checks, and 9/9 expanded live workflow checks. Cross-synthesis may proceed for the prototype; durable multi-user storage, real provider webhooks, and production OCR remain explicitly documented extensions. |

### E-160 — Source grounding treated office files as plain text

**When identified:** During cross-synthesis of the intake source contract, runtime assets, and live AI boundary.

**Incorrect principle applied:** Treat every authorized source as if its file bytes could be passed to the model as meaningful UTF-8 text.

**Incorrect outcome:** The historical XLSX RFx template was authorized but its field semantics were not actually available to intake reasoning.

**Corrected principle:** Authorization and semantic readability are separate conditions. Each supported source type needs a bounded extraction adapter before its contents can ground AI behavior, with source status preserved.

**Correct outcome:** XLSX and DOCX runtime sources are now decoded through a bounded office-text adapter before inclusion in the live intake grounding context.

### E-161 — Runtime supplier cardinality was not reconciled with the comparison UI

**When identified:** During cross-synthesis of the five-supplier asset contract and evaluation screen.

**Incorrect principle applied:** Validate the supplier count in the data and asset layers without checking that the same cardinality is rendered in the user-facing comparison.

**Incorrect outcome:** Five supplier responses existed, but the comparison grid displayed only four supplier columns, making the user-facing comparison incomplete.

**Corrected principle:** Every cardinality in an approved workflow contract must be traced end to end: source assets, extraction result, state model, rendering, and verification.

**Correct outcome:** GreenFold is now rendered as the fifth supplier, the grid uses five supplier columns, and browser verification asserts the fifth column and 30 corresponding cells.

### E-162 — Award analysis was not bound to the authoritative comparison claims

**When identified:** During cross-synthesis of the evaluation-to-award transition.

**Incorrect principle applied:** Treat supplier summaries and line counts as sufficient context for a natural-language analysis request.

**Incorrect outcome:** The award chat could receive too little evidence to answer questions about actual line-level offers, provenance, or trade-offs.

**Corrected principle:** A reasoning action must receive the authoritative decision object for the question it answers, not a UI summary of that object.

**Correct outcome:** The analysis client refreshes the comparison payload before posting the question, and browser verification confirms that extracted claims reach the analysis request.

### E-163 — Award readiness was trusted from the client

**When identified:** During cross-synthesis of the comparison gate, policy exception route, and award commit.

**Incorrect principle applied:** Treat a client-provided readiness label as sufficient authorization for a consequential state change.

**Incorrect outcome:** A caller could claim ready-with-policy-exceptions without the server verifying that the active policy permitted that treatment.

**Corrected principle:** Consequential transitions must re-check their authoritative prerequisites at the transition boundary; UI gating is not authorization.

**Correct outcome:** The award endpoint reads the runtime policy and accepts the exception status only when the policy explicitly permits it.

| 560 | Cross-synthesis corrections implemented and live-validated | Reconciled source readability, five-supplier rendering, authoritative analysis context, and server-side policy readiness. Deterministic checks pass 37/37, asset checks 23/23, browser checks 31/31, live comparison checks 9/9, and expanded workflow checks 9/9 against the latest Ready Vercel deployment. Production OCR and durable provider infrastructure remain explicitly scoped extensions. |

### E-164 — Leaving contract rows ambiguously open after implementation

**When identified:** During review of the prototype handoff after cross-synthesis.

**Incorrect principle applied:** Treat aggregate suite totals and a generally passing prototype as sufficient while leaving individual traceability rows marked Planned.

**Incorrect outcome:** The traceability matrix contradicted the implementation and verification records, making it unclear what remained for the prototype and what was only a production extension.

**Corrected principle:** Every contract row must be closed individually with an evidence-backed prototype disposition or an explicit not-implemented/production-scope disposition. No row may remain implicitly open.

**Correct outcome:** All rows in CONTRACT_TEST_TRACEABILITY.md now have explicit dispositions. Criteria override is identified as intentionally disabled for the demo; prepared adapters are distinguished from production OCR; and the matrix is closed for the prototype boundary.

| 561 | Prototype contract matrix closed | Reconciled all 35 contract rows against executed deterministic, asset, browser, and live evidence. No row remains Planned. The prototype boundary is closed; criteria override, durable persistence, live inbox/provider integrations, real SMTP, and production OCR remain explicitly scoped extensions. |

| 562 | v2 redesign and redevelopment deployed | Rebuilt the product surface in a clean v2 boundary after rejecting the prior implementation. The new journey is landing → gated Stage 1 source confirmation and RFx approval → supplier invitation → live response completeness → comparison analysis and award approval. v2 verification passes TypeScript, production build, 37/37 contract checks, 23/23 asset checks, 25/25 browser checks, 9/9 live comparison checks, and 9/9 expanded workflow checks against the Ready Vercel deployment. |

### E-167 — v2 hero used superseded copy instead of approved copy

**When identified:** During review of the rebuilt v2 landing page.

**Incorrect principle applied:** Reuse an earlier plausible copy decision from the ledger instead of resolving the current approved landing-page hero contract before implementation.

**Incorrect outcome:** The v2 landing page displayed “Move quickly and safely when your job is on the line.” even though the approved hero headline was “Move quickly. Decide safely. Defend every award.”

**Corrected principle:** Current approved copy is binding. Superseded copy, even if it expresses a related idea, must not cross into implementation. Copy must be verified against the active contract before the screen is considered complete.

**Required correction:** Replace the v2 hero with the approved hero content and add a direct contract check for the exact approved headline and supporting hero content before redeployment.

### 168 | Active-contract-only implementation principle approved

The product must be built as a fresh implementation from the latest approved contract set only. Historical, superseded, corrective, and implementation-generated material must not be treated as product requirements. Every screen, copy string, control, state, AI behavior, deterministic mechanism, artifact, transition, and test must reference an active approved contract. Missing contract detail is a blocking specification gap, not permission to invent behavior. The current implementation is not a source of truth.

### E-169 — Active-contract enforcement was incorrectly limited to UI and copy

**When identified:** During the fresh-build implementation after the active-contract-only principle was approved.

**Incorrect principle applied:** Treat the active contract pack as a control for the visible interface and copy while allowing the existing product data model, AI behaviors, deterministic mechanisms, assets, transitions, and tests to remain implicit or inherited.

**Incorrect outcome:** The implementation could still diverge from approved decisions across the rest of the product even when the landing copy was contract-backed. The fresh-build claim was therefore incomplete and the resulting Vercel deployment is not a final contract-compliant product.

**Corrected principle:** The latest approved decisions and contracts govern the entire product. The active contract pack must cover and bind product behavior, data/state, AI behavior, deterministic mechanisms, UI/UX, copy, demo assets, transitions, tests, and deployment verification. No subsystem may be inherited or invented silently.

**Required correction:** Rebuild the active contract pack as a whole-product specification, then implement and verify every subsystem against it. The current deployment remains an interim build and must not be presented as complete.

### E-165 — Redevelopment plan was incorrectly centered on the asset pack

**When identified:** During review of the proposed restart plan after the prototype was rejected.

**Incorrect principle applied:** Let the existence of prepared demo assets determine the structure and priority of the redevelopment plan.

**Incorrect outcome:** The plan overemphasized auditing and reusing assets instead of clearly leading with the product redesign, user journey, behavior contracts, and redevelopment of the failed implementation.

**Corrected principle:** In a product rebuild, the product’s real-world user outcome and approved behavior contracts determine the design and implementation. Assets are supporting inputs and must neither anchor nor be discarded by default.

**Correct outcome:** The redevelopment plan now starts by freezing the failed implementation, re-establishing the product source of truth, redesigning the user journey, and building atomic vertical slices. Existing assets are considered only within that product-led process.

### E-166 — Implemented the wrong product despite approved decisions and contracts

**When identified:** During the user’s review of the deployed prototype after the contract and decision process was declared complete.

**Incorrect principle applied:** Treat the approved decisions and atomic contracts as background guidance while retaining discretion to invent implementation details, copy, interactions, and functional scope.

**Incorrect outcome:** The deployed prototype diverged from the product that had been reviewed and approved. It contained invented copy, missing or incomplete functionality, and user journeys that did not faithfully realize the approved real-world procurement outcomes. The extensive approval process therefore did not constrain implementation as intended.

**Corrected principle:** Approved decisions and atomic contracts are the binding product specification. Implementation has no discretion to replace, reinterpret, omit, or supplement them silently. Before code is written, every contract must be mapped to a concrete UI behavior, state transition, AI or deterministic mechanism, artifact, and verification assertion. Any gap or contradiction must stop implementation and return for review.

**Required implementation consequence:** The current prototype is rejected as an implementation baseline. The product must be redesigned and redeveloped from the approved source of truth, with contract-level acceptance gates applied before each vertical slice and before any completion claim.

### E-170 — Recording approved decisions as lossy summaries

**When identified:** During review of the clean restart after the implementation reverted to an earlier workflow-copy version.

**Incorrect principle applied:** Treat a concise decision-ledger row as a narrative summary that can be freely reconstructed from memory, related documents, or earlier conversation.

**Incorrect outcome:** The expanded decision view approved during review was not faithfully recoverable from the ledger. Implementation therefore used stale wording and could silently lose approved scope, behavior, boundaries, responsibilities, dependencies, and verification requirements.

**Why it was wrong:** The ledger is the only source of truth. If its concise representation is lossy, the approval record cannot reliably govern implementation or regenerate the approved expanded view.

**Corrected principle:** Every concise ledger entry must be a lossless, structured canonical record from which the approved expanded decision/contract view can be deterministically regenerated. The expanded view may improve presentation but must not add meaning. If required detail cannot be regenerated, the decision is incomplete and implementation is blocked.

**Correct outcome:** The decision ledger becomes the sole implementation authority. Contract views, implementation mappings, tests, and verification assets are derived from ledger fields and trace back to stable decision IDs. Historical summaries and reconstructed documents cannot override it.

| 563 | Lossless decision-ledger principle approved | The decision ledger must preserve enough structured information to deterministically regenerate each approved expanded decision and contract view, including principle, objective, boundary, behavior, responsibilities, mechanisms, guardrails, state transitions, artifacts, dependencies, and verification criteria. A missing field blocks implementation until the ledger is corrected and approved. |

### E-171 — Treating atomic ledger decisions as complete implementation specifications

**When identified:** During definition of the clean-build implementation index.

**Incorrect principle applied:** Map each implementation group to individual approved decisions or contracts and assume that the selected rows reveal the complete product behavior.

**Incorrect outcome:** An implementation group could omit related objectives, boundaries, responsibilities, mechanisms, guardrails, states, dependencies, tests, or later corrections that were approved in separate atomic decisions.

**Why it was wrong:** Atomicity improves review focus; it does not mean an atomic decision is independently sufficient for implementation. Complete implementation meaning emerges from related decisions and their dependencies.

**Corrected principle:** Treat each ledger decision as an atomic fact, but reconstruct every implementation requirement from the complete dependency closure of related approved decisions. Apply corrections and supersession chronologically, preserve source IDs, and block when the closure is incomplete or contradictory.

**Correct outcome:** The implementation index is a derived dependency map. Each product area links to all relevant ledger decisions across outcome, behavior, UI, AI, deterministic mechanisms, data/state, guardrails, assets, tests, and deployment. No group is implemented from an isolated row or from memory.

| 564 | Dependency-closure implementation principle approved | An implementation area must be reconstructed from the complete dependency closure of related approved ledger decisions, not from an isolated decision or contract. The derived view must preserve source IDs, corrections, supersession, cross-area dependencies, and unresolved gaps. |

### E-172 — Mapping implementation requirements to stale ledger decisions

**When identified:** During reconstruction of the landing/product-entry dependency closure.

**Incorrect principle applied:** Map a requirement to the first or most semantically similar ledger entry, while treating later conversation corrections and related ledger entries as separate context.

**Incorrect outcome:** The landing closure selected earlier workflow copy decisions even though later approved wording had changed the language. The implementation mapping therefore pointed to stale decisions and allowed conversation-derived content to enter the product without a corresponding current ledger decision.

**Why it was wrong:** The ledger is chronological and append-only. Corrections do not merely add context; they change the effective decision. A mapping is valid only after resolving the full decision lineage: related decisions, corrections, supersession, approval status, and dependencies.

**Corrected principle:** Resolve every implementation requirement through its complete approved decision lineage. Start with all candidate ledger entries, apply explicit corrections and supersession in chronological order, exclude rejected or superseded outcomes, and use only the latest approved effective decision. If a later approved conversation decision has not been recorded in the ledger, stop and record it before mapping or implementation.

**Correct outcome:** Each implementation mapping stores the effective ledger decision IDs and their superseded predecessors. No semantic similarity, summary document, memory, or conversation text can override the effective ledger lineage.

| 565 | Decision-lineage mapping principle approved | Implementation mapping must resolve the complete chronological lineage of each requirement, including related decisions, corrections, supersession, approval state, dependencies, and effective outcome. Only the latest approved effective decision may govern implementation; an unrecorded later approval is a blocking ledger gap. |

### E-173 — Leaving an approved copy correction outside the ledger lineage

**When identified:** During the landing dependency-closure reconstruction.

**Incorrect principle applied:** Treat a later approved wording correction as implementation context while leaving the earlier wording as the ledger’s effective decision.

**Incorrect outcome:** The active implementation view contained later wording that could not be justified from the ledger, while the ledger still presented earlier wording as current.

**Corrected principle:** An approved correction changes the effective decision only after it is recorded as a chronological ledger entry linked to the decision it supersedes. Until then, the requirement is unresolved and implementation is blocked.

**Correct outcome:** The landing workflow copy below is recorded as the effective approved wording and supersedes decisions 238–242 where wording differs.

| 566 | Effective landing workflow copy approved | The workflow section introduces Aera as the AI Sourcing Agent. Step 1: “Shapes the business need, policy, and past RFxs into an RFx you can review and approve.” Step 2: “Finds the right supplier contacts, prepares the invitation, and tracks delivery of the approved RFx.” Step 3: “Turns every supplier reply into one side-by-side comparison.” Step 4: “Makes and helps you defend the award with clear trade-offs and evidence.” |

### E-174 — Requiring reapproval of already approved ledger decisions

**When identified:** When defining the next step after the landing dependency closure was reconstructed.

**Incorrect principle applied:** Treat a ledger-derived implementation closure as a new decision package that must be returned to the user for approval, even when its underlying decisions and contracts are already approved in the ledger.

**Incorrect outcome:** The process created unnecessary cognitive load and an approval loop. It implied that the user needed to reapprove decisions already approved and recorded.

**Why it was wrong:** The purpose of dependency reconstruction is faithful execution of existing decisions, not reopening them. Reapproval is required only when reconstruction exposes a genuinely missing, ambiguous, contradictory, or unrecorded requirement.

**Corrected principle:** Approved ledger decisions are executable authority. Derive implementation closures from their complete decision lineage and proceed without reapproval. Stop and request review only for an actual unresolved ledger gap or contradiction; do not ask the user to approve a faithful restatement.

**Correct outcome:** The landing closure will be derived, mapped, and implemented from the effective ledger decisions. The user reviews only newly surfaced decision gaps, not the derived implementation view itself.

| 567 | Approved decisions are executable authority | Once a decision or contract is explicitly approved and recorded in the ledger, dependent implementation work may derive and execute its complete closure without reapproval. Only a missing, ambiguous, contradictory, or unrecorded requirement returns to decision review. |

| 568 | Effective landing pain and relief copy | The landing pain is “Building an RFx takes time. Suppliers don’t follow your format. Justifying the award is hardest of all.” The relief is “Get an RFx in a couple of clicks, a supplier comparison that doesn’t break your head, and an award you can explain with confidence.” |

| 569 | Landing hero and burden/relief framing corrected | Remove the invented `01—04` side callout and the `THE SOURCING BURDEN` / `THE RELIEF` labels. The hero supporting line is “An AI sourcing co-pilot to help you move from business need to award decision.” The hero includes the approved demo CTA `Amaze me`. The approved pain and relief lines remain visible without invented framing titles. |

| 570 | Landing pain-to-relief parallel tracks approved | Represent the landing pain and relief as two parallel tracks headed `Without Aera` and `With Aera`, with three aligned sections: `Building an RFx takes time.` → `Get an RFx in a couple of clicks.`; `Supplier responses that break your head` → `The comparison table you've always wanted`; `Scramble for the evidence to justify the award` → `An award packet waiting to be opened`. Preserve the supplied wording exactly. |

| 571 | Landing bottom CTA updated | The bottom guided-demo CTA is `Experience the magic`. This replaces the earlier `Amaze me` CTA for the bottom landing section only. |

| 572 | Landing hero wording and comparison-track styling corrected | The hero supporting line is `Aera, our AI sourcing agent helps you move from business need to award decision.` The `Without Aera` and `With Aera` track headings and their three rows use matched font size, weight, color, spacing, and alignment so the comparison reads as one deliberate structure. |

### E-176 — Applying a bottom-CTA correction to the hero CTA

**When identified:** During review of the landing page after the bottom CTA was changed to `Experience the magic`.

**Incorrect principle applied:** Model repeated copy by shared text value rather than by its exact placement and approved scope.

**Incorrect outcome:** The hero CTA changed from `Amaze me` even though only the bottom guided-demo CTA had been corrected.

**Corrected principle:** Copy decisions are scoped to their exact location, user action, and state. A local correction must not propagate to another placement unless that propagation is explicitly approved.

**Correct outcome:** The hero CTA is `Amaze me`; the bottom guided-demo CTA is `Experience the magic`.

| 573 | Landing CTA placement scope corrected | Store and render separate CTA values for the hero and bottom guided-demo section. Hero: `Amaze me`. Bottom: `Experience the magic`. A correction to one placement cannot change the other. |

### E-177 — Using landing workflow copy as the Stage 2 screen objective

**When identified:** During review of the Invite suppliers screen against the approved Stage 2 contract.

**Incorrect principle applied:** Reuse the concise landing workflow description as the screen’s heading and assume it fully represents the screen’s tangible objective.

**Incorrect outcome:** The Stage 2 screen heading focused on sending to “the right suppliers” but did not clearly express confirmed recipients, controlled sending, and a delivery outcome for each invitation.

**Why it was wrong:** Landing copy explains the product at overview level. A workflow screen must orient the buyer to the complete real-world outcome of that stage.

**Corrected principle:** Keep overview copy and screen-objective copy distinct. Derive each screen heading and supporting line from that screen’s approved tangible outcome, while retaining the approved landing copy in the landing section.

**Correct outcome:** Stage 2 is presented as sending the approved RFx to confirmed suppliers and tracking the delivery outcome for each invitation; recipient discovery, message preparation, package review, sending, and delivery remain visible within the screen flow.

| 574 | Stage 2 screen objective copy corrected | Screen heading: `Send the approved RFx to confirmed suppliers and track delivery.` Supporting copy must orient the buyer to confirmed recipients, the complete invitation package, explicit sending, and per-supplier delivery outcomes. Landing overview copy remains separately governed by Decision 566. |

| 575 | Landing hero CTA updated | The hero CTA is `Try Me`. The bottom guided-demo CTA remains `Experience the magic`; the two placement-specific decisions remain independent. |

### E-178 — Searching the ledger by stage label instead of decision lineage

**When identified:** During review of the Stage 2 copy assessment after the revised supplier-response completeness objective was raised.

**Incorrect principle applied:** Search for the current requirement only under the literal user-facing stage label and stop after finding the first matching stage block.

**Incorrect outcome:** The Stage 2 copy assessment used the earlier supplier-invitation objective and failed to account for later approved decisions concerning supplier-response completeness, multi-message follow-up, response states, and cross-screen transition effects.

**Why it was wrong:** Stage labels and boundaries can be revised. A later decision may redefine an objective or affect a stage without repeating the original label. Requirements must be retrieved by outcome, concepts, dependencies, corrections, and cross-stage impact—not by exact heading alone.

**Corrected principle:** For every implementation question, search the complete decision lineage by stage, outcome, actors, artifacts, state names, dependencies, corrections, and affected screens. Reconcile all relevant entries chronologically before assessing or implementing the requirement.

**Correct outcome:** Stage 2 copy and behavior will be reassessed against the full effective supplier-completeness lineage, including decisions 490–501 and all later corrections, before any further copy judgment or implementation change.

| 576 | Cross-label lineage retrieval approved | Requirement retrieval must follow concepts, outcomes, dependencies, corrections, and affected stages across the entire ledger. Literal stage-label matching is insufficient when workflow boundaries or objectives have changed. |

| 577 | Effective supplier-completeness screen mapping corrected | The user-facing second workflow outcome is governed by the approved supplier-completeness lineage: heading `Close the gaps in supplier responses.`; supporting line `Get each response ready for a fair comparison.`; landing capability `Closes the gaps in supplier responses before comparison.` Supplier discovery, invitation, follow-up, reply association, attachment handling, and retry are internal mechanisms within this outcome, not the user-facing stage title. |

### E-179 — Applying the response-completeness objective to the landing Step 02 copy

**When identified:** During landing-page closure.

**Incorrect principle applied:** Apply a later workflow-screen objective correction to the landing workflow overview without respecting the approved copy scope for that overview.

**Incorrect outcome:** Landing Step 02 was changed from the approved supplier-invitation description to response-completeness language, and the later screen correction was pulled into the landing implementation prematurely.

**Corrected principle:** Implement only the requested surface and scope. The landing workflow overview and the later workflow screen may have different approved copy and objectives. A correction to one must not propagate to the other without explicit approval.

**Correct outcome:** Landing Step 02 and its corresponding navigation label use `Invite suppliers` and `Finds the right supplier contacts, prepares the invitation, and tracks delivery of the approved RFx.` The response-completeness objective remains scoped to its approved later workflow screen.

| 578 | Landing Step 02 copy scope restored | The landing workflow Step 02 is `Invite suppliers` with copy `Finds the right supplier contacts, prepares the invitation, and tracks delivery of the approved RFx.` The top navigation label is `Invite suppliers`. Hero CTA remains `Try Me`. |

### E-180 — Reverting to superseded Stage 2 copy after an approved objective correction

**When identified:** During review of the Stage 2 copy after the landing-page correction.

**Incorrect principle applied:** Treat an earlier stage-label decision as current after a later approved objective correction had changed the effective user-facing outcome.

**Incorrect outcome:** Stage 2 was restored to `Invite suppliers` even though the effective approved direction is to close supplier-response gaps and prepare each response for fair comparison.

**Why it was wrong:** The later approved objective governs all Stage 2-facing labels and copy. Earlier invitation language describes an internal mechanism, not the current user-facing outcome.

**Corrected principle:** Resolve the effective decision lineage before every localized copy change. A superseded stage objective must not be reintroduced into any placement.

**Correct outcome:** Stage 2 is consistently presented as closing supplier-response gaps and getting each response ready for a fair comparison across the landing section, navigation, and screen.

| 579 | Effective Stage 2 copy restored | Stage 2 heading: `Close the gaps in supplier responses.` Supporting line: `Get each response ready for a fair comparison.` Landing and top-navigation Stage 2 presentation use the same effective outcome. Supplier invitations, follow-ups, replies, and attachments remain mechanisms within it. |

| 580 | Stage 2 lock-responses copy updated | Landing Step 02 is `Lock all supplier responses` with `See the complete history with each supplier, track and close the open points.` Top navigation is `Lock responses`. Stage 2 supporting copy is `Get each supplier response ready for comparison.` This supersedes the immediately prior Stage 2-facing copy while preserving the underlying completeness objective. |

| 581 | Compare-responses label updated | Replace the user-facing `Evaluate responses` label with `Compare responses` in the landing workflow, top navigation, and response-comparison screen heading. The underlying approved comparison behavior and supporting copy remain unchanged. |

### E-181 — Collapsing Screen 2 mapping into implementation

**When identified:** When the work moved from the frozen landing page to Screen 2.

**Incorrect principle applied:** Treat a request to proceed with a screen as permission to jump from a task list directly into implementation, without first reconstructing the screen’s complete effective decision lineage and dependency map.

**Incorrect outcome:** The implementation could be driven by provisional code or partial contracts instead of the approved Screen 2 objective, flow, evidence requirements, state gates, AI behavior, deterministic mechanisms, assets, and tests.

**Why it was wrong:** The approved contracts are the product specification. A screen cannot be implemented faithfully until its complete cross-layer mapping is explicit. “What needs to be done” is not the same artifact as “what the product must do and how every approved decision maps into it.”

**Corrected principle:** Every screen follows strict phases: (1) reconstruct the complete effective ledger lineage and dependency closure; (2) produce the screen implementation map across experience, data/state, AI, deterministic behavior, assets, tests, and transitions; (3) implement only from that map; and (4) verify and freeze the screen before moving on. “Proceed” advances the current phase; it does not authorize skipping phases.

**Correct outcome:** Screen 2 mapping is completed before any Screen 2 code is written. Screen 1 remains frozen and is not reopened unless a genuine dependency conflict is found.

| 582 | Screen 2 mapping gate approved | Screen 2 must be mapped from the effective decision ledger before implementation. The map must cover the approved user outcome, atomic flow, layout, copy, data/state, AI behavior, deterministic mechanisms, runtime assets, tests, handoffs, and unresolved genuine gaps. Faithful derived mapping does not require another approval; implementation begins only after the map is complete. |

### E-182 — Serverless API module failed only at live invocation

**When identified:** When the buyer clicked `Generate RFx draft` on the deployed Screen 2.

**Incorrect principle applied:** Assume that a successful local TypeScript/Vite build proves that Vercel’s serverless module loading and request/response runtime are compatible.

**Incorrect outcome:** The deployed API function crashed before returning JSON, and the browser surfaced the misleading parser error `Unexpected token 'A'` because it attempted to parse Vercel’s plain-text `FUNCTION_INVOCATION_FAILED` response.

**Why it was wrong:** Local compilation validates source syntax, not the deployed serverless boundary. Runtime module resolution, Node runtime configuration, request parsing, response serialization, and non-JSON failure handling require direct live verification.

**Corrected principle:** Treat each deployed API boundary as a separately verifiable runtime contract. Use deployment-compatible module resolution and Node behavior, return JSON through native response handling, parse request bodies defensively, and make the client handle non-JSON platform failures without masking the actual boundary status.

**Correct outcome:** The handlers use explicit ESM imports, the supported Vercel Node runtime, defensive request parsing, native JSON responses, and structured AI-output handling. The live intake and mail endpoints now return valid JSON.

| 583 | Live API boundary correction verified | The deployed `/api/intake` endpoint returns a real AI-generated RFx JSON response and `/api/mail/send` returns valid JSON; local build, contract, prototype, and live endpoint checks pass. |

### E-183 — Treating Screen 2 actions as separate UI sections

**When identified:** During review of the implemented Screen 2 workspace.

**Incorrect principle applied:** Represent generation and approval as separate boxes and use a persistent evidence panel as part of the primary task layout, even though the buyer’s task is one stateful progression from procurement ask to approved RFx.

**Incorrect outcome:** The screen introduced irrelevant layout and duplicated the user’s primary action across separate areas, making the transition sequence harder to understand.

**Corrected principle:** When a workflow contract defines a stateful progression within one user outcome, place the current transition action in the artifact section that owns the outcome. Keep one primary action whose label and availability change with state. A disabled transition remains inspectable and explains its specific blocking condition; it must not show a generic state error.

| 584 | Screen 2 single-action state model approved | The procurement-ask box owns one stateful action: `Confirm Procurement Ask` → `Generate draft RFx` → `Approve RFx`. Generate requires confirmation of the ask; approval requires a ready RFx with no unresolved blocking treatment. The right evidence panel and separate generation box are removed. Sources remain viewable in their own section, and disabled actions expose the specific condition preventing the transition. |

| 585 | Screen 2 implementation frozen | Screen 2 is frozen as the single `Create and approve RFx` workspace with one stateful action in the procurement-ask box, viewable sources, section-level RFx review, issue treatment, automatic readiness, and one `Approve RFx` transition. Its local build, contract, asset, prototype, and live API checks passed. No Screen 3 work is included in this freeze. |

### E-184 — Verification script retained superseded Screen 3 actions

**When identified:** During implementation verification for Screen 3.

**Incorrect principle applied:** Treat the existing verification script as stable truth after the approved Screen 3 objective and UI had changed.

**Incorrect outcome:** The verifier required invitation-first actions (`Send invitation`, `Read supplier responses`) and failed the implementation even though the new response-completeness surface correctly exposed the approved Screen 3 actions.

**Corrected principle:** Verification assets are derived from the effective contracts and must be updated when a user-facing outcome or action changes. A test that encodes superseded behavior is a defect, not a valid product failure.

| 586 | Screen 3 map completed | Screen 3 is mapped as the `Lock responses` workspace: response overview, supplier detail/history, evidence and extraction, targeted buyer-approved follow-up, delivery/retry history, supplier-level resolved outcomes, and the aggregate `Continue to comparison` gate. The map is recorded in `docs/SCREEN_3_IMPLEMENTATION_MAP.md`; coding follows the map. |

| 587 | Screen 2 blocked-approval feedback behavior simplified | When `Approve RFx` is unavailable because open issue treatments remain, Screen 2 shows the specific reason as inline subtext in the procurement-ask box. It does not open a duplicate error popup. |

| 588 | Screen 3 blocked-transition feedback simplified | When `Continue to comparison` is unavailable because supplier responses remain unresolved, Screen 3 shows the specific aggregate blocking condition in the response gate. It does not open a duplicate error popup. |

### E-185 — Disabling blocker-resolving follow-up actions in the demo

**When identified:** During review of the Screen 3 response-completeness workspace.

**Incorrect principle applied:** Treat a buyer-approved follow-up as an optional demo convenience and disable it while still using unresolved follow-ups as the reason that comparison is blocked.

**Incorrect outcome:** The buyer could see the blocker but could not approve the action intended to resolve it, making the guided flow internally inconsistent and preventing progress toward completeness.

**Corrected principle:** A buyer action required to resolve an active workflow blocker must remain available when the contract permits it. The system may keep the downstream transition blocked while the action is pending, but it must not disable the resolution action itself.

| 589 | Screen 3 blocker-resolution action enabled | `Approve follow-up` is available for unresolved supplier conditions. Approval records the follow-up as sent and leaves the supplier unresolved until a reply or attachment is reassessed. The comparison transition remains blocked until the supplier reaches a resolved outcome. |

### E-186 — Blocked transitions did not lead to the actionable blocker

**When identified:** During review of blocked `Approve RFx` and `Continue to comparison` interactions.

**Incorrect principle applied:** Show the blocking condition inline but leave the buyer at the transition control, requiring them to find the issue manually.

**Incorrect outcome:** The buyer could understand why the action was unavailable but could not be taken directly to the issue section that needed attention, adding avoidable navigation effort to a blocked workflow.

**Corrected principle:** A blocked transition must provide a direct path to the first actionable blocker. The destination must select or expose the relevant issue, while the specific reason remains visible inline; do not add a duplicate error popup.

| 590 | Blocked actions navigate to actionable blockers | On Screen 2, clicking blocked `Approve RFx` scrolls to `Issues and assumptions`. On Screen 3, clicking blocked `Continue to comparison` selects the first supplier with unresolved open points and scrolls to `Open points`. The inline blocker explanation remains the source of truth. |

| 591 | Blocker sections repeat their owning transition action | Screen 2 repeats `Approve RFx` below `Issues and assumptions`; Screen 3 repeats `Continue to comparison` below `Open points`. Both buttons use the same readiness rules as their top-of-screen counterparts, so resolving a blocker does not require the buyer to navigate back to the top. |

### E-187 — Follow-up approval had no demo reassessment transition

**When identified:** During live review of the three BoxSmith open points on Screen 3.

**Incorrect principle applied:** Model the buyer’s follow-up approval as a terminal UI action that only changes the status to “sent,” without exposing the prepared incoming reply and reassessing it.

**Incorrect outcome:** The guided demo left the buyer stuck with the same open points even after approving every available follow-up.

**Corrected principle:** Every blocker-resolution action must have a represented next state. In the guided demo, buyer-approved follow-up uses the prepared supplier reply as newly available evidence and immediately invokes the real AI reassessment; the supplier is closed only if the reassessment evidence supports closure.

| 592 | Follow-up approval triggers real reassessment | `Approve follow-up` records the buyer approval, makes the prepared reply/attachment the next response version, and invokes the live completeness agent with reassessment context. Open points remain visible if the new evidence does not resolve them; the comparison gate remains governed by the returned supplier outcomes. |

### E-188 — React click event serialized into AI request

**When identified:** During live Screen 3 review when clicking `Review supplier responses`.

**Incorrect principle applied:** Change a callback from a no-argument action to an optional-argument action without preserving the UI event boundary.

**Incorrect outcome:** The button’s circular click event was interpreted as reassessment input and serialization failed with an `HTMLButtonElement` circular-structure error before the completeness request reached the server.

**Corrected principle:** UI event handlers must explicitly separate browser events from workflow parameters. A user click invokes the action with a deliberate boolean state; event objects never enter agent or API payloads.

| 593 | Screen 3 review click payload corrected | Reassessment is enabled only by an explicit boolean; ordinary `Review supplier responses` and `Recheck all responses` clicks cannot serialize the React event object into the completeness request. |

### E-189 — Screen 3 used a different blocker-resolution interaction from Screen 2

**When identified:** During live review of Screen 3 open points that remained unresolved after follow-up actions.

**Incorrect principle applied:** Preserve a separate follow-up/reassessment interaction even though the guided demo’s blocker resolution needed to be directly actionable and consistent with Screen 2.

**Incorrect outcome:** The buyer saw open points and follow-up controls but could not confirm the treatment and immediately see readiness advance in the same workspace.

**Corrected principle:** Within the guided demo, equivalent blocker-resolution surfaces must use the same interaction grammar: show the issue, provide one explicit confirmation action, update the issue state, and recalculate the owning transition gate. Preserve evidence and history; do not require navigation or an unrepresented intermediate state.

| 594 | Screen 3 blocker resolution aligned to Screen 2 | Each Screen 3 open point now has `Confirm treatment`. Confirming it removes only that point, records the buyer confirmation in response history, updates the supplier state when its points are exhausted, and recalculates the aggregate comparison gate. |

| 595 | Screen 3 entry and blocker identity corrected | Entering Screen 3 resets the viewport to the top-level response workspace. The approved Screen 3 heading/support copy is retained. The open-points heading includes the selected supplier name so the buyer can distinguish conditions across suppliers. |

### E-190 — Collapsing Screen 3 into response completeness omitted the visible supplier-workflow sequence

**When identified:** During review of the live Screen 3 experience.

**Incorrect principle applied:** Treat the user-facing outcome as sufficient representation of the screen and collapse the activities that produce it into internal mechanisms.

**Incorrect outcome:** The buyer entered directly into supplier-response review. The prototype did not present the complete guided sequence: connect supplier sources, review supplier contacts and the approved RFx/message package, send the invitation, receive supplier responses, evaluate them, and continue the evidence-backed back-and-forth until each relevant supplier response reaches a resolved outcome.

**Why it was wrong:** The assignment requires the AI sourcing agent to operate across the real supplier interaction loop. In a guided demo, the buyer must be able to see and understand that loop, even when the prepared demo data makes each input available immediately. The final completeness outcome does not replace the workflow that creates it.

**Corrected principle:** Model each user-facing screen as an end-to-end work surface when the buyer must inspect, approve, or trigger multiple linked activities on that surface. Preserve the outcome-led purpose, but expose the consequential sequence and its state transitions in the UI. A mechanism may remain subordinate to the outcome without being hidden from the buyer when it is part of the buyer’s real work.

| 596 | Screen 3 scope correction required | Rework Screen 3 as the supplier-source-to-complete-response workspace: connect or select supplier sources; review supplier contacts, RFx, and invitation message; send the approved package; register incoming responses in any supported shape; evaluate response completeness and provenance; surface and resolve open points through buyer-approved back-and-forth; and permit transition only when the approved completeness contract is satisfied. The current direct-entry response-review implementation is not the final Screen 3 contract. |

| 597 | Screen 3 partial-resolution CTA corrected | A supplier-level section must not show `Continue to comparison` while another in-scope supplier remains unresolved. Until the aggregate gate passes, the section action is `Review remaining supplier issues` and routes to the next unresolved supplier. `Continue to comparison` appears as the actionable transition only after the last issue for the last supplier is resolved. |

### E-191 — Asking for re-approval of an already approved Screen 4 contract

**When identified:** When preparing to proceed from Screen 3 into Screen 4 implementation.

**Incorrect principle applied:** Treat a derived implementation map as a new product decision requiring fresh user approval, instead of reconstructing the effective contract from the approved decision ledger.

**Incorrect outcome:** The user was asked to review and approve Screen 4 requirements that had already been approved through decisions 323–327, 337, 388–391, 500, and related transition decisions.

**Corrected principle:** The decision ledger is the implementation authority. Once the relevant decisions and contracts are approved, implementation work must derive and map them without reopening approval. User review is required only when a genuinely new decision, conflict, or unresolved interpretation is discovered.

| 598 | Screen 4 proceeds from approved ledger authority | Screen 4 implementation must be derived from the approved comparison, analysis, readiness, acknowledgment, and Screen 3–4 transition contracts. No fresh approval is required for that derived implementation map. |

| 599 | Screen 4 comparison workspace implemented | Replaced the prior comparison surface with a ledger-derived `Compare responses` workspace: readiness status, side-by-side supplier comparison, visible warnings, analysis-only chat, explicit comparison acknowledgment, and gated transition to award decision. The screen does not recommend or approve an award. |

### E-192 — Screen 4 render failure appeared as workflow reset

**When identified:** During live navigation to `Compare responses`.

**Incorrect principle applied:** Trust the structured AI response shape at the rendering boundary and keep workflow state only in volatile component memory.

**Incorrect outcome:** A partial or differently shaped comparison response could crash the Screen 4 render into a blank page, while a refresh discarded the buyer’s progress and returned the journey to its initial state.

**Corrected principle:** Every AI-to-UI boundary must validate and safely render partial data. Workflow progress required to resume a guided demo must be persisted independently of the current screen render.

| 600 | Screen 4 render and progress recovery hardened | Comparison rows, warnings, evidence, totals, and readiness are render-safe when AI output is partial. The guided workflow persists recoverable progress in browser storage and restores it on reload, so a comparison-render error cannot erase the RFx or prior workflow state. |

### E-193 — Comparison omitted its evidence and normalization substrate

**When identified:** During live review of Screen 4, when supplier totals and line coverage rendered as dashes and provenance was unavailable.

**Incorrect principle applied:** Treat the comparison as an AI-generated summary and wait for one generic model response to supply display values, without passing the approved policy and Finance sources into the comparison boundary or preserving line-level source records.

**Incorrect outcome:** The UI showed missing totals, missing coverage, and unavailable provenance; it raised a false currency exception even though the approved Finance FX source existed; and it gave the buyer no way to inspect or resolve the evidence behind the comparison.

**Why it was wrong:** The approved Screen 4 contract defines comparison as a constructed evidence object: supplier claims are extracted and mapped to the RFx, deterministic normalization uses the approved policy and Finance basis, original values remain visible, and every exception must be traceable and actionable. A generic AI summary cannot replace that substrate.

**Corrected principle:** Construct the comparison in two explicit layers. Render the deterministic, source-linked comparison substrate first so the buyer can immediately see populated totals, line coverage, original currencies, normalized values, and source records. Then run live AI evidence review against the approved RFx, policy, Finance source, and supplier materials; merge only cited findings into the visible exception state. Every displayed value and exception must have a provenance path, and every blocker must expose its evidence and next action.

| 601 | Screen 4 evidence-first comparison restored | The comparison endpoint deterministically maps all five supplier response sets across 30 lines, calculates INR totals using the approved Finance rate while preserving original currency, and returns line-level claims plus clickable source records. A separate live AI evidence-review endpoint enriches the already-rendered table with cited findings and controls readiness. |

| 602 | Screen 4 fast-first rendering approved | Screen 4 renders the comparison substrate before the slower live AI evidence review completes. The UI labels the interim state as `Reviewing`, then updates warnings and readiness when the live review returns; it does not block the buyer from seeing the comparison while analysis is in flight. |

| 603 | Submission cleanup boundary recorded | The frozen prototype uses `src/`, `api/`, `scripts/`, `docs/`, `public/demo-runtime/`, and the non-public hidden evaluation set as its active submission surface. Historical archive material and build output are excluded from GitHub so stale implementation and contract artifacts cannot be mistaken for active requirements. |

### E-194 — Current implementation pack drifted from the effective contract

**When identified:** During the 2026-09-03 harness-alignment audit.

**Incorrect outcome:** The current section pointed to a missing implementation reference, described implementation as unauthorized, and the implementation index presented existing screens as work to reconstruct. The prototype also rendered two award surfaces, exposed no follow-up approval action, duplicated the Finance FX rate in code, and kept award approval only in client state.

**Correction:** The current authority now points to the active product contract, implementation index, architecture/runtime note, and verification matrix. The ledger chronology and error register remain historical. The canonical UI uses one award workspace; follow-up approval triggers reassessment; Finance rate is parsed from its approved runtime source; award commit validates readiness, supplier identity, rationale, and idempotency. Simulated and partial behavior remains explicitly labeled.

| 604 | Harness-alignment audit recorded | Added AUDIT_2026-09-03.md, reconciled current canonical references, mapped all five visible surfaces to four workflow stages, added verification and architecture/runtime documentation, and recorded remaining prototype limitations without modifying the harness repository. |
