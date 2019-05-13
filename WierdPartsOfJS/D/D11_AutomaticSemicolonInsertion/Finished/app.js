// syntax parser:  automatix semi colon insertion --- be careful
//Problem Code
function getPerson() {
 
    return 
    {
        firstname: 'Tony'
    }
    
}

console.log(getPerson()); // undefined

//Correct code since after return we have '{' so skipped ';'
function getPerson() {
 
    return{
        firstname: 'Tony'
    }
    
}

console.log(getPerson()); // Tony