# gulp-build
Un script para automatizar la generación de carpetas.

//GULPFILE INICIO PROYECTO //

Seguir los siguientes pasos para inicializar un nuevo proyecto

Importante: Si ya tienes instalado GULP, pasa al punto 3

1.- instalar GULP global (Requiere NPM y NODE.js)
> npm install --global gulp-cli

2.- Crear carpeta nueva de proyecto (idealmente dentro de htdocs para mantener orden de proyectos web)
> npx mkdirp nombre_proyecto

3.- Ingresar a carpeta de proyecto
> cd nombre_proyecto

Copiar este archivo en la carpeta, y ejecutar el comando siguiente para crear package.json en directorio de proyecto
> npm init

Agregar el paquete GULP en las dependencias
> npm install --save-dev gulp
> npm install --save-dev gulp-sass (si es que vas a usar la tarea )

Para autogenerar el árbol de directorios, escribir:
> gulp initP


Listo.

Otras Tareas Disponibles (pendientes)

Si no tengo instalado Live server en VSCode o me toca trabajar en un PC diferente, puedo levantar un browsersync de contenido estático con la función BrowserSync o una dinámica con BrowserSync2 (si es que tengo instalado xampp, por ejemplo)

/**
 * BrowserSync
 * npm install browser-sync gulp --save-dev
 *
 * SCSS
 * 
 *
 * CSS Minify
 * Pendiente---
 * JS Lint
 * Pendiente--
 */
