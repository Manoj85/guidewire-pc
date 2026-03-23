# Interview Prep: Choks Kandaswamy — ValueMomentum Delivery Officer

**Role:** AVP, Client Services — ValueMomentum
**Answer format preference: STAR (Situation → Task → Action → Result) for all behavioral and situational questions.**
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
> Post-go-live: I institute a 'hypercare' period — 2 weeks of elevated support with daily defect triage with the carrier. Nothing transitions to standard Managed Services until the carrier's IT lead formally signs off on hypercare completion."

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

> "I'm a Senior Manager at EY with 17 years in P&C insurance technology — specifically Guidewire transformations across PolicyCenter, BillingCenter, and ClaimCenter. I've led delivery teams of 50+, managed programs from architecture through go-live and into Managed Services, and worked with carriers across personal lines, commercial lines, and workers compensation.
>
> I've competed against ValueMomentum on deals at EY. I know what you do and how you do it. I'm here because I want to be on this side of the table — at a firm where P&C insurance is the whole business."

---

## CLOSING — QUESTIONS TO ASK CHOKS

Pick 2, based on conversation flow:

1. **"What does a successful first 90 days look like for the AVP Client Services — what would you want to see from me in the delivery portfolio and in client relationships?"**

2. **"How does ValueMomentum's delivery model differ from what I'd be used to at EY — what's the adjustment you see most new leaders need to make?"**

3. **"What's the current mix of the delivery portfolio — new implementations, transformation programs, Managed Services? And how is that shifting over the next two years?"**

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

---

## ALL 32 EXPECTED QUESTIONS — ANSWERS

---

### SECTION A: LEADERSHIP & STRATEGIC

**Q1. How do you define success in a client services leadership role?**

> "Three things: delivery outcomes, client health, and team retention. A program that goes live on time but leaves the client relationship damaged is not a success. A client relationship that's warm but the delivery is late is not a success either. And if I'm burning out my team to hit both, that's not sustainable. I measure success by: are my clients renewing and expanding? Are my deliveries on-time and within budget? Are my people growing and staying? If all three are green, I'm doing my job."

---

**Q2. Describe your approach to building and scaling a client services practice.**

> "I've done this at EY within the Guidewire practice. Three steps: first, define the delivery model — what's the team structure for a typical engagement, what's onshore vs. offshore, what are the standard roles. Second, build reusable IP — estimation templates, RACI frameworks, integration patterns, QA checklists that teams can apply without reinventing on every engagement. Third, develop the people — I built a Guidewire certification program at EY that put 12 engineers through ACE certification in 18 months. Once you have a repeatable model and certified practitioners, you can scale without quality degrading."

---

**Q3. How have you contributed to the strategic growth of accounts you've managed? What was your methodology?**

> "My account growth methodology is: deliver first, expand second. I don't go into an account looking for the next sale — I focus entirely on the current deliverable. But I'm always listening for the next problem.
>
> At CompSource Mutual, I was brought in for ClaimCenter. During hypercare I heard the CIO mention that their reporting layer was still running on a legacy system that was 12 years old. That wasn't in scope, wasn't our problem to solve — but I flagged it to the engagement partner. We put together a data modernization proposal that became a $2M follow-on engagement.
>
> The methodology: deliver well, listen actively, bring a solution before they issue an RFP, and use your delivery track record as the proposal. Clients don't want to run a procurement process if they already trust you."

---

**Q4. How do you balance short-term client firefighting with long-term relationship development?**

> "The honest answer is you can't do both at the same time — so you have to create structure that protects the long-term work from the short-term noise.
>
> I time-block my week. The first 30 minutes of every day is for operational triage — what's on fire, what needs my attention today. That's firefighting time. The rest of the day is protected for strategic work: client stakeholder meetings, team development, account planning.
>
> More importantly: I build a delivery team that doesn't need me for day-to-day escalations. If every P2 issue requires me personally, I haven't built the right team. My delivery leads own the operational layer. I own the relationship layer. When those lines blur is when you lose both."

---

**Q5. What's your philosophy on building and retaining high-performing client services teams?**

> "Clarity, growth, and recognition.
>
> Clarity: every person knows what they're accountable for, what good looks like, and how their work connects to the client outcome.
>
> Growth: I allocate real time — not lip service — to development. At EY I protected 10% of team time for skill-building. I also created visibility opportunities for team members — letting them run client workshops, present in steering committees, lead architecture reviews. That grows them faster than any training course.
>
> Recognition: I make it public and specific. When a developer solves a hard problem, the carrier's CIO hears their name. That creates loyalty money can't replicate.
>
> On retention specifically: I run stay interviews quarterly — not exit interviews. I ask directly: what would make you consider leaving? What would make you want to stay three more years? That gives me runway to act before it's too late."

---

### SECTION B: CLIENT RELATIONSHIP & ACCOUNT MANAGEMENT

**Q6. Walk me through how you've managed a large, complex client account. How did you structure the engagement?**

> "Nationwide Personal Lines is the best example. This was an 18-month PolicyCenter and BillingCenter implementation — personal auto and personal property — with a team of 50+ across three workstreams.
>
> I structured the engagement in three layers. Delivery layer: three workstream leads (Dev, QA, Integration) each owning their track with weekly deliverable commitments. Client layer: I owned the relationship with the carrier's IT VP and business sponsor — weekly steering committee, biweekly executive summary, daily availability for any escalation. Commercial layer: I tracked the engagement P&L monthly — utilization, margin, scope change log, contract renewal status.
>
> The key to managing complexity at that scale is not being everywhere — it's building the right structure so that the right people are making the right decisions at the right level. My job was to protect the team from client noise and protect the client from internal delivery issues."

---

**Q7. Tell me about a time a client relationship was at risk. How did you recover it?**

