'use strict';

(function() {

class MainController {
}

var app = angular.module('complainoApp');
app.controller('complainingFormController', complainingFormController);

function complainingFormController($scope) {
	$scope.input = {
		selectedItem: '',
		searchText: '',
		stage: 0
	};

	$scope.searchTextChange = searchTextChange;
	$scope.querySearch = querySearch;
	$scope.nextStage = nextStage;
	$scope.lastStage = lastStage;
	$scope.reset = reset;

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
}

})();
