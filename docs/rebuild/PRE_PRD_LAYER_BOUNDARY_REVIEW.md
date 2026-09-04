# Pre-PRD layer boundary review

Audience: product manager reviewing the proposed pre-PRD methodology.
Purpose: test whether the new precursor artifact and translation artifact have distinct jobs and form a coherent sequence into the PRD.
Authority: internal methodology review submitted for product-manager review; it does not approve either charter.

## Sequence

`real work and problem -> product translation -> product requirements -> outcome decomposition -> executor artifacts -> implementation and verification`

## Distinction check

| Layer | It answers | It must not answer |
|---|---|---|
| Pre-PRD discovery | What is the real problem and workflow, who is affected, what are the consequences, and is the opportunity sufficiently understood? | What product to build or which features to choose |
| Product Translation Map | How do validated conditions translate into proposed outcomes, capabilities, features, and product-level proof? | What is canonically approved product scope or how anything is implemented |
| PRD | What product should exist, for whom, why, with what outcomes, capabilities, scope, and product-level acceptance criteria? | How outcomes become screens/stories or how executors build them |

## Overlap risks checked

- The pre-PRD artifact includes a target progress synthesis, but it does not name a product intervention; this is necessary to define the problem without prematurely defining the solution.
- The translation map includes candidate features, but labels them as proposed and traceable rather than authoritative; the PRD is where product commitments are adopted.
- The translation map includes product-level acceptance criteria because it must show the proof implied by each translation. The PRD adopts the final criteria; later story criteria refine them through design, deterministic, and AI lenses.
- The PRD still owns product hypothesis, principles, scope, capabilities, and final product-level acceptance criteria. It does not merely summarize the translation map.
- Workflow authority appears in both pre-PRD and PRD at different levels: the precursor documents current-work accountability; the PRD defines the product responsibility boundary. Neither defines implementation permissions.

## Result

The two proposed artifacts fill a genuine sequence gap rather than adding another version of the PRD. They are ready for product-manager review as generic charters. No changes are proposed to the harness repository until the charters are approved.
