
function initGoogleMap(map)
{
	 var styledMapType = new google.maps.StyledMapType(
          [
			{
			"featureType": "all",
			"stylers": [
				{visibility: 'off' }
			]
			},
			{
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                { hue: '#000d1a' },
				{visibility: 'on' }
				
              ]
            },
			{
				featureType: 'landscape.natural',
				elementType: 'geometry',
				stylers: [
                { hue: '#001a00' },
                { saturation: 100 },
				{visibility: 'on' }
              ]
			}
          ],
          {name: 'Styled Map'});
		  
		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
}



function initGui(map)
{
	initGoogleMap(map);
}