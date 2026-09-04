# Aerchain business-unit intake - draft 001

Audience: business-unit/domain contributor and product manager.
Purpose: begin capturing the business problem and current workflow from the assignment brief and Aerchain website only.
Authority: provisional intake for review. It is not a verified business-unit account and does not authorize product decisions.

## Source boundary

This draft uses only:

1. `/Users/apple/Downloads/Aerchain-Product-Assignment (1).pdf`, the assignment brief.
2. `https://aerchain-sourcing-workbench.vercel.app/`, the Aerchain website. Full website content was not available for inspection in this pass; no unsupported website claim is included below.

No existing Aerchain repository documentation, code, runtime fixture, prior decision, or generated artifact is used as business-unit evidence.

## Intake control

| Field | Current entry | Type/status |
|---|---|---|
| Intake ID | AER-INT-001-DRAFT-001 | Provisional |
| Scope | Procurement workflow for handling an RFx and supplier quotations, as described by the assignment | Assignment context; review required |
| Date | 2026-09-04 | Process record |
| Business-unit contributor | Unknown | Missing input; blocking for factual business-unit confirmation |
| Workflow owner | Unknown | Missing input; blocking |
| Factual verification | Not performed | Blocking |
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

### Gaps for review

- Is “category buyer” the correct primary role, or is another procurement role the actual operator?
- Who is the beneficiary: the buyer, the procurement organization, business stakeholders, or all three?
- Who approves the RFx, supplier communication, comparison, and award?
- Who supplies the buyer with the business requirement and evaluation criteria?
- Who reviews or challenges the final recommendation?

## 3. Current workflow

The following is a provisional reconstruction of the workflow explicitly described in the brief. It is not yet a confirmed current-state workflow.

| Step | Actor | Input/action | Output or decision | Type/status |
|---:|---|---|---|---|
| 1 | Category buyer | Writes an RFx for the sourcing need | RFx sent to vendors | Assignment-described workflow; current-state confirmation needed |
| 2 | Category buyer | Emails five vendors | Supplier response period begins | Assignment example; channel may be illustrative |
| 3 | Suppliers | Return quotations in different formats and levels of completeness | Supplier responses | Assignment scenario; real-world prevalence unknown |
| 4 | Category buyer | Opens responses and retypes information into Excel | Manually consolidated comparison | Assignment-described pain; evidence is narrative only |
| 5 | Category buyer / stakeholder | Answers a question such as splitting awards by line among quality-qualified vendors | Additional analysis and award support | Assignment example; decision process unknown |
| 6 | Buyer and authorized stakeholders | Make and defend the supplier award | Award decision | Assignment outcome; authority and record are unknown |

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

## 8. Constraints and suitability

### Filled from the assignment

The assignment gives freedom to choose the agent framework, models, email path, storage, UI, personas, industry, data, export formats, and guardrails. It requires the plumbing to be stubbed where appropriate but requires the AI loops to be real, including extraction and reasoning. [PDF p.2]

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

Reason: the assignment establishes a credible problem scenario and edge-case set, but it does not establish a verified business-unit workflow, owner, decision authority, baseline, or deployment constraints.

No product decision or PRD should be generated from this draft until the filled fields and gaps are reviewed.

## Review request

Please review the filled entries, especially:

1. Is the provisional actor/job description accurate?
2. Is the six-step workflow reconstruction directionally correct, or does it misrepresent the real workflow?
3. Are the described frictions and consequences accurate, including the three-day/four-day statements?
4. Which filled entries are assignment-only context rather than valid business-unit input?
5. Which unknown should we resolve first, and which source/document should I use for it?
