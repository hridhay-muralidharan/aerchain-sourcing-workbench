# Low-fidelity model boundary review

Audience: the product manager and rebuild actors.
Purpose: record the review of the first low-fidelity product model and the correction needed.
Authority: task history; it does not define the product.

## Problem

The first low-fidelity model correctly described much of the buyer and information flow, but it also made presentation decisions that belong to the product designer.

Examples include:

- a “left-aligned” landing layout;
- a prescribed compact before/after composition;
- a main reading column;
- supplier list on the left and selected supplier on the right;
- a comparison table with a selected supplier drawer;
- explicit below-768px collapse behavior;
- design dials for variance, motion, and density; and
- direction to use a real product visual.

## Root cause

The agent treated low fidelity as a partially specified visual design instead of a low-fidelity representation of the user and information flow. The design skill’s visual pre-flight guidance also leaked into the PM artifact. That guidance can inform the downstream designer’s work, but it cannot become a PM decision merely because the prototype will eventually need a coherent visual treatment.

The agent did not distinguish:

- product flow: what the buyer sees, learns, decides, and does;
- information structure: what information must be available at each point; and
- design solution: how the information is spatially arranged, styled, animated, and made responsive.

## Proposed fix

Retain the flow, actions, states, evidence requirements, and authority boundaries. Remove layout prescriptions, design dials, breakpoints, visual-asset instructions, and composition preferences. Add a clear downstream designer handoff describing what must be designed without selecting the design.

The original model remains preserved as Attempt 1 until the revised proposal is approved.

