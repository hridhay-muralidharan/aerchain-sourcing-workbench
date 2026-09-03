import { body, json, validateApprovedRfx, validateDecisionReady } from './_lib.js';

export const config = { runtime: 'nodejs' };
const committed = new Map<string, Record<string, unknown>>();

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const rfx = validateApprovedRfx(input.rfx);
    const comparison = validateDecisionReady(input.comparison);
    const proposal = input.proposal && typeof input.proposal === 'object' ? input.proposal : null;
    const rationale = typeof input.rationale === 'string' ? input.rationale.trim() : '';
    const supplier = proposal?.supplier;
    if (!supplier || !Array.isArray(comparison.suppliers) || !comparison.suppliers.some((row: any) => row.name === supplier)) throw new Error('Award supplier must be present in the decision-ready comparison.');
    if (!rationale) throw new Error('A buyer rationale is required before award approval.');
    const idempotencyKey = String(input.idempotencyKey || `${comparison.event || 'rfx'}:${supplier}:${rationale}`);
    if (committed.has(idempotencyKey)) return json(res, { record: committed.get(idempotencyKey), replay: true });
    const record = { recordId: `AWD-${String(committed.size + 1).padStart(4, '0')}`, event: comparison.event || 'RFx-2026-014', supplier, rationale, proposal, rfxVersion: rfx.version || 'approved-demo-version', status: 'award-approved', authority: 'procurement-manager', committedAt: new Date().toISOString(), persistence: 'demo-process-store' };
    committed.set(idempotencyKey, record);
    return json(res, { record, replay: false });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'Award approval failed' }, 400); }
}
