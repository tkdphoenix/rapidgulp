var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var htmlbuild = require('gulp-htmlbuild');
var connect = require('gulp-connect');

// combines js into one file from src/ and puts it all in a file called all.js,
// minifies it, and sends it to dist/
gulp.task('js', function () {
  gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// gets each css file in src/ and minifys it and sends it to dist/
gulp.task('css', function () {
  gulp.src('src/*.css')
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

// compresses all images in src/ and sends them to dist/
gulp.task('images', function () {
  gulp.src('src/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
});

// copies the index.html file in src/ to the dist/ directory and reloads the page
// along with the watch task, this reloads the page with the content when changes are saved
gulp.task('copy', function () {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist/'))
  .pipe(connect.reload());
});

// continuously watches each task in the list to respond when there is a change
gulp.task('watch', function () {
  gulp.watch('src/index.html', ['copy']);
});

// creates the server on port 8000 to view changes to the view
// specifying that you are using livereload
gulp.task('connect', function () {
  connect.server({
    port: 8000,
    root: 'dist/',
    livereload: true
  });
});

// @NOTE: if you want this to run, you will need the HTML comment tags <!-- htmlbuild:js --> AND <!-- endbuild --> 
// around your script tags so that it knows how to parse them into one file 
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

// default task keeps all tasks together so that the command can be run just as "gulp" on CLI
gulp.task('default', ['js', 'css', 'images', 'copy', 'watch', 'connect']);
