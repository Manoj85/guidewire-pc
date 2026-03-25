import { NextRequest, NextResponse } from 'next/server'
import { searchFiles } from '@/lib/files'

export async function GET(req: NextRequest) {
  const topic = req.nextUrl.searchParams.get('topic') ?? 'guidewire-pc'
  const q     = req.nextUrl.searchParams.get('q') ?? ''
  try {
    const results = searchFiles(topic, q)
    return NextResponse.json(results)
  } catch {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
