// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a); //2
console.log(b); //3

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); //hello
console.log(d); //hello

// by reference (even as parameters, objects are passed by reference)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d);
console.log(c); //Hole
console.log(d); //Hole

// equals operator sets up new memory space (new address)--Special Case
c = { greeting: 'howdy' };

console.log(c); //howdy
console.log(d); //Hola

// when we use equals(=) with a new object, then new memeory location is used and c and d now are no longer poiting to same place