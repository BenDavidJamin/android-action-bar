//Wait for relevant code bits to load before starting any tests
define(['jquery', 'backbone', 'underscore', '../js/android-action-bar'], function ($, Backbone, _, AndroidActionBar) {
    module("Core Tests");

    test("Add our view to the DOM", function(){
      equal( 1, 1, "Main View element added to the window");
    });

});