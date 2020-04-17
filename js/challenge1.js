var checkbox = document.getElementById("subscribe");

checkbox.addEventListener('change', (event) => {
	if(event.target.checked) {
		$('#emailDiv').fadeIn(1500);
	} else {
		$('#emailDiv').fadeOut(1500);
	}
});
