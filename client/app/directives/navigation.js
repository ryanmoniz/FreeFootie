'use strict'

var navTemplate = 
  '<div  class="checkin-btn"></div>'
  + '<div class="topcoat-navigation-bar__item center full" ng-transclude>'
      + '<h1 class="topcoat-navigation-bar__title">{{title}}</h1>'
  + '</div>';

angular.module('freefootieApp')
  .directive('navigation', function ($compile) {
  	return {
  		restrict: 'E',
      template: navTemplate,
      transclude: true,
      scope: false,
  		link: function(scope, el, attrs) {
        el.addClass("topcoat-navigation-bar");
  		}
  	};
  });