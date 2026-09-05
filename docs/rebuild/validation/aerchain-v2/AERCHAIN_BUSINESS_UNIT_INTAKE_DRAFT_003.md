# Aerchain business-unit intake - draft 003

Audience: business-unit/domain contributor and product manager.
Purpose: begin capturing the business problem and current workflow from the assignment brief and Aerchain website only.
Authority: provisional intake for review. It is not a verified business-unit account and does not authorize product decisions.

## Source boundary

This draft uses only:

1. `/Users/apple/Downloads/Aerchain-Product-Assignment (1).pdf`, the assignment brief.
2. The relevant public Aerchain pages, inspected on 2026-09-05: homepage, Aera AI, Intake Agent, Sourcing Agent, Evaluation Agent, Negotiation Agent, and Vendor Onboarding Agent.

No existing Aerchain repository documentation, code, runtime fixture, prior decision, or generated artifact is used as business-unit evidence.

## Intake control

| Field | Current entry | Type/status |
|---|---|---|
| Intake ID | AER-INT-001-DRAFT-003 | Provisional revision of Draft 002 |
| Scope | Procurement workflow for handling an RFx and supplier quotations, as described by the assignment | Assignment context; review required |
| Date | 2026-09-05 | Process record |
| Business-unit contributor | Unknown | Missing input; blocking for factual business-unit confirmation |
| Workflow owner | Unknown | Missing input; blocking |
| Factual verification | Not performed; website claims are not business-unit verification | Blocking |
| Product/solution decision | Not made | Correctly outside this intake |

## 1. Situation and trigger

### Filled from the assignment

A category buyer needs to source a quantity of items and sends an RFx to multiple vendors. In the brief’s example, the buyer needs 30 line items of corrugated packaging, emails five vendors, and receives responses over nine days. [PDF p.1]

### Gaps for review

- Is this the actual business workflow Aerchain is intended to address, or only an illustrative assignment scenario?
- What event triggers the work in the real organization?
- How often does this workflow occur, at what volume, and for which categories?
- Who owns the workflow and who is accountable for the final decision?

## 2. Affected parties and job

### Filled from the assignment

The stated user is a category buyer. The buyer needs to create an RFx, obtain supplier quotations, reconcile responses, answer stakeholder questions, and support a supplier award decision. [PDF p.1-2]

The buyer is affected by manual re-entry and analysis effort. The brief describes the buyer retyping supplier responses into Excel and then spending additional time answering a VP’s comparison question. [PDF p.1]

The public Aerchain pages position Aerchain as a procurement platform with Aera as a cross-agent procurement copilot. The dedicated agent pages describe intake, sourcing, evaluation, negotiation, and supplier onboarding as connected procurement activities. This supports a provisional end-to-end workflow model, but the pages do not identify the specific operating buyer, workflow owner, or current-state process for this assignment. [AER-SRC-006 through AER-SRC-012]

### Provisional actor map inferred from the website

| Actor | Inferred role | Evidence/status |
|---|---|---|
| Requester/stakeholder | Starts a procurement request and contributes requirements, specifications, budget, or sourcing criteria | Website describes collaborative intake across Procurement, Finance, and teams; role names and authority are not confirmed. [AER-SRC-007] |
| Procurement practitioner/buyer | Shapes the requirement or sourcing scope, identifies suppliers, evaluates offers, and coordinates the decision | Inferred across Intake, Sourcing, and Evaluation pages; exact role and ownership unknown. [AER-SRC-008/009/010] |
| Approver/stakeholder reviewer | Reviews or approves requests, evaluations, terms, or sourcing decisions | Approval routing, stakeholder validation, manual adjustments, and approval matrices are described; named approver roles are unknown. [AER-SRC-007/010/AER-SRC-006] |
| Supplier/vendor | Submits bids, responds to sourcing requests, negotiates terms, and may be onboarded/verified | Inferred across Sourcing, Negotiation, and Vendor Onboarding pages; supplier-side workflow is not specified. [AER-SRC-009/011/012] |
| Aera / specialized AI agents | Classifies, enriches, drafts, matches, extracts, evaluates, benchmarks, flags, recommends, and supports approvals | Explicit product positioning; actual authority and runtime behavior require confirmation. [AER-SRC-006 through AER-SRC-012] |
| Finance/policy/control functions | Contribute budget, criteria, approvals, compliance, or risk inputs | Suggested by collaborative intake, approval matrices, and compliance claims; exact functions and ownership unknown. [AER-SRC-007/006] |

