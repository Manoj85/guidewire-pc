# Industry Trends — HM Interview Prep

**Why this section exists:** The HM will test whether you read the market. An AVP who can only talk about past programs — but not where the industry is heading — is a delivery manager, not a business leader. Show you think ahead of the client, not just alongside them.

---

## Q1: Where is the Guidewire market heading over the next 3 years? What's the biggest shift you're seeing?

**How to answer:**
> "Three shifts are converging simultaneously and they're changing what delivery looks like.
>
> **First: The move to Guidewire Cloud Platform (GWCP).** Guidewire is actively pushing carriers off on-prem implementations toward their managed cloud. This is not optional long-term — Guidewire has signaled that on-prem will eventually be end-of-life for new feature investment. What this means for delivery: the customization rationalization conversation that used to happen optionally is now mandatory. Carriers with heavy Gosu footprints have to clean house before they can migrate. I've run this exercise — at Nationwide we reduced their Gosu customization count by 40% in a 6-month rationalization engagement before starting the cloud migration. That's a new service category that didn't exist 3 years ago.
>
> **Second: GenAI moving from POC to production.** The carriers who ran GenAI pilots in 2024 are now asking how to operationalize them. The challenge isn't the model — it's the data quality, the governance, and the integration with Guidewire workflows. Claims intake automation is the first use case going to production at scale. I ran two of these POCs at EY and both are now in production build phases.
>
> **Third: Mid-market carriers accelerating modernization.** The Tier-1 carriers have largely completed their Guidewire implementations. The growth market is now mid-size and specialty carriers — WC, specialty lines, MGAs — who are on legacy systems and know they can't compete without modernizing. These carriers need a different delivery model: tighter scope, faster go-live, more opinionated configuration. VM is well-positioned here with your carrier depth and flexible delivery model."

---

## Q2: How do you see GenAI changing the Guidewire implementation and Managed Services business?

**How to answer:**
> "GenAI will change both sides of the business, but in different ways and on different timelines.
>
> **On the implementation side:** The first impact is developer productivity. Guidewire Gosu is a niche language — there are very few resources, and even experienced Java developers take 3–6 months to become productive. GenAI coding assistants are significantly accelerating that ramp. I've seen developers who were 6 months from productivity get there in 10 weeks with AI-assisted code generation. This compresses timelines and expands the talent pool.
>
> The second implementation impact is requirements and test generation. We're now using LLM-based tools to analyze legacy business rules documentation — old Word documents, spreadsheets, undocumented stored procedures — and generate structured Guidewire requirements and test cases from them. At Alfa Insurance, we had a particularly messy legacy rating manual that would have taken a BA 8 weeks to convert. We did it in 3 weeks with a RAG pipeline on top of the documents.
>
> **On the Managed Services side:** GenAI enables predictive support. Instead of waiting for a P1 incident, we're now running log analysis models that detect patterns of performance degradation before they become outages. I piloted this on the Nationwide Managed Services engagement — we caught two memory leak patterns in the BillingCenter integration layer 48 hours before they would have caused a production issue.
>
> The honest caveat: GenAI amplifies what's already there. If your data is clean, your processes are structured, your team knows the domain — GenAI makes you significantly faster. If those foundations aren't in place, GenAI just produces bad output faster."

---

## Q3: What is your perspective on the Guidewire Cloud migration wave — what are carriers getting right and wrong?

**How to answer:**
> "Carriers who are succeeding at Guidewire Cloud migration are treating it as a business transformation, not an infrastructure lift. Carriers who are struggling are treating it as a technical migration — move the existing system to the cloud, keep everything else the same.
>
> **What they're getting right:** The smarter carriers are using the cloud migration as a forcing function to rationalize their customizations. Guidewire's cloud certification requirements essentially mandate it — you can't have unbounded Gosu in a cloud-certified implementation. So the migration becomes the opportunity to get to a leaner, more upgrade-friendly configuration. On the Nationwide cloud migration planning I ran, we reduced the custom code footprint by 40% and actually improved the functional coverage because we replaced some brittle Gosu rules with proper product model configuration.
>
> **What they're getting wrong:** Two things. First, underestimating data migration complexity. Moving 20 years of policy history, claims records, and billing transactions to a new data model is the hardest part of any migration — not the application layer. Carriers who scope the application first and think about data second consistently run into trouble in SIT.
>
> Second, not planning for the operating model change. Guidewire Cloud means Guidewire controls the upgrade schedule. Carriers who are used to deciding when to upgrade — and deferring for years — now have to be upgrade-ready always. That requires a different internal team structure, a different relationship with your SI partner, and a different approach to customization governance. The carriers I've seen struggle post-migration are the ones who didn't build that operating model during the implementation."

---

## Q4: P&C insurance is facing rising catastrophe losses, hard market conditions, and regulatory pressure. How does that affect your delivery priorities for carriers?

