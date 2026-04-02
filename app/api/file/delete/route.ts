import { NextRequest, NextResponse } from 'next/server'
import { deleteFile } from '@/lib/files'

export async function DELETE(req: NextRequest) {
  if (process.env.VERCEL) {
    return NextResponse.json({ error: 'Editing is not available on Vercel' }, { status: 403 })
  }

  const body = await req.json()
  const { topic = 'guidewire-pc', path: filePath } = body
  if (!filePath) {
    return NextResponse.json({ error: 'Missing path' }, { status: 400 })
  }

  try {
    deleteFile(topic, filePath)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Delete failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
