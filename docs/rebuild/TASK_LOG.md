# Rebuild task log

Audience: the product manager and rebuild actors.
Purpose: preserve task attempts, approvals, feedback, root-cause analysis, and evidence for the Aerchain rebuild.
Authority: process record, not product requirements.

## T002 — Identify ambiguities, assumptions, and decision questions

- Parent job: aerchain-product-assignment
- Attempt: 1
- Starting autonomy: explicit approval required
- Input sources: harness job definition and methodology; existing Aerchain README, decision ledger, implementation maps, source code, runtime data, and verification scripts
- Objective: identify what must be decided before a new PRD and prototype can be produced
- Output: JOB_CONTEXT.md and DECISION_REGISTER.md
- Seer check: classify existing material as assignment fact, useful context, candidate decision, or unresolved question; avoid treating code or historical documentation as current product authority
- Status: Submitted for product-manager review
- Evidence: the decision register contains proposed, open, and context-only items; it does not silently approve the product model

### Product-manager review — 2026-09-03

- Feedback: D-001 through D-011 aligned with the product manager’s intended direction.
- Result: D-001 through D-011 moved to Approved. D-012 remains Open because its choices materially affect the PRD and prototype interaction.
- Approved on first attempt: Yes, after the task was reviewed.
- Task status: Approved; next task is T003 — resolve the remaining product decisions and produce the PRD.

### Product-manager review — D-012 — 2026-09-03

- Feedback: Approved the existing corrugated-packaging scenario, the buyer-facing comparison workspace with natural-language answers and evidence links, and the separate human-controlled award approval.
- Result: D-012 moved to Approved. T003 is authorized to produce the PRD from the approved direction.

## T003 — Produce the product requirements document

- Parent job: aerchain-product-assignment
- Attempt: 1
- Starting autonomy: explicit approval required
- Inputs: approved D-001 through D-012; JOB_CONTEXT.md; assignment job definition; existing Aerchain product and implementation context
- Objective: define the product outcome, scope, workflow, AI/scaffold boundaries, scenario, omissions, and acceptance criteria
- Output: PRODUCT_REQUIREMENTS.md
- Seer check: the PRD describes the buyer product rather than the harness; assignment-specific counts remain attributes of the scenario; existing implementation is not treated as authority; each consequential action has an owner
- Status: Submitted for product-manager review
- Evidence: PRODUCT_REQUIREMENTS.md

### Product-manager feedback — T004 — 2026-09-04

- Feedback: The scaffold specification crossed into technical design. The PRD should define product behavior and broad acceptance criteria; the low-fidelity model should define user and information flow; the scaffold specification should not prescribe technical details that belong to the downstream engineer.
- Result: T004 Attempt 1 rejected; revision required.
- Root-cause analysis: T004_ROOT_CAUSE_ANALYSIS.md
- Proposed correction: SCAFFOLD_SPEC_REVISION_PROPOSAL.md
- Current status: Awaiting approval of the proposed boundary correction. The original SCAFFOLD_SPEC.md remains preserved as the rejected Attempt 1 artifact.

### Product-manager feedback on low-fidelity model — T004 — 2026-09-04

- Feedback: Several parts of the low-fidelity model drifted from expected user and information flow into designer decisions.
- Result: The low-fidelity model requires the same boundary review as the scaffold specification.
- Root-cause analysis: LOW_FIDELITY_ROOT_CAUSE_ANALYSIS.md
- Proposed correction: LOW_FIDELITY_REVISION_PROPOSAL.md
- Current status: Awaiting approval of the proposed correction. The original LOW_FIDELITY_PRODUCT_MODEL.md remains preserved as Attempt 1.

## T003 — Produce the product requirements document

- Parent job: aerchain-product-assignment
- Attempt: 1
- Starting autonomy: explicit approval required
- Inputs: approved decision register and job context
- Objective: define the buyer job, product hypothesis, workflow, AI/scaffold boundaries, scenario, omissions, and acceptance criteria
- Output: PRODUCT_REQUIREMENTS.md
- Seer check: product language remains about Aera; scenario parameters remain scenario attributes; AI, deterministic, and buyer responsibilities are distinct
- Status: Approved by product manager
- Product-manager response: PRD approved
- Approved on first attempt: Yes

## T004 — Derive prototype specifications

- Parent job: aerchain-product-assignment
- Attempt: 1
- Starting autonomy: explicit approval required
- Inputs: approved PRODUCT_REQUIREMENTS.md and existing implementation context
- Objective: define the low-fidelity product model, scaffold, AI, reviewer, and execution specifications
- Outputs: LOW_FIDELITY_PRODUCT_MODEL.md, SCAFFOLD_SPEC.md, AI_SPEC.md, REVIEWER_SPEC.md, IMPLEMENTATION_PLAN.md
- Seer check: specifications derive from the PRD; harness process remains outside product behavior; existing code is treated as candidate context only
- Status: Submitted for product-manager review

## Review gate

The product manager should review the open decision questions before the next task turns the candidate answers into an approved product requirements document. No product behavior is being changed by T002.
