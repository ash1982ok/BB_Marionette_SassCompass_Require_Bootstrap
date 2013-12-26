define(['backbone', 'marionette', "modules/home/homeview",
		"modules/header/headerview", "modules/footer/footerview"],

function(Backbone, Marionette, HomeView, HeaderView, FooterView) {
    var AppController =  Backbone.Marionette.Controller.extend({
        
        //gets mapped to in AppRouter's appRoutes
        index: function() {
        	
        	var headerView = new HeaderView();
        	var footerView = new FooterView();
            var homeView = new HomeView();
            
            ACNLifeSci.headerRegion.show(headerView);
            ACNLifeSci.bodyRegion.show(homeView);
            ACNLifeSci.footerRegion.show(footerView);
        }
    });

    return new AppController;
});