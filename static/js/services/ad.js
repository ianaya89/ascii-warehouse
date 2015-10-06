(function() {
  'use strict';

  angular.module('ascii-warehouse.services')

  .factory('$ad', [function () {
    var ads = [];

    var get = function(limit, skip) {
      var ad;
      
      do {
        ad = Math.random() * 1000;
      } while(!ads.indexOf(ad));

      return '/ad/?r=' + Math.floor(ad);
    };

    return {
      get: get
    };
  }]);
})();