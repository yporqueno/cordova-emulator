window.cordova = window.cordova || {};
window.cordova.file = window.cordova.file || {
	//dataDirectory:"file:///data/user/0/io.cordova.appname/files/",
	dataDirectory:"/",
};

window.fileChooser = window.fileChooser || {
	open:function(success, failure) {
		var fc = jQuery('<input id="file-chooser-fake" type="file" style="visibility:hidden;overflow:hidden;width:1px;height:1px;text-indent:-99999px;" />').appendTo('body');

		fc.on('change', onChange);

		function onChange(e) {
			//if(success){success(this.files[0].name)}
			if(success){success(cordova.file.dataDirectory+this.files[0].name)}
			fc.off('change');
			fc.remove();
		}

		fc.click();

	}
};