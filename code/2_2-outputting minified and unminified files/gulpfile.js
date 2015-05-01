var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
  gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist'));
});
