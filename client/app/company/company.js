'use strict';

angular.module('complainoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('company', {
        url: '/company/:companyName',
        templateUrl: 'app/company/company.html',
        controller: 'companyController'
    });
  });
