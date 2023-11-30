var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button"); // Creating a delete button
    deleteButton.appendChild(document.createTextNode("Remove")); // Text for the delete button
    deleteButton.classList.add("Completado"); // Adding a class for styling
    deleteButton.addEventListener("click", removeItem); // Adding click event to the delete button
    li.appendChild(document.createTextNode(input.value + "    "));
    li.appendChild(deleteButton); // Appending the delete button to the list item
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function removeItem() {
    this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Event listener for newly added items for removal
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }
});
