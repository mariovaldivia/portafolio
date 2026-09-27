---
title: Dashboard de métricas
summary: Panel casi en tiempo real para visualizar KPIs operativos, alimentado por jobs asíncronos y agregaciones en PostgreSQL.
stack: [PHP, JavaScript, PostgreSQL, Chart.js]
year: 2024
order: 2
featured: true
---

## Contexto

El equipo de operaciones revisaba sus indicadores con reportes manuales que se generaban una vez al día, así que los problemas se detectaban con horas de retraso.

## Qué hice

- Creé jobs programados que calculan agregados por hora y por día y los guardan en tablas de resumen.
- Expuse los agregados mediante endpoints livianos pensados para el frontend.
- Construí el dashboard en JavaScript con gráficos interactivos y filtros por rango de fechas y equipo.

## Retos técnicos

Las consultas sobre la tabla de eventos (millones de filas) eran lentas. Pasé a **agregados incrementales** que solo procesan los eventos nuevos desde la última ejecución, y agregué índices parciales para los filtros más usados.

## Resultado

- Las métricas se actualizan cada pocos minutos en lugar de una vez al día.
- La carga del dashboard quedó por debajo de 300 ms.
- El equipo detecta incidentes operativos durante la misma jornada.
