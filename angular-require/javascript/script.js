require(['./hello-script'], function(){
  angular.module('app', ['ui.router', 'helloApp'])
    .controller('AppController', function(){
      console.log('in AppController')
    })
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "partials/home.html"
        })
        .state('hello', {
          url: "/hello",
          templateUrl: "partials/hello.html"
        })
        .state('world', {
          url: "/world",
          templateUrl: "partials/world.html"
        })
      });

    angular.element(document).ready(function() {
       angular.bootstrap(document, ['app']);
    });

})
