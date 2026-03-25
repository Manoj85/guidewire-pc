# Choks Interview — Reference Guides

Quick-reference tables for Guidewire events, EY Marketplace products, GW Cloud, and practical questions.

---

## GUIDEWIRE EVENTS REFERENCE

*(Know these cold if events come up in conversation)*

| Event | What it is | When |
|---|---|---|
| **Guidewire Connections** | Flagship annual conference — product roadmap, partner awards, 3,000+ attendees | Oct/Nov annually (Las Vegas 2025) |
| **Guidewire DEVSummit** | Developer/technical conference — 1,500+ practitioners | May annually (Bengaluru) |
| **Guidewire Insurance Forum (GIF)** | Executive leadership forums — regional editions | Multiple times/year (NA, Europe, APAC) |
| **Guidewire Marketplace Summit** | Partner technology showcase — expanding globally 2026 | Multiple dates/year |
| **InsurPitch / Insurtech Vanguards** | Insurtech startup pitch competition — 59+ startups | London (June), Toronto (Sep) |
| **Guidewire ACE Certification** | Partner and consultant certification program | Ongoing via Guidewire Education |
| **PartnerConnect Program** | Main partner ecosystem — 190+ partners, 23,000+ trained consultants, 250+ specializations | Ongoing |

> **Your involvement:** At EY, Guidewire Connections is attended at PPEDS level (Partners, Principals, Executive Directors). You support that group by contributing materials and content. You track Connections and DEVSummit for product direction and ecosystem developments.

---

## EY GUIDEWIRE MARKETPLACE PRODUCTS — REFERENCE

*(EY has ~13 products on the Guidewire Marketplace. Key ones to know:)*

| Product | What it does |
|---|---|
| **EY IPR360** (Insurance Product Rationalizer 360) | AI-powered product portfolio rationalization — reverse engineers products from policy docs into APD templates. Released Nov 2024. |
| **EY CDA Snowflake Connector** | Makes Guidewire Cloud Data Access (CDA) dataset available in Snowflake — near-real-time change data capture, accelerated pipeline deployment |
| **EY & Databricks Insurance Insights Platform** | Combines EY insurance expertise with Databricks data lakehouse on top of Guidewire data |
| **EY PolicyCenter LOB Accelerators** | Pre-built PolicyCenter configurations for specific lines of business — Inland Marine, Professional Liability, Personal Cyber, Large Farm, and others |

> **Your position:** I am part of the EY Guidewire practice that builds and maintains these marketplace offerings. EY has 2,100+ Guidewire-certified professionals and 550+ EY-built integrations and accelerators. As AI Advisor for the QE practice (TestAI) and part of the IPR360 team, I am directly involved in two of these offerings.

---

## PRACTICAL QUESTIONS — BE READY

**"What is your notice period / when can you join?"**

> "My standard notice period at EY is [X weeks]. I am prepared to honor that fully — I want to transition responsibly and not leave my current engagements exposed. If there is urgency on VM's side, I am open to a conversation about parallel transition planning. What does the timeline look like from your end?"

*(Fill in your actual notice period. Typical EY Senior Manager notice is 4 weeks. Frame it as responsible, not as a delay.)*

---

**"What are your salary expectations?"**

> "I've done my research on the role and I understand the range is competitive for an AVP-level delivery leader in the P&C space. I am currently at [X] at EY including base and bonus. I am open to a conversation that reflects the scope and responsibility of this role — and I'm not going to walk away over a number if this is the right fit."

*(The JD range is $261,250–$281,250. Your EY comp is your anchor. Don't give a specific number first — let them move. If pressed, say the upper end of their range is appropriate given your experience.)*

---

## GUIDEWIRE CLOUD — KNOW THIS IF IT COMES UP

Choks is a Delivery Officer at a firm with Guidewire Cloud Platform specialization. Cloud will come up.

| Topic | What to know |
|---|---|
| **Guidewire Cloud Platform (GWCP)** | SaaS delivery model — Guidewire manages the infrastructure, upgrades, and availability. Carriers get a certified, managed environment. |
| **Mandatory upgrade cadence** | Guidewire Cloud requires carriers to stay current — typically 2 major releases per year. No more skipping versions like on-prem. This is a significant operational change for carriers. |
| **Cloud certification** | Before a carrier goes live on GWCP, the implementation must pass Guidewire's cloud certification — checks for non-compliant Gosu customizations, API usage, performance standards. Heavy customization = certification risk. |
| **Jutro UI framework** | Guidewire's modern front-end framework for cloud. Replaces PCF (legacy). New implementations on cloud use Jutro. Upgrade migrations must plan for PCF → Jutro transition. |
| **Cloud Data Access (CDA)** | Guidewire's mechanism for giving carriers access to their own data in the cloud — via a data lake feed. EY has a Snowflake connector for CDA (EY CDA Snowflake Connector on Marketplace). |
| **Integration Framework / App Events** | Guidewire Cloud's integration model — event-driven, API-first. Replaces older messaging integrations. Partners must build integrations using Guidewire's published APIs and App Events. |
| **APD on Cloud** | APD is the required product design tool on Guidewire Cloud Platform — no more hand-coded product model XML. Mandatory for cloud implementations. |
| **Lifecycle Manager** | Guidewire's CI/CD pipeline tool for cloud — git-based, manages deployments from dev to production. Delivery teams use it instead of manual deployment scripts. |

> **Your cloud angle:** "I am actively working on cloud migration engagements at EY. The shift from on-prem to Guidewire Cloud changes the delivery model fundamentally — mandatory upgrades, APD-only product design, Jutro for UI, Integration Framework for APIs. The carriers who planned for this from the start have smooth migrations. The ones who treated cloud as just 'hosting' get surprised in certification. My cloud migration experience and the 40% Gosu footprint reduction work directly address that certification risk."
