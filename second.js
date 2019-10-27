"use strict"
let abc = [];
function sumInput() {
	
 for  (let abcd = 0;abcd < 10;abcd++){ 
	 	
		let importZnacheni = prompt ("vvedite znachenie или пустое значение для выхода.",);
			if (importZnacheni == 0) {
				break;	
			} else abc.push(importZnacheni);
	};
}

sumInput();
alert(abc);




