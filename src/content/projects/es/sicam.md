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

En las faenas mineras, controlar quién y qué entra al sitio es crítico para la seguridad y el cumplimiento. Cada día ingresan trabajadores propios, contratistas, visitas y vehículos, y cada uno debe tener su documentación al día y un permiso para la zona a la que se dirige.

El proceso de acreditación involucraba a muchos actores: las empresas contratistas que solicitan los pases, el mandante que los aprueba, la garita que registra el ingreso y los portales en terreno que controlan el paso físico. Se necesitaba un sistema que conectara todo el flujo y actuara directamente sobre la infraestructura de acceso.

## Qué hice

Diseñé e implementé SICAM de punta a punta, como una plataforma con varios componentes:

- **Portal web para contratistas** (**Python/Django**): cada empresa registra a sus trabajadores y vehículos, solicita pases de trabajo, de visita o vehiculares, y recibe avisos de pases por vencer y de documentos vencidos.
- **Aprobación de pases**: el mandante revisa cada solicitud por contrato, con las zonas autorizadas, el plazo y el porcentaje de documentación de cada persona, y aprueba o rechaza el pase.
- **Pases y credenciales con código QR**, disponibles impresos o en el teléfono.
- **Portales de acceso autónomos** en terreno, con barrera, semáforo, cámara y lectores **RFID**, alimentados con energía solar y con la lógica desplegada en el borde (**edge computing**). Los periféricos se activan mediante **PLC**, usando los protocolos **Modbus** y **Serial**.
- **Tarjetas TAG RFID**, que también se validan al subir a los buses de acercamiento.
- **Consola de despacho**, que muestra en tiempo real la actividad de cada portal (entradas, salidas y bloqueos), las solicitudes de acceso, la ubicación de personas y vehículos por zona y la cámara en vivo. Desde ella el despachador puede abrir barreras o asignar escoltas.
- **Registro de ingresos en garita**, a partir del código del pase o del DNI.
- **App móvil en terminales portátiles Zebra**, para validar accesos en terreno, mostrar el motivo cuando un acceso no está autorizado y registrar al conductor y a los pasajeros de cada vehículo.

## Retos técnicos

- **Unir software y hardware industrial**: comunicar la plataforma con PLC, lectores RFID, barreras y semáforos a través de protocolos industriales, en un entorno donde la continuidad operacional es clave.
- **Arquitectura multi-tenant**: una sola plataforma para distintos mandantes y faenas, con los datos aislados por cliente y una configuración propia de zonas, portales, tipos de pase, reglas de acreditación e imagen corporativa.
- **Portales en lugares remotos**: equipos alimentados con energía solar y con lógica en el borde, capaces de operar en sitio.
- **Varios canales, una misma regla**: RFID, QR, DNI y la app móvil debían aplicar los mismos criterios de autorización (documentación vigente, zona permitida y plazo del pase).
- **Visibilidad en tiempo real**: mantener actualizada la ubicación de cientos de personas y vehículos por zona para el despachador.

## Resultado

- Acreditación digital de punta a punta: desde la solicitud del contratista hasta el paso físico por el portal.
- Barreras y semáforos que responden automáticamente a cada autorización.
- Visibilidad en tiempo real de cuántas personas y vehículos hay en cada zona de la faena.
- Menos trabajo manual en garita gracias a los pases con QR y a la validación con RFID y dispositivos móviles.
- SICAM pasó a formar parte del catálogo de productos de la empresa y se implementó en faenas mineras de Chile y Perú.
