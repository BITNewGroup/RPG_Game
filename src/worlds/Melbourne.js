
//build world



function buildWorld(world)
{
	//creates new tree object
	newTree(world, -37.814214, 144.960078, "forest 1");
	
	//creates new story book
	newStory(world, -37.817921, 144.939283,"The beginings", "he walked down the road");
	
	//creates new icon with image
	newDeco(world, -37.794484, 144.962548, "images/dragon.png")
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var melbourne = new google.maps.LatLng(-37.817921, 144.939283);
	
	var request = {
		location: melbourne,
		radius: '10000',
		types: ['park']
	};
	
	var service = new google.maps.places.PlacesService(world.gmap);
	service.radarSearch(request, callback);
	
	var lodging = {
		location: melbourne,
		radius: '50000',
		types: ['atm']
	};
	
	//service = new google.maps.places.PlacesService(world.gmap);
	//service.radarSearch(lodging, callLodge);
	*/
	
	
	
}

function callLodge(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK)
  {
	for (var i = 0; i < results.length; i++) 
	{
      var place = results[i];
	  
	  latlng = place.geometry.location;
	  
	  newDeco(world, latlng.lat(),latlng.lng(), ICON_HOUSE_1);
     
    }
  }
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK)
  {
	for (var i = 0; i < results.length; i++) 
	{
      var place = results[i];
	  
	  latlng = place.geometry.location;
	  
	  newTree(world, latlng.lat(),latlng.lng(), "Tree");
     
    }
  }
}






