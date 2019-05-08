
// IIFE
var firstname = 'John';

(function(name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);        // Hello John
    
}(firstname)); // IIFE

console.log(greeting);          // Hola


// Correct way to do things -- IIFE
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';   //clashing with global object on purpose
    console.log(greeting + ' ' + name);    // Hello John
    
}(window, 'John')); // IIFE

console.log(greeting);     // Hello






















