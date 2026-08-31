import { askAI, body, json } from './_lib.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const result = await askAI(`Answer the buyer's question using only the approved RFx and completed comparison. This screen exists to reduce the cognitive load of understanding supplier responses. Do not recommend an award and do not make an approval decision. Return JSON with answer, evidence, and limitations.`, input);
    return json(res, result);
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'AI analysis failed' }, 500); }
}
