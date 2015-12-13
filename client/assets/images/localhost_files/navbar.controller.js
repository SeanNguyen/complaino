'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	var MainController = function MainController() {
		_classCallCheck(this, MainController);
	};

	var app = angular.module('complainoApp');
	app.controller('navbarController', navbarController);

	function navbarController($scope, $state) {
		$scope.goToProfile = goToProfile;

		function goToProfile() {
			$state.go('profile');
		}
	}
})();
//# sourceMappingURL=navbar.controller.js.map
