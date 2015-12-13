function DialogController($scope, $mdDialog, $interval) {
	$scope.ready = false;
	$scope.loading = false;
	$scope.user = {};

	$scope.onEmailChange = onEmailChange;

	$scope.hide = function() {
		$mdDialog.hide();
	};
  	$scope.cancel = function() {
    	$mdDialog.cancel();
  	};
	$scope.answer = function(user) {
		$mdDialog.hide(user);
	};

	function onEmailChange() {
		$scope.ready = false;
		$scope.loading = true;
		$interval(function () {
			$scope.ready = true;
			$scope.loading = false;
		}, 2000);
	}
}