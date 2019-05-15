var inputButton = document.getElementById("inputButton");
var userInput = document.getElementById("userInput");
var taskList = document.getElementById("taskList");

function inputLength(){
	return userInput.value.length;
} 

function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(userInput.value)); //makes text from input field the li text
	taskList.appendChild(li); //adds li to ul
	userInput.value = ""; //Reset text input field
    
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}

//Add events
inputButton.addEventListener("click",addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
