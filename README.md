# Aera — AI sourcing agent

## Product review brief

This repository contains a working prototype of Aera, an AI sourcing agent for procurement managers.

A procurement manager is accountable for moving from a business need to a supplier award quickly and safely. The work is difficult because the RFx must be constructed from scattered inputs, supplier replies arrive in different formats and across multiple messages, and the final award must be supported by explicit trade-offs and evidence.

Aera keeps that work in one sourcing thread:

1. Create and approve an RFx from the business need and authorized sources.
2. Invite suppliers and track the outcome of each invitation.
3. Move relevant supplier responses toward completeness through evidence-backed follow-up.
4. Compare responses on a common basis while preserving original values and provenance.
5. Prepare and approve an award that the buyer can explain with clear trade-offs and evidence.

The prototype is designed for product-development review. It is not a production procurement system.

That distinction matters: the point of this repository is to make the product behavior reviewable before discussing scale, integrations, or deployment hardening.

## What the prototype demonstrates

The guided demo uses a corrugated-packaging RFx with five suppliers, thirty line items, questionnaire answers, attached documents, email threads, spreadsheets, HTML, CSV, and a low-quality mobile image.

The important product behavior is the separation between Aera’s work and the buyer’s authority:

- Aera interprets, extracts, maps, drafts, analyzes, and proposes.
- Deterministic mechanisms calculate, normalize, validate, preserve provenance, enforce state transitions, and record approvals.
- The procurement manager confirms treatments, approves the RFx, approves follow-ups, acknowledges the comparison, and approves the award.
- Aera never silently invents values, treats a filename as proof, converts an ambiguous value, or turns a recommendation into an approval.

The prototype therefore makes the buyer’s real work visible while keeping the agent’s contribution bounded. The central question for review is whether Aera can reduce the sourcing burden without weakening procurement control.

## Why procurement policy is central

The organization’s procurement policy is the grounding layer across the sourcing journey. Different clauses become relevant at different stages:

- RFx construction: required fields, response instructions, and approval requirements.
- Supplier response completeness: required evidence, commercial fields, delivery treatment, and clarification rules.
- Comparison: normalization, currency treatment, comparability, exceptions, and inclusion rules.
- Award: evaluation criteria, weights, authority, exceptions, rationale, and approval.

Aera must retrieve the applicable policy clauses for the current stage and action. The product does not invent universal blockers or exceptions. Each policy-dependent decision retains its source, version, conditions, authority, and approval state.

That creates the most important product boundary: Aera can apply an organization’s rules, but it cannot create authority merely by sounding confident. This raises the next product question: how should the system help an organization that does not yet have a usable policy?

## Capability evolution when an organization has no policy

The prototype supports the confirmed-policy path. Policy generation is a separate capability with a higher accuracy and governance bar.

### Level 1 — Confirmed policy, supported from day one

The client provides an approved, versioned procurement policy. Aera retrieves the relevant clauses and applies them with provenance throughout the workflow.

### Level 2 — Policy proposal from historical procurement evidence

If no approved policy exists but the organization has past RFx documents and buyer guidance, a future Aera capability can identify recurring rules and propose a policy or policy structure. This requires a purpose-built model, high-quality annotated policy/RFx training data, evaluation across organizations, client validation, and explicit approval before the proposal governs work.

### Level 3 — Policy proposal without historical organizational evidence

If the organization has neither an approved policy nor useful historical RFxs, Aera may eventually propose starting points based on validated cross-organization knowledge. This is a later extension, not a production fallback. It must be clearly labeled as a proposal, validated by the client’s authorized policy owner, and prevented from silently governing procurement.

The principle is capability maturity before theoretical coverage: lack of policy must never become permission for the model to manufacture enterprise rules.

This policy problem is one example of a broader pattern in the workflow. Procurement is full of organizational standards that must be translated into a specific sourcing action without losing provenance or accountability. The same pattern appears on the other side of the exchange.

## Adjacent opportunity: the supplier-side agent

The assignment exposes a second problem. Suppliers often maintain their own standard quotation format while responding to many procurers, each with different RFx structures, fields, units, questionnaires, and document requirements. This creates avoidable back-and-forth and can disadvantage a supplier whose response takes longer to align with the procurer’s format.

An adjacent supplier-side product could let a supplier maintain one internal source of truth and generate a procurer-specific response for each tender:

- ingest the supplier’s standard catalogue, commercial terms, certifications, and response library;
- interpret the procurer’s RFx and questionnaire;
- map the supplier’s internal fields to the procurer’s requested structure;
- identify missing, ambiguous, or unsupported answers before submission;
- produce a personalized response in the procurer’s format while preserving the supplier’s internal standard;
- show the supplier the evidence and assumptions behind every generated answer;
- require supplier approval before submission.

This is not part of the current procurement-manager prototype. It is an adjacent product direction with a different actor, authority model, data boundary, and evaluation set. The common platform opportunity is evidence-backed translation between organizational standards without forcing either party to abandon its internal operating model.

The supplier-side opportunity is deliberately separated from the current prototype so the buyer workflow remains focused. It is included here because it shows where the same evidence-backed translation capability could extend next, and gives product leadership a concrete direction for future discovery.

## Review entry point

Product managers and product managers’ managers should start with [`docs/AI_CAPABILITY_REVIEW_BRIEF.md`](docs/AI_CAPABILITY_REVIEW_BRIEF.md). It states what Aera should do and must not do at each sourcing touchpoint, at the level required to review the product without making implementation decisions for the AI engineer.

The decision ledger, screen maps, runtime assets, and verification files remain available as supporting evidence for detailed product-development review. They are not the starting point for understanding the product.

## Run locally

```bash
npm install
npm run dev
```

The deployed prototype uses the OpenAI Responses API when `OPENAI_API_KEY` is configured in Vercel. The model temperature is set to `0`. Fake SMTP is used for the invitation path. AI extraction, evidence review, comparison analysis, and award proposal remain live.

Useful checks:

```bash
npm run test
npm run build
npm run verify:contracts
npm run verify:assets
npm run verify:prototype
```

## Submission and deployment

GitHub: [hridhay-muralidharan/aerchain-sourcing-workbench](https://github.com/hridhay-muralidharan/aerchain-sourcing-workbench)

Live prototype: [aerchain-sourcing-workbench.vercel.app](https://aerchain-sourcing-workbench.vercel.app/)
