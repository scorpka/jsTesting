"use strict"/*
*создаем функцию
*делаем перебор и если это
число то умножаем его на два
*выведем все числовые значения
*/

 let userName = {

		name:"vacili",
		pol:"man",
		vozrast:"35",
		ves:"75",
}

 for (var chisloNaDva in userName){
 				userName[chisloNaDva]= userName[chisloNaDva] -1 +1
				if (  Boolean(userName[chisloNaDva])  != false ){
					userName[chisloNaDva]= 2*userName[chisloNaDva];
					alert(userName[chisloNaDva]);
				}
}