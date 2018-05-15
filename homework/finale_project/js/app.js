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


$.ajax({
  type: 'GET',
  url: 'https://api.myjson.com/bins/n2192',
  success: function (books) {
  	var book = books.splice(1, 3);
    
    book.forEach(function(bookentries) {
   	var titlename = bookentries.B;
    var author = bookentries.A;
    var genre = bookentries.C;
    var year = bookentries.G;
    var catalog = bookentries.Q;

     $("body").append("<p>" + titlename + author + year + genre + catalog + "</p>")
	console.log(books)
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
