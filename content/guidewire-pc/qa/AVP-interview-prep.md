# Interview Prep: AVP Client Services – ValueMomentum

**Date of HR Call:** March 2026
**Next Step:** Leadership team interview
**Role Focus:** Delivery leadership for Guidewire P&C transformation programs

---

## POSITIONING STATEMENT (Use as opener or when asked "Tell me about yourself")

> "I'm a Senior Manager at EY with 17+ years delivering P&C insurance technology programs — specifically Guidewire transformations across PolicyCenter, BillingCenter, and ClaimCenter for Tier-1 carriers across personal, commercial, and workers compensation lines. I've led cross-functional teams of 50+, managed $10M+ engagement portfolios, and run the full lifecycle from architecture through production release and into Managed Services.
>
> Beyond the P&C core: at EY I carried dual AI Advisor roles — for the Insurance practice, where I architected an AI-powered claims triage solution for Nationwide that reduced manual effort by 30–40%, and for the Quality Engineering practice, where I led the AI strategy behind our TestAI offering. My engineering background spans full-stack development, cloud-native delivery on AWS and Azure, mobile across Android and iOS, generative and agentic AI, and blockchain. I hold certifications in AWS, Azure AI Fundamentals, Google GAIL, and agentic AI — and I stay current: I'm always in a course and I mentor my teams on what I'm learning.
>
> I'm drawn to ValueMomentum because you're a pure-play P&C firm — this is all you do. I want to bring this combination of delivery depth and technology breadth to that level of specialization."

---

## SECTION 1: GUIDEWIRE TRANSFORMATION — DEEP QUESTIONS

### Q1: Walk me through a Guidewire transformation you led end-to-end.

**Strategic approach:** Pick one engagement. Use a narrative arc: situation → your role → team structure → key decisions → outcome. Reference a real client.

**How to answer:**
> "At EY, I led a PolicyCenter and BillingCenter implementation for Nationwide Personal Lines — covering personal auto and personal property. I was the delivery lead overseeing architecture, Dev, QA, and downstream integration teams. We ran SAFe Agile with two-week sprints and a PI planning cadence every 10 weeks.
>
> My key responsibilities were SLA governance, managing the global delivery team split between onshore and offshore, and being the primary escalation point for the carrier's IT and business stakeholders.
>
> The biggest challenge was aligning rating rules migration — the legacy system had undocumented rating logic baked into stored procedures. We stood up a parallel rating comparison engine to validate Guidewire output against legacy, which became a reusable accelerator for future engagements.
>
> We went live on schedule and within budget. Post-go-live, I transitioned the team to application managed services, which extended the engagement by 18 months."

---

### Q2: How do you manage Dev, QA, and downstream teams in a Guidewire implementation?

**Strategic approach:** Show that you understand the interdependencies — Gosu customization, configuration vs. extension, integration layer, and how QA gates work in Guidewire context.

**How to answer:**
> "In a Guidewire implementation, I structure the delivery in three workstreams that run in parallel but gate against each other:
>
> **Dev team** owns Guidewire configuration and Gosu customization — product model changes, workflow rules, screen configuration, PCF work. I keep Dev focused on a 2-sprint lookahead so QA is never blocked.
>
> **QA team** runs two tracks simultaneously: Guidewire functional testing (policy transactions, billing cycles, claim workflows) and integration regression. I require a QA sign-off gate before anything moves to the carrier's UAT environment. We use automated regression with Guidewire's built-in test framework supplemented by Selenium for portal testing.
>
> **Downstream / integration team** owns the API and middleware layer — MuleSoft or direct REST integration with billing processors, payment gateways, document composition (SmartCOMM), and third-party rating services like ISO or Verisk. This team runs against a stub environment in early sprints and moves to live integration in the last third of the release.
>
> I hold a daily standup across all three workstreams, a weekly cross-team dependency review, and a biweekly release readiness review with the carrier's IT lead."

---

### Q3: What is the difference between Guidewire configuration and customization, and how does that affect your delivery strategy?

