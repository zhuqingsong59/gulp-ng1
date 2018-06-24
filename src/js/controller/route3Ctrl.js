
angular.module('app')
.controller('route3Ctrl', ['$scope','$state', function($scope,$state){
  console.log('route3Ctrl');
  $scope.goRoute4=function(){
    $state.go('route4')
  }
}])
