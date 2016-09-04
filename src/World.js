
/*  Requries

	Player.js
*/
function newWorld(googleMap)
{
	var world = {
			gmap : googleMap,
			player : newPlayer(),
			
			forestList : []
	};
	
	return world;
	
}

function tickWorld(world)
{
	var forestList = world.forestList;
	
	for (i = 0; i <forestList.length; i++) {
		var f = forestList[i];
		
		f.age += 1;
		
		if(f.age >= TREE_AGE){
			f.marker.setIcon(ICON_ALIVE_TREE);
			//alert("tree regrow");
			
		}
		
	}
	
}