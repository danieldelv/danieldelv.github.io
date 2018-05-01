// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


$(".thumb").click(changeImage);

function changeImage(event) {
	var newSrc = $(event.currentTarget).attr("src");

	$("#bigimage").attr("src", newSrc);
}

// 

//	$("#first").click(thumbnailOne)

//	function thumbnailOne(event) {
//		var newSrc = $(event.currentTarget).attr("src");
//		$(event.currentTarget).attr("src", "img/1.jpg")
//	}

//$("#second").click(thumbnailTwo)

//function thumbnailTwo() {
//		$("#bigimage").attr("src", "img/2.jpg")
//	}

//$("#third").click(thumbnailThree)

//function thumbnailThree() {
//		$("#bigimage").attr("src", "img/3.jpg")
//	}

//$("#fourth").click(thumbnailFour)

//function thumbnailFour() {
//		$("#bigimage").attr("src", "img/4.jpg")
//	}

