(function() {
  'use-strict';

  angular.module('ascii-warehouse.directives')

  .directive('scroll', function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind('scroll', function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          scope.$apply(attrs.scroll);
        }
      });
    };
  });

})();