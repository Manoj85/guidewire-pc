import { NextRequest, NextResponse } from 'next/server'
import { getFileTree } from '@/lib/files'

export async function GET(req: NextRequest) {
  const topic = req.nextUrl.searchParams.get('topic') ?? 'guidewire-pc'
  try {
    const tree = getFileTree(topic)
    const canEdit = !process.env.VERCEL
    return NextResponse.json({ tree, canEdit })
  } catch {
    return NextResponse.json({ error: 'Failed to read files' }, { status: 500 })
  }
}
