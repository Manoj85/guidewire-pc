import { NextResponse } from 'next/server'
import { getFileTree } from '@/lib/files'

export async function GET() {
  try {
    const tree = getFileTree()
    const canEdit = !process.env.VERCEL
    return NextResponse.json({ tree, canEdit })
  } catch {
    return NextResponse.json({ error: 'Failed to read files' }, { status: 500 })
  }
}
