
//Adds a new forest object passing in world, latitude & longitude
function newTree(world, lat, lon, name)
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
			
			world.player.wood += 1;
		}
		 
		 
    });
	
	world.forestList.push(forest);
	//alert(forestList.length);
}

//Adds a new fish object passing in world, latitude & longitude
function newFish(world, lat, lon)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lon},
			map: world.gmap,
			title: "Fish",
			icon: ICON_FISH
		});
	marker.setMap(world.gmap);
	
	var fish = {
		amount : 0,
		marker : marker,
		name : name,
		age : 0
	};
	
	marker.addListener('click', function() {
		console.log("age: " + fish.age + " amount: " + fish.amount);
    });
	
	world.fishList.push(fish);
}


//new story
function newStory(world, lat, lng, title, theStory)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: world.gmap,
			title: title,
			icon: ICON_STORY
		});
	marker.setMap(world.gmap);
	
	var story = {
		marker : marker,
		theStory : theStory,
	};
	
	marker.addListener('click', function() {
		alert(story.theStory); 
    });
}

//fire object
function newFire(world, lat, lng)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: world.gmap,
			title: "Fish",
			icon: "images/fire.png"
		});
	marker.setMap(world.gmap);
	
	var fire = {
		marker : marker,
		age : 0,
	};
}

function newDeco(world, lat, lng, pic)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: world.gmap,
			title: "Fish",
			icon: pic
		});
	marker.setMap(world.gmap);
	
	var deco = {
		marker : marker,
		age : 0
	};
	
	world.decoList.push(deco);
}

