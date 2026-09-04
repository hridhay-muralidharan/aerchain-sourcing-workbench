# Proposed PRD revision

Audience: product manager and product team.
Purpose: define the product requirements before decomposing them into epics, outcome stories, and screens.
Authority: proposed replacement for PRODUCT_REQUIREMENTS.md Attempt 1. It becomes active only after product-manager approval.

## Product context

Procurement buyers must move from a business requirement to a supplier award. The work requires reconstructing an RFx from scattered organizational inputs, interpreting supplier responses that arrive in different formats and messages, comparing incomplete or inconsistent offers, and explaining why an award is supported.

The product opportunity is to reduce the buyer’s manual reconstruction effort and increase confidence in the evidence behind the award.

## Primary user and job

The primary user is a category buyer or procurement manager.

When the buyer has a business requirement and needs supplier offers, they want to turn the requirement and relevant organizational knowledge into a trustworthy sourcing decision, so they can move quickly while defending the award.

## Product hypothesis

If the product helps the buyer assemble a reviewable RFx, understand varied supplier responses as evidence, compare offers on a common basis, and interrogate the comparison, then the buyer can reach and defend an award decision with less manual effort and greater confidence.

The prototype tests this hypothesis through a credible end-to-end procurement scenario. It does not claim production procurement automation.

## Intended product outcomes

The product must help the buyer:

1. establish a clear and reviewable sourcing requirement;
2. obtain and organize relevant supplier response evidence;
3. understand what each supplier did and did not provide;
4. compare supplier offers without hiding uncertainty or provenance;
5. investigate the comparison through natural-language questions; and
6. make and defend an award decision under explicit buyer authority.

These are product outcomes. Their grouping into epics, stories, and screens is a later decomposition decision.

## Product principles

- The buyer remains the authority for requirements, follow-ups, comparison sufficiency, and award decisions.
- Aera reduces cognitive and physical effort without weakening the quality or truthfulness of the buyer’s output.
- AI interprets, extracts, associates, explains, and proposes. It does not approve, invent, or silently resolve uncertainty.
- Deterministic product behavior preserves evidence, performs calculations, validates prerequisites, and enforces consequential state changes.
- Original supplier evidence remains inspectable beside derived or normalized values.
- Missing, ambiguous, conflicting, and non-comparable information remain distinguishable.
- Any simulated integration is clearly labeled as simulated.
- Product capabilities must generalize beyond the particular assignment dataset.
- The product must expose enough evidence and limitations for a buyer to make a reasoned judgment.

## Required product capabilities

The product must provide capabilities for:

- capturing a buyer’s business requirement;
- using relevant approved organizational sources to prepare a sourcing request;
- producing an RFx that the buyer can review and approve;
- sending or simulating the approved RFx through a selected channel;
- associating supplier responses and attachments with the correct supplier and request;
- extracting response claims, commercial values, delivery information, quality evidence, and questionnaire answers;
- identifying missing, ambiguous, conflicting, or unsupported information;
- supporting buyer-approved follow-up and reassessment;
- normalizing and comparing supplier offers while preserving original values and evidence;
- answering buyer questions using bounded, source-backed context;
- presenting award trade-offs, evidence, and rationale; and
- recording explicit buyer approval of the award.

## AI, deterministic, and human responsibility

At the product level:

- AI is responsible for interpretation, extraction, association, explanation, question answering, and recommendation proposals.
- Deterministic behavior is responsible for validation, calculation, provenance, state prerequisites, permissions, and approval recording.
- The buyer is responsible for confirming requirements, approving the RFx, approving follow-ups, judging comparison sufficiency, editing or accepting rationale, and approving the award.

The implementation artifacts will later translate these broad boundaries into outcome-story acceptance criteria. They must not introduce implementation choices into this PRD.

## Scope and omissions

The assignment prototype includes one credible fabricated procurement scenario with varied supplier formats, incomplete or inconsistent responses, evidence preservation, comparison analysis, and award support.

It deliberately omits production inbox and webhook integrations, real outbound mail, durable multi-user persistence, production OCR hardening, generalized policy authoring, enterprise identity, and autonomous award execution.

## Product-level acceptance criteria

The product passes its requirements review when:

- the primary buyer job and intended product outcomes are clear;
- the required capabilities are sufficient to produce those outcomes;
- the product principles preserve buyer authority and evidence quality;
- AI, deterministic, and human responsibilities are distinct;
- scope and omissions are explicit;
- the requirements are general enough to support the assignment scenario without being defined by its vendor or line-item counts; and
- the document can serve as a stable input for later epic, outcome-story, screen, design, scaffold, AI, and reviewer work.

This acceptance review evaluates the PRD itself. It does not yet verify the implementation or define the later user-flow acceptance criteria.


