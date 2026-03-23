# Guidewire Advanced Product Designer (APD)

Research date: 2026-03-23
Sources: Guidewire official documentation, developer blog, APD FAQ

---

## 1. What is APD?

**Advanced Product Designer (APD)** is Guidewire's cloud-native, no-code/low-code insurance product design application. It allows business analysts, product managers, and developers to collaboratively design, simulate, and deploy insurance products into Guidewire PolicyCenter — without requiring developers to manually write all the underlying configuration code.

APD is sometimes referred to historically as "Application Product Designer" but is officially branded as **Advanced Product Designer** in all current Guidewire documentation.

It is a standalone app within the Guidewire Cloud Platform ecosystem, separate from PolicyCenter itself, but tightly integrated with it at the finalization/code-generation step.

---

## 2. What APD Does Inside Guidewire PolicyCenter

APD drives the **product model** layer of PolicyCenter — the layer that defines:

- What lines of business (LOBs) exist (e.g., Personal Auto, Commercial Property)
- What risk objects are on a policy (vehicle, building, driver, location)
- What coverages, conditions, and exclusions are available
- What attributes (fields) underwriters and customers fill in
- What policy terms, limits, and deductibles look like
- How products vary by jurisdiction, brand, channel, or partner (via "editions")

Before APD, all of this was configured manually by developers through Guidewire Studio (the IDE) using XML files and Gosu code. APD replaces the manual creation of these artifacts with a visual design tool that **auto-generates** the XML and code.

After APD generates a product:
- PolicyCenter entities, attributes, typelists, coverages, and UI components are created automatically
- REST API endpoints are auto-generated for digital channel integrations
- The product appears in PolicyCenter and is ready for developer enhancement (rating, rules, forms)

---

## 3. How APD Works: The Three-Phase Process

### Phase 1 — Conceptualize

The product design starts here. There are three entry paths:

**a) Mind Map (XMind)**
- A mind map is a visual tree diagram created in **XMind 8** (a third-party tool)
- It captures the product hierarchy: product > product line > risk objects > coverages > clause terms > attributes
- The mind map is exported and imported into APD to bootstrap the product design
- Mind maps are a starting point; they do not contain rating or rules logic
- Guidewire Marketplace provides GO Product mind maps for common LOBs (Workers Comp, Commercial Inland Marine, Personal Auto, etc.)

**b) Direct development in APD**
- Users build the product structure directly within the APD UI without a mind map

**c) XML/JSON template upload**
- APD supports importing pre-built XML templates
- GO Products from the Guidewire Marketplace come with APD-compatible XML templates
- This is the fastest path for standard LOBs

---

### Phase 2 — Visualize

- Once the product is defined in APD, it can be **visualized in PolicyCenter** before any code is written
- Users simulate policy transactions: submissions, renewals, endorsements
- They can add risk objects, select coverages, and enter data in the PolicyCenter UI
- This is a simulation/preview — not a production product yet
- Stakeholders (underwriters, actuaries, product managers) can walk through the product and validate requirements
- Catches missed requirements early, dramatically reducing rework in downstream development

---

### Phase 3 — Finalize (Code Generation)

This is where APD produces deployable artifacts:

| Artifact | What it is |
|---|---|
| **Entities** | Database tables and object definitions for risk objects, coverages, attributes |
| **Typelists** | Dropdown value lists (e.g., vehicle types, state codes) |
| **Product Model XML** | The PolicyCenter product configuration file |
| **UI Configuration** | Screen layouts for PolicyCenter submission/policy UIs |
| **REST APIs** | Auto-generated API endpoints for the product, keyed to Guidewire Integration Gateway |
| **App Events** | Event definitions for downstream integrations |
| **Schema/Mapping** | Database schema and ORM mapping files |

