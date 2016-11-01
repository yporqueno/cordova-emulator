// Camera plugin
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html

navigator.camera = navigator.camera || {
	DestinationType: {
		DATA_URL: 0,
		FILE_URI: 1,
		NATIVE_URI: 2
	},
	Direction: {
		BACK: 0,
		FRONT: 1
	},
	EncodingType: {
		JPEG: 0,
		PNG: 1
	},
	MediaType: {
		ALLMEDIA: 2,
		PICTURE: 0,
		VIDEO: 1
	},
	PictureSourceType: {
		CAMERA: 1,
		PHOTOLIBRARY: 0,
		SAVEDPHOTOALBUM: 2
	},
	PopoverArrowDirection: {
		ARROW_ANY: 15,
		ARROW_DOWN: 2,
		ARROW_LEFT: 4,
		ARROW_RIGHT: 8,
		ARROW_UP: 1
	},
	cleanup: function(successCallback, errorCallback){
		console.log('cleanup');
	},
	getPicture: function(successCallback, errorCallback, options){
		//console.log('getPicture...');
		ajax('cordova_emulated_plugins/cordova-plugin-camera/imgbase64.txt', function(data){
			successCallback(data);
		}, function(xhr){
			console.log('Error loading file.' + xhr)
		});

		function ajax(file, success, error, dataType) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', file, true);
			xhr.onreadystatechange = function (e) {
				if (xhr.readyState == 4) {
					if(xhr.status === 200){
						var response = xhr.responseText;
						if(dataType === 'json'){
							response = JSON.parse(xhr.responseText);
						}
						success(response);
						xhr.abort();
						xhr = undefined;
						return;
					}else{
						error(xhr);
					}
				}
			};
			xhr.send(null);
		}

	}
};

window.Camera = window.Camera || {
	DestinationType: {
		DATA_URL: 0,
		FILE_URI: 1,
		NATIVE_URI: 2
	},
	Direction: {
		BACK: 0,
		FRONT: 1
	},
	EncodingType: {
		JPEG: 0,
		PNG: 1
	},
	MediaType: {
		ALLMEDIA: 2,
		PICTURE: 0,
		VIDEO: 1
	},
	PictureSourceType: {
		CAMERA: 1,
		PHOTOLIBRARY: 0,
		SAVEDPHOTOALBUM: 2
	},
	PopoverArrowDirection: {
		ARROW_ANY: 15,
		ARROW_DOWN: 2,
		ARROW_LEFT: 4,
		ARROW_RIGHT: 8,
		ARROW_UP: 1
	}
};

window.CameraPopoverHandle = window.CameraPopoverHandle || function(){
};

window.CameraPopoverOptions = window.CameraPopoverOptions || function(x, y, width, height, arrowDir){
};
