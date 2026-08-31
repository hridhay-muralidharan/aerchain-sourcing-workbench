import { askAI, body, json, readPublic } from './_lib.js';

export const config = { runtime: 'nodejs' };
const policyPath = 'sources/policy/procurement-policy-fy2026.html';
const financePath = 'sources/finance/northstar-finance-fx-rate-sheet.html';
const files = [
  'responses/boxsmith/follow-up.csv', 'responses/boxsmith/follow-up.eml', 'responses/boxsmith/phone-photo.svg',
  'responses/greenfold/line-item-quote.csv', 'responses/greenfold/follow-up.eml',
  'responses/kraftbox/quotation.csv', 'responses/kraftbox/response.eml',
  'responses/nexcorrugate/line-item-quote.csv', 'responses/nexcorrugate/response.eml', 'responses/nexcorrugate/follow-up.eml',
  'responses/packright/quotation.html',
];
const schema = { type: 'object', additionalProperties: false, properties: { findings: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { supplier: { type: 'string' }, title: { type: 'string' }, detail: { type: 'string' }, severity: { type: 'string', enum: ['information', 'exception', 'blocker'] }, sourceFiles: { type: 'array', items: { type: 'string' } }, action: { type: 'string' } }, required: ['supplier', 'title', 'detail', 'severity', 'sourceFiles', 'action'] } } }, required: ['findings'] };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const observations = files.map(file => ({ file, content: readPublic(file).slice(0, 14000) }));
    const result = await askAI('Review this comparison evidence against the approved RFx and procurement policy. Return JSON with a findings array. Each finding must contain supplier, title, detail, severity (information, exception, or blocker), sourceFiles, and action. Return only material findings supported by the supplied text. Do not invent findings. Policy-permitted exceptions are exceptions, not blockers. Every finding must cite a supplied path. Do not recommend an award.', { comparison: input.comparison, policy: { path: policyPath, content: readPublic(policyPath) }, finance: { path: financePath, content: readPublic(financePath) }, observations });
    const findings = Array.isArray(result.findings) ? result.findings : [];
    const blockers = findings.filter((finding: any) => finding.severity === 'blocker');
    return json(res, { findings, ready: input.comparison?.responseReady === true && blockers.length === 0, status: blockers.length ? 'blocked-by-evidence' : findings.length ? 'ready-with-visible-exceptions' : 'ready', source: 'live_ai_evidence_review' });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'Evidence review failed' }, 500); }
}
