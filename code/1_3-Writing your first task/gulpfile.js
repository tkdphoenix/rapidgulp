var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
  gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('other-js', function () {
  gulp.src(['src/a.js', 'src/b.js'])
    .pipe(concat('two.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'other-js'], function () {
  console.log('You did it!');
});
