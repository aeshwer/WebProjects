//sets up a greetr object from inside this function. I would like to have a short-Hand  notification like G$(firstname,lastname,language) which gives me back a Greet object

(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    
    Greetr.prototype = {};
    
    Greetr.init.prototype = Greetr.prototype;          // 'Greetr.init' is a function and object created with this function , i will set                                                    //  the prototype 
    
    global.Greetr = global.G$ = Greetr;                 // i want to attach my Greetr Object on global so i can call from anywhere with                                                     // two alisa
    
}(window, jQuery));