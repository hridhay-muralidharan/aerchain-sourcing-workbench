import fs from 'node:fs';
const required = ['public/demo-runtime/business-need.md','public/demo-runtime/sources/policy/procurement-policy-fy2026.html','public/demo-runtime/sources/past-rfx/Packaging RFx Template FY2025.xlsx','public/demo-runtime/sources/rfx-2026-014.pdf','public/demo-runtime/responses/boxsmith/phone-photo.svg'];
for (const file of required) if (!fs.existsSync(file)) throw new Error(`Missing runtime asset: ${file}`);
if (fs.existsSync('public/demo-runtime/evaluation-hidden')) throw new Error('Hidden evaluation set must not be public');
console.log(`asset pack: pass (${required.length} anchors)`);
