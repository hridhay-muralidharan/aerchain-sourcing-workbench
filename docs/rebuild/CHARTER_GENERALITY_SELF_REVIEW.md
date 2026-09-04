# Charter generality self-review

Audience: the product manager reviewing the proposed methodology.
Purpose: test whether the PRD and acceptance-criteria charters operate above one product and one assignment.
Authority: review artifact; it does not define product requirements.

## PRD charter review

### What is general

The PRD charter is based on universal product questions: why, for whom, what problem, what change, what intervention, what constraints, what commitment, what capabilities, who owns responsibility, and what must be true.

It does not require a particular domain, user role, workflow shape, technology, AI capability, interface type, or dataset.

### Remaining risks

- “Beneficiary and job” assumes a human-centered product. For products whose primary beneficiary is an organization, system, or non-human actor, the section must allow a beneficiary or affected actor without weakening job clarity.
- “Product actors” may be unnecessary for a very small product, but it remains useful as a responsibility section that can state when no external or AI actor is involved.
- Product-level acceptance criteria could overlap with outcome-story criteria unless they remain limited to whether the requirements model covers the intended outcomes and principles.
- “Product scope” could drift into delivery scope. It must remain a statement of the product commitment, not a sprint plan or implementation backlog.

These are wording and application risks, not evidence that the section sequence is assignment-specific.

## Acceptance-criteria charter review

### What is general

The charter treats the outcome story as the unit of acceptance and the responsibility lenses as conditional. It works for products with design and deterministic behavior but no AI, products with AI, and products where the relevant actor set differs.

It separates:

- epic as grouping;
- outcome story as the unit of user progress; and
- acceptance criteria as observable proof.

It does not require screens, APIs, models, components, or a particular delivery method.

### Remaining risks

- Not every product has a deterministic scaffold in the same sense. The lens should be interpreted as the product’s non-probabilistic behavior, not as a required technical layer.
- Not every outcome has all three lenses. The product manager must not invent criteria for an irrelevant actor.
- Some outcomes span multiple actors. The story may need criteria for external actors or human approvals, but the principle remains actor-specific criteria within one outcome.
- An outcome story may map to multiple screens or no screen. The reviewer must preserve the outcome boundary instead of forcing a screen boundary.
- A criterion can appear to be “observable” while still hiding an implementation choice. Reviewer review must check the abstraction level as well as the behavior.

## Cohesion review

The two charters are complementary:

- The PRD charter determines what product decisions must be made before decomposition.
- The acceptance-criteria charter determines how approved outcomes are made verifiable after decomposition.

The PRD creates the source of truth for outcome stories. Outcome stories create the source of truth for design, scaffold, AI, and reviewer criteria. No later artifact should feed requirements backward into the PRD without reopening the relevant product decision.

## Current Aerchain artifact gaps revealed by this review

- The current PRD is still unapproved because it is organized around screens and has not yet been rewritten using a generic PRD charter.
- The current low-fidelity model is not yet an outcome-story flow artifact.
- The current scaffold, AI, and reviewer documents were drafted before the acceptance-criteria charter existed.
- The missing design specification should be derived from story-level design criteria, not directly from the PRD.
- The implementation plan should sequence approved stories and actor deliverables, not generic artifact types alone.

## Recommendation

Approve the two generic charters before revising the Aerchain PRD. After approval, carry the charters back to the harness repository as reusable methodology, then apply them to the Aerchain job without making Aerchain’s screens or data parameters part of the generic method.

