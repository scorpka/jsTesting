"use strict"

function anagramChecker (firstLetter, secondLetter){
		if (firstLetter.length != secondLetter.length){ 
				 return  alert("second letter is not Anagram for first letter");
				  
		}
		let checkker = 0;
		  for (let	key in firstLetter){ 
			for (let i = 0; i < secondLetter.length; i++){
				if (firstLetter[key] == secondLetter[i]){
						  	checkker = checkker + 1; break;
				}
			}
		}
		 if (checkker == firstLetter.length || checkker > firstLetter.length) alert("vtoroe slovo anagramma pervogo");
}

anagramChecker("zdorova","zdo");
