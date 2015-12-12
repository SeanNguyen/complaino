'use strict';

angular.module('complainoApp', [
  'complainoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'LocalStorageModule'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.definePalette('appTheme', {
    '50': 'E8EAF6',
    '100': 'C5CAE9',
    '200': '9FA8DA',
    '300': '7986CB',
    '400': '5C6BC0',
    '500': '3F51B5',
    '600': '3949AB',
    '700': '303F9F',
    '800': '283593',
    '900': '1A237E',
    'A100': 'FF8A80',
    'A200': 'FF5252',
    'A400': 'FF1744',
    'A700': 'D50000',
    'contrastDefaultColor': 'A400',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': undefined,
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default').primaryPalette('appTheme');
  });
