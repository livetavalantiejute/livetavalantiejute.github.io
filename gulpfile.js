const { src, dest, series } = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require('gulp-sass');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('fileinclude', function() {
  return gulp.src(['html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})


gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  })

  gulp.task('watch', gulp.series('browserSync', 'sass'), function(){
    gulp.watch('scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('**/*.html', gulp.series(['fileinclude']));
  })
