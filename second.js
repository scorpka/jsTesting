"use strict"
/*let obj2 = {
  id: 1,
   name: "vasya",
    
   }
 
//obj2.price = [1,2,3];

//alert (obj2.price[1]);
//obj2.kakZvat()=kakZvat();
function kakZvat() {
	alert(this.name);
}
obj2.kakZvat =  kakZvat;
obj2.kakZvat();
*/
var calculator = {
	chislo1: 0,
	chislo2: 0,
	read: function(){
	 	this.chislo1 = prompt("vvedite 1 chislo",);
		 this.chislo2 = prompt("vvedite 2 chislo",);

	},
	sum: function(){
			alert (+this.chislo1 -this.chislo2 +2*this.chislo2);

	},
	mullan: function(){
			alert (this.chislo1 *this.chislo2);

	}
	
}
calculator.read();
calculator.mullan();
calculator.sum();