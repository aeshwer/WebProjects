//JS gives us a keyword arguments which contains all the parameters passed to a funtion .It is also created in creation phase like this

function greet(firstname, lastname, language) {
 
    language = language || 'en'; // if language is undefined then set this value('en')
    
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
    
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