**How to answer:**
> "Configuration is what Guidewire supports natively through Studio — product model definitions, rules, PCF screens, workflow states, assignment rules. It's upgrade-safe. Customization is Gosu code that extends or overrides Guidewire behavior — adding business logic that the product doesn't support out of the box.
>
> From a delivery standpoint, this distinction drives my risk model. Every Gosu customization is a potential upgrade liability. My strategy is to push hard toward configuration-first: if a requirement can be met through product model or rules configuration, we configure it. We document every customization with a business justification and a technical impact assessment.
>
> This matters especially now because carriers want to move to Guidewire Cloud — and Guidewire's Cloud certification process penalizes heavy customization. I've had clients where we conducted a customization rationalization exercise before cloud migration, and we reduced their Gosu footprint by 40%, which directly cut their upgrade cost."

---

### Q4: How do you handle a Guidewire go-live that's at risk?

**How to answer:**
> "First, I separate 'at risk' into three buckets: scope risk, timeline risk, and quality risk — because the remediation is different for each.
>
> If it's a scope risk — requirements creeping late — I immediately convene a scope triage with the carrier's business owner and prioritize using MoSCoW. We protect the go-live date and move lower-priority items to Phase 2.
>
> If it's a timeline risk — dev velocity lower than planned — I look at the dependency chain. Usually there's a blocker upstream. I reassign senior engineers to the critical path items and if necessary bring in additional capacity from our bench.
>
> If it's a quality risk — defect rate high in SIT or UAT — I stop new feature delivery and redirect the entire team to defect resolution. I institute a daily defect burndown meeting with the carrier's QA lead.
>
> I always give the carrier early, honest visibility. Surprises at go-live are a career-ending failure in this business. I'd rather have a hard conversation in week 8 than a crisis in week 16."

---

## SECTION 2: DELIVERY LEADERSHIP — CORE QUESTIONS

### Q5: What do you do when you receive a proposal request or RFP?

**Strategic approach:** This is a critical question. Show commercial acumen + technical depth + process discipline.

**How to answer:**
> "My RFP process has five phases:
>
> **1. Qualification (Day 1–2):** Before I write a single line, I qualify the opportunity. Is this in our wheelhouse? What's the competitive landscape? Do we have the right bench to staff it? I use a simple 10-point scoring matrix covering fit, win probability, margin potential, and strategic value.
>
> **2. Discovery (Day 2–5):** I read the RFP twice — once for what they're asking, once for what they actually need. I look for pain signals in the language. If they say 'we have struggled with on-time delivery,' that tells me more than the formal requirements. I schedule a discovery call with the carrier's IT lead if allowed, to clarify ambiguities.
>
> **3. Solution Architecture (Day 5–10):** I build the solution narrative — what we'd deliver, in what phases, with what team model. For Guidewire engagements this means: cloud or on-prem, which suites, configuration vs. customization strategy, integration approach, and data migration approach. I define the team structure — who's onshore, who's offshore, what roles.
>
> **4. Estimation (Day 10–14):** I use a bottoms-up estimation model — work breakdown by workstream, phase, and role. I build in a risk buffer (typically 15–20% for complex GW implementations) and validate against benchmarks from prior engagements.
>
> **5. Commercial review and storytelling (Day 14–submission):** I refine the narrative to speak to the carrier's specific pain points. The best proposals read like the vendor already understands their problems. I also make sure our differentiators — client references, accelerators, team certifications — are front and center.
>
> After submission I stay close to the process — follow up, answer questions, and be ready to walk through our solution in an oral presentation."

---

### Q6: How do you manage a global delivery model — onshore/offshore teams?

**How to answer:**
> "I've run 50+ person delivery teams with significant offshore components throughout my EY tenure. A few principles that make it work:
>
> **Clarity of ownership:** Every work item has exactly one accountable person — not a team, one person. I use a RACI for all critical delivery functions and I review it at the start of each program.
>
> **Overlap hours are sacred:** I enforce a 2-hour daily overlap window between onshore and offshore. That window is for decisions, blockers, and cross-team dependencies — not status. Status is async.
>
> **Empower the offshore lead:** The biggest failure mode in global delivery is treating the offshore team as an execution arm with no voice. My offshore delivery lead is in every stakeholder call that matters. They own their workstream outcomes, not just tasks.
>
> **Proactive risk surfacing:** Offshore teams sometimes hesitate to escalate bad news across time zones. I build explicit escalation rituals — a weekly 'red flag' standup where the offshore lead is required to surface any concern, no matter how small.
>
> With this model, I've maintained consistent delivery velocity and quality across programs running from Charlotte to Hyderabad."

