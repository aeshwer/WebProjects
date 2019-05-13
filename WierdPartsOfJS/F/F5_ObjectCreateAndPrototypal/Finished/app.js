// Polyfill : Code that adds a feature which teh engine may lack
// whatif i want to use Object.create and it mayu not be supported by some old browser, then we write a polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}


//Learn from here, above code is just extra
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

var john = Object.create(person);      // Object creation using Object : Creats a empty object with the prototype pointing to whatever u                                        // send in paramas
john.firstname = 'John';                // After Object creatiion via this method, the way to do is to override properties
john.lastname = 'Doe';
console.log(john);