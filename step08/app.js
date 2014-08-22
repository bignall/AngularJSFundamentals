'use strict'

var ranch = ranch || {};

ranch.animal = angular.module('ranch.animal', ['ngResource']);
ranch.equipment = angular.module('ranch.equipment', []);
ranch.task = angular.module('ranch.task', []);

angular.module(
    'ranch', 
    ['ngRoute', 
     'ranch.animal', 
     'ranch.equipment', 
     'ranch.task'
    ])
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider
	    .when('/animals', {
		templateUrl: 'animal/animal-list.html',
		controller: 'animalCtrl'
	    })
	    .when('/equipment', {
		templateUrl: 'equipment/equipment-list.html',
		controller: 'equipmentCtrl'
	    })
            .when('/tasks', {
		templateUrl: 'task/task-list.html',
		controller: 'taskCtrl'
	    })
            .otherwise({
		redirectTo: '/animals'
	    });
    }])
;