### Gaps for review

- Is “category buyer” the correct primary role, or is another procurement role the actual operator?
- Who is the beneficiary: the buyer, the procurement organization, business stakeholders, or all three?
- Who approves the RFx, supplier communication, comparison, and award?
- Who supplies the buyer with the business requirement and evaluation criteria?
- Who reviews or challenges the final recommendation?

## 3. Current workflow

The following is a provisional synthesis across the assignment and the dedicated Aerchain agent pages. It is a product-positioning/workflow hypothesis, not a confirmed customer current-state workflow.

| Step | Likely actor(s) | Input/action | Output or decision | Basis/status |
|---:|---|---|---|---|
| 1 | Requester/stakeholder; Procurement/Finance collaborators | Submit a procurement need through conversation, upload, or a centralized intake; provide specs, budget, or sourcing criteria | Procurement request | Website-described intake capability; exact current process unknown. [AER-SRC-007/013] |
| 2 | Aera Intake Agent; approver/stakeholders | Classify the request, enrich missing details, and route it according to policy/org rules | Routed request and approval path | Website claim; approval authority and policy source unknown. [AER-SRC-007] |
| 3 | Procurement practitioner; Aera Intake/Sourcing Agent | Convert the request into a sourcing scope/RFQ, requirements, and evaluation criteria; validate compliance | RFQ/sourcing package ready for execution | Website claim; assignment explicitly requests RFx drafting. [AER-SRC-008/009; PDF p.1] |
| 4 | Procurement practitioner; Aera Sourcing Agent | Identify suitable suppliers and send or manage sourcing requests | Supplier invitation/bid process | Website claim; channel and supplier-selection authority unknown. [AER-SRC-009] |
| 5 | Suppliers | Submit bids in potentially different formats; provide pricing, technical, commercial, and supporting information | Supplier responses | Assignment scenario; website says bids can arrive in any format. [AER-SRC-009; PDF p.1] |
| 6 | Aera Sourcing/Evaluation Agent; procurement practitioner | Consolidate structured and free-text responses, extract data, structure costs, and map responses for comparison | Evaluation baseline / comparable supplier data | Website claim plus assignment problem; exact review controls unknown. [AER-SRC-009/010; PDF p.1] |
| 7 | Aera Evaluation Agent; stakeholders/procurement reviewers | Evaluate price, technical, commercial, credibility, risk, and performance factors; create scorecards/comparisons | Evaluation and supplier recommendation inputs | Website claim; criteria, weights, evidence, and decision rights unknown. [AER-SRC-010] |
| 8 | Procurement practitioner; approvers/stakeholders | Validate, adjust, review, and approve the evaluation or recommendation | Approved selection/decision basis | Website explicitly describes stakeholder validation, manual adjustments, and approvals; exact authority unknown. [AER-SRC-010] |
| 9 | Aera Negotiation Agent; procurement practitioner; suppliers | Conduct multi-round negotiation using playbooks, benchmarks, and selected terms | Negotiated offer/terms requiring approval where applicable | Adjacent website workflow; assignment does not explicitly require negotiation. [AER-SRC-011] |
| 10 | Vendor Onboarding Agent; supplier; procurement/control functions | Register, verify, collect credentials, check compliance, and activate supplier | Approved/onboarded supplier | Downstream website workflow; outside assignment scope unless confirmed. [AER-SRC-012] |

### Where the assignment fits

The assignment’s requested agent/workflow sits primarily across:

- **Intake Agent:** conversational requirement capture and RFx/request drafting;
- **Sourcing Agent:** scope creation, evaluation criteria, supplier responses in varied formats, and cost structuring;
- **Evaluation Agent:** response consolidation, comparison, supplier evaluation, analysis, and decision support; and
- **Aera:** a cross-agent conversational entry point for procurement work and analysis.

