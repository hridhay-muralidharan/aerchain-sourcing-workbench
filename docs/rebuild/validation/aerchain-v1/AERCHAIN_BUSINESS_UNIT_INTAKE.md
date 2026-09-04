# Aerchain business-unit intake v1

Audience: product manager and domain reviewer.
Purpose: capture Aerchain assignment context and observable procurement workflow without prescribing a product solution.
Authority: instance input artifact. It is not a production business-unit confirmation and does not approve requirements.

## Intake control

| Field | Value |
|---|---|
| Intake ID | AER-INT-001 |
| Scope | Aerchain assignment prototype for corrugated-packaging sourcing, from business need/RFx preparation through award decision support |
| Date | 2026-09-04 |
| Contributor | Assignment materials and existing Aerchain repository; named business-unit contributor unavailable |
| Factual verification | Pending; blocking for treating assignment context as production business fact |
| Source boundary | Repository paths listed in the source register below; hidden evaluation data is evaluation truth only |

## Context and scope

The assignment asks for a working prototype in which a category buyer moves from a business need to a defensible supplier award. The prototype scenario is corrugated packaging for the Pune plant. This is an assignment context, not evidence of a deployed customer workflow. [AER-SRC-001, AER-SRC-002]

## Actor map

| Actor | Observed or stated role | Type/status | Source |
|---|---|---|---|
| Category buyer/procurement manager | Owns sourcing decisions and consequential approvals | Assignment context; approved PM framing, not BU-verified fact | AER-SRC-001; AER-DEC-001/002 |
| Supplier | Provides quotation claims, evidence, and follow-up information | Scenario role; not production-observed | AER-SRC-002; AER-SRC-003 |
| Aera/AI capability | Interprets, extracts, associates, explains, answers, and proposes | PM decision/product hypothesis | AER-DEC-004/005 |
| Deterministic product behavior | Controls state, evidence, calculations, permissions, and recorded actions | PM decision/product boundary | AER-DEC-005 |
| Authorized approver beyond buyer role | Not specified in assignment materials | Unknown; blocking if required for production authority | AER-OQ-001 |

## Current-state workflow model

| Step | Trigger/input | Actor and action | Output/decision | Evidence/status |
|---:|---|---|---|---|
| 1 | Business need and permitted sources | Buyer reviews sourcing context and asks Aera to prepare an RFx | Draft RFx for buyer review | Stated assignment flow; AER-SRC-001/002 |
| 2 | Draft RFx | Buyer reviews and approves the RFx | Approved RFx ready for invitation | Approved PM decision; AER-DEC-003/007 |
| 3 | Approved RFx and supplier contacts | Buyer reviews invitation package and sends it | Per-supplier send/delivery outcome | Existing product contract; AER-SRC-004; prototype behavior not independently revalidated here |
| 4 | Supplier replies in varied formats/messages | Aera associates and extracts relevant claims; buyer reviews gaps and approves follow-up where needed | Complete or policy-authorized supplier response | Assignment context plus product contract; production workflow unknown |
| 5 | Supplier evidence and approved comparison basis | Aera builds comparison; buyer inspects and acknowledges readiness | Comparison ready for award recommendation | AER-DEC-006/007; implementation evidence required |
| 6 | Comparison and evidence | Aera proposes trade-offs/rationale; buyer decides and approves award | Human-controlled award decision | AER-DEC-007/011/012; production record behavior unknown |

## Workflow variants and failure paths

The assignment explicitly exercises varied response formats, incomplete fields, inconsistent claims, and follow-up evidence. The runtime manifest lists supplier responses across email, CSV, XLSX, DOCX, HTML, and SVG, including follow-up files. [AER-SRC-002]

The following are scenario conditions, not confirmed production frequencies:

- missing line-item or questionnaire information;
- ambiguous units, values, or delivery claims;
- conflicting claims across files or messages;
- a response that cannot be associated confidently with the RFx;
- a supplier requiring approved follow-up;
- unsupported natural-language questions; and
- simulated outbound delivery or unavailable live AI.

The exact business escalation, SLA, approval delegation, and recovery process for these cases is unknown. [AER-OQ-002]

