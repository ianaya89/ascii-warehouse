(function() {
  'use strict';

  angular.module('ascii-warehouse.filters')

  .filter('date', function () {
    return function (date) {
      date = new Date(date);
      var daysDiff = Math.round((new Date() - date) / (1000 * 60 * 60 *24));

      if (daysDiff <= 7 ) {
        var text = daysDiff === 1 ? ' day ago' : ' days ago';
        return daysDiff + text;
      }

      var month = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month;

      var days = date.getDate();
      days = days < 10 ? '0' + days : days;

      return month + '.' + days + '.' + date.getFullYear();
    };
  });
})();