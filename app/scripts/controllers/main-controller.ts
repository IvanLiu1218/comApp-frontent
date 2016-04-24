/// <reference path="../app.ts" />

'use strict';

module comApp {

  export var controllerName = 'il.comApp.main.controller';

  export interface IMainControllerScope extends ng.IScope {
    mainController: MainController;
  }

  export class MainController {

    constructor (private $scope: IMainControllerScope) {
      this.$scope.mainController = this;
    }
  }
}

angular.module('comApp')
  .controller(comApp.controllerName, comApp.MainController);
