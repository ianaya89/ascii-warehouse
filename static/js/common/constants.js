(function() {
  'use-strict';

  angular.module('ascii-warehouse.constants')

  .constant('API_URL', location.protocol + '//' + location.host + '/api');
})();