# Content Change History

Living record of what was added or changed, newest first.
File references in `backticks` are clickable links in the app.

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
