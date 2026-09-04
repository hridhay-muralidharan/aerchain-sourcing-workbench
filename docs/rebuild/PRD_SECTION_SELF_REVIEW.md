# PRD section synthesis review

Audience: the product manager reviewing the proposed PRD structure.
Purpose: test whether the section model is non-redundant, sequential, and sufficient before drafting.
Authority: review artifact; it does not define the product.

## Distinction review

### 1. Purpose and boundary

Unique contribution: tells the reader how to use the document and prevents downstream artifacts from being placed inside it.

Risk: becoming a generic introduction. Keep it short.

### 2. Product context

Unique contribution: establishes the surrounding procurement situation and why the opportunity exists.

Risk: repeating the problem. Context should describe the environment and stakes, not the buyer’s detailed friction.

### 3. Primary user and job

Unique contribution: identifies the actor, trigger, job, and desired progress.

Risk: describing Aera’s features. The user job must exist before the product is introduced.

### 4. Problem to solve

Unique contribution: names the barriers that make the job difficult, including manual effort, uncertainty, fragmented evidence, and defensibility pressure.

Risk: turning barriers into solution language. “Needs a comparison workspace” belongs later.

### 5. Intended product outcomes

Unique contribution: describes the observable improvement produced by solving the problem.

Risk: listing capabilities. An outcome is a changed user condition, such as understanding which supplier claims are comparable enough to support a decision.

### 6. Product hypothesis

Unique contribution: states the causal belief linking the product intervention to the intended outcomes.

Risk: restating the outcomes with “if” and “then.” The hypothesis must name the intervention and the mechanism of change.

### 7. Product principles

Unique contribution: provides rules for resolving future product choices, especially around buyer authority, evidence, AI limits, deterministic behavior, and uncertainty.

Risk: becoming a technical or ethical essay. Keep only rules that will govern a product decision.

### 8. Product capabilities and features

Unique contribution: identifies what the product must be able to provide to make the hypothesis plausible.

Risk: becoming an early epic or screen map. Capabilities should be broad and outcome-linked; decomposition is downstream.

### 9. Actors and responsibility boundaries

Unique contribution: states who performs which kind of work and who owns consequential decisions.

Risk: repeating principles. Principles say what must be protected; responsibility boundaries say which actor owns which responsibility.

### 10. Scope and omissions

Unique contribution: makes the selected product boundary and deliberate trade-offs explicit.

Risk: listing every implementation limitation. Only include product-scope decisions; technical constraints belong downstream.

### 11. Product-level acceptance criteria

Unique contribution: provides the final test of whether the requirements are sufficiently defined and the intended product outcomes are covered.

Risk: becoming the detailed acceptance criteria for every story. It should be outcome-level and serve as the source from which later stories derive their criteria.

## Cohesion review

The sequence has a one-way dependency:

Context establishes the situation → user/job identifies the work → problem identifies the barriers → outcomes define the desired change → hypothesis explains the proposed intervention → principles constrain choices → capabilities describe the required product response → actor boundaries assign responsibility → scope limits the commitment → acceptance criteria define what must ultimately be true.

No section should need to reach forward to a later section to justify its existence. If a sentence can be moved to another section without losing meaning, it should be moved before drafting is finalized.

## Current gap check

The existing PRODUCT_REQUIREMENTS.md does not follow this sequence. It currently:

- introduces a product hypothesis before fully separating context, job, problem, and outcomes;
- organizes the main body around the later product workflow;
- mixes broad product requirements with actor-specific requirements;
- places scenario details alongside product requirements without a clear context boundary; and
- ends with acceptance criteria that are closer to a screen journey than product-level conditions.

The corrected PRD should be drafted only after this section charter is approved.

