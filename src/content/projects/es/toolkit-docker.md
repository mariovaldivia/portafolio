---
title: Toolkit Docker
summary: Entornos de desarrollo reproducibles con un solo comando para proyectos PHP, con base de datos, colas y herramientas de calidad.
stack: [Docker, Docker Compose, Bash, Makefile]
year: 2024
order: 3
featured: true
---

## Contexto

Preparar un entorno local podía tomar un día completo: versiones de PHP distintas, extensiones faltantes y bases de datos configuradas a mano. Cada máquina se comportaba de forma ligeramente diferente.

## Qué hice

- Definí imágenes Docker base para PHP-FPM con las extensiones comunes y Xdebug opcional.
- Armé un `docker-compose` con PostgreSQL, un broker de colas y un servidor de correo de prueba.
- Envolví las tareas frecuentes en un `Makefile` (`make up`, `make test`, `make db-reset`).
- Documenté el flujo de onboarding en una sola página.

## Retos técnicos

Los permisos de archivos entre el contenedor y el host generaban archivos con dueño `root`. Lo resolví **mapeando el UID/GID del usuario** al construir la imagen, lo que mantuvo la compatibilidad con macOS y Linux.

## Resultado

- El onboarding de un proyecto pasó de un día a unos 15 minutos.
- Desaparecieron los errores del tipo "en mi máquina funciona".
- Los mismos contenedores se reutilizan en CI.
