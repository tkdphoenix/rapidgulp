var fs = require('fs');

// var input = fs.createReadStream("doc.txt");

var output = fs.createWriteStream('doc-uppercase.txt');

// WORKS!
fs.readFile('doc.txt', 'utf8', function(err,data){
	if(err){
		return console.log(err);
	}
	console.log(data);
	output.write(data.toString().toUpperCase());
});

/*DOES NOT WORK!!!
input.on('readable', function(){
	output.write(input.read().toString().toUpperCase());
});

input.on('end', function(){
	output.end();
});
*/