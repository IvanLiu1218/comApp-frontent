/// <reference path="../app.ts" />

'use strict';

module comApp {

  export var controllerName = 'il.comApp.login.controller';

  export interface ILoginControllerScope extends ng.IScope {
    loginController: LoginController;
  }

  export class LoginController {

    username: string;
    password: string;

    constructor (private $scope: ILoginControllerScope) {
      this.$scope.loginController = this;
    }
  }
}

angular.module('comApp')
  .controller(comApp.controllerName, comApp.LoginController)
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('docs-dark', 'default')
                      .primaryPalette('yellow')
                      .dark();
  });
