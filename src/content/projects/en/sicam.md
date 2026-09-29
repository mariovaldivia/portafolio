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

At mining sites, controlling who and what enters is critical for safety and compliance. Every day, employees, contractors, visitors and vehicles come in, and each of them must have up-to-date documentation and a permit for the zone they are heading to.

Accreditation involved many parties: contractor companies requesting passes, the mine operator approving them, the gatehouse logging entries and the field gates controlling physical access. The site needed a system that connected the whole workflow and acted directly on the access infrastructure.

## What I did

I designed and built SICAM end to end as a platform with several components:

- **Contractor web portal** (**Python/Django**): each company registers its workers and vehicles, requests work, visitor or vehicle passes, and gets alerts about passes and documents about to expire.
- **Pass approval**: the mine operator reviews each request per contract, with authorized zones, validity period and each person's documentation percentage, and approves or rejects the pass.
- **Passes and badges with QR codes**, available on paper or on the phone.
- **Standalone access gates** in the field, with barrier, traffic signal, camera and **RFID** readers, solar-powered and running logic at the edge (**edge computing**). Peripherals are driven through **PLCs** over **Modbus** and **Serial**.
- **RFID TAG cards**, also checked when boarding shuttle buses.
- **Dispatch console** showing real-time activity at each gate (entries, exits and blocks), access requests, people and vehicle locations by zone and a live camera feed. The dispatcher can open barriers or assign escorts from it.
- **Gatehouse entry log**, from the pass code or ID number.
- **Mobile app on Zebra handheld terminals** to validate access in the field, show the reason when access is denied and register each vehicle's driver and passengers.

## Technical challenges

- **Bridging software and industrial hardware**: connecting the platform to PLCs, RFID readers, barriers and signals over industrial protocols, in an environment where operational continuity is key.
- **Gates in remote locations**: solar-powered equipment with edge logic, able to operate on site.
- **Many channels, one set of rules**: RFID, QR, ID number and the mobile app had to apply the same authorization criteria (valid documentation, allowed zone and pass validity).
- **Real-time visibility**: keeping the location of hundreds of people and vehicles by zone up to date for the dispatcher.

## Outcome

- End-to-end digital accreditation: from the contractor's request to the physical pass through the gate.
- Barriers and signals that respond automatically to each authorization.
- Real-time visibility of how many people and vehicles are in each zone of the site.
- Less manual work at the gatehouse thanks to QR passes and validation with RFID and mobile devices.
- SICAM became part of the company's product catalog and was deployed at mining sites in Chile and Peru.
