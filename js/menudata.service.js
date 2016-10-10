(function () {
'use strict';

angular.module('Data').service('MenuDataService', MenuDataService);     // Declare the 'MenuDataService' on the 'Data' module


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
	var service = this;

	// List of shopping items
	var items = [];
	var ApiBasePath = "https://davids-restaurant.herokuapp.com"

	//Service method
	service.getAllCategories = function() {
		// retrieve the menu items via $http
		return $http({ method: "GET", url: (ApiBasePath + "/categories.json")})
			.then ( function( response ) {
				console.log( response );
				// return response.data['menu_items'].filter(
				// 	function (item) { 
				// 		return item.description.indexOf(searchTerm) !== -1;
				// 	}
				// );
			});
	};

	service.getItemsForCategory = function(categoryShortName) {
		return $http({ method: "GET", url: (ApiBasePath + "/menu_items.json")})
			.then ( function( response ) {
				console.log( response );
			});
	};
}

})();



// (function () {
// 'use strict';

// angular.module('data')
// .service('MenuDataService', MenuDataService)
// .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// MenuDataService.$inject = ['$http', 'ApiBasePath']
// function MenuDataService($http, ApiBasePath) {
//   var service = this;

//   service.getAllCategories = function () {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/categories.json")
//     });
//     return response;
//   };


//   service.getItemsForCategory = function (categoryShortName) {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/menu_items.json"),
//       params: {
//         category: categoryShortName
//       }
//     });
//     return response;
//   };

// }

// })();

