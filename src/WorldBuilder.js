
function newForest(world, lat, lon, name)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lon},
			map: world.gmap,
			title: name,
			icon: ICON_ALIVE_TREE
		});
	marker.setMap(world.gmap);
	
	var forest = {
		marker : marker,
		name : name,
		age : TREE_AGE
	};

	marker.addListener('click', function() {
		//do something with the forest object
		if(forest.age >= TREE_AGE){
			forest.marker.setIcon(ICON_DEAD_TREE);
			forest.age = 0;
		}
		 
		 
    });
	
	world.forestList.push(forest);
	//alert(forestList.length);
}
