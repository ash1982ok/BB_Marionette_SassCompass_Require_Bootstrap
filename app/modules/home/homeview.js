define(["backbone", "marionette", "text!modules/home/home.html"], 

	function(Backbone, Marionette, HomeViewTmpl) {
	"use strict";

	var HomeView = Backbone.Marionette.ItemView.extend({
	  template: HomeViewTmpl
	});

	return HomeView;
});