var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();

gulp.task("sass", function(){
    return gulp.src("scss/**/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({errorLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"));
});

gulp.task("watch", ["sass"], function(){
    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/**/*.scss", ["sass"]).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});