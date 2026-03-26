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

> **Deep detail — separate ClaimCenter escalation story (payment processor + SME departure):**
> A personal lines carrier was 14 months into a ClaimCenter implementation for auto and homeowners when the CIO escalated to leadership — the system wasn't ready for UAT and go-live was 3 months out. The client was threatening to invoke contract penalties.
>
> Root cause analysis revealed two compounding issues: (1) the integration with the carrier's payment processor had 3x more exception scenarios than scoped — edge cases around partial payments, NSF handling, and multi-party settlements that hadn't surfaced during requirements; (2) a key carrier SME had left mid-project, creating a knowledge vacuum in the claims configuration workstream — their replacement didn't have context on decisions made in months 4–8.
>
> My response: I activated a 2-day war room with the EY delivery lead, integration architect, and the carrier's IT VP. Goal: separate blocker issues from cosmetic items. We triaged 47 open items into 12 genuine blockers and 35 that were polish. I brought in a senior ClaimCenter integration architect for a 6-week intensive — off standard billing rate, absorbed by EY — specifically to attack the payment processor exception scenarios. And I introduced a biweekly Delivery Health Check between EY's delivery director and the carrier's PMO — a governance layer that should have existed from month 1.
>
> UAT started 5 weeks late but the go-live was delayed only 3 weeks versus the original plan. The carrier withdrew the penalty clause. The CIO told EY's CEO: "The way you responded to the crisis was more impressive than anything you did during normal delivery." That sentence is what a recovery looks like.

---

**Q17. How do you work with delivery/project teams to ensure client commitments are met?**

> "Three mechanisms: clear commitments, dependency tracking, and early warning rituals.
>
> Clear commitments: every client-facing commitment — milestones, deliverable dates, SLAs — is mapped to a delivery team owner internally. Not a team, one person. If no one owns it, it doesn't get done. And critically: I involve the delivery lead in any conversation where a milestone or scope is being discussed. No commitments are made on the fly without delivery team input — ever.
>
> Dependency tracking: I maintain an explicit dependency board — internal and external. Any dependency more than 24 hours late automatically surfaces in my standup. External dependencies (carrier inputs, API specs, environment access) are the most common source of slippage.
>
> Early warning: I run a weekly 'red flag' session with delivery leads — not status reporting, specifically surfacing concerns. What are you worried about that you haven't told me yet? That question gets real answers."

> **Deep detail — Commitment Register (WC carrier):**
> On a workers' comp carrier implementing PolicyCenter and BillingCenter simultaneously, I introduced a shared Commitment Register — a live Google Sheet listing every commitment made to the carrier: what was committed, by whom, by when, and current status. The delivery PM updated it weekly. The client-facing team could see it, the delivery team could see it, and I reviewed it before every client call.
>
> The problem it solved: the all-too-common gap where a CSM says "we'll have the billing plan configuration done by Thursday" in a steering committee without telling the Gosu developer that Thursday is now a hard commitment. That gap erodes trust faster than a missed deadline — because the carrier experiences it as a broken promise, not a scheduling conflict.
>
> The Commitment Register also created an audit trail for scope discussions. When a carrier later claimed something was "agreed to months ago," I could reference the register. That documentation discipline prevented two potential scope disputes on that engagement from becoming relationship issues.

---

**Q18. How do you handle scope creep when a client keeps adding requests outside the contract?**

> "Change control is a culture, not a process. I establish it in the first 30 days — at kickoff, I walk the carrier's IT and business leads through what constitutes a change request versus a defect versus in-scope configuration. I frame it as protection for them: uncontrolled scope is the number one reason Guidewire programs miss go-live. When an informal request comes in, my response is never 'no.' It's: 'Let's put it through the RFC process — I'll have an impact assessment back in 48 hours.' When clients see the cost and timeline impact in writing, 60% of informal requests voluntarily move to Phase 2."

