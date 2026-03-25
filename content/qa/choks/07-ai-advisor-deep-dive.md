# Choks Interview — AI Advisor Deep Dive Q&A

**These are the follow-up questions Choks is most likely to ask after hearing your AI Advisor narratives from 06-sanjay-intel.md. He will go two levels deep on anything you say.**

---

## Q: "Walk me through the Nationwide AI claims solution in more detail — what exactly did you build?"

> "The solution had three layers.
>
> **Intake layer:** FNOL documents arrived in multiple formats — PDFs, email attachments, scanned images. We built a document ingestion pipeline using Azure Document Intelligence (formerly Form Recognizer) to extract structured fields: claimant name, date of loss, loss location, policy number, description of loss. For unstructured narrative text — the 'describe what happened' field — we used an NLP model to identify claim type signals: bodily injury, property damage, liability indicators.
>
> **Classification and routing layer:** A trained ML classifier — built on gradient boosting — took the extracted fields and predicted two things: claim complexity tier (simple, moderate, complex) and routing recommendation (auto-adjudication eligible, fast-track, examiner review). The training data was 3 years of historical claims from Nationwide's ClaimCenter — actual claim outcomes, adjuster handling times, settlement amounts. We used that to teach the model what a fast-track claim looks like vs. one that needs human review.
>
> **Output layer:** The model output pre-populated ClaimCenter fields via ClaimCenter's REST API — claim type, coverage lines, initial reserve recommendation, routing flag — with a confidence score attached. If confidence was above 85%, the claim pre-populated automatically. Below that threshold, it flagged for adjuster review before anything was committed. Human-in-the-loop was not optional — it was architected into the workflow.
>
> My personal role in all of this: I was not writing the model code. I was the solution architect and client-side lead. I defined what the model needed to predict, worked with the data science team to define training data requirements, made the architectural call on where the AI layer integrated into the ClaimCenter workflow, and owned the business case and stakeholder alignment with Nationwide's transformation leadership. The data scientists and integration engineers built it. I directed what we built and why."

---

## Q: "How did you measure the 30-40% efficiency gain? Show me the math."

> "We measured it at the task level, not program level — which is the only credible way to do it.
>
> Baseline: before the solution, an adjuster handling a standard FNOL intake spent on average 18 minutes per claim on manual data entry — pulling fields from the document, entering into ClaimCenter, validating coverage. We measured this from time-stamp data in ClaimCenter's activity log on 6 months of historical claims — roughly 4,200 claims in the sample set.
>
> Post-AI: for claims where the model ran above the 85% confidence threshold — about 68% of the volume — manual entry time dropped to 4–5 minutes: adjuster reviews the pre-populated fields, confirms or adjusts, submits. That's roughly a 75% reduction on that portion of volume.
>
> For the 32% below threshold — full adjuster review — time stayed flat. No gain, no regression.
>
> Blended across total volume: 68% of claims at ~75% reduction, 32% at zero change. Blended efficiency gain on the intake task: approximately 50%. We presented a conservative 30–40% range to the client because we excluded productivity gains from faster routing and settlement recommendations — those were harder to isolate cleanly.
>
> I always present the conservative number with the methodology visible. Clients and their auditors will ask exactly the question you just did."

---

## Q: "What was YOUR personal contribution to this AI solution vs. what the technical team built?"

> "Clean line.
>
> What I owned personally:
> - Use case definition — what business problem we were solving, what the AI needed to predict, what 'good' looked like in terms of accuracy and business outcome
> - Solution architecture — where the AI layer sat relative to ClaimCenter, the integration pattern, the confidence threshold logic and fallback workflow
> - Business case — baseline measurement, ROI projection, stakeholder alignment with Nationwide's transformation VP and IT leadership
> - Production readiness criteria — what had to be true before this went into a real adjuster's hands: accuracy threshold, fallback behavior, audit trail, compliance review
>
> What the technical team owned:
> - Model development — the data scientists built and tuned the gradient boosting classifier
> - Document extraction pipeline — the Azure Document Intelligence configuration and field mapping
> - ClaimCenter integration — the API layer connecting model output to ClaimCenter fields
>
> The way I describe my role: I defined the problem, designed the solution architecture, and owned the business outcome. The team executed the engineering. That's the AI Advisor function — you are not the data scientist. You are the person who knows enough to direct the data scientist and translate the output to the carrier."

---

## Q: "What are the risks of AI in insurance claims? Hallucinations, compliance, regulatory?"

