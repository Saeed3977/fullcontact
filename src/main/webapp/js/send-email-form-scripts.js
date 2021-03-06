window.onload = function() {
	var addAttachmentButton = document.getElementById('add-attachment-field');
	addAttachmentButton.setAttribute("onclick", "attachListener();");
	attachListener();

	document.getElementById("contact-form").setAttribute("onsubmit", "return validateForm();");
	document.getElementById("template-selector").setAttribute("onchange", "setTamplate(this);");
};

function setTamplate(e) {
	if (e.value.indexOf("template") != -1) {
		document.getElementById("message").value = 
				  "Hello, $NAME$ \n\n"
				+ "your message here \n\n"
				+ "Thanks & Regards, $US_FULL_NAME$ \n\n" 
				+ "Contact Info:\n"
				+ "Phone: $US_PHONE$\n" 
				+ "Email: $US_EMAIL$";
	} else {
		document.getElementById("message").value = "";
	}
}

function deleteAttachmentField(id) {
	var node = document.getElementById(id);
	node.parentNode.removeChild(node);
}

function attachListener() {
	var box = document.getElementById('attachment-box');
	var quantity = box.getElementsByClassName('attachment-field').length;
	box.appendChild(createAttachmentFieldHtml(quantity + 1));
}

function createAttachmentFieldHtml(id) {
	var input = document.createElement("input");
	input.setAttribute("type", "file");
	input.setAttribute("id", "file" + id);
	input.setAttribute("name", "file" + id);

	var deleteIcon = document.createElement("div");
	deleteIcon.setAttribute("class", "close-icon-box");
	deleteIcon.setAttribute("onclick", "deleteAttachmentField('box" + id + "');")

	var div = document.createElement("div");
	div.setAttribute("id", "box" + id);
	div.setAttribute("class", "attachment-field");

	div.appendChild(deleteIcon);
	div.appendChild(input);

	return div;
}

function validateForm() {
	console.log("validateForm() BEGIN");

	var PATTERN;
	var value;

	PATTERN = /^[А-ЯЁа-яё\w!?\s,.]{1,30}$/;
	value = document.getElementById("subject").value;
	if (!PATTERN.test(value) || value.length == 0) {
		alert("Email subject must be more 1 and less 30. Use only characters and digits.");
		return false;
	}

	console.log("\t email subject: " + value + " is valid!");

	PATTERN = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	value = document.getElementById("emails").value;
	var tokens = value.split(';');
	for (var i = 0; i < tokens.length; ++i) {
		var token = tokens[i].trim();
		if (token.length == 0) {
			continue;
		}
		if (!PATTERN.test(token)) {
			alert(token + " incorrect format");
			return false;
		}
	}

	//TODO //validate message here

	console.log("\t message: " + value + " is valid!");
	console.log("validatePhone() END");
}
