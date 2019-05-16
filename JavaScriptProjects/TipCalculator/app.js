;(function(){
    
var userBillAmount = document.getElementById("userBillAmount");
var selectedServiceType = document.getElementById("selectedServiceType");
var noOfPeople = document.getElementById("noOfPeople");
var calculateButton = document.getElementById("calculateButton");
        

function inputLength(){
	return userInput.value.length;
} 

//Add events
inputButton.addEventListener("click",addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
}());