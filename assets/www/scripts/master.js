function initGMap() {
	var map = new GMap2(document.getElementById('map'));
	map.setCenter(new GLatLng(55.45, 37.37), 9);        // <- Set Center
	map.addControl(new GLargeMapControl());             // <- Map size Control
	map.addControl(new GMapTypeControl());              // <- Map mode control
	map.enableScrollWheelZoom();                        // <- Mouse wheel enable

	/*var geoXml = new GGeoXml("http://xattusa.ru/resources/moscow.kml");
	map.addOverlay(geoXml);*/
}

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	initGMap();
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />' +
						'Altitude: '           + position.coords.altitude              + '<br />' +
						'Accuracy: '           + position.coords.accuracy              + '<br />' +
						'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
						'Heading: '            + position.coords.heading               + '<br />' +
						'Speed: '              + position.coords.speed                 + '<br />' +
						'Timestamp: '          + position.timestamp                    + '<br />';
}

// onError Callback receives a PositionError object
//
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}
$(function(){
	$("#geolocation").on("click", function(){
		$(this).hide();
	});
});