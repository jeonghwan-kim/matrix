'use strict';

describe('Directive: flipcard', function () {

  // load the directive's module
  beforeEach(module('matrixApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flipcard></flipcard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flipcard directive');
  }));
});
