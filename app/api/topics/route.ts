import { NextResponse } from 'next/server'
import { getTopics } from '@/lib/files'

export async function GET() {
  try {
    const topics = getTopics()
    return NextResponse.json(topics)
  } catch {
    return NextResponse.json({ error: 'Failed to read topics' }, { status: 500 })
  }
}
