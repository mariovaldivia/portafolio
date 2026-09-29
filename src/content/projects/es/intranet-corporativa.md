---
title: Intranet corporativa
summary: Plataforma web que centraliza la gestión de recursos, la prevención de riesgos y los servicios ofrecidos por la empresa.
company: Sattel Chile
stack: [PHP, Symfony, MySQL, HTML, CSS, JavaScript, jQuery, Bootstrap]
order: 3
featured: true
cover: ../images/intranet-corporativa/social.png
coverAlt: Muro social de la intranet corporativa con publicaciones, trabajador del mes y cumpleaños
gallery:
  - src: ../images/intranet-corporativa/planificacion.png
    alt: Calendario mensual con actividades por cliente y faena, coloreadas según su estado
    caption: Planificación de actividades por cliente y faena, con estados de avance
  - src: ../images/intranet-corporativa/documentos.png
    alt: Listado de documentos ocupacionales de trabajadores con fecha de realización y vencimiento
    caption: Control de documentos ocupacionales y sus vencimientos (prevención de riesgos)
  - src: ../images/intranet-corporativa/social.png
    alt: Muro social con publicaciones de fotos, trabajador del mes, últimos trabajadores y cumpleaños
    caption: Muro social — publicaciones, trabajador del mes y cumpleaños
---

## Contexto

La información y los procesos internos estaban repartidos entre distintas herramientas y áreas. La empresa necesitaba un punto único para gestionar sus operaciones del día a día.

## Qué hice

- Lideré el desarrollo de la intranet corporativa utilizando **Symfony**.
- Centralicé en una sola plataforma web la gestión de diversos procesos de la empresa:
  - gestión de personas, vehículos y herramientas,
  - documentación ocupacional de los trabajadores,
  - servicio técnico: registro, asignación, diagnóstico, informe técnico e informe comercial,
  - planificación y seguimiento de trabajos operativos,
  - procesos de fabricación, ingeniería y comercialización.

## Retos técnicos

Reunir procesos de áreas distintas en un mismo sistema, con un modelo de datos y flujos que sirvieran a todos los equipos sin perder las particularidades de cada uno:

- **Servicio técnico** como un flujo de etapas (registro, asignación, diagnóstico, informe técnico e informe comercial), en el que cada paso depende del anterior y conecta el área técnica con la comercial.
- **Documentación ocupacional** con fechas de vencimiento, para saber a tiempo qué exámenes y licencias deben renovarse.
- **Planificación operativa** por cliente y faena, con estados que reflejan el avance real de cada trabajo.

## Resultado

- Una única plataforma web para la gestión interna, que reemplaza herramientas dispersas.
- Trazabilidad de cada servicio técnico, desde su registro hasta el informe comercial.
- Control centralizado de la documentación de los trabajadores y de sus vencimientos.
- Visibilidad de la planificación y del avance de los trabajos operativos.
- Una base tecnológica propia sobre la cual la empresa puede seguir creciendo.
