import { NextResponse } from 'next/server';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import type { Config } from '@/payload-types';

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const navigationHome = await payload.find({
      collection: 'navigationHome' as keyof Config['collections'],
    });

    return NextResponse.json(navigationHome);
  } catch (error) {
    console.error('Error fetching NavigationHome:', error);
    return NextResponse.json(
      { error: 'Failed to fetch NavigationHome data' },
      { status: 500 }
    );
  }
} 