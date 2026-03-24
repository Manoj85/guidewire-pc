# Choks Interview — Questions Q16–Q42

**Answer format: STAR (Situation → Task → Action → Result) for all behavioral and situational answers.**

---

## SECTION D: DELIVERY & ESCALATION MANAGEMENT

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

## SECTION E: PEOPLE & STAKEHOLDER MANAGEMENT

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

## SECTION F: BEHAVIORAL / SITUATIONAL (STAR)

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

## SECTION G: VALUEMOMENTUM-SPECIFIC

**Q29. Why ValueMomentum — and why now?**

> "Two parts to that.
>
> **Why VM:** I've competed against ValueMomentum on deals at EY for several years. I've sat on the other side of the table watching your teams win — and I paid attention to why. It wasn't price. It was depth. The domain knowledge VM brings to a carrier engagement is different from what a Big 4 or large SI delivers. At EY, insurance is one vertical among 30. The IP is adapted from generic frameworks, talent rotates across industries, and institutional knowledge about a carrier competes with 29 other sectors for internal investment. At VM, every person in this firm is thinking about P&C problems every day. The accelerators, the carrier relationships, the delivery playbooks — all of it built around one domain over 25 years. I've been genuinely impressed by that. That kind of specialization compounds in ways a generalist firm simply cannot replicate.
>
> **Why now:** The market is at an inflection point. Carriers are accelerating off on-prem Guidewire onto Guidewire Cloud — that's a multi-year wave of new implementations, cloud migrations, and transformation programs. At the same time, AI is moving from POC to production in P&C workflows, and carriers don't have the internal capability to do it themselves. They need a partner who understands both the Guidewire core and the AI layer. That combination — Guidewire depth plus production AI experience — is exactly what I've built over the last few years at EY.
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
> *2. Regulatory and compliance hesitation.* Insurance is regulated at the state level. AI used in pricing, claims decisions, or underwriting triggers DOI scrutiny — bias testing, explainability requirements, adverse action documentation. Carriers' legal and compliance teams kill AI projects that don't address this upfront. My approach: I build explainability into the design from day one — every AI-generated output includes a confidence score and a human review step for any decision that touches coverage, pricing, or settlement.
>
> *3. "AI will take my job" resistance from adjusters and underwriters.* The most underestimated adoption problem. My approach: involve the end users in the design — I run adjuster working sessions to define what "good output" looks like before the model is built. When adjusters co-design the tool, they own it. The 30-day parallel run in the FNOL project was specifically designed for this.
>
> *4. POC-to-production gap.* Most carriers have done an AI POC that never made it to production. My approach: I insist on building POCs inside the actual Guidewire environment from day one — real data, real integration, real ClaimCenter workflow. If the POC can't run in production, it's a demo, not a pilot.
>
> *5. No internal AI ownership.* Carriers don't have data science teams. When the vendor leaves, the AI solution becomes a black box nobody can maintain. My approach: I build a "carrier AI runbook" as part of every engagement — how the model works in plain language, how to monitor output quality, how to retrain on new data, who to call when it breaks.
>
> **Result:** At CompSource, we moved from informal conversation to a funded AI pilot in 90 days — within the existing Managed Services contract, using a change order rather than a new procurement. The VP of Claims had a business case approved by the CIO within 6 weeks of our first conversation because we had answers to every objection before his leadership team raised them.
>
> **For existing vs. new projects:** On an existing Guidewire program, the entry point is always a use case that's already in the delivery scope — claims intake, document generation, Managed Services monitoring. On a new engagement, I'd run AI readiness as part of the discovery phase — assess data, identify the highest-ROI use case, and include an AI workstream in the proposal from the start.

---

**Q38. What are the easy AI wins you'd go after first in a carrier engagement?**

