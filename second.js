"use strict"
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let setUnical = new Set();
function unique(arr) {
	for (let i = 0; i < arr.length ; i++){
		
		 setUnical.add(arr[i]);

	}
}
unique(values);
 setUnical.forEach ((value,valueArgument, setUnical) => {
alert (value);
});

 for (let value of setUnical) alert(value);

