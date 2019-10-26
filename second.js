"use strict"
/*var str = "sanya pidor voobshe pizdoc";
//alert (str.indexOf('pidor'));
alert( str.slice(3, 11) );
alert( str.substr(2, 4) );alert( 'Österreich'.localeCompare('Zealand') ); 
alert( String.fromCodePoint(90) );  Z*/

function ucFirst(str){
	let str0 = str.slice(0,1);
	 str0 = str0.toUpperCase();
	let str1 = str.substr(1,);
	str = str0 + str1;
	return  str;

}
let abc = ucFirst("zdorova");
alert (ucFirst("zdorova"));
 abc = "zdorova";
alert (abc[0].toUpperCase() + abc.slice(1,));

