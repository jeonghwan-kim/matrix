'use strict';

/**
 * @ngdoc function
 * @name matrixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matrixApp
 */
angular.module('matrixApp')
  .controller('MainCtrl', function ($scope) {
    var TEXT = [
      '사2:18',
      '마1:1',
      '막2:1',
      '요3:16',
      '창1:1',
      '레13:16',
      '막1:15',
      '갈2:14',
      '유1:2',
      '잠1:3',
      '시8:3',
      '전1:1',
      '요:4:9',
      '베후3:14',
      '갈4:9',
      '계20:1'
    ];

    $scope.data = TEXT.sort(function (a, b) { return Math.random() - 0.5; });
  });
