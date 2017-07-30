var app = angular.module('jobApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../index.html',
      controller: 'JobListingController'
    });
});
