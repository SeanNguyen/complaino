function DialogController($scope, $mdDialog) {
	$scope.user = {};

	$scope.hide = function() {
		$mdDialog.hide();
	};
  	$scope.cancel = function() {
    	$mdDialog.cancel();
  	};
	$scope.answer = function(user) {
		$mdDialog.hide(user);
	};
}