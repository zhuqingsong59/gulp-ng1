module.exports=[
	'$scope','$state',
	function($scope,$state){
		console.log('route1');
		$scope.ttt = false;
		$scope.goRoute2=function(){
			$scope.ttt = !$scope.ttt;
			// $state.go('route2');
		}
	}
]
