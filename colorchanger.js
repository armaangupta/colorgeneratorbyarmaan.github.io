var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button");

function randomNumberGenerator()	{
	var letters = '0123456789ABCDEF';
	var color = '#';
	for(var i=0; i<6;i++)	{
		color+= letters[Math.floor((Math.random())*16)];
	}
	return color;
}

function randomGradient()	{
	var color11= randomNumberGenerator();
	var color22 = randomNumberGenerator();
	body.style.background = "linear-gradient(to right, " + color11 + ", " + color22 + ")";
	css.textContent = body.style.background;
}

function setGradient()	{
	console.log("color1" + color1);
	console.log("color2" + color2);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

// button.addEventListener("click",randomGradient);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

