"use strict"


function printNumbers(from, to) {
	let timeId = setInterval(function abc() {
			alert(from);
			from++;
			if (from >= to) clearInterval(timeId);
				},
			1000)

timeId;

}
 setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

printNumbers(0, 10);
setTimeout();