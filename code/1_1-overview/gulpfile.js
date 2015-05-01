var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
  gulp.src('src/*.js')
    .pipe(concat())
    .pipe(gulp.dest('dist/'));
});
