import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'CHANGELOG.md')
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json({ content })
  } catch {
    return NextResponse.json({ content: '# Changelog\n\nNo changelog found.' })
  }
}