> "Four categories I deal with on every AI engagement:
>
> **Accuracy and hallucination risk.** In a claims context, a wrong field pre-populated — wrong coverage line, wrong reserve amount — creates a compliance and financial exposure. My mitigation: confidence thresholds and human-in-the-loop. The AI never writes to ClaimCenter autonomously. Below a defined confidence level, it flags for review. Above the threshold, the adjuster still sees the pre-populated field and can override before submission. The system augments the adjuster, it does not replace the adjuster.
>
> **Regulatory and compliance risk.** Insurance is regulated at the state level. AI-assisted claims decisions can trigger state insurance department scrutiny — particularly around discriminatory patterns or fair claims handling requirements. Before production deployment, I require a compliance review that covers two questions: does the model introduce any proxy variables that correlate with protected characteristics? And does the AI's role in the workflow comply with the carrier's state-level fair claims handling obligations?
>
> **Data quality and bias risk.** The model is only as good as the training data. If historical claims data reflects prior adjuster bias — for example, systematically routing certain claim types differently — the model learns and replicates that bias. I require a data audit before training: review the training set for systematic patterns that don't reflect the business logic you actually want.
>
> **Explainability risk.** A carrier's claims examiner or auditor needs to be able to explain why a claim was routed a specific way. Black-box models create audit exposure. I specify explainability as a non-negotiable requirement — the model output must include a feature importance summary that an examiner can articulate to a regulator if asked."

---

## Q: "How does AI actually integrate with Guidewire ClaimCenter? Walk me through the architecture."

> "Three patterns, and which one you use depends on where in the claim lifecycle the AI is acting.
>
> **Pre-intake processing** — the AI runs before the claim record is created in ClaimCenter. Document ingestion, NLP extraction, classification all happen upstream. The output is a structured JSON payload that gets passed to ClaimCenter's FNOL API to create the claim record with fields pre-populated. This is the pattern we used at Nationwide. Advantage: ClaimCenter doesn't need to know about the AI model at all — it just receives structured input. Clean separation of concerns.
>
> **Event-driven processing** — the AI triggers off a ClaimCenter business event. Example: when a claim moves to a specific status, ClaimCenter fires a message event to an integration layer (MuleSoft, Azure Service Bus), which calls the AI model and writes the result back into the claim via REST API. Used when you need AI enrichment at a specific point in the claim lifecycle — reserve validation, settlement recommendation, fraud signal.
>
> **Embedded via Guidewire Cloud APIs** — for Guidewire Cloud customers, ClaimCenter Cloud exposes a richer API surface. You can use PolicyCenter and ClaimCenter's cloud APIs to read claim data, pass it to an AI service, and write enriched outputs back in near-real-time. This is the cleaner pattern for cloud-native implementations going forward.
>
> The choice always comes down to: where in the workflow does the AI output need to live, and how much latency is acceptable? Real-time triage needs pre-intake or event-driven. Overnight scoring for fraud detection can run as a batch against closed claims."

---

## Q: "What is Agentic AI and how did it apply to the TestAI solution?"

> "Agentic AI refers to AI systems that can take a sequence of actions autonomously to accomplish a goal — as opposed to a single prompt-response interaction. The agent plans its own steps, uses tools, and iterates until the task is complete.
>
> In TestAI specifically: when a user story comes in from the ALM tool, the agent doesn't just generate a test case in one shot. It:
> 1. Reads the user story and acceptance criteria
> 2. Identifies the entities and workflows involved
> 3. Generates test cases at the right granularity — happy path, edge cases, negative tests
> 4. Converts each test case into Gherkin format (Given/When/Then)
> 5. Generates the corresponding Playwright step definitions
> 6. Runs the Playwright tests and captures results
> 7. Produces a results dashboard and — for failures — drafts a bug description linked to the user story
>
> Each of those steps is a tool call by the agent. The agent decides the sequencing and handles iteration when a step fails — for example, if generated step definitions don't compile, the agent revises them before re-running. That's the agentic pattern: goal-directed, multi-step, tool-using, self-correcting.
>
> The human-in-the-loop sits at two points: after step 3 (test case review and approval) and after step 7 (bug raise review). The tester doesn't write the test cases or the code — they validate and approve. That's the productivity gain."

---

## Q: "Generative AI vs. predictive AI — what's the distinction and when do you use each in insurance?"

