import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY not configured' }, { status: 500 })
  }

  const formData = await req.formData()
  const file = formData.get('audio')

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  // Whisper /audio/translations transcribes and translates to English in one step
  const translation = await client.audio.translations.create({
    file: file as File,
    model: 'whisper-1',
    response_format: 'text',
  })

  return NextResponse.json({ transcript: translation })
}
