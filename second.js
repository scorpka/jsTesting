"use strict"
let obj2 = {
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
