# Aerchain root-cause analyses v1

Audience: Aerchain PM, harness contract owners, and reviewers.
Purpose: analyze blocking and major findings without confusing missing instance evidence with a generalized contract defect.
Authority: instance validation record; no generalized contract change is authorized.

## RCA-001 - Missing business-unit confirmation

- Feedback: AER-FB-001.
- Failure: The intake cannot be treated as a verified account of a real business-unit workflow.
- Immediate cause: The Aerchain repository contains assignment context, runtime fixture files, and prior PM decisions, but no named business-unit contributor or confirmation.
- Contract expectation: business-unit representative confirms factual accuracy; independent reviewer checks source and open-question ownership.
- Root cause category: missing external input.
- Impact: production workflow claims must remain blocked; assignment prototype framing can continue as explicitly labeled context.
- Correction: obtain confirmation or preserve the intake as assignment-only. No contract change proposed.
- Revalidation: v1 intake marks factual verification pending and escalates AER-OQ-001/002; issue remains open pending external evidence.

## RCA-002 - Missing production outcome baseline

- Feedback: AER-FB-002.
- Failure: Intended benefit cannot be expressed as a measured production improvement.
- Immediate cause: assignment materials specify an intended outcome and evaluation focus, not baseline cycle time, rework, error, or adoption data.
- Contract expectation: PM decision and PRD distinguish outcomes, measures, hypotheses, and unknowns.
- Root cause category: scope-limited evidence.
- Impact: prototype review can test workflow behavior, but production value claims cannot be validated.
- Correction: obtain business baseline and target measures; keep the hypothesis visible in the meantime. No contract change proposed.
- Revalidation: AER-PRD-001 section 3 and AER-OQ-003 explicitly mark the gap; issue remains open.

## RCA-003 - Unknown production award authority

- Feedback: AER-FB-003.
- Failure: The prototype can state a buyer-controlled approval boundary but cannot establish the production authorization model.
- Immediate cause: assignment excludes multi-user permissions and generalized governance, while the repository names the buyer as the decision owner only for the prototype.
- Contract expectation: PM decisions name approval authority; safety and escalation gaps are blocked rather than invented.
- Root cause category: deliberately excluded deployment context.
- Impact: no production claim about delegation, separation of duties, or escalation is valid.
- Correction: obtain the governing policy and named authority model. Do not replace the human approval requirement with an inferred role.
- Revalidation: AER-INT-001, AER-DEC-012, and AER-PRD-001 section 11 preserve the open question; issue remains open.

## Generalized-correction decision

No generalized correction is proposed. The contracts behaved as intended: they separated assignment context from business fact, preserved unknowns, and blocked unsupported production claims. The three material gaps require Aerchain evidence or approval, not a change to the generalized contract.
