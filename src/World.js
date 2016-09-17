
/*  Requries

	Player.js
*/
function newWorld(googleMap)
{
	var world = {
			gmap : googleMap,
			player : null,
			
			forestList : [],
			fishList : [],
			fireList: [],
			decoList: [],
			
			bounds: []
	};
	
	return world;
	
}

function tickWorld(world)
{
	var forestList = world.forestList;
	
	//cycle through all tree objects
	for (i = 0; i <forestList.length; i++) {
		var f = forestList[i];
		
		f.age += 1;
		
		if(f.age >= TREE_AGE){
			f.marker.setIcon(ICON_ALIVE_TREE);
			//alert("tree regrow");
		}
	}
	
	//cycle through all fish objects
	for(i=0 ; i < world.fishList.length; i++)
	{
		fish = world.fishList[i];
		fish.age += 1;
		
		if(fish.age > AGE_FISH_SPAWN)
		{
			fish.age = 0;
			fish.amount += 1;
		}
		
		
	}
	
}