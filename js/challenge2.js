var checkbox = document.getElementById("sameAddress");
var billing = document.getElementById("bill");
var home = document.getElementById("home");

console.log(checkbox);
console.log(billing);
console.log(home);
checkbox.addEventListener('change', (event) => {
	if(event.target.checked) {
		home.value = billing.value;
		home.disabled = true;
	} else {
		home.value = "";
		home.disabled = false;

	}
});


// var form = document.querySelector("form");
// form.addEventListener("onsubmit", function linkToCh3(){
// 	window.location.href = "challenge3.html";
// }, false);