//• Clicking on a "plus" box adds to the total in the center

//• Clicking on a "minus" box subtracts from the total

//• Clicking the red box makes the background of the center box to red

//• Clicking the blue box makes the background of the center box to blue

//• Clicking the center box will make its background white and reset the value inside to zero

total = 0

// +10

	var plusTen = document.querySelector("#a10")

	document.querySelector("#a10").onclick = addTen

	function addTen() {
		total = total + 10

		document.querySelector("#out").innerHTML = total
	}

// + 20

	var plusTwenty = document.querySelector("#a20")

	document.querySelector("#a20").onclick = addTwenty

	function addTwenty() {
		total = total + 20

		document.querySelector("#out").innerHTML = total
	}

// +30

	var plusThirty = document.querySelector("#a30")

	document.querySelector("#a30").onclick = addThirty

	function addThirty() {
		total = total + 30

		document.querySelector("#out").innerHTML = total
	}

// -10

	var minusTen = document.querySelector("#n10")

	document.querySelector("#n10").onclick = subtractTen

	function subtractTen() {
		total = total - 10

		document.querySelector("#out").innerHTML = total
	}

// -20

	var minusTwenty = document.querySelector("#n20")

	document.querySelector("#n20").onclick = subtractTwenty

	function subtractTwenty() {
		total = total - 20

		document.querySelector("#out").innerHTML = total
	}

// -30

	var minusThirty = document.querySelector("#n30")

	document.querySelector("#n30").onclick = subtractThirty

	function subtractThirty() {
		total = total - 30

		document.querySelector("#out").innerHTML = total
	}

// red

	var red = document.querySelector("#red")

	document.querySelector("#red").onclick = turnRed

	function turnRed() {
		document.querySelector("#out").style.background = ("red")
	}


// blue

	var blue = document.querySelector("#blue")

	document.querySelector("#blue").onclick = turnBlue

	function turnBlue() {
		document.querySelector("#out").style.background = ("blue")
	}

//reset

	var reset = document.querySelector("#out")

	function reset() {
	document.querySelector("#out").onclick = total
	document.querySelector("#out").onclick.style.background = ("white")
}