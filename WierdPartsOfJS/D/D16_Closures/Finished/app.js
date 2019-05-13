//CLOSURE - Tricky
// Funtion that returns a funtion

function greet(whattosay) {

   return function(name) {
       console.log(whattosay + ' ' + name);
   }

}

greet('Hi')('Tony');   // Invoking a funtion that returns a function

var sayHi = greet('Hi');
sayHi('Tony');  // think here that how the retuned funtion here has the value to 'whattosay' variable when the outer funtion execution stack is popped.............Posiible because of 'closure'

//Note:  when the exection stack is popped then the memory to the variables is normally cleared by JS, But the memeory space is still there. The next level execution stack will have refeernce to its lexical outer enviroment
