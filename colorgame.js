 alert("connected");
 //number of squares depending on the mode
 let numSquares = 6;	

 let colors = generateRandomColors(numSquares);
 let pickedColor = pickColor();
 	//the 3 or 6 individual squares
 let squares = document.getElementsByClassName("square");
 //The Great RGB game bar -- changes color to the corresponding correct color when game is won.
 let colorDisplay = document.getElementById("colorDisplay");
 //Displays try again if incorrect / Displays Correct! if correct.
 let messageDisplay = document.querySelector("#message");

 let h1 = document.querySelector("h1");



//buttons
//playagain generates random colors / randomly picks correct color/ changes colorDisplay to match picked color/ then changes the colors of the squares/ resets the h1 to black
let btnPlayAgain = document.getElementById("playAgain");
// btnEasy eliminate square 4-6 / generate 3 new colors / pick one color from the array/ update the picked color/ update the three squares 			
let btnEasy = document.getElementById("easy");
//generate 6 colors/ pick one as our picked color / reshow the 3 squares at the bottom
let btnHard = document.getElementById("hard");


btnEasy.addEventListener("click", function(){
	numSquares = 3;
	h1.style.background = "#232323";
btnEasy.classList.add("selected");
btnHard.classList.remove("selected");

colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for(let i = 3; i < squares.length; i++){
	squares[i].style.display = "none";
}
fillRandomColorsEasy();

})

btnHard.addEventListener("click", function(){
numSquares = 6;
h1.style.background = "#232323";
btnHard.classList.add("selected");
btnEasy.classList.remove("selected");

colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for(let i =3; i < squares.length; i++){
	squares[i].style.display = "block";
}
fillRandomColors();

})

btnPlayAgain.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor = pickColor();

	//change colorDisplay to match picked Color
	colorDisplay.textcontent = pickedColor;

	//change colors of squares
	fillRandomColors();
	
	h1.style.background = "#232323";
})
 colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){

	//add initial colors to squares
squares[i].style.background = colors[i];

//add click listeners to squares

squares[i].addEventListener("click", function(){
	//grab color of clicked square
	let clickedColor = this.style.background;
	//compare color to pickedColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		btnPlayAgain.textContent = "Play Again";
	}else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	
})
}

function changeColors(color){
	//loop through all squares and change color to match given color
	for(let i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	let arr = []
	//add num random colors to array
	for(let i = 0; i < num; i++){

		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	let r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	let g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	let b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g + ", " + b + ")";
}

function fillRandomColors(){
	for(let i = 0; i < squares.length; i++){

	//add initial colors to squares
squares[i].style.background = colors[i];

		btnPlayAgain.textContent = "New Colors";
	}
}

function fillRandomColorsEasy(){
	for(let i = 0; i < 3; i++){
		squares[i].style.background = colors[i];
	}
}