//Reflection: An object can look at itself,listing and changing its properties and methods..

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// Example of reflection in JS
for (var prop in john) {                          // For in :- loop on all memeber of 'john' object
    if (john.hasOwnProperty(prop)) {              // remove this condition and we start seeing prototype memebers
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}

// we get this method from underscore.js library
_.extend(john, jane, jim);  // john is what i want to extend.It takes all memeber of jane and jim adds to john.Differnt from prototype as it physically puts thes properties on jon object

console.log(john);








