require(['./hello-script'], function(){
  angular.module('app', ['ui.router', 'helloApp'])
    .controller('AppController', function(){
      console.log('in AppController')
    })
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/");
      //
      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "apps/home.html"
        })
        .state('hello', {
          url: "/hello",
          templateUrl: "apps/hello.html"
        })
        .state('world', {
          url: "/world",
          templateUrl: "apps/world.html"
        })
      });

    angular.element(document).ready(function() {
       angular.bootstrap(document, ['app']);
    });

})
