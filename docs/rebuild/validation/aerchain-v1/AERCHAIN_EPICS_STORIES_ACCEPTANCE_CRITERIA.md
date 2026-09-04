# Aerchain epics, stories, and acceptance criteria v1

Audience: product, design, software, agentic-AI, interaction, operations, and review actors.
Purpose: decompose the Aerchain PRD into coherent real-world procurement outcomes and reviewable criteria.
Authority: generated instance artifact, draft pending PRD approval. Criteria are not technical implementation tasks.

## Acceptance-criteria convention

Each story has one outcome and one synthesized criteria set. Criteria use responsibility lenses only where applicable: design/experience, software/deterministic, agentic-AI, interaction, safety, operational, evidence, and review. Executor choices remain downstream.

## AER-EPIC-001 - Prepare sourcing request

Measure: buyer reaches an approved supplier-ready RFx with the required context and issues visible.

### AER-ST-001 - Buyer approves a supplier-ready RFx

When a category buyer provides the business need and authorized sources, the buyer can review the resulting RFx and approve it for supplier invitation with material issues and source basis understood.

| ID | Type | Acceptance criterion | Evidence/reviewer | Source |
|---|---|---|---|---|
| AER-ST-001-AC-01 | Design/experience | The buyer can follow the RFx review in a meaningful order from sourcing purpose and scope through line items, questions, terms, sources, issues, validation, and approval. | Browser walkthrough; interaction reviewer | AER-REQ-001/002 |
| AER-ST-001-AC-02 | Software/deterministic | The RFx cannot enter the supplier-ready state until the required buyer approval action succeeds. | State/API test; software reviewer | AER-REQ-002 |
| AER-ST-001-AC-03 | Agentic-AI | Aera may draft or explain RFx content from scoped sources but labels inferred or unresolved content and never represents its draft as approved. | AI trace; AI reviewer | AER-DEC-004/012 |
| AER-ST-001-AC-04 | Evidence | Material RFx fields and surfaced issues expose their supporting source or an explicit unknown state. | Field-level source check; evidence reviewer | AER-REQ-001/004 |
| AER-ST-001-AC-05 | Safety | Unsupported policy or template semantics do not silently become mandatory RFx content; the buyer is routed to review or resolution. | Contradictory/unknown source test; risk reviewer | AER-DEC-006/012 |
| AER-ST-001-AC-06 | Interaction | The buyer can correct or resolve a surfaced issue before approval and can see why approval is unavailable when a required condition is unresolved. | Negative-path browser test; interaction reviewer | AER-REQ-002 |
| AER-ST-001-AC-07 | Operational | The product identifies the RFx version and approval event within the prototype’s supported record boundary. | Record inspection; operations reviewer | AER-DEC-005/010 |
| AER-ST-001-AC-08 | Review | An independent reviewer can verify that the approved RFx contains the required business-need fields without relying on hidden expected output. | Review checklist; PM reviewer | AER-PRD-AC-001/007 |

## AER-EPIC-002 - Invite suppliers

Measure: buyer sends the approved package to confirmed suppliers and can distinguish send from delivery.

### AER-ST-002 - Buyer sends the approved RFx package and knows delivery state

When an RFx is approved and supplier contacts are available, the buyer can inspect and explicitly send the complete package and understand the outcome for each supplier.

