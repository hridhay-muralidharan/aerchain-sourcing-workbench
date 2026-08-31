import fs from 'node:fs';
const text = fs.readFileSync('src/main.tsx','utf8');
for (const phrase of ['Confirm Procurement Ask','Generate draft RFx','Approve RFx','Review supplier responses','Continue to comparison','Approve award']) if (!text.includes(phrase)) throw new Error(`Missing user action: ${phrase}`);
console.log('prototype surface: pass');