Negotiation, vendor onboarding, invoice processing, and broader procurement analytics appear to be adjacent product capabilities rather than automatic requirements for this assignment. [AER-SRC-006 through AER-SRC-012; PDF pp.1-2]

### Gaps for review

- What happens before the buyer writes the RFx?
- What information and systems does the buyer use to create the RFx?
- How are vendors selected and contacted?
- How are responses tracked during the nine-day period?
- What happens when a vendor quotes only some lines, uses different units, quotes in another currency, or refers to a prior year?
- Who decides whether a response is complete or acceptable?
- What is the current comparison and award process after Excel consolidation?
- What records are created, where are they stored, and who can access them?
- What happens when the buyer cannot resolve an ambiguity or a stakeholder challenges the comparison?
- Does the assignment expect the intake and approval stages described by the Intake Agent, or only the RFx drafting portion?
- Is supplier discovery part of the intended prototype, or are suppliers already selected as in the assignment narrative?
- Is negotiation intentionally outside the requested flow, or should the award-support experience hand off into negotiation?
- Which website-described agent is the intended “agent” for the assignment: Aera, Intake Agent, Sourcing Agent, Evaluation Agent, or a coordinated set?

## 4. Decisions and authority in the current workflow

### Filled from the assignment

The buyer performs the RFx and supplier-response work and is expected to support a defensible award decision. The brief also gives an example of a VP asking a decision question. [PDF p.1]

### Gaps for review

- The assignment does not identify formal decision rights or approval boundaries.
- It does not say whether the buyer alone can approve an award.
- It does not define the evidence, policy, quality criteria, or commercial thresholds required for approval.
- It does not identify who may override, reject, or request a new comparison.
- It does not define escalation or separation-of-duties requirements.

## 5. Variants, exceptions, and failure paths

### Filled from the assignment

The brief explicitly asks the prototype to handle:

- an Excel response that ignores the RFx template;
- a PDF with a discount buried in a footnote;
- a Word document with commercial terms in prose;
- a phone photograph of a printed rate card taken at an angle;
- an email with partial pricing and a reference to “the rest same as last year”;
- a vendor quoting only 27 of 30 lines;
- a response in USD when others may use another currency;
- a unit mismatch such as “per box” versus “per 100 pieces”; and
- uncertainty about what the system should do or show to the buyer. [PDF p.1-2]

### Gaps for review

- Which of these cases occur in the real workflow versus being assignment test cases?
- What is the current treatment for each case?
- Which cases block comparison, require clarification, or can proceed with an exception?
- What are the normal escalation, retry, correction, and audit paths?
- What is the business tolerance for an incorrect extraction or comparison?

## 6. Friction and consequences

### Filled from the assignment

The brief identifies manual re-entry from supplier responses into Excel as a recurring burden. It states that the re-entry can consume three days and that answering a stakeholder comparison question can consume a further four. [PDF p.1]

The brief also identifies trust risk: a buyer should be able to act when significant money is at stake, and the system must show what it does when it is unsure. [PDF p.2]

### Gaps for review

- Are the stated three-day and four-day durations measured, illustrative, or assignment rhetoric?
- What is the baseline cycle time, rework rate, error rate, and cost?
- What business consequences follow from delayed or incorrect comparison?
- Which errors have occurred in practice?
- What does “defensible” mean to the organization: evidence, policy compliance, approval record, commercial rationale, or something else?

## 7. Evidence, assumptions, and unknowns

### Evidence register

