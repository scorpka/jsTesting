"use strict"

let string = "my-short-string"; 
function camelize(str){
	let abbc = "";
	let	abc =  str.split("-");
	abc.forEach(function dde(item){

		let mmnp = item[0].toUpperCase();
			item =mmnp + item.slice(1,);
		abbc = abbc + item;
	});
	return abbc;
	}
	
          
alert(camelize(string));





	
	







