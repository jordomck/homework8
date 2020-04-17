var mainFrame = document.getElementById("display");


function enter(event){
	console.log(event);
	display.innerHTML = event.target.alt;
	console.log("entered");
	display.style.backgroundImage = "url(" + event.target.src + ")";

}

function leave(){
	console.log("left");
	display.innerHTML = "Hover over an image below to display the image and the alt text";
	display.style.backgroundImage = "none";
}

$(".thumbnail").hover(
	function(){enter(event);},
	function(){leave(event);}
	);

$(".thumbnail").focus(function(){enter(event);}); //keyboard accessibility
