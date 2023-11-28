input.addEventListener("keydown", function (event) {
    if (input.value.length > 0 && event.key === "Enter") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "" ;
    }
})