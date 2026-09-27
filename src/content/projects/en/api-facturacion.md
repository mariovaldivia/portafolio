---
title: Invoicing API
summary: Multi-tenant API to issue and track invoices, with asynchronous processing and a full audit trail.
stack: [PHP, Symfony, PostgreSQL, Symfony Messenger, Docker]
year: 2025
order: 1
repo: https://github.com/usuario/api-facturacion
featured: true
---

## Context

Several business units issued invoices from spreadsheets and one-off scripts. There was no single source of truth, errors surfaced late and reconciling payments took days.

## What I did

- Designed a multi-tenant REST API in Symfony with per-customer data isolation at the query level.
- Modeled invoices, line items and states in PostgreSQL with constraints that block invalid transitions.
- Moved PDF generation and email delivery to Symfony Messenger workers with retries and a dead-letter queue.
- Added an immutable audit log for every state change.

## Technical challenges

The hardest part was **idempotency**: clients retried requests on timeouts, which created duplicate invoices. I solved it with persisted idempotency keys and a unique database constraint, so a retry always returns the same result.

## Outcome

- Issuing an invoice went from minutes to under a second.
- Duplicate invoices reported by support dropped to zero.
- Monthly reconciliation went from several days to a few hours.
