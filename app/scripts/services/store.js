'use strict';

/**
 * @ngdoc service
 * @name gaTravelApp.store
 * @description
 * # store
 * Service in the gaTravelApp.
 */
angular.module('gaTravelApp')
  .service('Storage', function Store($localStorage) {
    var Store = {
    	trip: {
    		title: '',
    		date: '',
    		saved: false,

    		legs: []
    	}
    };

    $localStorage.Store = Store;

    return $localStorage.Store;
  });
