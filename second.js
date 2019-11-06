"use strict"

function testPalindrom (stringUser) {
		 let j = 0; 

		for (let i = 0; i < stringUser.length; i++){
				  let k = stringUser.length - i-1;
		  if (stringUser[i] == (stringUser[k])){
				j++;
		  }else {alert("your text is not a palindrom"); break;
					}
} if(j == stringUser.length) return alert(`your text - ${stringUser} is palindrom`)};
testPalindrom("anna");

