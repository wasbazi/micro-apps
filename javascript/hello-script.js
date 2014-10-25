console.log('in hello-script')
angular.module('helloApp', [])
  .controller('HelloAppController', function($scope){
    $scope.variable = "This is set in HelloAppController";
    console.log('in HelloAppController')
  })
