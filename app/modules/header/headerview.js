define(["backbone", "marionette", "text!modules/header/header.html"], 

	function(Backbone, Marionette, HeaderViewTmpl) {
	"use strict";

	var HeaderView = Backbone.Marionette.ItemView.extend({
	  template: HeaderViewTmpl
	});

	return HeaderView;
});