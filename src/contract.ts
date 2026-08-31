export const contract = {
  hero: {
    eyebrow: 'AI SOURCING AGENT',
    headline: 'Move quickly. Decide safely. Defend every award.',
    supporting: 'Aera, our AI sourcing agent helps you move from business need to award decision.',
    pain: 'Building an RFx takes time. Suppliers don’t follow your format. Justifying the award is hardest of all.',
    relief: 'Get an RFx in a couple of clicks, a supplier comparison that doesn’t break your head, and an award you can explain with confidence.',
    trackHeaders: ['Without Aera', 'With Aera'],
    tracks: [
      ['Building an RFx takes time.', 'Get an RFx in a couple of clicks.'],
      ['Supplier responses that break your head', "The comparison table you've always wanted"],
      ['Scramble for the evidence to justify the award', 'An award packet waiting to be opened'],
    ],
  },
  workflow: {
    heading: 'Here’s what Aera, our AI Sourcing Agent can do for you',
    steps: [
      ['01', 'Create and approve RFx', 'Shapes the business need, policy, and past RFxs into an RFx you can review and approve.'],
      ['02', 'Lock all supplier responses', 'See the complete history with each supplier, track and close the open points.'],
      ['03', 'Compare responses', 'Turns every supplier reply into one side-by-side comparison.'],
      ['04', 'Decide and defend award', 'Makes and helps you defend the award with clear trade-offs and evidence.'],
    ],
  },
  demo: { eyebrow: 'TRY AERA IN ACTION', line: 'See the sourcing journey from RFx to award', heroCta: 'Try Me', bottomCta: 'Experience the magic' },
  comparisonAcknowledgment: 'I acknowledge that the comparison and resulting analysis are accurate and sufficient for award recommendation.',
} as const;

export type Stage = 0 | 1 | 2 | 3 | 4;
export type Source = { name: string; type: string; path: string; description: string; status: string };
export type Issue = { id: string; title: string; evidence: string; proposal: string; status: 'open' | 'confirmed' };
export type Rfx = { title: string; objective: string; scope: string; items: { name: string; quantity: number; unit: string }[]; questionnaire: string[]; terms: string[]; issues: Issue[]; sources: string[] };
export type Comparison = { suppliers: { name: string; total: number; currency: string; completeness: string; lines: number; evidence: (string | { label: string; path: string; kind: string })[]; claims?: any[]; originalCurrency?: string | null }[]; summary: string; ready: boolean; warnings: string[]; exceptions?: any[]; policyBasis?: { label: string; kind: string; path: string }[]; lines?: { lineId: string; description: string; dimensions?: string }[]; comparisonCurrency?: string; fx?: { source: string; rate: number; effective: string; approvalReference: string }; responseReady?: boolean; decisionReady?: boolean; aiReview?: string; status?: string };
