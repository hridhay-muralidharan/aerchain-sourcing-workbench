# Applying the interactive PM harness to Aerchain

Audience: product manager, harness implementer, Aerchain product team, and downstream coding-agent reviewers.
Purpose: define how the generalized interactive PM harness should be used for Aerchain as an existing-product project.
Authority: proposed application plan for review. It does not approve Aerchain requirements, change the harness, or authorize prototype implementation.

## 1. Correct project mode

Aerchain must enter the harness through the existing-product/improvement mode, not the new-problem mode.

The harness must preserve two separate context lanes:

| Lane | Initial source boundary | What it can establish | What it cannot establish |
|---|---|---|---|
| Business problem and workflow | Assignment PDF and Aerchain website, followed by user-directed sources | The provisional business problem, user/job, workflow claims, evidence gaps, assumptions, and questions | Verified business-unit facts, production metrics, authority, policy, or requirements without further input |
| Existing-product baseline | Aerchain prototype repository, live behavior, current artifacts, implementation, runtime/demo data, and prior feedback | What currently exists, current behavior, current constraints, implementation evidence, known defects, and non-regression considerations | Why the business problem matters or what the product should become |

The harness must not merge these lanes into one undifferentiated context summary. The first lane informs business-unit intake and PM decisions. The second lane is imported as baseline evidence after the PM has reviewed the initial problem framing, or earlier only where necessary to answer a current-state question.

## 2. Aerchain starting package

The initial project should be created with:

- project mode: `existing-product/improvement`;
- project ID: stable Aerchain project ID assigned by the harness;
- initial business context: assignment PDF and website reference only;
- current product import: a separately labeled baseline package, not requirements authority;
- current version: identified prototype/release version;
- initial review state: intake in progress, downstream artifacts paused;
- source boundary: explicit list of imported files, URLs, captures, dates, and access status.

The existing Aerchain repository can be imported into the baseline lane using source categories such as current product contract, walkthrough, implementation map, code summary, runtime/demo asset summary, prior decisions, feedback, and known gaps. Each imported item must retain its original path/version and be labeled as current, historical, proposed, rejected, simulated, or unverified. The harness must not flatten these categories into “approved context.”

## 3. Execution sequence for Aerchain

### Step 1 - Establish the provisional intake

The PM reads the assignment and website context. The harness asks only the minimum questions needed to identify the business problem, affected actor, job, current workflow, consequences, and unknowns.

The first output is a provisional intake. It may contain assignment context and hypotheses, but it must not contain product requirements or imported prototype decisions. The PM reviews the filled fields and corrects them before additional source material is requested.

Current Aerchain state: `AERCHAIN_BUSINESS_UNIT_INTAKE_DRAFT_001.md` is the provisional starting point. It must be treated as an intake draft requiring PM review, not as an approved intake.

### Step 2 - Request targeted evidence

For each material gap, the harness asks for the smallest useful next input and explains why it is needed. The PM may point the harness to a document, answer directly, or mark the gap unknown/blocking.

The harness must not request every possible artifact at once. Examples of targeted requests are:

- confirm the actual actor and workflow owner;
- provide the current workflow or discovery notes;
- clarify who approves or challenges the award;
- provide baseline effort/error/risk evidence;
- provide the policy or operating constraint governing the decision.

After each response, the harness versions the affected intake items, preserves the previous state, and re-evaluates only affected downstream work.

### Step 3 - Import the current-product baseline

Once the business context is sufficiently understood for a current-state comparison, import the existing prototype as baseline evidence. The harness should ask:

- what currently exists and which version is current;
- which workflows and outcomes the prototype currently supports;
- what behavior is implemented, simulated, stubbed, or unverified;
- what usage, quality, feedback, and incident evidence exists;
- what must not regress; and
- what improvement or replacement is being evaluated.

The baseline import does not answer unresolved business questions by itself. If prototype behavior conflicts with the business context, the conflict is surfaced for PM judgment.

### Step 4 - Capture PM decisions

Only after the intake has been reviewed does the harness present decisions that require PM judgment: target problem, beneficiary, desired outcome, scope, non-goals, trade-offs, AI role, deterministic boundary, human authority, and success measures.

