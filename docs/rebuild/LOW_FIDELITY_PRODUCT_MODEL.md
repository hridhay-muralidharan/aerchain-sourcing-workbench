# Aera low-fidelity product model

Audience: product designer, product/software engineer, and reviewer.
Purpose: show the intended information hierarchy and interaction sequence before visual polish or implementation.
Authority: derived from the approved PRD; layout details remain open to implementation review.

## Design read

Reading this as: a trust-first B2B procurement workbench for category buyers, with a calm evidence-led language, leaning toward a restrained editorial utility interface rather than a marketing dashboard.

Design dials: DESIGN_VARIANCE 4, MOTION_INTENSITY 3, VISUAL_DENSITY 5. The product is a multi-step workflow and data comparison surface, so usability and evidence hierarchy take priority over decorative motion.

## Shared shell

- Aera wordmark and one persistent sourcing-thread title.
- Progress navigation shows Landing plus the four work surfaces. It communicates where the buyer is and which transitions are available.
- A persistent state summary names the current RFx or comparison and its status.
- Every AI proposal has a visible “Aera proposal” label.
- Every buyer action is distinct from an AI output.
- Source links sit beside the claim or decision they support.
- Loading, empty, partial, blocked, and error states preserve the last valid work.

## Surface 1: Landing

Purpose: orient the buyer and start the guided sourcing thread.

Layout: left-aligned value proposition and one primary CTA; below it, a compact before/after explanation and a four-outcome workflow overview. Use a real product visual or a real captured screen if a visual is needed. Do not create a fake dashboard illustration from decorative rectangles.

Primary action: Start guided sourcing.

## Surface 2: Create and approve RFx

Purpose: make the RFx the first tangible buyer-owned artifact.

Layout: need summary at top; source evidence in a selectable list; generated RFx in the main reading column; issue treatment and readiness at the bottom of the artifact.

Actions: confirm need, generate draft, inspect source, confirm issue treatment, approve RFx.

States: need awaiting confirmation, generating, draft review, blocked by unresolved issue, ready for approval, approved.

## Surface 3: Lock supplier responses

Purpose: show the supplier interaction loop that produces usable evidence.

Layout: supplier list on the left; selected supplier conversation, attachments, extracted response facts, and open points on the right. Invitation preparation and delivery status remain visible but subordinate to response progress.

Actions: inspect recipient, send approved RFx through labeled simulation, review response, approve follow-up, inspect prepared reply, reassess, confirm policy-supported treatment.

States: awaiting response, delivery issue, needs clarification, follow-up approved, reassessing, complete, policy-authorized exception.

## Surface 4: Compare responses

Purpose: let the buyer understand the offers before any award recommendation.

Layout: evidence-first comparison table with supplier totals and line coverage; selected supplier drawer with original claims and source links; analysis panel below or alongside; explicit acknowledgment at the end.

Actions: inspect claim, open source, ask question, acknowledge comparison.

States: constructing, reviewing evidence, ready with visible exceptions, blocked by evidence, acknowledged.

## Surface 5: Decide and defend award

Purpose: make the final buyer decision explainable.

Layout: approved evaluation basis; Aera proposal; trade-off and evidence sections; editable rationale; final approval action with record result.

Actions: inspect basis, prepare proposal, edit rationale, approve award.

States: waiting for acknowledged comparison, proposal ready, rationale incomplete, approval in progress, award approved.

## Responsive behavior

At widths below 768px, each two-column work surface becomes a single reading order: status and primary action, artifact or comparison, evidence, then next action. Source drawers become inline disclosures. No critical evidence or approval action is hidden behind hover.

