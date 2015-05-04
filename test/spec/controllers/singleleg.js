'use strict';

describe('Controller: SinglelegCtrl', function () {

  // load the controller's module
  beforeEach(module('gaTravelApp'));

  var SinglelegCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglelegCtrl = $controller('SinglelegCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
