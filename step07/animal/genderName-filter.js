'use strict'

ranch.animal.filter(
    'genderName', 
    function() {
	/* don't look too closely at this, it's quick and dirty not meant for a 
	   production site - it will fail if things aren't exactly right.
	*/
	var genderNames = {
	    Horse: {
		Male: function(age, altered) {
		    if (altered) { 
			return 'Gelded'; 
		    } else if (age > 3) {
			return 'Stallion';
		    } else { 
			return 'Colt';
		    }
		} ,
		Female: function (age, altered) { 
		    if (age > 3) {
			return 'Mare';
		    }
		    return 'Filly';
		}
	    },
	    Dog: {
		Male: function(age, altered) {
		    if (altered) {
			return 'Neutered Male';
		    } 
		    return 'Stud';
		},
		Female: function(age, altered) {
		    if (altered) {
			return 'Spayed Female';
		    }
		    return 'Bitch';
		}
	    }, 
	    Chicken: {
		Male: function(age, altered) {
		    if (altered) {
			return 'Capon';
		    } else if (age < 1) {
			return 'Cockerel';
		    }
		    return 'Rooster';
		}, 
		Female: function(age, altered) {
		    if (age < 1) {
			return 'Pullet'; 
		    }
		    return 'Hen';
		}
	    }
	};

	function normalizedAge(age) {
	    var months = age.toLowerCase().indexOf('months');
	    if (months >= 0) {
		return parseInt(age)/12;
	    } 
	    return parseInt(age);
	}

	return function(input) {
	    return genderNames[input.species][input.gender](
		normalizedAge(input.age), 
		input.altered
	    );
	};
    }
);