**What they're really asking:** Do you understand the insurance business, not just the technology?

**How to answer:**
> "These macro pressures directly shape what carriers ask us to prioritize, and a delivery leader who ignores the business context is going to miss what matters.
>
> In a hard market — where carriers are raising rates, tightening underwriting, and pulling back from CAT-exposed geographies — speed to market matters enormously. A carrier that can file a new rate in 30 days beats one that takes 90. That means PolicyCenter rating and product model work that enables faster regulatory filing is suddenly business-critical, not nice-to-have. I've had carrier clients accelerate their PolicyCenter timelines specifically because they needed to respond to a market shift faster than their legacy system allowed.
>
> Rising CAT losses are driving investment in ClaimCenter analytics and reserves management. The carriers who can predict IBNR accurately and manage reserves dynamically have a capital efficiency advantage. On the Canal Insurance commercial lines program, we built a real-time loss ratio dashboard on Snowflake fed by ClaimCenter data — it became one of the CFO's most-used tools within 60 days of launch.
>
> Regulatory pressure — especially around data privacy, rate filing transparency, and ESG reporting — is creating demand for compliance-first delivery. Every system we build now needs an audit trail, a data governance layer, and the ability to produce state-specific regulatory reports on demand. I build those requirements in from day one, not as afterthoughts."

---

## Q5: How do you see the competitive landscape for Guidewire implementation services evolving?

**How to answer:**
> "Three dynamics are reshaping the competitive landscape.
>
> **Consolidation among mid-tier SIs.** The mid-tier Guidewire partners — the 500–2,000 person insurance-focused firms — are either growing through acquisition or being acquired by larger players. This is good for VM because it creates an opportunity to establish deeper carrier relationships before the market consolidates further.
>
> **Guidewire becoming more prescriptive.** Guidewire's cloud certification program and their emphasis on 'vanilla' implementations is narrowing the space for differentiated delivery methodology. The firms that win will differentiate on carrier knowledge, industry accelerators, and team quality — not on proprietary delivery frameworks. VM's pure-play model is an advantage here.
>
> **GenAI as a delivery differentiator.** The firms that embed GenAI into their delivery tooling — requirements processing, test generation, code assistance, Managed Services analytics — will deliver 20–30% faster at better quality within 2 years. This is not hypothetical. I've seen early versions of this work at EY. The firms that invest in GenAI-augmented delivery now will have a structural cost and speed advantage within 18 months.
>
> My honest view: VM has the right positioning. Pure-play, deep carrier relationships, growing AI practice. The risk is getting out-scaled by firms that combine VM's insurance depth with enterprise-level delivery infrastructure. The answer to that risk is exactly what an AVP role does — build the capability and client base aggressively while the window is open."

---

## Q6: What is your view on InsurTech and how does it affect traditional carrier modernization programs?

**How to answer:**
> "InsurTech created a decade of hype and a smaller-than-expected category of real companies. The carriers who tried to ignore InsurTech and the carriers who tried to wholesale replace their core systems with InsurTech platforms both made mistakes.
>
> The more nuanced reality: InsurTech has permanently changed the expectation bar for digital experience. A policyholder who can file a claim on their phone in 3 minutes has zero patience for a carrier whose online portal requires 15 steps and a fax. That expectation shift is driving investment in Guidewire portal layers, SmartCOMM for real-time correspondence, and self-service capabilities — all areas where VM delivers.
>
> The second InsurTech impact is in underwriting data and rating. InsurTech companies built native integrations with ISO, Verisk, telematics providers, and third-party data sources. Traditional carriers are now trying to catch up — feeding those same data sources into Guidewire's product model to compete on risk segmentation. On the Alfa Insurance engagement, we built a MuleSoft integration layer that pulled real-time telematics data into the PolicyCenter rating engine for their personal auto product. That was driven entirely by competitive pressure from InsurTech players.
>
> So my view: InsurTech didn't replace traditional carriers, but it forced the modernization conversation. We're the beneficiaries of that pressure."

---

## INDUSTRY VOCABULARY — USE NATURALLY IN CONVERSATION

| Term | Context |
|---|---|
| **Hard market** | Rising rates, stricter underwriting — carriers need speed to market |
| **CAT exposure** | Catastrophe-exposed geography driving claims loss volatility |
| **Rate filing** | DOI approval process for premium rate changes |
| **Surplus lines** | Insurance placed with non-admitted carriers for hard-to-place risks |
| **MGA** | Managing General Agent — underwrites on behalf of carriers, often a greenfield Guidewire client |
| **Admitted vs. non-admitted** | Regulatory distinction affecting which DOI rules apply |
| **Loss development** | How claim reserves grow over time as additional information becomes available |
| **Underwriting profit** | Profit from insurance operations (combined ratio < 100%) vs. investment income |
