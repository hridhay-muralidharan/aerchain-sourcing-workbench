# Proposed revision: product/software scaffold specification

Audience: product/software engineer and reviewer.
Purpose: specify the software product behavior and constraints without prescribing its technical implementation.
Authority: proposed correction to SCAFFOLD_SPEC.md; it becomes the active specification only after product-manager approval.

## What the scaffold must enable

The scaffold must give a category buyer one coherent sourcing thread from business need to award approval. It must make the five visible surfaces usable:

- Landing explains the job and starts the thread.
- Create and approve RFx produces a reviewable RFx and makes approval explicit.
- Lock supplier responses shows the supplier interaction, response evidence, gaps, and buyer-approved follow-up.
- Compare responses presents a common comparison with uncertainty, provenance, and bounded analysis.
- Decide and defend award presents a proposal, editable rationale, and separate buyer approval.

## User-visible state behavior

The product must make it clear when work is:

- waiting for buyer input;
- being prepared or reviewed;
- blocked by missing or unresolved information;
- ready for a buyer decision;
- approved by the buyer;
- simulated by the prototype; or
- unavailable because the prototype omits the capability.

A transition that has not met its prerequisites must remain unavailable and explain what is missing. A failed operation must not erase the last valid buyer-visible state.

## Authority and evidence

The scaffold must keep Aera’s proposals visually and behaviorally separate from buyer decisions. It must show the evidence supporting material claims at the point where the buyer acts. It must prevent a model response, a send event, or a draft artifact from being mistaken for approval, delivery, response completeness, comparison acknowledgment, or award commitment.

## Deterministic guarantees

The implementation must provide deterministic guarantees for:

- arithmetic and approved normalization;
- source and evidence links;
- required-field and readiness checks;
- permission and transition checks;
- preservation of original evidence and prior versions;
- recovery from partial or failed operations;
- duplicate prevention for consequential actions; and
- clear record of buyer approvals.

The technical mechanism used to provide each guarantee is an engineering decision. The engineer must document it and show evidence that it satisfies the product behavior.

## Integration and data boundary

The prototype may simulate unavailable external integrations, but the interface must label the simulation and show what was and was not performed. The served demo data must remain separate from hidden evaluation truth. The implementation must not expose hidden evaluation data to the user or the AI capability.

## Required downstream engineering output

The product/software engineer should return:

- a technical design explaining the chosen architecture and its trade-offs;
- a mapping from each scaffold responsibility to implementation;
- data and state contracts;
- error and recovery behavior;
- test strategy and executable checks;
- deployment assumptions; and
- unresolved technical risks or decisions requiring escalation.

The engineer may choose the framework, component structure, API topology, persistence approach, and storage model within the PRD and this brief.

## Reviewer evidence

A reviewer should be able to verify the complete buyer journey, transition gates, evidence access, failure/recovery behavior, simulated integration labels, hidden-data isolation, and separation between AI proposals and buyer authority. The reviewer should not treat a particular framework, route name, or internal data structure as a product requirement.

