// As a user 
// I want to mouseover links to books on front page
// and have the images of the books appear as the background of that section

// As a user I want sections 
// toggle between each section

// As a user
// I want the images on the book pages
// to increase 15% on mouseover to create animation effect

// As a user 
// I want to logo to change color onclick of logo
// var url = "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/" + number + ".jpg"
// attr
// var newSrc = $(event.currentTarget).attr("src");

//  $("#bigimage").attr("src", newSrc);
//

$.ajax({
  type: 'GET',
  url: 'https://api.myjson.com/bins/hh1wu',
  success: function (books) {
  	var book = books.splice(10, 132);
    
    book.forEach(function(bookentries) {
    var isbn = bookentries.J;
    var url = "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/" + isbn + ".jpg";

   	var titlename = bookentries.B;
    var author = bookentries.A;
    var genre = bookentries.C;
    var year = bookentries.G;
    var catalog = bookentries.Q;

    $(".detail").append("<img class='bookcover' src='" + url + "' alt=titlename>");
    $(".detail").append("<h1>" + titlename + "</h1>");
    $(".detail").append("<h2>" + author + "</h2>");
    $(".detail").append("<h3>" + genre +  "&nbsp;(" + year + ")" + "</h3>");
    $(".detail").append("<p>" + catalog + "</p>");
 console.log(url)
    })
}
    })





// $.ajax({
//  type: 'GET',
//  url: 'https://api.myjson.com/bins/n2192',
//  success: function (stations) {
//    var freeStations = stations.filter(function(station) {
//      return station.free > 0;
//    });

 //   var topTen = freeStations.splice(0, 50);

 //   topTen.forEach(function(station) {
 //    var stationName = station.name;
 //     var numberFree = station.free;

 //     $(".bikes").append("<li>" + stationName + ": " + numberFree + "</li>")
 //   });
 // },
// });
