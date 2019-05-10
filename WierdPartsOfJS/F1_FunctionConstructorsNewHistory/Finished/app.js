// Use of 'new' and its concept of function constructor

function Person(firstname, lastname) {
 
    console.log(this);                 // prints a empty object here created by 'new'  ,  //Read below notes also
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

var john = new Person('John', 'Doe');    // when we write 'new' , and empty object is created and then it invokes the funtion.In the                                            //execution context of the funtion the 'this' points the empty object created by'new' keyword
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);