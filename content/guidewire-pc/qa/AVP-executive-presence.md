# Executive Presence & C-Suite Communication — HM Interview Prep

**Why this section exists:** At AVP level, your most important relationship is with the carrier's CIO, COO, or Chief Claims Officer — not the IT manager. ValueMomentum will probe whether you can operate at that altitude. Every answer here should demonstrate that you are already doing this at EY.

---

## Q1: Walk me through how you run an executive steering committee for a large Guidewire program.

**What they're really asking:** Can you manage upward? Do you know how to structure executive conversations so decisions get made — not deferred?

**How to answer:**
> "I run steering committees as decision forums, not status meetings. That distinction matters — executives don't want to sit through Gantt charts, they want to make three decisions and leave.
>
> My standard cadence for a program like the Nationwide PolicyCenter implementation was monthly with the carrier's CIO and SVP of Personal Lines. Each session had a fixed agenda: a one-page program health dashboard (RAG status, milestone tracking, budget actuals vs. plan), two or three decisions that only they could make, and one forward-looking risk conversation.
>
> The health dashboard was designed to be read in 90 seconds. Green means no action needed. Yellow means I'm managing it — here's my plan. Red means I need something from you today.
>
> For decisions, I frame them as options with my recommendation clearly stated. Executives don't want to generate options — they want to choose between two or three that I've already vetted. I say: 'Here are three ways to handle the rating engine scope question. I recommend Option 2. Here's why. Do you agree?' That format closes decisions in minutes instead of hours.
>
> The steering committee is also where I protect the team. If there's a scope request coming from the business that isn't funded, this is where I surface it — in front of the business owner and the IT sponsor together, so there's no ambiguity about who needs to fund the change."

---

## Q2: Tell me about a time you delivered bad news to a carrier's CIO or executive sponsor. How did you handle it?

**What they're really asking:** Do you have the courage to tell the truth at the executive level? Executives hate surprises more than bad news.

**How to answer (STAR):**
> "**Situation:** During the Alfa Insurance PolicyCenter implementation, we were six weeks from go-live when our QA lead flagged that the billing integration defect rate was significantly higher than our exit criteria allowed. At the current burn rate, we had a 70% probability of missing the go-live date.
>
> **Task:** I had to tell the CIO — a new executive who had just come on board two months earlier — that the date he had communicated to his board was at risk.
>
> **Action:** I didn't send an email. I requested a 30-minute 1:1 the same day. I walked in with a one-page document: what we found, what caused it, what I was doing about it, and three options for the go-live date — the original date with risk, a 3-week delay with high confidence, or a phased go-live with billing running on the legacy system temporarily.
>
> I gave my recommendation — the phased approach — and explained why: it let us go live with PolicyCenter on schedule for new business while we stabilized the billing integration. The business win was preserved; the risk was contained.
>
> **Result:** The CIO appreciated the transparency and the structured options. He chose the phased approach. We went live on the original date for PolicyCenter. The billing integration followed 4 weeks later with zero production incidents. He told me afterward that the way I handled that conversation was the reason he recommended EY for their next program."

---

## Q3: How do you manage a carrier executive who is disengaged or not sponsoring the program effectively?

**How to answer:**
> "Executive disengagement is one of the top reasons Guidewire programs fail, so I treat it as a delivery risk the same way I treat a technical risk.
>
> First, I try to understand why they're disengaged. Usually it's one of three things: they feel the program is running fine and doesn't need them; they've lost confidence in the direction; or they have competing priorities that are consuming their attention.
>
> The diagnosis changes my approach. If they think the program is fine, I bring them a problem that only they can solve — a scope conflict, a budget decision, a resource request. That re-establishes their role without creating alarm.
>
> If they've lost confidence, I request a dedicated session — not a steering committee, a 1:1 — where I listen first. I ask: what would make you more confident in this program? Then I address those things specifically and visibly.
>
> On Nationwide, I had a period mid-program where the SVP of Personal Lines — the business sponsor — stopped attending our monthly reviews. I found out through her EA that she was under pressure on a separate regulatory matter. Rather than escalating or waiting, I sent her a one-page 'program health letter' monthly — two paragraphs, no attachments, written for a 2-minute read. She re-engaged at the next steering committee and told me the letter was exactly what she needed. Sometimes the answer is less friction, not more escalation."

---

## Q4: How do you present a complex technical recommendation to a non-technical executive?

