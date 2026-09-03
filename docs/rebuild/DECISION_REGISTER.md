# Rebuild decision register

Audience: the product manager and downstream implementation actors.
Purpose: list the decisions required to make the rebuilt product reliable, reviewable, and implementable.
Authority: open decision record. A row becomes approved only after the product manager accepts it and the task log records the response.

Status values: Open, Proposed, Approved, Rejected, Superseded.

| ID | Decision question | Candidate answer from existing context | Why it matters | Status |
|---|---|---|---|---|
| D-001 | What buyer job is the prototype centered on? | Turn an RFx and inconsistent supplier replies into a supported shortlist and award rationale | Determines scope, workflow, and success criteria | Proposed |
| D-002 | Which user owns the consequential decisions? | Category buyer/procurement manager | Sets approval and review boundaries | Proposed |
| D-003 | What is the smallest useful end-to-end slice? | Need → RFx draft → buyer approval → supplier evidence → comparison → analyst questions → award rationale | Prevents building disconnected extraction or chat demos | Proposed |
| D-004 | What does the prototype claim AI can do? | Interpret, extract, associate, explain, and propose; never silently approve, invent, normalize ambiguity, or award | Separates AI product from deterministic scaffold | Proposed |
| D-005 | What must remain deterministic? | Schema/state gates, source links, arithmetic, normalization using approved inputs, persistence of buyer actions, and export/rendering | Prevents confident model output becoming system authority | Proposed |
| D-006 | What is the buyer’s minimum trustable comparison? | Original values, normalized values, missing/ambiguous/conflicting states, evidence links, and visible policy basis | Defines the comparison contract | Proposed |
| D-007 | What human actions are required? | Approve RFx; approve follow-up; acknowledge comparison; approve rationale/award | Defines task completion and interaction gates | Proposed |
| D-008 | Which runtime scenario demonstrates the capability? | Existing corrugated-packaging data with five vendors and thirty line items | Makes the demo concrete and comparable | Proposed |
| D-009 | How should the prototype handle integrations? | Simulate outbound delivery but label it; keep AI extraction/reasoning live when configured | Sets truthfulness of the demo | Proposed |
| D-010 | What is deliberately omitted? | Production persistence, inbox/webhook integration, real mail, OCR hardening, multi-user permissions, and generalized policy authoring | Prevents overclaiming | Proposed |
| D-011 | What does success mean for the assignment? | A buyer can complete the flow, inspect evidence, ask questions, understand uncertainty, and reach a defensible award decision | Defines prototype and reviewer criteria | Proposed |
| D-012 | What needs product-manager input before implementation? | Exact award decision interaction, comparison readiness treatment, desired analyst output formats, and whether the existing scenario remains the demo category | These materially change the product | Open |

