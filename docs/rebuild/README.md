# Aerchain rebuild workspace

Audience: the product manager and the downstream design, engineering, AI, and review actors.
Purpose: hold the reasoning, decisions, specifications, plan, and evidence for rebuilding the Aerchain assignment product.
Authority: this workspace becomes authoritative only after each artifact passes its stated review gate. Existing repository material is input context; the read-only harness is methodology.

## Working rule

The assignment is the job. The product prototype is one output of that job. Harness artifacts describe how the work is performed and verified; they are not product features.

## Root-folder rule

The root contains only approved artifacts or artifacts currently submitted for review. Historical attempts, superseded methodology proposals, root-cause records, and process logs live under `history/`, `methodology/`, or `process/`. This keeps the active decision surface small without deleting the audit trail.

## Current active artifacts

- `DECISION_REGISTER.md` and `JOB_CONTEXT.md` are approved/input context.
- `GENERIC_PRD_CHARTER_PROPOSAL.md`, `GENERIC_ACCEPTANCE_CRITERIA_CHARTER_PROPOSAL.md`, and `CHARTER_GENERALITY_SELF_REVIEW.md` are proposed methodology for review.
- `PRODUCT_REQUIREMENTS.md` is the Aera application draft of the proposed PRD charter.
- `AERA_PRD_APPLICATION_REVIEW.md` is the self-review of that application.

Historical and process navigation starts at `history/`, `methodology/`, and `process/`.

## Sequence

1. Job context and ambiguity register
2. Product requirements and hypothesis
3. Low-fidelity product model
4. Scaffold, AI, and reviewer specifications
5. Plan and implementation
6. Independent scaffold review, AI review, and interaction review
7. Assignment deliverables and completion evidence

Current task: T003 revision - test the generic PRD charter on Aera and review the resulting product requirements document before epic and outcome-story decomposition.
