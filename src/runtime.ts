import type { Source } from './contract';

export const runtimeBase = '/demo-runtime';
export const preparedSources: Source[] = [
  { name: 'Procurement policy FY2026', type: 'Policy', path: 'sources/policy/procurement-policy-fy2026.html', description: 'Versioned policy used across the sourcing journey', status: 'Selected' },
  { name: 'Packaging RFx Template FY2025', type: 'Past RFx / template', path: 'sources/past-rfx/Packaging RFx Template FY2025.xlsx', description: 'Prior structure and field semantics', status: 'Selected' },
  { name: 'Packaging specification — Pune plant', type: 'Supporting source', path: 'sources/supporting/pune-packaging-specification.html', description: 'Technical requirements for the current need', status: 'Selected' },
  { name: 'Questionnaire', type: 'Supporting source', path: 'sources/supporting/questionnaire.html', description: 'Supplier questions and response expectations', status: 'Selected' },
];

export const businessNeed = `We need corrugated cartons for the Pune plant. Thirty sizes are required for quarterly demand. Suppliers should quote line by line, confirm delivery capability, and answer the quality and sustainability questions.`;
export const suppliers = ['BoxSmith', 'GreenFold', 'KraftBox', 'NexCorrugate', 'PackRight'];
export const sourceUrl = (path: string) => `${runtimeBase}/${path}`;
