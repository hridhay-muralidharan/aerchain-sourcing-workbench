# Active product contract

> Audience: product reviewers, procurement managers, and implementers.
> Purpose: define the current canonical behavior of the Aera prototype.
> Authority: derived from the approved decision ledger; runtime fixtures never override it.

## Product model

Aera is a guided sourcing workbench for a procurement manager. It turns a business need and authorized sources into an approved RFx, moves supplier replies toward a resolved comparison, and helps the buyer make and defend an award. Aera interprets, extracts, maps, analyzes, and proposes. Deterministic mechanisms validate, calculate, preserve provenance, enforce gates, and commit records. The procurement manager keeps authority over requirements, follow-ups, comparison acknowledgment, and award approval.

The workflow has four stages and five visible surfaces. Landing is the entry surface; it is not a workflow stage.

| Visible surface | Workflow stage | Entry state | Exit state |
|---|---|---|---|
| 1. Landing | — | Buyer has not started | Guided demo opened |
| 2. Create and approve RFx | 1 | Business need and selected sources available | approved-rfx-ready-for-supplier-invitation |
| 3. Lock supplier responses | 2 | Approved RFx and confirmed supplier contacts | responses-resolved-for-comparison |
| 4. Compare responses | 3 | Resolved supplier outcomes and evidence | Buyer acknowledgment recorded; award recommendation enabled |
| 5. Decide and defend award | 4 | Acknowledged, decision-ready comparison | award-approved with award record |

## Responsibilities and boundaries

- AI proposes RFx structure, identifies evidence-backed issues, extracts and maps response claims, explains comparison evidence, and proposes an award rationale.
- Deterministic code owns schema validation, source paths, versions, calculations, currency normalization, readiness gates, permissions, idempotency, persistence boundaries, rendering safety, and record identifiers.
- The buyer confirms the procurement ask, treats RFx issues, approves the RFx, approves follow-ups, acknowledges comparison sufficiency, edits or accepts rationale, and approves the award.
- AI receives only the current task and scoped approved sources. The hidden evaluation set is never sent to AI.
- Missing, unknown, conflicting, and non-comparable values remain distinct. No value is invented.

## Approved surface copy

- Hero: Move quickly. Decide safely. Defend every award.
- Supporting line: Aera, our AI sourcing agent helps you move from business need to award decision.
- Pain: Building an RFx takes time. Suppliers don’t follow your format. Justifying the award is hardest of all.
- Landing tracks: Without Aera / With Aera.
- Primary CTAs: Try Me / Experience the magic.
- Comparison acknowledgment: I acknowledge that the comparison and resulting analysis are accurate and sufficient for award recommendation.

## Runtime inputs and completion

The demo uses a corrugated-packaging RFx fixture with five suppliers and thirty lines. It is evidence for the guided runtime, not a universal requirement. Product completion means the required state transition and evidence are available; fixture completion means the expected demo assets are present.

A reviewer should be able to follow Landing → RFx approval → supplier delivery and response review → comparison and acknowledgment → award proposal and buyer commit. Verification must cover state gates, API validation, source provenance, AI boundaries, fixture isolation, and the successful browser journey—not only text presence.
