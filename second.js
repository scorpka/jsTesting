"use strict"
function abc(greetings) {
        alert(this.name + greetings );
}

        let user1 = {
                name:"kirill",
}

abc.call(user1," privet");
/*function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
sayHi.call( user ); // this = John
sayHi.call( admin ); // this = Admin

*/