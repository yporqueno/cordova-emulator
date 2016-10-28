# cordova-emulator
Emulates cordova.js file in browser to develop cordova/phonegap apps via web.

# Installation
To use you only have to copy cordova.js and cordova_emulated_plugins to the www cordova project folder.

```
- www
-- cordova.js
-- cordova_emulated_plugins
```

You can fonfigure platform target in cordova_emulated_plugins/config.json file
Possible values are: "android", "ios", "browser"...

```javascript
{
	"platform_target": "browser",

	"plugins": {
		"navigator": {
			"android": "android.js",
			"ios": "ios.js",
			"browser": "browser.js"
		},
		"cordova-plugin-network-information": {
			"android": "common.js",
			"ios": "common.js",
			"browser": "common.js"
		},
		"cordova-plugin-device": {
			"android": "android.js",
			"ios": "ios.js",
			"browser": "browser.js"
		},
		"cordova-plugin-dialogs": {
			"android": "common.js",
			"ios": "common.js",
			"browser": "common.js"
		},
		"cordova-plugin-camera": {
			"android": "common.js",
			"ios": "common.js",
			"browser": "common.js"
		}
	}
}
```

You can add/remove/modify your plugins list in cordova_emulated_plugins/config.json, and the js files you want to execute when lounch your proyect in a browser.
