"use strict"
//https://www.codewars.com/kata/52742f58faf5485cae000b9a
function formatDuration (time) {
	//if now
	if (!time ) {
	return "now";
}
//let year, day, hour, minute, second
	if (time > 31536000 || time == 31536000) {
		var ostatok = time % 31536000;
		var year = (time -ostatok) / 31536000;
	}else {var year = 0; var ostatok = time}

	if ((time - year * 31536000) > 86400 || (time - year * 31536000) == 86400) {
		var ostatok2 = (time - year*31536000) % 86400
		var day = (time - year*31536000 - ostatok2) / 86400 
	}else {var day = 0; var ostatok2 = time;}
	
	if ((time - year*31536000 - day * 86400) > 3600 || (time - year*31536000 - day * 86400) == 3600  ) {
		var ostatok3 = (time - year*31536000 -day*86400 ) % 3600 
		var hour = (time - year*31536000 - day*86400 -ostatok3) / 3600 
	}else { var hour = 0;}
	
	if ((time - year*31536000 - day*86400 - hour*3600) > 60 || (time - year*31536000 - day*86400 - hour*3600) == 60 ) {
		var ostatok4 = (time - year*31536000 - day*86400 - hour*3600) % 60 
		var minute  =( time - year*31536000 - day*86400 - hour*3600 - ostatok4) / 60 
	}else { var minute = 0;}
	
	if ((time - year*31536000 - day*86400 - hour*3600 - 60*minute) < 60 ) {
		 
		var second  = (time - year*31536000 - day*86400 - 3600*hour - 60*minute)  
	}else  {var second = 0; }
//let solo or many(years or year)	
	if (year>1) { var nameYears = " years";
	}else if (year == 1) { var nameYears = " year"; 
	}else if  (year == 0) { var nameYears = "";} 
	
	if (day>1) { var nameDays = " days";
	}else if (day == 1) { var nameDays = " day"; 
	}else if  (day == 0) { var nameDays = "";} 
	
	if (hour>1) { var nameHours = " hours";
	}else if (hour == 1) { var nameHours = " hour"; 
	}else if (hour == 0) { var nameHours = "";} 
	
	if (minute>1) { var nameMinutes = " minutes";
	}else if (minute == 1) { var nameMinutes = " minute"; 
	}else if (minute == 0) { var nameMinutes = "";} 
	
	if (second>1) { var nameSeconds = " seconds";
	}else if (second == 1) { var nameSeconds = " second"; 
	}else if (second == 0) { var nameSeconds = "";} 
//adding comma and "and"
let countComma =0;
if (second &&  !minute  && !hour &&  !year && !day){return second + nameSeconds}else if	( second != 0) { countComma = countComma +1; var s = " and "}else {var s = "";}
if ( minute != 0 && countComma == 0) { countComma = countComma +1; var m = " and "
}else if (minute !=0 && countComma != 0) { countComma = countComma +1; var m = ", "
}else {var m = "";}
if ( hour != 0 && countComma == 0) { countComma = countComma +1; var h = " and "
}else if (hour !=0 && countComma != 0) { countComma = countComma +1; var h = ", "
}else {var h = "";}
if ( day != 0 && countComma == 0) { countComma = countComma +1; var d = " and "
}else if (day !=0 && countComma != 0) { countComma = countComma +1; var d = ", "
}else {var d = "";}
if (year ==0 ) { year = ""; d = ""}; if ( day ==0 ) { day = ""; d="" ;h="";}; if (hour ==0  ) { hour = ""; h=""; m = ""  }; if (minute ==0  ) { minute = ""; m=""}; if (second ==0 ) { second = ""; s=""}
if (year == 0 &&  hour == 0 && day && minute && second) {m = ", "}
//execute

return  year +nameYears +d+ day +nameDays +h +hour +nameHours +m+  minute + nameMinutes +s +second+nameSeconds; 
}

console.log(formatDuration(132113944));






