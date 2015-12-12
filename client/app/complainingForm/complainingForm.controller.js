'use strict';

(function() {

class MainController {
}

var app = angular.module('complainoApp');
app.controller('complainingFormController', complainingFormController);

function complainingFormController($scope, localStorageService, $mdDialog, $mdMedia) {
	$scope.input = {
		selectedItem: '',
		searchText: '',
		stage: 0
	};
	$scope.user = null;


	$scope.searchTextChange = searchTextChange;
	$scope.querySearch = querySearch;
	$scope.nextStage = nextStage;
	$scope.lastStage = lastStage;
	$scope.reset = reset;

	active()

	function active() {
		//check local storageto check current user
		$scope.user = localStorageService.get('user');
	}

	function searchTextChange(searchText) {
		return [
			{ name: 'Singtel' }, 
			{ name: 'M1' }, 
			{ name: 'StarHub' }, 
			{ name: 'Singapore Airline' }, ]
	}

	function querySearch(searchText) {
		return [
			{ name: 'Singtel' }, 
			{ name: 'M1' }, 
			{ name: 'StarHub' }, 
			{ name: 'Singapore Airline' }, ]
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
	      templateUrl: 'app/complainingForm/template-login.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $mdMedia('sm') && $scope.customFullscreen
	    })
	    .then(function(answer) {
	      $scope.status = 'You said the information was "' + answer + '".';
	    }, function() {
	      $scope.status = 'You cancelled the dialog.';
	    });
	    $scope.$watch(function() {
	      return $mdMedia('sm');
	    }, function(sm) {
	      $scope.customFullscreen = (sm === true);
	    });
	}
}

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

})();
