# Guidewire InsuranceSuite — Centers Reference

*Quick reference for PolicyCenter, BillingCenter, and ClaimCenter — transaction types, key concepts, and cross-center integration.*

---

## How the Three Centers Relate

> **PolicyCenter** defines *what's covered*. 
> **ClaimCenter** handles *what happened*. 
> **BillingCenter** manages *how money moves.*

- PolicyCenter passes billing instructions to BillingCenter when a policy is bound or changed
- ClaimCenter looks up coverage details from PolicyCenter at FNOL
- Claim payments stay **within ClaimCenter** — they do not route through BillingCenter
- Claim recoveries / subrogation proceeds may create financial entries that interact with BillingCenter

---

## PolicyCenter — Policy Transactions

PolicyCenter drives the product model, rating algorithms, and underwriting rules that govern all policy transactions.

| Transaction | What It Is |
|---|---|
| **Submission** | New business coming in — a quote and application |
| **Policy Change (Endorsement)** | Modifies an in-force policy mid-term |
| **Renewal** | Re-issues the policy at expiration |
| **Cancellation** | Terminates coverage (non-payment or underwriting) |
| **Reinstatement** | Restores a cancelled policy |
| **Rewrite** | Restructures or replaces an existing policy |

**Key concepts:** product model, rating algorithms, underwriting workbench, WC classification and experience rating, policy lifecycle management.

---

## ClaimCenter — Claim Transactions

ClaimCenter covers the full claim lifecycle from FNOL through closure. Bundles ensure data consistency — if an error occurs mid-update, all related changes roll back.

| Stage | What Happens |
|---|---|
| **FNOL** | First Notice of Loss — adjuster captures loss details and policy reference |
| **Exposure creation** | Each coverage involved in the loss gets its own exposure record |
| **Reserve setup** | Estimated payout is set against each exposure |
| **Claim adjudication** | Coverage verified, liability assessed, payments approved |
| **Check / payment** | Issued directly from ClaimCenter (not via BillingCenter) |
| **Claim closure** | Remaining reserves zeroed; exposures closed |

**Key concepts:** FNOL intake, adjuster workflow, reserves management, IBNR (Incurred But Not Reported), subrogation, auto and WC claim lifecycle, litigation management.

> **Claim payments do not route through BillingCenter.** All disbursement transactions remain within ClaimCenter.

---

## BillingCenter — Billing Transactions

BillingCenter manages the financial side of the policy lifecycle — premium collection, invoicing, delinquency, and agent commissions.

| Transaction | What It Is |
|---|---|
| **Invoice generation** | Creates invoices per billing plan (monthly, quarterly, annual) |
| **Payment receipt & allocation** | Applies policyholder payments to open charges |
| **Delinquency management** | Grace period expiry → notices → lapse → cancellation instruction to PolicyCenter |
| **Agent commissions** | Calculated and disbursed based on collected premiums |
| **Return premium / refund** | Issued after cancellation or audit adjustment |
| **Cancellation billing** | Voids outstanding invoices when PolicyCenter terminates a policy |

**Key concepts:** installment billing, agency bill vs. direct bill, WC payroll-based billing, EFT/ACH, unapplied funds, payment reconciliation, period-end close.

---

## Cross-Center Integration — Critical Chain

A single event can cascade across all three centers:

```
PolicyCenter renewal batch
  → BillingCenter invoice generation batch creates first installment
    → If unpaid: delinquency batch fires
      → Cancellation instruction sent back to PolicyCenter
        → PolicyCenter terminates coverage
          → ClaimCenter coverage lookup may return inactive policy
```

This chain is why batch window sequencing and integration testing across all three centers is non-negotiable on any Guidewire program.

---

## Personal Lines — Current State Assessment

Before any configuration work starts on a personal lines engagement, assess the carrier's current financial position:

| Metric | What to Establish |
|---|---|
| **States licensed and serving** | Which states are in scope; regulatory requirements per state |
| **Written premium vs. earned premium** | Total revenue picture; unearned premium reserve exposure |
| **Return premium** | Volume of mid-term cancellations and pro-rata returns; impacts BillingCenter disbursement |
| **Unpaid premium aging** | Outstanding balances; delinquency profile; cancellation exposure |
| **Loss ratio by line** | Earned premium vs. incurred losses; actuarial adequacy signal |

This diagnostic directly shapes configuration scope, data migration risk, and integration priorities.

---

## Workers' Compensation — Key Differences

WC operates differently from personal lines in several important ways:

- **Auditable line** — final premium determined post-expiry based on actual payroll audit (not estimated at binding)
- **State-specific regulation** — each state has its own benefit schedules, fee schedules, and classification codes (NCCI in most states)
- **Policy Audit batch** — runs at expiry to adjust earned premium; can generate significant additional or return premium
- **ClaimCenter WC workflow** — medical bill processing, wage replacement tracking, vocational rehabilitation activities, litigation management
- **BillingCenter WC billing** — payroll-based installments, audit billing at expiry

---

*Reference: Guidewire Training materials, Cloud Foundation documentation, QualiZeal integration testing guides.*
