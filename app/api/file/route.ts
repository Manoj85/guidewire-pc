import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from '@/lib/files'

export async function GET(req: NextRequest) {
  const filePath = req.nextUrl.searchParams.get('path')
  if (!filePath) return NextResponse.json({ error: 'No path' }, { status: 400 })

  try {
    const content = readFile(filePath)
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}

export async function PUT(req: NextRequest) {
  if (process.env.VERCEL) {
    return NextResponse.json({ error: 'Editing is not available on Vercel' }, { status: 403 })
  }

  const body = await req.json()
  const { path: filePath, content } = body
  if (!filePath || content === undefined) {
    return NextResponse.json({ error: 'Missing path or content' }, { status: 400 })
  }

  try {
    writeFile(filePath, content)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Write failed' }, { status: 500 })
  }
}
