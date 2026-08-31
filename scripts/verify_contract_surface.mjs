import fs from 'node:fs';
const contract = fs.readFileSync('docs/ACTIVE_PRODUCT_CONTRACT.md', 'utf8');
const source = fs.readFileSync('src/contract.ts', 'utf8');
for (const phrase of ['Move quickly. Decide safely. Defend every award.', 'Building an RFx takes time.', 'Try Me', 'Experience the magic', 'resulting analysis are accurate', 'Aera, our AI sourcing agent helps you move from business need to award decision.', 'Without Aera']) if (!contract.includes(phrase) || !source.includes(phrase)) throw new Error(`Missing active contract phrase: ${phrase}`);
console.log('active contract surface: pass');