> **Deep detail — e-signature scope creep → Phase 2 SOW (STAR):**
> *Situation:* A workers' comp carrier on a PolicyCenter implementation asked mid-project to add e-signature integration for policy issuance — not in scope, raised informally in a steering committee.
> *Task:* Handle it without damaging the relationship, derailing the go-live, or leaving money on the table.
> *Action:* Rather than a hard no, I prepared a 1-page Change Impact Summary and presented three explicit paths:
> - Option 1: Add to current program — $85K, 6 weeks, go-live delayed accordingly
> - Option 2: Defer to Phase 2 post-go-live — no current program impact, we scope and price it separately
> - Option 3: VM provides technical specifications; carrier's internal team builds it
>
> The carrier chose Option 2. Within 30 days of go-live we had a Phase 2 SOW signed.
>
> *Result:* Scope creep became a pipeline event. The 1-page Change Impact Summary format is now my default tool for every out-of-scope request — it moves the conversation from "can we do this?" to "which path do you want?" That shift in framing removes the adversarial dynamic entirely.

---

**Q19. What processes do you put in place to proactively catch issues before clients raise them?**

> "Three signal types: delivery signals, relationship signals, and commercial signals. Delivery: weekly automated report on open critical/high defects, milestone slippage, and integration test failure rates — anything amber I review before the client's weekly call. Relationship: informal 15-minute pulse calls with mid-level stakeholders (not just the sponsor) every other week — they know about brewing frustrations before leadership escalates. Commercial: invoice aging, renewal date proximity, budget cycle timing — a carrier 45 days from budget planning needs a value realization conversation now. If I know the answer to all three before the weekly call, I'm never surprised."

> **Deep detail — post-go-live System Health Report (ClaimCenter):**
> On a personal auto carrier post-ClaimCenter go-live, I implemented a monthly System Health Report — a structured pull of three metrics: adjuster login rates by user role, average claim cycle time by claim type, and straight-through processing (STP) percentage for auto-routed claims.
>
> In month 3, claim cycle time on auto physical damage claims jumped 18% — from an average of 4.2 days to 5.0 days. The carrier hadn't noticed yet; their internal KPI reports ran quarterly. I proactively scheduled a workflow optimization session before their next QBR.
>
> Root cause: a queue routing configuration in ClaimCenter was directing auto physical damage claims to a supervisor review queue when the claim amount exceeded $7,500 — a threshold that had been set conservatively at go-live and was now triggering on 35% of claims. We adjusted the threshold and the routing rule in a single configuration change, no code required.
>
> The carrier's QA lead told me afterward: "We would have raised this in 3 months when it showed up in our reports. You fixed it before we even knew it was a problem." That's the difference between reactive SLA management and proactive health monitoring.

---

## SECTION E: PEOPLE & STAKEHOLDER MANAGEMENT

**Q20. How do you manage relationships with multiple stakeholders on the client side — from C-suite to project managers?**

> "Different cadence, different content, same facts. C-suite (CIO, CFO, Chief Claims Officer): quarterly or monthly SteerCo, focused on business outcomes — on track, on budget, ROI signal. No technical detail unless they ask. IT lead / program director: weekly 1:1, full program status, escalations, dependency gaps, commercial health. This is the most important relationship — if the IT lead trusts me, the CIO trusts me. PMs and BAs: daily or as-needed, decisions and blockers. The risk is C-suite and project team holding different expectations. I catch that weekly by asking the IT lead directly: is there anything leadership has said that I should know about?"

> **Deep detail — Stakeholder Engagement Map + persona-customized content:**
> I maintain a Stakeholder Engagement Map for every strategic account — a living document capturing each stakeholder's role, priorities, communication preferences, and current sentiment. The map gets updated after every meaningful interaction.
>
> On a Guidewire PolicyCenter implementation for a personal lines carrier, I was managing four distinct stakeholder relationships simultaneously:
> - **CIO** — wanted to see loss ratio impact data in QBRs. Not system uptime, not defect counts — loss ratio. How is the new PolicyCenter affecting the carrier's combined ratio? I built a QBR slide specifically showing STP rates and manual intervention reductions, mapped to estimated underwriting efficiency improvement.
> - **VP of IT** — wanted SLA metrics. Response times, defect resolution rates, sprint velocity vs. commitment. Purely operational.
> - **Director of Personal Lines** — wanted to know if agents were happy with the new submission experience. Were they adopting it? Were they calling the helpdesk? I pulled PolicyCenter login frequency and submission completion rates by agent.
> - **Three PMs** — needed daily decisions, blockers cleared, requirements confirmed.
>
> Same facts about program status — different framing for each audience. That customization is what prevents the scenario where the CIO hears something different from the Director of Personal Lines and calls me confused. When every stakeholder is getting the information they care about in the format they consume it, trust is maintained across all levels simultaneously.

