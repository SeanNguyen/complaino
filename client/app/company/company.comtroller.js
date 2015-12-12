'use strict';

(function() {

var app = angular.module('complainoApp')
app.controller('companyController', companyController);

function companyController($scope, $stateParams, Complaint) {
	$scope.complaints = [];
	$scope.companyName = '';

	active();

	function active() {
		$scope.companyName = $stateParams.companyName;
		//fetch company
		var companyName = $stateParams.companyName;
		$scope.complaints = Complaint.query({companyName: $scope.companyName});
	}
}

})();
