import { askAI, body, json, readPublic, readPublicBuffer } from './_lib.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const sourceTexts = Object.entries(input.sources || {}).map(([name, text]) => ({ name, text }));
    const sourceFiles = (input.sourceFiles || []).map((file: any) => ({ name: file.name, mime: file.mime, base64: readPublicBuffer(file.path).toString('base64'), note: file.note }));
    const result = await askAI(`You are Aera, an AI sourcing co-pilot. Reconstruct a draft RFx from the business need and scoped source contents. Do not invent missing qualifiers. Identify only material, evidence-backed issues in the supplied sources. For each issue propose a treatment grounded in evidence, but require buyer confirmation. Return JSON with title, objective, scope, items (name, quantity, unit), questionnaire, terms, sources, and issues (id,title,evidence,proposal,status=open).`, { businessNeed: input.businessNeed, sourceTexts, files: sourceFiles });
    return json(res, { rfx: result, model: process.env.OPENAI_MODEL || 'gpt-5.4-mini' });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'AI intake failed' }, 500); }
}
