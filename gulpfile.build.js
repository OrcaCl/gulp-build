/**********************************/
/* Editar con cuidado hacia abajo */
/**********************************/


//Modo de funcionamiento
"use_strict";

//DEPENDENCIAS INICIALES  //

const gulp = require("gulp");

/* Añadir nuevas dependencias acá abajo */

const browsersync = require("browser-sync").create();
const sass = require("gulp-sass");

//CONSTANTES //

const ROOT_PATH = "./*.*";
const APP_PHP = "./app/**/*.php";

const DEV_SCSS_PATH = "./src/styles/**/*.scss";
const DEV_SJS_PATH = "./src/scripts/**/*.js";

const BUILD_CSS_PATH = "./public/assets/css/*.css"





//Función por omisión

/*

A partir de GULP 4 hay que usar funciones para nombrar las posibles tareas a realizar con gulp.
Lo que realiza la tarea va dentro de las llaves. Puede hacer cosas o devolver cosas.


function defaultTask(cb) {
  // place code for your default task here
  cb();
}

Fuera de la función, es necesario realizar un "exports" para que se pueda invocar la tarea desde la consola de comando
usando : gulp nombre_tarea

exports.default = defaultTask

*/

//TAREAS O PROCESOS (TASKS) //

//Función Tarea para la generación de la estructura de directorios inicial de un proyecto MVC con PHP, SASS y GULP
function iniciarProyecto() {
	
return gulp.src('*.*', {read: false})
    .pipe(gulp.dest('./src'))
    .pipe(gulp.dest('./public'))    
    .pipe(gulp.dest('./src/components'))
    .pipe(gulp.dest('./src/pages'))
	  .pipe(gulp.dest('./src/styles'))
	  .pipe(gulp.dest('./src/scripts'))
	  .pipe(gulp.dest('./src/services'))
    .pipe(gulp.dest('./public/assets'))
    .pipe(gulp.dest('./public/assets/images'))
    .pipe(gulp.dest('./public/assets/ext'))
    .pipe(gulp.dest('./public/assets/fonts'))
}

//BrowserSync (Callback) con HTML Estático Solamente
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./"
		},
		port: 808
	});
	done();
}

//Para usar en paralelo con XAMPP y MySQL
function browserSync2(done) {
	browsersync.init({
		proxy:"http://localhost:8080/pwa/",		
		online: false
	});
}

//BrowserSync Reload (callback) 
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

function scss() {
	return gulp
		.src(DEV_SCSS_PATH)
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(gulp.dest(BUILD_CSS_PATH))
		.pipe(browsersync.stream());
}


function atentoEstudios() {
	//gulp.watch(DEV_SCSS_PATH);	
	//gulp.watch(DEV_SJS_PATH, jslint);
	gulp.watch(APP_PHP, browserSyncReload);
	gulp.watch(ROOT_PATH, browserSyncReload);
}

//PROCESOS //

//Selección de Procesos
const iniciarP = gulp.parallel(iniciarProyecto);

/* Añadir nuevos procesos acá abajo */

const servirArchivos = gulp.parallel(atentoEstudios, browserSync2);

//EXPORTS //

//Creador de Carpetas de Archivo.
exports.initP = iniciarP 