| ID | Claim | Type | Source/status |
|---|---|---|---|
| AER-E-001 | Buyer receives supplier responses in varied formats | Assignment scenario/context | PDF p.1; real-world confirmation needed |
| AER-E-002 | Manual re-entry into Excel is a major burden | Assignment-described pain | PDF p.1; metric validity needs review |
| AER-E-003 | The buyer may need multi-dimensional supplier analysis | Assignment example | PDF p.1; actual decision practice unknown |
| AER-E-004 | Uncertainty and non-happy-path handling matter to trust | Assignment evaluation emphasis | PDF p.2; business risk evidence needed |
| AER-E-005 | Five vendors, thirty line items, questionnaire, and attachments define the demo size | Assignment constraint | PDF p.1; not a business fact |
| AER-E-006 | Aerchain publicly positions itself as an AI-powered procurement platform with specialized agents and enterprise controls | Company/product positioning | AER-SRC-006; not workflow evidence |
| AER-E-007 | Public positioning includes intake and supplier-response evaluation capabilities | Product positioning | AER-SRC-006; not proof of current customer workflow |
| AER-E-008 | Public pages describe a multi-step procurement flow from collaborative intake and routing through sourcing, evaluation, stakeholder approval, negotiation, and onboarding | Inferred workflow hypothesis | AER-SRC-007 through AER-SRC-012; requires PM review |
| AER-E-009 | The assignment’s requested capability overlaps Intake, Sourcing, Evaluation, and Aera positioning more directly than Negotiation or Onboarding | Cross-source synthesis | AER-SRC-006 through AER-SRC-012 and PDF pp.1-2; requires PM review |

### Source register

| Source ID | Source | What it supports | Authority/status |
|---|---|---|---|
| AER-SRC-001 | `/Users/apple/Downloads/Aerchain-Product-Assignment (1).pdf`, pp. 1-2 | Assignment problem, illustrative workflow, edge cases, constraints, evaluation emphasis | Assignment brief; initial context |
| AER-SRC-006 | `https://aerchain.io/`, accessed 2026-09-05 | Public company/product positioning, agent categories, enterprise-control claims | Public marketing source; not business-unit evidence |
| AER-SRC-007 | `https://aerchain.io/products/intake-agent`, accessed 2026-09-05, lines 39-68 | Centralized intake, natural-language/upload requests, classification, routing, collaboration, approvals | Public product positioning; workflow hypothesis input |
| AER-SRC-008 | `https://aerchain.io/products/sourcing-agent`, accessed 2026-09-05, lines 39-72 | Scope creation, RFQs, missing-detail suggestions, supplier matching, bid formats, cost structuring, policy checks | Public product positioning; workflow hypothesis input |
| AER-SRC-009 | `https://aerchain.io/products/sourcing-agent`, accessed 2026-09-05, lines 43-65 | Requirements-to-RFQ, supplier discovery, varied bid processing, evaluation criteria | Public product positioning; workflow hypothesis input |
| AER-SRC-010 | `https://aerchain.io/products/evaluation-agent`, accessed 2026-09-05, lines 38-69 | Multi-factor evaluation, scorecards, data consolidation, stakeholder validation, manual adjustment | Public product positioning; workflow hypothesis input |
| AER-SRC-011 | `https://aerchain.io/products/negotiation-agent`, accessed 2026-09-05, lines 38-69 | Multi-round negotiation, counteroffers, playbooks, benchmarks, approvals | Adjacent product positioning; assignment scope unknown |
| AER-SRC-012 | `https://aerchain.io/products/vendor-onboarding-agent`, accessed 2026-09-05, lines 39-69 | Registration, credential/compliance checks, extraction, mapping, supplier ratings | Downstream product positioning; assignment scope unknown |
| AER-SRC-013 | `https://aerchain.io/aera-ai`, accessed 2026-09-05, lines 74-115 | Cross-agent Aera role, intake, RFQ tracking, insights, approval visibility | Public product positioning; workflow hypothesis input |

### Assumptions

| ID | Assumption | Owner/status |
|---|---|---|
| AER-AS-001 | Category procurement is the relevant workflow domain | PM/business reviewer; unconfirmed |
| AER-AS-002 | Supplier-response consolidation is the highest-value problem in the workflow | PM/business reviewer; hypothesis |
| AER-AS-003 | A buyer needs to inspect and defend the comparison, not only receive a lowest-price answer | PM/business reviewer; hypothesis |

### Unknowns

