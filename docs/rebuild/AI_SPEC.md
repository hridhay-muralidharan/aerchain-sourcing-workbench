# AI capability specification

Audience: AI engineer and reviewer.
Purpose: define the AI loops and their allowed context for the Aerchain prototype.
Authority: derived from the approved PRD; deterministic scaffold and buyer authority remain separate.

## Capabilities

### RFx proposal

Input: buyer-confirmed business need, selected source contents, and source metadata.
Output: draft scope, line items, questionnaire, terms, response instructions, issues, and evidence references.
Must not: approve the RFx, invent unsupported requirements, or receive hidden evaluation data.

### Response interpretation

Input: approved RFx, scoped supplier messages, attachments, and relevant policy.
Output: supplier association, response versions, extracted claims, missing or ambiguous conditions, targeted follow-up questions, and a reassessment result after new evidence.
Must not: mark complete because a follow-up was sent, merge unsupported threads, invent answers, overwrite history, or send without buyer approval.

### Comparison evidence review

Input: approved RFx, deterministic comparison substrate, applicable policy, Finance source, and cited supplier evidence.
Output: material findings with supplier, issue, severity, source path, and next action.
Must not: change arithmetic, hide exceptions, recommend an award, or decide comparison acknowledgment.

### Analyst answer

Input: approved RFx, completed comparison, visible evidence, and the buyer’s question.
Output: concise answer, cited evidence, and limitations. Text is the first required format; tables or charts may be added only when they improve the specific answer.
Must not: recommend a supplier, alter comparison state, or answer from hidden evaluation truth.

### Award proposal

Input: approved RFx criteria, acknowledged decision-ready comparison, applicable policy, and buyer guidance.
Output: proposed supplier, recommendation basis, trade-offs, evidence, and editable rationale.
Must not: commit the award, bypass unresolved basis, change criteria silently, or present proposal text as a decision.

## Shared response contract

AI responses are parsed as structured data and validated before entering the UI. Every claim and finding carries source evidence where the capability requires it. Invalid or incomplete responses enter an error or partial state and never unlock a consequential gate.

## Evaluation

Evaluate each capability independently for grounding, no-invention behavior, source citation, uncertainty handling, and boundary adherence. Evaluate interaction with the scaffold separately for correct state gates, rendering, and human approval.

