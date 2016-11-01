// Plugin App Version
//https://github.com/whiteoctober/cordova-plugin-app-version

window.cordova = window.cordova || {};
window.cordova.getAppVersion = {};

window.cordova.getAppVersion.getAppName = function(callback){
	setTimeout(callback, 1, 'Nombre de mi app');
};

window.cordova.getAppVersion.getPackageName = function(callback){
	setTimeout(callback, 1, 'com.midominio.miapp');
};

window.cordova.getAppVersion.getVersionCode = function(callback){
	setTimeout(callback, 1, '1000000');
};

window.cordova.getAppVersion.getVersionNumber = function(callback){
	setTimeout(callback, 1, '1.0.0');
};
