import fs from 'node:fs';
const text = ['src/main.tsx', 'src/SupplierExchangeWorkspace.tsx', 'src/ComparisonWorkspace.tsx', 'src/AwardDecisionWorkspace.tsx'].map(file => fs.readFileSync(file, 'utf8')).join('\n');
for (const phrase of ['Confirm Procurement Ask','Generate draft RFx','Approve RFx','Review supplier responses','Continue to comparison','Approve award']) if (!text.includes(phrase)) throw new Error(`Missing user action: ${phrase}`);
if ((fs.readFileSync('src/main.tsx', 'utf8').match(/<AwardDecisionWorkspace/g) || []).length !== 1) throw new Error('Award workspace must have one canonical render.');
if (!fs.existsSync('api/award-commit.ts')) throw new Error('Award commit boundary is missing.');
console.log('prototype surface: pass');
