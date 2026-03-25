# Choks Interview — Acronyms & Tooltips

Use this section to recall what any acronym means mid-conversation. Know these cold — Choks may use them freely and expect you to keep up.

---

## P&C Insurance Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **PAS** | Policy Administration System | The core platform that manages the full policy lifecycle — quoting, binding, endorsements, renewals, cancellations. Guidewire PolicyCenter is a PAS. |
| **LOB** | Line of Business | A specific category of insurance product — e.g., personal auto, commercial property, workers compensation. Each LOB has its own rating logic and forms. |
| **FNOL** | First Notice of Loss | The initial claim report filed by a policyholder after an incident. ClaimCenter manages FNOL intake. |
| **WC** | Workers Compensation | Insurance covering employee injuries on the job. A distinct LOB with its own state-level regulatory requirements. |
| **DOI** | Department of Insurance | State regulatory body that approves insurance rates, policy forms, and carrier licensing. Rate filings go to the DOI. |
| **EOB** | Explanation of Benefits | Document sent to policyholders detailing what was covered and what the carrier paid. Common in health; used occasionally in P&C context. |
| **SME** | Subject Matter Expert | A domain expert — e.g., a WC underwriting SME, a ClaimCenter configuration SME. You'll reference SMEs when explaining how you gather requirements. |
| **CAT** | Catastrophe | Large-scale loss events (hurricanes, wildfires, floods) that create sudden claims spikes. CAT exposure affects carrier geography and pricing strategy. |
| **MGA** | Managing General Agent | An intermediary that underwrites policies on behalf of a carrier. Often a greenfield Guidewire client — they need a PAS but don't have one yet. |
| **IBNR** | Incurred But Not Reported | Claims that have occurred but haven't been formally filed yet. Carriers must estimate and reserve for IBNR. |
| **Combined Ratio** | — | (Losses + Expenses) ÷ Premiums. Below 100% = underwriting profit. Above 100% = underwriting loss. Core carrier financial metric. |

---

## Guidewire Platform Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **GW** | Guidewire | Guidewire Software — the P&C core systems vendor. Products: PolicyCenter (PC), BillingCenter (BC), ClaimCenter (CC). |
| **PC / BC / CC** | PolicyCenter / BillingCenter / ClaimCenter | The three Guidewire suite products. PC = policy admin, BC = billing & collections, CC = claims. |
| **GWCP** | Guidewire Cloud Platform | SaaS delivery model for Guidewire. Guidewire manages infrastructure, upgrades, and availability. All new implementations are on GWCP. |
| **APD** | Advanced Product Designer | Guidewire's visual cloud-native tool for product model design. Replaces hand-coded product XML. Mandatory on GWCP. Three phases: Conceptualize → Visualize → Finalize. |
| **PCF** | Page Configuration Framework | Guidewire's legacy front-end UI framework (on-prem). Being replaced by Jutro in cloud implementations. |
| **Jutro** | — | Guidewire's modern React-based UI framework for cloud. All new GWCP implementations use Jutro. PCF → Jutro migration is part of cloud upgrades. |
| **Gosu** | — | Guidewire's proprietary scripting language used for business rule customization. Niche skill — few resources available. GenAI is accelerating Gosu developer ramp. |
| **CDA** | Cloud Data Access | Guidewire's mechanism for giving carriers access to their own operational data in GWCP — typically via a data lake feed (Snowflake, Databricks). EY has a Marketplace connector for this. |
| **ACE** | Automated Cloud Enablement | Guidewire's tooling/process for cloud certification — validates that an implementation meets GWCP compliance standards before go-live. |
| **GW Connections** | — | Guidewire's annual industry conference. Brings together carriers, SIs, and Guidewire staff. |
| **Lifecycle Manager** | — | Guidewire's CI/CD tool for cloud deployments — git-based, manages code promotion from dev to prod. |

---

