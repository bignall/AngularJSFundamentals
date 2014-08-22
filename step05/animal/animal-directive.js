'use strict'

ranch.animal.directive('animal', function() {
    return {
	restrict : 'AE',
	replace : true,
	templateUrl : 'animal/animal-template.html',
	scope: {
	    animal : '=info'
	},
    }
});
