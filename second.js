"use strict" 
//massive
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
//function unical keys from massive
function unique(arr){
   let storageUni = new Set([]);
        for (let j = 0; j < arr.length; j++) {
                let wword = arr[j];
                storageUni.add(wword); 
        }
        return storageUni; 
}
//execute
console.log(unique(values));
