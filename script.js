var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Done!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function listlenght(){
	return listItems.length;
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Done!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for( i=0;i<listlenght();i++){
	deleteButton();
}
function removeParent(evt){evt.target.parentNode.remove();

}
