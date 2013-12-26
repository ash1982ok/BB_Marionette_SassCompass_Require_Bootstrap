define(["underscore","jquery","backbone","router"],
	function(_, $, Backbone, Router) {
	"use strict";

	var EventMap = {
		initialize: function(){
			var pubsub = _.extend({}, Backbone.Events);
			ACNLifeSci.pubsub = pubsub;
		},
		mapAll: function (){
			ACNLifeSci.pubsub.on("CHANGE_PAGE:index", function (){
			    ACNLifeSci.router.navigate("home",{trigger: true});
			},Router);
		}
	};
	return EventMap;
});