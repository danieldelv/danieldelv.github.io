// As a User
// When I click on the button
// I want the header to bounce
$("#animate-me").click(function() {
	$("h1").addClass("animated bounce infinite");

	var right = $("img").css("right")
	
	if (right == "0px") {
		$("img").animate({
			right: 278px;
		})
	
	} else {
	
		$("img").animate({
			right: 0,
		})
	}
})

	$("img").animate({
		right: 0,
	})
})


// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

$("#shrink").click(shrink);

function shrink() {
  $("img").animate({
    "width": "20px",
  }, 500)
}

// As a User
// When I click the button
// I want to see the globe move to the right of the screen


// As a User
// When I click the button again
// I want the globe to return