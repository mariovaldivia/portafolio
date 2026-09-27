---
title: API de facturación
summary: API multi-tenant para emitir y hacer seguimiento de facturas, con procesamiento asíncrono y auditoría completa.
stack: [PHP, Symfony, PostgreSQL, Symfony Messenger, Docker]
year: 2025
order: 1
repo: https://github.com/usuario/api-facturacion
featured: true
---

## Contexto

Varias unidades de negocio emitían facturas desde planillas y scripts aislados. No había una fuente única de verdad, los errores se detectaban tarde y conciliar pagos tomaba días.

## Qué hice

- Diseñé una API REST multi-tenant en Symfony, con aislamiento de datos por cliente a nivel de consulta.
- Modelé facturas, líneas y estados en PostgreSQL con restricciones que impiden transiciones inválidas.
- Moví la generación de PDF y el envío de correos a workers de Symfony Messenger, con reintentos y dead-letter queue.
- Agregué una bitácora de auditoría inmutable para cada cambio de estado.

## Retos técnicos

El mayor reto fue la **idempotencia**: los clientes reintentaban peticiones ante timeouts y se generaban facturas duplicadas. Lo resolví con claves de idempotencia persistidas y una restricción única en base de datos, de modo que un reintento siempre devuelve el mismo resultado.

## Resultado

- El tiempo de emisión bajó de minutos a menos de un segundo por factura.
- Desaparecieron los duplicados reportados por soporte.
- La conciliación mensual pasó de varios días a unas horas.