| ID | Unknown | Why it matters | Owner |
|---|---|---|---|
| AER-OQ-001 | Actual business-unit and workflow owner | Factual validation and prioritization | To be named |
| AER-OQ-002 | Real current workflow before, during, and after supplier response | Determines what problem is actually being addressed | To be named |
| AER-OQ-003 | Formal decision rights and approval model | Determines authority and risk boundaries | To be named |
| AER-OQ-004 | Baseline measures and real business impact | Determines whether the problem is worth solving and how success is measured | To be named |
| AER-OQ-005 | Actual data, systems, policy, and access constraints | Determines feasibility and deployment fit | To be named |
| AER-OQ-006 | Which assignment choices are intended product direction versus evaluator freedom | Prevents turning optional assignment choices into requirements | PM/evaluator |
| AER-OQ-007 | Which public website claims should remain relevant context for this assignment, if any | Prevents marketing language becoming a requirement | PM |

## 8. Constraints and suitability

### Filled from the assignment

The assignment gives freedom to choose the agent framework, models, email path, storage, UI, personas, industry, data, export formats, and guardrails. It requires the plumbing to be stubbed where appropriate but requires the AI loops to be real, including extraction and reasoning. [PDF p.2]

### Public website claims relevant to context

The public website presents the following as Aerchain product/company positioning, not as verified business-unit facts for this assignment:

- procurement operations can be supported by specialized AI agents;
- Aerchain covers intake, sourcing/evaluation, negotiation, vendor onboarding, analytics, and contract work;
- Aera supports natural-language interaction, requirement understanding, recommendations, supplier identification, specification drafting, and award support;
- an Intake Agent is described as converting unstructured requirements into procurement tasks, guiding stakeholders through conversations, generating category-specific RFPs/evaluation criteria, and validating against policies;
- an Evaluation Agent is described as analyzing supplier responses, creating side-by-side comparisons, and highlighting risks/opportunities;
- enterprise controls are described as configurable workflows, approval matrices, integrations, and compliance guardrails. [AER-SRC-006]

These claims help frame the existing product category and possible capability vocabulary. They do not establish that a specific customer currently performs the workflow this way, that a listed capability is in the assignment scope, or that a marketing claim is independently verified.

### Gaps for review

- What constraints exist in the real business environment beyond the assignment?
- Is the workflow suitable for AI intervention, deterministic automation, or both?
- What privacy, security, compliance, procurement-policy, or data-residency constraints apply?
- Which actions may be assisted, proposed, approved, or executed?
- What adoption, training, or operating constraints matter?

## 9. Problem and workflow synthesis

### Provisional synthesis for review

Category buyers may spend substantial time reconstructing comparable supplier information from heterogeneous responses, then spend additional time answering stakeholder questions and defending the resulting award. The workflow appears vulnerable to missing data, buried commercial terms, unit/currency mismatches, and uncertainty that is difficult to inspect.

This is a provisional synthesis of the assignment brief, not a confirmed business-unit problem statement. It should not yet be converted into a product requirement.

## 10. Discovery decision

Status: Continue discovery.

Reason: the assignment and public website establish a credible problem category and product-positioning context, but they do not establish a verified business-unit workflow, owner, decision authority, baseline, or deployment constraints.

No product decision or PRD should be generated from this draft until the filled fields and gaps are reviewed.

## Review request

Please review the filled entries, especially:

1. Is the provisional actor/job description accurate?
2. Is the six-step workflow reconstruction directionally correct, or does it misrepresent the real workflow?
3. Are the described frictions and consequences accurate, including the three-day/four-day statements?
4. Which filled entries are assignment-only context rather than valid business-unit input?
5. Which unknown should we resolve first, and which source/document should I use for it?
6. Which, if any, of the public website claims should remain in the business-unit context, and which should be excluded as product marketing rather than workflow evidence?
7. Is the inferred sequence from intake through evaluation directionally correct for Aerchain, and where should the assignment prototype begin and end within it?
8. Should the assignment’s “agent” be treated as Aera, one specialized agent, or a coordinated experience across Intake, Sourcing, and Evaluation Agents?

## Version note

Draft 003 adds page-level synthesis across Aerchain’s public Aera, Intake, Sourcing, Evaluation, Negotiation, and Vendor Onboarding pages. Drafts 001 and 002 remain preserved unchanged. No repository implementation, prior Aerchain documentation, or previous PM decision has been used to fill this intake.
