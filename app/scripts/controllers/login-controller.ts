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
  .config(($mdThemingProvider, $translateProvider) => {
    $mdThemingProvider.theme('docs-dark', 'default')
                      .primaryPalette('yellow')
                      .dark();
    $translateProvider.useStaticFilesLoader({
        prefix: '/locales/',
        suffix: '.json'
    });
    $translateProvider.registerAvailableLanguageKeys(['en_US', 'zh_CN'], {
        'en_US': 'en_US',
        'zh_CN': 'zh_CN'
      }
    );
    $translateProvider.preferredLanguage('zh_CN');
    //$translateProvider.determinePreferredLanguage();
    //$translateProvider.fallbackLanguage('en');
  });
