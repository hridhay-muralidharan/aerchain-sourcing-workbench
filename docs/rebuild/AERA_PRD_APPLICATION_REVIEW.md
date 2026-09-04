# Aera PRD application review

Audience: product manager reviewing the PRD charter test.
Purpose: check whether the Aera draft preserves the generic PRD boundaries and whether each section contributes a distinct step in the product argument.
Authority: review artifact for the draft; it does not approve the PRD.

## Charter application check

| Charter section | Aera application | Boundary result |
|---|---|---|
| Document purpose and decision boundary | Rebuild decision for a procurement decision-support product; downstream artifacts excluded | Distinct and clean |
| Context and opportunity | Mixed supplier evidence makes defensible comparison valuable | Does not define the buyer problem or solution |
| Beneficiary and job | Category buyer turns an approved RFx and replies into an award decision | Defines progress, not product behavior |
| Problem and consequences | Manual reconciliation and hidden uncertainty obstruct the job | Names costs and risks, not features |
| Intended outcomes | Five observable changes in buyer progress and decision quality | Ends, not capabilities |
| Product hypothesis | Bounded AI plus evidence and deterministic behavior should create the outcomes | Causal bridge, not a feature list |
| Principles and constraints | Evidence, uncertainty, authority, deterministic trust, transparent reassessment | Rules for later choices |
| Scope and non-goals | End-to-end sourcing slice and explicit exclusions | Product commitment, not technical backlog |
| Required capabilities | Broad capabilities needed to make the hypothesis plausible | Product response, not screens or implementation |
| Actors and responsibility boundaries | Buyer, supplier, AI, and deterministic product responsibilities | Product authority, not executor design |
| Product-level acceptance criteria | Whole-product observable conditions | PRD completion basis, not story-level decomposition |

## Overlap review

### Context versus problem

Context explains why the opportunity is relevant. Problem explains what obstructs the buyer and what happens if it persists. The draft keeps the first impersonal and the second job-specific.

### Problem versus outcomes

Problem describes the current negative condition. Outcomes describe the future change Aera must create. They are intentionally paired but not duplicates.

### Outcomes versus hypothesis

Outcomes state what must change. The hypothesis states why this product intervention could cause that change. It does not restate every outcome as a feature.

### Hypothesis versus capabilities

The hypothesis is one causal claim. Capabilities are the broad product means required to make that claim plausible. The capability list does not introduce screens, endpoints, models, or implementation tasks.

### Principles versus actor boundaries

Principles constrain product choices generally. Actor boundaries allocate responsibility in this product. The same authority concern appears in both because it is both a design constraint and a responsibility decision, but the statements serve different questions.

### Scope versus assignment parameters

Scope states the product commitment and non-goals. Assignment parameters state the fixture and evaluation conditions used to test this product version. The five-vendor/thirty-line scenario is not presented as product scope.

### Capabilities versus product-level acceptance criteria

Capabilities state what the product must enable. Acceptance criteria state how a reviewer can tell whether the requirements have been satisfied. The criteria do not repeat the full capability list and do not yet split into design, scaffold, and AI lenses.

## Boundary findings

- No section is organized around a screen.
- No epic or outcome story is embedded in the PRD.
- No executor is told how to implement a requirement.
- AI and deterministic responsibilities are stated at product boundary level only.
- The acceptance criteria remain broad enough to be decomposed into outcome stories, while still naming authority, evidence, uncertainty, and truthfulness that cannot be safely omitted downstream.

## Corrections made after internal review

- The hypothesis was kept as one causal bridge between the problem and product response; implementation mechanisms remain downstream.
- Product-level acceptance criteria were kept broad and whole-product. The design, deterministic, and AI lenses remain reserved for outcome-story criteria.
- Comparison acknowledgment remains in the buyer responsibility boundary because it is an approved consequential action in D-007. It is not promoted to a separate product outcome or screen.
- Award language now requires a recorded decision while making prototype persistence limitations explicit. This preserves the product requirement without falsely claiming production durability.
- Assignment fixture details remain in the final section and are not used as universal capability or scope statements.

## Result

Status: Internal review complete; submitted for product-manager review.

The generic PRD and acceptance-criteria charters remain proposals. This test does not carry them back to the harness repository or authorize downstream artifacts. The product manager’s review should now focus on the product decisions and requirements, not on resolving avoidable structural or boundary defects.
