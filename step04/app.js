'use strict'

var ranch = ranch || {};

ranch.animal = angular.module('ranch.animal', []);

angular.module('ranch', ['ranch.animal']);