> "Two different tools for two different problems.
>
> **Predictive AI** — trained on historical data to output a specific numeric or categorical prediction. Examples: claim complexity classifier, fraud probability score, next best action recommendation, churn propensity. Output is a number or a category. These models have measurable accuracy — you can back-test them on held-out data and give the client a precision/recall number. I used predictive AI in the Nationwide claims triage: gradient boosting classifier predicting routing category.
>
> **Generative AI** — LLMs that produce text, code, or structured content from a prompt. Examples: test case generation (TestAI), policy document summarization, claims correspondence drafting, regulatory filing generation. Output is freeform content. You measure it differently — not accuracy in the statistical sense, but quality, relevance, and consistency.
>
> **When to use which in insurance:**
> - Use predictive AI when you have a well-defined outcome to optimize (route this claim, score this risk, predict this payment) and historical data to train on.
> - Use generative AI when the output is content that a human needs to review before acting on — documents, summaries, drafts, test scripts.
> - Combine both when you need structured prediction plus explainable narrative — for example, a fraud flag (predictive) plus a natural language summary of why the claim was flagged (generative).
>
> The mistake I see: carriers who want to apply LLMs to structured prediction problems because LLMs are the buzzword. I push back on that. Use the right model for the task."

---

## Q: "What other AI use cases do you see in P&C beyond claims triage?"

> "Six areas I think about:
>
> **Underwriting:** AI-assisted risk scoring at submission — ingesting third-party data sources (weather, satellite imagery for CAT exposure, telematics) alongside application data to produce a risk score and coverage recommendation. Reduces manual underwriting time on standard commercial risks.
>
> **Policy administration:** Automated policy document ingestion — reading a competitor policy or an expiring policy and pre-populating the renewal application. EY's IPR360 product does a version of this: reverse-engineering policy products from document inputs into APD templates.
>
> **Fraud detection:** Predictive models on claims data to flag anomalous patterns — duplicate claims, staged accidents, provider fraud. This is mature in personal auto; commercial lines is earlier.
>
> **Customer service and FNOL:** LLM-powered FNOL intake — a conversational interface where a claimant describes their loss in natural language and the AI extracts the structured data. Reduces the 'forms friction' that drives claimant dissatisfaction.
>
> **Regulatory and compliance:** AI-assisted rate filing review — carriers file rates with state insurance departments and need to validate that their filings are complete and compliant. LLMs can review draft filings against state-specific requirements and flag gaps.
>
> **Managed Services / run operations:** AI-assisted production monitoring on live Guidewire systems — log analysis, anomaly detection, proactive alerting before incidents become outages. This is where iFoundry has an opportunity.
>
> I'd prioritize claims and underwriting first for any carrier — that's where the volume and the cost exposure are. The others are real but secondary."

---

## Q: "How do you build the AI business case for a skeptical carrier CIO?"

> "Three moves.
>
> **Start with cost of inaction, not cost of the solution.** A CIO who's skeptical about AI is usually skeptical about the investment. I flip the frame: what does it cost today to handle this process manually? At Nationwide, that was 18 minutes per FNOL intake, at roughly $X fully-loaded cost per adjuster hour, across Y claims per month. That's a hard number. The AI investment is justified against that baseline — not against a hypothetical future state.
>
> **Show a narrow, provable use case first.** I never propose AI transformation. I propose one use case with a measurable outcome in 60–90 days. If the FNOL intake automation pilot saves 30% intake time on 500 test claims, the CIO has a result he can take to his CFO. The next conversation is expansion, not justification.
>
> **De-risk the decision.** The fear behind AI skepticism is usually one of three things: it won't work, it'll create a compliance problem, or my team won't adopt it. I address each explicitly in the proposal: here's the confidence threshold and fallback, here's the compliance review we'll run, and here's the adjuster adoption plan — including the human-in-the-loop design that keeps the adjuster in control.
>
> The CIO who says yes to a narrow pilot with a clear baseline and de-risked compliance posture is much easier to find than the CIO who says yes to an AI transformation program."

---

## Q: "A carrier wants AI but their data quality is poor — what do you do?"

