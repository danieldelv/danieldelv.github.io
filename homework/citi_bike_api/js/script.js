// for each
// individual 
// .filter mdn
//

// As a User
// When I visit the site
// I expect to see the names of the all the stations

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
    console.log(stations);
    stations.forEach(logStations);

      function logStations(stations) {
        console.log(stations.name);

      $("body").append(stations.name);
      console.log(stations.name.length);
      
      if (stations.free >= 0) {
        $("body").splice(stations.free);
       } else (
        $("body").append(stations.free));
       }
        console.log(stations.free);

      }
  })


// stations.forEach(logStation);

 // function logStation(station) {
 //   console.log(station);
 //  }
// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only
// free > 0

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

//
// $.ajax({
//  type: 'GET',
//  url: 'http://api.citybik.es/citi-bike-nyc.json',
//  success: function(stations) {
//    console.log(stations)
//  },
// });
