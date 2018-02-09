'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('sass', function () {
//  return gulp.src('app/scss/**/*.scss')
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('app/css'))
//    .pipe(browserSync.reload({
//     stream: true
//   }));
// });


// gulp.task('sass:watch', function(){
//   gulp.watch('app/scss/**/*.scss', ['sass']);
// });

// gulp.task('watch', ['browserSync','sass'], function () {
 
//  gulp.watch('app/*.html', browserSync.reload); 
//  gulp.watch('app/js/**/*.js', browserSync.reload); 
// });


// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './app'
//     },
//   });
// });

// gulp.task( 'default', [ 'sass:watch' ] );



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch('app/js/*.js').on('change', browserSync.reload); 
  gulp.watch("app/*.html").on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);