Once generated, the product is **installed** into PolicyCenter via Lifecycle Manager (Guidewire's git-based deployment tool that manages branches in Bitbucket).

---

## 4. Key Concepts: Product Model, Mind Maps, Templates, XML

### Product Model
The product model is the formal definition of an insurance product in PolicyCenter. It specifies:
- **Product lines** (each = one policy line in PolicyCenter)
- **Product editions**: how a product varies by dimension (jurisdiction, brand, channel, partner, organization, business type)
- **Risk objects**: the insured things (vehicle, building, location, driver)
- **Clauses**: coverages, conditions, and exclusions
- **Clause terms**: limits, deductibles, and other coverage modifiers
- **Attributes**: underwriting fields attached to risk objects or policy lines
- **Modifiers**: premium adjustments (schedule, step, experience mods)
- **Schedules**: lists of detailed risk information
- **Blankets**: groupings of multiple risk objects under a single coverage
- **Billing and pricing structures**

### Mind Maps (XMind Format)
- Visual hierarchical diagram of a product's structure
- Built in XMind 8 software
- Exported as `.xmind` file and imported into APD
- Represents: product > lines > risk objects > coverages > terms
- Used as a collaborative requirements tool before development starts
- GO Product mind maps are available on Guidewire Marketplace for 100+ LOBs

### APD Templates (XML)
- An APD template is the XML file APD creates when a product is exported
- Templates can be shared and reused across implementations
- Guidewire Marketplace GO Products ship with APD-compatible XML templates
- Supports rapid startup for standard LOBs without building from scratch

### XML Artifacts Generated by APD
APD produces standard PolicyCenter XML/configuration artifacts including:
- Entity XML files (`.eti`, `.etx`)
- Typelist XML files (`.tti`, `.ttx`)
- Product model configuration XML
- PCF (PageConfigurationFile) XML for UI screens
- Endpoint configuration for REST APIs

---

## 5. Who Uses APD and How

### Business System Analysts (BSAs)
- Lead the Conceptualize and Visualize phases
- Own the mind map creation and product definition in APD
- Walk stakeholders through visualized products in PolicyCenter
- Drive requirement sign-off before developers begin coding

### Product Managers / Insurance Product Owners
- Provide input during product design
- Review product visualizations to confirm coverage structures match market requirements
- Use APD to define product changes post-launch without requiring full developer sprints

### Underwriters and Actuaries
- Participate in visualization sessions to validate user experience
- Provide feedback on field definitions, coverage structures, and deductible/limit ranges

### Developers / Guidewire Studio Engineers
- Receive APD-generated output as a baseline
- Enhance the installed product using PolicyCenter development tools (Guidewire Studio)
- Write Gosu code for underwriting rules, eligibility rules, rating algorithms, and forms integration
- Use git-based Lifecycle Manager for branch management and deployment
- Can regenerate and merge APD output when the product design changes

---

## 6. APD in a Guidewire Implementation Project

### How it fits into the project lifecycle

| Project Phase | APD's Role |
|---|---|
| **Discovery / Requirements** | Product team creates mind maps to capture LOB structure; used as requirements artifact |
| **Product Design / Sprint 0** | BSAs build the product in APD; visualization workshops replace traditional requirements documents |
| **Development Sprint Start** | APD generates code artifacts; developers start with auto-generated baseline instead of blank slate |
| **Sprint Iterations** | APD design is refined; regeneration produces updated artifacts; developers merge changes |
| **UAT / SIT** | Visualized products in PolicyCenter used for early stakeholder testing |
| **Go-Live** | Finalized, fully enhanced products deployed via Lifecycle Manager |

### Benefits in implementation

- **Saves 30-40%+ of development time** on product configuration (entities, UI, APIs)
- **Reduces transcription errors**: product model auto-generated from a single source of truth
- **Accelerates business alignment**: visualization before code means fewer late requirement changes
- **Reduces risk**: no policy data migration required when converting existing products
- **Speeds up new LOB launches**: GO Product templates provide a 6-8 week conversion path
- **Concurrent development**: multiple team members work on different editions in parallel

### Converting Existing Non-APD Products (Guidewire Olos Release, Dec 2025)

Guidewire introduced a **conversion service** for insurers with existing PolicyCenter products not yet on APD:
- Available to PolicyCenter customers on the latest ski-release
- Most monoline products of average complexity convert in **6-8 weeks** including testing
- Process: Analysis → Conversion (tooling reverse-engineers existing definitions) → Validation
- Converted products gain Cloud API generation, visual design interface, and cloud-native capabilities
- **No policy data migration** required — live policies are unaffected
- **No product refiling** required
- Recommended to run with Guidewire Professional Services or an SI partner for the first LOB

---

## 7. APD and Downstream Platform Integration

Once a product is in APD and finalized:

- **Jutro Digital Platform** (Guidewire's frontend framework): Product structure automatically drives digital portal fields and flows
- **Integration Gateway**: Auto-generated REST APIs make product data available to external systems (agents, rating engines, third-party portals)
- **Submission Intake**: APD products feed the intake workflow automatically
- **Data Platform / CDA**: Product entities flow into Guidewire's data layer for analytics

APD becomes the **single source of product truth** — changes cascade downstream in real-time without manual synchronization.

---

## 8. APD Glossary Quick Reference

| Term | Definition |
|---|---|
| APD Template | XML file APD exports; used to share or import products |
| Product Edition | Version of a product defined by dimensions (jurisdiction, brand, channel) |
| Product Line | A unit within a product corresponding to a PolicyCenter policy line |
| Risk Object | The insured entity (vehicle, building, driver) — tangible or intangible |
| Clause | Generic term for coverages, conditions, and exclusions |
| Clause Term | Value specifying extent of a clause (limit, deductible, percentage) |
| Attribute | A specific field/data point on a risk object or policy line |
| Modifier | A factor that adjusts (increases or decreases) premium |
| Schedule | A list of detailed risk object information |
| Blanket | Groups risk objects and coverages under a single coverage |
| Segment | A dimension used to create editions (e.g., jurisdiction, brand) |
| Lifecycle Manager | Git-based tool that manages deployment of Guidewire cloud configuration |
| Installed Product | A product that has been finalized and code-generated into PolicyCenter |
| Visualized Product | A simulated product available for testing but not yet finalized |

---

## Sources

- [Advanced Product Designer | Guidewire](https://www.guidewire.com/developers/developer-tools-and-guides/advanced-product-designer)
- [Learn about Advanced Product Designer App (Official Docs)](https://docs.guidewire.com/cloud/apd/laslenas/create/topics/c_intro.html)
- [APD Glossary (Official Docs — Mammoth Release)](https://docs.guidewire.com/cloud/apd/mammoth/create/topics/c_glossary.html)
- [Using Advanced Product Designer with Development Teams | Guidewire](https://www.guidewire.com/resources/blog/developers/using-advanced-product-designer-with-development-teams)
- [Convert Existing PolicyCenter Products to APD | Guidewire](https://www.guidewire.com/resources/blog/developers/accelerate-your-cloud-transformation---convert-existing-policycenter-products-to-apd)
- [Advanced Product Designer FAQ | Guidewire](https://www.guidewire.com/resources/blog/technology/advanced-product-designer-updates-your-faq-on-the-latest-releases)
- [APD Creating Products PDF — Kufri Release](https://docs.guidewire.com/cloud/apd/kufri/create/pdf/CreatingProducts.pdf)
- [Guidewire Cloud Platform Releases](https://www.guidewire.com/products/technology/guidewire-cloud-platform-releases)
