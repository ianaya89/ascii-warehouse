(function() {
  'use strict';

  angular.module('ascii-warehouse.filters')

  .filter('cents', function () {
    return function (price) {
      return price ? '$' + (price * 0.01).toFixed(2) : '-';
    };
  });
})();