# Aera product requirements

Audience: the product designer, product/software engineer, AI engineer, and reviewer.
Purpose: define the product to be prototyped for the Aerchain assignment.
Authority: approved product direction for T003; implementation may clarify mechanics but may not silently change the user outcome or authority model.

## Product job

A category buyer must turn a business requirement into a defensible supplier award. Today, the work is spread across source documents, RFx templates, supplier emails, spreadsheets, attachments, and follow-up conversations. The buyer spends time reconstructing what each supplier actually offered and still has to explain why the selected award is fair.

Aera should reduce the effort and uncertainty in that job by organizing the sourcing thread around evidence and buyer decisions.

## Product hypothesis

If Aera assembles the business need and approved sourcing inputs into a buyer-reviewable RFx, then turns varied supplier responses into a provenance-preserving comparison that the buyer can interrogate, the buyer can reach and defend an award decision with less manual reconstruction and greater confidence.

The prototype tests this hypothesis through one complete, inspectable buyer journey. It does not claim production procurement automation.

## Primary user and authority

The primary user is a category buyer or procurement manager.

The buyer owns:

- the procurement ask and any corrections to it;
- approval of the RFx before supplier release;
- approval of a follow-up question or treatment;
- acknowledgment that the comparison is sufficient for award recommendation; and
- the final award decision and rationale.

Aera may interpret, extract, associate, normalize only when the rule is explicit, explain, and propose. Aera must not approve, invent supplier answers, silently resolve ambiguity, or choose the award on the buyer’s behalf.

## End-to-end experience

The product is one sourcing thread with five visible surfaces and four workflow stages. Landing is the entry surface, not a stage.

### 1. Landing

The buyer sees the procurement burden, the relief Aera provides, and the end-to-end path. A clear CTA starts the guided experience.

### 2. Create and approve RFx

The buyer starts with a business need and a set of approved or candidate sources. Aera proposes an RFx containing scope, line items, questionnaire, terms, and response instructions. The buyer can inspect the supporting sources and the issues or assumptions Aera found.

The RFx cannot be released until the buyer has reviewed the draft and approved the current version. Unresolved material issues remain visible and block approval.

### 3. Lock supplier responses

The buyer reviews source-backed supplier contacts and the prepared RFx package, then sends the invitation through the available channel. Delivery status and incoming response evidence remain separate. Aera associates messages and attachments with suppliers, identifies gaps, and proposes the smallest useful follow-up.

The buyer explicitly approves any follow-up. Aera reassesses the new response version without erasing the earlier evidence. The stage is complete when each in-scope supplier has a complete response or an explicitly supported exception that is visible to the buyer.

### 4. Compare responses

The buyer sees supplier offers on a common comparison basis while preserving original values, units, currencies, line-level claims, attachments, and source links. Missing, ambiguous, conflicting, and non-comparable values remain distinct.

The buyer can ask natural-language questions such as which suppliers cover all lines, how totals compare, which delivery differences matter, or which claims need source review. Aera answers from the approved RFx, comparison, policy, and cited response evidence. It does not recommend or approve an award in this workspace.

The buyer acknowledges that the comparison and resulting analysis are accurate and sufficient for award recommendation before moving to the final surface.

### 5. Decide and defend award

Aera proposes a supplier, trade-offs, evidence, and a draft rationale using the approved RFx criteria and comparison. The buyer can edit the rationale and must explicitly approve the award. The approval produces a clear demo record and does not imply that Aera made the decision.

## Product scaffold requirements

The scaffold must:

- preserve the current sourcing thread and stage state;
- distinguish drafts, approved versions, response versions, comparison readiness, acknowledgment, and award approval;
- keep AI outputs visually separate from buyer actions;
- make evidence and source lineage inspectable at the point of decision;
- perform calculations and normalization deterministically from approved inputs;
- block consequential transitions when prerequisites are not met;
- handle loading, empty, partial, and error states without losing prior progress;
- make simulated integrations visibly simulated; and
- keep hidden evaluation data out of the served product and AI inputs.

## AI requirements

The AI must:

- draft an RFx from the business need and scoped sources;
- identify evidence-backed gaps, ambiguity, conflicts, and assumptions;
- associate relevant supplier messages and attachments without relying on filenames alone;
- extract claims with original values and source evidence;
- draft targeted follow-up questions;
- reassess new evidence while preserving history;
- answer buyer questions using only the approved scoped context; and
- propose an award with trade-offs, evidence, and rationale.

The AI must not:

- make an approval or state transition;
- invent a value or supplier answer;
- treat sending a follow-up as resolution;
- hide an exception or unsupported claim;
- use hidden evaluation cases or expected outcomes; or
- recommend an award from an incomplete or non-decision-ready comparison.

## Assignment scenario

The prototype uses the existing fabricated corrugated-packaging dataset: five vendors, thirty line items, varied response formats, incomplete or inconsistent responses, questionnaire and quality evidence, multiple messages, currencies, and an angled phone photograph. These counts and files make the demo concrete; they are attributes of this assignment dataset, not limits on the product capability.

AI extraction and reasoning loops must remain real when the live provider is configured. The prototype may simulate outbound delivery and other unavailable integrations only when the simulation is labeled and its boundary is documented.

## Deliberate omissions

This prototype does not attempt to provide production inbox/webhook integrations, real email delivery, durable multi-user storage, production-grade OCR, generalized policy authoring, enterprise identity and permissions, or autonomous award execution.

## Acceptance criteria

The product output passes when an independent reviewer can:

- start at Landing and understand the buyer job;
- generate and inspect an RFx from the scenario inputs;
- see the RFx approval boundary;
- inspect supplier evidence across its varied formats and history;
- see a comparison with original values, normalized values, uncertainty, and evidence links;
- ask a bounded natural-language question and receive an evidence-backed answer;
- observe the comparison acknowledgment gate;
- inspect a proposed award with trade-offs and rationale;
- edit and explicitly approve the award; and
- distinguish every AI proposal, deterministic calculation, simulated integration, and human decision.

