"use strict"

function Accumulator(startingValue){
	this.value = startingValue ;
	this.read = function(){
		this.chislo1 = +prompt("vvedite 1 chislo",0);
		this.chislo2 = +prompt("vvedite 2 chislo",0);
		this.value =  this.value + this.chislo1  + this.chislo2;

	}

}
let accumulator = new Accumulator(1);
accumulator.read();
alert(accumulator.value);