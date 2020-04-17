
//init variables
var submitButton = document.querySelector("input[type='submit']");
var nameField = document.getElementById("name");
var nameError = document.getElementById("nameError");
var addrField = document.getElementById("addr");
var addrError = document.getElementById("addrError");


submitButton.addEventListener("click", function(event){
	clear1 = clear2 = false;
	event.preventDefault();

	if (addrField.value == ""){
		addrError.style.display = "block";
		addrField.focus();
	} else {
		clear1=true;
		addrError.style.display = "none";
	}


	if(nameField.value == ""){
		nameError.style.display = "block";
		nameField.focus(); //overwrites focus of addrfield if both are empty
	} else { 
		clear2=true;
		nameError.style.display = "none"; 
	}
	
	if(clear1 && clear2){
		window.location.href = "challenge5.html";
	}

});