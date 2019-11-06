"use strict"

function executeConsole (n) { 
	let	textOur= 0;
		  for (let j= 0; j<n; j++){
		  	if (j % 3 == 0 && j % 5 == 0 ){
					 textOur = textOur + "fizzbuzz";
		  		}else if (j % 3 == 0) {
					 textOur = textOur + "fizz";
		  		}else if (j % 5 == 0){ 
						  textOur = textOur +("buzz");}else { textOur = textOur + j;

				}
		  }
	console.log(textOur);		
		 
}

executeConsole (10);
