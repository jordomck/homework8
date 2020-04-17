
function countChecked(columnName){
	count =  $("input[type='radio'][name=" + columnName + "]:checked").length;
	console.log(count);
	return count;
}


var submitButton = document.querySelector("input[type='submit']");

submitButton.addEventListener("click", function(event){
	if(countChecked("standing") != 1 || countChecked("gradDate") != 1){
		alert("Please select one item from each column.");
		event.preventDefault();
	}

});
