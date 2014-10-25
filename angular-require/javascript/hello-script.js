angular.module('helloApp', [])
  .controller('HelloAppController', function($scope){
    $scope.variable = "This is set in HelloAppController";
    console.log('in HelloAppController')
  })
  .config(function($stateProvider){
    $stateProvider
      .state('hello.state1', {
        url: '/hello/state1',
        views: {
          'hello': { templateUrl: 'partials/hello/state1.html' }
        }
      })
      .state('hello.state2', {
        url: '/hello/state2',
        views: {
          'hello': { templateUrl: 'partials/hello/state2.html' }
        }
      })
  })