---

### Q7: How do you handle a difficult client relationship or executive?

**How to answer:**
> "The best time to handle a difficult client is before they become difficult. I invest heavily in the first 30 days of any engagement — establishing communication cadence, agreeing on escalation paths, and getting alignment on what 'done' means for each milestone.
>
> When a relationship does turn difficult, I first diagnose the root cause. Usually it's one of three things: an unmet expectation, a communication gap, or a political dynamic on the carrier's side that I haven't mapped yet.
>
> My approach is to request a direct 1:1 with the executive, not a team call. I come in with: what I'm hearing their concern is, what my read of the situation is, and a specific path forward. I don't bring a team to a difficult conversation — that tends to make people defensive.
>
> At one client — a workers compensation carrier (CompSource Mutual) — we had a mid-program executive change where the new CIO had different priorities than the original sponsor. Rather than waiting for direction, I proactively scheduled an onboarding session for the new executive, walked them through the program status, and used it as an opportunity to re-baseline scope and timeline. That turned a potential adversary into a champion."

---

### Q8: Tell me about your experience managing SLAs in application managed services.

**How to answer:**
> "Post go-live Managed Services is where delivery leadership is actually harder than implementation, because you're now on the hook 24/7 for a production system that a carrier depends on.
>
> My Managed Services model starts with a well-defined SLA framework at the start — P1/P2/P3/P4 severity tiers, response times, resolution times, and escalation paths. For Guidewire managed services, my typical P1 SLA is 4-hour response, same-business-day resolution for production-impacting defects.
>
> I monitor SLA performance via a weekly scorecard shared with the carrier — green/yellow/red by category. If we go yellow on any SLA, I require a root cause analysis and corrective action within 72 hours. I don't wait for the carrier to ask.
>
> I also run proactive health checks — quarterly Guidewire upgrade assessments, performance benchmarking, and security patching — so we're not just reactive. This turns Managed Services into a value-add relationship rather than a support contract."

---

## SECTION 3: PEOPLE AND TEAM MANAGEMENT

### Q9: How do you build and retain high-performing delivery teams in a competitive market?

**How to answer:**
> "Three things matter most: clarity of purpose, investment in growth, and recognition.
>
> **Clarity:** Every engineer on my team knows what they're working on, why it matters, and how their work connects to the carrier's business outcome. Ambiguity kills motivation.
>
> **Investment:** At EY, I built a Guidewire certification program for my team. I allocated 10% of each engineer's time to skill development — not just certifications but shadowing architecture decisions, participating in client workshops, and leading technical presentations. Engineers who grow stay.
>
> **Recognition:** I'm explicit about recognizing contribution in front of the client. When a developer solves a hard problem, the carrier's CIO hears about it. That creates loyalty that no compensation package can replicate.
>
> On the retention side — I run quarterly stay interviews, not just exit interviews. I ask: what would make you consider leaving? What would make you stay? That gives me 90-day runway to address issues before they become departures."

---

### Q10: How do you manage performance issues on your team?

**How to answer:**
> "I address performance issues early and directly. Most performance problems are preventable if you have regular 1:1s and honest feedback.
>
> My process: first, I distinguish between a skill gap and a will gap. A skill gap is a training and coaching problem — I address it with structured support, pairing with a senior team member, and a 30-60-90 day development plan. A will gap — where the person has the ability but isn't engaged — requires a different conversation. I get direct about impact and expectations, and I give them a chance to turn it around with clear, measurable criteria.
>
> If performance doesn't improve, I document it formally and involve HR per the company's process. I don't let a persistent underperformer drag down a team — that's unfair to the people who are delivering.
>
> The most important thing I've learned: never surprise someone with a performance rating they haven't heard in the year. Feedback should be continuous, not annual."

---

## SECTION 4: TOOLS, TECHNOLOGY, AND DOMAINS

### Q11 (HR Q1): What tools have you used other than Guidewire?

