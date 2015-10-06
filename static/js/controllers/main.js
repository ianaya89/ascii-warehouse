(function() {
  'use strict';

  angular.module('ascii-warehouse.controllers')

  .controller('MainCtrl', ['$product', '$ad', function($product, $ad) {
    var _this = this;
    var limit = 20;
    var skip = 0;

    this.products = [];
    this.ads = [];
    this.productsQueue = [];
    this.sortType = 'id';
    this.isEndOfList = false;

    this.getProducts = function() {
      _this.isLoading = true;

      $product.get(limit, skip, _this.sortType)
      .then(onGetProductsSuccess, onError);

      skip += 20;
    };

    this.unQueueProducts = function() {
      _this.products = _this.products.concat(_this.productsQueue);
      _this.productsQueue = [];
      _this.getProducts();
    };

    this.sortProducts = function(sortType) {
      clearGrid();
      _this.sortType = sortType;
      _this.getProducts();
    };

    this.isActive = function(column) {
      return column.toLowerCase() === _this.sortType.toLowerCase();
    };

    function onGetProductsSuccess(response) {
      var data = response.data;
      if (data && data.length) {
        _this.productsQueue = data;
        _this.ads.push($ad.get());

        if (!_this.products || !_this.products.length) {
          _this.unQueueProducts();
        }
      }
      else {
        _this.isEndOfList = true;
      }

      _this.isLoading = false;
    }

    function onError(err) {
      console.log('Something went wrong: ' + err);
    }

    function clearGrid() {
      window.stop();
      _this.productsQueue = [];
      _this.products = [];
      _this.isEndOfList = false;
      skip = 0;
    }

    (function init() {
      _this.getProducts();
    })();

  }]);
})();
