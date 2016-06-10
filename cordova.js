document.addEventListener('DOMContentLoaded', function(){

	var _path = 'cordova_emulated_plugins/';

	function init () {
		getConfig();
	}


	function getConfig() {
		var files = [];
		ajax(_path + 'config.json', function(data){
			for (var plugin in data.plugins) {
				for (var platform in data.plugins[plugin]) {
					if(platform === data.platform_target){
						//console.log('plugin: ', _path, plugin, data.plugins[plugin][platform]);
						files.push(_path + plugin + '/' + data.plugins[plugin][platform]);
					}
				}
			}
			loadFiles(files);
		}, function(xhr){
			console.log('Error loading config.json');
		}, 'json');

	}


	function loadFiles(files) {
		var alreadyLoaded = 0;
		for(var f in files) {
			ajax(files[f], success, error);
		}

		function success(data){
			eval(data);
			alreadyLoaded++;
			if(alreadyLoaded >= files.length){
				filesLoaded();
				return;
			}
		}

		function error(xhr) {
			console.log("Error loading " + f);
		}

		function filesLoaded() {
			document.dispatchEvent(new Event('deviceready'));
		}
	}



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

	init();

}, false);






