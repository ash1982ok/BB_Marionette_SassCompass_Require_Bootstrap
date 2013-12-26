// Break out the application running from the configuration definition to
// assist with testing.
require( [], function() {
	"use strict";
	require(["router", "bootstrap", "eventmap","marionette", "text!data/data.json"], 
		function(Router, Bootstrap, EventMap, Marionette, AppData) {
		
		// ACNLifeSci is the namespace for this application
		window.ACNLifeSci = new Marionette.Application();
  
  		// Regions for Appplications
  		ACNLifeSci.addRegions({
  			headerRegion:"#header",
			bodyRegion: "#body",
			footerRegion: "#footer"
		});

		EventMap.initialize();
		EventMap.mapAll();

		ACNLifeSci.router = new Router();
		ACNLifeSci.appData = JSON.parse(AppData);

		Backbone.history.start({
			pushState: true,
			root: "/"
		});

		ACNLifeSci.start();
	});
});