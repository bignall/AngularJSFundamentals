'use strict'

var ranch = ranch || {};

ranch.animal = angular.module('ranch.animal', ['ngResource']);

angular.module('ranch', ['ranch.animal']);
