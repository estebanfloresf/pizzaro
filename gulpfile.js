"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  // 1. Where is my scss file
  return (
    gulp
      .src("app/scss/**/*.scss")
      // 2. Pass that scss to the compiler
      .pipe(sass().on("error", sass.logError))
      // 3. where do we save the compiled CSS?
      .pipe(gulp.dest("app/css"))
      // 4. Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  gulp.watch("app/scss/**/*.scss", style);
  gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
  gulp.watch("app/*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
