'use strict';


var blogFilters = angular.module('blogFilters', []);

blogFilters.filter('checkCross', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
