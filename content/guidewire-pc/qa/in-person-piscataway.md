# In-Person Leadership Interview — Piscataway, NJ
## ValueMomentum AVP Client Services

**Purpose:** Prepare for in-person panel with AVP, VP, and SVP-level leaders at Piscataway HQ.
**This is not a technical interview.** This is a leadership, cultural fit, and executive judgment round.

---

## WHAT THIS ROUND IS ACTUALLY EVALUATING

They passed you through Choks because you have the delivery credentials. This round is about five things:

1. **Executive presence** — Do you carry yourself as a peer to their leadership team?
2. **Cultural fit** — Are you a fit for VM's culture (specialist, insurance-first, client-on-site, lean delivery)?
3. **Leadership philosophy** — How do you lead teams, manage clients, and handle adversity?
4. **Strategic thinking** — Can you think about the practice, the portfolio, and the market — not just a single program?
5. **Self-awareness** — Do you know your gaps and handle them with honesty?

---

## WHO YOU ARE LIKELY TO MEET (Piscataway-based leaders)

| Name | Title | What they care about |
|---|---|---|
| **Alok Dhagat** | VP, Delivery | How you run delivery — cadence, escalation, team management |
| **Avdhut "AV" Nadkarni** | VP, Client Partner, Insurance | How you grow and protect client relationships |
| **Swarup Ghosh** | COO | Operational discipline, portfolio health, VM-wide impact |
| **Wayne Rodrigues** | SVP, Market Success – NA | Revenue, account growth, pre-sales partnership |
| **Raghu Aithal** | SVP, Head of P&C Claims | Claims transformation, AI in delivery |

> You may meet some or all of these. The COO (Swarup Ghosh) may or may not be in the panel — depends on how formal the round is. Prepare as if he will be.

---

## LESSONS FROM THE CHOKS INTERVIEW — APPLY THESE NOW

### Fix #1: APD vs. SPD

**What happened:** Choks asked if the Nationwide digital front end was APD or SPD. You said APD. He pushed back with "why not SPD?"

**What these mean in Guidewire context:**
- **APD = AccountPortal Digital** — designed for insurance agents and CSRs who manage accounts on behalf of policyholders
- **SPD = ServicePortal Digital** — a policyholder-facing self-service portal where end customers initiate transactions directly

**The answer for Nationwide:** The React front end on Nationwide was policyholder-facing (end customers doing self-service), which makes it **SPD**. APD would have been the agent/CSR-facing portal.

**If this comes up again:**
> "To clarify something I wasn't sharp on in the earlier conversation — the front end layer on Nationwide was an SPD implementation, a policyholder self-service portal built on React with a BFF pattern sitting between the front end and PolicyCenter APIs. I had referenced APD incorrectly and want to own that correction."

---

### Fix #2: "Digital" in Guidewire context

**What happened:** When Choks asked about "digital," you got confused and started talking about React.

**What "Guidewire Digital" means:**
Guidewire Digital is a specific product tier — the portal layer on top of the core suite:
- **The BFF pattern (Backend for Frontend):** A dedicated Node/API service that sits between the React front end and PolicyCenter's REST APIs. It aggregates, transforms, and secures API calls so the front end doesn't hit core directly.
- **TOC component:** The top-of-content navigation bar in Guidewire Digital portals — controls what is rendered and in what order based on user role.
- **React front end:** The Guidewire Digital UI layer — configurable, but React-based by default.

**How to talk about it:**
> "The digital layer on Nationwide included the SPD portal — policyholder-facing React front end, BFF layer for API aggregation, and standard TOC component configuration. My role was delivery management, not UI development, but I was accountable for the digital workstream delivery and coordinated with the UX lead and the BFF developers on sprint delivery and integration testing."

---

### Fix #3: ClaimCenter not in scope (Nationwide)

**What happened:** You said you did PolicyCenter and BillingCenter at Nationwide — Choks asked why not ClaimCenter.

**The right answer:** ClaimCenter at Nationwide was delivered by a separate vendor. Your scope was PC + BC. This is a legitimate scope answer — large carriers routinely split workstreams across multiple vendors.