---

**Q21. How do you align internal teams (sales, delivery, finance) around a shared client goal?**

> "The failure mode is sales promises one thing, delivery scopes another, finance prices a third — and the carrier experiences the contradiction. My approach: I run an internal Account Operating Rhythm for every strategic account. Monthly internal review: sales, delivery, and finance aligned on the same Account Plan. I share the 18-month growth plan with sales so they're not pitching opportunistically — they're selling into mapped whitespace. I share client priority signals weekly with delivery so the PM knows which workstreams leadership is watching. I flag commercial risks to finance proactively — not at quarter-end. Alignment comes from shared visibility."

> **Deep detail — BillingCenter near-miss (STAR):**
> *Situation:* A workers' comp carrier was mid-implementation on PolicyCenter when the sales team began pursuing an adjacent BillingCenter deal with the same carrier — without telling me. I discovered it when the carrier's VP of IT mentioned it in a call, asking if I knew about the proposal that had been sent. I didn't.
>
> *Task:* Fix the internal alignment failure without letting the carrier feel the dysfunction, and establish a rule that prevents recurrence.
>
> *Action:* I immediately called an internal account alignment session with sales, delivery, and the engagement partner. I formalized a "one team" message to the carrier: any commercial conversation about new scope would come through me. I established an explicit rule: no client-facing conversations on new scope without Client Partner visibility — regardless of how the opportunity was sourced.
>
> For the carrier, I proactively scheduled a call with the VP of IT, acknowledged the proposal, and walked him through how the PolicyCenter and BillingCenter implementations would be sequenced and governed as a unified program — not two separate vendor conversations.
>
> *Result:* The BillingCenter deal closed. More importantly, the carrier told me afterward that the integrated approach gave them more confidence, not less — they saw one team with one plan, not two teams competing for budget. The near-miss reshaped how my team operated internally on all multi-suite accounts.

---

**Q22. Describe a time you had to influence a decision at the client's senior leadership level without formal authority.**

> "Canal Insurance — the custom rating engine decision. The carrier's CTO wanted to build a custom-coded rating engine outside Guidewire because he felt the native rating was too constrained for their complex commercial property model. He had already made up his mind internally before we got involved.
>
> I had no formal authority over his decision. I was the delivery partner, not their internal CTO. But I had something better — data.
>
> I ran a 2-week analysis. Took their 5 most complex rating scenarios, built them in Guidewire's product model with a senior Guidewire rating SME. Result: 4 of 5 scenarios fully configurable natively, 1 requiring 2 Gosu methods. I presented a side-by-side: custom engine vs. Guidewire native — build time, maintenance cost, upgrade impact, long-term TCO.
>
> He reversed his position based on the analysis. The key: I didn't challenge his judgment, I gave him better information. When you show a technical executive that you've done the work, they respect it. Influence without authority is earned through evidence, not argument."

**Or frame it as (personal lines context):**

> *Situation:* A personal lines carrier's CIO had decided to implement Guidewire PolicyCenter as a big-bang replacement — all lines of business simultaneously. The delivery team and I both assessed this as extremely high risk, but I had no authority to override the client's decision.
>
> *Task:* Shift the CIO's position without creating an adversarial dynamic or damaging the relationship.
>
> *Action:* I built the risk case with data — pulled implementation outcome data on big-bang versus phased approaches, showing phased had materially higher on-time delivery rates. I then engaged the CFO, not just the CIO, reframing the conversation around capital risk: a big-bang delay would impact 24 months of IT budget planning. I presented a phased alternative that preserved their timeline goal — personal auto first, homeowners second — net same delivery horizon, dramatically lower risk. I also brought in a Guidewire reference client who had been through the same decision and chosen phased.
>
> *Result:* The CIO agreed to a phased approach after the CFO conversation shifted the framing from delivery preference to financial risk management. The personal auto go-live was delivered on time. The CIO later told me: 'You were right, and I'm glad you pushed.' That earned credibility opened every subsequent strategic conversation.

