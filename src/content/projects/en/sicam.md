---
title: SICAM
summary: Mine Access Control System that manages accreditation and the entry of personnel and vehicles at mining sites.
company: Sattel Chile
stack: [Python, Django, Edge computing, RFID, PLC, Modbus, Serial]
order: 1
featured: true
cover: ../images/sicam/01.jpg
coverAlt: Mine access control system
gallery:
  - src: ../images/sicam/01.jpg
    alt: Access control barrier
    caption: Mine access gate
---

## Context

At mining sites, controlling who and what enters is critical for safety and compliance. Accrediting personnel and vehicles required a reliable system that worked on site and acted directly on the physical access infrastructure.

## What I did

- Designed and built the system end to end.
- Built the management and accreditation web application with **Python/Django**.
- Identified people and vehicles using **RFID technology**.
- Deployed logic at the edge (**edge computing**) to operate on site.
- Integrated remote activation of peripherals (barriers, signaling) through **PLCs** over **Modbus** and **Serial** protocols.

## Technical challenges

The core of the project was bridging software and industrial hardware: connecting the web application to PLCs and RFID readers over industrial protocols, in a mining environment where operational continuity is key.

## Outcome

Streamlined accreditation at mining sites, with on-site control of personnel and vehicle entry. SICAM became part of the product catalog the company offers in Chile and Peru.
