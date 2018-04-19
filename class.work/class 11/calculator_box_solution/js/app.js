var total = 0;

// +10

$("#a10").click(addTen);


function addTen() {
	total = total + 10;

	$("#out").html(total);
}

// +20

$("#a20").click(addTwenty);

function addTwenty() {
	total = total + 20;

	$("#out").html(total);
}

// +30

$("#a30").click(addThirty);

function addThirty() {
	total = total + 30;

	$("#out").html(total);
}

// -10

$("#n10").click(subtractTen);

function subtractTen() {
	total = total - 10;

	$("#out").html(total);
}


// -20

$("#n20").click(subtractTwenty);

function subtractTwenty() {
	total = total - 20;

	$("#out").html(total);
}

// -30

$("#n30").click(subtractThirty);

function subtractThirty() {
	total = total - 30;

	$("#out").html(total);
}

// red

$("#red").click(turnRed)

function turnRed() {
	$("#out").css("background-color", "red") 
}

// blue

$("#blue").click(turnBlue);

function turnBlue() {
	$("#blue").css("background-color", "blue");
}

// reset

var outputButton = document.querySelector("#out");

outputButton.onclick = reset;

function reset() {
	total = 0;

	$("#out").html(total);
	$("#out").css("background-color", "white") document.querySelector("#out").style.background = "white";
}
