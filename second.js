"use strict"
let abc = [];
let summaVsex = 0;
function sumInput() {
		let abcd = 0;
 for  (;abcd < 10;abcd++){ 
	 	
		let importZnacheni = prompt ("vvedite znachenie или пустое значение для выхода.",);
			if (importZnacheni == 0 || importZnacheni== undefined) {
				break;	
			} else {abc.push(importZnacheni); summaVsex = summaVsex + (+importZnacheni);}
	};
}

sumInput();
alert(abc);
alert(summaVsex);




