# Architecture and runtime data

> Audience: engineers and technical reviewers.
> Purpose: explain state, boundaries, fixtures, persistence, and deployment assumptions.
> Authority: implementation description; it cannot add product requirements.

## Runtime shape

The React client owns the visible stage, draft artifacts, comparison view, analysis answer, proposal, acknowledgment, and demo recovery state. API functions own source loading, AI calls, deterministic comparison construction, delivery simulation, and award-commit validation. The client may request a transition, but consequential server boundaries validate their inputs.

| Boundary | AI responsibility | Deterministic responsibility | Human authority |
|---|---|---|---|
| Intake | Draft RFx from need and sources | package inputs and validate shape | confirm ask, treat issues, approve RFx |
| Responses | identify gaps and reassess evidence | preserve history and gate readiness | approve follow-up and treatments |
| Comparison | review material exceptions | map claims, calculate totals, preserve provenance | acknowledge sufficiency |
| Award | propose supplier, trade-offs, rationale | validate readiness, idempotency, record ID | approve rationale and award |

## Fixture boundary

data/demo-runtime is source-owned and contains the hidden evaluation set. public/demo-runtime is the served demo copy and must never contain evaluation-hidden. The public copy is the deployment fixture; drift is a verification concern, not a product requirement.

## State and recovery

Browser progress is stored under a versioned schemaVersion 2 key. Invalid stage dependencies reset to an empty safe state rather than restoring arbitrary combinations. Award commit is idempotent by key and returns a deterministic record ID within the demo process store; durable multi-user storage remains a production extension.

## Integrations and deployment

AI uses the OpenAI Responses API only when OPENAI_API_KEY is configured. Mail delivery is a simulated SMTP event path: it returns per-supplier message IDs and does not deliver email. Vercel serves the Vite client and Node-compatible API functions. Hidden evaluation data is excluded from the client and AI payloads. Production inbox webhooks, durable database persistence, real SMTP, OCR, and retry orchestration are out of scope.