| ID | Type | Acceptance criterion | Evidence/reviewer | Source |
|---|---|---|---|---|
| AER-ST-002-AC-01 | Design/experience | The buyer can review supplier recipients, message, approved RFx attachment, response instructions, and per-recipient delivery state before moving on. | Browser walkthrough; interaction reviewer | AER-REQ-002/008 |
| AER-ST-002-AC-02 | Software/deterministic | Sending is unavailable without an approved RFx and confirmed recipient/package state. | API/state test; software reviewer | AER-DEC-005/007 |
| AER-ST-002-AC-03 | Agentic-AI | AI may propose message content or recipient associations only with visible basis and may not send or confirm delivery. | AI trace and permission test; AI reviewer | AER-DEC-004/012 |
| AER-ST-002-AC-04 | Interaction | The buyer explicitly confirms the package and send action; partial failure or retry does not silently resend an unapproved package. | Browser/API failure test; interaction reviewer | AER-DEC-007/009 |
| AER-ST-002-AC-05 | Safety | Simulated delivery is labeled as simulated and is not presented as proof of supplier receipt. | Demo inspection; risk reviewer | AER-DEC-009 |
| AER-ST-002-AC-06 | Evidence | Each supplier invitation outcome is associated with the approved RFx/package and delivery event source where available. | Event/source inspection; evidence reviewer | AER-SRC-002/004 |
| AER-ST-002-AC-07 | Operational | The product distinguishes prepared, sent, delivered, failed, and retry-needed states within the demo boundary. | Event/state test; operations reviewer | AER-REQ-008 |
| AER-ST-002-AC-08 | Review | A reviewer can confirm that no supplier response-evaluation result is treated as complete merely because an invitation was sent. | Cross-stage review; PM reviewer | AER-DEC-002 |

## AER-EPIC-003 - Resolve supplier evidence

Measure: buyer reaches a comparison-ready basis with material response gaps resolved or explicitly governed.

### AER-ST-003 - Buyer resolves material supplier-response gaps for comparison

When supplier responses arrive in varied formats or messages, the buyer can inspect the associated evidence, understand what is missing/ambiguous/conflicting, approve a useful follow-up, and see the affected response reassessed.

| ID | Type | Acceptance criterion | Evidence/reviewer | Source |
|---|---|---|---|---|
| AER-ST-003-AC-01 | Design/experience | The buyer can navigate from supplier history to source files, extracted claims, open points, proposed follow-up, and reassessment in an understandable order. | Browser workflow; interaction reviewer | AER-REQ-003/005 |
| AER-ST-003-AC-02 | Software/deterministic | A response is not marked comparison-ready solely because a message exists; readiness reflects the defined evidence/state conditions. | State/negative-path test; software reviewer | AER-DEC-005/006 |
| AER-ST-003-AC-03 | Agentic-AI | AI extracts and associates claims, identifies gaps, and proposes the smallest useful follow-up while preserving uncertainty and source references. | Extraction/association trace; AI reviewer | AER-DEC-004/006 |
| AER-ST-003-AC-04 | Interaction | The buyer can approve, reject, or revise a proposed follow-up before it is treated as authorized. | Approval interaction test; PM reviewer | AER-DEC-007 |
| AER-ST-003-AC-05 | Safety | AI does not invent an answer, silently resolve conflicting claims, or convert an ambiguous value into a definite one. | Missing/conflict/ambiguity cases; risk reviewer | AER-DEC-004/006 |
| AER-ST-003-AC-06 | Evidence | Every material extracted claim retains the originating file/message and the product distinguishes original claim from derived interpretation. | Field provenance audit; evidence reviewer | AER-REQ-004 |
| AER-ST-003-AC-07 | Operational | New approved follow-up evidence can be associated with the supplier response history and its effect on readiness is visible. | Reassessment run; operations reviewer | AER-REQ-005 |
| AER-ST-003-AC-08 | Review | Reviewer can test at least one varied-format, incomplete, inconsistent, and follow-up response without using hidden evaluation assertions as runtime input. | Fixture/evaluation check; independent reviewer | AER-SRC-002; AER-PRD-AC-007 |

## AER-EPIC-004 - Understand comparison

Measure: buyer can inspect and question a provenance-preserving comparison before award recommendation.

### AER-ST-004 - Buyer understands supplier trade-offs through an evidence-grounded comparison workspace

When supplier responses are ready for comparison, the buyer can inspect original and normalized values, uncertainty, policy basis, and evidence, then ask questions and receive grounded answers or clear limitations.

