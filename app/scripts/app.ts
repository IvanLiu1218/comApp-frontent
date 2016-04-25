/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

'use strict';

angular.module('comApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'pascalprecht.translate'
  ])
  .config(($routeProvider:ng.route.IRouteProvider, $translateProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: comApp.controllerName
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'il.comApp.login.controller'
      })
      .otherwise({
        redirectTo: '/'
      });
    $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
    });
    $translateProvider.registerAvailableLanguageKeys(['en_US', 'zh_CN'], {
        'en_US': 'en_US',
        'zh_CN': 'zh_CN'
      }
    );
    $translateProvider.preferredLanguage('en_US');
    //$translateProvider.determinePreferredLanguage();
    //$translateProvider.fallbackLanguage('en');
  });
