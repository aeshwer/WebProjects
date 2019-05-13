function sayHiLater() {
 
    var greeting = 'Hi!';
    
        //setTimeout is a JS defined funtion  which takes a funtion and time(ms) after which that funtion is to be executed
    setTimeout(function() {
        
        console.log(greeting);
        
    }, 3000);
    
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});


//Calback function:= a funtion you give to another function, to be run  when other function is finished
function tellMeWhenDone(callback) {
 
    var a = 1000; // some work
    var b = 2000; // some work
    
    callback(); // the 'callback', it runs the function I give it!
    
}

tellMeWhenDone(function() {
   
    console.log('I am done!');
    
});

tellMeWhenDone(function() {
   
    console.log('All done...');
    
});



3.

