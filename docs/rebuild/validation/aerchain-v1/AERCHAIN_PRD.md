# Aerchain product requirements v1

Audience: design, software, agentic-AI, interaction, operations, QA/review, and business stakeholders.
Purpose: provide the product agreement for the Aerchain assignment prototype.
Authority: generated instance PRD, draft pending PM/domain approval. Source of requirements is the approved Aerchain PM decision artifact in this bundle; this document does not authorize implementation by itself.

## 1. Document control and trace map

| Field | Value |
|---|---|
| PRD ID/version | AER-PRD-001 v1 |
| Status | Draft for review |
| Product | Aera procurement decision-support prototype |
| Primary decision owner | Product manager; production authority remains an open question |
| Primary sources | AER-INT-001; AER-DEC-001 through AER-DEC-012 |
| Story output | AER-EPIC-001 through AER-EPIC-005 in `AERCHAIN_EPICS_STORIES_ACCEPTANCE_CRITERIA.md` |

Material requirements use IDs `AER-REQ-*`; product-level acceptance criteria use `AER-PRD-AC-*`. Assignment fixture facts are tagged `AER-FIX-*` and are not universal product requirements.

## 2. Context and problem

Category buyers must turn a business need and supplier responses into a defensible award. The assignment scenario provides a real source bundle and supplier responses in varied formats, while the business need asks suppliers to quote each line and clarify anything they cannot supply. [AER-INT-001; AER-SRC-002/003]

The product problem is that relevant evidence, comparable values, uncertainty, and decision rationale are difficult to reconstruct consistently. The prototype addresses this as an assignment hypothesis; production pain and baseline measures remain unverified. [AER-INT-001; AER-DEC-011]

## 3. Outcomes and measures

| Outcome ID | Intended outcome | Measure/evidence | Status |
|---|---|---|---|
| AER-OUT-001 | Buyer can move from need to an approved RFx | Completed buyer flow and RFx approval evidence | Prototype outcome |
| AER-OUT-002 | Buyer can inspect supplier claims with provenance and uncertainty intact | Field/source inspection and uncertainty evidence | Prototype outcome |
| AER-OUT-003 | Buyer can understand the comparison through grounded questions | Answer trace, evidence links, limitation behavior | Prototype outcome |
| AER-OUT-004 | Buyer can resolve material gaps through approved follow-up and reassessment | Follow-up approval and changed comparison evidence | Prototype outcome |
| AER-OUT-005 | Buyer can approve a defensible award separately from AI recommendation | Rationale, evidence, human approval/record | Prototype outcome |

No production baseline, target cycle time, error reduction, or adoption measure is available. AER-OQ-003 is therefore a measurement blocker for production claims.

## 4. Actors and situations

- Category buyer/procurement manager: initiates/reviews the sourcing work and owns consequential approvals.
- Supplier: provides quotations, claims, source documents, and follow-up responses.
- Aera AI: interprets, extracts, associates, explains, answers, and proposes within scoped evidence.
- Deterministic product: controls workflow state, permissions, evidence association, calculations, approved normalization, rendering, and recorded actions.
- Domain/policy authority: role and escalation behavior beyond the prototype buyer are unknown and must not be inferred.

## 5. Scope and non-goals

### In scope

The bounded assignment flow from business need and authorized sources to RFx approval, supplier invitation representation, response understanding, comparison, natural-language analysis, approved follow-up, and separate award approval. [AER-DEC-002/008]

### Fixture constraints

Corrugated packaging, RFx-2026-014, five suppliers, thirty line items, and the source/response files listed in the runtime manifest. [AER-FIX-001; AER-SRC-002]

### Non-goals

Production-grade persistence/recovery, inbox/webhooks, real mail delivery, OCR hardening, multi-user permissions, generalized policy authoring, and autonomous award decisions. [AER-DEC-010/012]

## 6. Experience/workflow

The buyer journey is organized by real-world procurement outcomes, not implementation components:

1. Prepare and approve the RFx from the business need and authorized sources.
2. Send the approved RFx package to confirmed suppliers and understand the delivery result.
3. Move relevant supplier responses toward a complete or policy-authorized comparison basis through evidence-backed follow-up.
4. Understand the comparison through provenance-preserving values, uncertainty, and grounded questions.
5. Decide and defend the award through visible trade-offs, rationale, and separate human approval.

The five outcomes are decomposed into five stories in the companion story artifact. Landing is an entry surface, not a procurement outcome.

## 7. Functional requirements

| ID | Requirement | Source |
|---|---|---|
| AER-REQ-001 | The product must preserve the sourcing requirement and RFx context needed for supplier response and decision-making. | AER-DEC-002/003; AER-SRC-003 |
| AER-REQ-002 | The product must require explicit buyer approval before the RFx is treated as ready for supplier invitation. | AER-DEC-007/012; AER-SRC-004 |
| AER-REQ-003 | The product must represent supplier responses from varied formats and associate relevant claims with requested items/questions. | AER-DEC-002/006; AER-SRC-002 |
| AER-REQ-004 | The product must preserve original claims and sources while exposing normalized/comparable values and missing, ambiguous, conflicting, or unresolved states. | AER-DEC-006; AER-SRC-004/005 |
| AER-REQ-005 | The product must support buyer-approved follow-up and show how new evidence changes the affected comparison. | AER-DEC-007/008; AER-SRC-005 |
| AER-REQ-006 | The product must answer buyer questions in natural language using scoped evidence, comparison context, and visible uncertainty. | AER-DEC-004/008; AER-SRC-004/005 |
| AER-REQ-007 | The product must support a separate human-controlled award rationale and decision record within the stated prototype boundary. | AER-DEC-007/011/012; AER-SRC-005 |
| AER-REQ-008 | The product must label simulated integrations and unavailable or configured AI behavior truthfully. | AER-DEC-009/010; AER-SRC-004 |

