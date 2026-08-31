# Implementation index — derived from the decision ledger

Status: frozen prototype implementation index. This is a navigation and traceability view, not a source of truth. The only authority is `docs/DECISION_LEDGER.md`.

## Reading rule

An implementation area is not defined by one ledger row. Each row below is an anchor for a dependency closure. Before implementation, the closure must include every approved decision that affects the area’s outcome, UI, data/state, AI behavior, deterministic behavior, guardrails, assets, tests, and deployment. Candidate decisions must be resolved through their complete chronological lineage: corrections, supersession, approval state, and dependencies. Any missing or contradictory dependency blocks implementation.

## Product areas and initial ledger anchors

| Implementation area | User-facing or system outcome | Initial ledger anchors | Closure status |
|---|---|---|---|
| Product entry / landing | Procurement manager understands the burden, relief, sourcing path, and starts the guided demo | 219–250, plus all copy, UI, demo-entry, and synthesis corrections | To reconstruct |
| Stage 1 — Create and approve RFx | An approved RFx is ready for supplier invitation | 251–321 and all RFx, policy, schema, source, issue, approval, format, and transition decisions | To reconstruct |
| Stage 2 — Invite suppliers | The approved RFx is sent through the selected channel to confirmed recipients and delivery outcomes are recorded | 319–321, 461–462, 501, 552–553, plus all email, recipient, package, delivery, retry, and permission decisions | To reconstruct |
| Stage 3 — Supplier response completeness | Every relevant supplier has a complete response or an explicitly policy-authorized route for unresolved conditions | 384–385, 490–501, 467–469, plus all association, follow-up, attachment, version, image, and completion decisions | To reconstruct |
| Stage 4 — Comparison and analysis | The buyer understands a provenance-preserving comparison and can acknowledge readiness for award recommendation | 322–327, 382–390, 437–440, 500, 503–504, plus all normalization, currency, readiness, analysis, and acknowledgment decisions | To reconstruct |
| Stage 5 — Decide and defend award | The buyer approves a supported award record with trade-offs, evidence, rationale, and authority | 328 onward award decisions, 400–442, 554, plus all criteria, recommendation, rationale, authority, commit, export, and audit decisions | To reconstruct |
| Cross-cutting data and state | Every claim, source, version, permission, transition, and approval remains traceable and enforceable | 1–218, 329–442, 491–501, 557, plus all data/state and storage decisions | To reconstruct |
| Cross-cutting AI behavior | AI interprets, extracts, generates, proposes, and answers only within approved scope and evidence | 329–442, 496, 501, plus all AI, relevance, retrieval, extraction, analysis, recommendation, and leakage decisions | To reconstruct |
| Cross-cutting deterministic behavior | Code, tools, and state controls enforce calculations, validation, permissions, transitions, storage, rendering, sending, and commits | 329–442, 497, 548, 552–558, plus all mechanism and server-boundary decisions | To reconstruct |
| Runtime demo assets | Viewable, relevant, inspectable runtime evidence supports the complete guided journey without exposing expected findings | 457–489, 502–535, plus all asset-generation, freeze, isolation, and validation decisions | To reconstruct |
| Verification and deployment | The implementation is tested against approved behavior and verified on Vercel | 437–443, 535, 548–561, plus all test, isolation, live-provider, browser, and deployment decisions | To reconstruct |

## Completion rule

No implementation area is ready merely because its anchor rows exist. The next activity is to expand each closure from the ledger and execute it. Only missing dependencies or contradictions return to decision review; a faithful derived closure does not require reapproval. Code is blocked only when the closure contains such an unresolved gap.
