---
title: Metrics dashboard
summary: Near real-time dashboard for operational KPIs, powered by asynchronous jobs and PostgreSQL aggregations.
stack: [PHP, JavaScript, PostgreSQL, Chart.js]
year: 2024
order: 2
featured: true
---

## Context

The operations team tracked its KPIs through manual reports generated once a day, so problems were detected hours late.

## What I did

- Built scheduled jobs that compute hourly and daily aggregates into summary tables.
- Exposed those aggregates through lightweight endpoints designed for the frontend.
- Built the dashboard in JavaScript with interactive charts and filters by date range and team.

## Technical challenges

Queries over the events table (millions of rows) were slow. I switched to **incremental aggregates** that only process events added since the previous run, and added partial indexes for the most common filters.

## Outcome

- Metrics refresh every few minutes instead of once a day.
- The dashboard loads in under 300 ms.
- The team now catches operational incidents the same day.
