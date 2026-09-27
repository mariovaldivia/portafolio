---
title: SICAM
summary: Sistema de Control de Acceso a Mina que gestiona la acreditación y el ingreso de personal y vehículos en faenas mineras.
company: Sattel Chile
stack: [Python, Django, Edge computing, RFID, PLC, Modbus, Serial]
order: 1
featured: true
---

## Contexto

En las faenas mineras, controlar quién y qué entra al sitio es crítico para la seguridad y el cumplimiento. La acreditación de personal y vehículos necesitaba un sistema confiable que funcionara en terreno y actuara directamente sobre la infraestructura física de acceso.

## Qué hice

- Diseñé e implementé el sistema de punta a punta.
- Construí la aplicación web de gestión y acreditación con **Python/Django**.
- Identifiqué a personas y vehículos con **tecnología RFID**.
- Desplegué la lógica en el borde (**edge computing**) para operar en sitio.
- Integré la activación remota de periféricos (barreras, señalización) mediante **PLC**, usando los protocolos **Modbus** y **Serial**.

## Retos técnicos

El núcleo del proyecto fue unir el mundo del software con el del hardware industrial: comunicar la aplicación web con PLC y lectores RFID a través de protocolos industriales, en un entorno de faena donde la continuidad operacional es clave.

## Resultado

Una gestión de acreditación optimizada en faenas mineras, con control del ingreso de personal y vehículos en sitio. SICAM pasó a formar parte del catálogo de productos que la empresa ofrece en Chile y Perú.
