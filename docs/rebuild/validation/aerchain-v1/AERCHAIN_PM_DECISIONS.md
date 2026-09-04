# Aerchain product-manager decisions v1

Audience: PRD author, downstream story authors, and reviewers.
Purpose: record the product framing and bounded choices made from the Aerchain intake and existing decision register.
Authority: instance PM decision artifact. These are approved for the assignment rebuild where marked approved; they do not generalize to the harness.

## Decision summary

The product is a buyer-facing procurement decision-support workflow. It carries a category buyer from sourcing need through RFx approval, supplier evidence understanding, comparison, analysis, and a separate human-controlled award decision. AI assists with interpretation, extraction, association, explanation, and proposals; deterministic behavior and buyer approvals retain authority.

## Decisions

| ID | Decision | Evidence/rationale | Rejected alternative | Owner/approver | Status |
|---|---|---|---|---|---|
| AER-DEC-001 | Center the product on a category buyer/procurement manager | D-001/D-002; AER-SRC-001 | Generic “procurement user” with no decision owner | PM | Approved |
| AER-DEC-002 | Use an end-to-end sourcing slice from need/RFx through award | D-003; AER-SRC-001/005 | Standalone extraction or chat demo | PM | Approved |
| AER-DEC-003 | Carry forward corrugated packaging with five suppliers and thirty line items as the fixture | D-008; AER-SRC-002/003 | Invent a new scenario or treat counts as product limits | PM | Approved |
| AER-DEC-004 | AI may interpret, extract, associate, explain, answer, and propose | D-004; AER-SRC-004 | AI silently approves, invents, normalizes ambiguity, or awards | PM | Approved |
| AER-DEC-005 | Deterministic behavior owns state gates, evidence links, calculations, approved normalization, permissions, persistence, and rendering | D-005; AER-SRC-004 | Let model output change consequential state | PM | Approved |
| AER-DEC-006 | Comparison preserves original and normalized values, missing/ambiguous/conflicting states, evidence, and policy basis | D-006; AER-SRC-004/005 | Show only a clean ranked table | PM | Approved |
| AER-DEC-007 | Buyer explicitly approves RFx, follow-up, comparison readiness, and award rationale/decision | D-007; AER-SRC-004/005 | Infer approval from generated output or silence | PM | Approved |
| AER-DEC-008 | Analysis is a buyer-facing comparison workspace with natural-language answers and evidence links | D-012; AER-SRC-006 | Separate ungrounded analyst chatbot | PM | Approved |
| AER-DEC-009 | Outbound delivery is simulated and labeled; AI remains live when configured | D-009; AER-SRC-001/004 | Present simulation as real mail or hardcode the reasoning path | PM | Approved |
| AER-DEC-010 | Exclude production persistence, inbox/webhooks, real mail, OCR hardening, multi-user permissions, and generalized policy authoring | D-010; AER-SRC-001 | Overclaim production readiness | PM | Approved |
| AER-DEC-011 | Success is buyer completion, evidence inspection, visible uncertainty, grounded questions, and defensible award decision | D-011; AER-SRC-001 | Optimize only for speed or visual demo completion | PM | Approved |
| AER-DEC-012 | Preserve human authority at all consequential boundaries | D-004/D-005/D-007; AER-SRC-004 | Autonomous award or hidden policy decisions | PM | Approved |

## Product framing

### Target outcome

Reduce the buyer’s manual reconciliation and hidden uncertainty when turning inconsistent supplier evidence into a comparison and award decision, without transferring consequential judgment to AI. This is a PM outcome hypothesis, not a measured production result. [AER-INT-001; AER-DEC-011]

### Scope

The prototype covers one guided sourcing journey: business need and authorized sources, RFx preparation and approval, supplier invitation representation, response understanding and follow-up, comparison and analysis, and separate award approval. [AER-DEC-002/003/008]

### Product constraints

Evidence, uncertainty, authority, provenance, and truthful simulation are mandatory product boundaries. Assignment fixture values are not generalized requirements. [AER-DEC-004 through AER-DEC-010]

### Hypotheses requiring evaluation

- Evidence-linked comparison reduces manual buyer effort without reducing trust.
- Natural-language answers grounded in comparison context improve buyer understanding.
- Explicit uncertainty and human gates make the recommendation safer to defend.
- The supplied response variety is sufficient to expose the intended extraction and comparison risks.

These remain hypotheses until measured; they are not requirements by themselves.

## Decision dependencies and open questions

The prototype decision set is sufficient for the assignment PRD. Production deployment still requires answers to AER-OQ-001 through AER-OQ-003: authorized award role, escalation/delegation/SLA rules, and baseline outcome measures. Those unknowns remain visible rather than being converted into requirements.
