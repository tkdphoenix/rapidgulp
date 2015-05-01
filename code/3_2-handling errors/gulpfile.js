// gulpfile.js
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

function handleError (error) {
  console.log(error);
  this.emit('end');
}

gulp.task('coffee', function () {
  return gulp.src('src/*.coffee')
    .pipe(coffee())
    .on('error', handleError)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['coffee'], function () {
  gulp.watch('src/*.coffee', ['coffee']);
});
