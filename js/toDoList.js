var addToDoButton = document.getElementsByClassName("addToDo");

function createOwnElement(tag, options) {
	var element = document.createElement(tag);

	if (options.classNames) {
		for (var i = 0; i < options.classNames.length; i++) {
			element.classList.add(options.classNames[i]);
		}
	}

	return element;
}

for (var i = 0; i < addToDoButton.length; i++) {
	addToDoButton[i].addEventListener('click', function(event) {
		var element = createOwnElement("p", {classNames: ["paragraph"]});
		var inputField = event.target.previousSibling;
		var toDoContainer = event.target.nextElementSibling;

		element.innerText = inputField.value;
	    toDoContainer.appendChild(element);
	    inputField.value = "";

	    element.addEventListener('click', function() {
			if(element.style.textDecoration === "line-through") {
				element.style.textDecoration = "none";
				
			} else {
				element.style.textDecoration = "line-through";
			}
		});

		element.addEventListener('dblclick', function() {
			toDoContainer.removeChild(element);
		});
	}); 
}
