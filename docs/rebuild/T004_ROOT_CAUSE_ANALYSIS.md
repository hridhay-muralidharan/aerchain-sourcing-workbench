# T004 root-cause analysis

Audience: the product manager and rebuild actors.
Purpose: record why the first scaffold specification was rejected and define the correction.
Authority: task history; it does not redefine the product.

## Problem

The first scaffold specification included concrete API routes, browser state fields, runtime directory names, persistence mechanisms, and implementation-level deterministic rules. That made it look like a technical design produced by the product manager rather than an implementation specification that communicates product behavior and constraints to the downstream engineer.

## Root cause

The agent misread “implementation specifications for the product/software engineer” as permission to choose the implementation. The harness requires the product manager to coordinate downstream actors and define the outputs they must produce, but it does not collapse the product-manager role into the product/software-engineer role.

The agent also overcorrected from the earlier failure of being too vague. Instead of specifying observable scaffold responsibilities, user-visible state behavior, authority boundaries, and verification outcomes, it supplied a technical solution: named routes, a React state model, storage details, and concrete server mechanisms.

## Boundary correction

The product-manager scaffold specification should define:

- what the software product must enable the user to do;
- the visible states and transitions the user must experience;
- the information and authority boundaries around AI and human actions;
- the deterministic guarantees the implementation must provide;
- the behavior of simulated or omitted integrations;
- the required evidence and reviewer checks; and
- the questions or decisions the engineer must resolve.

It should not define:

- framework or component choices;
- route names or endpoint topology;
- database or browser-storage design;
- internal type names or object schemas;
- model/provider configuration;
- code organization; or
- a prescribed technical solution.

Those decisions belong to the product/software engineer’s technical design, constrained by the approved PRD and this product-level specification.

## Impact

The original document risks narrowing the engineer’s solution space, making the PM appear to own technical architecture, and confusing product requirements with implementation choices. It also violates the harness’s separation between PM reasoning outputs and downstream actor outputs.

## Proposed fix

Keep the original scaffold specification in the git history as Attempt 1. Replace it after approval with a product-level scaffold brief organized around:

1. user-visible product responsibilities;
2. state and transition behavior;
3. AI/scaffold boundary;
4. deterministic guarantees;
5. integration truthfulness;
6. recovery and accessibility expectations;
7. required engineering output; and
8. reviewer evidence.

The engineer should then produce the technical design as a separate downstream artifact.

