# Artifact charter for the Aerchain rebuild

Audience: the product manager and every downstream actor receiving a rebuild artifact.
Purpose: define the distinct job of each artifact so the documentation chain does not repeat or cross boundaries.
Authority: process contract for the rebuild. It governs how artifacts relate to one another; the PRD remains the product authority.

## The chain

Each artifact answers a different question for a different actor. An artifact may reference another artifact, but it must not perform the other artifact’s job.

| Artifact | Primary recipient | Unique question it answers | What it contains | What it must not contain |
|---|---|---|---|---|
| Product requirements document | Product team and all downstream actors | Why should this product exist, for whom, and what must be true? | User job, problem, hypothesis, product outcome, scope, principles, broad behavior, authority, broad acceptance criteria, omissions | Screen layout, technical architecture, model/prompt design, test procedure, execution sequence |
| Low-fidelity product model | Product designer, engineer, AI engineer, reviewer | What must the buyer experience and what information must move through the experience? | User journey, information revealed, user actions, decision points, states, handoffs, failure/uncertainty moments | Visual composition, typography, colors, breakpoints, components, endpoint design, model details, full product rationale |
| Design implementation specification | Product designer | What visual and interaction design should turn the approved product flow into a usable interface? | Visual language, hierarchy, composition, interaction patterns, responsive behavior, accessibility, motion, assets, design acceptance checks | Product scope changes, technical architecture, AI behavior, unapproved copy changes, implementation code |
| Software scaffold specification | Product/software engineer | What non-AI software behavior must exist around the AI capabilities? | Product-state behavior, deterministic guarantees, authority enforcement, integration truthfulness, recovery expectations, engineering deliverables, software acceptance checks | Framework, routes, database, internal schemas, deployment topology, model/provider configuration |
| AI capability specification | AI engineer | What should the AI interpret, produce, refuse, and expose to the scaffold? | Capability contracts, allowed inputs, outputs, grounding, uncertainty, refusal, no-invention rules, AI evaluation criteria | UI layout, technical API topology, product decisions, deterministic calculations, human approval implementation |
| Reviewer specification | Independent reviewer | How will we determine whether each output and the combined system is correct? | Independent review scope, test scenarios, evidence requirements, pass/fail rules, independence, interaction checks, failure classification | New requirements, implementation prescriptions, unrecorded approvals |
| Implementation plan | Product manager and downstream actors | In what dependency order should approved work be performed and reviewed? | Tasks, owners, inputs, dependencies, approval gates, outputs, verification gates, stopping/escalation rules | New product requirements, technical design, unapproved prioritization |

## Distinct completion conditions

- The PRD is complete when the product outcome and broad acceptance criteria are clear enough for each downstream actor to derive their own work.
- The low-fidelity model is complete when a reader can reconstruct the buyer’s information and decision flow without needing a visual design or technical design.
- The design specification is complete when a product designer can create the interface without inventing the product flow or authority model.
- The scaffold specification is complete when a software engineer can design the implementation without guessing the required product behavior, while retaining technical choice.
- The AI specification is complete when an AI engineer can define and evaluate the AI capabilities without guessing the buyer outcome or approval boundaries.
- The reviewer specification is complete when an independent reviewer can reach repeatable pass, fail, blocked, or revision-required outcomes from recorded evidence.
- The implementation plan is complete when the actors can see what must happen next, in what order, with which approvals and verification gates.

## Boundary principle

The PM defines the product and the contracts downstream actors must satisfy. Downstream actors choose the implementation within those contracts. A later artifact adds precision only in its own dimension; it does not rewrite earlier artifacts in more technical language.

