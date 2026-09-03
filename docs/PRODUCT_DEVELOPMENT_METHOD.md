# Product-development method for AI-agent prototypes

Audience: product and engineering teams.
Purpose: capture reusable product-development guidance from the prototype.
Authority: method guidance only; it does not define Aera behavior.

This document extracts reusable lessons from the coding-agent harness work that produced Aera. It is a method for building and reviewing AI-agent products; it is not another product requirements document and does not override the decision ledger.

## 1. Frame the job before building

Every build should begin with a job definition that states:

- the user or organization objective;
- the desired outcome;
- the actors and decision rights;
- the tasks and decisions in the workflow;
- the inputs, constraints, and dependencies;
- the outputs the product must produce;
- completion criteria; and
- verification criteria.

This prevents the agent from treating “build an AI product” as a sufficient objective. Aera's job is not “use AI in procurement.” It is to help a procurement manager move from a business need to a defensible award while preserving authority and evidence.

## 2. Separate invariant rules from instance details

Before turning a scenario into a product requirement, classify each detail as one of:

- invariant product capability or principle;
- job-specific objective, parameter, or constraint;
- evaluation-fixture detail; or
- incidental context.

The five suppliers, thirty line items, currencies, file formats, and specific supplier issues belong to the demo fixture. The durable product capabilities are response association, evidence preservation, normalization, completeness evaluation, visible uncertainty, and approval-aware workflow state.

The test is simple: if the names, quantities, or domain example change, does the product requirement remain valid? If not, the detail may have been literalized too early.

## 3. Give every artifact an audience and purpose

Each document should declare who will use it and what decision or action it supports. Use the simplest language that lets that audience act.

Internal reasoning belongs in the decision ledger or task history. Audience-facing artifacts should contain requirements, decisions, constraints, evidence, actions, and criteria that the reader needs. They should not contain harness terminology, self-justification, or explanations of how the author avoided a mistake.

Before finalizing a section, ask:

1. Does this statement change a requirement, decision, constraint, criterion, evidence claim, or action?
2. Is it needed by the intended reader?
3. Is the same information already represented elsewhere?
4. Is the vocabulary established by the user, source, or artifact schema?

If the answer is no, remove the statement from the deliverable and preserve useful reasoning in the internal record.

## 4. Keep current decisions separate from history

Long-running AI-agent builds generate corrections, rejected approaches, superseded decisions, and implementation discoveries. History is valuable, but it should not force every reader to reconstruct the current product from chronology.

Maintain two views:

- a concise current model for implementation and review; and
- a complete chronological ledger for traceability, feedback, root-cause analysis, and supersession.

The current model must link back to its decision lineage. The historical record must not silently become a second requirements source.

## 5. Specify four layers separately

For each meaningful workflow step, define four distinct layers:

1. **AI behavior** — interpret, extract, generate, explain, or propose.
2. **Deterministic substrate** — calculate, validate, normalize, persist, enforce permissions, and control state transitions.
3. **Human authority** — approve, reject, edit, resolve, acknowledge, send, or commit.
4. **Evidence and verification** — show what happened, from which source, under which rule, and how it was tested.

In Aera, an AI recommendation is not an award. A normalized value is not allowed to hide the original value. A “sent” event is not a supplier response. These distinctions are product behavior, not implementation trivia.

## 6. Define completion before implementation

An artifact or workflow step is complete only when its output and verification conditions are observable. “The AI handled it” is not a completion criterion.

For each step, record:

- entry state;
- required inputs and their authority;
- user-facing output;
- internal mechanisms;
- failure and unresolved states;
- approval or acknowledgment gate;
- transition condition; and
- verification evidence.

If a requirement cannot be tested by an independent reviewer, it is probably still a goal, rationale, or implementation hint rather than a completion criterion.

## 7. Treat failed attempts as product evidence

When a review fails, preserve the original attempt. Record the feedback, root cause, proposed correction, feedback on the correction, re-attempt, and final status.

The most useful generalized learning is not “remember this exact wording.” It is the failure class:

- an instance detail became a generalized capability;
- internal rationale leaked into an audience-facing document;
- an AI capability became a user-facing stage;
- a human acknowledgment was treated as approval;
- a deterministic rule was hidden inside an AI handoff; or
- a state transition advanced before its dependency was complete.

Promote a lesson into reusable method guidance only when it has a clear trigger, a verification check, and a benefit that justifies its overhead.

## 8. Use progressive disclosure

The agent should request the smallest missing input that unblocks the next reliable decision. It should not ask the product manager to specify later implementation details before the product decision that determines them exists.

A practical sequence is:

1. frame the job;
2. identify the next decision or task;
3. inspect available evidence;
4. classify missing information as discoverable, inferable, user-required, or blocking;
5. propose the next action and its verification;
6. obtain the required approval;
7. execute;
8. evaluate against completion criteria; and
9. record the result and any new dependency.

This keeps the product manager in control while allowing the agent to do meaningful discovery and implementation work.

## 9. Use risk-based autonomy only after evidence exists

Start with explicit approval for every consequential action. Record first-attempt approval, rework, failure classes, and verification quality across tasks. Only then consider task-specific autonomy.

Autonomy should be earned per task type and may increase, remain unchanged, or be withdrawn. It should remain bounded by reversibility, data sensitivity, workflow risk, regulatory exposure, and the cost of an incorrect action.

## 10. Review the final artifact for integrity

Before calling a build complete, verify:

- the current artifact is derived from the approved decision model;
- no hidden evaluation answer or expected failure has leaked into runtime behavior;
- the intended audience can use the document without the task log;
- every important state and authority boundary is visible;
- AI behavior is not being used to justify deterministic decisions;
- fixture-specific details have not become universal requirements;
- all claimed runtime evidence actually exists; and
- the implementation and verification commands pass.

The aim is not maximal documentation. It is a trustworthy chain from job, to decision, to product behavior, to implementation, to evidence.
