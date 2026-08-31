import { body, json } from '../_lib.js';

export const config = { runtime: 'nodejs' };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  const input = await body(req);
  return json(res, { delivery: (input.recipients || []).map((recipient: any) => ({ supplier: recipient.supplier, email: recipient.email, status: 'sent', messageId: `demo-${recipient.supplier.toLowerCase()}-2026` })) });
}
