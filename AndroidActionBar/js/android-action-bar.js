define(['jquery', 'backbone', 'underscore', './actions-view', './overflow-view'],
  function ($, Backbone, _, ActionsView, OverflowView){

  var AndroidActionBar = Backbone.View.extend({
    tagName: "div",

    className: "android-action-bar",

    template: _.template("<div class='action-bar-top'>"+
                          "<div class='app-icon'>"+
                              "<img src='<%= app-icon %>'>"+
                          "</div>"+

                          "<div class='view-control'>"+
                            "<%= title %>"+
                          "</div>"+
                          
                          "<div class='action-overflow'>"+
                              "<img src='<%= overflow-icon %>'>"+
                          "</div>"+
                          
                          "<div class='action-buttons'>"+
                          "</div>"+
                           
                          "<div class='clear'>"+
                          "</div>"+
                       "</div>"),

    /**
     *
     *
     */
    initialize: function (){
      _.bindAll(this, 'render','setOverflow','setActions');
      this.overflow = this.options.overflow;
      this.actions = this.options.actions;


    },

    /**
     *
     *
     */
    render: function (){

      //render parts if they are defined.
      if(this.overflow !== undefined){
        this.setOverflow(this.overflow);
      }
      if(this.actions !== undefined){
        this.setActions(this.actions);
      }
    },

    events: {

    },

    setOverflow: function(overflow){


    },

    setActions: function(actions){

    }



  });

  return AndroidActionBar;
});