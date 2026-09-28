---
title: SICAM
summary: Sistema de Control de Acceso a Mina que gestiona la acreditación y el ingreso de personal y vehículos en faenas mineras.
company: Sattel Chile
stack: [Python, Django, Edge computing, RFID, PLC, Modbus, Serial]
order: 1
featured: true
cover: ../images/sicam/01.jpg
coverAlt: Sistema de control de acceso a mina
gallery:
  - src: ../images/sicam/01.jpg
    alt: Barrera de control de acceso
    caption: Portal de acceso a mina
  - src: ../images/sicam/portal.jpg
    alt: Portal con barrera, cámara y paneles solares; semáforo en verde con la barrera abierta y en rojo con la barrera cerrada
    caption: Portal autónomo con energía solar — la barrera y el semáforo se activan según la autorización
  - src: ../images/sicam/bus.jpg
    alt: Trabajador acercando una tarjeta TAG de SICAM a un lector RFID en la puerta de un bus
    caption: Validación con tarjeta TAG RFID al subir al bus de acercamiento
  - src: ../images/sicam/dispatch-anonimo.jpg
    alt: Software de despacho de SICAM con portales, solicitudes de acceso, ubicaciones de personas y vehículos por zona y cámara del portal
    caption: Consola de despacho — portales, solicitudes de acceso, ubicaciones por zona y cámara en vivo (nombres difuminados)
  - src: ../images/sicam/Imagen6.png
    alt: Panel web de una empresa contratista con pases vigentes, por vencer y vencidos, y documentos por vencer
    caption: Portal web para contratistas — pases, notificaciones y vencimiento de documentos
  - src: ../images/sicam/solicitud.png
    alt: Solicitud de pase de trabajo con empresa, contrato, zonas y personas con su porcentaje de documentación
    caption: Revisión y aprobación de solicitudes de pase por contrato
  - src: ../images/sicam/scan_pase_persona.png
    alt: Autorización de ingreso impresa, credencial y teléfono móvil con código QR del pase
    caption: Pases y credenciales con código QR, en papel o en el teléfono
  - src: ../images/sicam/Imagen8.jpg
    alt: Pantalla de registro de ingreso en garita con la persona autorizada, su foto y los datos del pase
    caption: Registro de ingresos en garita a partir del código de pase o DNI
  - src: ../images/sicam/PDA.png
    alt: Aplicación móvil mostrando un acceso no autorizado y el registro de conductor y pasajeros de un vehículo
    caption: App móvil — validación de acceso y registro de pasajeros por vehículo
  - src: ../images/sicam/pda2.png
    alt: Terminal portátil Zebra con la ficha de un funcionario
    caption: App de validación en terminal portátil Zebra
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
