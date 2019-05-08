
greet();

function greet() {
    console.log('hi');   
}

//anonymousGreet(); will not work here , as anonymousGreet is a variable and in creatio phasae it is hoisted and declared as "undefined"

var anonymousGreet = function() {
    console.log('hi');   
}

anonymousGreet();

function log(a) {
   a();    
}


//creating function on the fly and passing funtion to a function
log(function() {
    console.log('hi');   
});


 