## 8. Quality, policy, and operational constraints

- Material values and answers must retain source/provenance context.
- Missing, ambiguous, conflicting, and non-comparable are distinct states; no value is invented.
- AI outputs are proposals or interpretations, never approvals or state changes.
- Human approval is required at RFx, follow-up, comparison-readiness, and award boundaries.
- Deterministic behavior owns state gates, permissions, calculations, approved normalization, and recorded actions.
- Policy-dependent behavior must identify the relevant policy basis; the product must not invent universal policy.
- Simulated sending must be labeled; the prototype must not imply production mail delivery.
- Hidden evaluation data must remain outside AI runtime inputs.

Sources: AER-DEC-004 through AER-DEC-010; AER-SRC-002/004/005.

## 9. Data, knowledge, and integrations

Runtime inputs are limited to files listed in `data/demo-runtime/manifest.json`, including the business need, policy, past/current RFx sources, supporting specifications, finance source, contact directory, prior correspondence, approved RFx, supplier responses, follow-up files, and delivery events. [AER-SRC-002]

The prototype uses assignment fixture data. It does not establish production data ownership, freshness SLA, retention, identity, or integration contracts. Those are open for production deployment. The runtime manifest explicitly separates runtime inputs from expected findings/evaluation assertions.

## 10. AI-agent behavior

The AI capability may interpret, extract, associate, explain, answer, and propose using the current task, scoped source content, comparison context, and buyer guidance. It must preserve uncertainty, cite evidence where applicable, ask for clarification or refuse when support is insufficient, and hand consequential choices back to the buyer.

It must not receive hidden evaluation data, answer keys, or expected treatment lists; invent supplier facts; silently normalize ambiguity; approve workflow state; or make the award. [AER-DEC-004/009/012; AER-SRC-004]

AI evaluation must include extraction evidence, grounded answers, unsupported-question behavior, uncertainty handling, and non-leakage checks. Model/provider selection and prompt topology belong to the downstream AI executor, not this PRD.

## 11. Risks, assumptions, and open decisions

- Production authority, escalation, delegation, and SLA rules are unknown: AER-OQ-001/002.
- Outcome baselines and targets are unknown: AER-OQ-003.
- Assignment response variety may not represent production prevalence: AER-AS-002.
- Current prototype persistence and API authority may not satisfy the product contract: verify before claiming completion.
- FX, policy, source relevance, and response resolution must be based on approved runtime inputs, not hidden expected findings.

## 12. Release and learning plan

Release is limited to a guided assignment demo. Reviewers should run the complete journey, inspect source/evidence states, exercise varied supplier response conditions, ask grounded and unsupported questions, approve follow-up, and separately approve the award. Record gaps against story criteria. Production rollout, instrumentation, adoption measurement, and operating support remain out of scope until the open questions are resolved.

## 13. Story map and traceability

| Epic | Story outcome | PRD outcomes/requirements |
|---|---|---|
| AER-EPIC-001 Prepare sourcing request | AER-ST-001 Buyer approves a supplier-ready RFx | OUT-001; REQ-001/002 |
| AER-EPIC-002 Invite suppliers | AER-ST-002 Buyer sends the approved RFx package and knows delivery state | REQ-002/008 |
| AER-EPIC-003 Resolve supplier evidence | AER-ST-003 Buyer resolves material supplier-response gaps for comparison | OUT-002/004; REQ-003/004/005 |
| AER-EPIC-004 Understand comparison | AER-ST-004 Buyer understands supplier trade-offs through an evidence-grounded comparison workspace | OUT-002/003; REQ-004/006 |
| AER-EPIC-005 Approve award | AER-ST-005 Buyer approves and can defend the award decision | OUT-005; REQ-007/008 |

## Product-level acceptance criteria

| ID | Criterion | Evidence |
|---|---|---|
| AER-PRD-AC-001 | A buyer can complete one coherent sourcing journey from approved need to separate human award decision. | Full guided workflow run |
| AER-PRD-AC-002 | Original supplier evidence, derived comparison values, uncertainty, and rationale basis remain distinguishable. | Field/source inspection |
| AER-PRD-AC-003 | Consequential actions are blocked or held when required authority, evidence, or readiness is absent. | Negative-path/API/browser checks |
| AER-PRD-AC-004 | Natural-language answers are grounded in scoped evidence and disclose limitation when unsupported. | Q&A trace and refusal/clarification checks |
| AER-PRD-AC-005 | Approved follow-up can add evidence and produce an understandable reassessment. | Follow-up scenario |
| AER-PRD-AC-006 | Award rationale and approval are separate from AI recommendation and are recorded within the disclosed prototype boundary. | Award review and record check |
| AER-PRD-AC-007 | Simulations, unavailable AI, persistence limits, and excluded production capabilities are truthful to the reviewer. | Demo and deployment inspection |

## Approval gate

Draft is complete for review but not approved. PM/domain approval is required before implementation artifacts are treated as authorized.
