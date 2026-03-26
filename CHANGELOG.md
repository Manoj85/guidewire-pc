# Content Change History

Living record of what was added or changed, newest first.
File references in `backticks` are clickable links in the app.

---

## 2026-03-26 — System prompt: content fidelity rules to prevent stripping

**Updated: `qa/choks/00-claude-ai-system-prompt.md`**
- Added Rule 2 (CONTENT FIDELITY): explicit prohibition on removing numbers, names, clients, metrics, condensing sentences, or substituting vague language — specific phrases like "$2.4M" and "28%→11%" must appear verbatim
- Added Rule 4: 150-word target applies ONLY to synthesized answers — prep answers delivered in full regardless of length
- Added Rule 5: deep detail blocks are study context only — not included in spoken answers unless Choks explicitly asks for more depth
- Renumbered rules 4–11 accordingly

---

## 2026-03-26 — Fix: search highlight — rewrite as markdown pre-processing

**Fixed: highlights wiped on any re-render** — `components/FileViewer.tsx`
- Root cause: DOM manipulation via TreeWalker/useLayoutEffect inserted `<mark>` tags outside React's virtual DOM — any re-render (glossary click, state change) caused React reconciliation to wipe them
- Rewrite: `displayContent` memo pre-processes the markdown string before ReactMarkdown sees it, injecting `<mark data-search>` tags around matches (code blocks/spans excluded)
- Added `rehype-raw` plugin so ReactMarkdown renders the injected HTML marks as real elements
- Highlights now live in React's virtual DOM and survive re-renders
- `useEffect` scrolls to first mark after render

---

## 2026-03-26 — Fix: search highlight timing — switch to useLayoutEffect

**Fixed: yellow highlights still not appearing** — `components/FileViewer.tsx`
- `requestAnimationFrame` inside `useEffect` was unreliable — multiple re-renders during file load could cancel the frame before it fired
- Replaced with `useLayoutEffect` which runs synchronously after React commits DOM, before browser paint — ReactMarkdown output is guaranteed in DOM with no race possible
- Scroll-into-view deferred to a single RAF (since scrolling requires a painted layout)

---

## 2026-03-26 — Fix: search highlight missing after opening a file

**Fixed: yellow highlights not appearing in viewer** — `components/FileViewer.tsx`
- Root cause: `useEffect` ran synchronously after React state change but before ReactMarkdown had painted new DOM — TreeWalker found no text nodes
- Fix: wrapped DOM walk in `requestAnimationFrame` so it executes after browser paint; cleanup cancels the frame on re-render

---

## 2026-03-26 — Fix: search box stays populated after clicking a result

**Fixed: search cleared on file open** — `app/page.tsx`
- Removed `setSearchQuery('')` from file select handler — search results stay visible after opening a file
- Can now click multiple results in sequence without retyping the query
- Clearing the search box (× button) also clears the in-viewer highlights

---

## 2026-03-26 — Fix: remove all Guidewire certification claims from answers

**Fixed: no Guidewire certification claims in any spoken answer**
- `qa/choks/03-questions-q16-q42.md`: Q23 spoken answer → "structured Guidewire learning program"; deep detail → "platform literacy is the floor"; Q24 tiger team → "deep platform delivery experience"; Q40 → "Guidewire platform learning programs"
- `qa/choks/02-questions-q01-q15.md`: Q5 deep detail → removed "Beyond certification" framing
- `qa/choks/01-strategy.md`: cheat sheet row → "Guidewire platform learning program"
- `qa/choks/06-sanjay-intel.md`: cert list note → "Guidewire platform learning program leadership"
- Retained: EY firm-wide "2,100+ certified professionals" stat (org scale, not personal); honest forward statement "ready to pursue if VM wants"

---

## 2026-03-26 — Fix: remove ACE certification mentions from answer files

**Fixed: ACE references in answer-context files** (would surface in claude.ai responses)
- `qa/choks/06-sanjay-intel.md`: "ACE-certified developers" → "developers and configuration specialists with platform certifications"; reference note updated to "Guidewire certification program leadership"
- `qa/choks/01-strategy.md`: cheat sheet row updated to "Guidewire certification program (EY)"
- `qa/choks/03-questions-q16-q42.md`: Q40 community answer updated to "Guidewire Education and Certification"
- Reference files (`04-reference.md`, `05-acronyms.md`) left unchanged — ACE is a real Guidewire term, just not one Manoj claims as a credential

---

## 2026-03-26 — Feature: match case toggle for search

**Added: case-sensitive search toggle**
- `components/Sidebar.tsx`: "Aa" button inside search box — highlighted blue when active, shifts left when clear button is visible
- `lib/files.ts`: `searchFiles` accepts `matchCase` param — uses `gi` (default) or `g` flags accordingly
- `app/api/search/route.ts`: reads `matchCase` query param and passes to `searchFiles`
- `app/page.tsx`: `matchCase` state wired into search fetch and passed to FileViewer
- `components/FileViewer.tsx`: highlight regex respects `matchCase` prop

