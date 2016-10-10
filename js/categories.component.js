(function () {
'use strict';

	angular.module('MenuApp').component('categoryList', {
		templateUrl: 'html/categories.template.html',
		bindings: {
			items: '<'										// one-way data binding on items
		}
	});
})();



// (function () {
// 'use strict';
//
// angular.module('ShoppingList')
// .component('shoppingList', {
//   templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
//   bindings: {
//     items: '<'
//   }
// });

// })();



// (function () {
// 'use strict';

// angular.module('MenuApp')
// .component('categoriesList', {
//   templateUrl: 'src/templates/categorieslist.template.html',
//   bindings: {
//     items: '<'
//   }
// });

// })();