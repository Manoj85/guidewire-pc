# Interview Prep: Choks Kandaswamy — ValueMomentum Delivery Officer

**Role:** AVP, Client Services — ValueMomentum
**Interview Panel:**
- **Choks Kandaswamy** (Delivery Officer) — your primary interviewer
- **Naren Sivakumar** (COO) — CC'd on invite
- **Gopal Bora** (HR Director) — CC'd on invite
- **Suman Beeram** — coordinator

---

## KNOW YOUR INTERVIEWER

**Chokkalingam "Choks" Kandaswamy**
- Title: Delivery Officer, ValueMomentum
- Location: Clarksburg, MD
- Background: Westfield Insurance, CSAA Insurance Group, Liberty, WinWire — deep P&C insurance delivery experience
- **Your mutual contact knows him well — you can drop their name as a referral**

### How Choks Interviews (insider intel)

| Trait | What it means for you |
|---|---|
| **Reads every word of your resume** | Be ready to defend any bullet, any number, any client name |
| **Will only look for your experience — what you have done** | No theory, no frameworks. Real stories with real outcomes |
| **Asks follow-up questions on exactly what you say** | Don't overstate. Every claim invites a deeper question |
| **Head-weighted / detail-oriented** | He will go deep on specifics — dates, team sizes, technical choices |
| **Straightforward guy** | No politics. Direct questions, direct answers. Don't oversell |

**The bottom line:** This is an experience verification interview. Choks will go line by line through your resume and ask "tell me more about this." Every answer will generate a follow-up. Be specific, be honest, be ready to go two levels deep on anything.

---

## OPENING — USE YOUR REFERRAL

Start by mentioning your mutual contact within the first 2 minutes:

> "Before we get started — I believe you know [friend's name]. They mentioned you might be joining this conversation and had nothing but great things to say. Small world in the P&C delivery space."

This immediately:
- Establishes personal connection
- Shows you did your homework
- Creates goodwill before a single question is asked

---

## RESUME BULLET DEFENSE — BE READY FOR THESE

Choks will read your resume and pick specific bullets. Anticipate these:

### "You say you led teams of 50+ — tell me about the structure."

> "The 50+ number reflects the full delivery team across a Nationwide PolicyCenter/BillingCenter program. The structure was three workstreams: Guidewire Dev (configuration and Gosu — 18 people), QA (functional and integration regression — 12 people), and Integration/middleware (MuleSoft, downstream systems — 10 people). Then I had a separate onshore client-facing team of 5 covering business analysis, project management, and stakeholder engagement. Offshore was split between Hyderabad and Pune for Dev and QA. I had direct delivery leads for each workstream reporting to me."

---

### "You mention $10M+ engagement portfolios — what was the largest single engagement by budget?"

> "The largest single engagement at EY was approximately $8.5M — the Nationwide personal lines PolicyCenter and BillingCenter implementation over 18 months. The $10M+ portfolio number reflects the aggregate of concurrent programs I was managing — typically 2–3 simultaneous engagements at different stages."

---

### "Tell me about the GenAI work — what exactly did you build?"

> "At EY I ran a GenAI POC for a commercial P&C carrier focused on claims intake automation. The use case: FNOL documents coming in as PDFs, emails, and scanned forms. We built a RAG pipeline — Azure OpenAI for the LLM, LangChain for orchestration, and a vector store (FAISS) for document retrieval. The output was structured data pre-populated into ClaimCenter fields, with a confidence score. A claims handler reviewed the extraction before submission. In the pilot on 6 months of historical FNOL documents, we measured 50% reduction in manual data entry time. It was a POC — we validated the approach and the business case. Production deployment was the next phase."

---

### "You reference SAFe Agile — what's your actual role in a SAFe program?"

> "On the Nationwide program we ran SAFe with a 10-week PI cadence and 2-week sprints. My role was Release Train Engineer equivalent — I owned the PI planning events, managed the program board, and was the escalation path for impediments across Agile Release Trains. I facilitated the PI planning sessions: 2-day events with all teams aligning on PI objectives, dependency mapping, and risk identification. On a daily basis I participated in the SoS (Scrum of Scrums) with team leads rather than individual team standups."

---

### "You list SmartCOMM — what's the depth of your experience there?"

> "SmartCOMM came into two engagements at EY. On ClaimCenter at CompSource Mutual, we integrated SmartCOMM for EOB and correspondence generation — claim acknowledgment letters, reserve change notifications, payment summaries. The integration was via SmartCOMM's REST API, triggered by ClaimCenter workflow events. My team configured the template mappings, the output channel routing (print, email, portal), and the carrier-specific branding. I'm not a SmartCOMM developer myself — I had a dedicated document composition specialist on the team — but I owned the integration architecture and client delivery of that workstream."

