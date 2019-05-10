// Note: When we use new keyword and use a funtion as a constructor to generate object , then there is a 'prototype' property on all JS functions.Its value is empty object , but as soon as we use 'new' operator to invoke a funtion , then it means something
//---the prototype property is not __proto__ of the funtion but it is the prototype of any object creted via 'new' for that function

function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}


//both john and jane has access to this method as they are creted via invoking Person by 'new' and we are adding method on funtion prototype attribute
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());




