"use strict" 
/*let d;
	
function minChislo(a,b) {
		if (a > b) { d = "a bolshe b";
			 }else if (a < b){ d = "a menshe b";
			 }else	 d ="a ravno b";
	return (d);
}
let pervoeChislo; let vtoroeChislo;
pervoeChislo=prompt("vvedite pervoe chislo",);
vtoroeChislo=prompt("vvedite vtoroe chislo",);
 let abc =minChislo(pervoeChislo,vtoroeChislo);
alert (abc);*/

/*function pow(a,b)
{
	let summaChisel=a**b;
	return summaChisel;
}
let pervoeChislo= prompt("vvedite 1 chislo",);
let vtoroeChislo= prompt("vvedite 2 chislo",);
let stepenChisla= pow(pervoeChislo,vtoroeChislo);
alert(stepenChisla);*/

function ask(question, yes, no) {
  if (+alert("da?",1)){ yes();
  }else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
let d = +alert("privet",12);
alert(d);