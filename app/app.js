"use strict";

var app = angular.module("TaskTracker", ["ngRoute", "ui.materialize", "angularMoment"])
.constant("BangazonTaskTracker", "http://localhost:5000/api/");

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/task.html',
      controller: 'TaskCtrl'
    }).
    otherwise('/');
});