> "CompSource Mutual, 3 weeks post-go-live. A data migration display error caused 400 historical claims to show incorrect reserve amounts in the ClaimCenter dashboard. The CFO escalated to the carrier's board before we even knew about it.
>
> I was on-site within 4 hours. First move: establish facts. Is this a data integrity issue or a display issue? My team confirmed within 2 hours — display mapping only, no financial impact. I went directly to the CFO with a one-page technical summary he could share with his audit team.
>
> Fix deployed in 24 hours. Root cause analysis delivered to the CIO in 48 hours — here's what happened, here's what we missed in QA, here are the three process changes to ensure it never happens again.
>
> The relationship recovered completely. The CIO renewed our Managed Services contract 6 months later and expanded scope. His feedback: the response was exactly what a strategic partner should look like."

---

**Q8. How do you identify upsell and cross-sell opportunities without being perceived as pushy?**

> "The frame I use is: I'm not selling, I'm solving. I never walk into a client conversation looking for the next contract. But I'm always listening for the next problem.
>
> The signal is usually a throwaway comment in a steering committee — 'we've always struggled with our reporting layer' or 'the legacy billing system is a nightmare.' I note it, I don't pursue it in that meeting. I come back in the next 1:1 with the IT lead and say: 'You mentioned your reporting layer a few weeks ago — I've been thinking about that. Would it be helpful if I shared how we've approached that for other carriers?'
>
> That's a very different conversation from a sales pitch. It's advisory. And when clients trust your delivery, they want your advice on what to do next. The ask becomes pull, not push."

---

**Q9. How do you handle a situation where a client's expectations are misaligned with what delivery can realistically offer?**

> "Early and directly. The worst outcome is letting the gap widen silently until go-live week.
>
> On the Alfa Insurance turnaround, when I joined the program mid-flight, the client expected a go-live in 6 weeks. My assessment showed 14 weeks of real work remaining. I didn't soften it. I requested a 1:1 with the CIO, came with the data — backlog velocity, open defects, integration status — and gave him the real number with a plan he could trust.
>
> The key is: never deliver a problem without a path forward. I didn't say 'we can't hit your date.' I said 'here's the date I can commit to, here's what's driving it, here's what I'd recommend you tell your board, and here's what I'm accountable for from here.' He accepted it."

---

**Q10. How do you build trust with a client who has had a bad prior experience with a vendor?**

> "I don't try to convince them I'm different — I show them.
>
> First move: I ask them directly what went wrong with the previous vendor. Not to criticize the competitor, but because I need to know what they're afraid of. The fear usually comes from one of three things: missed commitments, communication gaps, or a feeling of being sold to rather than served.
>
> Then I set up explicit rituals that address exactly those fears. If they were burned by missed commitments, I give them weekly milestone tracking with RAG status and never let a yellow item sit more than 48 hours without a remediation plan. If they were burned by poor communication, I over-communicate for the first 60 days — they should never have to ask me for a status update.
>
> Trust is rebuilt through consistency, not promises. It usually takes about 90 days of steady delivery before a skeptical client starts relaxing."

---

**Q11. What metrics do you use to measure client satisfaction and health?**

> "I track four categories: delivery health, relationship health, commercial health, and team health.
>
> Delivery health: on-time milestone rate, open P1/P2 defect count, SLA attainment in Managed Services, sprint velocity vs. commitment.
>
> Relationship health: NPS or equivalent — I run informal pulse checks with the IT lead and business sponsor quarterly. I also track escalation frequency — if a client is escalating to my leadership, that's a yellow flag.
>
> Commercial health: scope change log, contract renewal status, time-to-invoice, margin vs. plan.
>
> Team health: utilization, attrition rate, certification completion.
>
> I roll this into a single-page account health scorecard I share with my delivery lead and the engagement partner monthly. Green/yellow/red by category. If anything goes yellow, we have a remediation conversation before the client notices."

---

### SECTION C: DOMAIN & INDUSTRY KNOWLEDGE

**Q12. What is your understanding of ValueMomentum's core service offerings and how would you position them to clients?**

> "VM's core is P&C insurance technology services across the full delivery lifecycle — new implementations, transformation programs, and Managed Services — on Guidewire, Duck Creek, EIS, and Majesco. Plus digital and data engineering, and AI/analytics through iFoundry.
>
> What makes VM's position strong is that the same team owns the full lifecycle. A Big 4 firm typically hands off between implementation and Managed Services. VM stays. Your implementation knowledge doesn't walk out the door at go-live.
>
> How I'd position it to a carrier CIO: 'VM is a P&C-first technology partner — 25 years, 75+ carriers. Whether you're standing up a new system, transforming what you have, or running what's live, you get the same insurance-native team with the same carrier context throughout.'
>
> For Guidewire specifically: six active specializations including Cloud Platform — that's the message for carriers moving off on-prem. VM is certified for where the market is going."

---

**Q13. How familiar are you with Guidewire, Duck Creek, or similar insurance platforms? How have they come up in your client conversations?**

> "Guidewire is my primary platform — PolicyCenter, BillingCenter, ClaimCenter — across multiple major carrier implementations. I'm ACE-level familiar with configuration, Gosu customization, integration architecture, and the cloud migration pathway.
>
> Duck Creek comes up primarily in competitive situations. I've had clients ask me to compare Guidewire vs. Duck Creek as part of platform selection. My honest answer to them: Guidewire has a stronger ecosystem, broader partner network, and a more mature cloud offering. Duck Creek is a credible alternative, particularly for mid-market carriers who want faster time-to-value on simpler lines of business.
>
> EIS I know at a conceptual level — component-based architecture, strong for carriers who want microservices-native design. I haven't implemented it directly.
>
> In client conversations the platform discussion usually comes up in two scenarios: greenfield selection and modernization/migration. My approach in both is: let the business requirements drive the platform, not the other way around."

---

**Q14. How do you stay current with trends in insurtech and digital transformation?**

