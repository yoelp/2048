var app = angular.module("App",[])

app.controller("Game",function Game($scope){
	$scope.gm = game();
	$scope.gm.init(4,2);
window.gm = $scope.gm
	window.addEventListener("keydown",function(e){
			$scope.$apply(function(){
			switch(e.keyCode){
				case 37:
				case 72:
					e.preventDefault();
					$scope.gm.move("L");
					break;
				case 38:
				case 74:
					e.preventDefault();
					$scope.gm.move("U")
					break;
				case 39:
				case 75:
					e.preventDefault();
					$scope.gm.move("R");
					break;
				case 40:
				case 73:
					e.preventDefault();
					$scope.gm.move("D");
					break;
			}
		});
		return false;
	});
});