| ID | Type | Acceptance criterion | Evidence/reviewer | Source |
|---|---|---|---|---|
| AER-ST-004-AC-01 | Design/experience | The buyer can move from supplier-level comparison to line/question detail, source evidence, exceptions, and natural-language analysis without losing context. | Browser workflow; design/interaction reviewer | AER-REQ-004/006 |
| AER-ST-004-AC-02 | Software/deterministic | Comparison calculations and approved normalization produce repeatable results and retain original currency/unit/value alongside the comparable value. | Calculation/normalization test; software reviewer | AER-DEC-005/006 |
| AER-ST-004-AC-03 | Agentic-AI | Aera answers supported questions with evidence links and distinguishes facts, calculations, interpretation, hypotheses, and recommendations. | Q&A trace; AI reviewer | AER-DEC-004/008 |
| AER-ST-004-AC-04 | Interaction | The buyer can acknowledge comparison readiness only after inspecting the comparison and can understand why acknowledgment is unavailable when readiness fails. | State/browser test; interaction reviewer | AER-DEC-007 |
| AER-ST-004-AC-05 | Safety | Unsupported or irrelevant questions receive a limitation, clarification, or refusal rather than an invented procurement conclusion. | Unsupported-question test; risk reviewer | AER-DEC-004/012 |
| AER-ST-004-AC-06 | Evidence | Material comparison cells and answers link to the supplier evidence, approved source, and relevant policy basis where applicable. | Evidence-link audit; evidence reviewer | AER-DEC-006 |
| AER-ST-004-AC-07 | Operational | The comparison exposes missing, ambiguous, conflicting, and non-comparable states and does not silently hide unresolved exceptions. | Fixture/browser inspection; operations reviewer | AER-DEC-006 |
| AER-ST-004-AC-08 | Review | A reviewer can reproduce the comparison and analysis using runtime inputs only, with hidden evaluation data excluded from AI inputs. | Runtime isolation and repeatability test; independent reviewer | AER-SRC-002; AER-PRD-AC-004/007 |

## AER-EPIC-005 - Approve award

Measure: buyer approves a supported award decision with visible trade-offs, evidence, rationale, and authority.

### AER-ST-005 - Buyer approves and can defend the award decision

When the comparison is acknowledged and award conditions are satisfied, the buyer can inspect the proposed trade-offs and rationale, edit the rationale if needed, and separately approve the award.

| ID | Type | Acceptance criterion | Evidence/reviewer | Source |
|---|---|---|---|---|
| AER-ST-005-AC-01 | Design/experience | The buyer can review criteria, trade-offs, evidence, proposed supplier, rationale, and approval action as distinct parts of the decision. | Browser walkthrough; design reviewer | AER-REQ-007 |
| AER-ST-005-AC-02 | Software/deterministic | Award approval is unavailable unless comparison readiness and required buyer authority/state conditions are satisfied. | API/state negative-path test; software reviewer | AER-DEC-005/007/012 |
| AER-ST-005-AC-03 | Agentic-AI | AI may propose a supplier, trade-off explanation, and rationale draft grounded in the comparison but may not approve or commit the award. | AI trace/permission test; AI reviewer | AER-DEC-004/012 |
| AER-ST-005-AC-04 | Interaction | The buyer can review or edit the rationale and must perform an explicit approval action separate from generating the proposal. | Browser interaction test; PM reviewer | AER-DEC-007/011 |
| AER-ST-005-AC-05 | Safety | Unsupported evidence, unresolved material uncertainty, or missing authority prevents silent award completion and routes to review or correction. | Negative-path test; risk reviewer | AER-DEC-006/012 |
| AER-ST-005-AC-06 | Evidence | The award rationale identifies the comparison/evidence basis and preserves links or references sufficient for a reviewer to reconstruct the decision. | Award record audit; evidence reviewer | AER-REQ-007 |
| AER-ST-005-AC-07 | Operational | The prototype records or truthfully labels the award decision and its persistence boundary; it does not imply production durability where absent. | Record/deployment inspection; operations reviewer | AER-DEC-005/010 |
| AER-ST-005-AC-08 | Review | An independent reviewer can distinguish AI recommendation from human award approval and verify the final decision against the approved comparison. | Full final-stage review; independent reviewer | AER-PRD-AC-001/006/007 |

## Story-set completion state

Status: generated for review. The stories cover the approved assignment outcomes and applicable multidisciplinary criteria, but implementation and behavioral verification are not claimed by this artifact.
