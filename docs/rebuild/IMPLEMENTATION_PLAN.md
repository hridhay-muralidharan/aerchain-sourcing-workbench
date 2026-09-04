# Aerchain rebuild implementation plan

Audience: product manager, implementation actors, and reviewer.
Purpose: sequence the rebuild from approved product requirements to verified prototype.
Authority: execution plan; it cannot reopen approved product decisions or silently resolve open implementation questions.

## Sequence

1. Review and approve the low-fidelity model, scaffold specification, AI specification, and reviewer specifications.
2. Audit existing code and runtime assets against those approved specifications. Preserve useful context, discard unsupported behavior.
3. Rebuild shared types, state transitions, and runtime boundaries.
4. Rebuild the product surfaces in the approved information hierarchy.
5. Implement AI endpoints and response validation.
6. Implement deterministic comparison, persistence, and award commit.
7. Run independent scaffold checks, AI checks, and interaction checks.
8. Fix failures through logged revision attempts.
9. Prepare walkthrough and decisions/omissions note.
10. Submit the complete assignment output for review.

## Current implementation rule

No code from the existing prototype is accepted merely because it already exists. It is retained only when it passes a traceability check against the approved PRD and specifications. No behavior is changed during this planning checkpoint.

