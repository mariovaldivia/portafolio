---
title: SCTT
summary: Sistema de Control de Tráfico de Trenes que muestra en un mapa digital la ubicación de cada equipo y convoy del circuito ferroviario de Codelco División El Salvador.
company: Sattel Chile
year: 2014
stack: [Aplicación de escritorio, Aplicación web, Base de datos, Automatización]
order: 4
featured: true
cover: ../images/sctt/sctt.png
coverAlt: Mapa digital del circuito ferroviario en SCTT Dispatch
gallery:
  - src: ../images/sctt/sctt.png
    alt: SCTT Dispatch con el mapa del circuito, marcadores de trenes y panel de notificaciones
    caption: SCTT Dispatch — mapa del circuito con trenes, lectores y notificaciones de cambios de línea
  - src: ../images/sctt/mapa.png
    alt: Vista general del circuito ferroviario completo en SCTT Dispatch
    caption: Vista general del circuito, desde el sector patio hasta el interior mina
  - src: ../images/sctt/home.png
    alt: Página de inicio de la aplicación web de SCTT con últimas posiciones y equipos en mantención
    caption: Aplicación web — últimas posiciones, trenes y equipos en mantención
---

## Contexto

En el circuito ferroviario de Codelco División El Salvador, el despachador conocía la posición de los trenes principalmente por lo que informaban los operadores por radio, y la seguía en un tablero mímico físico. Eso dejaba espacio a errores humanos, no quedaba un registro de los movimientos y los procedimientos variaban entre turnos.

El SCTT se diseñó con cinco objetivos:

- Apoyar al despachador en el monitoreo de trenes, como confirmación de la posición que informa el operador por radio.
- Reemplazar el tablero mímico por un mapa digital respaldado por bases de datos que registre cada movimiento del circuito.
- Minimizar posibles errores humanos.
- Automatizar tareas como la activación de cambios de línea según las lecturas y rutas asignadas.
- Estandarizar el procedimiento de trabajo.

## Qué hice

Desarrollé un sistema compuesto por dos aplicaciones:

- **SCTT Dispatch**, la aplicación de escritorio de operación. Se ejecuta en una de las consolas del módulo de despacho y muestra el mapa del circuito ferroviario con zoom, la posición de trenes y equipos, marcadores en terreno, la composición de cada tren (locomotora, culatero y carros), notificaciones de los cambios de línea y el estado de los servidores principal y secundario.
- **Aplicación web de SCTT**, que trabaja sobre la misma base de datos, con módulos de reportes, mapa, trenes, equipos, operadores, marcadores y usuarios. Su inicio resume las últimas posiciones registradas y los equipos en mantención.

Además:

- Integré las lecturas de posición con las rutas asignadas para **activar automáticamente los cambios de línea**.
- Registré cada movimiento del circuito en base de datos, lo que crea un historial consultable de la operación.

## Retos técnicos

El reto principal fue la **consistencia de los datos**: si dos consolas pudieran modificar el estado del circuito a la vez, los cambios podían entrar en conflicto. Por eso SCTT Dispatch solo opera desde una consola principal, que centraliza todos los cambios, mientras la segunda consola queda como **respaldo** ante cualquier falla de la principal.

También había que automatizar decisiones críticas, como los cambios de línea, sin perder el control del despachador sobre la operación.

## Resultado

- El despachador cuenta con una confirmación independiente de la posición de cada tren, sin depender solo de la comunicación radial.
- El tablero mímico se reemplazó por un mapa digital con registro de cada movimiento del circuito.
- Hay menos margen de error humano gracias a la automatización de los cambios de línea.
- Los procedimientos de despacho quedaron estandarizados.
