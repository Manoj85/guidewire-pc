import { NextRequest, NextResponse } from 'next/server'
import { renameFile } from '@/lib/files'

export async function PATCH(req: NextRequest) {
  if (process.env.VERCEL) {
    return NextResponse.json({ error: 'Editing is not available on Vercel' }, { status: 403 })
  }

  const body = await req.json()
  const { topic = 'guidewire-pc', path: oldPath, newName } = body
  if (!oldPath || !newName?.trim()) {
    return NextResponse.json({ error: 'Missing path or newName' }, { status: 400 })
  }

  try {
    const newPath = renameFile(topic, oldPath, newName.trim())
    return NextResponse.json({ ok: true, newPath })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Rename failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
