'use strict';

(function() {

var app = angular.module('complainoApp')
app.controller('profileController', profileController);

function profileController($scope, Complaint, localStorageService, $interval) {
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
		// $scope.complaints = Complaint.query({userEmail: $scope.user.email}).$promise
		Complaint.query().$promise
		.then(function (res) {
			$scope.complaints = res;
			$scope.currentComplaint = $scope.complaints[$scope.complaints.length - 1];
		});
		$scope.currentComplaint = {};
	}

	function getCurrentTime() {
		var time = moment().format('MMM DD, YYYY');
		return time;
	}

	function select(complaint) {
		$scope.currentComplaint = complaint;
	}

	function sendMessage(message) {
		$scope.currentComplaint.messages.push({
			isFromUser: true,
			content: message
		});	

		$interval(function () {
			$scope.currentComplaint.messages.push({
				isFromUser: false,
				content: "Got it! get back to you soon!"
			});	
			$scope.currentComplaint.$update();
		}, 3000, 1);

		$scope.input.message = '';
	}
}

})();
