import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT = `You are a document formatter. You receive raw chat conversation text (from Claude.ai, ChatGPT, WhatsApp, or similar) and convert it into a clean, well-structured markdown document.

Rules:
- Remove all chat-specific noise: timestamps, speaker labels ("You:", "Claude:", "User:", "Assistant:", "Me:"), message separators, UI artifacts
- Preserve ALL substantive content — do not drop information
- Organize logically: group related content, use headings where natural
- At the very top, add a ## Summary section with 3–5 bullet points covering the key topics discussed
- Return only the markdown. No preamble, no explanation, no code fences.`

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 })
  }

  const body = await req.json()
  const { content } = body
  if (!content?.trim()) {
    return NextResponse.json({ error: 'No content provided' }, { status: 400 })
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content }],
    })

    const cleaned = message.content
      .filter(b => b.type === 'text')
      .map(b => (b as { type: 'text'; text: string }).text)
      .join('')

    return NextResponse.json({ cleaned })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Claude API error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
