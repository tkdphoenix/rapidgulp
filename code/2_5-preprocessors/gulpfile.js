var gulp = require('gulp');
var coffee = require('gulp-coffee');
var less = require('gulp-less');

gulp.task('coffee', function () {
  gulp.src('src/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
  gulp.src('src/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['coffee', 'less']);
