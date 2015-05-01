var gulp = require('gulp');
var capitalize = require('./gulp-capitalize');

function handleError(error) {
  console.log(error);
  this.emit('end');
}

gulp.task('default', function () {
  return gulp.src('*.txt')
    .pipe(capitalize())
    .on('error', handleError)
    .pipe(gulp.dest('dist'));
});