**How to answer:**
> "My tool footprint beyond Guidewire is broad. Let me break it down by category:
>
> **Document Composition:** SmartCOMM — I've integrated it directly into Guidewire ClaimCenter for EOB and correspondence generation. It's the closest analog to Exstream, which is also referenced in your JD. Both platforms handle template management, output channel routing, and carrier-level document governance.
>
> **Integration Middleware:** MuleSoft for API orchestration in Guidewire implementations — policy data syndication, billing feeds, ISO/Verisk rating lookups. Also direct REST/API integration using AWS API Gateway and Kafka for event-driven data streaming.
>
> **Cloud Infrastructure:** AWS (certified Solutions Architect) and Azure. Terraform for IaC, Kubernetes and Docker for container orchestration.
>
> **Data and Analytics:** Snowflake data warehouse, AWS Glue for ETL, dbt for data transformation, building loss ratio and regulatory reporting dashboards.
>
> **DevOps:** Jenkins, GitHub Actions, CI/CD pipelines with automated test gates and canary deployments.
>
> **GenAI:** LangChain, RAG architectures on Azure OpenAI for intelligent document processing in claims intake workflows."

---

### Q12 (HR Q2): What domains have you worked in besides P&C insurance?

**How to answer:**
> "My career started in financial services and capital markets before I moved into P&C insurance. I spent time at Morgan Stanley building distributed trading and compliance platforms — real-time transaction processing systems with sub-50ms latency requirements, strict regulatory oversight, and 24/7 uptime SLAs. Before that, Thomson Reuters on financial data platforms.
>
> The reason this matters for P&C delivery is that financial services gave me a compliance and risk management discipline that most insurance-only practitioners don't have. When I'm designing a Guidewire integration for a carrier that needs to meet state DOI reporting requirements or SOX compliance, I'm drawing on patterns I learned in capital markets.
>
> P&C insurance has been my primary domain since 2021 at EY, and the depth there is where I differentiate. But the regulated-industry background makes me a stronger all-around delivery leader."

---

## SECTION 5: VALUEMOMENTUM-SPECIFIC QUESTIONS

### Q13: Why ValueMomentum over a Big 4 or systems integrator?

**How to answer:**
> "I've spent 8 years at EY, and the breadth of the Big 4 model is valuable — but it comes with overhead. A lot of what I do at EY is compete against firms like ValueMomentum on deals, and I'll be honest: pure-play P&C specialists often win on depth of insurance knowledge and carrier relationships.
>
> ValueMomentum has been doing this for 25 years with 100+ carriers. You're not a generalist firm that also does insurance — this is your entire business. That means deeper accelerators, more reusable IP, stronger carrier references, and a team culture built entirely around insurance outcomes.
>
> At this stage of my career, I want to go deeper, not broader. Leading AVP-level delivery at a firm where every engagement is P&C insurance is where I can have the most impact — and build the most differentiated leadership track."

---

### Q14: How do you see AI and GenAI playing a role in Guidewire transformation programs?

**How to answer:**
> "I've been running GenAI POCs in insurance workflows for the past 18 months at EY, so this is close to my current work.
>
> Three areas where I see immediate value in Guidewire transformation programs:
>
> **1. Claims intake automation:** Using RAG-based document processing to extract FNOL data from unstructured sources — email, PDFs, handwritten forms — and pre-populate ClaimCenter fields. We achieved 50% efficiency improvement on new business intake in one pilot.
>
> **2. Underwriting assistance:** LLM-based summarization of submission documents for commercial lines underwriters, surfacing relevant risk factors and prior loss history. This reduces underwriter decision time without replacing the underwriter.
>
> **3. Managed Services and support:** AI-driven log analysis for Guidewire production environments — pattern detection for performance degradation before it becomes a P1. This shifts Managed Services from reactive to predictive.
>
> The caveat I always give carriers: GenAI is a productivity multiplier, not a transformation strategy. The core system — Guidewire — still needs to be configured, maintained, and upgraded correctly. AI sits on top of a solid foundation, not in place of one."

---

### Q15: What is your approach to the first 90 days in a new delivery leadership role?

