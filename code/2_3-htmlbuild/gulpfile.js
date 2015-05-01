var gulp = require('gulp');
var concat = require('gulp-concat');
var htmlbuild = require('gulp-htmlbuild');

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(htmlbuild({
      js: htmlbuild.preprocess.js(function (block) {
        block.write('all.js');
        block.end();
      })
    }))
    .pipe(gulp.dest('dist'));
});