> "Three things: primary sources, peer network, and hands-on work.
>
> Primary sources: I follow Guidewire's product roadmap announcements, Gartner and Celent insurance technology reports, and industry publications like Insurance Journal and Digital Insurance. The Everest Group PEAK Matrix and ISG Provider Lens reports give me a competitive landscape view annually.
>
> Peer network: I stay in contact with CIOs and CTOs from my past carrier clients. Those conversations are more valuable than any analyst report because they tell me what's actually happening in production, not what's trending in a whitepaper.
>
> Hands-on work: The GenAI POCs I've been running at EY are the most current thing I can point to. Real AI implementations in insurance workflows — not sandbox experiments. That practical exposure keeps my thinking grounded in what actually works vs. what sounds good on a slide."

---

**Q15. A client in the P&C insurance space wants to modernize their policy administration system. How would you approach advising them?**

> "My approach has five steps.
>
> First, understand the 'why' — what's driving modernization? Aging platform, cloud cost pressure, speed to market, compliance? The answer shapes everything that follows.
>
> Second, current state assessment — I want to understand their existing system's footprint: lines of business, integration dependencies, data quality, customization level, and team capability. A carrier with 300 integrations and 15-year-old data has a very different migration profile than a startup on a clean slate.
>
> Third, platform selection — if they're open to it, I run a structured evaluation: Guidewire, Duck Creek, or others against their specific requirements. I've run these comparisons before and the criteria always come back to: line of business complexity, cloud readiness, total cost of ownership, and implementation partner ecosystem.
>
> Fourth, phasing strategy — I rarely recommend a big-bang replacement. Personal lines first, then commercial, or personal auto before homeowners. Phase it by risk.
>
> Fifth, change management — the technology is 40% of the problem. The business process redesign, the data migration, the training, and the organizational change management are the other 60%. That's where programs fail.
>
> I'd close by referencing VM's iFoundry accelerators and carrier reference cases — that shifts the conversation from theory to 'here's what we've done for carriers in your exact situation.'"

---

### SECTION D: DELIVERY & ESCALATION MANAGEMENT

**Q16. Describe a major delivery escalation you handled. What was the root cause, and what did you do?**

> "CompSource Mutual, 3 weeks post-go-live — a data migration display error on 400 claims records escalated to the carrier's board. Root cause: a mapping field in the display layer wasn't validated during data migration QA because our test cases covered data integrity but not every display rendering path.
>
> What I did: on-site in 4 hours, root cause confirmed in 2 hours, communicated to CFO with a technical summary in 3 hours, fix in production in 24 hours, full RCA to CIO in 48 hours with three process changes: (1) expand QA test cases to include display validation for all migrated data, (2) add a post-migration smoke test checklist that includes financial display verification, (3) require CIO sign-off on migration validation before declaring go-live complete.
>
> The outcome: relationship was stronger after the escalation than before it. The carrier renewed Managed Services and expanded scope."

---

**Q17. How do you work with delivery/project teams to ensure client commitments are met?**

> "Three mechanisms: clear commitments, dependency tracking, and early warning rituals.
>
> Clear commitments: every client-facing commitment — milestones, deliverable dates, SLAs — is mapped to a delivery team owner internally. Not a team, one person. If no one owns it, it doesn't get done.
>
> Dependency tracking: I maintain an explicit dependency board — internal and external. Any dependency that's more than 24 hours late automatically surfaces in my daily standup. External dependencies (carrier inputs, API specs, environment access) are the most common source of slippage, and I track them as tightly as our own deliverables.
>
> Early warning: I run a weekly 'red flag' session with delivery leads — not status reporting, specifically surfacing concerns. I ask directly: what are you worried about that you haven't told me yet? That question gets real answers that a standard status call doesn't."

---

**Q18. How do you handle scope creep when a client keeps adding requests outside the contract?**

> "Change control is a culture, not a process. I establish it in the first 30 days.
>
> At every engagement kickoff, I run a change control orientation with the carrier's IT and business leads. I frame it as protection for them — not a way to charge more. Uncontrolled scope is why P&C implementations fail.
>
> When an informal request comes in anyway, my response is never 'no.' It's always: 'Let's put it through the RFC process — I'll have an impact assessment back to you in 48 hours.' When clients see the cost and timeline impact in writing, 60% of informal requests voluntarily move to Phase 2.
>
> For the 40% that are genuinely important, we have a formal conversation: here's the impact on current scope, here are the options (fund the additional work, descope something equivalent, defer to Phase 2). That's a real conversation between adults. It's never adversarial when you've set the expectation early."

---

**Q19. What processes do you put in place to proactively catch issues before clients raise them?**

> "Four things:
>
> Weekly account health scorecard — delivery, relationship, commercial, team metrics in a single view. I review it every Monday. If anything is trending yellow, I'm calling the client before they call me.
>
> Dependency watchlist — any external dependency (carrier input, environment, approvals) past due by 24 hours is flagged to me automatically. I've seen more programs slip on external dependencies than internal delivery gaps.
>
> Stakeholder pulse checks — informal 15-minute calls with the carrier IT lead every other week, separate from steering committees. The question I always ask: 'Is there anything you're not fully comfortable with right now that we haven't talked about?' That question opens things that steering committees never surface.
>
> Post-sprint retrospectives with the carrier — not just internal. Every 4 weeks I run a brief retrospective that includes the carrier's QA lead and business analyst. What's working, what's not, what do we adjust. That makes issues visible before they become escalations."

---

### SECTION E: PEOPLE & STAKEHOLDER MANAGEMENT

**Q20. How do you manage relationships with multiple stakeholders on the client side — from C-suite to project managers?**