**How to answer:**
> "My 90-day framework has three phases:
>
> **Days 1–30 — Listen and map:** I don't come in with a plan. I meet every direct report, every key client contact, and every internal stakeholder. I want to understand the team's strengths and gaps, the state of current engagements, and the political landscape — who are the champions, who are the skeptics. I audit one live delivery in detail.
>
> **Days 31–60 — Diagnose and prioritize:** I synthesize what I've heard into a top-5 priorities list. Some will be quick wins — a communication gap I can close immediately, a process that can be streamlined, a team member who needs a new opportunity. Others are 6-month initiatives.
>
> **Days 61–90 — Execute and communicate:** I share my assessment with leadership — here's what I found, here's what I'm going to do about it, here's how I'll measure success. I want full alignment before I start changing things at scale.
>
> The goal by day 90 is: every team member knows what's expected of them, every client knows I'm engaged, and leadership knows I have a handle on the portfolio."

---

## SECTION 6: SITUATIONAL / BEHAVIORAL QUESTIONS

### Q16: Tell me about a time you had to turn around a failing delivery.

**How to answer (STAR):**
> "**Situation:** At EY, we inherited a PolicyCenter implementation at Alfa Insurance — personal auto and property — that had been running for 14 months with no go-live date in sight. The previous delivery lead had left, the carrier was frustrated, and the team morale was low.
>
> **Task:** I was brought in as the new delivery lead with 6 months to get it to production.
>
> **Action:** First week: I ran a full health assessment — delivery backlog, defect trends, team capacity, integration status, and stakeholder sentiment. The core problem was scope creep without change control — the carrier had added requirements informally, the team was trying to absorb them, and nothing was getting finished.
>
> I implemented three immediate changes: (1) a change control freeze — no new requirements without a formal RFC and impact assessment, (2) a priority reset — we re-scoped to MVP and moved 30% of requirements to Phase 2, and (3) a daily cross-team standup that I personally chaired.
>
> **Result:** We went live 5 months later. Phase 2 was scoped, estimated, and sold as a follow-on engagement, which the client approved. The carrier's CIO sent a formal commendation to EY leadership."

---

### Q17: Describe a situation where you had to manage competing priorities across multiple clients or engagements.

**How to answer:**
> "In my Delivery Manager role at EY I was running three concurrent P&C engagements — Nationwide, Alfa, and a workers comp carrier (CompSource Mutual). All three had deliverables due in the same 3-week window.
>
> My approach: I mapped all critical path items across the three programs on a single portfolio view, identified resource overlaps (two senior architects were shared), and made explicit sequencing decisions. I moved one architect fully to Nationwide for 10 days — their deliverable had a regulatory deadline — and backfilled with a junior architect I up-leveled on the Alfa engagement.
>
> I communicated the tradeoffs to all three clients proactively — not as a problem, but as a managed plan. Clients don't mind being second priority if you tell them in advance and give them a date. What they can't tolerate is silence.
>
> All three delivered on schedule. The up-leveled junior architect became one of my best mid-level leads — that situation accelerated his growth by 6 months."

---

## SECTION 7: QUESTIONS TO ASK THE INTERVIEWER

Use 2–3 of these, tailored to the flow of the conversation:

1. "What does a successful first year look like for an AVP Client Services at ValueMomentum — what would you expect to see in the portfolio, team health, and client satisfaction?"

2. "How does ValueMomentum differentiate its Guidewire delivery model from the larger SIs? What's the secret to your carrier relationships lasting 10–15 years?"

3. "What's the current mix of greenfield implementations vs. upgrades vs. Managed Services in the delivery portfolio, and how is that shifting over the next 2 years?"

4. "How does ValueMomentum approach the move to Guidewire Cloud for existing on-prem customers? What's the biggest challenge you're seeing?"

5. "What does the leadership team here look like, and what's the culture around delivery autonomy versus corporate process?"

---

## SECTION 8: REAL-TIME SCENARIO QUESTIONS

### Q18: "Walk me through a specific technical decision you made on a Guidewire program that had a significant downstream impact."

