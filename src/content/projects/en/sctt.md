---
title: SCTT
summary: Train Traffic Control System that shows the location of every unit and convoy on Codelco El Salvador Division's railway network on a digital map.
company: Sattel Chile
stack: [Desktop app, Web app, Database, Automation]
order: 4
featured: true
---

## Context

On Codelco El Salvador Division's railway network, the dispatcher knew where trains were mainly from what operators reported by radio, and tracked them on a physical mimic board. That left room for human error, produced no record of movements, and let procedures vary between shifts.

SCTT was designed around five goals:

- Support the dispatcher in monitoring trains, confirming the position reported by the operator over the radio.
- Replace the mimic board with a digital map backed by databases that records every movement on the network.
- Minimize human error.
- Automate tasks such as switching tracks based on readings and assigned routes.
- Standardize operating procedures.

## What I did

I developed a system made up of two applications:

- **SCTT Dispatch**, the operations software. It runs on one of the consoles in the dispatch center and displays the railway network map along with a set of tools to monitor and operate the system's components.
- **SCTT web application**, which complements the dispatch console on the same database.

On top of that, I:

- Integrated position readings with assigned routes to **switch tracks automatically**.
- Logged every movement on the network to the database, creating a searchable history of operations.

## Technical challenges

The main challenge was **data consistency**: if two consoles could change the network state at the same time, their changes could conflict. That's why SCTT Dispatch only operates from a single primary console, which centralizes every change, while the second console stays on **standby** in case the primary one fails.

The system also had to automate critical decisions, such as track switching, while keeping the dispatcher in control of operations.

## Outcome

- The dispatcher gets independent confirmation of every train's position, without relying on radio alone.
- The mimic board was replaced by a digital map that records every movement on the network.
- Less room for human error thanks to automated track switching.
- Standardized dispatch procedures.
