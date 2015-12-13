'use strict';

(function () {

	var app = angular.module('complainoApp');
	app.controller('companyController', companyController);

	function companyController($scope, $stateParams, Complaint) {
		$scope.complaints = [];
		$scope.companyName = '';

		$scope.averageRating = averageRating;
		$scope.getNumber = getNumber;

		active();

		function active() {
			$scope.companyName = $stateParams.companyName;
			//fetch company
			var companyName = $stateParams.companyName;
			$scope.complaints = Complaint.query({ companyName: $scope.companyName });
		}

		function averageRating() {
			var sum = 0;
			for (var i = $scope.complaints.length - 1; i >= 0; i--) {
				sum += $scope.complaints[i].rate;
			};
			return sum / $scope.complaints.length;
		}

		function getNumber(number) {
			return new Array(number);
		}
	}
})();
//# sourceMappingURL=company.comtroller.js.map