> **Deep detail — phased alternative (personal lines carrier):**
> The specific phased plan I proposed: **Phase 1** — personal auto, 6 months (highest transaction volume, cleanest data, fastest path to ROI signal for leadership). **Phase 2** — homeowners, 4 months (more complex product model, but team would have go-live muscle memory from Phase 1). **Phase 3** — specialty lines, 4 months (lowest volume, most configuration complexity, safest to tackle last).
>
> Net total horizon: 14 months versus the big-bang estimate of 18 months. The phased plan was actually *faster* on paper because each phase had a defined scope. The CIO had assumed phased meant slower — that reframe was important.
>
> The reference client I brought in had been a CIO at a comparable carrier who had faced the exact same choice, went phased, and hit every milestone. That third-party voice removed the defensive dynamic — it wasn't me arguing against the client's judgment, it was evidence from a peer who had lived it.
>
> The CFO engagement was the real unlock. The CIO's original framing was "delivery approach" — a technical decision in his domain. I reframed it as capital risk: a 24-month big-bang failure scenario would consume two fiscal years of IT budget, create a write-down event, and require an emergency RFP. The CFO heard that differently than the CIO expected. The CFO's voice changed the dynamic from "delivery team preference" to "fiduciary risk management."

---

**Q23. How do you mentor and develop junior client services team members?**

> "Structured exposure plus real accountability.
>
> I don't mentor through advice — I mentor through opportunity. I give junior team members stretch assignments: run the client workshop, own the steering committee deck, lead the retrospective. They might need coaching before and debrief after, but they do it themselves.
>
> Structured piece: I assign every junior team member a development goal for each 6-month period — a domain skill, a platform capability, a leadership experience. We track it in our 1:1s. At EY I ran a structured Guidewire learning program for 12 engineers over 18 months — deep platform training, not just tooling. That built confidence and client credibility for people who were still early in their careers.
>
> I also make feedback frequent and specific. Not 'good job' — 'the way you handled the client's scope question in today's call was exactly right: you acknowledged it, offered the RFC process, and didn't get defensive. That's the move.' Specific feedback compounds faster than general praise."

**Alternatively (three-component model):**

> "My development model has three components: shadowing with debrief, stretch assignments, and domain investment.
>
> Shadowing: junior team members join my client calls for 90 days, and we debrief for 20 minutes after every call — what did I pick up on, what questions did I ask, what was I watching for. That's where the invisible work of client management becomes visible.
>
> Stretch assignments: I give people ownership of a real workstream with coaching guardrails — running a QBR, leading a carrier onboarding, owning a Guidewire module delivery. Not shadow work — real accountability with me available.
>
> Domain investment: everyone on an insurance account completes structured learning on the platform we're delivering. You can't advise a carrier on their PolicyCenter product model if you've never seen one configured.
>
> *Result example:* A junior team member on my team was managing a personal lines carrier's post-go-live account. She was reactive — only responding when clients called. I coached her through her first proactive QBR, helped her build an account health score, and challenged her to identify one expansion opportunity. Six months later, she brought in a $450K optimization engagement independently. That outcome is what I measure my own performance on."

> **Deep detail — three-component model in practice:**
>
> **Shadowing + debrief:** For the first 90 days on a new engagement, junior team members join every client call I lead — not as note-takers, as observers studying the interaction. After every call, 20-minute debrief: what was the client actually telling us between the lines? Why did I ask that question and not a different one? What did I notice about the sponsor's body language when I mentioned the go-live date? That debrief is where the invisible craft of client management becomes learnable.
>
> **Stretch assignments with guardrails:** I give real ownership — leading the QBR deck, running a carrier onboarding workshop, owning a Guidewire configuration workstream end-to-end. Not parallel shadow work — primary accountability. But the guardrails are clear: they have a pre-call with me to prepare, and a debrief after. I'm available on standby during the engagement. They know I won't let them fail in front of a client — but I also won't bail them out unless it's genuinely critical.
>
> **Domain investment:** Everyone on an insurance delivery account completes structured Guidewire platform learning — PolicyCenter product model, ClaimCenter claim lifecycle, or BillingCenter billing plans, depending on what we're delivering. You can't have a credible conversation with a carrier's Chief Underwriting Officer about their PolicyCenter product model if you've never seen one configured. Platform literacy is the floor; the depth comes from client exposure.
>
> **The $450K story:** A junior CSM on my team — 2 years of experience — was managing a personal auto carrier's post-go-live account. Her pattern was reactive: respond to carrier calls, route escalations, report status. I coached her to shift to proactive: build a health score, identify one white-space opportunity, and run a growth-focused QBR. We did dry runs. She brought it. Six months later, she had identified a DataHub/Explore analytics expansion opportunity, built the business case, and closed a $450K engagement with the carrier's VP of Personal Lines — without me in the room. That's the test: when they can close without you, the mentoring worked.