**How to answer:**
> "The rule I follow is: lead with the business outcome, trail with the technology. A CIO cares about 'will this system support our growth into commercial lines?' not 'should we use REST or SOAP for the rating service integration?'
>
> A real example: at CompSource Mutual, we had a decision about whether to implement ClaimCenter with direct database integration to their legacy payment system or build an API layer through MuleSoft. The technical team had strong opinions. The CFO needed to sign off on the budget.
>
> I presented it to the CFO this way: 'Option A costs $200K less upfront and takes 6 weeks less to build. Option B costs more now but gives you a reusable integration asset — every future system you connect to your payment processor will cost 60% less to integrate. Given that you have two more systems modernizations planned in the next 18 months, Option B pays for itself on the second project.' I didn't mention API vs. database once.
>
> The CFO chose Option B in five minutes. The technical team spent three weeks debating it. That's the difference between a technical presenter and a business advisor."

---

## Q5: How do you handle a situation where the carrier's business team and IT team are misaligned?

**How to answer:**
> "Business-IT misalignment is endemic in insurance carrier programs — especially on Guidewire implementations where the business team owns the requirements and the IT team owns the platform.
>
> My approach is to make the misalignment visible early and resolve it at the right level, not work around it.
>
> On the Canal Insurance commercial lines implementation, the underwriting business team wanted a specific risk scoring workflow that the IT architect said was technically impossible in Guidewire's standard configuration without significant Gosu customization. Both sides were correct in their own domains and neither would move.
>
> I convened a joint working session — not a steering committee — with the underwriting VP, the IT architect, and a Guidewire SME from my team. We spent two hours walking through what the business needed functionally (the outcome, not the UI) and what the platform could support natively. We found a configuration approach that met 90% of the underwriting requirement using Guidewire's assignment rules and workflow states — no Gosu required. The remaining 10% was deferred to Phase 2 with a product feedback request submitted to Guidewire.
>
> The lesson: business-IT conflict is almost always a translation problem. Get the right people in the room, speak both languages, and find the overlap. That's what a delivery leader is for."

---

## Q6: A carrier CIO asks you mid-program: "Are we going to make it?" How do you answer?

**What they're really asking:** Do you have the judgment and courage to give a real answer — not a political one?

**How to answer:**
> "I give them the truth, immediately, with context.
>
> The answer is never just yes or no — it's a confidence statement with the key assumptions behind it. I'd say something like: 'Based on where we are today, we have a 75% confidence in the current date if three things hold: the carrier UAT team completes sign-off by the end of sprint 14, the payment gateway integration goes live in the test environment by next Friday, and the open P1 defect on the policy issuance workflow is resolved in the next 5 days. If any one of those slips, I'll reforecast with you immediately.'
>
> That answer does three things: it gives them a real read on confidence level, it names the specific risks so they know what to watch, and it commits me to proactive communication if things change.
>
> What I never do is give false confidence to protect the relationship. A CIO who hears 'yes we'll make it' and then doesn't, loses trust permanently. A CIO who hears 'here's our confidence level and here are the three things that could change it' — and then we hit the date — remembers that honesty and rewards it."

---

## Q7: How do you build credibility with a new carrier client in the first 30 days?

**How to answer:**
> "First 30 days is all about listening and delivering one visible win.
>
> Listening: I meet everyone who matters — business sponsor, IT lead, project manager, key architects, and if I can get it, a frontline adjuster or underwriter who will actually use the system. I ask the same question to everyone: 'What has to be true for this program to be a success from your perspective?' The answers are always different, and the gaps between them tell me exactly where the political risks are.
>
> Visible win: Within the first 2 weeks, I identify one thing that's been bothering the team that I can fix fast — a reporting gap, a meeting that doesn't need to happen, a decision that's been stuck waiting for someone to own it. I fix it without being asked. That establishes that I'm here to make things better, not to observe.
>
> With carrier executives specifically, I make sure my first steering committee sets the tone: crisp agenda, decisions framed correctly, health dashboard they can read in 90 seconds. Executives judge you by your first meeting. If that meeting is organized, honest, and decisive — they'll trust you for the rest of the program."

---

## EXECUTIVE COMMUNICATION — PHRASES TO USE

- "I want to give you the real picture, not the polished one."
- "There are two decisions only you can make — everything else I'll handle."
- "Here's my recommendation. Here's the alternative if you see it differently."
- "We're on track, and here are the three things I'm watching that could change that."
- "I'd rather have this conversation now than in four weeks."
