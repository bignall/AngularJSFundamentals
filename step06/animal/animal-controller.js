'use strict'

ranch.animal.controller(
    'animalCtrl', 
    ['Animal', '$scope'
        , function(Animal, $scope){
	    $scope.animals = Animal.query();
}]);
