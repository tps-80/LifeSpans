
angular.module('lifespans', [
  'ngRoute',
  'ngAnimate'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/data', {
      templateUrl: 'data.html',
      controller: 'DataController'
    })
    .otherwise({
      redirectTo: '/'
    });
})