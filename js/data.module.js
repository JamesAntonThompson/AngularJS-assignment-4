(function () {
'use strict';

	angular.module('Data', []);			// Do I need spinner as a dependency?

	angular.module('Data')
	.config(function () {
		console.log("Data config fired.");
	})
	.run(function () {
		console.log("Data run fired.");
	});

})();