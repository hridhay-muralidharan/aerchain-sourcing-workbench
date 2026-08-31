import { askAI, body, json, readPublic, readPublicBuffer } from './_lib.js';

export const config = { runtime: 'nodejs' };

const files = ['responses/boxsmith/BS-QMS-2026-077.docx','responses/boxsmith/follow-up.csv','responses/boxsmith/follow-up.eml','responses/boxsmith/phone-photo.svg','responses/greenfold/GF-QMS-2026-091.docx','responses/greenfold/GreenFold quotation response.docx','responses/greenfold/follow-up.eml','responses/greenfold/line-item-quote.csv','responses/kraftbox/KB-QMS-2026-081.docx','responses/kraftbox/KraftBox quotation.xlsx','responses/kraftbox/quotation.csv','responses/kraftbox/response.eml','responses/nexcorrugate/NC-QMS-2026-204.docx','responses/nexcorrugate/follow-up.eml','responses/nexcorrugate/line-item-quote.csv','responses/nexcorrugate/response.eml','responses/packright/QMS-2026-118.docx','responses/packright/line-item-quote.csv','responses/packright/quotation.html'];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, { error: 'POST required' }, 405);
  try {
    const input = await body(req);
    const responseSet = files.filter(file => /\.(html|csv|eml|svg)$/i.test(file)).map(file => ({ file, content: readPublic(file).slice(0, 18000) }));
    const responseFiles = files.filter(file => /\.(docx|xlsx|pdf)$/i.test(file)).map(file => ({ name: file.split('/').pop(), mime: file.endsWith('.xlsx') ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', base64: readPublicBuffer(file).toString('base64'), note: file }));
    const result = await askAI(`You are Aera's supplier-response completeness co-pilot. Review every response in the supplied files against the approved RFx. Associate alternate threads only when evidence supports the match. Determine each of the five suppliers' current response state. Identify only specific evidence-backed gaps, ambiguities, contradictions, missing evidence, or uncovered lines. Draft the smallest useful buyer-approved follow-up question for each unresolved condition. Never invent a supplier answer. ${input.reassess ? 'A buyer-approved follow-up has now received its prepared supplier reply or attachment. Reassess the new response version against the prior evidence, preserve the earlier history, and close only conditions that the new evidence actually resolves. Keep any delivery deviation or policy-dependent condition open unless the supplied policy authorizes the route.' : 'Assess the currently available response evidence before any follow-up is approved.'} Return JSON with suppliers [{name,state,coverage,openPoints:[{title,evidence,whyItMatters,nextQuestion}],nextAction,history:[{label,status}]}], aggregateState, aggregateMessage. Use state values complete, needs-clarification, delivery-failed, awaiting-response, or policy-authorized-exception.`, { approvedRfx: input.rfx, responseSet, files: responseFiles });
    return json(res, { completeness: result, model: process.env.OPENAI_MODEL || 'gpt-5.4-mini' });
  } catch (error) { return json(res, { error: error instanceof Error ? error.message : 'AI completeness review failed' }, 500); }
}
