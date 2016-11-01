// Email plugin
// https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
// sudo cordova plugins add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
window.plugins = window.plugins || {};
window.plugins.socialsharing = {
	available: function(callback){
		callback(true);
	},
	shareViaEmail: function(message, subject, to){
		to = to || ['mailto@domain.com'];
		window.open('mailto:' + to + '?subject=' + subject + '&body=' + message, '_blank', 'location=no');
	}
};
