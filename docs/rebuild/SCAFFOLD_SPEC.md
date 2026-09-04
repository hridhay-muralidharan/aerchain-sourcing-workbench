# Product/software scaffold specification

Audience: product/software engineer and reviewer.
Purpose: define the deterministic web product that contains the AI capabilities.
Authority: derived from the approved PRD and low-fidelity model; it does not define AI behavior.

## Required outputs

The scaffold provides the five visible surfaces, shared sourcing-thread state, API boundaries, runtime source access, source links, comparison calculations, approval gates, persistence for the prototype, and browser-verifiable states.

## State model

The thread contains:

- procurementNeed: source text, selected sources, buyer edits, and confirmation;
- rfxDraft: generated content, source lineage, issue list, version, and approval state;
- supplierExchange: recipients, outbound event state, inbound message and attachment versions, open points, follow-up approvals, and response outcomes;
- comparison: claims, original values, normalized values, exceptions, readiness, analyst answers, and acknowledgment;
- award: proposal, editable rationale, commit status, and record ID.

Every state transition records the triggering actor and event in the prototype-visible history. Invalid transitions return an error and leave the previous valid state intact.

## API boundaries

- POST /api/intake accepts the business need and selected source contents and returns a typed RFx proposal.
- POST /api/mail/send accepts an approved RFx and recipient set and returns explicitly simulated delivery events.
- POST /api/completeness accepts the approved RFx and response evidence and returns supplier-level response states and open points.
- POST /api/comparison constructs the deterministic comparison substrate from runtime data.
- POST /api/comparison-review evaluates cited comparison evidence and returns visible findings.
- POST /api/analyze answers a buyer question from the approved RFx and comparison only.
- POST /api/award proposes an award from the acknowledged decision context only.
- POST /api/award-commit validates buyer approval inputs, prevents duplicate commits, and returns a record ID.

The client can render proposed results, but the API validates authority, readiness, and payload shape for consequential actions.

## Deterministic rules

- Arithmetic, unit and currency conversion, completeness gates, source paths, versions, and record identifiers are code-owned.
- The Finance rate is loaded from the approved runtime source, not duplicated as a magic constant.
- Missing, ambiguous, conflicting, and non-comparable claims are never collapsed into a value.
- A send event is not a delivery success, and a follow-up send is not a response resolution.
- A proposal is not approval.
- Browser recovery validates persisted dependencies before restoring state.

## Runtime and persistence

The prototype uses public/demo-runtime as served data and keeps hidden evaluation data under data/demo-runtime/evaluation-hidden. Browser persistence is versioned and recoverable. The award commit is an explicitly bounded demo store; production persistence, identity, and concurrency are omitted.

## Verification surfaces

The scaffold must pass TypeScript, build, asset isolation, API contract, browser journey, error-state, and interaction-gate checks. Tests must assert behavior, not only source strings.