> "The best AI wins use data the carrier already has, don't touch regulatory decision-making, and show ROI in under 60 days. Here's where I'd go first:
>
> **On a Managed Services engagement — easiest entry point:**
>
> *ClaimCenter notes summarization.* Adjusters write long free-text notes in ClaimCenter. A simple LLM summarization layer surfaces the key facts — coverage, liability, reserve rationale — in 3 bullet points. No new data pipeline, no regulatory risk, no integration complexity. A claims handler reviews 10 claims in the time it used to take to review 4. Delivery time: 3–4 weeks.
>
> *Proactive anomaly detection.* On a Managed Services engagement, I already have access to Guidewire application logs. An LLM-assisted pattern detection model flags anomalies — memory spikes, slow query patterns, failed integration calls — 24–48 hours before they become P1 incidents. Shifts the team from reactive to predictive.
>
> **On a transformation or upgrade engagement:**
>
> *Upgrade impact analysis.* When a carrier upgrades Guidewire, the biggest risk is undocumented Gosu customizations that break. I run an LLM-assisted code scan across their Gosu library — the model classifies each customization by upgrade risk (high/medium/low) and flags which ones need re-testing. Cuts QA scoping time by 40–50%.
>
> *Data migration quality.* LLM-assisted data profiling detects anomalies in source data — duplicate records, inconsistent coding, missing mandatory fields — before they land in Guidewire. Saves weeks of post-migration defect fixing.
>
> **On a new implementation:**
>
> *Submission triage for commercial lines.* Underwriters receive submissions as unstructured emails and PDFs. An LLM extraction layer pulls key risk data — coverage requested, property details, loss history — and pre-populates the PolicyCenter application. Underwriter decision time drops significantly.
>
> *Requirements traceability.* I use LLM-assisted mapping between business requirements and Guidewire configuration items. The model flags gaps — requirements with no corresponding configuration — before SIT. Catches scope holes in week 4 instead of week 14.
>
> **The common thread:** all of these use existing data, stay on the right side of DOI explainability requirements, and show measurable ROI within a single sprint cycle."

---

**Q39. Tell me more about TestAI — what is it, what problem does it solve, and what are the benefits?**

*(Use this if you mention TestAI or Quality Engineering during the conversation and Choks asks you to elaborate.)*

> **The Problem:**
>
> In any Guidewire implementation, test case creation is one of the biggest delivery bottlenecks. QA teams spend 30–40% of their time writing test cases manually — reading user stories in JIRA or Azure DevOps, interpreting supporting documents, translating business requirements into test scenarios. This work is repetitive, inconsistent across testers, and prone to coverage gaps. On a Guidewire upgrade, the regression suite alone can run into hundreds of test cases — all manual.
>
> **My Solution — TestAI:**
>
> At EY, I am serving as the AI Advisor for the Quality Engineering practice. In that capacity, I am advising on and shaping TestAI — an end-to-end automated test lifecycle solution leveraging GenAI adoption that the QE practice is building and taking to market.
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
> **The Four Key Benefits:**
>
> - **Faster release:** Compresses the QA cycle significantly. What used to take 2–3 weeks manually runs in hours.
> - **Faster time to market:** When test cycles are shorter, the entire delivery pipeline moves faster — new products, endorsements, and regulatory changes reach production sooner.
> - **Test effectiveness:** AI identifies edge cases and boundary conditions that manual testers routinely miss. In Guidewire specifically, where rating logic, workflow rules, and integration layers interact in complex ways, AI-generated coverage catches defects a hand-crafted suite would never reach.
> - **Reduction in production defects:** Better coverage upstream means fewer defects escaping to production — directly reducing risk for a carrier running live policies, billing cycles, and claims.
>
> **Why it matters for VM's carrier clients:**
>
> Carriers running Guidewire Cloud face mandatory upgrade cycles. Every upgrade needs regression. TestAI turns that from a manual 3–4 week effort into a largely automated cycle — a strong value-add to deploy as an accelerator on VM's delivery programs.

---

**Q40. Are you involved in any Guidewire community or events?**

> "Yes — I am active in the Guidewire ecosystem both through events and through the EY PartnerConnect relationship.
>
> At EY, the Guidewire Connections events are primarily attended at the PPEDS level — Partners, Principals, and Executive Directors. I am supporting that group by contributing materials and content for EY's Guidewire-related sessions and leadership engagements. That keeps me connected to what Guidewire is prioritizing at the partner level — roadmap direction, cloud platform evolution, and ecosystem developments.
>
> In terms of the broader Guidewire event calendar, the ones I track closely:
>
> - **Guidewire Connections** — the flagship annual conference, 3,000+ customers and partners, held every October/November.
> - **Guidewire DEVSummit** — the annual developer conference, primarily in Bengaluru, focused on technical tracks and practitioner learning.
> - **Guidewire Insurance Forum (GIF)** — smaller executive-format gatherings for senior insurance leaders, regional editions.
> - **Guidewire Marketplace Summit** — partner and technology showcase events, expanding globally in 2026.
> - **ACE Certification and Training** — I have been involved in building Guidewire certification programs for my delivery teams.
>
> I also follow the Guidewire Community portal and PartnerConnect announcements — Guidewire made all e-learning free for PartnerConnect partners in October 2025, which directly benefits VM's delivery teams."

---

**Q41. Tell me about EY IPR360 — what is it, what problem does it solve, and what was your role?**

