var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copy', function () {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist/'))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/index.html', ['copy']);
});

gulp.task('connect', function () {
  connect.server({
    port: 8000,
    root: 'dist/',
    livereload: true
  });
});

gulp.task('default', ['copy', 'watch', 'connect']);
