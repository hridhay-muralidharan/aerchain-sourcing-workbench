# Aera AI capability brief

## Purpose

This is the review document for the product manager and product manager’s manager. It describes the AI requirements at the level a PM can define clearly before implementation begins. It intentionally stops before model, prompt, retrieval, data-schema, orchestration, or code decisions.

## Product requirement

Aera should help a procurement manager move from a business need to an award decision by reconstructing fragmented sourcing work, making missing or conflicting information visible, and keeping the final decision explainable. Aera should reduce the cognitive load of the workflow without taking ownership of decisions that belong to the procurement manager or the organization.

## AI capability across the sourcing journey

### 1. Create and approve the RFx

Aera should turn the business need and the organization’s relevant approved sources into a draft RFx that the procurement manager can review and approve. It should understand the role of each source, bring together the scope, line items, questionnaire, terms, and response instructions, and identify material gaps or conflicts before the RFx is sent to suppliers.

Aera must not invent missing requirements, silently resolve a policy conflict, treat a historical RFx as current authority, or approve or release the RFx.

### 2. Invite suppliers

Aera should help prepare the complete supplier invitation from the approved RFx: the appropriate supplier contact, subject, message, attachment, response instructions, and supplier-specific details. It should track what happened to each invitation and make the next action clear when delivery fails or a response does not arrive.

Aera must not send an unapproved invitation, assume a contact is correct without supporting evidence, expose one supplier’s information to another supplier, or treat a sent message as a supplier response.

### 3. Move supplier responses toward completeness

Aera should read supplier replies and attachments in whatever shape they arrive, associate relevant messages even when the supplier uses a different thread, and identify the specific missing, ambiguous, conflicting, or unsupported information that prevents a fair comparison. It should draft the smallest useful follow-up, reassess the supplier’s next response, and preserve the complete history.

Aera must not infer an answer from a filename, mark a supplier complete merely because a follow-up was sent, overwrite earlier evidence, send a follow-up without buyer approval, or stop at the first message when later relevant evidence exists.

### 4. Help the buyer understand the comparison

Aera should bring supplier responses onto the same RFx lines and questionnaire questions, preserve original values beside normalized values, explain differences in currency, units, terms, delivery, quality, and scope, and answer the buyer’s questions using the comparison and its evidence. It should show the source behind every material value or conclusion.

Aera must not force unlike offers into false comparability, apply an unsupported conversion, hide an exception, use comparison analysis to make an award recommendation, or imply that the buyer has approved the comparison when they have not.

### 5. Prepare and defend the award

Aera should apply the approved evaluation basis to the completed comparison and propose the supplier that best fits that basis. It should make the trade-offs explicit, connect the recommendation to evidence, and draft an award rationale that the procurement manager can review, edit, and use to explain the decision.

Aera must not make the award, hide a material trade-off, invent evidence or scoring, change the approved evaluation basis silently, or present its recommendation as the buyer’s approval.

## Grounding requirement

The organization’s procurement policy should inform Aera’s behavior at every relevant stage. Aera should use the applicable part of the approved policy for the current action, while also using the current RFx, relevant historical material, supporting sources, supplier evidence, and buyer guidance.

If an organization has no approved policy, the product should not silently manufacture one. A future capability may propose a policy from validated historical procurement evidence, or later from broader validated knowledge, but each proposal must remain clearly separate from an approved organizational policy until the authorized policy owner approves it.

## Human boundary

The procurement manager remains responsible for confirming material requirements, approving the RFx, approving supplier follow-ups, acknowledging the comparison, resolving policy-authorized exceptions, and approving the award. Aera supplies reconstruction, interpretation, extraction, explanation, and proposals; it does not supply organizational authority.

## Review question

The PM review is complete when the team can answer yes to this question: “For every important touchpoint, can we state what Aera should help the procurement manager accomplish, what Aera must not do, and what real-world decision or artifact the buyer should have at the end?”
