'use strict';

angular.module('complainoApp').config(function ($stateProvider) {
  $stateProvider.state('profile', {
    url: '/me',
    templateUrl: 'app/profile/profile.html',
    controller: 'profileController'
  });
});
//# sourceMappingURL=profile.js.map
