(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
	templateUrl: 'html/categories.template.html',       // This needs to be created
	 controller: CategoriesController,        // By not using the 'controller-as' syntax, Angular automatically assigns '$ctrl'
	bindings: {
		items: '<',             // An example of one-way data binding
		myTitle: '@title',      // An example of DOM attribute binding.  We probably do not need this for the assignment.
		onRemove: '&'           // An example of reference binding
	}
});

// If this does NOT call the service directly, then what does?

CategoriesController.$inject = [] // ['$rootScope', '$element', '$q', 'WeightLossFilterService']
function CategoriesController()	{ // ($rootScope, $element, $q, WeightLossFilterService) {
	var $ctrl = this;
	var totalItems;

	// console.log('here');
	$ctrl.$onInit = function () {
		console.log('Categories controller');
	};


	// $ctrl.$doCheck = function () {
	//   if ($ctrl.items.length !== totalItems) {
	//     totalItems = $ctrl.items.length;

	//     $rootScope.$broadcast('shoppinglist:processing', {on: true});
	//     var promises = [];
	//     for (var i = 0; i < $ctrl.items.length; i++) {
	//       promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
	//     }

	//     $q.all(promises)
	//     .then(function (result) {
	//       // Remove cookie warning
	//       var warningElem = $element.find('div.error');
	//       warningElem.slideUp(900);
	//     })
	//     .catch(function (result) {
	//       // Show cookie warning
	//       var warningElem = $element.find('div.error');
	//       warningElem.slideDown(900);
	//     })
	//     .finally(function () {
	//       $rootScope.$broadcast('shoppinglist:processing', { on: false });
	//     });
	//   }
	// };

	// $ctrl.remove = function (myIndex) {
	//   $ctrl.onRemove({ index: myIndex });
	// };
}

})();