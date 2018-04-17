//• Clicking on a "plus" box adds to the total in the center

//• Clicking on a "minus" box subtracts from the total

//• Clicking the red box makes the background of the center box to red

//• Clicking the blue box makes the background of the center box to blue

//• Clicking the center box will make its background white and reset the value inside to zero

function a10() {
	var topleft = document.querySelector('#a10').value = 10;
}

function a20() {
	var topmiddle = document.querySelector('#a20').value = 20;
}

function a30() {
	var topright = document.querySelector('#a30').value = 30;
}

function changeColorRed()	{
	var red = document.querySelector('#red').value;
}

function changeColorBlue()	{
	var red = document.querySelector('#blue').value;
}

function n10() {
	var bottomleft = document.querySelector('#n10').value = -10;
}

function n20() {
	var bottommiddle = document.querySelector('#n20').value = -20;
}

function n30() {
	var bottomright = document.querySelector('#n30').value = -30;
}

document.querySelector('#out').onclick = a10;
document.querySelector('#a10').innerHTML;
console.log(changeColorBlue)