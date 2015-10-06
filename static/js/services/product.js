(function() {
  'use strict';

  angular.module('ascii-warehouse.services')

  .factory('$product', ['$http', 'API_URL', function ($http, API_URL) {

    var get = function(limit, skip, sort) {
      sort = sort || 'id';

      return $http({
        method: 'GET',
        url: API_URL + '/products?limit=' + limit + '&skip=' + skip + '&sort=' + sort, 
        transformResponse: [function (data) {
          data = data.split('\n') || [];

          for (var i = 0, len = data.length; i < len; i++) {
            try {
              data[i] = JSON.parse(data[i]);
            }
            catch (ex) {
              data.splice(i, len);
            }
          }

          return data;
        }]
      });
    };

    return {
      get: get
    };
  }]);

})();