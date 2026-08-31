# Aerchain Sourcing Workbench

A pattern-first prototype for the RFx-to-award workflow. It models canonical procurement fields across workflow stages and supplier artifact types, preserving evidence, uncertainty, comparability, and buyer review.

## Run

```bash
npm install
npm run dev
```

The guided demo is seeded with five supplier responses for a corrugated-packaging RFx. Follow: landing page → Create and approve RFx → Lock responses → Compare responses → Decide and defend award. The browser calls the live server-side OpenAI path when deployed with `OPENAI_API_KEY` in Vercel. Fake SMTP is used for the invitation path; the AI extraction, evidence review, comparison analysis, and award proposal are live.

The prepared runtime source set lives under `public/demo-runtime/`. It includes the approved policy, historical RFx/template, current schedule, Finance FX source, supplier contacts, RFx PDF, and supplier responses in email, spreadsheet, document, HTML, and image formats. The hidden evaluation set remains under `data/demo-runtime/evaluation-hidden/` and is never deployed.

## Demo truth

- 30 line items, 5 vendors
- XLSX, PDF, DOCX, email, HTML, CSV, and image artifacts
- mixed units and currency
- incomplete response, buried discount, freight ambiguity, low-confidence OCR, and quality evidence gaps
- extraction confidence is separate from decision readiness

## Live AI path

Deploy this folder to Vercel with `OPENAI_API_KEY` configured as a server environment variable. The API uses the Responses API with strict JSON Schema output; the model interprets the buyer question, while the product rules remain responsible for comparability and award safety. The browser never receives the key.
