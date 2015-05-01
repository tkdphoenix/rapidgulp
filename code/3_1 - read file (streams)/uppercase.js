var fs = require('fs');

var input = fs.createReadStream('doc.txt');

var output = fs.createWriteStream('doc-uppercase.txt');

input.on('readable', function () {
  output.write(input.read().toString().toUpperCase());
});

input.on('end', function () {
  output.end();
});
