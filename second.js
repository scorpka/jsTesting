"use strict"

function sum(a){
	let abc = a;
	return function sum(b){
	return abc + b;
	}
}
alert(sum(-4)(1));