---

## 2026-03-26 — Fix: search result clicks now highlight matched text in viewer

**Fixed: search term not highlighted after clicking a result**
- `app/page.tsx`: added `highlightQuery` state — captures search term when clicking a result, cleared when navigating via file links
- `components/FileViewer.tsx`: added `searchQuery` prop + `useEffect` that walks DOM text nodes after render, wraps matches in `<mark>` tags (yellow highlight), and scrolls first match into view
- Added `data-prose-content` attribute to read-only prose container as highlight target

---

## 2026-03-26 — Glossary: 33 missing tooltip terms added

**Added: 33 terms to `content/glossary.json`** — all were used in Q&A files but had no tooltip
- **Account metrics:** ARR, NRR
- **Insurance domain:** STP, NCCI, GWP, PAS, NSF, IASA
- **Guidewire platform:** APD, Jutro, CDA, GW
- **Roles (client-side):** CFO, COO, CTO, CEO, VP, CUO
- **Roles (delivery-side):** BA, PM, QA, PMO, CSM, RTE, SI, SoS
- **Delivery process:** RCA, KT, TCO, WIP, P1, P2
- **Company names:** EY, VM

---

## 2026-03-26 — Q&A enrichment: Q1–Q15 spoken answers tightened + deep details added

**Enriched: Q1–Q15** — `qa/choks/02-questions-q01-q15.md`
- Spoken answers trimmed to ~150-word target with header note added
- "Alternatively" sections converted to `> **Deep detail:**` study blocks throughout
- Q1: Self-sufficiency success moment (Nationwide PolicyCenter endorsement), NRR >110% + client advocacy tier added to deep detail
- Q2: Tiered account management model (>$5M ARR dedicated CP, mid-market pooled, digital-first small), 8→22 clients, 40% escalation reduction moved to deep detail
- Q3: Account-Based Growth Planning as primary methodology; WC BillingCenter $2.4M + iFoundry WC accelerators in deep detail; CompSource data modernization $2M story added
- Q4: 40% strategic time rule and Delivery Lead ownership in spoken answer; COO relationship conversation in deep detail
- Q6: Full suite SteerCo (CIO/CFO/Chief Claims Officer) scope and "first time delivered on time" outcome in deep detail
- Q15: $800M GWP carrier 5-month→3-week rate change (85% improvement) and Product Configuration CoE recommendation in deep detail

**Minor fix:** `research/guidewire-centers-reference.md` — line break formatting in center definitions

---

## 2026-03-26 — Fix: Kafka reference removed from AVP prep

**Fixed: language rule violation** — `qa/AVP-interview-prep.md`
- Q11 integration middleware answer: removed "and Kafka for event-driven data streaming"
- Kafka is not part of Manoj's stated toolkit per language rules; MuleSoft is the integration reference

---

## 2026-03-26 — Q&A deep detail blocks: Q22–Q24

**Enriched: Q22–Q24** — `qa/choks/03-questions-q16-q42.md`
- Q22: Phased alternative deep detail — personal auto (6mo) → homeowners (4mo) → specialty (4mo), net faster than big-bang, GW reference client tactic, CFO capital risk reframe (delivery preference → fiduciary risk)
- Q23: Three-component mentorship model deep detail — shadowing+debrief mechanics (20-min post-call, invisible craft), stretch assignment guardrails, domain investment rationale, $450K junior CSM story with DataHub/Explore expansion context
- Q24: Tiger team deep detail — configurator + UW-domain BA pairing rationale, 23 validation rules rebuilt from full UW manual (not summary doc), joint CUO validation session as trust repair moment, BillingCenter expansion sourced from CUO credibility transfer (no RFP)

---

## 2026-03-26 — Fix: Sources folder missing from sidebar

**Fixed: `sources/` not visible in UI**
- Added `sources` entry to `content/topics.json` (color: sky)
- `EY-SeniorManager-ClientServices-interview-prep.md` now visible in sidebar under Sources

---

## 2026-03-26 — CLAUDE.md and memory sync

**Updated: CLAUDE.md** — brought in line with actual repo state and all standing rules
- Project structure updated to reflect `content/guidewire-pc/` multi-topic layout and `sources/` folder
- Added language rules section: present tense, no Build/Grow/Run, no ACE, MuleSoft-only, no commercial lines
- Added interview prep rules: STAR format, personal lines financial diagnostic, coverage-check-first
- Added CHANGELOG update rule: update with every commit using topic-relative backtick paths
- Fixed Choks system prompt path: `content/guidewire-pc/qa/choks/00-claude-ai-system-prompt.md`

