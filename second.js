"use strict"

/*
*create function Calculator
*create advancing function
*execute
*/

//функции
function calculate() {
	let firstOfNumber, secondOfNumber;
	for (let abc = 0; abc != 10; abc++){
		
		 firstOfNumber = prompt("введите 1 число",);

		
		if ((firstOfNumber - 1 + 1) ==  firstOfNumber) {
				break;
				
		};
			confirm("vvedite chislo!"); 
	}	
	for (let abc = 0; abc != 10; abc++){
		
			secondOfNumber = prompt("введите 2 число",);
		
		if ((secondOfNumber - 1 + 1) ==  secondOfNumber) {
				break;
				
		};
	
	}
return  (+firstOfNumber + +secondOfNumber);
}

//вывод
let SummCalculator = calculate();
alert (SummCalculator);