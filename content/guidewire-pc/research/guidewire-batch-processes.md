# Guidewire InsuranceSuite — Batch Processes & Transaction Impact

*Reference guide for PolicyCenter, BillingCenter, and ClaimCenter batch jobs — what they do, what they create, and how they cascade across centers.*

**Impact levels:**
- **[High]** — Creates, modifies, or cancels financial transactions. Failures have immediate operational and financial consequences.
- **[Medium]** — Modifies routing, assignment, status, or workflow. May affect financial outcomes indirectly.
- **[Low]** — Administrative or reporting only. No direct financial transaction created or modified.

---

## Cross-Center Batch Dependencies

Batch processes are tightly interdependent. A single event cascades:

```
PolicyCenter renewal batch creates new PolicyPeriod
  → BillingCenter invoice generation batch creates first installment
    → If unpaid: delinquency batch fires
      → Cancellation instruction back to PolicyCenter
        → Terminates active coverage
          → May invalidate active ClaimCenter coverage lookups
```

Understanding these chains is critical for scheduling batch windows and troubleshooting transaction failures.

---

## 1. PolicyCenter — Batch Processes

| Batch Process | What It Does | Transaction Impact | Impact |
|---|---|---|---|
| **Renewal batch** | Scans expiring policies; auto-initiates renewal jobs based on pre-renewal direction rules | Creates new PolicyPeriod entities; triggers billing instructions to BillingCenter for the new term | **[High]** |
| **Cancellation batch** | Processes pending non-payment or underwriting cancellations after grace periods expire | Terminates active policy; triggers pro-rata or short-rate return premium; signals BillingCenter to void outstanding invoices | **[High]** |
| **Policy audit batch** | Initiates final audits at policy expiration for auditable lines (Workers' Comp, GL) | Adjusts earned premium; generates additional premium or return premium transactions | **[High]** |
| **Quote expiry batch** | Automatically withdraws or expires quotes past their validity period | Closes open job records; no financial transaction; clears submission pipeline | **[Low]** |
| **Producer change batch** | Applies mid-term producer/agent reassignments across multiple policies simultaneously | Updates commission routing in BillingCenter; affects agent commission calculations | **[Medium]** |
| **Autopilot workflow batch** | Drives automated policy workflow steps (auto-quoting renewals, auto-binding within underwriting rules) | Advances job state; triggers rating, issuance, and downstream billing events without manual intervention | **[High]** |

**Key notes:**
- Renewal and Cancellation batches are the highest-volume jobs — generate the most downstream BillingCenter transactions
- Autopilot Workflow batch can auto-bind renewals within underwriting tolerance bands — removes manual touchpoints entirely
- Policy Audit batch is specific to auditable LOBs (WC, GL) — can generate significant additional or return premium at expiry

---

## 2. BillingCenter — Batch Processes

BillingCenter batches are the most time-sensitive in the suite — delays can directly interrupt cash flow and trigger erroneous cancellations.

| Batch Process | What It Does | Transaction Impact | Impact |
|---|---|---|---|
| **Invoice generation batch** | Generates invoices per billing plan (monthly, quarterly, annual installments) | Creates charge records and invoice items; sends invoice notices via preferred delivery method | **[High]** |
| **Invoice due date batch** | Marks invoices as due on scheduled dates; triggers payment collection workflows | Moves invoices to 'Due' status; initiates EFT/ACH payment pulls or sends paper notices | **[High]** |
| **Delinquency batch** | Identifies overdue accounts past grace period; initiates delinquency plans (notices, lapse, cancellation) | Triggers cancellation instructions back to PolicyCenter; may suspend coverage; creates delinquency workflow | **[High]** |
| **Commission calculation batch** | Calculates agent/producer commissions based on collected premiums per billing plan rules | Creates commission payment transactions; disburses to agent accounts | **[Medium]** |
| **Unapplied funds batch** | Reviews suspense or unapplied payments; attempts automatic allocation to open charges | Resolves payment-to-charge mismatches; reduces aged receivables; may clear delinquency status | **[Medium]** |
| **Payment reconciliation batch** | Matches bank lockbox/EFT receipts against expected payments; flags exceptions for manual review | Posts confirmed payments; creates trouble tickets for unmatched exceptions; feeds general ledger | **[High]** |
| **Disbursement batch** | Processes refunds and return premiums (after cancellation or audit adjustment) | Issues credit/refund transactions; triggers check printing or EFT disbursements | **[Medium]** |

**Key notes:**
- Invoice Generation and Invoice Due Date are **distinct but sequential** — both must run correctly for premium collection to succeed
- **Delinquency batch has the most severe cross-center impact** — it can instruct PolicyCenter to cancel active coverage and signal ClaimCenter of policy status change
- Payment Reconciliation is critical for period-end close — unresolved exceptions delay GL posting and financial reporting
- Unapplied Funds batch acts as a safety net — prevents suspense balances and can auto-resolve delinquencies from misdirected payments

---

## 3. ClaimCenter — Batch Processes

ClaimCenter batches manage the claims financial lifecycle. Claim payments do **not** route through BillingCenter — all disbursement transactions remain within ClaimCenter.

| Batch Process | What It Does | Transaction Impact | Impact |
|---|---|---|---|
| **Reserve aging batch** | Reviews open reserves against claim activity; flags stale or inadequate reserves for adjuster review | May trigger reserve changes and financial adjustments; impacts loss ratio and IBNR reporting | **[Medium]** |
| **Check issuance batch** | Bundles approved claim payments; sends to external check-printing or EFT payment systems | Converts approved payment requests into issued checks or EFT transfers; marks transactions as 'Issued' | **[High]** |
| **Claim closure batch** | Auto-closes inactive claims that meet configured dormancy thresholds | Releases remaining open reserves to zero; closes exposures; impacts reserve runoff financials and actuarial data | **[High]** |
| **Subrogation batch** | Identifies claims eligible for subrogation pursuit; creates workflow tasks for recovery teams | Creates recovery transactions when funds received; reduces net paid loss on the claim record | **[Medium]** |
| **Statistical reporting batch** | Extracts claim financials (incurred, paid, reserved) for statutory reporting (NAIC, ISO, state regulators) | Read-only aggregation; no direct transaction change; mandatory for regulatory compliance | **[Low]** |
| **Litigation/diary batch** | Scans open claims for missed diary dates or litigation milestones; escalates via activity assignments | Creates activity records and adjuster reassignments; no financial transaction; drives critical workflow | **[Low]** |

**Key notes:**
- **Check Issuance batch is the primary claim payment mechanism** — failures directly delay claimant funds and may trigger regulatory reporting obligations
- **Claim Closure batch zeros all open reserves** — direct impact on the insurer's carried liability and IBNR calculations used by actuaries
- **Statistical Reporting is read-only but mandatory** — state and NAIC filing failures require manual data extraction as fallback
- Subrogation batch improves loss ratio when recovery funds are received — reduces net paid losses on the applicable LOB

---

## Interview Application

When Choks asks about batch processing, program governance, or go-live readiness — reference the cross-center dependency chain. Specifically:

- **Go-live readiness** → validate all High-impact batches in a staging environment before cutover; delinquency and invoice batches run first night
- **Data migration** → renewal batch will fire immediately on migrated policies; ensure PolicyPeriod records are valid and BillingCenter billing plans are correctly associated
- **WC programs** → Policy Audit batch is critical; carriers often discover premium adjustment exposure only when the first post-go-live audit batch runs
- **Post go-live monitoring** → Check Issuance and Payment Reconciliation batch failures are the two most common causes of post-go-live escalations