> "Different cadence and different content for each level.
>
> C-suite (CIO, CFO, business VP): monthly or bimonthly steering committee, executive summary focused on business outcomes — are we on track, what decisions need their input, what's the ROI story. No technical detail unless they ask. They want to know: is this going to work, are we on budget, and is our IT lead happy.
>
> IT lead / program director: weekly 1:1, full program status, escalations, dependency gaps, commercial health. This is the most important relationship to maintain. If the IT lead trusts me, the CIO trusts me.
>
> Project managers and business analysts: daily or as-needed. Decisions, blockers, requirements clarification. I keep this relationship direct and responsive — they should feel that getting an answer from me is fast and unambiguous.
>
> The risk is when C-suite and project team have misaligned expectations. I catch that in the weekly IT lead meeting — I ask explicitly: 'Is there anything the business team has heard from leadership that I should know about?'"

---

**Q21. How do you align internal teams (sales, delivery, finance) around a shared client goal?**

> "The common failure mode is that sales promises one thing, delivery scopes another, and finance prices a third. I've seen that break client relationships before the engagement even starts.
>
> My approach: I require a pre-sales delivery review for any engagement I'm accountable for. Before a proposal goes out, I review it alongside the sales lead — not to slow it down, but to validate that what we're promising is deliverable at the price we're quoting. I add a delivery risk section to every proposal internally: here are my concerns, here's the buffer I need.
>
> During delivery, I run a monthly internal account review — sales, delivery, finance in one room. Commercial health, delivery status, renewal pipeline, any pending change orders. Alignment comes from shared visibility. When everyone is looking at the same scorecard, the conversation is about solutions, not whose fault it is."

---

**Q22. Describe a time you had to influence a decision at the client's senior leadership level without formal authority.**

> "Canal Insurance — the custom rating engine decision. The carrier's CTO wanted to build a custom-coded rating engine outside Guidewire because he felt the native rating was too constrained for their complex commercial property model. He had already made up his mind internally before we got involved.
>
> I had no formal authority over his decision. I was the delivery partner, not their internal CTO. But I had something better — data.
>
> I ran a 2-week analysis. Took their 5 most complex rating scenarios, built them in Guidewire's product model with a senior Guidewire rating SME. Result: 4 of 5 scenarios fully configurable natively, 1 requiring 2 Gosu methods. I presented a side-by-side: custom engine vs. Guidewire native — build time, maintenance cost, upgrade impact, long-term TCO.
>
> He reversed his position based on the analysis. The key: I didn't challenge his judgment, I gave him better information. When you show a technical executive that you've done the work, they respect it. Influence without authority is earned through evidence, not argument."

---

**Q23. How do you mentor and develop junior client services team members?**

> "Structured exposure plus real accountability.
>
> I don't mentor through advice — I mentor through opportunity. I give junior team members stretch assignments: run the client workshop, own the steering committee deck, lead the retrospective. They might need coaching before and debrief after, but they do it themselves.
>
> Structured piece: I assign every junior team member a development goal for each 6-month period — a certification, a skill, a leadership experience. We track it in our 1:1s. At EY I ran a Guidewire certification program that put 12 engineers through ACE certification in 18 months. That was about more than credentials — it built confidence and client credibility for people who were still early in their careers.
>
> I also make feedback frequent and specific. Not 'good job' — 'the way you handled the client's scope question in today's call was exactly right: you acknowledged it, offered the RFC process, and didn't get defensive. That's the move.' Specific feedback compounds faster than general praise."

---

### SECTION F: BEHAVIORAL / SITUATIONAL (STAR)

**Q24. Tell me about a time you turned a dissatisfied client into a long-term champion.**

> "CompSource Mutual. The production incident 3 weeks post-go-live — data display error on 400 claims records, CFO escalated to the board.
>
> That was a moment that could have ended the relationship. Instead, by responding in 4 hours, fixing in 24, and providing a complete RCA in 48 — with specific process changes to prevent recurrence — I turned the incident into a demonstration of what a real partner looks like.
>
> The CIO's words afterward: 'Most vendors would have deflected or minimized. You took ownership and fixed it.' He became our strongest reference carrier. Renewed Managed Services, expanded scope, and personally introduced us to two other carriers in his network."

---

**Q25. Describe a situation where you had to say 'no' to a client. How did you handle it?**

> "Nationwide, late in the PolicyCenter implementation. The business team asked us to add a complex endorsement rating rule — significant Gosu customization, 3 weeks of work, would push go-live 2 weeks.
>
> I dug into the business case. The requirement addressed a very specific edge case affecting less than 2% of their endorsement volume.
>
> I didn't say no. I reframed it: here's the data — volume impact, build cost, Gosu footprint risk, upgrade liability. Then I offered an alternative: a manual override workflow in PolicyCenter that handles the 2% edge case with a human review step — 3 days to build, no Gosu, no go-live impact. Phase 2 automates it once we're live.
>
> She agreed immediately. The lesson: you never say no without a better path forward. Pushback without an alternative is obstruction. Pushback with a solution is advisory."

---

**Q26. Tell me about a time you won new business within an existing account. What was your approach?**

> "CompSource Mutual — started as a ClaimCenter implementation. During hypercare, in a conversation with the CIO, he mentioned off-hand that their reporting layer was 12 years old and they couldn't get timely loss ratio data without running a manual extract overnight.
>
> That wasn't in scope. Not our problem to solve in the current engagement. But I flagged it.
>
> I had my data engineering lead put together a 2-page concept note: here's what a modern data layer on top of Guidewire looks like, here's what two comparable carriers did, here's a rough order of magnitude for the work. We brought it to the CIO in a 30-minute conversation — not a formal proposal, just a concept.
>
> He funded a discovery sprint out of existing budget. That turned into a $2M data modernization engagement.
>
> The approach: listen actively during delivery, identify the next problem before they issue an RFP, and lead with a concept note not a sales deck. Clients buy from delivery partners they already trust."

---

**Q27. Give an example of a time you had competing priorities across multiple clients. How did you manage?**

