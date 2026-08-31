# Clean restart boundary

Build date: 2026-08-31

The active product is implemented from `docs/DECISION_LEDGER.md`, the sole source of truth. `docs/ACTIVE_PRODUCT_CONTRACT.md` and `docs/IMPLEMENTATION_INDEX.md` are derived implementation views and may not add or silently reinterpret requirements. The fresh files under `src/`, `api/`, `scripts/`, and `docs/` must trace to stable ledger decisions. The prepared runtime dataset under `public/demo-runtime/` is an input set, not a requirements source. The hidden evaluation set remains under `data/demo-runtime/evaluation-hidden/` and is not deployed.

Everything under `archive/legacy-2026-08-31/` is excluded from the active product, build, and verification path. It is retained only for recovery/reference and must not be treated as a requirement, copy source, test oracle, or implementation dependency.

The implementation rule is whole-product, not UI-only: every user-facing screen, state transition, API, AI instruction, deterministic guard, asset use, and verification check must trace to the effective decision lineage in the ledger. Resolve corrections, supersession, approval state, and dependencies chronologically. The concise ledger record must losslessly regenerate the approved expanded view; if it cannot, stop and correct the ledger rather than importing historical material or inventing a default.