**How to say it going forward:**
> "At Nationwide, my scope was PolicyCenter and BillingCenter transformation. ClaimCenter was handled by a separate vendor on a parallel track. This is common on large programs — carriers split system integrators by domain. I coordinated with that vendor at the integration boundary but was not accountable for ClaimCenter delivery."

---

### Fix #4: Choks confirmed your cloud experience is migration planning — own that scope accurately

**What Choks clarified:** Your Guidewire Cloud experience is rationalization and migration planning, not a full greenfield GWCP implementation end-to-end.

**How to position this correctly going forward:**
> "My Guidewire Cloud experience is in migration strategy and cloud-readiness assessment — evaluating on-prem configurations for cloud compatibility, identifying customization debt, and building migration roadmaps. I have not led a full greenfield GWCP implementation, but I understand the architecture, the deployment model, and the gaps carriers commonly hit in migration planning. The team I would be leading at VM likely has that hands-on GWCP delivery experience, and I know how to lead delivery, not just do it myself."

---

## YOUR OPENING — "TELL ME ABOUT YOURSELF" FOR THIS AUDIENCE

This is not a technical summary. This is your leadership story. Keep it to 90 seconds.

> "I'm Manoj — I've spent 17 years in technology delivery, the last several focused on P&C insurance transformation. At EY I've led Guidewire implementations for Tier-1 carriers: PolicyCenter and BillingCenter for Nationwide Personal Lines, a turnaround on a troubled PolicyCenter program at Alfa Insurance, and a ClaimCenter go-live at CompSource Mutual. I manage cross-functional teams, carrier CIO relationships, and multi-million-dollar delivery P&Ls.
>
> Beyond the P&C delivery work — I carry AI advisory responsibility at EY, both for the Insurance practice and for our Quality Engineering practice. I've run AI POCs in production environments, and I understand how to have a credible conversation with carrier CIOs about where AI is practical today versus where it's still aspirational.
>
> I'm here because ValueMomentum is the best place in the market to do this work. Pure-play P&C, deep Guidewire practice, and a client-first culture. I want to bring what I've built at EY into an environment where this is the entire business — not one vertical among many."

---

## HIGH-PROBABILITY QUESTIONS AT THIS LEVEL

### 1. "What kind of leader are you?"

> "I lead by building trust up and down. With clients, I establish myself as a reliable voice early — I don't hide bad news, I surface it with a plan attached. With my team, I protect them from noise that doesn't need to reach them and amplify their work to the people who need to see it.
>
> I'm direct. I have high standards. But I also take accountability seriously — when something goes wrong on my delivery, it went wrong on my watch, and I own that. At CompSource, we had a production issue three weeks after go-live where claims records were displaying incorrectly. I called the carrier's VP directly, not through email, explained exactly what happened, and committed to a 24-hour resolution. We fixed it in 18 hours. That relationship is stronger today than it was before the incident."

---

### 2. "Why are you leaving EY?"

> "EY has been a great platform. But it's a 300,000-person generalist firm — insurance is one vertical among many. I've competed with ValueMomentum on deals and I've respected what you build. The difference is that every person at VM wakes up thinking about P&C problems. That specialization compounds. I want to operate in an environment where this work is the whole business, not a resource allocation fight with other verticals."

---

### 3. "Why ValueMomentum — why not another P&C firm, or a carrier directly?"

> "I looked at both. Going to a carrier directly would be an interesting leadership move, but it would narrow my experience — one client, one platform, one set of problems. I've been on the implementation side my whole career because the variety makes you better. VM gives me that variety plus the specialization I want.
>
> On why VM specifically: the Everest Group and ISG recognition, the six Guidewire specializations, the 75-plus carrier relationships, and the AI-first rebrand in 2025 — these tell me VM is not standing still. That's where I want to be."

---

### 4. "This role requires being on-site at client locations frequently. How do you feel about that?"

> "That's how I've always worked. My most successful engagements were the ones where I was physically present with the carrier team. When you're in the room, you hear things that never make it into a status report. You build trust faster. You see where the real friction is. I've managed programs where I was on-site three to four days a week — that's a personal investment I'm prepared to make."

