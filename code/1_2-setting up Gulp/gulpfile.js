var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
  gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});
