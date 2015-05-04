'use strict';

/**
 * @ngdoc function
 * @name gaTravelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gaTravelApp
 */
angular.module('gaTravelApp')
  .controller('MainCtrl', function (Storage) {
    this.storage = Storage;

    this.saveTrip = function(isValid){
    	if(isValid){
    		// Do saving stuff
    		Storage.trip.saved = true;
    	} else {
    		// form isn't valid
    	}
    }
  });