---

## 2026-03-26 — Changelog UI + experience framing fix + EY source file

**Added: Changelog view in the app**
- Changelog button in sidebar footer (clock icon) — opens this file directly in the viewer
- File references in backticks render as clickable links that open the file in the viewer
- API route `/api/changelog` reads this file from the repo root

**Fixed: "17 years in P&C" → "17 years in tech, last 4 in P&C"**
- Files corrected: `qa/choks/01-strategy.md`, `qa/AVP-interview-prep.md`
- Correct framing: 17 years total technology delivery; P&C insurance focus started ~2022
- Prior background: full-stack, financial services (Morgan Stanley, Thomson Reuters), fintech

**Added: EY interview prep source file**
- `sources/EY-SeniorManager-ClientServices-interview-prep.md` — full PDF transcript (Q1–Q24) as markdown
- Available for claude.ai context loading alongside other prep files
- Covers: Leadership, Client Relationship, Domain Knowledge, Delivery, People & Stakeholder, Behavioral/STAR

---

## 2026-03-25 (Session 2) — Q&A enrichment, reference files, intros

**Added: JD-anchored 60-second intro** — `qa/choks/01-strategy.md`
- Second opener version threads every JD requirement: SAFe/Agile/Waterfall, SLA governance, solution architecture, feasibility/estimations, global delivery, hiring/onboarding, POCs
- Original intro renamed "Tech Breadth version" — use when Choks wants the broader picture

**Added: Master introduction** — `qa/choks/01-strategy.md`
- ~280 word study reference — too long to say verbatim, used to know the story cold
- Covers: Guidewire depth, personal lines financial diagnostic, engineering breadth, AI Advisor dual roles, certifications, mentorship

**Rules applied to all intros:**
- Removed ACE certification mention
- Removed Kafka; kept MuleSoft
- Removed commercial lines elaboration
- Added personal lines financial diagnostic detail (states, written vs. earned, return premium, unpaid aging, loss ratios)
- AI Advisor reframed as opener-level only — no deep detail in intro

**Enriched: Q1–Q15** — `qa/choks/02-questions-q01-q15.md`
- Q2: AI/cloud cert track replaces ACE reference
- Q3: Added $2.4M BillingCenter expansion story (WC carrier)
- Q4: ClaimCenter 48-hour incident → COO relationship conversation STAR
- Q5: Domain Depth program — attrition 28%→11%
- Q7: WC carrier Configuration Coaching model → $1.1M BillingCenter add-on
- Q8: Chief Actuary loss ratio → ClaimCenter cross-sell STAR
- Q10: Homeowners carrier free data quality assessment story
- Q11: Five-category health score with STP monitoring example
- Q14: AI-driven claims triage framing as analytics layer (not ClaimCenter replacement)
- Q15: $800M GWP carrier, 5-month → 3-week rate change speed-to-market STAR

**Enriched: Q16–Q42** — `qa/choks/03-questions-q16-q42.md`
- Q17: 'Commitment Register' story — WC PolicyCenter/BillingCenter carrier
- Q18: E-signature scope creep → 3-path resolution → Phase 2 SOW
- Q19: ClaimCenter System Health Report — 18% cycle time jump caught proactively
- Q21: Sales team BillingCenter near-miss — internal alignment model
- Q22 (new): Big-bang vs. phased CIO influence — CFO capital risk reframe → phased approved
- Q23 (new): Three-component mentorship model — junior CSM brings $450K engagement independently
- Q24 (new): Homeowners carrier 12%→0.8% error rate — 23 validation rules rebuilt, CIO becomes reference

**Added: Research files**
- `research/guidewire-centers-reference.md` — PC/BC/CC transaction types, cross-center integration chain, personal lines financial diagnostic table, WC differences
- `research/guidewire-batch-processes.md` — Full batch catalogue (High/Medium/Low impact), cross-center dependency chain, interview application notes

**Updated: claude.ai system prompt** — `qa/choks/00-claude-ai-system-prompt.md`
- Added keyword inference rule: if input is partial phrase or keyword, infer the most likely question and answer it

---

## 2026-03-25 (Session 1) — Multi-topic app + settings modal

**App: Multi-topic extensibility (Option A)**
- `content/topics.json` drives all topic definitions — adding a new topic = one JSON entry + folder, no code changes
- All content moved into `content/guidewire-pc/` subfolder
- `lib/files.ts` rewritten as topic-aware: all file operations scoped to `content/<topicId>/`
- New API routes: `/api/topics`, updated `/api/files`, `/api/file`, `/api/search` — all accept `?topic=` param

