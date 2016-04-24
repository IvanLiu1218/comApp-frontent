/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/logincontroller.ts" />

'use strict';

describe('Controller: LoginControllerCtrl', () => {

  // load the controller's module
  beforeEach(module('comAppApp'));

  var LoginControllerCtrl: comAppApp.LoginControllerCtrl,
    scope: comAppApp.ILoginControllerScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    LoginControllerCtrl = $controller('LoginControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
