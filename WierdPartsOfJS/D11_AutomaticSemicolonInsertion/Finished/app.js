// syntax parser:  automatix semi colon insertion --- be careful
function getPerson() {
 
    return 
    {
        firstname: 'Tony'
    }
    
}

console.log(getPerson()); // undefined

function getPerson() {
 
    return{
        firstname: 'Tony'
    }
    
}

console.log(getPerson()); // Tony