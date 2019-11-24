"use strict" 
//function deleting anagrams
function anagramFilter(arr) {
                
        let whichDelete = "";
        let cloneMass = arr; 
        for (let i=0; i < arr.length; i++) {
                let checker = arr[i]
                for (let n=i+1; n < arr.length; n++){
                        let checker2 = arr[n];
                        
                  let newMake =  wordFilter(checker,checker2)
                if ( newMake == "true") {
                       
                      cloneMass.splice(n,1);
                      cloneMass.splice(i,1);
                }
                };
                 
        }
      return cloneMass;
}
//function finding anagrams
function wordFilter (n,d) {

    let postChecker = 0;
    if ( n.length == d.length){

      for (let j = 0; j < n.length; j++){
       for (let e = 0; e < d.length; e++){  
                                      
         if (n[j] ===  d[e]){
             postChecker = postChecker+1; 
            if (postChecker ==(n.length-1)){
                postChecker = 0;
                    return  "true"; 
             }
         }
                                
       } 
      };  
      postChecker = 0; 
    } 
        
}
//execution
let abc = ["vasya","a","bc","cde","ifjhi","fijhi","vasya"];
alert (anagramFilter(abc));
