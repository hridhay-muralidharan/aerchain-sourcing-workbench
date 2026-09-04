# Generic acceptance-criteria charter proposal

Audience: product managers, designers, engineers, AI or agent builders, and reviewers.
Purpose: define how acceptance criteria are created from product outcomes and used to coordinate and verify downstream work.
Authority: proposed cross-product methodology. It is not an Aerchain requirement and is not yet part of the harness repository.

## First principles

An acceptance criterion is an observable condition that must be true for a specified outcome to count as achieved.

A useful criterion:

- belongs to one outcome;
- describes a result or response, not an implementation method;
- is specific enough for an independent reviewer to determine pass or fail;
- is traceable to an approved product requirement;
- names the relevant actor or system responsibility;
- includes the relevant user action or triggering condition where behavior is involved; and
- does not silently introduce a new product decision.

Acceptance criteria are not feature lists, design instructions, technical tasks, test-case scripts, or implementation plans.

## Decomposition model

### Epic

An epic groups related outcome stories that together represent a meaningful product area or product commitment. An epic may contain one or more outcomes and may later map to one or more screens, services, or surfaces.

An epic is a grouping device. It is not itself the smallest acceptance unit.

### Outcome story

An outcome story describes one user or beneficiary outcome that contributes to an intended product outcome.

It should specify:

- the actor and situation;
- the progress or outcome the actor needs;
- why that outcome matters; and
- the product context in which it occurs.

A story should not be defined by a screen, component, endpoint, model, or database record.

### Acceptance-criteria set

Each outcome story has one synthesized acceptance-criteria set. The set describes how the complete product must behave to achieve that outcome.

Where the product includes these responsibilities, the set may be expressed through separate lenses:

- Design or experience: what the user can see, understand, do, and navigate, and in what order.
- Deterministic product scaffold: how the product responds to user actions through validation, state, calculations, permissions, persistence, recovery, and other non-probabilistic behavior.
- AI or agent: how the AI responds to user actions through interpretation, generation, extraction, explanation, uncertainty, refusal, or proposal.

These lenses are responsibility views within one outcome story. They are not three independent features or sequential phases. A story may use one lens, two lenses, or all three depending on the product.

## Acceptance-criteria writing rules

- Start from the outcome, not the screen.
- Describe the user-visible result and system response.
- Use conditional behavior where relevant: when the actor does X, the product or AI responds with Y under condition Z.
- State what must remain visible or preserved when uncertainty, failure, or partial information exists.
- Keep the criterion at the boundary of the responsible actor. Do not prescribe framework, layout system, API topology, model, prompt, data schema, or storage technology.
- Make criteria independently reviewable and attachable to evidence.
- Avoid duplicating a capability statement as a criterion. Add the observable condition that proves it works.
- Keep product decisions in the story or PRD. Do not hide a new requirement inside a criterion.
- Include negative behavior where trust, safety, authority, or quality depends on what the product must refuse or block.
- Use the smallest number of criteria that fully establishes the outcome.

## Relationship between PRD, stories, and review

The PRD defines broad product outcomes and capabilities. Epics group related outcomes. Outcome stories decompose those outcomes into user progress. Acceptance criteria make each story verifiable.

The designer, software engineer, AI engineer, and reviewer each take the criteria relevant to their role from the same story. The reviewer evaluates the complete story, including interactions across responsibilities. No actor-specific artifact may create a criterion that cannot be traced back to a story and ultimately to an approved PRD outcome.

## Completion of an acceptance-criteria set

A set is complete when:

- the outcome is singular and understandable;
- the relevant user action and resulting condition are clear;
- all responsible product actors are covered;
- positive, blocked, uncertain, and failure behavior is covered where material;
- no criterion prescribes executor implementation;
- each criterion can be independently verified;
- the set does not duplicate another story; and
- the set is sufficient for an independent reviewer to judge the outcome without inventing missing product behavior.

