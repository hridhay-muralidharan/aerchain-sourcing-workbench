# Aera product requirements

Audience: product manager, future epic and outcome-story authors, and reviewers.
Purpose: define why Aera should exist, who it serves, the product change required, the broad capabilities needed, and the product-level conditions for success.
Authority: draft for review. It applies the proposed cross-product PRD charter to the approved Aera direction; it does not yet authorize downstream decomposition or implementation.

## 1. Document purpose and decision boundary

This document supports the decision to rebuild Aera as a trustworthy procurement decision-support product for category buyers.

It establishes the product problem, intended outcomes, hypothesis, principles, scope, capabilities, responsibility boundaries, and product-level acceptance criteria. It does not define epics, outcome stories, screens, visual design, technical architecture, AI implementation, delivery sequencing, or review procedure.

## 2. Context and opportunity

Procurement teams increasingly receive supplier responses through mixed documents and communication formats. The commercial decision is still made from evidence that may be incomplete, differently structured, ambiguous, or difficult to compare.

The opportunity is to improve the path from a buyer-approved request for quotation to a defensible supplier decision while preserving the evidence and judgment needed to stand behind that decision.

## 3. Beneficiary and job

The primary beneficiary is a category buyer or procurement manager responsible for running a sourcing event and recommending a supplier award.

In the context of an approved RFx and incoming supplier responses, the buyer needs to turn dispersed and inconsistent evidence into a supported comparison, resolve material uncertainty, and make an award decision that can be explained to stakeholders.

## 4. Problem and consequences

Supplier responses often vary in structure, terminology, completeness, and level of detail. The buyer must manually find relevant claims, determine which claims refer to which requested items, reconcile comparable values, and identify what still needs clarification.

This creates avoidable effort and makes it difficult to distinguish a supported conclusion from an assumption. If uncertainty is hidden or authority is blurred, the buyer can make an incorrect comparison, send an unsupported follow-up, or approve an award that cannot be defended later.

## 5. Intended product outcomes

Aera should create these product outcomes:

1. A buyer can move from an approved sourcing requirement to a usable RFx with the relevant commercial and evaluation context intact.
2. A buyer can inspect supplier evidence in a comparable form while retaining original claims, missing information, ambiguity, conflicts, and source references.
3. A buyer can use natural-language questions to understand the comparison and receive answers grounded in the available evidence and visible uncertainty.
4. A buyer can resolve material gaps through an approved follow-up and see how new supplier evidence changes the comparison.
5. A buyer can make and defend a human-controlled award decision based on the comparison, evidence, and rationale available in the product.

## 6. Product hypothesis

If Aera combines structured sourcing context, evidence-linked supplier-response handling, bounded AI assistance, deterministic comparison behavior, and explicit buyer approvals, then category buyers will be able to reach a more efficient and defensible award decision with less manual reconciliation and less hidden uncertainty.

The hypothesis depends on the product making uncertainty inspectable and preserving the boundary between assistance and authority. AI may help interpret, extract, associate, explain, and propose. The product must not allow AI to silently approve, invent supplier facts, normalize unresolved ambiguity, or make the award decision.

## 7. Product principles and constraints

- Evidence remains inspectable: a material value or explanation can be traced to the supplier evidence and relevant sourcing context.
- Uncertainty remains visible: missing, ambiguous, conflicting, and unresolved information is represented as such.
- Assistance is bounded by authority: AI can assist and propose; the buyer owns consequential approvals and the award.
- Deterministic behavior protects trust: state gates, permissions, calculations, approved normalization, persistence of buyer actions, and rendering do not depend on an unverified model assertion.
- New evidence changes understanding transparently: a follow-up response can be associated with the relevant claim and its effect on comparison can be understood.
- The product supports judgment rather than disguising judgment as certainty.

## 8. Product scope and non-goals

### In scope

Aera will support the bounded end-to-end sourcing decision journey from requirement and RFx preparation through supplier evidence review, comparison, buyer questioning, approved follow-up, and human-controlled award approval.

