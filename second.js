"use strict"

 function tickets(massiveNew) {
	let sdacha25 = 0;
 	let sdacha50 = 0;
 	let polychka25 = 0;
 	let polychka50 = 0;
 	
 	for (let i = 0; i < massiveNew.length; i++) {
 			if (massiveNew[i] == 100) {
 				sdacha50 = sdacha50+1;
 				sdacha25 = sdacha25+1;
 			}
 			
 			if (massiveNew[i] == 50) {
 				sdacha25 = sdacha25+1;
 				polychka50 = polychka50 + 1;
 			}
 			
 			if (massiveNew[i] == 25) {
 				polychka25 = polychka25+1;
 			}
 	}
 	
	if (sdacha25 == polychka25 || sdacha25 < polychka25) {
		if (sdacha50 = polychka50 || sdacha50 < polychka50) {
			alert("yes");
		}else alert ("NO. Vasya will not have enough money to give change to 100 dollars");


	}else if (polychka50 != 0 && sdacha50 != 0) { 
		alert ("NO. Vasya will not have enough money to give change to your dollars");
 	 }else if (sdacha50 == 0){
 	 		alert ("NO. Vasya will not have enough money to give change to 50 dollars");
 	 }else alert ("NO. Vasya will not have enough money to give change to 100 dollars");
 	

 	
}
tickets([25,25,50]);
tickets([25, 100]);
tickets([25, 25, 50, 50, 100]);