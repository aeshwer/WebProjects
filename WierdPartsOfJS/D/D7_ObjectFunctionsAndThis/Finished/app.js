function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

//Correct Code-------------------------------------------------------------------
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}


c.log();

//Incorrect Results=------------------------------------------
var c = {
    name: 'The c object',
    log: function() {
        
        this.name = 'Updated c object';
        console.log(this);
        
        var setname = function(newname) {
            this.name = newname;   
        }
        setname('Updated again! The c object');  // this wont have change on name ,instead a new name property will be added to window object . Use self in tahtcase
        console.log(this);
    }
}

c.log();
