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
    '50': 'E0F2F1',
    '100': 'B2DFDB',
    '200': '80CBC4',
    '300': '4DB6AC',
    '400': '26A69A',
    '500': '009688',
    '600': '00897B',
    '700': '00796B',
    '800': '00695C',
    '900': '004D40',
    'A100': 'A7FFEB',
    'A200': '64FFDA',
    'A400': '1DE9B6',
    'A700': '00BFA5',
    'contrastDefaultColor': 'A400',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': undefined,
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default').primaryPalette('appTheme');
  });
