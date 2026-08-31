# Active product contract — clean restart

This is a derived implementation view. The active decision ledger (`docs/DECISION_LEDGER.md`) is the sole implementation authority. Archived material is historical and must not be used as requirements.

## Product promise

Move quickly. Decide safely. Defend every award.

The product is a guided sourcing journey for a procurement manager: bring a business need and its permitted sources together, produce an RFx the buyer can approve, invite suppliers, move relevant supplier replies toward completeness, understand the normalized comparison, then make and defend the award.

## User-facing screens

1. Landing — explain the procurement burden, the relief, the four-step path, and start the guided demo.
2. Create and approve RFx — one workspace from source review through explicit RFx approval. It ends only at `approved-rfx-ready-for-supplier-invitation`.
3. Invite suppliers — confirm recipients, invitation, package, and delivery; buyer explicitly sends. Supplier replies may arrive in any shape and over multiple messages.
4. Compare responses — move relevant responses toward completeness, extract/map/normalize, show provenance and exceptions, support analysis for understanding, and require buyer acknowledgment before award recommendation.
5. Decide and defend award — apply approved criteria, show recommendation proposal with trade-offs and evidence, draft rationale, handle permitted criteria changes, and commit the buyer's approval.

## Product behavior rules

- Every AI output is a proposal or interpretation, never an approval or state change.
- Deterministic mechanisms enforce schema, evidence/provenance, permissions, state gates, calculations, normalization, persistence, rendering, export, and sending.
- The AI receives only the current task, scoped source content, and user guidance. It must not receive evaluation cases, answer keys, treatment lists, or hidden expected outcomes.
- Relevance is evidence-based. A filename or email thread alone is not truth. Candidate sources are surfaced with reasons and require buyer confirmation where the contract requires it.
- Missing, unknown, conflicting, and non-comparable are distinct states. No value is invented. Unsupported claims are blocked or visibly marked.
- Policy is versioned and stage-aware. It defines how to treat a situation; the product does not invent universal hard blockers or exceptions outside policy.
- Buyer guidance is allowed at every stage. The buyer is the head pilot; Aera is the co-pilot.
- Any material uncertainty must expose the missing/conflicting evidence and an actionable resolution path. Approval cannot silently bypass unresolved conditions.

## Approved copy

Hero headline: `Move quickly. Decide safely. Defend every award.`

Pain: `Building an RFx takes time. Suppliers don’t follow your format. Justifying the award is hardest of all.`

Relief: `Get an RFx in a couple of clicks, a supplier comparison that doesn’t break your head, and an award you can explain with confidence.`

Hero supporting line: `Aera, our AI sourcing agent helps you move from business need to award decision.`

Landing comparison tracks: `Without Aera` / `With Aera`, with the three approved supplied pain-to-relief pairs recorded in Decision 570.

Workflow heading: `Here’s what Aera, our AI Sourcing Agent can do for you`

- `Shapes the business need, policy, and past RFxs into an RFx you can review and approve.`
- `See the complete history with each supplier, track and close the open points.`
- `Turns every supplier reply into one side-by-side comparison.`
- `Makes and helps you defend the award with clear trade-offs and evidence.`

Demo eyebrow: `TRY AERA IN ACTION`
Demo line: `See the sourcing journey from RFx to award`
Hero CTA: `Try Me`
Bottom guided-demo CTA: `Experience the magic`

## State gates

- Stage 1: explicit buyer approval of generated RFx.
- Stage 2: explicit buyer send of a complete package to confirmed recipients.
- Stage 3: deterministic readiness check, then buyer acknowledgment: `I acknowledge that the comparison and resulting analysis are accurate and sufficient for award recommendation.`
- Stage 4: explicit buyer approval of the award proposal and rationale.

## Demo constraints

The guided demo has prepared sources and responses that users can view. Add source, download, remove, edit, and similar mutation controls are visible but disabled with direct limitation copy. The demo ends in a successful award approval; criteria change and no-award are visible but disabled.
