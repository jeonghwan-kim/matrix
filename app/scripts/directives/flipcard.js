'use strict';

/**
 * @ngdoc directive
 * @name matrixApp.directive:flipcard
 * @description
 * # flipcard
 */
angular.module('matrixApp')
  .directive('flipcard', function () {
    return {
      template: '<div class="wrapper">' +
                  '<label></label>' +
                  '<input type="checkbox" />' +
                  '<div class="flip-container">' +
                    '<div class="flipper">' +
                      '<div class="front">' +
                        '<div class="card"><h1 id="front-text"></h1></div>' +
                      '</div>' +
                      '<div class="back">' +
                        '<div class="card"><h3 id="back-text"></h3></div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>',
      restrict: 'E',
      scope: '@',
      link: function postLink(scope, element, attrs) {
        scope.ctrlId = attrs.ctrlId;
        scope.frontText = attrs.frontText;
        scope.backText = attrs.backText;

        element.find('.wrapper').width(attrs.width);
        element.find('.wrapper').height(attrs.height);
        element.find('#front-text').text(attrs.frontText);
        element.find('#back-text').text(attrs.backText);
        element.find('label').attr('for', attrs.ctrlId);
        element.find('input[type=checkbox]').attr('id', attrs.ctrlId);
      }
    };
  });
