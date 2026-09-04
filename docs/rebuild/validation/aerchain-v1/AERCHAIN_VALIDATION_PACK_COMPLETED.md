# Aerchain validation pack completed v1

Audience: harness contract reviewers and Aerchain product reviewers.
Purpose: show how the generalized contracts were applied to Aerchain inputs.
Authority: experiment validation input. It does not modify or supersede generalized contracts.

## Pack status

| Field | Status |
|---|---|
| Intake | Generated; factual business-unit confirmation pending |
| PM decisions | Generated from prior approved Aerchain decision register |
| PRD | Generated from intake and PM decisions; draft pending validation approval |
| Epics/stories/criteria | Generated from PRD; draft pending validation approval |
| Runtime evidence | Available under `data/demo-runtime/`; hidden evaluation data treated as evaluation-only |
| Generalized contracts | Read-only; not modified |
| Validation | Six scenarios executed; conditional results recorded |

## Known assignment context validation

| ID | Statement | Classification after validation | Evidence/status |
|---|---|---|---|
| AER-CTX-001 | A category buyer handles an RFx and vendor responses | Assignment context plus approved PM framing; not BU fact | AER-SRC-001; AER-DEC-001/002; BU confirmation pending |
| AER-CTX-002 | Vendor responses vary in format and may be incomplete/inconsistent | Runtime scenario fact for fixture; production prevalence unknown | AER-SRC-002; response files listed in manifest |
| AER-CTX-003 | Desired flow covers RFx, responses, extraction/normalization, questions, and award support | Approved assignment/product direction | AER-SRC-001/004/005; AER-DEC-002/008 |
| AER-CTX-004 | Comparison must expose uncertainty and evidence | Approved product requirement | AER-DEC-006; AER-SRC-004/005 |
| AER-CTX-005 | Prototype uses five vendors and thirty line items | Assignment fixture constraint | AER-SRC-002 lines 4-8 |
| AER-CTX-006 | Extraction/reasoning must be real rather than hardcoded | Assignment constraint/hypothesis | AER-SRC-001 lines 25-27; implementation verification required |

## Intake record

See `AERCHAIN_BUSINESS_UNIT_INTAKE.md` for the complete AER-INT-001 record, source register, facts/claims separation, unknowns, and escalation state.

## PM decision record

See `AERCHAIN_PM_DECISIONS.md` for AER-DEC-001 through AER-DEC-012, alternatives, rationale, status, hypotheses, and production open questions.

## Generated downstream artifacts

- `AERCHAIN_PRD.md` - AER-PRD-001 v1.
- `AERCHAIN_EPICS_STORIES_ACCEPTANCE_CRITERIA.md` - AER-EPIC-001 through AER-EPIC-005 and AER-ST-001 through AER-ST-005.

## Acceptance-criteria evidence coverage

The story artifact includes design/experience, software/deterministic, agentic-AI, interaction, safety, operational, evidence, and review criteria for every story. Current implementation evidence is not implied by generated criteria; verification status remains separate.

| Coverage obligation | Story coverage | Current evidence status |
|---|---|---|
| Five vendors and thirty line items | ST-001/003/004 | Fixture present; behavioral verification pending |
| Varied response formats | ST-003/004 | Files present in manifest; extraction verification pending |
| Missing/inconsistent/ambiguous information | ST-003/004/005 | Criteria present; fixture-specific outcomes require execution |
| Normalization/calculation | ST-004 | Criteria present; implementation must be tested |
| Field provenance | ST-001/003/004/005 | Criteria present; runtime/source audit pending |
| Natural-language grounded analysis | ST-004 | Criteria present; live/provider behavior unverified |
| Human approvals and authority | All stories, especially ST-001/002/003/004/005 | Contract stated; server enforcement requires verification |
| Failure/fallback/recovery | ST-002/003/004/005 | Criteria present; implementation tests pending |
| Hidden-data isolation | ST-003/004 | Manifest boundary stated; runtime audit pending |

## Evidence rule

No expected findings, answer keys, or hidden evaluation assertions are included in the AI input set. `data/demo-runtime/evaluation-hidden/evaluation-set.json` is evaluation truth and is not a product/runtime source. [AER-SRC-002]
