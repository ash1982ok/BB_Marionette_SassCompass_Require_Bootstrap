// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    // Make vendor easier to access.
    "vendor": "../vendor",

    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "text": "../vendor/bower/requirejs-text/text",
    "bootstrap": "../vendor/bower/bootstrap/dist/js/bootstrap",
    "jquery.validate": "./libs/jquery.validate",
    "jquery.dform": "./libs/jquery.dform-1.1.0",
    "marionette":"../vendor/bower/marionette/lib/core/amd/backbone.marionette",
    "backbone.babysitter":"../vendor/bower/marionette/public/javascripts/backbone.babysitter",
    "backbone.wreqr":"../vendor/bower/marionette/public/javascripts/backbone.wreqr",
    // Custom libs
    "eventmap": "eventmap",
    "router": "router",
    "modules": "./modules"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "bootstrap": {
      deps: ["jquery"],
      exports: "Boostrap"
    },
    "marionette" : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    },
    "jqury.validate": {
      deps: ["jquery"]
    },
    "jquery.dform": {
      deps: ["jquery"]
    }
  }
});


require(["main"], function(main) {
  "use strict";
  // Can write some app level configuration here
});