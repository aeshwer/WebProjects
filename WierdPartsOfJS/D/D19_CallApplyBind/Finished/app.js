//First see the starter version
//All JS funtions have access to invoke call(), Apply(), and bind() meth0ds

//this here points to the person function object
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person);  //bind creates a new copy of logName() with this pointing to scope of person
logPersonName('en');

logName.call(person, 'en', 'es');  // we can also invoke a funtion with  'funtionName.call()' instead of 'funtionName()' since former                                         gives we control to define this with its first parameter . NO copy made here like bind()
logName.apply(person, ['en', 'es']);  // do exact same thing as call(), just here we send params in form of Arrays

//Second Way for writing
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);

//-----------------------------------------------------------------------------------------------------------

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

//-----------------------------------------------------------------------------------------------------------
// function currying -- Creating a copy of a funtion but with some preset params-- useful in mathematical library
function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);// try sending params with bind, here we dont care what 'this' is as we are not using it
                                            // by sending 2 as params, we permanently set first param value as 2
console.log(multipleByTwo(4));              // 4 will be here is 2nd param here ::OUTPUT: 4

var multipleFixed = multiply.bind(this, 2,2);
console.log(multipleFixed(10));         //::OUTPUT: 4, input 10 has no effect since both input paramas are set permanenlty as 2 and 10                                         //just acts as a extra param