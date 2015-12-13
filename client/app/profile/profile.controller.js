'use strict';

(function() {

var app = angular.module('complainoApp')
app.controller('profileController', profileController);

function profileController($scope, Complaint, localStorageService) {
	$scope.complaints = [];
	$scope.user = {};
	$scope.currentComplaint;
	$scope.input = { message: '' };


	$scope.getCurrentTime = getCurrentTime;
	$scope.select = select;
	$scope.sendMessage = sendMessage;
	
	active();


	function active() {
		$scope.user = localStorageService.get('user');

		//fetch company
		// $scope.complaints = Complaint.query({userEmail: $scope.user.email});
		Complaint.query().$promise
		.then(function(res) {
			$scope.complaints = res;
			$scope.currentComplaint = $scope.complaints[0];
		})
		.catch();
		$scope.currentComplaint = {};
	}

	function getCurrentTime() {
		var time = moment().format('MMM DD, YYYY');
		return time;
	}

	function select(index) {
		$scope.currentComplaint = $scope.complaints[index];
	}

	function sendMessage(message) {
		$scope.currentComplaint.messages.push({
			isFromUser: true,
			content: message
		});	

		$scope.currentComplaint.$update();

		$scope.input.message = '';
	}
}

})();
