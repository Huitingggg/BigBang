var arrayOutput = [];
			
for (var i=1; i<=100; i++) {
	var arrayX;
					
	if (i % 3 == 0 && i % 5 == 0) {
		arrayX = "BIGBANG";
	}
					
	else if (i % 3 == 0) {
		arrayX = "BIG";
	}
					
	else if (i % 5 == 0) {
		arrayX = "BANG";
	}
					
	else {
		arrayX = String(i);
	}
					
	arrayOutput.push(arrayX);
}
			
console.log(arrayOutput);
			
const fs = require('fs');
let JSONstr = JSON.stringify(arrayOutput);
fs.writeFileSync('output.json', JSONstr);
console.log("Array generated has been output to 'output.json' file at " + process.cwd());