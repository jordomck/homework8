
//init variables
var submitButton = document.querySelector("input[type='submit']");
var nameField = document.getElementById("name");
var nameError = document.getElementById("nameError");
var addrField = document.getElementById("addr");
var addrError = document.getElementById("addrError");


submitButton.addEventListener("click", function(event){

	if (addrField.value == ""){
		addrError.style.display = "block";
		event.preventDefault(); //intercept form submit
		addrField.focus();
	} else {
		addrError.style.display = "none";
	}


	if(nameField.value == ""){
		nameError.style.display = "block";
		event.preventDefault();
		nameField.focus(); //overwrites focus of addrfield if both are empty
	} else { 
		nameError.style.display = "none"; 
	}
	event.preventDefault();
	submitButton.submit();


});