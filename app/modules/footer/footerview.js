define(["backbone", "marionette", "text!modules/footer/footer.html"], 

	function(Backbone, Marionette, FooterViewTmpl) {
	"use strict";

	var FooterView = Backbone.Marionette.ItemView.extend({
	  template: FooterViewTmpl
	});

	return FooterView;
});