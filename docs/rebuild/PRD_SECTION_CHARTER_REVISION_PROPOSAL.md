# Proposed PRD section charter revision

Audience: the product manager and PRD author.
Purpose: propose a tightened section architecture after the second-pass overlap review.
Authority: proposed replacement for PRD_SECTION_CHARTER.md; it becomes active only after review.

## Section contracts

### 1. Document purpose and artifact boundary

Defines the purpose of the PRD and the decisions it does not make. It prevents later artifacts from being pulled into the PRD.

### 2. Product context and opportunity

Describes the procurement environment and why this product opportunity matters. It does not describe the buyer’s detailed friction or the solution.

### 3. Primary user and job

Defines the buyer, the triggering situation, the progress they seek, and who benefits. It does not mention product features.

### 4. Current problem and consequences

Explains the barriers in the current job and what happens when they persist. It does not propose product capabilities.

### 5. Intended product outcomes

Defines the observable changes the product should create for the buyer. It does not list tasks, features, or screens.

### 6. Product hypothesis

Explains how the proposed product intervention is expected to create the outcomes. It does not add new outcomes.

### 7. Product principles

Defines the rules that govern product choices and protect user welfare, evidence quality, and authority. It does not allocate implementation work.

### 8. Product scope and deliberate omissions

Defines what the product effort commits to and what it explicitly defers. It does not list every technical limitation.

### 9. Required product capabilities

Lists the broad product capabilities needed to make the hypothesis plausible within scope. It does not decompose capabilities into epics, stories, or screens.

### 10. Actor responsibility boundaries

States at a broad product level what the buyer, Aera, deterministic product behavior, suppliers, and external systems are responsible for. It does not prescribe how an executor implements those responsibilities.

### 11. Product-level acceptance criteria

States the observable conditions that demonstrate that the product requirements collectively support the intended outcomes and principles. It does not become the detailed acceptance criteria for individual outcome stories.

### 12. Assignment scenario and experiment parameters

Records the concrete corrugated-packaging dataset and assignment parameters used to test the product. It does not define general product scale or capability.

## Non-overlap test

- Artifact boundary is about the document. Product scope is about the product.
- Context is about the environment. Problem is about user friction and consequences.
- Job is desired progress before the product. Outcomes are improved conditions after the product.
- Hypothesis is the causal explanation between intervention and outcome.
- Principles constrain choices. Responsibilities assign ownership.
- Capabilities describe product means. Acceptance criteria test whether the product delivers the intended outcomes.
- Scenario parameters instantiate the product for the assignment.

## Required downstream structure

Only after this PRD is approved should the work proceed to:

1. epic definition;
2. outcome-story definition;
3. design, scaffold, and AI acceptance criteria per story;
4. low-fidelity user and information flow;
5. designer, software, AI, and reviewer handoffs; and
6. implementation planning.

