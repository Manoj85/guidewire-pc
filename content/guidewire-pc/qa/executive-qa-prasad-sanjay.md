# Executive Interview Q&A — Synthesized from Prasad & Sanjay Intel
## ValueMomentum AVP Client Services — In-Person Piscataway

**Source intel:** Prasad (executive stakeholder management, candor about challenges, program leadership)  
and Sanjay (AI narrative, realistic sizing, casual-format evaluation, Vishy's directness)

**Key rules from both:**
- Do not sugarcoat — leadership values candid discussion of real challenges and how you navigated them
- Use actual problem statements and specific examples for every question
- Realistic project sizing: $15–25M range; do not exaggerate
- AI narrative: early-stage prototypes and PoCs, predictive metrics only — acknowledge industry is still early
- CompSource is safe to name (Sanjay already disclosed it to VM)
- Frame experience as a cohesive narrative — do not rely on others to connect the dots

---

## Q1 — "Walk me through your largest program. What was your role and what did you actually own?"

**Why they ask (Prasad):** They want to see you own the narrative. They need someone who can anchor a large program without hand-holding — and frame that experience themselves.

**Answer (STAR):**

**Situation:** At Nationwide Personal Lines, we were running a full InsuranceSuite transformation — PolicyCenter and BillingCenter — for personal auto and personal property. The program touched 8 states, multiple distribution channels, and had a live book of business that could not be disrupted.

**Task:** I was Engagement Manager. My job was threefold: hold the client relationship at VP level, keep the delivery engine on track across a blended team of 35+, and own the commercial outcomes — revenue recognition, scope management, change orders.

**Action:** I set up a two-tier governance structure. Operationally, I ran weekly delivery reviews with the client IT Director. Strategically, I met monthly with the VP of IT for Personal Lines — the program sponsor — to align on scope, escalations, and upcoming decisions. When we hit a mid-program scope dispute on rating logic, I brought both sides into a structured working session, documented the decision with business impact, and converted it to a signed change order. That kept the relationship intact and protected margin.

**Result:** Program delivered to scope. The VP relationship was strong enough that we were invited into the managed services conversation before go-live — which extended the engagement beyond the initial implementation contract.

---

## Q2 — "Tell me about a time a delivery was in serious trouble. What did you do?"

**Why they ask (Prasad):** They explicitly want to hear you not sugarcoat. Real navigation of adversity builds more credibility than a clean story.

**Answer (STAR):**

**Situation:** At CompSource Mutual, we were mid-stream on a Guidewire GW8 → GW9 → GW10 Cloud upgrade. Dobson was the target. CompSource is a single-line workers' comp carrier out of Oklahoma — their configuration was deeply specialized, with years of state-specific regulatory customizations accumulated on-prem. About six weeks into the GW9 phase, we uncovered a cluster of customization conflicts that weren't surfaced in the initial assessment.

**Task:** Three problems at once: technical debt we hadn't scoped, a client sponsor (Mike Potter, CIO) who was watching the budget closely, and a delivery team that was starting to question the migration path.

**Action:** I made the call to pause the sprint cycle for five days and run a focused technical discovery. I personally led the session with the client IT Director — Matteo Winfree — and the VM technical lead. We documented every conflict, categorized by severity and effort, and built a revised estimate. I then went to Mike Potter directly. I did not dress it up. I told him we had found scope we missed, here was the impact, here were three options with tradeoffs, and here was my recommendation. I owned the miss.

**Result:** Mike Potter respected the transparency. He chose the staged approach we recommended — absorb the cost in GW9, reduce risk in the GW10 jump. The program stayed on track. More importantly, that conversation built more trust than six months of smooth status updates would have.

---

## Q3 — "How do you manage executive stakeholders? Walk me through your approach."

**Why they ask (Prasad + Sanjay):** This is the most explicitly called-out topic from Prasad's intel. They want to see you operate at CXO level — governance, facilitation, escalation — not just delivery management.

**Answer:**

I manage executive stakeholders at three levels: governance structure, relationship rhythm, and escalation discipline.

**Governance structure:** I establish a formal steering committee with defined membership — client side: CIO, program sponsor, business owner. Firm side: me, the practice lead, and a senior delivery person. This is not optional — it's the mechanism by which decisions get made cleanly and scope conflicts get resolved at the right level rather than at the PM level.

**Relationship rhythm:** Beyond the formal forum, I maintain a direct line to the program sponsor. Monthly 1:1, no slides — just a candid conversation about where we are, what's coming, and what they're hearing from their own organization. The intelligence I get in those conversations shapes how I manage the week.

**Escalation discipline:** I escalate early and with a recommended solution. I never bring a client CXO a problem without a path forward. The moment I sense something is systemic — not a one-week issue — I move it up. The worst thing that can happen is a client CXO hears about a problem from someone other than me.

**Example:** At EY, I managed the interface between EY's PPED leadership and client CXOs across multiple programs. When there were internal EY decisions that impacted client commitments — resourcing shifts, rate changes, team restructures — I owned the client communication. I did not let it come from below me. That is what CXOs expect from an engagement manager at my level.

---

## Q4 — "Tell me about AI in insurance. What have you actually built and what were the results?"

**Why they ask (Sanjay):** Sanjay explicitly warned to keep AI discussion credible — frame as early-stage and PoC, acknowledge industry is still early, use predictive metrics not actual measured outcomes. Vishy is direct and will push on specifics.

**Answer:**

I hold two AI advisor roles at EY, operating across the Insurance and Quality Engineering practices. Let me give you both — they're distinct use cases.

**Insurance — Nationwide Claims Triage:**
At Nationwide Personal Lines, I served as AI Advisor alongside my Engagement Manager role. The use case: an AI-powered claims triage solution integrated with ClaimCenter. Incoming FNOL documents — PDFs, emails, scanned forms — went through an ML pipeline that classified claim type, extracted key data via NLP, predicted claim complexity and routing, and recommended settlement ranges from historical patterns. The output pre-populated ClaimCenter fields with a confidence score. Human-in-the-loop — a claims handler reviewed before submission.

Projected efficiency improvement: 30–40% reduction in manual effort. I want to be precise — this is based on predictive modeling from the pilot phase. The solution was in prototype stage when I transitioned. Full production measurement was still ahead.

My role was solution architecture — which ML models, where to apply NLP, how to integrate without disrupting live ClaimCenter workflows — plus the business case and stakeholder alignment with the carrier's transformation leadership.

**Quality Engineering — TestAI:**
I was solution architect and AI strategy lead for EY QE's TestAI platform. It accepts user stories from an ALM tool and automatically generates test cases, Gherkin files, and step definitions. Playwright executes. The differentiator: human-in-the-loop review where testers can raise bugs directly against the completed user story. Built on OpenAI LLMs with agentic AI architecture.

Projected test case generation speed: 60–70% faster. Again — pilot-stage metrics, predictive. The platform is being positioned for carrier client go-to-market.

**The honest framing:** AI adoption at scale in P&C has not happened yet. I'm not going to tell you we transformed claims operations at Nationwide — we built the foundation for that transformation. What I did was make sure the architecture is sound, the use case is defensible, and the business case is funded. That is the AI advisor role at this stage of industry adoption.

---

## Q5 — "How do you grow an account beyond the initial engagement?"

**Why they ask (Sanjay + Naren's lens):** Naren as COO cares about whether you can grow accounts without burning the team. Wayne Rodrigues (Market Success) will probe revenue and pre-sales partnership.

**Answer (STAR):**

**Situation:** At CompSource Mutual, the initial engagement was a defined Guidewire cloud upgrade — fixed scope, fixed timeline. $6–8M engagement. No explicit expansion mandate.

**Task:** Identify organic opportunities without jeopardizing delivery or appearing opportunistic during execution.

**Action:** I made two moves. First, I listened for pain points the client mentioned in passing — things that weren't on the project scope but were clearly on their mind. The IT Director, Matteo, kept referencing their reporting burden — they were still pulling regulatory reports manually. I filed that away. Second, I made sure the VM team's quality of delivery was visible — not just to the IT Director, but to the CIO level. I crafted a quarterly value summary for Mike Potter that showed delivery metrics, risk resolution, and program health — not a status deck, a business value document.

**Result:** By the time we were in stabilization, I had a scoped conversation with Matteo about a reporting automation opportunity — which VM pursued as a follow-on engagement. The relationship with Mike Potter was strong enough that we were part of their 3-year roadmap conversation before the upgrade was complete.

**General principle:** Account growth comes from delivery trust first, commercial instinct second. If the client trusts you to deliver, they will tell you what they need next. Your job is to listen for it.

---

## Q6 — "What is your leadership philosophy? How do you lead delivery teams under pressure?"

**Why they ask (Naren):** Naren's COO lens is: can this person hold client relationships, keep delivery on track, and grow accounts without burning the team?

**Answer:**

Three principles that govern how I lead, especially under pressure.

**Clarity over comfort.** When a program is under pressure, the instinct is to soften messages to preserve morale. I do the opposite. I give the team a clear picture of where we are, what is at risk, and what we need to do in the next 48 hours. Ambiguity in a crisis costs more than hard truths.

**Protect the team from chaos, not from accountability.** My job is to absorb the organizational noise — executive pressure, scope disputes, client frustration — and give the delivery team a clean runway to execute. They should feel the urgency without feeling the chaos. What they cannot be protected from is accountability for their own commitments.

**Escalate decisions, not problems.** I do not bring my leadership a problem without a recommendation. I bring them a decision with options. That is what senior leaders want, and it trains the people below me to think the same way.

**Example:** At Nationwide, we had a period where the client was pushing for a timeline compression that the team assessed as not achievable safely. I held the line with the client — professionally, with data — and absorbed that conversation myself. The team delivered on the original timeline with quality. That outcome builds more trust than a rushed delivery that fails UAT.

---

## Q7 — "How do you think about building a practice versus delivering on an account?"

**Why they ask (Naren + Sanjay):** The AVP Client Services role requires both. They want to see you think beyond account execution.

**Answer:**

The tension is real — account delivery is urgent and visible; practice building is strategic and invisible in the short term. I manage it by treating them as interdependent, not competing.

**What practice building means to me in this role:** Three things. First, developing the people on accounts so they grow in capability — not just delivering through them. Second, building reusable assets — accelerators, delivery frameworks, proposal content — so each engagement costs less to stand up than the last. Third, identifying patterns across accounts that VM can turn into offerings — if five clients are asking the same question, that is a product, not a project.

**The account is the lab.** Every engagement generates knowledge. My job as a practice leader is to capture that knowledge and make it available to the next team. That is how a consulting firm builds leverage.

**The dependency:** You cannot build a practice without delivering well on accounts. Credibility comes from execution. I have never led a practice-building initiative that wasn't grounded in active client delivery. The two are not separate.

---

## Q8 — "What is your honest gap coming into this role at ValueMomentum?"

**Why they ask (Sanjay):** Sanjay and Prasad both emphasize transparency. Vishy is direct and blunt — he will respect honest self-assessment more than polished deflection.

**Answer:**

Two honest gaps.

**First — VM's internal delivery model.** I know P&C delivery and I know large programs. What I do not know is how VM's internal operations work — the staffing model, the bench structure, the relationship between practice leads and account teams. I will need three to four months to learn that before I can make good internal decisions. What I bring on day one is external credibility with clients and the ability to hold senior relationships. The internal fluency will come through deliberate learning, not assumption.

**Second — VM's specific client portfolio.** I know CompSource through my own engagement. I do not have deep familiarity with your broader carrier book. That means in the first 90 days I am going in as a learner on the portfolio — meeting your client leaders, understanding where accounts are in their lifecycle, identifying where I can add immediate value versus where I need to earn my way in.

What I do not see as a gap: running large programs, managing executive relationships, building teams, and positioning AI-based solutions credibly in the P&C market. That I bring from day one.

---

## QUICK REFERENCE — Metrics and Anchors

| Topic | Number / Anchor |
|---|---|
| Nationwide AI claims triage efficiency | 30–40% effort/cost reduction (predictive, pilot stage) |
| TestAI generation speed improvement | 60–70% faster (predictive, pilot stage) |
| CompSource engagement size | $6–8M |
| Realistic program size range to cite | $15–25M |
| CompSource migration path | GW8 → GW9 → GW10 Cloud (Dobson) |
| Nationwide lines | Personal auto + personal property |
| CompSource line | Workers' compensation (Oklahoma) |
| Leadership team size managed | 35+ blended team (Nationwide) |
| AI certifications | AWS Cloud Practitioner, Azure AI Fundamentals, LLM/Agentic AI |
| GW Upskilling program | Built at EY — 12 engineers, 18 months |

---

## PERSONA QUICK GUIDE

| Interviewer | Their lens | Lead with |
|---|---|---|
| **Naren (COO)** | Delivery quality, client success at scale, no burnout | Q1, Q5, Q6 |
| **Vishy (EVP)** | Direct, blunt — will test executive presence | Q2, Q8 — be direct, own the gaps |
| **Abhijeet (VP)** | Governance, delivery mechanics | Q3, Q6 |
| **Alok Dhagat (VP Delivery)** | Cadence, escalation, team management | Q6, Q2 |
| **AV Nadkarni (VP Client Partner)** | Relationship growth and protection | Q5, Q3 |
| **Wayne Rodrigues (SVP Market)** | Revenue, pre-sales, account growth | Q5, Q7 |
