"use strict"
/*var str = "sanya pidor voobshe pizdoc";
//alert (str.indexOf('pidor'));
alert( str.slice(3, 11) );
alert( str.substr(2, 4) );alert( 'Österreich'.localeCompare('Zealand') ); 
alert( String.fromCodePoint(90) );  Z*/

/*function checkSpam(str){
	if (~str.indexOf('xxx') || ~str.indexOf("viagra") ||  ~str.indexOf("lsd")){
		return "eto spam";
	}else return str;
}

let abc = "ya prishla domoy,viagra vce horosho";
alert(checkSpam(abc));*/

function truncate(str, maxlength){
	let	strLength = str.length ;
	
	if (strLength < maxlength || strLength == maxlength ){
			return str;
	
	} else {
					str = str.substr(0,maxlength) +"...";
					return str;

}
}
alert(truncate("zdorova viblyadki",6));