## Delivery & Methodology Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **SAFe** | Scaled Agile Framework | Agile framework for large programs — organizes multiple scrum teams into an Agile Release Train (ART). Common on Guidewire programs with 50+ team members. |
| **PI** | Program Increment | SAFe term for a planning cycle — typically 10 weeks covering 5 sprints. PI Planning is the ceremony where all teams align on goals. |
| **SoS** | Scrum of Scrums | Cross-team coordination meeting in SAFe — Scrum Masters from each team sync on dependencies, blockers, and cross-team work. |
| **RTE** | Release Train Engineer | The SAFe equivalent of a program-level Scrum Master — facilitates PI Planning and keeps the ART on track. |
| **SIT** | System Integration Testing | Testing phase where individual components are tested together as a system. Follows unit testing; precedes UAT. |
| **UAT** | User Acceptance Testing | Business stakeholder testing — validates the system does what the business expects. Go/no-go gate before production. |
| **RACI** | Responsible, Accountable, Consulted, Informed | Governance matrix that defines decision rights and communication responsibilities on a project. |
| **RFC** | Request for Change / Change Order | Formal document to approve and fund scope changes beyond the original SOW. |
| **RCA** | Root Cause Analysis | Structured investigation to identify the underlying cause of a defect, incident, or project issue. |
| **RAG** *(status)* | Red / Amber / Green | Project status indicator. Green = on track, Amber = at risk, Red = in trouble. Different from RAG (AI). |
| **SLA** | Service Level Agreement | Contractual performance commitments — e.g., P1 incident response within 1 hour, 99.5% uptime. Core to Managed Services contracts. |
| **MoSCoW** | Must / Should / Could / Won't | Prioritization framework for backlog triage. Used in scope recovery conversations with clients. |
| **SOW** | Statement of Work | The contractual document defining scope, deliverables, timeline, and commercial terms for an engagement. |
| **P1 / P2** | Priority 1 / Priority 2 | Incident severity levels. P1 = production down or severe business impact. P2 = significant degradation. |
| **KT** | Knowledge Transfer | Structured handoff of project knowledge — from delivery team to Managed Services team, or from outgoing to incoming resource. |

---

## Technology Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **RAG** *(AI)* | Retrieval-Augmented Generation | AI architecture that combines a vector database (for document retrieval) with an LLM (for generation). Used in EY's IPR360 and claims intake automation. |
| **LLM** | Large Language Model | The AI model behind tools like GPT-4, Claude, and Gemini. Powers GenAI use cases in delivery (code gen, requirements, test cases). |
| **FAISS** | Facebook AI Similarity Search | Open-source vector similarity search library — used to build the document retrieval layer in RAG pipelines. Used in EY's IPR360. |
| **ETL** | Extract, Transform, Load | Data pipeline pattern — extract data from source, transform it to target schema, load into destination. Central to data migration on Guidewire programs. |
| **CI/CD** | Continuous Integration / Continuous Deployment | Automated build, test, and deploy pipeline. Guidewire Lifecycle Manager is the CI/CD tool on GWCP. |
| **IaC** | Infrastructure as Code | Managing cloud infrastructure (servers, networking, storage) through code files rather than manual configuration. |
| **API** | Application Programming Interface | Mechanism for systems to communicate. Guidewire Cloud uses REST APIs and App Events for all integrations. |
| **GenAI** | Generative AI | AI that generates content — code, text, test cases, requirements. The technology behind GitHub Copilot, Azure OpenAI, EY's TestAI. |

---

## Business & Commercial Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **P&L** | Profit and Loss | Financial statement showing revenue, costs, and margin. At AVP, you own P&L for your engagement portfolio. |
| **WIP** | Work in Progress | Delivered work not yet billed or recognized as revenue. WIP management is part of engagement financial hygiene. |
| **NPS** | Net Promoter Score | Client satisfaction metric — "how likely are you to recommend us?" Used in post-go-live surveys and Managed Services QBRs. |
| **RFP** | Request for Proposal | Formal competitive bid process initiated by a carrier when selecting a vendor. Winning without an RFP (through trust) is the goal. |
| **KPI** | Key Performance Indicator | Measurable metric tied to a business or delivery objective — e.g., sprint velocity, P1 resolution time, utilization rate. |
| **TCO** | Total Cost of Ownership | Full cost of acquiring, implementing, and operating a system over its lifetime — including licenses, implementation, and support. |
| **T&M** | Time and Materials | Commercial model where the client pays for actual hours worked. Contrasts with fixed-price. |
| **QBR** | Quarterly Business Review | Strategic review meeting with client leadership — not a project status call. Used to surface upsell opportunities and deepen relationships. |

---

## Org & Role Terms

| Acronym | Full Form | What it means |
|---|---|---|
| **AVP** | Associate Vice President | The role you are interviewing for at VM. Leadership level below VP — owns a portfolio of accounts, P&L accountability, and practice growth. |
| **SI** | System Integrator | A consulting firm that implements software on behalf of clients. EY, Deloitte, Accenture, VM are all SIs in the Guidewire ecosystem. |
| **PPEDS** | Partners, Principals, Executive Directors | EY's senior leadership tier. The group that attends Guidewire Connections and similar executive-level events. You supported this group with preparation materials. |
| **HM** | Hiring Manager | The person conducting the interview and making the hire decision — Choks in this case. |
| **EY** | Ernst & Young | Your current employer. One of the Big 4 professional services firms. Global Guidewire Alliance partner. |
| **VM** | ValueMomentum | The company you are interviewing with. Pure-play P&C insurance technology firm — implementations, Managed Services, AI platform (iFoundry). |
