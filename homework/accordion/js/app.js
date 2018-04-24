// As a user
// When I click on the row
// I expect to see the text appear underneath

// As a user
// When I click on an opened row
// I expect to see the text disappear

// It should animate like this: https://imgur.com/ivlcesG

// Hint: remember traversal (parent, child) and event arguments
// Also, might be worth looking into event.target vs. event.currentTarget

// Extra Credit:
// 
// As a user
// When I click on an opened row
// I expect the text to disappear more slowly than how it appeared


$(".row").click(toggle)

function toggle(event) {
	var wrapper = $(event.currentTarget).find(".wrapper");
	wrapper.toggle();
}


//$(".wrapper").find("p").show("p");


// $("ul li .social-link")

//⇒ Select elements with class social-link that are inside <li> elements which are inside <ul>
// $(".wrapper").toggle();
// $(".wrapper").find("p").show("p")

//$(".rowz").click(reveal);

//function reveal(event) {
//	var showrow = $(event.currentTarget).show("#row");

//	$(".wrapper").children(reveal)






// 
// $("#wrapper").children()
// $("#hide").click(toggleCody)
// $("#show").click(toggleCody)
//$("p").toggle();
