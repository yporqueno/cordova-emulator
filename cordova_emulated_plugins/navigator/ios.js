// Override main navigator object values
(function init() {
	navigator.__defineGetter__('platform', function(){return 'iPad';});
	navigator.__defineGetter__('userAgent', function(){return 'iPad';});
	navigator.__defineGetter__('vendor', function(){return 'Google Inc.';});
	navigator.__defineGetter__('maxTouchPoints', function(){return 1;});
	navigator.__defineGetter__('hardwareConcurrency', function(){return 2;});
	navigator.__defineGetter__('appCodeName', function(){return 'Mozilla';});
	navigator.__defineGetter__('appName', function(){return 'Netscape';});
	navigator.__defineGetter__('appVersion', function(){return '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';});
	navigator.__defineGetter__('product', function(){return 'Gecko';});
	navigator.__defineGetter__('language', function(){return 'es';});
	navigator.__defineGetter__('languages', function(){return 'es-ES,es,de,en,fr,it,ja,pl,pt';});
	navigator.__defineGetter__('onLine', function(){return true;});
	navigator.__defineGetter__('cookieEnabled', function(){return true;});
	navigator.__defineGetter__('doNotTrack', function(){return null;});
})();