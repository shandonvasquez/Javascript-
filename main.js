// We are going to create the variables that will be used in the functions below
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//this function returns the length of the input value

function inputLength() {
    return input.value.length;
}
//this function creates a list element and appends it to the ul element in the html file

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; // Corregido el signo "=" en lugar de "-"
}
//this function adds a list element after the click event   

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
//this function adds a list element after the keypress event
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Event listeners for the click and keypress events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);