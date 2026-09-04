# Pre-PRD business problem and workflow definition charter

Audience: product managers, solutions leads, workflow owners, domain experts, and reviewers deciding whether a product opportunity is sufficiently understood to enter product definition.
Purpose: define the operating problem and the real workflow before product requirements are proposed.
Authority: proposed cross-product methodology. It is not an Aera requirement and is not yet part of the harness repository.

## First principles

Product requirements should not begin with a feature idea, an interface, an AI capability, or an executive request. They should begin with a sufficiently grounded understanding of:

- the work or situation in which a problem occurs;
- the people and organizations affected by it;
- the progress they need to make;
- the workflow through which that progress currently happens; and
- the friction, risk, cost, and constraints that make the problem worth addressing.

This artifact is the evidence-based problem and workflow model that precedes the PRD. It is not a product proposal. Its job is to make the opportunity and operating reality explicit so that product framing does not solve an imagined problem or redesign only the happy path.

## What this artifact must decide

It must enable a reviewer to decide:

1. whether there is a real problem with a meaningful affected party and owner;
2. whether the target workflow is understood well enough to discuss intervention;
3. whether the problem is caused by an actionable workflow condition rather than only a vague aspiration;
4. whether material exceptions, handoffs, decisions, and authority boundaries are known;
5. whether the evidence is sufficient, insufficient, contradictory, or based on an explicit assumption; and
6. whether to proceed to product translation, gather more discovery evidence, or stop.

## Required sections

### 1. Discovery purpose and decision boundary

State the opportunity being investigated, the decision this artifact supports, its evidence horizon, and what it deliberately does not decide. It does not authorize a product, feature, architecture, or AI intervention.

### 2. Situation and trigger

Describe when the work occurs, what triggers it, the surrounding business context, and what makes the situation consequential. Keep this grounded in observed or sourced conditions.

### 3. Affected parties and job

Identify the person or group trying to make progress, the beneficiary, the accountable owner, other participants, and the job they are trying to complete. Distinguish the person experiencing pain from the person who may authorize change.

### 4. Current workflow

Map the actual workflow from trigger to intended end state. For each meaningful step, capture the actor, input, action, output, decision, handoff, system or source used, and waiting or rework condition. The map may include human, system, and external steps.

### 5. Decision and authority model

Identify consequential decisions, who may make them, what evidence or policy they require, who may recommend, who must review, and where accountability remains human. This is a workflow authority model, not a future product permission design.

### 6. Variants, exceptions, and failure paths

Capture common variants, edge cases, missing inputs, conflicting information, escalation paths, retries, reversals, and points where the official process differs from real practice. State what happens when the workflow cannot proceed.

### 7. Friction and consequences

Describe where work is slow, repetitive, ambiguous, error-prone, costly, unsafe, or difficult to review. Connect each friction to its consequence for the beneficiary, organization, downstream actor, or control environment.

### 8. Evidence, assumptions, and unknowns

Separate observed facts, reported experience, measured evidence, interpretation, assumption, contradiction, and unanswered question. Record source, confidence, recency, and owner for material evidence gaps.

### 9. Constraints and suitability

Record business, policy, regulatory, data, timing, organizational, and adoption constraints. Assess whether the problem is suitable for product intervention and whether AI is relevant, optional, inappropriate, or not yet assessable. Do not choose a model or prescribe an architecture.

### 10. Problem and workflow synthesis

State the problem in terms of the affected party, workflow condition, consequence, and why it matters now. State the target progress the future intervention must improve without describing the intervention itself.

### 11. Discovery decision

Record one explicit disposition: proceed to product translation, proceed with named risks, gather specified evidence, or stop. Name the decision owner, evidence basis, unresolved issues, and revisit condition.

## Principles

- Observe the real workflow, not only the documented process.
- Start with work and consequence, not technology.
- Separate beneficiary, operator, owner, approver, and sponsor when they differ.
- Model the unhappy path as part of the workflow, not as an appendix.
- Treat authority and accountability as properties of the current work.
- Preserve uncertainty and contradiction rather than smoothing them into a clean narrative.
- Keep evidence distinct from interpretation and proposed opportunity.
- Do not imply that every problem needs software or AI.
- Do not carry assignment fixtures, sample data, or demo behavior forward as universal product truth.
- Make the decision to proceed explicit and reversible when evidence changes.

## Not this artifact

It is not a PRD, product hypothesis, capability list, feature backlog, epic map, outcome-story set, screen flow, design brief, technical specification, AI specification, implementation plan, or evaluation plan.

## Completion test

The artifact is ready to inform product translation when an independent reviewer can explain who is affected, what progress they need, how the current workflow actually works, where it breaks, what consequences follow, who holds authority, what evidence supports the account, and what remains unknown without inventing product behavior.
