import { NextRequest, NextResponse } from 'next/server';
import { db } from '../drizzle';
import { pins } from '../schema';

export async function GET() {
  try {
    const allPins = await db.select().from(pins);
    return NextResponse.json(allPins);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch pins ' + err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { lat, lng, name, spot, note } = await req.json();
    if (!lat || !lng || !name || !spot || !note) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const [newPin] = await db.insert(pins).values({ lat, lng, name, spot, note }).returning();
    return NextResponse.json(newPin, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to add pin ' + err }, { status: 500 });
  }
} 