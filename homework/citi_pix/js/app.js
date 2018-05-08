// As a user
// When I change my selection
// I expect the background image to change into the image of my selection


	$("body").change(changeCity)

	function changeCity () {
		var userSelection = $("#city-type").val();
		$("body").addClass(userSelection);
}

















// $("body").change(function () {
//		var userSelection = $("#city-type").val();
//			if (userSelection = (".nyc")) {
//			$("body").addClass("background", "background-image: url(../images/nyc.jpg");
//	}
 
// })
		
	//	if ("#value")  {
	//		$(".nyc").addClass(".nyc")
	//		$("body").css("background-image: url(../images/nyc.jpg")



//  function clickCount() {
//	total += 1
//	$("#click-num").html(total);
//	if (total === 5) {
//		$("body").css("background-color", "red")
//	} if (total === 10) {
//		$("body").css("background-color", "green")
//	} if (total === 15) {
//		$("body").css("background-color", "blue")
//	}
// }


// $('#some-input').change(doSomethingCool)

 // function doSomethingCool () {
 //   // function body here
 //  }

 //     $("p").addClass("bold-text")

  //     would yield: <p class="bold-text"></p>


// $('#beers').change(changeBeer);

// function changeBeer () {
//   var userSelection = $("#beers").val();
//  console.log(userSelection)
//  $("#output").html(userSelection)
// }


//  function clickCount() {
//	total += 1
//	$("#click-num").html(total);
//	if (total === 5) {
//		$("body").css("background-color", "red")
//	} if (total === 10) {
//		$("body").css("background-color", "green")
//	} if (total === 15) {
//		$("body").css("background-color", "blue")
//	}
// }