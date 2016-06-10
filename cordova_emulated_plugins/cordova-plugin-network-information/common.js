// Plugin cordova-plugin-network-information
(function() {
	navigator.__defineGetter__('connection', function(){
		return {
			type: Connection.WIFI
		};
	});
	Connection = {
		UNKNOWN: 'Unknown connection',
		ETHERNET: 'Ethernet connection',
		WIFI: 'WiFi connection',
		CELL_2G: 'Cell 2G connection',
		CELL_3G: 'Cell 3G connection',
		CELL_4G: 'Cell 4G connection',
		CELL: 'Cell generic connection',
		NONE: 'No network connection'
	};
})();