The first product scenario is corrugated packaging. It uses five vendors and thirty line items to exercise varied formats, incomplete responses, and inconsistent supplier claims. These counts describe the demonstration dataset, not a product limit.

### Non-goals for this product version

- Production-grade persistence and operational recovery.
- Inbox or webhook ingestion.
- Real email delivery.
- General-purpose OCR hardening.
- Multi-user permissions and collaboration.
- Generalized policy authoring.

Outbound delivery may be simulated in the prototype, but that simulation must be identified as such. Live AI behavior may be used when configured and must remain within the product boundaries above.

## 9. Required product capabilities

Aera must provide the following broad capabilities:

- Capture and retain the sourcing requirement, evaluation context, and RFx content needed for supplier response and later decision-making.
- Require buyer approval before an RFx becomes an active supplier-facing request.
- Receive or represent supplier responses from varied formats and associate their claims with the relevant sourcing requirements.
- Preserve original supplier values and source evidence while presenting approved comparable values and explicit states for missing, ambiguous, conflicting, or unresolved information.
- Identify and explain evidence gaps and support buyer-approved follow-up when additional supplier information is needed.
- Reassess the comparison when approved follow-up evidence arrives.
- Answer buyer questions in natural language using available evidence, comparison context, and visible uncertainty.
- Support a rationale and an explicit human approval that records the award decision within the product’s supported persistence boundary.
- Make the current state, required buyer action, evidence basis, and unresolved limitations understandable throughout the journey.

## 10. Product actors and responsibility boundaries

The category buyer or procurement manager owns the sourcing requirement, RFx approval, follow-up approval, comparison acknowledgment, and final rationale and award approval.

The supplier provides response claims and follow-up information. Supplier statements remain supplier evidence; the product does not convert them into facts without preserving their source and state.

The AI capability interprets, extracts, associates, explains, answers, and proposes within the evidence and policy context made available to it. It does not approve the RFx, authorize a follow-up, resolve unsupported ambiguity, or award a supplier.

The deterministic product behavior controls workflow readiness, approved state transitions, permissions, calculations, approved normalization, evidence association, persistence of buyer actions, and the presentation of resulting state.

## 11. Product-level acceptance criteria

These criteria validate the product requirements as a whole. They are not the later design, deterministic-scaffold, or AI criteria for individual outcome stories.

- The product supports one coherent journey from an approved sourcing requirement to a human-controlled award decision, with no consequential step represented as complete solely because AI produced an output.
- A buyer can distinguish original supplier evidence, product-derived comparable values, unresolved uncertainty, and the basis for any recommendation or rationale.
- The product prevents or clearly blocks consequential actions when the required buyer authority, evidence, or readiness condition is absent.
- A buyer can inspect the evidence and uncertainty behind a comparison and use that context to ask a natural-language question without the product presenting unsupported certainty as fact.
- Approved follow-up can add evidence and produce an understandable reassessment of the affected comparison.
- The final award is a separate human decision, with a visible rationale and a recorded decision; any limitation in the prototype’s persistence is disclosed rather than implied to be production durability.
- The prototype’s simulated integrations, live or unavailable AI behavior, persistence boundary, and excluded production capabilities are truthful and discoverable to a reviewer.
- An independent reviewer can complete the product journey and find evidence for the intended outcomes, acceptance criteria, authority boundaries, and known limitations.

## 12. Assignment parameters

This section records the context used to evaluate the prototype, without turning the assignment fixture into a universal product requirement.

- Scenario: corrugated packaging sourcing.
- Demonstration dataset: five vendors and thirty line items.
- Response variety: spreadsheets, documents, email, HTML, CSV, PDF, and a phone-photo SVG, including incomplete and inconsistent claims.
- Evaluation focus: buyer completion of the journey, evidence inspection, natural-language analysis, visible uncertainty, approved follow-up, and separate human award approval.
- Product truthfulness: simulated outbound delivery is labeled; hidden evaluation data remains evaluation truth and is not a product requirement.

## Review gate

This draft is ready for product-manager review against `GENERIC_PRD_CHARTER_PROPOSAL.md`. Approval is required before epics, outcome stories, low-fidelity flow, or executor specifications are derived.
