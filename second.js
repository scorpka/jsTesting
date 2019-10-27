"use strict"
/*let fruits = ["Яблоко","Aпельсин","Cлива",];
fruits.push("dolbaeb"); //dobovlyaet posledni
fruits.pop(1); //ydalyaet posledni
fruits.shift(); //ydalyaet pervi element
fruits.unshift("molodec"); //dobovlyaet pervi element*/

let styles = ["джаз","Блюз",];
styles.push("Рок-н-ролл");
let lengthStyles = +styles.length *0.5;
lengthStyles =  Math.floor(lengthStyles);
alert(lengthStyles);
styles[lengthStyles] = "Классика";
alert(styles.shift() );
styles.unshift("Реп");
styles.unshift("регги");
alert(styles);







