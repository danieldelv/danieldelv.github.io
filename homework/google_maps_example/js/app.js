// As a User
// When I view the site
// I see a map
// DONE

 var map;
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0060},
          zoom: 13
         });
        var marker = new google.maps.Marker({
          position: {lat: 40.7128, lng: -74.001},
          map: map
        });
    
    var mapOptions = new google.maps.mapOptions({
  		zoom: 13,
  		center: {lat: 40.7128, lng: -74.0060},
  		mapTypeId: 'terrain'
});
      }
// As a User
// When I view the site
// I expect to only see NYC
// DONE

// As a User
// When I view the site
// I want to see a marker on NYC
//

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc