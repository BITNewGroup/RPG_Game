
function newPlayer(world, lat, lng)
{
	var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: world.gmap,
			title: name,
			icon: PLAYER
		});
	marker.setMap(world.gmap);
	
	
	var player = {
		name: "Player 1",
		wood : 0,
		marker: marker,
		world : world
	};
	
	world.player = player;
	
	
	
	return player;
}


function movePlayer(world, dir)
{
	if(dir == DIRECTION_UP)
	{
		moveMarker(world, world.player.marker, PLAYER_MOVE_SPEED, 0);
	}
	if(dir == DIRECTION_DOWN)
	{
		moveMarker(world, world.player.marker, -1 * PLAYER_MOVE_SPEED, 0);
	}
	if(dir == DIRECTION_LEFT)
	{
		moveMarker(world, world.player.marker, 0, -1 * PLAYER_MOVE_SPEED);
	}
	if(dir == DIRECTION_RIGHT)
	{
		moveMarker(world, world.player.marker, 0, PLAYER_MOVE_SPEED);
	}
	
}

function playerCreateFire(player)
{
	if(player.wood < 5){
		alert("Can't create fire need more wood");
	}
	else{
		player.wood -= 5;
		newFire(player.world, player.marker.getPosition().lat(), player.marker.getPosition().lng());
	}
	
}