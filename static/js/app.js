(function(){
  'use strict';

  angular.module('ascii-warehouse.services', []);
  angular.module('ascii-warehouse.filters', []);
  angular.module('ascii-warehouse.directives', []);
  angular.module('ascii-warehouse.controllers', []);
  angular.module('ascii-warehouse.constants', []);

  angular.module('ascii-warehouse', [
    'ascii-warehouse.controllers',
    'ascii-warehouse.services',
    'ascii-warehouse.constants',
    'ascii-warehouse.directives',
    'ascii-warehouse.filters'
    ]);
})();