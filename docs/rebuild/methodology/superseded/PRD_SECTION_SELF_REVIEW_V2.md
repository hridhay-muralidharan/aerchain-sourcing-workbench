# PRD section synthesis review, second pass

Audience: the product manager reviewing the PRD structure.
Purpose: test the proposed sections for overlap and clarify the boundary between adjacent concepts before drafting.
Authority: review artifact; it does not define the product.

## Overlap findings

### Document purpose and boundary versus scope and deliberate omissions

This is the clearest overlap.

- Document boundary describes the artifact: what the PRD decides and what later artifacts decide.
- Product scope describes the product effort: what Aera will and will not attempt.

These must not share a section. The first belongs at the beginning as a short reader instruction. The second belongs after capabilities, when the product commitment is understood.

### Product context versus problem to solve

These are adjacent but distinct.

- Context describes the procurement situation, actors, environment, and stakes that exist before Aera.
- Problem describes the friction inside the buyer’s job: fragmented evidence, reconstruction effort, uncertainty, and difficulty defending the award.

A context sentence should still be true if the product does not exist. A problem sentence should explain why the current way of working fails to produce the desired progress.

### Primary user and job versus intended product outcomes

These can easily repeat each other.

- Job describes what the buyer is trying to accomplish when the trigger occurs.
- Outcomes describe the improved conditions that should exist after the product helps with that job.

The job uses the form: “When [situation], the buyer wants to [make progress], so that [job-level purpose].”
The outcomes use the form: “After using the product, the buyer can or has [observable improvement].”

The job must not include Aera’s capabilities. The outcomes must not become a task list.

### Intended product outcomes versus product hypothesis

The outcome states the desired change. The hypothesis states the proposed causal mechanism.

- Outcome: the buyer can compare supplier offers with less manual reconstruction and more confidence.
- Hypothesis: assembling source-backed RFx and response evidence into an interrogable comparison will reduce reconstruction effort and increase confidence.

If the hypothesis can be removed without changing the list of desired outcomes, the two sections remain distinct. If it only restates an outcome, it needs rewriting.

### Product principles versus actors and responsibility boundaries

These answer different questions.

- Principles say what must remain true when choices are made.
- Responsibility boundaries say which actor performs or owns the work.

Example principle: a model proposal must not become an approval.
Example boundary: Aera proposes; deterministic product behavior enforces the gate; the buyer approves.

The boundary section should not introduce new principles. It should allocate responsibilities required by the principles and capabilities.

### Product capabilities and features versus product-level acceptance criteria

These also overlap unless their forms differ.

- Capabilities say what the product must provide.
- Acceptance criteria say how we know the requirements are satisfied.

Capability: support evidence-backed supplier-response comparison.
Acceptance criterion: the product requirements are satisfied only when a buyer can inspect original and derived values, understand unresolved conditions, and use the comparison to support an award decision.

Acceptance criteria should not repeat the entire capability list. They should test the product outcomes and the principles across the capabilities.

### Assignment context versus product scope

The five vendors, thirty lines, file formats, and corrugated category are scenario attributes. The product scope defines the capabilities selected for this product effort. The scenario should be a short subsection under context or a separate “assignment scenario” note after scope. It must not be used to define capability scale.

## Revised section sequence

The following sequence reduces overlap by defining the boundary of each section:

1. Document purpose and artifact boundary
2. Product context and opportunity
3. Primary user and job
4. Current problem and consequences
5. Intended product outcomes
6. Product hypothesis
7. Product principles
8. Product scope and deliberate omissions
9. Required product capabilities
10. Actor responsibility boundaries
11. Product-level acceptance criteria
12. Assignment scenario and experiment parameters

## Why this order is stronger

- Section 1 tells the reader how to use the PRD.
- Sections 2–4 establish why the product is needed without describing the solution.
- Sections 5–6 define the desired change and the belief behind the intervention.
- Section 7 constrains product choices.
- Section 8 states the product commitment and its limits before listing the capabilities within that commitment.
- Section 9 states the broad means required to produce the outcomes.
- Section 10 allocates responsibility for those means without prescribing execution.
- Section 11 gives the final product-level test, using the outcomes and principles.
- Section 12 records the concrete assignment scenario without allowing its parameters to define the product.

## Remaining structural risk

Section 12 could be placed in the context section because it is input context. Keeping it last is useful only if the scenario is clearly labeled as an experiment parameter and does not influence the general product requirements. If that distinction creates more explanation than value, it should be moved into a separate assignment note and linked from the PRD.

## Drafting test

Before drafting each section, ask:

- What new question does this section answer?
- What earlier section does it depend on?
- What later decision does it enable?
- Which sentence would become redundant if the preceding section were written correctly?

A section fails if it cannot answer those questions without borrowing the job of another section.