---

## SECTION F: BEHAVIORAL / SITUATIONAL (STAR)

**Q24. Tell me about a time you turned a dissatisfied client into a long-term champion.**

> "CompSource Mutual. The production incident 3 weeks post-go-live — data display error on 400 claims records, CFO escalated to the board.
>
> That was a moment that could have ended the relationship. Instead, by responding in 4 hours, fixing in 24, and providing a complete RCA in 48 — with specific process changes to prevent recurrence — I turned the incident into a demonstration of what a real partner looks like.
>
> The CIO's words afterward: 'Most vendors would have deflected or minimized. You took ownership and fixed it.' He became our strongest reference carrier. Renewed Managed Services, expanded scope, and personally introduced us to two other carriers in his network."

**Or frame it as (homeowners carrier context — STAR):**

> *Situation:* A homeowners insurance carrier was 6 months post-go-live on Guidewire PolicyCenter and had filed a formal complaint with EY's leadership. Their new business issuance process had a 12% error rate — agents were submitting incomplete applications that PolicyCenter was incorrectly accepting, creating significant rework downstream. The account was at churn risk.
>
> *Task:* Restore the relationship, solve the root cause, and prevent losing a $1.8M annual account.
>
> *Action:* I flew on-site within 48 hours and ran a structured listening session — no defensiveness, just diagnosis. I identified that the validation rules in PolicyCenter's personal lines product model were not configured to match the carrier's underwriting guidelines — a configuration gap, not a platform defect. I assembled a tiger team: one PolicyCenter senior configurator and one business analyst with homeowners underwriting experience. We rebuilt 23 validation rules over 3 weeks in UAT, then ran a joint validation session with the carrier's underwriting team before re-deploying. I implemented a monthly System Quality Review post-fix to catch any future drift.
>
> *Result:* Error rate dropped from 12% to 0.8% within 45 days. The carrier's Chief Underwriting Officer — who had been the loudest critic — became a reference client for EY's personal lines practice. They expanded to a Guidewire BillingCenter implementation 8 months later. The relationship recovery became a case study in how to re-earn trust.

> **Deep detail — tiger team and root cause (homeowners carrier):**
> The formal complaint from the carrier cited "platform failure" — they believed PolicyCenter was defective. My on-site listening session in the first 48 hours reframed it: the platform was working exactly as configured. The configuration was wrong.
>
> **Root cause:** PolicyCenter's personal lines product model had been configured with validation rules based on the implementation team's interpretation of the carrier's underwriting guidelines — not the guidelines themselves. The carrier's UW team had provided a summary document during requirements, not the full underwriting manual. Seventeen of the 23 validation rules we eventually rebuilt had been written against incomplete source material.
>
> **Tiger team composition:** One PolicyCenter senior configurator (deep platform delivery experience, had worked on homeowners product models for two prior carriers) + one business analyst with 8 years of homeowners underwriting experience at a carrier (not a tech background — a domain expert who could read the UW manual and translate it into configuration requirements). That pairing was intentional: the configurator knew how to build it, the BA knew what to build.
>
> **Validation process:** After rebuilding all 23 rules in UAT, I ran a joint validation session — PolicyCenter configurator + BA on our side, the carrier's Chief Underwriting Officer + 3 senior underwriters on their side. We walked through every rule line by line. Any ambiguity was decided in the room, documented, and signed off before we promoted to production. That joint session was the trust repair moment — the CUO saw that we were treating their UW guidelines as the source of truth, not interpreting them.
>
> **BillingCenter expansion:** 8 months post-fix, the CUO introduced VM's team to the carrier's CFO. The BillingCenter engagement was sourced directly from that relationship — no RFP, no competitive process. The CUO's credibility transfer unlocked it.

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
> - **Guidewire Education** — I have built structured Guidewire platform learning programs for my delivery teams — 12 engineers, 18 months of deep platform training across PolicyCenter, BillingCenter, and ClaimCenter.
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