*(This is honest. Choks will appreciate not overstating. He'll follow up if he needs more.)*

---

### "You say you drove 40% reduction in Gosu footprint — how?"

> "This was on a cloud migration assessment for a carrier that had been on Guidewire on-prem for 7 years. Before Guidewire Cloud certification, we ran a customization audit. I had my architecture lead inventory every Gosu class — categorized by: (1) pure configuration that could be migrated to product model, (2) extension points that Guidewire now supports natively in newer versions, and (3) true custom logic that had no standard equivalent. Category 1 and 2 were candidates for elimination. We worked through each one with the carrier's business team to validate whether the original business need still existed. In many cases requirements had changed and the customization was dead code. The 40% reduction was the net result — eliminated 31 Gosu classes, converted 18 more to product model configuration. That directly reduced their cloud certification scope and future upgrade cost."

---

## QUESTIONS CHOKS IS LIKELY TO ASK (by resume section)

### On Delivery Process

**"Walk me through how you run a Guidewire go-live week."**
> "The week before go-live I run a Go/No-Go checklist every morning — open P1/P2 defects, SIT sign-off status, integration smoke test results, data migration validation, production environment readiness, and carrier business readiness (training completion, support runbook reviewed). Any red item is a conversation with the carrier's IT lead that day, not the day before go-live.
>
> Go-live day: I'm on-site or in a war room virtually from the start of the migration window. I run a 30-minute check-in every hour with team leads. The first 4 hours after cutover are the highest-risk window — that's when any data migration issues or integration failures surface.
>
> Post-go-live: I institute a 'hypercare' period — 2 weeks of elevated support with daily defect triage with the carrier. Nothing transitions to standard AMS until the carrier's IT lead formally signs off on hypercare completion."

---

**"How do you manage offshore delivery quality — not just speed?"**
> "Quality comes from three things offshore: clear requirements, adequate peer review, and test coverage.
>
> On requirements — I require a 'definition of done' for every story that includes acceptance criteria written by the business analyst, reviewed by the developer before they start. No ambiguous requirements going offshore.
>
> On peer review — every Gosu commit requires a code review by a senior developer before it merges. I enforce this regardless of time pressure. Technical debt from skipped reviews costs more to fix than the sprint delay.
>
> On test coverage — my QA lead owns a coverage matrix by feature area. We don't declare a feature done until unit test coverage meets our threshold and the QA lead has signed off on functional test execution.
>
> Beyond process: I invest time getting to know my offshore leads personally. Monthly 1:1s. I know their career goals. When they feel invested in the program outcome — not just their tasks — quality follows naturally."

---

**"Tell me about a time a client escalated directly to your leadership over your head. What happened?"**
> "On the Alfa Insurance turnaround, early in my tenure, the carrier's VP of IT called EY's engagement partner directly — before coming to me — to express concern about the program velocity. He had lost confidence in the previous delivery lead and wasn't sure about me yet.
>
> The partner called me. I didn't get defensive. I said: 'Let me schedule a joint call with the three of us today.'
>
> In that call, I walked through my 30-day assessment findings, the specific changes I had made, and the revised milestone plan with confidence levels. I was transparent about where we had risk and what we were doing about it.
>
> The client VP's posture shifted completely in that call. Within 2 weeks he was sending me direct messages on Teams instead of going to the partner. The lesson: when someone escalates over you, the answer is not to fight the escalation — it's to make yourself the best source of truth so they never need to go over your head again."

---

### On Client Management

**"How do you handle a client who keeps adding scope?"**
> "Change control is a culture you build in the first 30 days, not a process you enforce in month 6.
>
> In every engagement kickoff I run a change control orientation with the carrier's IT and business leads. I explain: here's how we handle new requirements, here's the impact assessment process, here's the decision path. I frame it not as bureaucracy but as protection — for them. Uncontrolled scope is the #1 reason Guidewire programs miss their go-live.
>
> When a client pushes an informal requirement anyway — and they always do — I don't say no. I say: 'Let's put it through the RFC process. I'll have an impact assessment back to you in 48 hours.' In my experience, when clients see the cost and timeline impact in writing, 60% of informal requests become Phase 2 items voluntarily."

---

**"What's the most difficult client conversation you've ever had?"**
> "The hardest one was telling a carrier's CIO — on a program I had inherited mid-flight — that the go-live date they had committed to their board was not achievable.
>
> The date was 6 weeks out. After my health assessment, the real readiness date was 14 weeks out. The gap was real.
>
> I requested a 1:1 with the CIO — just the two of us. I came with documentation: backlog velocity, open defect count, integration items still in progress, and a revised plan with a new date I could stand behind.
>
> The conversation was hard. He pushed back. I didn't move off the number, because I had done the analysis. I said: 'I understand what this means for your board commitment. Here's what I'd recommend you tell them, and here's what I'm committing to you in return.'
>
> He told his board. The new date held. He called it one of the most professional conversations he'd had with a delivery partner."

---

### On ValueMomentum Specifically

**"Why do you want to leave EY?"**
> "It's less about leaving EY and more about what I want to do in the next phase. At EY, P&C insurance is one vertical among dozens. At ValueMomentum, it's everything. Every person in this firm is thinking about P&C problems every day. The IP is insurance-specific, the carrier relationships are deeper, and the decisions move faster without matrix org overhead.
>
> I've competed against ValueMomentum on deals at EY. I've seen your delivery quality and your carrier references. I want to build at that level of specialization — and honestly, I think the AVP Client Services role here is the right next step for me more than anything I'd do staying at EY."

---

**"What do you know about how ValueMomentum delivers — what's different from EY?"**
> "From what I've observed competing against VM: you move faster, you have deeper insurance-specific IP through iFoundry, and your carrier relationships tend to be longer and more embedded. The six Guidewire specializations including Cloud Platform tell me the practice is built for where carriers are going.
>
> The difference from my side of the table at EY was that VM's teams always seemed more insurance-native. EY has excellent delivery discipline, but the insurance knowledge is concentrated in a smaller group. At VM, it's company-wide.
>
> I'll be honest — I expect there's a ramp period where I learn VM's specific delivery model, accelerators, and carrier context. I'd want to spend the first 30 days doing exactly that before changing anything."

---

## WHAT NOT TO DO IN THIS INTERVIEW

- **Don't overstay your answers.** Choks will ask follow-ups. Give a complete answer, then stop. Let him direct the depth.
- **Don't embellish numbers.** He will ask the next question that uncovers any exaggeration. Honest + detailed beats impressive + vague.
- **Don't pivot to theory.** If he asks about a real situation, give a real situation. "In general, I would..." is the wrong format for this interview.
- **Don't skip the "what you have done" framing.** Lead every answer with what you personally did — not what the team did, not what the program did. You.

---

## OPENING 60 SECONDS

After the referral mention:

> "I'm a Senior Manager at EY with 17 years in P&C insurance technology — specifically Guidewire transformations across PolicyCenter, BillingCenter, and ClaimCenter. I've led delivery teams of 50+, managed programs from architecture through go-live and into AMS, and worked with carriers across personal lines, commercial lines, and workers compensation.
>
> I've competed against ValueMomentum on deals at EY. I know what you do and how you do it. I'm here because I want to be on this side of the table — at a firm where P&C insurance is the whole business."

---

## CLOSING — QUESTIONS TO ASK CHOKS

Pick 2, based on conversation flow:

1. **"What does a successful first 90 days look like for the AVP Client Services — what would you want to see from me in the delivery portfolio and in client relationships?"**

2. **"How does ValueMomentum's delivery model differ from what I'd be used to at EY — what's the adjustment you see most new leaders need to make?"**

3. **"What's the current mix of the delivery portfolio — greenfield implementations, upgrades, cloud migrations, AMS? And how is that shifting?"**

4. **"You've been in Guidewire delivery for a long time. What's the hardest part of managing carrier relationships at this level that most people underestimate?"**
*(This one shows respect for his experience and invites him to share — good closing move with a detail-oriented interviewer)*

---

## CHEAT SHEET: KEY NUMBERS TO REMEMBER

| Metric | Number |
|---|---|
| Team size | 50+ (Nationwide program) |
| Portfolio size | $10M+ |
| Gosu footprint reduction | 40% |
| GenAI efficiency gain | 50% |
| Alfa turnaround time | 5 months to go-live |
| Scope moved to Phase 2 (Alfa) | 30% of requirements |
| CompSource incident response | on-site in 4 hours, fix in 24 hours |
| Canal MuleSoft cost saving | 60% lower integration cost on reuse |
| Nationwide rating rule edge case | <2% of endorsement volume |

---

## TONE TARGET

Choks is a delivery professional who has seen everything. He respects substance, not salesmanship. Match his energy:
- **Calm, direct, specific**
- No filler, no consulting jargon
- Real stories > best practices
- Confidence without ego
