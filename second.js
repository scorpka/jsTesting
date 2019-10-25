"use strict"

function Calculator() {
	
	this.read =  function(){
	 	this.chislo1 = prompt("vvedite 1 chislo",0);
		 this.chislo2 = prompt("vvedite 2 chislo",0);

	};
	this.sum = function(){
		return	+this.chislo1 -this.chislo2 +2*this.chislo2;
				
	};
	this.mullan = function(){
		return this.chislo1 * this.chislo2;

	};
	
};
let calculator = new Calculator();
calculator.read();
alert(calculator.mullan());
alert(calculator.sum());