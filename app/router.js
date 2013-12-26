define(["backbone", "eventmap","appcontroller"], function(Backbone, EventMap, AppController) {
  "use strict";

  // Defining the application router.
  var router = Backbone.Marionette.AppRouter.extend({
    
    controller: AppController,
    
    appRoutes: {
      "": "index"
    }

  });
  return router;
});