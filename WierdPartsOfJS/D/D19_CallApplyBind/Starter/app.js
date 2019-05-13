//All JS funtions have access to invoke call(), Apply(), and bind() meth0ds

//this here points to the person function object
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());   // this here is in scope of logName() method and will not have access  to getFullName()
}

logName();

// we get error