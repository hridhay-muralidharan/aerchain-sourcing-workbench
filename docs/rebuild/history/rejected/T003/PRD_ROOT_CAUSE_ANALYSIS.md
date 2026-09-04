# PRD abstraction-level review

Audience: the product manager and rebuild actors.
Purpose: record why the first PRD approval is being withdrawn and define the correction.
Authority: task history; it does not define the product.

## Problem

The first PRD was written around the product’s five visible surfaces and described the workflow surface by surface. That caused the PRD to absorb the job of later artifacts.

The product requirements document should exist before epics, outcome stories, and screens. It should define the product problem and the capabilities required to address it. It should not decide how those capabilities are grouped into screens or how a user navigates them.

## Root cause

The agent used the existing prototype’s screen structure as the organizing frame instead of reconstructing the product from the buyer job. Because the existing prototype already had five surfaces, the agent mistook an implementation context for the correct product abstraction.

The agent also merged three levels:

1. product requirements: why the product exists and what capabilities it must provide;
2. outcome stories: the distinct user outcomes needed to realize those capabilities; and
3. screen flow: how the product presents and sequences those outcomes.

This reversed the intended dependency. Screens should be derived from outcome stories, and outcome stories should be derived from the PRD.

## Correction

Withdraw approval of PRODUCT_REQUIREMENTS.md Attempt 1. Preserve it as historical work, but do not use its screen headings as requirements authority.

The corrected PRD should contain:

- product context and the organizational/user problem;
- primary user and job;
- product hypothesis;
- intended product outcomes;
- product principles and authority boundaries;
- broad capabilities/features required to produce those outcomes;
- scope and deliberate omissions;
- broad AI, deterministic, and human responsibilities;
- assignment-specific context where relevant; and
- acceptance criteria for the product as a whole, without defining epics, stories, or screens.

The PRD should not contain:

- screen names or screen count;
- navigation sequence;
- layout or information-order decisions;
- epic or story decomposition;
- executor-specific implementation criteria;
- technical architecture; or
- reviewer procedures.

## Dependency impact

The low-fidelity model, design scope, scaffold specification, AI specification, reviewer specification, and implementation plan were drafted as if the screen-oriented PRD were approved. They remain unapproved downstream artifacts and must be re-derived after the corrected PRD is accepted.