## Evidence and impact

| Evidence/impact | Type | Source/status |
|---|---|---|
| Manual effort and uncertainty are the target problems | Assignment framing/hypothesis | AER-SRC-001; not measured in production |
| RFx needs current quantities, dimensions, delivery date, board construction, certification, and commercial terms | Business-need content | AER-SRC-003 |
| Supplier evidence is heterogeneous and may be incomplete/inconsistent | Assignment scenario condition | AER-SRC-001/002; scenario-valid, production prevalence unknown |
| Defensible award requires evidence and visible trade-offs | PM/product framing | AER-DEC-011/012; not independently measured |

## Constraints

- Demonstration fixture contains five suppliers and thirty line items. [AER-SRC-002]
- Outbound delivery is simulated and must be labeled. [AER-DEC-009]
- Live AI is allowed when configured, but hidden evaluation data must not be supplied to it. [AER-DEC-009; AER-SRC-004]
- Production persistence, inbox/webhook integration, real mail, OCR hardening, multi-user permissions, and generalized policy authoring are excluded from this assignment version. [AER-DEC-010]
- The harness repository is read-only for this validation. [AER-SRC-001]

## Desired outcomes

The stated assignment outcome is reduced buyer effort and uncertainty while retaining buyer responsibility for consequential judgments. The intended prototype outcomes are a supported comparison, evidence-grounded questions, visible uncertainty, approved follow-up, and a defensible human award decision. [AER-SRC-001; AER-DEC-011/012]

## Assumptions and unknowns

| ID | Statement | Type/status | Owner/action |
|---|---|---|---|
| AER-AS-001 | The category buyer is the primary user and decision owner | Assumption backed by approved PM decision; not BU-verified | PM/domain reviewer to confirm |
| AER-AS-002 | The scenario is representative enough to evaluate the proposed prototype slice | Hypothesis | PM/evaluator to validate against assignment criteria |
| AER-AS-003 | The listed policy and source files are the authoritative sources for the demo | Assignment/runtime assumption | Product/evaluation owner to verify fixture integrity |
| AER-OQ-001 | Who is the authorized award approver in a real deployment? | Unknown; blocking for production authority | PM/domain owner |
| AER-OQ-002 | What are the real escalation, SLA, delegation, and correction rules? | Unknown; blocking for production workflow claims | Business-unit/domain owner |
| AER-OQ-003 | What baseline cycle time, rework, error, and adoption measures exist? | Unknown; blocking for outcome measurement | Business owner/evaluator |

## Source register

| Source ID | Path | What it supports | Source type/date |
|---|---|---|---|
| AER-SRC-001 | `docs/rebuild/JOB_CONTEXT.md` lines 7-31 | Assignment job, intended outcome, existing context, exclusions | Assignment/context, 2026-09-04 |
| AER-SRC-002 | `data/demo-runtime/manifest.json` lines 1-116 | Fixture ID, category, counts, source/response file inventory, runtime boundary | Runtime manifest, 2026-09-04 |
| AER-SRC-003 | `data/demo-runtime/business-need.md` lines 1-5 | Pune need, timing, requested supplier response fields | Runtime business-need input, 2026-09-04 |
| AER-SRC-004 | `docs/ACTIVE_PRODUCT_CONTRACT.md` lines 19-63 | Existing product behavior, authority boundaries, state gates, demo constraints | Existing product contract, 2026-09-04 |
| AER-SRC-005 | `docs/DEMO_WALKTHROUGH_SCRIPT.md` lines 7-67 | Intended guided workflow and buyer actions | Existing walkthrough, 2026-09-04 |
| AER-SRC-006 | `docs/rebuild/DECISION_REGISTER.md` lines 9-22 | Existing PM decisions D-001 through D-012 | Prior PM decision record, 2026-09-04 |

## Intake review state

Status: incomplete for production-business validation; sufficient as assignment context for PM decision and prototype PRD generation.

Business-unit representative confirmation: unavailable.

Independent provenance check: complete for cited repository sources.

Escalation: do not promote assignment context, unmeasured outcomes, or unknown authority into production requirements without explicit PM/domain approval.
