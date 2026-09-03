import fs from 'node:fs';

const read = file => fs.readFileSync(file, 'utf8');
const ledger = read('docs/DECISION_LEDGER.md');
const ledgerCurrent = ledger.slice(0, ledger.indexOf('## Chronological event log'));
const index = read('docs/IMPLEMENTATION_INDEX.md');
const contract = read('docs/ACTIVE_PRODUCT_CONTRACT.md');
const main = read('src/main.tsx');
if (ledgerCurrent.includes('IMPLEMENTATION_REFERENCE.md')) throw new Error('Ledger contains a broken implementation reference.');
if (ledgerCurrent.includes('Implementation: not authorized during alignment')) throw new Error('Ledger current state still claims implementation is unauthorized.');
if (index.includes('To reconstruct')) throw new Error('Implementation index still contains reconstruction-only status.');
if ((main.match(/<AwardDecisionWorkspace/g) || []).length !== 1) throw new Error('Award surface is duplicated.');
if (!main.includes('schemaVersion: 2')) throw new Error('Versioned browser recovery state is missing.');
if (!read('api/award-commit.ts').includes('idempotencyKey')) throw new Error('Award commit idempotency is missing.');
if (!read('api/comparison.ts').includes('financeRate()')) throw new Error('Comparison does not read the approved Finance source.');
if (fs.existsSync('public/demo-runtime/evaluation-hidden')) throw new Error('Hidden evaluation data is public.');
for (const phrase of ['four stages', 'five visible surfaces', 'AI', 'Deterministic', 'buyer']) if (!contract.toLowerCase().includes(phrase.toLowerCase())) throw new Error('Canonical contract is missing: ' + phrase);
console.log('alignment traceability: pass');
