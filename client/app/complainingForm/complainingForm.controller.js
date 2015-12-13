'use strict';

(function() {

class MainController {
}

var app = angular.module('complainoApp');
app.controller('complainingFormController', complainingFormController);

function complainingFormController($rootScope, $scope, localStorageService, $mdDialog, $mdMedia, Complaint) {
	$scope.input = {
		selectedItem: '',
		searchText: '',
		stage: 0,
		complain: ''
	};
	$rootScope.user = null;

	$scope.querySearch = querySearch;
	$scope.nextStage = nextStage;
	$scope.lastStage = lastStage;
	$scope.reset = reset;
	$scope.selectCategory = selectCategory;
	$scope.currentCategoryIndex = -1;
	$scope.getCurrentTime = getCurrentTime;

	var companies = [	{ name: 'Singtel', 	categories: ['Mobile', 'Internet', 'Connectivity', 'Bill', 'Others'] }, 
						{ name: 'M1' }, 
						{ name: 'StarHub' }, 
						{ name: 'Vodafone'},
						{ name: 'Singapore Airline', 
							categories: ['Personnel', 'Cancellation', 'Lost Item', 'Baggage', 'Delay', 'Others'] }];

	active()

	function active() {
		//check local storageto check current user
		$rootScope.user = localStorageService.get('user');
	}

	function querySearch(searchText) {
		var results = [];
		for (var i = companies.length - 1; i >= 0; i--) {
			searchText = searchText.toLowerCase();
			var name = companies[i].name.toLowerCase();
			if(name.indexOf(searchText) >= 0)
				results.push(companies[i]);
		};
		return results;
	}
	
	function nextStage() {
		//try to commit when not log in
		if($scope.input.stage + 1 === 2 && !$scope.user) {
			showLogInPopUp();
			return;
		}
		if($scope.input.stage + 1 === 2 && $scope.user) {
			//save to db
			var complaint = new Complaint({
				company: $scope.input.selectedItem.name,
				content: $scope.input.complain,
				userEmail: $scope.user.email,
				rate: 0,
				category: $scope.input.selectedItem.categories[$scope.currentCategoryIndex],
				customerId: $scope.input.customerId,
				referenceId: $scope.input.referenceId,
				messages: [{content: "Hi! This is just to let you know that we have received your case and will start working on it. Should we require further information, we'll reach out to you shortly. Cheers!", 
							isFromUser: false}],
				status: true,
				timestamp: moment()
			});
			complaint.$save()
			.then(function(res) {
				console.log(res);
			});
		}

		if($scope.input.stage >= 2)
			return;
		else
			$scope.input.stage++;
	}

	function lastStage() {
		if($scope.input.stage <= 0)
			return;
		else
			$scope.input.stage--;
	}

	function reset() {
		$scope.input = {
			selectedItem: '',
			searchText: '',
			stage: 0
		};
	}

	function showLogInPopUp(ev) {
		$mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'app/templates/template-login.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $mdMedia('sm') && $scope.customFullscreen
	    })
	    .then(function(user) {
	    	localStorageService.set('user', user);
	    	$rootScope.user = user;
	    	nextStage();
	    }, function() {
	    });
	    $scope.$watch(function() {
	      return $mdMedia('sm');
	    }, function(sm) {
	      $scope.customFullscreen = (sm === true);
	    });
	}

	function selectCategory(index) {
		$scope.currentCategoryIndex = index;
	}

	function getCurrentTime() {
		var time = moment().format('MMM DD, YYYY');
		return time;
	}
}

})();