> "I was running three concurrent P&C engagements — Nationwide, Alfa, and CompSource — all with critical deliverables in the same 3-week window.
>
> I built a single portfolio view: all three critical path items on one board, shared resource dependencies flagged (two senior architects were on multiple programs). I made explicit sequencing decisions — moved one architect fully to Nationwide for 10 days because they had a regulatory deadline — and backfilled with a junior architect I up-leveled on the Alfa engagement.
>
> I communicated the tradeoffs to all three clients proactively — not as a problem, as a managed plan. 'Here's our sequencing for the next 3 weeks, here's your date, here's what I'm protecting.' Clients don't mind being second priority if you tell them in advance with a clear date. What they can't tolerate is silence.
>
> All three delivered on schedule. The junior architect I up-leveled became one of my best mid-level leads — the situation accelerated his growth by 6 months."

---

**Q28. Describe a time you drove a process improvement that positively impacted client experience.**

> "On the Alfa Insurance turnaround — when I inherited the program, the team was spending 3 hours per day in status calls across different stakeholder groups. The carrier was getting fragmented information, the team was exhausted, and no one was actually doing delivery work until after noon.
>
> I restructured the communication model: one 30-minute daily standup with delivery leads only (team-internal), one biweekly written status report to the carrier IT lead (async), and one monthly steering committee with the carrier's VP. Everything else became ad-hoc and request-driven.
>
> The carrier feedback within 30 days: they felt more informed, not less. Because the written status report was concise, consistent, and came with a RAG status they could act on — whereas before they were getting 15 different people saying different things in a daily call.
>
> Delivery velocity increased because the team reclaimed the morning. The client relationship improved because they had a cleaner information channel. One process change, two benefits."

---

### SECTION G: VALUEMOMENTUM-SPECIFIC

**Q29. Why ValueMomentum — and why now?**

> "Two parts to that.
>
> **Why VM:** I've competed against ValueMomentum on deals at EY for several years. I've sat on the other side of the table watching your teams win — and I paid attention to why. It wasn't price. It was depth. The domain knowledge VM brings to a carrier engagement is different from what a Big 4 or large SI delivers. At EY, insurance is one vertical among 30. The IP is adapted from generic frameworks, talent rotates across industries, and institutional knowledge about a carrier competes with 29 other sectors for internal investment. At VM, every person in this firm is thinking about P&C problems every day. The accelerators, the carrier relationships, the delivery playbooks — all of it built around one domain over 25 years. I've been genuinely impressed by that. That kind of specialization compounds in ways a generalist firm simply cannot replicate.
>
> **Why now:** The market is at an inflection point. Carriers are accelerating off on-prem Guidewire onto Guidewire Cloud — that's a multi-year Build and Grow wave. At the same time, AI is moving from POC to production in P&C workflows, and carriers don't have the internal capability to do it themselves. They need a partner who understands both the Guidewire core and the AI layer. That combination — Guidewire depth plus production AI experience — is exactly what I've built over the last few years at EY.
>
> I want to bring that to a firm where P&C is the whole business, not one vertical. This is the right role at the right firm at the right moment in the market."

---

**Q30. How do you see the insurance IT services market evolving, and how would you position ValueMomentum competitively?**

> "Three shifts I'm watching: cloud migration acceleration, AI integration, and consolidation pressure on mid-size carriers.
>
> Cloud migration: carriers are moving off on-prem Guidewire faster than they planned. That's a multi-year revenue stream for firms that are Guidewire Cloud-certified and can manage the migration complexity. VM holds all six Guidewire specializations including Cloud Platform — that's a direct competitive advantage in this wave.
>
> AI: carriers want AI outcomes, not AI experimentation. They don't have the internal AI teams to build it themselves. The firm that can deliver production-grade AI integrated into Guidewire workflows — not a POC, actual production — will win disproportionate share. VM's iFoundry is positioned for this if it moves from accelerator to deployable solution.
>
> Consolidation: as mid-size carriers consolidate or get acquired, their IT programs get re-evaluated. That's both a risk (losing a client) and an opportunity (acquiring's IT team needs a trusted partner to navigate the combined system landscape).
>
> I'd position VM as the partner who's been through each of these transitions with real carriers and can show proof — not case studies, actual carrier names and outcomes."

---

**Q31. What would your 30-60-90 day plan look like in this role?**

> "Days 1–30 — Listen and map. I meet every direct report, every key client contact, and every internal stakeholder. I want to understand: state of each active engagement, team strengths and gaps, client health, and the commercial pipeline. I audit one live delivery in detail. I don't change anything yet.
>
> Days 31–60 — Diagnose and prioritize. I synthesize what I've heard into a top-5 priorities list. Some are quick wins — a communication gap I can close, a process I can tighten. Others are 6-month initiatives. I identify the accounts at risk and the accounts with growth potential.
>
> Days 61–90 — Execute and communicate. I share my assessment with leadership: here's what I found, here's what I'm going to do, here's how I'll measure it. I get explicit alignment before I start changing things at scale. By day 90: every team member knows what's expected, every client knows I'm engaged, and leadership knows I have a handle on the portfolio."

---

**Q32. How would you handle onboarding a new client while managing your existing portfolio?**

> "Two things that make this work: a strong delivery bench and a clear onboarding playbook.
>
> On the delivery side — I shouldn't be the operational bottleneck on existing accounts. If I've built the right team structure, my delivery leads are running the day-to-day on current programs. My role on mature accounts is relationship and commercial oversight, not daily delivery management. That frees me to invest in a new client onboarding.
>
> On the onboarding side — the first 30 days with a new client are the most important. I focus entirely on: understand their business, understand their IT landscape, meet every key stakeholder, and establish the communication and governance model. I don't try to multi-task onboarding with deep operational work on other accounts — those 30 days deserve full attention.
>
> The risk to watch: new client urgency pulling me away from existing client relationships at a critical moment — go-live, renewal, escalation. I manage that by being explicit with the new client about my availability in the first 30 days and setting clear expectations on both sides."

---

**Q33. How did you structure the financials on your engagements?**

