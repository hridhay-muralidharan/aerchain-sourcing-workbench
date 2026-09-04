# Aerchain generalized-contract validation report v1

Audience: harness contract owners and Aerchain reviewers.
Purpose: record execution of all six validation scenarios against the Aerchain instance artifacts.
Authority: validation evidence for this experiment; it does not change generalized contracts.

## Execution method

The scenarios were applied to the completed intake, PM decisions, PRD, and story/criteria artifacts. Evidence was checked against the cited Aerchain repository files and runtime manifest. No harness contract file was modified. This is a documentation-contract validation; it does not claim that the prototype implementation passes the generated behavioral criteria.

## Scenario results

| Scenario | Result | Evidence | Finding/feedback |
|---|---|---|---|
| Existing business-unit workflow | Conditional pass | AER-INT-001 workflow, exceptions, source register; AER-PRD-001; story set | Assignment workflow is mapped, but BU confirmation and measurable friction baseline are unavailable. AER-FB-001, AER-FB-002 |
| New business problem | Conditional pass for assignment context; not production discovery | AER-INT-001 labels assignment material and hypotheses; AER-DEC-011 | The artifacts do not invent customer evidence. The assignment provides a problem framing, but no independent observed-need evidence. AER-FB-002 |
| Maintenance/improvement opportunity | Not applicable to this assignment; contract shape reviewed | No maintenance request exists in Aerchain inputs | No instance defect to validate. No generalized correction proposed. AER-FB-004 |
| Decision-support product | Conditional pass | AER-DEC-004/006/007/011/012; AER-ST-004/005 | Decision maker, evidence, uncertainty, override/approval, and review criteria are covered. Production authority and baseline measures remain open. AER-FB-003, AER-FB-002 |
| Workflow-automation product | Conditional pass | AER-DEC-002/005/007/009/010; AER-ST-001/002/003 | Handoffs, gates, simulated send, failure/retry, and audit criteria are covered. Real integration and production recovery are excluded/unverified. |
| AI-agent product with digital scaffold | Pass for contract coverage; implementation unverified | AER-DEC-004/005/009/012; AER-ST-003/004/005 | Agent role, tools/input boundary, uncertainty, handoff, deterministic scaffold, hidden-data isolation, and safety criteria are explicit. Runtime/API enforcement still requires execution tests. |

## Six scenario pass/fail questions

| Question | Result | Basis |
|---|---|---|
| Can context be captured without prescribing a solution? | Yes | Intake separates facts, assignment context, hypotheses, and product decisions |
| Can PM decisions be made without inventing evidence? | Yes, for assignment scope | Unknowns and production blockers are explicit |
| Can PRD be generated from approved context and decisions? | Yes, conditionally | Assignment PM decisions are approved; BU validation remains pending |
| Does every story represent a real-world outcome? | Yes | Five stories are actor/outcome based, not component based |
| Do criteria synthesize applicable disciplines? | Yes | Eight responsibility/verification types are covered per story |
| Does every criterion name evidence and review path? | Yes | Each criterion has evidence/reviewer/source fields |
| Are facts, decisions, hypotheses, requirements, constraints, and process controls distinguishable? | Yes | Separate artifacts and typed fields |
| Do fields work across products and scales? | Not fully testable from one Aerchain instance | Generality is a contract-owner question; no Aerchain-specific defect identified |

## Validation conclusion

The generalized contracts can produce a traceable Aerchain intake, PM decision set, PRD, and outcome-based story/criteria set. The validation is conditional because Aerchain lacks business-unit confirmation, production outcome baselines, and production authority/delegation evidence. These are input blockers, not reasons to weaken or modify the generalized contracts.

No generalized correction is recommended from this run. The instance-specific blockers and their root causes are preserved in `AERCHAIN_FEEDBACK_LOG.md` and `AERCHAIN_ROOT_CAUSE_ANALYSES.md`.

## Executed repository checks

These checks validate the existing implementation surface only; they do not replace the six contract scenarios or prove that every generated criterion is implemented.

| Check | Result | Output |
|---|---|---|
| `npm run test` | Pass | `tsc -b --pretty false` exit 0 |
| `npm run verify:prototype` | Pass | `prototype surface: pass` |
| `npm run verify:contracts` | Pass | `active contract surface: pass` |
| `npm run verify:assets` | Pass | `asset pack: pass (5 anchors)` |

No live workflow/browser/provider check was run as part of this documentation-contract generation step. Implementation and behavioral gaps remain governed by the story criteria and are not marked complete here.
