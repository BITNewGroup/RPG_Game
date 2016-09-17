

function moveMarker(world, marker, addLat, addLon)
{
	var bounds = world.bounds;
	
	for(i=0 ; i < bounds.length; i++)
	{
		
	}
	
	
	
	var lat = marker.getPosition().lat() + addLat;
	var lng = marker.getPosition().lng() + addLon;
	
	console.log("lat: " + lat);
	console.log("lng: " + lng);
	
	var latlng = new google.maps.LatLng(lat, lng);
    marker.setPosition(latlng);
}