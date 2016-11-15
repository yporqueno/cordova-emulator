// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/

window.cordova = window.cordova || {};
window.cordova.file = window.cordova.file || {
	//applicationDirectory:"file:///android_asset/",
	applicationDirectory:"../",
	applicationStorageDirectory:"file:///data/user/0/io.cordova.appname/",
	cacheDirectory:"file:///data/user/0/io.cordova.appname/appname/",
	//dataDirectory:"file:///data/user/0/io.cordova.appname/files/",
	dataDirectory:"dataDirectory/",
	documentsDirectory:null,
	externalApplicationStorageDirectory:"file:///storage/emulated/0/Android/data/io.cordova.appname/",
	externalCacheDirectory:"file:///storage/emulated/0/Android/data/io.cordova.appname/cache/",
	externalDataDirectory:"file:///storage/emulated/0/Android/data/io.cordova.appname/files/",
	externalRootDirectory:"file:///storage/emulated/0/",
	sharedDirectory:null,
	syncedDataDirectory:null,
	tempDirectory:null
};


window.requestFileSystem = window.requestFileSystem || function(type, size, successCallback, errorCallback){
	var fs = {
		name:"persistent",
		root:{
			filesystem: {
				name: 'persistent',
				root: {}
			},
			fullPath:"/",
			isDirectory:true,
			isFile:false,
			name:"",
			nativeURL:window.cordova.file.dataDirectory+"files/",
			getFile: function(path, options, getFileSuccessCallback, getFileErrorCallback) {
				getFileSuccessCallback(new FileEntry(path));
			},
			getDirectory:function(path, options, getFileSuccessCallback, getFileErrorCallback){
				getFileSuccessCallback(new FileEntry(path));
			}
		}
	};
	successCallback(fs);
};


// FileReader overwrite
(function(){
	var oldProto = FileReader.prototype;
	window.FileReader = function() {
		var me = {
			result:'',
			onloadend:function(){},
			readAsText:function(file){
				//console.log('file: ', file);
				ajax(file.name, function(data){
					me.result = data;
					me.onloadend();
				}, function(xhr){

				});
			},
			readAsArrayBuffer:function(file){
				//console.log('file: ', file);
			}
		};
		return me;
	};
	window.FileReader.prototype = oldProto;
})();


window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || function(path, getFileSuccessCallback){
	getFileSuccessCallback(new FileEntry(path));
};



window.FileEntry = window.FileEntry || function(name, fullPath, fileSystem, nativeURL) {
	return {
		filesystem: {
			name: 'persistent',
			root: {}
		},
		fullPath:"/"+name,
		isDirectory:false,
		isFile:true,
		name:name,
		nativeURL:window.cordova.file.dataDirectory+"files/"+name,
		createWriter: function(cwCallback){
			var fileWriter = {
				onwriteend: function(){},
				onerror:function(){},
				write: function(blob){
					this.onwriteend();
				}
			};
			cwCallback(fileWriter);
		},
		file: function(fileCallback){
			var f = {
				end:215,
				lastModified:1478733506000,
				lastModifiedDate:1478733506000,
				localURL:"cdvfile://localhost/persistent/"+name,
				name:name,
				size:215,
				start:0,
				type:null
			};
			fileCallback(f);
		},
		remove:function(){

		},
		copyTo:function(parentEntry, newName, success, fail){
			success(this);
		}
	};
};



window.LocalFileSystem = window.LocalFileSystem || {
	PERSISTENT:1,
	TEMPORARY:0
};




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
