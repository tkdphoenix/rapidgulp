var through = require('through2');

module.exports = function gulpCapitalize() {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-capitalize', 'Streams are not supported!'));
      return cb();
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(file.contents.toString(enc).toUpperCase());
    }

    cb(null, file);
  });
};