> "Data quality is the most common hidden blocker in AI engagements, and I've seen carriers underestimate it every time.
>
> First move: data audit before solution design. I require a 2-week data assessment before committing to an AI engagement scope. We look at: completeness (are the key fields populated?), consistency (are values standardized across systems?), historical depth (do we have 2+ years of labeled outcomes to train on?), and lineage (can we trust the data or has it been transformed in ways that introduce noise?).
>
> Three outcomes from that audit:
>
> - **Data is good enough to proceed** — we scope the AI solution against the available data and set accuracy expectations based on what we have.
> - **Data is usable with remediation** — we scope a data cleaning sprint as Phase 0 before model development. Add 4–6 weeks to the timeline, add cost, but the model output is credible.
> - **Data is too sparse or corrupted** — we redirect. Either a different use case where data quality is stronger, or a rules-based automation that delivers efficiency without requiring ML. I don't build an AI solution on bad data — the carrier gets a low-accuracy model they can't trust, and that discredits AI internally for the next 3 years.
>
> The honest conversation I have with a carrier in that third scenario: 'I can build this, but it won't perform at the level that makes it worth deploying. Here's what I'd recommend instead.' That's a harder conversation than saying yes, but it's the right one."

---

## Q: "How does your AI Advisory experience connect to what ValueMomentum does with iFoundry?"

> "The connection is direct — and it's the reason I think this role is the right fit at this moment.
>
> iFoundry is VM's accelerator and IP platform for P&C. From what I understand of iFoundry, it includes pre-built analytics models, integration accelerators, and AI-ready components built on top of Guidewire data. That's exactly the layer I've been building on at EY — AI solutions that sit on top of Guidewire's data model and enhance the workflows carriers already have.
>
> Where I add specific value: I've been the person on the carrier side of that conversation. I know what a carrier CIO needs to see before they fund an AI initiative, what the compliance concerns are, how to scope a pilot that generates a defensible ROI, and how to architect the AI integration so it doesn't break when Guidewire upgrades. That practical experience — not from a lab, from production programs — is what lets me position iFoundry credibly to a carrier.
>
> The gap I'd want to close quickly at VM: learning which iFoundry components are production-ready versus accelerator-stage. That distinction matters when you're sitting across from a carrier CIO who is asking 'has anyone actually used this in production?'"

---

## Q: "How do you stay current with AI — it moves so fast?"

> "Three things that I actually do, not three things that sound good:
>
> **Build, not just read.** I stay current by doing. The TestAI engagement at EY was not a research project — we were implementing with OpenAI APIs, building agentic workflows, hitting the edges of what current LLMs can and can't do reliably. That hands-on exposure is not replaceable by reading analyst reports. You learn what hallucination actually looks like in a real workflow, not in a demo.
>
> **Certifications as forcing functions.** I've pursued AI certifications not for the credential but for the structured curriculum. AWS Cloud Practitioner, Azure AI Fundamentals — these forced me to cover areas I wouldn't have prioritized on my own: cloud infrastructure for AI, responsible AI frameworks, model lifecycle management. The certification is a side effect of the learning.
>
> **Peer network in AI-adjacent roles.** I maintain active contact with data scientists and ML engineers from engagements I've run — not just EY colleagues but carrier-side AI team leads. They tell me what's actually working in production. An analyst report tells you what's trending. A data scientist at a P&C carrier tells you what they tried last quarter and why it failed. That's more valuable."

---

## QUICK REFERENCE — AI TECHNICAL TERMS TO USE FLUENTLY

| Term | What it means / how you use it |
|---|---|
| **RAG (Retrieval-Augmented Generation)** | LLM augmented with a knowledge base — retrieves relevant documents before generating a response. Used for policy Q&A, claims research |
| **Gradient boosting** | ML algorithm for structured prediction — XGBoost, LightGBM. Used for claim classification, fraud scoring |
| **NLP (Natural Language Processing)** | Extracting meaning from unstructured text — claim narratives, policy documents |
| **Confidence threshold** | The score above which the AI output is trusted for automated action. Below threshold = human review |
| **Human-in-the-loop (HITL)** | Architectural pattern where a human reviews/approves AI output before it takes effect |
| **Agentic AI** | AI that takes a sequence of actions using tools to accomplish a goal — not single prompt-response |
| **LLM (Large Language Model)** | Foundation model (GPT-4, Claude, etc.) that generates text from a prompt |
| **Gherkin** | BDD test format: Given / When / Then. Used in TestAI for test case structure |
| **Feature importance** | Which input variables drove the model's prediction — used for explainability |
| **Training data** | Historical labeled examples the model learns from |
| **Inference** | Running the trained model on new data to produce a prediction |
| **Azure Document Intelligence** | Microsoft's OCR + form extraction service — used for FNOL document processing |
