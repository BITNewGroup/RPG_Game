function PersonCorn(lat, lon, marker){
	this.lat = lat;
	this.lon = lon;
	this.marker = marker;
}

function newGoblin()
{
	
	var goblin = {
		name: "Goblin",
		stats: newStats(7, 8, 9),
		marker : null
		
	};
	
	return goblin;
}

function newStats(hp, def, att){
	var stats = {
		hp : hp,
		def : def,
		att : att
	};
	
	return stats;
}


function newDragon(){
	var dragon = {
		name: 'Great Dragon'
	}
}

function Dragon(name){
	this.name = name;
}


function newPlayer(marker){
	alert("hello there");
	return new Person(-37.814214,144.960078, marker);
}


function boxTitle() {
    alert("I am an alert box!");
}

function moveUp(player) {
    var nextLat = player.marker.getPosition().lat() + 0.0001;
    var nextLng = player.marker.getPosition().lng();


    player.marker.setPosition(new google.maps.LatLng(nextLat, nextLng));
}

function moveDown(player) {
    var nextLat = player.marker().getPosition().lat() - 0.0001;
    var nextLng = player.marker().getPosition().lng();


    player.marker().setPosition(new google.maps.LatLng(nextLat, nextLng));
}

function moveLeft(player) {
    var nextLat = player.marker().getPosition().lat()
    var nextLng = player.marker().getPosition().lng() - 0.0001;


    player.marker().setPosition(new google.maps.LatLng(nextLat, nextLng));
}

function moveRight(player) {
    var nextLat = player.marker().getPosition().lat()
    var nextLng = player.marker().getPosition().lng() + 0.0001;;


    player.marker().setPosition(new google.maps.LatLng(nextLat, nextLng));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveMarker(player, direction) {
    
    if(direction == 1) {
        moveUp(player);
    }
    if (direction == 2) {
        moveDown(player);
    }
    if (direction == 3) {
        moveLeft(player);
    }
    if (direction == 4) {
        moveRight(player);
    }
}