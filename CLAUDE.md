# guidewire-pc-prep

A knowledge base for Guidewire P&C topics — job descriptions, resume notes, Q&A, and research saved as Markdown files, with a Next.js viewer app.

## Purpose

This repo captures structured knowledge for Guidewire P&C insurance roles:
- Job descriptions and analysis
- Resume notes and tailoring tips
- Interview Q&A and prep material
- General Guidewire / P&C insurance research
- Source PDFs transcribed as markdown (for claude.ai context loading)

## Project Structure

```
CHANGELOG.md           # Living content change history — update with every commit
content/
  topics.json          # Topic definitions — drives sidebar and folder structure
  guidewire-pc/        # Active topic: ValueMomentum AVP Client Services prep
    jd/                # Job descriptions
    resume/            # Resume notes and tailoring
    qa/                # Interview Q&A and prep
      choks/           # Choks Kandaswamy interview simulation files
    research/          # Guidewire / P&C insurance reference material
    sources/           # PDF transcripts and raw source material (for claude.ai)
app/                   # Next.js app (UI)
components/            # React components
lib/                   # Shared utilities
```

## File Naming Convention

- JDs: `content/<topic>/jd/<company>-<role>.md`
- Resume notes: `content/<topic>/resume/<company>-<role>-notes.md`
- Q&A: `content/<topic>/qa/<topic>.md`
- Research: `content/<topic>/research/<topic>.md`
- Sources: `content/<topic>/sources/<source-name>.md`

## Workflow

- All responses and research are saved as `.md` files in the appropriate folder.
- **Commit after every file change** — do not wait to be asked.
- **Update `CHANGELOG.md` with every commit** — add an entry describing what changed. Use topic-relative backtick file paths (e.g. `qa/choks/01-strategy.md`) so they render as clickable links in the app.

## Language Rules

- **Present tense** for role descriptions and capability statements: "I lead", "I manage", not "I led", "I managed". STAR story events (past engagements) stay past tense.
- **No Build/Grow/Run terminology** — use plain language: "new implementation", "transformation program", "Managed Services".
- **No ACE certification mentions** in answers.
- **MuleSoft only** — not Kafka. Architectural decision level only (Canal/CompSource story). No DataWeave/Anypoint internals.
- **No commercial lines elaboration** — too complex; do not expand on it.
- **Duck Creek** — no delivery experience. Acknowledge honestly and redirect to Guidewire.

## Interview Prep Rules

- **STAR format for all behavioral and situational answers** — Situation → Task → Action → Result. No exceptions.
- **Personal lines financial diagnostic** — when discussing personal lines engagements, include: states licensed, written vs. earned premium, return premium exposure, unpaid premium aging, loss ratios by line.
- **Check coverage before writing** — grep the relevant prep file first and report whether the topic is fully / partially / not covered.

## Choks Interview Simulation (claude.ai)

System prompt and file feed instructions: `content/guidewire-pc/qa/choks/00-claude-ai-system-prompt.md`

Key rules for the simulation:
- Answer AS Manoj, first person, from prep material only
- 150 words max per answer — let Choks direct the depth
- STAR format for behavioral questions, tight (one sentence per element)
- No theory, no frameworks — real stories with real outcomes only
