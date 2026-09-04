# PRD section charter

Audience: the product manager reviewing the structure of the product requirements document.
Purpose: define the unique purpose, inputs, and outputs of each PRD section before drafting its prose.
Authority: proposed document structure. It does not approve product requirements.

## Governing rule

Each section must answer one question that the reader could not answer from the preceding section. A section may use facts established earlier, but it must add a distinct decision or understanding. The PRD should move from reason, to user, to desired change, to product response, to boundaries, and finally to what must be true.

## Sequential section model

| Order | Section | Question answered | It receives | It contributes | It must not become |
|---:|---|---|---|---|---|
| 1 | Document purpose and boundary | What is this PRD for, and what is outside it? | Assignment and artifact charter | Reader orientation and authority | A summary of the whole product |
| 2 | Product context | What situation creates the opportunity? | Assignment context and relevant existing evidence | Domain and organizational setting | The user problem in detail |
| 3 | Primary user and job | Who is the product for, and what job are they trying to complete? | Context | User, trigger, desired progress, and beneficiary | A feature list |
| 4 | Problem to solve | What makes that job difficult or costly today? | User job and evidence | Specific friction, uncertainty, and consequences | A proposed solution |
| 5 | Intended product outcomes | What should be different for the user and organization if the product works? | Problem | Observable changes the product is meant to create | Product features or screens |
| 6 | Product hypothesis | Why should the proposed product intervention produce those outcomes? | Problem and outcomes | Testable causal belief | A restatement of the outcomes |
| 7 | Product principles | What rules govern product choices and trade-offs? | User welfare, authority, evidence, and hypothesis | Non-negotiable decision rules | Implementation instructions |
| 8 | Product capabilities and features | What must the product provide to make the hypothesis plausible? | Outcomes, hypothesis, and principles | Broad capability inventory | Epics, stories, screens, components, or APIs |
| 9 | Product actors and responsibility boundaries | Who does what, and who retains authority? | Capabilities and principles | Broad AI, deterministic-system, buyer, and external-actor responsibilities | Technical architecture or detailed acceptance criteria |
| 10 | Scope and deliberate omissions | What is included in this product effort, and what is intentionally deferred? | Capabilities and constraints | Explicit boundary and trade-offs | A second problem statement |
| 11 | Product-level acceptance criteria | What must be true for the product requirements to be considered satisfied? | Outcomes, capabilities, principles, and boundaries | Outcome-oriented requirements for later decomposition | Screen-specific design criteria, technical tests, or AI evaluation cases |

## Section-writing rules

- Do not introduce epics, outcome stories, or screens in the PRD. Those are derived after the PRD.
- Do not describe implementation artifacts in the PRD. The PRD may state broad responsibilities and constraints, but not how an executor will implement them.
- Do not repeat the same claim in context, problem, outcome, hypothesis, and capability sections. Each later section must transform the earlier one.
- Features must be stated as capabilities that support an outcome, not as navigation or interface elements.
- Product-level acceptance criteria should state the conditions that later outcome stories must collectively satisfy. The detailed design, scaffold, and AI acceptance criteria belong in those outcome stories.
- Assignment-specific facts belong where they provide context or constrain the experiment. They must not define the general product capability.

## Intended reading progression

The reader should be able to summarize the PRD as:

1. This is the product decision being documented.
2. This is the situation that makes it relevant.
3. This is the user and the job.
4. These are the problems obstructing the job.
5. These are the changes the product should create.
6. This is why the product could create those changes.
7. These principles constrain the solution.
8. These broad capabilities are required.
9. These actors have these responsibilities.
10. This is the boundary of the effort.
11. These conditions determine whether the product requirements have been met.

