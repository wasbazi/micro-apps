angular.module('app', ['ngRoute'])
  .controller('AppController', function(){
  })
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'apps/home.html'
      })
      .when('/hello', {
        templateUrl: 'apps/hello.html',
        controller: ''
      })
      .when('/world', {
        templateUrl: 'apps/world.html',
        controller: ''
      })
  })
