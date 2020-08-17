//const { src, dest, series } = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require('gulp-sass');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('fileinclude', function(done) {
  return gulp.src(['html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
    done();
});

// gulp.task('browserSync', function() {
//   browserSync.init(["css/*.css", "js/*.js", "scss/.scss"],{
//     server: {
//       baseDir: './'
//     },
//   })
// });

// gulp.task('sass', function() {
//     return gulp.src('scss/**/*.scss')
//       .pipe(sass())
//       .pipe(gulp.dest('css'))
//       .pipe(browserSync.reload({
//         stream: true
//       }))
//   })

  // gulp.task('watch', function(){
  //   // gulp.watch('scss/**/*.scss', gulp.series(['sass'])).on('change', browserSync.reload);
  //   gulp.watch('**/*.html', gulp.series(['fileinclude'])).on('change', browserSync.reload)
  // })

function style() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
}

exports.style = style;
exports.fileinclude = fileinclude;