---

### 5. "How do you manage a delivery that is going off-track?"

**Use the Alfa Insurance STAR story:**

> "At EY I inherited a PolicyCenter program at Alfa Insurance — it was four months behind, the delivery manager had just left, and the carrier's CIO had already told EY leadership that confidence was 'extremely low.'
>
> My first action was a two-day assessment — I reviewed all open backlog, mapped dependencies, interviewed every workstream lead one-on-one, and benchmarked team velocity against what was originally planned. What I found: the backlog had not been properly refined in three sprints, and a core technical assumption about the policy data migration had never been formally validated.
>
> I ran a reset session with the carrier's program director — here is what's real, here is what the path to go-live looks like, here is what I need from you. We extended the timeline by six weeks by formal agreement, rebaselined the backlog, and I put two senior developers on the data migration risk specifically.
>
> We went live on the rebaselined schedule. The CIO's feedback at the end was that the turnaround was the most transparent and disciplined recovery she had seen on a program of this size."

---

### 6. "How do you develop and retain talent on delivery teams?"

> "I invest early and I make it visible. Early means: when someone joins my team, I have a direct conversation about where they want to go and what I need to invest in to get them there. Visible means: when they do strong work, I make sure the people above me know their name — not just mine.
>
> On the retention side, I'm honest about what I can and can't control. What I can control is giving people work that stretches them, shielding them from unnecessary overhead, and advocating for them at performance time. What I can't control is compensation bands — but I can make sure the work is the kind that makes someone a more valuable professional.
>
> In practice: on the CompSource engagement I had a mid-level developer who wanted to grow into solution architecture. I gave him the integration design workstream — end to end, with my oversight — and introduced him to the carrier's IT architect directly. He's now a lead SA at EY. That's what retention looks like to me."

---

### 7. "How do you handle a client who is unhappy with the delivery team's performance?"

> "I separate the emotion from the facts first. When a client is unhappy, there's usually a real underlying problem — and sometimes there's also a communication failure on top of it. I want to understand both.
>
> My first step is always a direct call or meeting — not through intermediaries, not over email. I want to hear it from the client in their own words. I listen without defending. Then I ask: is this a delivery issue, a communication issue, or an expectation gap?
>
> Once I know which it is, the fix is different. Delivery issue: I take immediate action, give a timeline, and come back with the result. Communication issue: I change the cadence or the format or the person who owns the relationship. Expectation gap: I have a harder conversation about what was agreed and what is realistic.
>
> I don't let unhappy clients stay unhappy for more than 48 hours without a response from me personally."

---

### 8. "What is your vision for building the Client Services practice at VM?"

> "Three things in the first year:
>
> First, make delivery predictable. Clients don't need perfect — they need to know what's happening and trust that the team will tell them the truth. I'd build a portfolio health rhythm that surfaces risks early and resolves them before they become escalations.
>
> Second, build the account base. Delivery quality is the best sales tool in this business. Happy clients extend, expand, and refer. My goal in year one is to convert at least two delivery engagements into AMS relationships and identify the expansion opportunities in the three largest accounts.
>
> Third, invest in the team. VM's Guidewire depth is the product. I'd identify the high-potential delivery leads early, create stretch assignments, and make sure we're retaining the people clients trust. Turnover on delivery teams is a direct client satisfaction risk — it's not a back-office HR problem, it's a revenue risk."

---

### 9. "You come from a Big 4 firm. Our culture is different. How do you adapt?"

> "I've competed against VM. The difference I noticed from the outside was that VM's delivery teams have more direct accountability to the client and fewer layers between a problem and a decision. That's not a disadvantage — I think that's the right model. Big 4 culture has its value, but the thing I'll leave behind is the overhead that doesn't make delivery better: the large deck builds, the PMO reporting that exists for internal reporting rather than client value, the approval chains that slow decision-making.
>
> What I bring that translates well: delivery discipline, structured governance, and the habit of making the work visible to senior stakeholders. VM's scale is 4,500 people — decisions can still move fast. I'll adapt to that. I won't try to rebuild EY here."

---

### 10. "What do you do well that most delivery leaders don't?"