**App: Settings modal**
- Gear icon top-right of FileViewer, always visible
- Toggle switches per folder (show/hide in sidebar)
- Persists to `localStorage` under key `prep-hub-settings`
- Tailwind color maps hardcoded in source to prevent purging

---

## 2026-03-24 — Choks interview simulation setup

**Added: claude.ai system prompt** — `qa/choks/00-claude-ai-system-prompt.md`
- Full instructions for running interview simulation in claude.ai Projects
- Rules: answer as Manoj, first person, 150 words max, STAR format, no theory
- Duck Creek: no delivery experience — acknowledge honestly, redirect to Guidewire
- MuleSoft: architectural decision level only (Canal/CompSource story), no internals

**Added: AI Advisor deep dive** — `qa/choks/07-AI-advisor-deep-dive.md`
- Architecture, measurement, risks, integration patterns
- iFoundry bridge — how VM's AI offering maps to EY AI Advisor experience

**Added: Sanjay intel file** — `qa/choks/06-sanjay-intel.md`
- AI Advisor narratives for Sanjay context
- GW upgrade path (GW8→GW9→GW10 Cloud/Dobson) for CompSource
- Insurance lines primer

---

## 2026-03-23 — Choks Q&A expansion (Q32–Q42)

**Added: Q34–Q42** — `qa/choks/03-questions-q16-q42.md`
- Q34: Attrition management STAR
- Q35: Escalation resolution STAR
- Q36: AI/GenAI sell approach
- Q37: AI adoption problems and resolution for carriers (STAR)
- Q38: Easy AI wins by delivery stage
- Q39: TestAI solution offering — problem, solution, how it works, EY's four value drivers
- Q40: Guidewire community involvement
- Q41: EY IPR360 product rationalization — 40% reduction result
- Q42: APD (Advanced Product Designer) deep dive

**Added: Reference files**
- `research/ey-guidewire-marketplace-products.md` — EY Marketplace products on Guidewire
- `research/guidewire-APD-advanced-product-designer.md` — APD deep dive

---

## 2026-03-22 — Choks Q&A core build (Q1–Q33)

**Added: Full 33-question Choks interview prep**
- `qa/choks/02-questions-q01-q15.md` — Q1–Q15: Leadership, Client Relationship, Domain Knowledge
- `qa/choks/03-questions-q16-q42.md` — Q16–Q33: Delivery, escalation, go-live, offshore quality, VM-specific
- Cheat sheet: key numbers to remember (team size, portfolio, Gosu reduction, GenAI gains, etc.)
- Resume bullet defense: 50+ team structure, $8.5M engagement, SAFe RTE role, SmartCOMM, 40% Gosu reduction

**Added: Acronyms glossary** — `qa/choks/05-acronyms.md`
- 115 terms: insurance fundamentals, Guidewire-specific, delivery/consulting, AI/tech

**Updated: Referral framing** — `qa/choks/01-strategy.md`
- Sanjay Venkateshamurthy confirmed as mutual contact; referral line updated with name

---

## 2026-03-21 — AVP interview prep build-out

**Added: Full AVP interview prep** — `qa/AVP-interview-prep.md`
- 23 questions across: GW transformation, delivery leadership, people management, tools/domains, VM-specific, behavioral/STAR
- Clients by LOB reference table (Nationwide, Alfa, CompSource, Canal)
- Key differentiators section

**Added: Supporting prep files**
- `qa/AVP-executive-presence.md` — C-suite communication, executive briefings
- `qa/AVP-practice-building.md` — GW practice growth, IP, recruiting, thought leadership
- `qa/AVP-30-60-90-day-plan.md` — First 90 days framework
- `qa/AVP-account-growth-and-upsell.md` — Account growth methodology, upsell Q&A
- `qa/AVP-commercial-PL.md` — Commercial P&L management, RFP process
- `qa/AVP-industry-trends.md` — GWCP migration wave, GenAI in delivery, competitive landscape

---

## 2026-03-20 — App: glossary tooltips + Next.js UI

**App: Glossary tooltip system**
- `rehype-glossary` plugin highlights terms inline, shows definition on click
- Plugin rewritten as recursive hast walker (fixed traversal mutation crash)
- 115-term glossary seeded

**App: Next.js web UI (initial build)**
- Markdown viewer with sidebar file tree, search, and local editor
- Vercel deployment config

---

## 2026-03-19 — Research and company intel

**Added: ValueMomentum research** — `research/valuemomentum.md`
- Company overview, partnerships, leadership (Choks, Naren, Gopal)
- Delivery differentiators vs. Big 4
- iFoundry accelerator details, six Guidewire specializations including Cloud Platform

**Added: Choks interview intel** — `qa/choks/01-strategy.md`
- Insider traits: reads every resume word, experience verification style, no theory
- How to open (referral mention within 2 minutes)
- What not to do section
