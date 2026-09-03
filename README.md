# Aera — AI sourcing agent

> Audience: product reviewers, procurement managers, and implementers.
> Purpose: introduce the prototype and route readers to its evidence pack.
> Authority: concise project overview; the decision ledger and active contract govern behavior.

Aera is a product-development prototype for procurement managers. It helps reconstruct the sourcing workflow from a business need to an explainable supplier-award decision:

1. create and approve an RFx;
2. invite suppliers and track delivery;
3. move supplier responses toward completeness;
4. compare responses with provenance and visible exceptions; and
5. prepare and defend an award for buyer approval.

The prototype is intentionally bounded. Aera interprets, extracts, maps, analyzes, and proposes. Deterministic mechanisms calculate, validate, preserve provenance, enforce state transitions, and record approvals. The procurement manager retains authority over requirements, follow-ups, comparison readiness, and the award.

This is not a production procurement system. It is a reviewable product and implementation artifact designed to make workflow behavior, uncertainty, authority, and failure handling visible before production hardening.

## Start here

- [Documentation index](docs/README.md) — what each document is for and where to go next.
- [Demo walkthrough](docs/DEMO_WALKTHROUGH_SCRIPT.md) — the intended five-screen guided journey.
- [Active product contract](docs/ACTIVE_PRODUCT_CONTRACT.md) — concise user-facing behavior and boundaries.
- [AI capability brief](docs/AI_CAPABILITY_REVIEW_BRIEF.md) — what the AI should and should not do.
- [Implementation index](docs/IMPLEMENTATION_INDEX.md) — mapping from product areas to implementation and verification work.
- [Decision ledger](docs/DECISION_LEDGER.md) — canonical decision authority and full historical lineage.
- [Product-development method](docs/PRODUCT_DEVELOPMENT_METHOD.md) — reusable principles extracted from the harness work.

## What the guided demo demonstrates

The seeded scenario is a corrugated-packaging RFx with five suppliers and thirty line items. Evidence arrives through documents, spreadsheets, email, HTML, CSV, and a low-quality mobile image. The demo makes the difficult parts of sourcing inspectable:

- supplier replies arrive in different formats and across multiple messages;
- missing, ambiguous, conflicting, and non-comparable values remain distinct;
- original values remain visible beside normalized values;
- policy and source evidence remain attached to material decisions;
- follow-ups, sends, comparison acknowledgment, and award approval remain explicit human actions; and
- the final award proposal contains trade-offs, evidence, and an editable rationale.

## Product-development boundary

The active implementation is derived from the decision ledger. The active product contract and implementation index are navigation and synthesis views; they may not add or silently reinterpret requirements. Historical reasoning remains useful for understanding why a decision exists, but it is not a substitute for the current canonical decision.

The prepared runtime dataset supports the guided demo. It is not a requirements source. The hidden evaluation set is not deployed and must not be exposed to the AI during runtime.

## Run locally

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run test
npm run build
npm run verify:contracts
npm run verify:assets
npm run verify:prototype
npm run verify:workflow
```

The deployed prototype uses the OpenAI Responses API when `OPENAI_API_KEY` is configured in Vercel. The live-provider and workflow checks cover the AI and deterministic paths separately where applicable.

## Public proof

- [GitHub repository](https://github.com/hridhay-muralidharan/aerchain-sourcing-workbench)
- [Live prototype](https://aerchain-sourcing-workbench.vercel.app/)
