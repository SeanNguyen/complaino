'use strict';

(function() {

class MainController {
}

var app = angular.module('complainoApp');
app.controller('navbarController', navbarController);

function navbarController($scope, $state) {
	$scope.goToProfile = goToProfile;

	function goToProfile() {
		$state.go('profile');
	}
}

})();
