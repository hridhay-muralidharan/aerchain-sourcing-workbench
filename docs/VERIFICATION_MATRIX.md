# Verification matrix

> Audience: product reviewers, QA, and engineers.
> Purpose: connect requirements to executable evidence and make gaps explicit.
> Authority: verification record; it does not redefine the product contract.

| Canonical requirement | User-facing behavior | Implementation | Deterministic enforcement | AI behavior | Test/evaluation | Status | Known gap / decision |
|---|---|---|---|---|---|---|---|
| Landing is distinct from four stages | burden, relief, path, and CTA | src/main.tsx, src/contract.ts | stage starts at 0 | none | verify:contracts, verify:prototype | Implemented | browser run is deployment-dependent |
| RFx requires buyer approval | draft shows issues and blocked approval | RfxScreen, api/intake.ts | client gate; server helper | AI drafts only | TypeScript, prototype check | Partial | durable approved version absent |
| Follow-up requires approval and reassessment | Approve follow-up starts reassessment | SupplierExchangeWorkspace, api/completeness.ts | explicit action and history | AI reassesses evidence | TypeScript, browser workflow | Partial | prepared reply is fixture-driven |
| Comparison preserves provenance and approved FX | totals and claims inspectable | api/comparison.ts, ComparisonWorkspace | Finance HTML parsed; originals retained | cited evidence review | verify:assets, verify:contracts | Implemented | policy exceptions need richer typed state |
| Acknowledgment gates award | checkbox and transition gated | ComparisonWorkspace | ready, decisionReady, and ack | analysis is non-award | TypeScript; browser workflow | Partial | live browser evidence external |
| Award is proposal then human commit | rationale and approval record | AwardDecisionWorkspace, api/award-commit.ts | readiness, supplier, rationale, idempotency | proposal only | TypeScript; API contract | Partial | process store is not durable |
| Hidden truth is isolated | never shown to UI or AI | data/public runtime split | asset verifier rejects public hidden set | scoped files only | verify:assets | Implemented | add drift check |
| Simulated mail is labeled | UI says simulated SMTP | SupplierExchangeWorkspace, api/mail/send.ts | per-supplier event IDs | none | verify:assets, prototype check | Implemented | no provider failure/retry model |

