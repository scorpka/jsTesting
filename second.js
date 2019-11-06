"use strict"

let stringUser = "test"; 

function testPalindrom (stringUser) {
		 let j = 0; 

		for (let i = 0; i < stringUser.length; i++){
				  let k = stringUser.length - i-1;
		  if (stringUser[i] == (stringUser[k])){
				j++;
		  }else { alert(stringUser[i]); alert(k);
		}
} if(j == stringUser.length) alert(`your text - ${stringUser} is palindrom`)}
testPalindrom("anna");

