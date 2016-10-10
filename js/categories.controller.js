(function () {
'use strict';

angular.module('Data')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['items'];
function CategoryListController(items) {
  var mainList = this;
  mainList.items = items;

  // mainList.$onInit = function () {
  // 	console.log('CategoryListController.onInit()');
  //   MenuDataService.getAllCategories()
  //   .then(function (result) {
  //     mainList.items = result;
  //     console.log(mainList);
  //   });
  // };
}

})();


// (function () {
// 'use strict';

// 	angular.module('MenuApp').controller('CategoriesController', CategoriesController);     // Declare the 'CategoriesController' on the 'Data' module

// 	CategoriesController.$inject = ['items'];
// 	function CategoriesController(items) {
// 		var categoryList = this;

// 		categorylist.items = items.data;
// 	}

// })();



// (function () {
// 'use strict';

// 	angular.module('MenuApp').controller('AnyController', AnyController);     // Declare the 'AnyController' on the 'MenuApp' module

// 	AnyController.$inject = ['items'];
// 	function AnyController(items) {
// 		var categoryList = this;

// 		//categorylist.items = items.data;

// 		categoryList.$onInit = function () {
// 			console.log('inity');
// 		}	
// 	}

// })();

