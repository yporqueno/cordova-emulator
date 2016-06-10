// Override main navigator object values
(function init() {
	navigator.__defineGetter__('platform', function(){return 'Android';});
	navigator.__defineGetter__('userAgent', function(){return 'Android';});
})();