angular.module('app')
.controller('route4Ctrl', ['$scope','$state',function($scope,$state){
  console.log('route4Ctrl');
  $scope.goRoute3=function(){
    $state.go('route3')

  }
}])