> "I managed engagement financials at three levels: contract structure, monthly P&L tracking, and commercial levers.
>
> **Contract structure:** Most of my EY engagements ran on a Time & Materials model with milestone-based billing gates — we billed against delivery milestones (architecture sign-off, SIT completion, UAT sign-off, go-live) rather than purely on hours. This gave the carrier predictability and gave us a clean revenue recognition event. Managed Services engagements were fixed-price monthly retainers with a defined scope of support — SLA tiers, included hours per month, and an overage rate card for anything beyond.
>
> **Monthly P&L tracking:** I ran a monthly financial review on every engagement — planned vs. actual hours by role, utilization rate, margin vs. budget, and WIP (work in progress) balance. I tracked four numbers every month: revenue recognized, cost incurred, margin percentage, and budget remaining. If margin was compressing, I wanted to know in month 2, not month 10.
>
> **Commercial levers I managed:**
> - **Onshore/offshore mix** — the primary margin lever. A typical Guidewire implementation I ran was 30% onshore, 70% offshore. If scope grew without a change order, I'd adjust the mix to protect margin before escalating.
> - **Change order discipline** — every out-of-scope request went through a formal change order with hours, rate, and total cost. I tracked cumulative change order value monthly. On the Nationwide engagement, change orders added ~$1.1M to the original contract over 18 months — all formally approved.
> - **Role mix optimization** — using senior engineers only on architecture and complex Gosu, mid-level on configuration, junior on testing and documentation. Right person, right rate, right task.
>
> **How I reported it internally:** Monthly one-page financial summary to the engagement partner — revenue, cost, margin, forecast to complete, change order log, and any risks to the financial plan. No surprises at quarter-end."

---

**Q34. How have you managed resource attrition on a delivery program?**

> **Situation:** Mid-way through the Nationwide PolicyCenter/BillingCenter implementation — a 50-person program — two of my senior Guidewire developers resigned within the same 4-week window. Both were on the critical path: one owned the product model configuration for personal auto, the other owned the MuleSoft integration layer. Combined, they carried roughly 30% of the remaining delivery risk. Replacing experienced Guidewire resources in the open market takes 6–8 weeks minimum. We didn't have 6–8 weeks.
>
> **Task:** Maintain delivery continuity, protect the go-live milestone, and prevent the carrier from losing confidence — all without telling them we were in a resource crisis before I had a plan to show them.
>
> **Action:** I took four moves in parallel within 48 hours.
>
> First, knowledge transfer blitz — before either developer's last day, I locked them in a structured handoff. Daily 2-hour sessions for their remaining notice period: documented every in-progress item, every undocumented design decision, every known risk in their workstream. I personally sat in on both to ensure nothing was lost in translation.
>
> Second, internal bench activation — I went to EY's resource pool and identified two mid-level Guidewire engineers who were between assignments. Neither was a direct replacement, but both had relevant base knowledge. I paired each one with a senior architect on my team for a 2-week shadowing period before they took full ownership.
>
> Third, scope triage — I reviewed the backlog and pulled forward lower-complexity items that didn't depend on the departing developers. Kept the team's velocity visible and protected sprint commitments during the transition window.
>
> Fourth, proactive client communication — once I had the plan in place (not before), I told the carrier's IT lead directly: two team changes, here's the transition plan, here's my confidence level on the milestone, here are the specific items I'm watching. No surprises, no deflection.
>
> **Result:** We absorbed the attrition with zero impact to the go-live date. One of the two backfill engineers grew significantly through the experience and became a permanent lead on the Managed Services engagement that followed. The carrier never lost confidence — the IT lead later told me the transparency in how I handled it was what kept the relationship strong.

---

**Q35. When there is a delivery escalation, how do you work the resolution?**

> **Situation:** Three weeks after go-live on the CompSource Mutual ClaimCenter implementation, a data migration display error surfaced — 400 historical claims records showing incorrect reserve amounts in the ClaimCenter dashboard. The carrier's CFO saw it during a financial review and escalated directly to the board before our team was even aware. By the time I was notified, the carrier's CIO was fielding board-level questions about data integrity on a system we had just launched.
>
> **Task:** Resolve the technical issue, restore executive confidence, and do it fast enough that the incident didn't define the relationship — all without full clarity yet on the scope or root cause.
>
> **Action:** My escalation resolution follows a fixed sequence: contain, diagnose, communicate, fix, prevent.
>
> *Contain:* I was on-site within 4 hours. First question: is this a data integrity issue or a display issue? Until that's answered, I don't speculate. I assembled the data migration lead and the ClaimCenter architect in a war room.
>
> *Diagnose:* Within 2 hours we confirmed — display mapping error only. The underlying reserve data was correct in the source system and in the Guidewire data model. No financial impact.
>
> *Communicate:* I went directly to the CFO — not through the CIO, directly to the person who escalated to the board. I brought a one-page technical summary: what happened, what it is not (not a data integrity issue), what we are doing, and when it will be fixed. He needed something he could put in front of the board that day. I gave it to him.
>
> *Fix:* Patch deployed to production in 24 hours. Full regression test on all migrated data display fields completed same day.
>
> *Prevent:* Root cause analysis delivered to the CIO in 48 hours — three specific process changes: (1) expand QA test cases to include display layer validation for all migrated data, (2) add financial display verification to the post-migration smoke test checklist, (3) require CIO sign-off on migration validation before go-live is declared complete.
>
> **Result:** The CFO told the board it was resolved before their next meeting. The CIO renewed our Managed Services contract 6 months later and added scope. His words: "Most vendors would have deflected or minimized. You took ownership and fixed it." The incident made the relationship stronger, not weaker.

---

**Q36. Tell me about your AI and GenAI capabilities — and how you would bring that to ValueMomentum's carrier clients.**