> "I stay technically honest. Most delivery leaders at the AVP and above level lose touch with the detail and start managing by reports. I don't. I'm not going to write Gosu code — but I know what a well-structured PCF looks like, I understand the difference between configuration and extension in Guidewire, I can review an integration design and spot a problem before it becomes a sprint blocker.
>
> That technical honesty gives me credibility with the delivery teams and with carrier IT leads. When I say something is achievable, the team believes me, because they know I've read the backlog. When I say something is a risk, clients take it seriously because I can back it up at a level of specificity that surprises them."

---

## WHAT NOT TO SAY OR DO

| Avoid | Why | Instead |
|---|---|---|
| Overclaiming GWCP greenfield experience | Choks already corrected this; leadership may follow up | "Migration planning and rationalization — not a full greenfield GWCP end-to-end. I want to build that experience at VM." |
| Mentioning ACE certification | CLAUDE.md rule — do not mention | Silent on certs during prep; bring AWS, Azure AI, Google GAIL only if asked |
| Duck Creek delivery experience | You have none — don't imply otherwise | "I haven't delivered on Duck Creek directly — I know the platform in context of client decisions. My delivery experience is Guidewire." |
| Vague answers about "digital" | Shows the fumble again | Own the SPD/APD correction upfront if it comes up |
| Underselling the team turnaround (Alfa) | This is one of your best stories | Use it fully — it shows crisis leadership |
| Talking about MuleSoft internals or DataWeave | CLAUDE.md rule — architectural level only | "We used MuleSoft for the integration layer — the decision was based on the carrier's existing middleware investment and the need for a Canal-CompSource unified architecture." |
| Speaking negatively about EY | Comes across poorly | "EY is an excellent firm. The reason I'm here is about where I want to go, not where I'm leaving." |

---

## WHEN YOU WALK IN THE ROOM

1. **Arrive 15 minutes early.** Ask reception who you'll be meeting with (confirms names and titles).
2. **Bring printed copies of your resume** (one per interviewer, plus two extras).
3. **Open with the room:** "I've done my homework on ValueMomentum — I'm impressed by the Everest Group recognition and what you're building on the AI side. I'm glad to be here in person."
4. **Know the four delivery officers structure** Choks described: sales, verticals, technology solutions, and delivery. Know that Choks is one of four delivery officers.
5. **Know VM's Piscataway NJ HQ** is the primary corporate location — Hyderabad, Pune, Coimbatore are offshore; Toronto and London are regional.

---

## QUESTIONS TO ASK THEM

Choose 2–3 based on who is in the room:

**For a Delivery VP (Alok Dhagat):**
> "What does a successful first 90 days for an AVP Client Services look like from your perspective — what would you want to see me prioritize?"

**For Client Partner VP (Avdhut Nadkarni):**
> "How does the client services function coordinate with the client partner role today — where do the accountability lines sit for relationship ownership vs. delivery ownership?"

**For COO (Swarup Ghosh):**
> "VM has grown significantly in the last few years. As COO, where are the operational constraints you're focused on as the delivery practice scales further?"

**For SVP Market Success (Wayne Rodrigues):**
> "How far upstream do delivery leaders typically get involved in the pre-sales process — do you bring AVPs into pursuits before the SOW is signed?"

**Closing question (works for everyone):**
> "I've prepared for this role and I'm confident about what I can bring. Is there anything about my background you'd want me to clarify or expand on before we wrap?"

---

## YOUR POSITIONING IN ONE SENTENCE

If they ask "why should we hire you?":

> "Because I can lead the full conversation — with a carrier CIO about program health, with a delivery team about sprint execution, and with your leadership about practice growth — and I have the stories to back every one of those claims."

---

## CROSS-REFERENCES

- Detailed 30-60-90 day plan → `qa/AVP-30-60-90-day-plan.md`
- Executive presence Q&A → `qa/AVP-executive-presence.md`
- Practice building vision → `qa/AVP-practice-building.md`
- VM company research → `research/valuemomentum.md`
- Real-time scenario questions (Q18–Q23) → `qa/AVP-interview-prep.md` Section 8
