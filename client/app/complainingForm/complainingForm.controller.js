'use strict';

(function() {

class MainController {
}

var app = angular.module('complainoApp');
app.controller('complainingFormController', complainingFormController);

function complainingFormController($rootScope, $scope, localStorageService, $mdDialog, $mdMedia) {
	$scope.input = {
		selectedItem: '',
		searchText: '',
		stage: 0
	};
	$rootScope.user = null;

	$scope.querySearch = querySearch;
	$scope.nextStage = nextStage;
	$scope.lastStage = lastStage;
	$scope.reset = reset;

	var companies = [	{ name: 'Singtel' }, 
						{ name: 'M1' }, 
						{ name: 'StarHub' }, 
						{ name: 'Singapore Airline' }];

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
		if($scope.input.stage + 1 === 1 && !$scope.user) {
			showLogInPopUp();
			return;
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
}

})();
