'use strict';

var app = angular.module('complainoApp');

app.factory('Complaint', ['$resource', function($resource) {
	return $resource('/api/complains/:id', {id:'@_id'},
	    {
	        'update': { method:'PUT' }
	    });
}]);

app.factory('User', ['$resource', function($resource) {
	return $resource('/api/users/:id', {id:'@_id'},
	    {
	        'update': { method:'PUT' }
	    });
}]);