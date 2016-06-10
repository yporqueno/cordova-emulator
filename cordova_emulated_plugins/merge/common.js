// Sustituyo los archivos por los que haya en la carpeta merges
(function simulateMerge(platform) {

	/*jQuery.get('../listfilesindirectory.php?dir=merges/' + platform + '/js/', function(data){
		//console.log('data: ', data.files);
		for (var index in data.files){
			console.log('js: ', data.files[index]);
			jQuery('script[src="js/' + data.files[index] + '"]').attr('src', '../merges/' + platform + '/js/' + data.files[index]);
		}
	}, 'json');*/

	/*jQuery.get('../listfilesindirectory.php?dir=merges/' + platform + '/css/', function(data){
		//console.log('data: ', data.files);
		for (var index in data.files){
			console.log('css: ', data.files[index]);
			jQuery('link[href="css/' + data.files[index] + '"]').attr('href', '../merges/' + platform + '/css/' + data.files[index]);
		}
	}, 'json');*/
})();