**How to answer:**
> "On the CompSource Mutual ClaimCenter implementation — workers compensation — we had a key architectural decision early on: whether to implement the payment disbursement integration as a direct database connection to their legacy payment processor or as an API layer through MuleSoft.
>
> The technical team favored direct DB integration — faster to build, no middleware cost. I pushed for MuleSoft. My reasoning: CompSource had two other modernization programs planned. If we built a direct DB connector, every new system would need its own custom connector to the same payment processor. With MuleSoft, the connector is built once and reused.
>
> The initial cost was $180K more and 6 weeks longer. Eighteen months later, when Canal Insurance — another one of my clients — needed the same payment processor integration, we reused the MuleSoft framework. Their integration cost was 60% lower and took 3 weeks instead of 10.
>
> The lesson I took from that: every architectural decision on a delivery program has a compounding effect. The right decision optimizes for the portfolio, not just the current project."

---

### Q19: "Give me a real example of a time your team missed a sprint commitment. What did you do?"

**How to answer (STAR):**
> "**Situation:** On the Alfa Insurance PolicyCenter implementation, Sprint 7 — we committed to completing the endorsement workflow configuration and the billing integration stub. End of sprint, the endorsement workflow was done but the billing stub was only 60% complete.
>
> **Task:** I needed to understand the root cause, re-plan without cascading the delay, and be transparent with the carrier's IT lead.
>
> **Action:** Root cause was clear within 24 hours — a dependency on the carrier's billing team to provide API specs that hadn't arrived. The developer had not escalated when the specs were 3 days late.
>
> I did three things. First, I established an explicit dependency tracking board — every external dependency had a due date, an owner, and an escalation trigger. If a dependency was 24 hours late, it automatically escalated to me. Second, I had a direct conversation with the developer about escalation norms — waiting and hoping is not acceptable, surfacing early is. Third, I called the carrier IT lead the same day the sprint closed, explained what happened and why, and showed him the revised plan — we absorbed the 3-day slip within the next sprint by parallelizing two lower-priority items.
>
> **Result:** We didn't miss the overall milestone. The carrier IT lead told me afterward that the way I handled it — proactively, with a clear fix — was more confidence-building than if we'd hit the sprint perfectly."

---

### Q20: "Describe a real situation where you had to push back on a carrier's requirement. How did you do it without damaging the relationship?"

**How to answer:**
> "On the Nationwide personal auto program, late in the implementation, the business team asked us to add a complex endorsement rating rule that would require significant Gosu customization — about 3 weeks of work — and would have pushed our go-live date by at least 2 weeks.
>
> The business owner framed it as 'critical.' When I dug into why, the actual requirement was a very specific edge case affecting fewer than 2% of their endorsement volume.
>
> I didn't say no. I reframed the conversation. I showed the business owner the data: here's the volume impact, here's the cost in time and Gosu footprint, here's the upgrade risk this creates. Then I offered an alternative: configure a manual override workflow in PolicyCenter that handles the 2% edge case with a human review step — build time 3 days, no Gosu, no go-live impact. Phase 2 can automate it once we're live.
>
> She agreed immediately. The key was having the conversation in person, leading with data, and having a real alternative ready. Pushback without an alternative is just obstruction. Pushback with a better path forward is advisory."

---

### Q21: "Tell me about a time you had to rebuild trust with a client after something went wrong."

**How to answer (STAR):**
> "**Situation:** On the CompSource Mutual ClaimCenter program, we had a production incident 3 weeks post-go-live. A data migration script we had run as part of go-live had a subtle error that caused approximately 400 historical claims records to display incorrect reserve amounts in the ClaimCenter dashboard. The data itself was correct in the source system — it was a display mapping error — but the CFO saw it during a financial review and escalated immediately.
>
> **Task:** Rebuild trust with the CFO and CIO within 48 hours, fix the issue cleanly, and ensure it never happened again.
>
> **Action:** I was on-site within 4 hours of the alert. First action was to establish facts — is this a display error or a data integrity issue? My team confirmed within 2 hours: display mapping only, no impact on actual reserve calculations or financials. I communicated that finding directly to the CFO with a one-page technical explanation he could share with his audit team.
>
> Fix was deployed within 24 hours. Root cause analysis completed and presented to the CIO within 48 hours — here's what happened, here's what we missed in QA, here are the three process changes we're implementing so it can't happen again.
>
> **Result:** The CIO told me the response was exactly what a carrier should expect from a strategic partner. CompSource renewed our Managed Services contract 6 months later and added scope."

---

### Q22: "How do you run a project health assessment when you inherit a troubled program?"

