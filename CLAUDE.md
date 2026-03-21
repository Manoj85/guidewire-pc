# guidewire-pc-prep

A knowledge base for Guidewire P&C topics — job descriptions, resume notes, Q&A, and research saved as Markdown files.

## Purpose

This repo captures structured knowledge for Guidewire P&C insurance roles:
- Job descriptions and analysis
- Resume notes and tailoring tips
- Interview Q&A and prep material
- General Guidewire / P&C insurance research

## Project Structure

```
content/
  jd/          # Job descriptions (one .md per JD)
  resume/      # Resume variants, gap analysis, tailoring notes
  qa/          # Q&A, interview prep, topic deep-dives
  research/    # General Guidewire / P&C insurance research
app/           # Next.js app (UI)
components/    # React components
lib/           # Shared utilities
```

## File Naming Convention

- JDs: `content/jd/<company>-<role>.md`
- Resume notes: `content/resume/<company>-<role>-notes.md`
- Q&A: `content/qa/<topic>.md`
- Research: `content/research/<topic>.md`

## Workflow

- All responses and research are saved as `.md` files in the appropriate folder.
- Commit after every addition with a descriptive message.
