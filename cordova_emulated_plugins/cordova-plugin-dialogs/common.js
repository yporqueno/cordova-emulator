// Notification plugin
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-dialogs/

navigator.notification = navigator.notification || {
	activityStart: function(title, message){
		console.log('ActivityStart...');
	},
	activityStop: function(){
		console.log('ActivityStop');
	},
	alert: function(message, completeCallback, title, buttonLabel){
		window.alert(message);
	},
	beep: function(count){
		console.log('beep ('+count+')');
	},
	confirm: function(message, resultCallback, title, buttonLabels){
		window.alert(message);
	},
	progressStart: function(title, message){
		console.log('progressStart...');
	},
	progressStop: function(){
		console.log('progressStop');
	},
	progressValue: function(value){
		console.log('progressValue... ('+value+')');
	},
	prompt: function(message, resultCallback, title, buttonLabels, defaultText){
		window.alert(message);
	}
};
