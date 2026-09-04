# Generic PRD section charter proposal

Audience: product managers creating requirements for any product or job.
Purpose: define the first-principles structure of a product requirements document before product-specific content is written.
Authority: proposed cross-product methodology. It is not an Aerchain requirement and is not yet part of the harness repository.

## First principles

A PRD is a decision-facing artifact that explains:

- why a product should exist;
- whose progress it is intended to improve;
- what change the product is expected to create;
- what product capabilities are required to create that change; and
- what must be true for the requirements to be considered satisfied.

A PRD is not a screen map, epic map, user-story backlog, design specification, technical design, AI specification, delivery plan, or review report.

## Section sequence

### 1. Document purpose and decision boundary

Purpose: tell the reader what product decision this PRD supports, who should use it, and which later decisions are intentionally outside it.

This is about the document, not the product.

### 2. Context and opportunity

Purpose: describe the relevant environment, situation, or change that makes a product opportunity worth considering.

This establishes why the subject matters without yet describing the user’s detailed problem or a solution.

### 3. Beneficiary and job

Purpose: identify who should benefit and the progress they are trying to make in a triggering situation.

This defines the job independently of the proposed product.

### 4. Problem and consequences

Purpose: explain what obstructs the job today and what is lost, delayed, or put at risk when the problem persists.

This names the problem without prescribing features.

### 5. Intended outcomes

Purpose: state the observable changes the product is expected to create for its beneficiaries.

These are ends, not tasks, capabilities, or screens.

### 6. Product hypothesis

Purpose: explain the proposed product intervention and why it is expected to produce the intended outcomes.

This is the causal bridge from problem to product response.

### 7. Product principles and constraints

Purpose: define the rules that govern product choices and protect user welfare, quality, authority, trust, safety, or other relevant values.

These constrain decisions without prescribing execution.

### 8. Product scope and non-goals

Purpose: state which product commitment is being made now and which adjacent needs are intentionally deferred.

This is the product boundary, not the document boundary and not a list of technical limitations.

### 9. Required product capabilities

Purpose: state the broad capabilities the product must provide for the hypothesis to be plausible within scope.

Capabilities describe what the product enables. They do not decompose into epics, stories, screens, components, APIs, or implementation tasks.

### 10. Product actors and responsibility boundaries

Purpose: state which actors perform or own which categories of work and decisions.

This allocates responsibility at product level. It does not prescribe how any actor executes.

### 11. Product-level acceptance criteria

Purpose: state the small set of outcome-level conditions that determine whether the PRD’s product requirements are coherent and sufficient.

These criteria validate the requirements and establish the basis for later outcome-story criteria. They do not replace those criteria.

## Sequential logic

Context explains why the opportunity exists. The beneficiary and job identify whose progress matters. The problem explains why progress is difficult. Outcomes define the desired change. The hypothesis proposes the product intervention. Principles constrain the intervention. Scope sets the commitment. Capabilities describe the product response. Responsibility boundaries allocate ownership. Product-level acceptance criteria test whether the entire requirements model is sufficient.

## Generality requirement

The section sequence must work whether the product is:

- a consumer product;
- a B2B workflow;
- an internal tool;
- a physical-digital service;
- an AI-enabled product; or
- a non-AI software product.

AI-specific responsibilities, technical mechanisms, screens, epics, stories, and actor-specific acceptance criteria are conditional downstream detail, not universal PRD sections.

