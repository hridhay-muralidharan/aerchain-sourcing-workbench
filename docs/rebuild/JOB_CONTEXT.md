# Job context

Audience: the product manager and anyone preparing the assignment output.
Purpose: preserve useful source context while separating assignment facts, existing prototype choices, and unresolved product decisions.
Authority: input context; it does not approve the rebuilt product.

## Assignment job

A category buyer needs to move from a business requirement to a defensible supplier award. The assignment asks for a working prototype that demonstrates RFx creation, varied vendor-response handling, extraction and normalization, natural-language interrogation, and award support.

## Intended product outcome

Reduce the buyer’s manual effort and uncertainty when turning inconsistent supplier evidence into a comparison and award decision, while keeping the buyer responsible for consequential judgments.

## Existing context worth carrying forward

- The existing prototype already contains a corrugated-packaging scenario with five vendors and thirty line items.
- The runtime data includes spreadsheets, documents, email, HTML, CSV, a PDF, and a phone-photo SVG.
- Existing code separates AI calls from deterministic comparison construction in several places.
- Existing work contains useful copy, decision history, response edge cases, and source lineage.
- Existing documentation includes substantial thinking about procurement policy, provenance, comparison, and authority.

These are candidate inputs to the rebuild. They are not automatically approved requirements.

## Assignment-specific outputs

The rebuilt job should eventually produce a working prototype, a credible procurement dataset, real extraction/reasoning loops, a natural-language analyst conversation, a walkthrough, and a concise decisions/omissions note. The vendor and line-item counts belong to the dataset used for this assignment; the product capability should remain useful beyond those counts.

## Explicit exclusions from this rebuild

The harness repository is read-only. This workspace does not attempt to build a general harness product, grant autonomous agent permissions, or turn the Aerchain prototype into a harness interface.

