/// <reference path="../app.ts" />

'use strict';

module comAppApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {

    constructor (private $scope: IMainScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('comAppApp')
  .controller('MainCtrl', comAppApp.MainCtrl);