> **Situation:** At EY in 2024, one of our P&C carrier clients — a mid-size commercial lines insurer — was processing FNOL claims manually. Adjusters were spending 4–5 hours per claim extracting data from unstructured sources: PDFs, scanned handwritten forms, and email threads. With claim volume growing 18% year-over-year, the carrier's VP of Claims told us: "We either hire 40 more adjusters or we find a smarter way." Their IT team had no AI capability internally.
>
> **Task:** Design and validate an AI-powered claims intake solution that integrated with their existing Guidewire ClaimCenter environment, could be production-ready (not just a POC), and gave the claims team a measurable efficiency gain without removing human judgment from the process.
>
> **Action:** I led the solution design and delivery across three workstreams.
>
> *Architecture:* Built a RAG (Retrieval-Augmented Generation) pipeline — Azure OpenAI as the LLM, LangChain for orchestration, FAISS as the vector store for document retrieval. Input: any FNOL document type (PDF, email, image). Output: structured JSON with extracted claim fields, confidence scores, and flagged ambiguities — fed directly into ClaimCenter via REST API.
>
> *Human-in-the-loop design:* Every extraction included a confidence score. High-confidence fields auto-populated in ClaimCenter. Low-confidence fields were flagged for adjuster review. The adjuster's role shifted from data entry to validation and judgment — which is where their expertise belongs.
>
> *Adoption enablement:* I ran a structured change management program alongside the technical build — adjuster training, a feedback loop so the model improved on carrier-specific document formats, and a 30-day parallel run where AI output was compared against manual processing before the team fully transitioned. This is where most AI projects fail — the technology works but the people don't adopt it.
>
> **Result:** In a 6-month pilot on historical FNOL data, we measured a 50% reduction in manual data entry time per claim. Adjuster satisfaction was high — they described it as "finally doing the actual job instead of typing." The carrier approved production deployment and is now in Phase 2: extending the same RAG architecture to underwriting submission triage.
>
> **How I'd bring this to ValueMomentum carrier clients:**
>
> VM has iFoundry and an AI-first positioning post the September 2025 rebrand. What I'd add is production delivery experience — not whiteboard AI, not vendor demos, but a proven pattern for taking a P&C carrier from zero AI capability to production deployment inside 6 months. The three P&C use cases I'd prioritize immediately: claims intake automation (my proven playbook), underwriting submission triage (active at my current client), and Managed Services predictive alerting (pattern detection on Guidewire production logs before issues become P1s). These are concrete, budgetable, and directly connected to carrier business outcomes — reduced loss adjustment expense, faster submission decisions, and lower Managed Services reactive cost. That's how you sell AI to a P&C carrier: in dollars, not in technology."

---

**Q37. What are the common problems carriers face adopting AI — and how do you help them navigate it, whether on an existing program or a new one?**

> **Situation:** During the Managed Services phase of the CompSource Mutual ClaimCenter engagement, the carrier's VP of Claims approached me informally — he had heard about AI in claims processing from a competitor and wanted to explore it. But when I asked what they'd tried, he said: "We had a vendor demo 6 months ago, our CIO liked it, but nothing ever moved forward." That's a pattern I've seen repeatedly. Carriers are interested in AI, but they get stuck. The technology doesn't fail — the conditions for adoption do.
>
> **Task:** Diagnose why their previous AI exploration stalled, identify a viable entry point within their current program context, and help them build a path from curiosity to production — without requiring a separate multi-million dollar initiative to get started.
>
> **Action:** I walked through the five most common reasons P&C carriers stall on AI adoption and addressed each one:
>
> *1. Data readiness gap.* The #1 silent killer. Carriers assume their data is ready for AI — it usually isn't. Unstructured claims notes, inconsistent coding across legacy and Guidewire, sparse historical data on newer lines. My approach: before any AI work, I run a 2-week data readiness assessment. I define the minimum viable dataset for the target use case and surface gaps early. At CompSource, their FNOL documents were stored in three different formats across two systems. We solved the ingestion problem first — before touching any model.
>
> *2. Regulatory and compliance hesitation.* Insurance is regulated at the state level. AI used in pricing, claims decisions, or underwriting triggers DOI scrutiny — bias testing, explainability requirements, adverse action documentation. Carriers' legal and compliance teams kill AI projects that don't address this upfront. My approach: I build explainability into the design from day one — every AI-generated output includes a confidence score and a human review step for any decision that touches coverage, pricing, or settlement. This is not optional. It's what makes the model auditable.
>
> *3. "AI will take my job" resistance from adjusters and underwriters.* This is the most underestimated adoption problem. The people whose workflow changes are also the people who validate the AI output. If they don't trust it, they override everything, and the ROI disappears. My approach: involve the end users in the design — I run adjuster working sessions to define what "good output" looks like before the model is built. When adjusters co-design the tool, they own it. The 30-day parallel run in the FNOL project was specifically designed for this — adjusters saw their manual work confirmed by the AI output, which built trust before we removed the manual step.
>
> *4. POC-to-production gap.* Most carriers have done an AI POC that never made it to production. They're skeptical. The reason POCs die: they're built outside the production environment, with clean sample data, and with no integration to the actual system of record. My approach: I insist on building POCs inside the actual Guidewire environment from day one — real data, real integration, real ClaimCenter workflow. If the POC can't run in production, it's a demo, not a pilot.
>
> *5. No internal AI ownership.* Carriers don't have data science teams. When the vendor leaves, the AI solution becomes a black box nobody can maintain. My approach: I build a "carrier AI runbook" as part of every engagement — how the model works in plain language, how to monitor output quality, how to retrain on new data, who to call when it breaks. The goal is to leave the carrier capable of owning it, not dependent on us forever.
>
> **Result:** At CompSource, we moved from informal conversation to a funded AI pilot in 90 days — within the existing Managed Services contract, using a change order rather than a new procurement. The VP of Claims had a business case approved by the CIO within 6 weeks of our first conversation because we had answers to every objection before his leadership team raised them.
>
> **For existing vs. new projects:** On an existing Guidewire program, the entry point is always a use case that's already in the delivery scope — claims intake, document generation, Managed Services monitoring. No new budget conversation needed. On a new engagement, I'd run AI readiness as part of the discovery phase — assess data, identify the highest-ROI use case, and include an AI workstream in the proposal from the start. The worst time to introduce AI is as an afterthought after the core system is live.

