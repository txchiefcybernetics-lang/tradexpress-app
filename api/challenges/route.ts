import { NextResponse } from 'next/server';

const challenges = [
  {
    id: 1,
    category: 'Customs & Tariff',
    title: 'AHTN Code Classification for Hybrid Solar Inverter',
    description: 'Determine the correct 8-digit AHTN 2022 tariff code for a 5kW grid-tie solar inverter imported from China, including applicable MFN duty rates.',
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    category: 'Backend Security',
    title: 'Supabase Row Level Security (RLS) Policy Audit',
    description: 'Write a secure PostgreSQL RLS policy for the `chats` table ensuring that authenticated users can only read and write rows matching their own `user_id`.',
    difficulty: 'Advanced'
  },
  {
    id: 3,
    category: 'Cargo Optimization',
    title: '3D Container Space Allocation Algorithm',
    description: 'Calculate the maximum number of standard pallets (1200x1000mm) that can fit inside a 40-foot high cube container while maintaining weight distribution limits.',
    difficulty: 'Expert'
  }
];

export async function GET() {
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  return NextResponse.json({ success: true, challenge: randomChallenge });
}
