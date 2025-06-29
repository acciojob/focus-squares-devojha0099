const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square = document.getElementsByClassName("square");

square1.addEventListener("mouseenter" ,() =>{
	square2.style.backgroundColor = "#6F4E37";
	square3.style.backgroundColor = "#6F4E37";
});

square2.addEventListener("mouseenter" ,() =>{
	square1.style.backgroundColor= "#6F4E37";
	square3.style.backgroundColor = "#6F4E37";
});

square3.addEventListener("mouseenter" ,() =>{
	square2.style.backgroundColor = "#6F4E37";
	square1.style.backgroundColor = "#6F4E37";
});

square1.addEventListener("mouseleave" ,() =>{
	square2.style.backgroundColor = "#E6E6FA";
	square3.style.backgroundColor = "#E6E6FA";
});

square2.addEventListener("mouseleave" ,() =>{
	square1.style.backgroundColor = "#E6E6FA";
	square3.style.backgroundColor = "#E6E6FA";
});

square3.addEventListener("mouseleave" ,() =>{
	square2.style.backgroundColor = "#E6E6FA";
	square1.style.backgroundColor = "#E6E6FA";
});