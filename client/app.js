'use strict';
var taskApp = angular.module('taskApp', ['ngResource', 'ngRoute']);

taskApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider,$httpProvider) {
    $routeProvider
        .when("/", {redirectTo: "/dashBoard"})
        .when("/dashBoard", {templateUrl: "client/dashboard/partials/dashboard.html", controller: "DashBoardCtrl"})
        .otherwise('/');
}]);