*(Use if you mention EY's Guidewire Marketplace solutions or policy transformation accelerators)*

> **My role:** I am part of the EY team that built and is taking EY IPR360 to market, and I am also serving as an AI advisor on this solution.
>
> **The Problem:**
>
> When a carrier embarks on a policy transformation engagement — moving onto Guidewire PolicyCenter — one of the first and hardest challenges is rationalizing their existing product portfolio. Most carriers have products spread across multiple legacy PAS systems, outdated documentation, regulatory filings that are years old, and a shrinking pool of legacy SMEs who actually understand what the products do. The only option historically was to task legacy SMEs to manually sift through old code and documents — slow, expensive, and error-prone.
>
> **The Solution — EY Insurance Product Rationalizer 360 (EY IPR360):**
>
> EY IPR360 is an award-winning AI-powered solution accelerator that helps carriers rapidly extract, review, and rationalize their insurance product portfolio — directly from policy documentation. Released November 2024 on the Guidewire Marketplace. Deployed on Guidewire Cloud Platform, works with PolicyCenter.
>
> **How it works — three phases:**
>
> *Phase 1 — Extraction:* The AI reads the carrier's policy-related documents — Policy Decks, Renewal Letters, Quote letters, Cancellation notices — and reverse-engineers the product portfolio. For each product it extracts: Product Names, Clause Categories, Clauses, Clause Terms, Forms, and Jurisdictions. The extracted products are transformed into APD-compatible XML templates and mind maps — ready for immediate import into Guidewire APD.
>
> *Phase 2 — Review:* Product managers use the GenAI-powered chatbot to review KPIs, compare features of reverse-engineered products side-by-side, and explore clause details — limits, deductibles, forms, exclusions. This phase pinpoints redundancies and optimization opportunities across the portfolio without any manual analysis.
>
> *Phase 3 — Rationalization:* Using prebuilt rationalization rules and a workbench, product managers run simulations — which products to consolidate, retire, or carry forward. The AI chatbot assists throughout, surfacing insights from the extraction phase to guide decisions.
>
> **Key benefits:**
> - **40% reduction** in overall product rationalization time and effort
> - Generated APD templates are 100% APD-compatible — zero rework on import
> - Efficient use of legacy SME time — AI does the heavy lifting, SMEs validate
> - Cloud Ready, SaaS deployment model

---

**Q42. What is Guidewire APD — and how does it work inside PolicyCenter?**

*(Know this cold — EY IPR360 is built on APD, and it will come up if you mention either)*

> **What APD is:**
>
> APD stands for Advanced Product Designer. It is Guidewire's cloud-native, visual product design tool that sits inside PolicyCenter. APD allows business analysts and product managers to design, simulate, and deploy insurance products — without manually writing product model XML or Gosu code. Before APD existed, all product model configuration required developers to hand-craft XML files and code in Guidewire Studio. APD replaces that with a visual designer that auto-generates the artifacts.
>
> **How it works — three phases:**
>
> *Conceptualize:* The product is designed visually — typically starting from an XMind mind map (a tree diagram: product → line → risk object → coverage → clause term). Guidewire provides 100+ GO Product mind map templates on the Marketplace for standard lines of business. EY IPR360 feeds directly into this phase — it generates the mind maps and APD XML templates from the carrier's existing policy documents.
>
> *Visualize:* The product is simulated inside PolicyCenter before any code is finalized. Stakeholders — underwriters, product managers, business owners — walk through policy transactions and validate coverages and fields. Catches requirement gaps early, before development begins.
>
> *Finalize (Code Generation):* APD auto-generates all PolicyCenter artifacts — product model XML, PCF UI screens, entities, typelists, REST APIs, app events. The generated code is the developer's baseline. Developers then add Gosu code on top for rating logic, workflow rules, and integrations.
>
> **APD in a Guidewire implementation project:**
>
> | Phase | APD's role |
> |---|---|
> | Discovery | Mind maps used as requirements artifacts — structured LOB conversations |
> | Product Design (Sprint 0) | BSAs build and visualize the product; replaces document-heavy requirements |
> | Development sprints | APD-generated baseline eliminates blank-slate build |
> | UAT/SIT | Early stakeholder validation via visualized product |
> | Go-Live | Finalized products deployed through Lifecycle Manager |
>
> **Why APD matters for delivery:**
>
> APD saves 30–40% of product configuration development time. It eliminates transcription errors between requirements documents and code. And because EY IPR360 generates 100% APD-compatible output, carriers using IPR360 enter the APD phase with a reverse-engineered product model already in hand — accelerating the entire PolicyCenter transformation timeline.
