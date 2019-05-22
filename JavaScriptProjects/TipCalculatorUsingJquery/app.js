$(document).ready(function(){
    
var userBillAmount = $("#userBillAmount")[0];    
var selectedServiceType = $("#selectedServiceType")[0];
var noOfPeople = $("#noOfPeople")[0];
var calculateButton = $("#calculateButton")[0];
var clearButton =$("#clearButton")[0];
    
    
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
   /* var element =$("#calculatedTip")[0];
    var content = document.createTextNode("Calculated Tip Per-Person:" +tip);
    element.appendChild(content);*/
    
    $("#calculatedTip").text("Calculated Tip Per-Person:" +tip);
} 
        
function calculateTip(){   
        if(inputLength(userBillAmount)<=0 || inputLength(selectedServiceType)<=0 ){
            alert('Please Enter Details for tip calculation');
        }
        else{
            var tip = resolveTip();
            clearResult();
            createTipElement(tip)
        }
}
    
function clearInputFields(){   
        userBillAmount.value ='';
        selectedServiceType.value ='';
        noOfPeople.value ='';
        clearResult();
       
}

function clearResult(){   
        /*var elem = $("#calculatedTip")[0];
        elem.innerHTML=""; //can also be achived by jQuery*/
        $("#calculatedTip").text("")
}

    
//Adding events
    $("#calculateButton").click(calculateTip);
    $("#clearButton").click(clearInputFields);
});