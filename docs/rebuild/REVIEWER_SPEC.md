# Reviewer specifications

Audience: independent product, software, AI, and interaction reviewers.
Purpose: define how the rebuilt outputs will be judged.
Authority: verification specification derived from the PRD; a reviewer records evidence and findings rather than changing product requirements.

## Product review

Pass when the journey reduces reconstruction effort without hiding uncertainty, gives the buyer a clear reason to act, and keeps the award decision with the buyer. Fail when the interface jumps directly to an award, presents AI output as settled fact, or makes evidence hard to inspect.

## Scaffold review

Verify independently:

- five visible surfaces map to the approved five-step journey;
- the four stage transitions have explicit prerequisites;
- invalid transitions preserve the prior valid state;
- comparison arithmetic and Finance source use are deterministic;
- source links resolve to the intended runtime evidence;
- loading, empty, partial, error, and recovery states are usable;
- simulated integrations are labeled;
- hidden evaluation data is absent from served assets and AI payloads; and
- award commit is validated and idempotent.

## AI review

Verify each capability independently with cases covering:

- incomplete and conflicting source material;
- filename-only or weak association;
- missing values and unsupported claims;
- new evidence after follow-up approval;
- bounded analyst questions;
- incomplete comparison basis; and
- proposal versus approval separation.

Each result should be judged for correctness, evidence, limitations, and refusal or escalation where required.

## Interaction review

Walk the complete browser journey:

1. start from Landing;
2. generate and inspect an RFx;
3. verify approval is blocked by unresolved issues and opens after treatment;
4. send the approved RFx through the labeled simulation;
5. review supplier responses and approve a follow-up;
6. reassess and resolve response conditions;
7. inspect the comparison and source evidence;
8. ask a bounded question;
9. verify acknowledgment is required;
10. inspect and edit the award rationale; and
11. approve once and verify the record result and duplicate-commit behavior.

Record pass, fail, blocked-by-environment, or revision-required with the exact evidence. Do not treat a structural string check as a browser pass.

