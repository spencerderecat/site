import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../drizzle';
import { pins } from '../../schema';
import { eq } from 'drizzle-orm';

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await db.delete(pins).where(eq(pins.id, Number(id)));
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete pin ' + err }, { status: 500 });
  }
}