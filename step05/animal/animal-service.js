'use strict'

ranch.animal.service(
    'Animal', 
    [ '$resource',
      function( $resource ) {
	  return $resource('data/animals.json', {}, {
	      query: { method: 'GET', params: {}, isArray:true }
	  });
      }
    ]
);
