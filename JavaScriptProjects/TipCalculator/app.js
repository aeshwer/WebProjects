;(function(){
    
var userBillAmount = document.getElementById("userBillAmount");
var selectedServiceType = document.getElementById("selectedServiceType");
var noOfPeople = document.getElementById("noOfPeople");
var calculateButton = document.getElementById("calculateButton");
var clearButton = document.getElementById("clearButton");
    
function inputLength(input){   
	return input.value.length;
} 
    
function resolveTip(){
    if(inputLength(noOfPeople)<=0){
        noOfPeople.value=1;
    }
    return (userBillAmount.value * selectedServiceType.value)/noOfPeople.value;
} 
    
function createTipElement(tip){
    var element = document.getElementById("calculatedTip");
    var content = document.createTextNode("Calculated Tip Per-Person:" +tip);
    element.appendChild(content);
} 
        
function calculateTip(){   
        if(inputLength(userBillAmount)<=0 || inputLength(selectedServiceType)<=0 ){
            alert('Please Enter Details for tip calculation');
        }
        else{            
            var tip = resolveTip();
            console.log(tip);
            createTipElement(tip)
        }
}
    
function clearInputFields(){   
        userBillAmount.value ='';
        selectedServiceType.value ='';
        noOfPeople.value ='';
        var elem = document.getElementById("calculatedTip");
        elem.parentNode.removeChild(elem);
}

//Adding events
calculateButton.addEventListener("click",calculateTip);
clearButton.addEventListener("click",clearInputFields);
}());