"use strict"
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(nashArr){
	let abc = 0;
	for (let value of Object.values(nashArr)) {
			abc = abc + value;
	}
	return abc;
}
alert( sumSalaries(salaries) );