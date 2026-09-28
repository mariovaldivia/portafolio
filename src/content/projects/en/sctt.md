---
title: SCTT
summary: Train Traffic Control System that shows the location of every unit and convoy on Codelco El Salvador Division's railway network on a digital map.
company: Sattel Chile
year: 2014
stack: [Python, Django, HTML, CSS, PostgreSQL, C#, WPF, RFID, PLC communication]
order: 4
featured: true
cover: ../images/sctt/sctt.png
coverAlt: Digital railway network map in SCTT Dispatch
gallery:
  - src: ../images/sctt/sctt.png
    alt: SCTT Dispatch showing the network map, train markers and notifications panel
    caption: SCTT Dispatch — network map with trains, readers and track-switch notifications
  - src: ../images/sctt/mapa.png
    alt: Overview of the full railway network in SCTT Dispatch
    caption: Network overview, from the yard to the mine interior
  - src: ../images/sctt/home.png
    alt: SCTT web application home page with latest positions and equipment under maintenance
    caption: Web application — latest positions, trains and equipment under maintenance
  - src: ../images/sctt/tren.jpg
    alt: Field equipment installed for train detection and track-switch and signal activation
    caption: Field equipment installed for train detection and track-switch and signal activation
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

- **SCTT Dispatch**, the desktop operations application, built with **C# and WPF**. It runs on one of the consoles in the dispatch center and shows a zoomable network map with train and equipment positions, field markers, each train's makeup (locomotive, rear car and wagons), track-switch notifications and the status of the primary and secondary servers.
- **SCTT web application**, built with **Python/Django**, HTML and CSS on the same **PostgreSQL** database, with modules for reports, map, trains, equipment, operators, markers and users. Its home page summarizes the latest recorded positions and equipment under maintenance.

On top of that, I:

- Detected trains and equipment passing checkpoints on the network with **RFID** readers.
- Integrated those readings with assigned routes to **switch tracks automatically** through **PLC communication**.
- Logged every movement on the network to PostgreSQL, creating a searchable history of operations.

## Technical challenges

The main challenge was **data consistency**: if two consoles could change the network state at the same time, their changes could conflict. That's why SCTT Dispatch only operates from a single primary console, which centralizes every change, while the second console stays on **standby** in case the primary one fails.

The system also had to automate critical decisions, such as track switching, while keeping the dispatcher in control of operations.

## Outcome

- The dispatcher gets independent confirmation of every train's position, without relying on radio alone.
- The mimic board was replaced by a digital map that records every movement on the network.
- Less room for human error thanks to automated track switching.
- Standardized dispatch procedures.