**How to answer:**
> "I've inherited troubled programs twice at EY and the assessment approach is the same both times.
>
> Week 1 — facts only. I review: backlog health (is the velocity sufficient to hit the milestone?), defect trends (are we resolving faster than we're finding?), integration status (what's live, what's stubbed, what's unstarted?), team capacity (who's overloaded, who's underutilized?), and stakeholder sentiment (what are the carrier's IT and business leads actually feeling?).
>
> Week 2 — diagnosis. I separate symptoms from root causes. A high defect rate is a symptom. The root cause might be a testing coverage gap, a requirement ambiguity, or a developer who is out of their depth on a specific module.
>
> Week 2 also — I find a quick win. Something I can fix or improve visibly within the first 10 days. On the Alfa Insurance program I inherited mid-flight, the quick win was canceling a daily status call that everyone hated and replacing it with a 10-minute async update. It sounds small but it immediately signaled to the team that things were going to run differently.
>
> Week 3 — plan and align. I produce a one-page health assessment document for the carrier's leadership: here's where we are, here's what I'm changing, here's my confidence level on the milestone. I present it in person, answer every question, and get explicit alignment before I execute.
>
> The worst thing you can do when inheriting a troubled program is start making changes before you've done the diagnosis. You'll fix the wrong things and damage the team's confidence in the new leadership."

---

### Q23: "Give me an example of a time you used data to change a client's direction."

**How to answer:**
> "On the Canal Insurance commercial lines program, the carrier's CTO wanted to build a custom-coded rating engine outside of Guidewire — he felt Guidewire's native rating was too constrained for their complex commercial property rating model.
>
> My instinct was that this was a mistake — a custom rating engine means two systems to maintain, two sets of tests, and a permanent integration dependency. But instinct is not enough with a technical executive who has strong opinions.
>
> I ran a 2-week analysis. I took their 5 most complex commercial property rating scenarios and configured them in Guidewire's product model, working with a senior Guidewire rating SME on my team. Result: 4 of 5 scenarios were fully configurable in Guidewire without any Gosu. The 5th required 2 Gosu methods — about 40 hours of work.
>
> I presented this with a side-by-side: custom rating engine — estimated 6-month build, permanent maintenance cost, integration test suite required for every Guidewire upgrade. Guidewire native — 6 weeks of configuration, upgrade-safe for 4 of 5 scenarios, 2 Gosu methods documented and contained.
>
> The CTO reversed his position. We built in Guidewire. The rating configuration work became one of the strongest parts of the implementation — and it's one of the accelerators we've reused on subsequent commercial lines programs."

---

## QUICK REFERENCE: CLIENTS BY LINE OF BUSINESS

| Client | Lines | Systems |
|---|---|---|
| Nationwide (Personal Lines) | Personal Auto, Personal Property | PolicyCenter, BillingCenter |
| Alfa Insurance | Personal Auto, Personal Property | PolicyCenter, BillingCenter |
| CompSource Mutual | Workers Compensation | ClaimCenter (WC focus) |
| Canal Insurance | Commercial Auto, Commercial Property | PolicyCenter, ClaimCenter |

---

## KEY DIFFERENTIATORS TO REPEAT THROUGHOUT THE INTERVIEW

1. **Depth in all three Guidewire suites** — PolicyCenter, BillingCenter, ClaimCenter — not just one
2. **Full lifecycle ownership** — architecture through Managed Services, not just implementation
3. **Client-facing delivery leadership** — SLA governance, executive relationships, commercial viability
4. **GenAI in insurance workflows** — active, production-level experience, not just theory
5. **Global delivery model** — offshore/onshore teams at scale
6. **Regulated industry background** — financial services + insurance = compliance depth

---

## TONE AND POSITIONING NOTES

- This is a **delivery leadership** interview, not a technical interview. Lead with outcomes, teams, clients.
- ValueMomentum is a **pure-play P&C firm** — speak their language. Use insurance terminology naturally.
- They are a **mid-size specialist** competing against EY, Accenture, Deloitte. Acknowledge this and position it as a strength, not a gap.
- Salary is $261K–$281K. You are calibrated for this. Don't undersell.
- The hiring manager likely cares most about: **Can this person run client relationships independently? Can they manage delivery at scale? Will carriers trust them?**
