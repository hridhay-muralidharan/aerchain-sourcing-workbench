# Implementation index

> Audience: engineers and technical reviewers.
> Purpose: map the current contract to source files, APIs, fixtures, and executed checks.
> Authority: derived implementation view; the decision ledger remains authoritative.

Status vocabulary: Implemented = exercised by code and a check; Partial = visible path exists but a contract layer is incomplete; Simulated = intentionally fake integration; Stubbed = placeholder; Unverified = no executed evidence.

| Area | Source / API | Runtime evidence | Verification | Status | Ledger lineage |
|---|---|---|---|---|---|
| Landing | src/main.tsx, src/contract.ts | public/demo-runtime/business-need.md | verify:contracts, verify:prototype | Implemented | 570, 584 |
| Stage 1 — Create and approve RFx | src/main.tsx; api/intake.ts; api/_lib.ts | policy, schedule, template, specification, questionnaire | verify:contracts, verify:prototype, TypeScript | Partial — approval record/version remains client-side | 096, 145, 544–545 |
| Stage 2 — Lock supplier responses | src/SupplierExchangeWorkspace.tsx; api/mail/send.ts; api/completeness.ts | contacts, delivery events, five response sets | verify:assets, verify:prototype | Partial — delivery is simulated; reassessment is fixture-driven | 489, 496–499, 592–597 |
| Stage 3 — Compare responses | src/ComparisonWorkspace.tsx; api/comparison.ts; api/comparison-review.ts | schedule, claims, Finance FX, policy | verify:assets, verify:contracts, TypeScript | Partial — richer policy exception states remain | 500, 503–504, 599–602 |
| Stage 4 — Decide and defend award | src/AwardDecisionWorkspace.tsx; api/award.ts; api/award-commit.ts | approved RFx, policy, comparison evidence | verify:contracts, TypeScript | Partial — demo process store, not durable multi-user persistence | 554, 600–603 |
| AI boundaries | api/_lib.ts and AI endpoints | scoped public runtime only | verify:live when configured; source review | Partial | 496, 548 |
| Fixture boundary | data/demo-runtime and public/demo-runtime | public manifest; hidden evaluation only under data | verify:assets | Implemented; drift check remains | 457–489, 603 |
| Verification/deployment | scripts/*.mjs, Vercel | build output excluded | test, build, verify:* | Partial — live workflow is external | 548–561 |

The five visible surfaces are intentionally mapped to four stages: Landing is the entry surface, while surfaces 2–5 are stages 1–4. No second award workspace is canonical.
