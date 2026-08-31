import { askAI, body, json } from './_lib.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const proposal = await askAI(`You are Aera at the award stage. Use the approved RFx criteria, policy context, completed comparison, and buyer guidance to propose an award. Return JSON with supplier, recommendation, tradeoffs, evidence, rationale, and missingBasis. This is a proposal, not approval. Do not choose a supplier if the basis is missing.`, input);
    return json(res, { proposal });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'AI award proposal failed' }, 500); }
}