---

**Q38. What are the easy AI wins you'd go after first in a carrier engagement?**

> "The best AI wins use data the carrier already has, don't touch regulatory decision-making, and show ROI in under 60 days. Here's where I'd go first:
>
> **On a Managed Services engagement — easiest entry point:**
>
> *ClaimCenter notes summarization.* Adjusters write long free-text notes in ClaimCenter. A simple LLM summarization layer surfaces the key facts — coverage, liability, reserve rationale — in 3 bullet points. No new data pipeline, no regulatory risk, no integration complexity. A claims handler reviews 10 claims in the time it used to take to review 4. Delivery time: 3–4 weeks. This is the lowest-friction AI win I know of in P&C.
>
> *Proactive anomaly detection.* On a Managed Services engagement, I already have access to Guidewire application logs. An LLM-assisted pattern detection model flags anomalies — memory spikes, slow query patterns, failed integration calls — 24–48 hours before they become P1 incidents. Shifts the team from reactive to predictive. No carrier data governance issue because it's log data, not policyholder data.
>
> **On a transformation or upgrade engagement:**
>
> *Upgrade impact analysis.* When a carrier upgrades Guidewire, the biggest risk is undocumented Gosu customizations that break. I run an LLM-assisted code scan across their Gosu library — the model classifies each customization by upgrade risk (high/medium/low) and flags which ones need re-testing. Cuts QA scoping time by 40–50%. The carrier sees value in the discovery phase before the upgrade even starts.
>
> *Data migration quality.* Carriers migrate years of policy and claims data during modernization. LLM-assisted data profiling detects anomalies in source data — duplicate records, inconsistent coding, missing mandatory fields — before they land in Guidewire. Saves weeks of post-migration defect fixing.
>
> **On a new implementation:**
>
> *Submission triage for commercial lines.* Underwriters receive submissions as unstructured emails and PDFs. An LLM extraction layer pulls key risk data — coverage requested, property details, loss history — and pre-populates the PolicyCenter application. Underwriter decision time drops significantly. No regulatory issue because the underwriter still makes the decision — AI removes the data entry step, not the judgment.
>
> *Requirements traceability.* I use LLM-assisted mapping between business requirements and Guidewire configuration items. The model flags gaps — requirements with no corresponding configuration — before SIT. Catches scope holes in week 4 instead of week 14.
>
> **The common thread:** all of these use existing data, stay on the right side of DOI explainability requirements, and show measurable ROI within a single sprint cycle. That's how you build carrier confidence for the larger AI investments that follow."

---

**Q39. Tell me more about TestAI — what is it, what problem does it solve, and what are the benefits?**

*(Use this if you mention TestAI or Quality Engineering during the conversation and Choks asks you to elaborate.)*

> **The Problem:**
>
> In any Guidewire implementation, test case creation is one of the biggest delivery bottlenecks. QA teams spend 30–40% of their time writing test cases manually — reading user stories in JIRA or Azure DevOps, interpreting supporting documents, translating business requirements into test scenarios. This work is repetitive, inconsistent across testers, and prone to coverage gaps. On a Guidewire upgrade, the regression suite alone can run into hundreds of test cases — all manual. That's slow, expensive, and error-prone.
>
> **My Solution — TestAI:**
>
> I did consulting work in Quality Engineering where we built TestAI — an end-to-end automated test lifecycle solution leveraging GenAI adoption.
>
> **How it works:**
>
> *Input:* TestAI connects to the carrier's existing Application Lifecycle Management tools — JIRA and Azure DevOps — and ingests the user stories, acceptance criteria, and supporting documents (BRDs, functional specs, process flows).
>
> *AI layer:* A GenAI model reads the requirements and generates an optimal set of test cases — not just happy path, but edge cases, negative scenarios, and boundary conditions that manual testers routinely miss. The model is trained to understand Guidewire-specific workflows — policy transactions, billing cycles, claim adjudication — so the test cases are insurance-domain-aware, not generic.
>
> *Execution:* The generated test cases are converted into automated test scripts and executed using Playwright — a modern, cross-browser automation framework that handles Guidewire's PCF-based UI and portal interfaces reliably.
>
> *Output:* Test results are generated through ExtentReports — structured, visual HTML reports with pass/fail breakdowns, screenshots on failure, and traceability back to the original requirement in JIRA or Azure DevOps.
>
> **The Benefits:**
>
> - **Speed:** Test case generation time drops by 60–70%. What used to take a QA analyst 2 weeks to write manually is generated in hours.
> - **Coverage:** The AI finds edge cases humans miss — particularly important in Guidewire where rating logic, workflow rules, and integration scenarios interact in complex ways.
> - **Consistency:** Every tester gets the same quality output. No dependency on the most experienced QA person to write the best test cases.
> - **Traceability:** Every test case links back to a requirement. When a defect is raised, you know exactly which story it came from and whether it was tested.
> - **Regression acceleration:** On Guidewire upgrades, where regression suites are large and upgrade timelines are tight, TestAI regenerates and re-executes the full regression suite automatically — cutting regression cycle time significantly.
>
> **Why it matters for VM's carrier clients:**
>
> Carriers running Guidewire Cloud face mandatory upgrade cycles. Every upgrade needs regression. TestAI turns that from a manual 3–4 week effort into a largely automated cycle. For a carrier on a Managed Services engagement, that's a direct reduction in support cost and a faster path to upgrade completion. It's a strong value-add that I'd look to deploy as an accelerator on VM's delivery programs.
