# Product translation map charter

Audience: product managers and reviewers translating validated problem and workflow understanding into a PRD.
Purpose: provide a traceable reasoning bridge from the pre-PRD problem/workflow model to product outcomes, capabilities, features, and product-level acceptance criteria.
Authority: proposed cross-product methodology. It is a working translation artifact, not the canonical product requirement and is not yet part of the harness repository.

## First principles

The problem/workflow artifact explains what is happening and why it matters. The PRD decides what product should exist and what it must accomplish. A gap remains between them: product reasoning can jump from a problem statement to an attractive feature set without showing how the feature set addresses the workflow or how acceptance criteria prove the intended outcome.

The Product Translation Map makes that reasoning inspectable. It preserves the chain of decisions and exposes unsupported leaps, omissions, contradictions, and unserved workflow conditions before the PRD is approved.

It is a translation and traceability artifact, not a second PRD. It may contain candidate product language, but it does not become product authority until the relevant decisions are adopted into the PRD.

## What this artifact must enable

It must enable a reviewer to determine:

1. which problem and workflow evidence each proposed product outcome addresses;
2. how each outcome changes beneficiary progress or workflow performance;
3. which broad product capabilities are required to create that change;
4. which candidate features express those capabilities and which are unnecessary or unsupported;
5. how product-level acceptance criteria provide observable proof of the intended product change;
6. what is intentionally not translated and why; and
7. which product decisions are ready for the PRD and which need further discovery or explicit judgment.

## Translation chain

The map should make this progression explicit:

`problem/workflow evidence -> problem condition -> desired beneficiary progress -> product outcome -> product capability -> candidate feature -> product-level acceptance criterion`

Each link is a reasoning step. A later item must not be presented as self-evident merely because an earlier item exists.

## Required sections

### 1. Translation purpose and source boundary

Name the source problem/workflow artifact, its version, the translation decision being made, and the downstream PRD version or draft it informs. State that the source remains evidence authority and the PRD remains product-decision authority.

### 2. Problem-to-progress translation

For each material problem condition, show the affected party, workflow consequence, desired change, and evidence basis. Separate a desired beneficiary outcome from an internal efficiency aspiration.

### 3. Progress-to-product-outcome translation

State the product outcome that could create the desired change, including the actor, situation, and observable improvement. Keep outcomes singular enough to reason about, but do not turn them into screens or stories.

### 4. Outcome-to-capability translation

Identify the broad product capabilities required for each outcome. Explain why each capability is necessary, what workflow condition it addresses, and what would remain unresolved without it.

### 5. Capability-to-feature translation

Translate capabilities into candidate product features or feature families. For each candidate, record the user or workflow need served, the outcome supported, evidence or rationale, confidence, and whether it is required, enabling, optional, or rejected.

Features here are product-level commitments, not interface components, endpoints, models, data schemas, or implementation tasks.

### 6. Feature-to-acceptance translation

State the product-level acceptance criteria that demonstrate whether the required features collectively create the intended outcomes. Criteria should be outcome-oriented and observable at product level. Design, deterministic-system, and AI criteria belong later to outcome stories under the acceptance-criteria charter.

### 7. Responsibility and authority implications

Show which actors or product responsibilities are implicated by each outcome and feature: beneficiary, human decision-maker, deterministic product behavior, AI assistance, external party, or control function. Identify where a candidate feature would change authority, accountability, or review boundaries.

### 8. Coverage and contradiction review

Check for workflow conditions with no product response, features with no problem basis, acceptance criteria with no outcome basis, duplicated translations, unsupported assumptions, and conflicts with product principles or constraints.

### 9. Deferred and rejected translations

Record valuable problem conditions that are deferred, candidate features rejected as solution-first or out of scope, and acceptance criteria not carried forward. Include the reason and the decision owner.

### 10. PRD handoff

Produce a concise handoff containing the proposed product outcomes, broad capabilities, candidate feature commitments, product-level acceptance criteria, open decisions, and traceability references for PRD drafting. Mark each item as proposed, adopted, deferred, rejected, or unresolved.

## Principles

- Preserve the causal chain; do not jump from pain to feature.
- Translate progressively, with each layer adding a distinct decision.
- Keep evidence, interpretation, proposal, and approval visibly separate.
- Treat features as means to outcomes, not as outcomes themselves.
- Keep the map broader than screens and more concrete than the discovery artifact.
- Make omissions and rejections auditable.
- Do not let the map silently resolve authority, policy, feasibility, or scope decisions that require product-manager judgment.
- Do not prescribe executor implementation in feature or acceptance language.
- Carry uncertainty forward when it affects the product decision.
- Prefer the smallest product commitment that addresses the validated problem.

## Relationship to adjacent artifacts

| Artifact | Primary question | Authority |
|---|---|---|
| Pre-PRD business problem and workflow definition | What is happening, who is affected, where does the real workflow break, and is the opportunity worth pursuing? | Evidence and discovery authority |
| Product Translation Map | How does that understanding translate into candidate product outcomes, capabilities, features, and product-level proof? | Reasoning and traceability bridge |
| PRD | What product should exist, for whom, with what outcomes, capabilities, scope, and product-level acceptance criteria? | Canonical product authority after approval |
| Epic and outcome-story set | How are approved product outcomes decomposed into singular user outcomes and shared acceptance criteria? | Downstream product decomposition |

## Completion test

The map is ready for PRD drafting when every proposed product outcome and required capability traces to a validated problem/workflow condition, every required feature has a clear outcome purpose, every product-level acceptance criterion proves an intended outcome, and all unsupported leaps or unresolved decisions are visible.
