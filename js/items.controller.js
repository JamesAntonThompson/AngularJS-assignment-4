(function () {
'use strict';

angular.module('Data').controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController(items) {
  		var itemsList = this;
  		console.log('ItemsController()')
		itemsList.item = items;
	}

})();


// (function () {
// 'use strict';

// angular.module('Data')
// .controller('CategoryListController', CategoryListController);


// CategoryListController.$inject = ['items'];
// function CategoryListController(items) {
//   var mainList = this;
//   mainList.items = items;

//   // mainList.$onInit = function () {
//   // 	console.log('CategoryListController.onInit()');
//   //   MenuDataService.getAllCategories()
//   //   .then(function (result) {
//   //     mainList.items = result;
//   //     console.log(mainList);
//   //   });
//   // };
// }

// })();