'use strict';

/**
 * @ngdoc overview
 * @name gaTravelApp
 * @description
 * # gaTravelApp
 *
 * Main module of the application.
 */
angular
  .module('gaTravelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngStorage'
  ])

  .config(function($stateProvider, $urlRouterProvider){

  	// Default link to hit
  	$urlRouterProvider.otherwise('/');

  	// Defining our states
  	$stateProvider
  	.state('home', {
  		url: '/',
  		templateUrl: 'views/home.html',
  	})

  	.state('leg', {
  		url: 'leg/:id',
  		controller: 'SingleLegCtrl',
  		templateUrl: 'views/leg.html'
  	})

  	.state('leg.add', {
  		url: 'leg/add',
  		controller: 'AddLegCtrl',
  		templateUrl: 'views/add-leg.html'
  	})

  	.state('leg.edit', {
  		url: 'leg/:id/edit',
  		controller: 'EditLegCtrl',
  		templateUrl: 'views/edit-leg.html'
  	})
  });
