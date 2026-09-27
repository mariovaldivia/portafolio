---
title: Docker toolkit
summary: One-command reproducible development environments for PHP projects, including database, queues and quality tooling.
stack: [Docker, Docker Compose, Bash, Makefile]
year: 2024
order: 3
featured: true
---

## Context

Setting up a local environment could take a full day: mismatched PHP versions, missing extensions and hand-configured databases. Every machine behaved slightly differently.

## What I did

- Defined base Docker images for PHP-FPM with common extensions and optional Xdebug.
- Assembled a `docker-compose` stack with PostgreSQL, a queue broker and a test mail server.
- Wrapped frequent tasks in a `Makefile` (`make up`, `make test`, `make db-reset`).
- Documented the onboarding flow on a single page.

## Technical challenges

File permissions between container and host produced `root`-owned files. I solved it by **mapping the user's UID/GID** at image build time, keeping it compatible with both macOS and Linux.

## Outcome

- Project onboarding went from a day to about 15 minutes.
- "Works on my machine" bugs disappeared.
- The same containers are reused in CI.
