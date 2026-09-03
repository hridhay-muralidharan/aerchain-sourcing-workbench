import { body, json, readPublic, validateApprovedRfx } from './_lib.js';

export const config = { runtime: 'nodejs' };
type Claim = { lineId: string; description: string; quantity: number; unit: string; price: number | null; currency: string | null; pricingBasis: string | null; source: string; evidence: string; status: 'extracted' | 'missing' | 'ambiguous' };

const supplierFiles: Record<string, string[]> = {
  'KraftBox Industries': ['responses/kraftbox/quotation.csv', 'responses/kraftbox/response.eml', 'responses/kraftbox/KraftBox quotation.xlsx', 'responses/kraftbox/KB-QMS-2026-081.docx'],
  'PackRight Solutions': ['responses/packright/quotation.html', 'responses/packright/line-item-quote.csv', 'responses/packright/QMS-2026-118.docx'],
  'NexCorrugate': ['responses/nexcorrugate/line-item-quote.csv', 'responses/nexcorrugate/response.eml', 'responses/nexcorrugate/follow-up.eml', 'responses/nexcorrugate/NC-QMS-2026-204.docx'],
  'BoxSmith Co.': ['responses/boxsmith/follow-up.csv', 'responses/boxsmith/follow-up.eml', 'responses/boxsmith/phone-photo.svg', 'responses/boxsmith/BS-QMS-2026-077.docx'],
  'GreenFold Packaging': ['responses/greenfold/line-item-quote.csv', 'responses/greenfold/follow-up.eml', 'responses/greenfold/GreenFold quotation response.docx', 'responses/greenfold/GF-QMS-2026-091.docx'],
};
const scheduleText = readPublic('sources/past-rfx/packaging-rfx-fy2026-current.csv');
const scheduleRows = scheduleText.trim().split(/\r?\n/).slice(1);
const lineSchedule = scheduleRows.map(row => { const [lineId, description, dimensions] = row.split(','); return { lineId, description, dimensions }; });
const financePath = 'sources/finance/northstar-finance-fx-rate-sheet.html';
const policyPath = 'sources/policy/procurement-policy-fy2026.html';

function quantityFor(lineId: string) { return Number(scheduleRows.find(row => row.startsWith(`${lineId},`))?.split(',')[5]) || 0; }
function csvRows(text: string) { return text.trim().split(/\r?\n/).slice(1).map(row => row.split(',').map(value => value.trim())); }
function claimsFromCsv(file: string): Claim[] { return csvRows(readPublic(file)).map(values => { const [lineId, description, , , , quantity, unit, price, currency, pricingBasis] = values; const numericPrice = Number(price); return { lineId, description, quantity: Number(quantity) || 0, unit: unit || '', price: Number.isFinite(numericPrice) ? numericPrice : null, currency: currency || null, pricingBasis: pricingBasis || null, source: file, evidence: `${file} · ${lineId}`, status: lineId && Number.isFinite(numericPrice) && currency && pricingBasis ? 'extracted' : 'missing' }; }); }
function claimsFromHtml(file: string): Claim[] { const html = readPublic(file); return [...html.matchAll(/<tr><td>(L-\d+)<\/td><td>([^<]+)<\/td><td>[^<]+<\/td><td>[^<]+<\/td><td>([A-Z]{3})\s+([\d.]+)\s+per piece<\/td><\/tr>/g)].map(match => ({ lineId: match[1], description: match[2], quantity: quantityFor(match[1]), unit: 'piece', price: Number(match[4]), currency: match[3], pricingBasis: 'per piece', source: file, evidence: `${file} · ${match[1]}`, status: 'extracted' as const })); }
function claimsFor(files: string[]) { const csv = files.find(file => file.endsWith('.csv')); if (csv) return claimsFromCsv(csv); const html = files.find(file => file.endsWith('.html')); return html ? claimsFromHtml(html) : []; }
function financeRate() { const match = readPublic(financePath).match(/1\s+USD\s*=\s*INR\s+([\d.]+)/i); if (!match) throw new Error('Approved Finance FX rate is missing or unreadable.'); return Number(match[1]); }

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req); validateApprovedRfx((input as any).rfx); const fxRate = financeRate();
    const suppliers = Object.entries(supplierFiles).map(([name, files]) => { const claims = claimsFor(files); const normalizedClaims = claims.map(claim => ({ ...claim, normalizedPrice: claim.price === null ? null : Math.round(claim.price * (claim.currency === 'USD' ? fxRate : 1) * 100) / 100, normalizedCurrency: 'INR' })); return { name, total: Math.round(claims.reduce((sum, claim) => sum + (claim.price === null ? 0 : claim.price * claim.quantity * (claim.currency === 'USD' ? fxRate : 1)), 0) * 100) / 100, currency: 'INR', originalCurrency: claims[0]?.currency || null, completeness: claims.length === lineSchedule.length && claims.every(claim => claim.status === 'extracted') ? 'complete' : 'partial', lines: claims.length, claims: normalizedClaims, evidence: files.map(file => ({ label: file.split('/').pop(), path: `/demo-runtime/${file}`, kind: file.split('.').pop()?.toUpperCase() || 'FILE' })) }; });
    const comparison = { event: 'RFx-2026-014', comparisonCurrency: 'INR', fx: { source: financePath, rate: fxRate, effective: '26 August 2026', approvalReference: 'FIN-FX-2026-08-26' }, suppliers, lines: lineSchedule, warnings: [], exceptions: [], policyBasis: [{ label: 'Northstar Procurement Policy FY2026', kind: 'POLICY', path: `/demo-runtime/${policyPath}` }, { label: 'Northstar Finance FX Rate Sheet', kind: 'FINANCE', path: `/demo-runtime/${financePath}` }], normalization: { rule: 'Unambiguous physical conversions and the approved event FX rate are applied deterministically.', source: financePath, originalValuesPreserved: true }, summary: `${suppliers.length} suppliers · ${lineSchedule.length} RFx lines · original evidence preserved`, responseReady: suppliers.every(supplier => supplier.lines === lineSchedule.length && supplier.completeness === 'complete'), ready: false, decisionReady: false, status: 'reviewing-evidence', aiReview: 'pending' };
    return json(res, { comparison, model: process.env.OPENAI_MODEL || 'gpt-5.4-mini', source: 'deterministic_comparison_substrate' });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'Comparison construction failed' }, 500); }
}