Every decision links to intake evidence or an explicitly labeled rationale. Existing repository decisions may be imported as historical/proposed decisions, but they are not silently re-approved. The PM must confirm whether each remains current.

### Step 5 - Generate and review the PRD

The harness generates the PRD from the current valid intake and approved PM decisions. The PRD is the canonical product artifact. It should describe why the product exists, for whom, intended outcomes, broad capabilities/features, scope, constraints, and product-level acceptance criteria.

The PRD must distinguish current-product baseline from desired change and include non-regression requirements when the project is an improvement. Screens, technical architecture, model selection, prompts, and executor methods remain downstream.

### Step 6 - Decompose into stories and criteria

The harness derives epics and one-outcome stories from the approved PRD. Each story represents one coherent real-world procurement outcome. The shared criteria set for each story covers applicable design, software/deterministic, agentic-AI, interaction, safety, operational, evidence, and review requirements.

Criteria are the handoff unit for downstream executors and reviewers. They must not be generated as separate disconnected design, engineering, and AI checklists.

### Step 7 - Prepare coding-agent handoff

The harness generates the wireframe/behavior view, role-specific execution context, execution plan, and self-contained handoff only after PRD and story/criteria approval. The handoff tells the downstream coding agent what to build and how to verify it; it does not cause the harness to build Aerchain.

For an existing product, the handoff must include:

- approved desired product contract;
- current-product baseline and version;
- explicit change/non-regression boundary;
- implementation locations only as baseline context or approved execution evidence;
- fixtures and simulated integrations with truth labels;
- known gaps and stop conditions; and
- re-entry rules if the PM changes an upstream decision.

## 4. Harness behavior required for the Aerchain case

The harness must:

- let the PM review and correct the initial intake before importing the repository baseline into the problem narrative;
- show the source and classification of every imported statement;
- distinguish “currently exists” from “should exist”;
- preserve the original intake draft and every corrected version;
- prevent downstream generation while required intake or PM decisions are unresolved;
- keep assignment constraints separate from production product requirements;
- mark existing behavior as implemented, simulated, stubbed, unverified, or unknown;
- identify non-regression criteria for an existing product;
- calculate impact when an approved PM decision changes;
- keep old generated Aerchain artifacts as historical attempts rather than current requirements; and
- export a self-contained handoff whose current state can be understood without conversation memory.

## 5. What not to do

- Do not start from the existing Aerchain PRD or decision ledger as if they were the first business context.
- Do not treat the prototype’s screens as the product problem.
- Do not treat implementation behavior as proof of business need.
- Do not convert the assignment’s freedom of choice into a product requirement.
- Do not import hidden evaluation data as AI context or business evidence.
- Do not generate a replacement PRD before the PM has reviewed the intake and decisions.
- Do not create a separate mandatory artifact for every reasoning step; the harness state model may store evidence and decisions without turning each into a document.

## 6. Current Aerchain re-entry point

The next valid action is not to revise the PRD, stories, or prototype. It is to review `AERCHAIN_BUSINESS_UNIT_INTAKE_DRAFT_001.md` against the assignment PDF and website context.

After PM comments are received:

1. create a new intake version preserving draft 001;
2. record each correction or open question with a stable ID;
3. ask only the next targeted evidence question;
4. update the intake state;
5. repeat until the PM authorizes the decision step; and
6. only then generate PM decisions and a new PRD.

## 7. Harness implementation implications

The harness does not need an Aerchain-specific domain model. It needs:

- a project mode flag for new problem versus existing product;
- separate source lanes and source classifications;
- a baseline-import flow for current product evidence;
- a non-regression field for improvement work;
- provenance and versioning for imported artifacts;
- a state that blocks downstream generation until intake/PM gates are satisfied;
- impact analysis across baseline, desired change, PRD, stories, and criteria; and
- an export that includes both current baseline and approved desired contract.

Aerchain-specific names, vendor data, procurement fields, and UI behavior belong in the Aerchain fixture and validation package, not in the harness domain model.

## Review gate

Status: proposed application plan for PM review.

This plan establishes how to use the approved harness package with an existing product while keeping business context, current-product evidence, PM judgment, requirements, and process state separate. No harness file or Aerchain downstream product artifact is changed by this plan.
