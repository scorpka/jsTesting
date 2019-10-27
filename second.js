"use strict"
let arr = [1, -2, 3, 4, -9, 6];
let sumChisel = 0;
function getMaxSubSum() {
	let i = arr.length;
	let s4etchik = 0;
	
	for (i= i-1;i != -1 ; i--){
		sumChisel = sumChisel + arr[i];
		if (arr[i] >= 0) {
			s4etchik = s4etchik+1;
		}
	}
	if (s4etchik == 0){return sumchisel = 0;
	}else return sumChisel;
}
getMaxSubSum();
alert(sumChisel);


