/*
The MIT License (MIT)
Copyright (c) 2016 yporqueno
http://www.yporqueno.es

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/


document.addEventListener('DOMContentLoaded', function(){

	var PATH = 'cordova_emulated_plugins/';

	function init () {
		getConfig();
	}


	function getConfig() {
		var files = [];
		ajax(PATH + 'config.json', function(data){
			for (var plugin in data.plugins) {
				for (var platform in data.plugins[plugin]) {
					if(platform === data.platform_target){
						//console.log('plugin: ', PATH, plugin, data.plugins[plugin][platform]);
						files.push(PATH + plugin + '/' + data.plugins[plugin][platform]);
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





