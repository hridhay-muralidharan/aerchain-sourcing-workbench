import * as fs from 'node:fs';
import * as path from 'node:path';

export function json(res: any, value: unknown, status = 200) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(value));
}

export async function body(req: any) {
  if (req.body && typeof req.body === 'object') return req.body;
  let raw = '';
  await new Promise<void>((resolve, reject) => {
    req.setEncoding?.('utf8');
    req.on?.('data', (chunk: string) => { raw += chunk; });
    req.on?.('end', () => resolve());
    req.on?.('error', reject);
    if (!req.on) resolve();
  });
  return raw ? JSON.parse(raw) : {};
}

export function readPublic(relative: string) {
  const safe = relative.replace(/^\/+/, '').replace(/\.\./g, '');
  const file = path.join(process.cwd(), 'public', 'demo-runtime', safe);
  return fs.readFileSync(file, 'utf8');
}

export function readPublicBuffer(relative: string) {
  const safe = relative.replace(/^\/+/, '').replace(/\.\./g, '');
  return fs.readFileSync(path.join(process.cwd(), 'public', 'demo-runtime', safe));
}

export function requireObject(value: unknown, label: string) {
  if (!value || typeof value !== 'object') throw new Error(`${label} is required.`);
  return value as Record<string, any>;
}

export function validateApprovedRfx(rfx: unknown) {
  const value = requireObject(rfx, 'Approved RFx');
  if (!value.title || !Array.isArray(value.items) || value.items.length === 0 || !Array.isArray(value.issues) || value.issues.some((issue: any) => issue.status === 'open')) {
    throw new Error('The RFx must contain line items and no unresolved issues before this action.');
  }
  return value;
}

export function validateDecisionReady(comparison: unknown) {
  const value = requireObject(comparison, 'Comparison');
  if (value.decisionReady !== true || value.ready !== true) throw new Error('The comparison has not passed its deterministic and evidence-readiness gates.');
  return value;
}

export async function askAI(instruction: string, input: unknown) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY is not configured.');
  const userContent = (input as any)?.files ? [
    { type: 'input_text', text: JSON.stringify({ ...input as any, files: (input as any).files.map((f: any) => ({ name: f.name, note: f.note })) }) },
    ...(input as any).files.map((f: any) => ({ type: 'input_file', filename: f.name, file_data: `data:${f.mime};base64,${f.base64}` })),
  ] : JSON.stringify(input);
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-5.4-mini', temperature: 0, store: false, text: { format: { type: 'json_object' } }, input: [{ role: 'system', content: instruction }, { role: 'user', content: userContent }] }),
  });
  if (!response.ok) { const detail = await response.text(); throw new Error(`OpenAI request failed (${response.status}): ${detail.slice(0, 240)}`); }
  const data = await response.json() as any;
  const text = data.output_text || data.output?.flatMap((o: any) => o.content || []).find((c: any) => c.text)?.text;
  if (!text) throw new Error('The model returned no structured text.');
  const cleaned = text.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '').trim();
  try { return JSON.parse(cleaned); } catch { const start = cleaned.indexOf('{'); const end = cleaned.lastIndexOf('}'); if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1)); throw new Error('The model returned invalid JSON.'); }
}
