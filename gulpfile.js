const { src, dest, series } = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require('gulp-sass');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// gulp.task('fileinclude', function() {
//   return gulp.src(['html/index.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./'));
// });

function include() {
  return gulp.src('html/index.html')
  .pipe(fileinclude ({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./'));
}

  // gulp.task('watch', function(){
  //   // gulp.watch('scss/**/*.scss', gulp.series(['sass'])).on('change', browserSync.reload);
  //   gulp.watch('**/*.html', gulp.series(['fileinclude'])).on('change', browserSync.reload)
  // })

function style() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./html/*.html', include).on('change', browserSync.reload);
  gulp.watch('./index.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.include = include;
exports.watch = watch;