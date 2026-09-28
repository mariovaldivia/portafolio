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
  - src: ../images/sicam/portal.jpg
    alt: Gate with barrier, camera and solar panels; green signal with the barrier up and red signal with the barrier down
    caption: Solar-powered standalone gate — barrier and signal respond to each authorization
  - src: ../images/sicam/bus.jpg
    alt: Worker holding a SICAM TAG card up to an RFID reader on a bus door
    caption: RFID TAG card check when boarding the shuttle bus
  - src: ../images/sicam/dispatch-anonimo.jpg
    alt: SICAM dispatch software showing gates, access requests, people and vehicle locations by zone and the gate camera
    caption: Dispatch console — gates, access requests, locations by zone and live camera (names blurred)
  - src: ../images/sicam/Imagen6.png
    alt: Contractor web dashboard with active, expiring and expired passes and documents about to expire
    caption: Contractor web portal — passes, notifications and document expiry
  - src: ../images/sicam/solicitud.png
    alt: Work pass request showing company, contract, zones and people with their documentation percentage
    caption: Reviewing and approving pass requests per contract
  - src: ../images/sicam/scan_pase_persona.png
    alt: Printed entry authorization, ID badge and mobile phone showing the pass QR code
    caption: Passes and badges with QR codes, on paper or on the phone
  - src: ../images/sicam/Imagen8.jpg
    alt: Gatehouse entry log screen showing the authorized person, their photo and pass details
    caption: Gatehouse entry log from the pass code or ID number
  - src: ../images/sicam/PDA.png
    alt: Mobile app showing a denied access and the driver and passenger check for a vehicle
    caption: Mobile app — access validation and passenger check per vehicle
  - src: ../images/sicam/pda2.png
    alt: Zebra handheld terminal showing an employee record
    caption: Validation app on a Zebra handheld terminal
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
