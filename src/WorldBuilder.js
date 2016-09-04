
//build world
function putMarker(gmap, lat, lon)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lon},
			map: map,
			title: 'Hello World!',
			icon: "forest.png"
		});
	marker.setMap(gmap);
}



function buildWorld(gmap)
{
	putMarker(gmap, -37.814214, 144.960078);
	putMarker(gmap, -37.818389, 144.960078);
}