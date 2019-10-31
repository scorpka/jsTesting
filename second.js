"use strict"


function printNumbers(from, to) {
	let timeId = setInterval(function abc() {
			for (from = from; from <to; from++){
			alert(from);
						}},
			1000)

timeId;
}

printNumbers(0, 10);