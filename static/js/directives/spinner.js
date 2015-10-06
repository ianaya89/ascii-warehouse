(function() {
  'use-strict';

  angular.module('ascii-warehouse.directives')

  .directive('spinner', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/spinner.html'
    };
  });

})();