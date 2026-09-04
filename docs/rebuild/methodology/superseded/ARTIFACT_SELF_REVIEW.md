# Self-review of the Aerchain rebuild artifacts

Audience: the product manager reviewing the rebuild process.
Purpose: assess whether the current artifacts serve distinct purposes and identify gaps before revision.
Authority: review evidence and correction record; not a product requirement.

## Review method

For each artifact, I checked:

1. whether its objective is distinct;
2. whether its recipient can act from it;
3. whether it introduces decisions owned by another artifact;
4. whether it duplicates content without adding a usable handoff; and
5. whether a required downstream artifact is missing.

## Findings

### Product requirements document

Current strength: it defines the buyer job, hypothesis, authority, scope, broad AI/scaffold responsibilities, scenario, omissions, and acceptance criteria.

Gap: the PRD contains sections titled Product scaffold requirements and AI requirements. At their current level they are valid product boundaries, but they need to remain broad. The detailed mechanics must live in the corresponding implementation specifications. The PRD should not become a technical contract.

Required correction: keep the user outcome, principles, broad boundaries, and acceptance criteria; trim any implementation-specific detail discovered during later review.

### Low-fidelity product model

Current strength: it attempts to express the buyer journey, actions, states, evidence, and authority.

Gap: it repeats the PRD’s end-to-end narrative and also adds design decisions such as alignment, columns, breakpoints, density dials, motion, and asset treatment. It is therefore neither a clean flow model nor a designer implementation specification.

Required correction: make it a flow artifact. For each surface, show entry condition, buyer goal, information order, buyer actions, Aera contribution, decision gate, exit condition, and failure or uncertainty paths. Move visual decisions to a new design implementation specification.

### Design implementation specification

Gap: it does not exist.

Required correction: create a separate designer handoff after the low-fidelity model is approved. It should describe the visual and interaction solution without changing the PRD or inventing technical behavior.

### Software scaffold specification

Current strength: it recognizes the need for deterministic guarantees, authority boundaries, recovery, integration labels, and engineering verification.

Gap: Attempt 1 crossed into technical design by prescribing API routes, client state, runtime directories, persistence mechanisms, and concrete schemas. The revision proposal corrects the boundary, but the active artifact has not yet been replaced.

Required correction: approve the boundary-corrected proposal, then make it the active product-level scaffold brief. The downstream engineer should create the technical design separately.

### AI capability specification

Current strength: it separates AI capabilities, inputs, outputs, grounding, and prohibited behavior.

Gap: it overlaps with the PRD because both describe AI boundaries. The distinction should be: the PRD states why AI matters to the buyer and the broad limits; the AI specification defines capability-level contracts and evaluation behavior.

Required correction: retain only capability-level details in the AI specification and remove any UI or scaffold implementation language if added later.

### Reviewer specification

Current strength: it distinguishes product, scaffold, AI, and interaction review and gives concrete scenarios.

Gap: it should explicitly map each review area to the artifact it reviews and state what evidence is sufficient for pass, fail, blocked-by-environment, and revision-required. It must not become another requirements document.

Required correction: add an artifact-to-review mapping and evidence standard.

### Implementation plan

Current strength: it provides a dependency sequence from approved requirements to implementation and review.

Gap: it currently assumes the specifications are already coherent and says “rebuild” before the artifact boundaries are approved. It also does not distinguish product-designer work from software-engineer and AI-engineer work.

Required correction: split the work by actor and gate each downstream output independently before integration.

## Self-review conclusion

The current documentation chain is not ready for implementation. The primary gaps are:

1. artifact objectives were not defined before drafting;
2. the low-fidelity model drifted into visual design and duplicated the PRD;
3. the designer implementation specification is missing;
4. the active scaffold specification remains technically over-prescriptive;
5. reviewer evidence rules are not yet mapped tightly enough; and
6. the plan does not yet enforce independent actor outputs before integration.

The correct next task is to approve this artifact charter, then revise the low-fidelity and scaffold artifacts and create the missing design specification under their distinct contracts.

