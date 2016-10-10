(function () {
'use strict';

	angular.module('MenuApp').controller('CategoriesController', CategoriesController);     // Declare the 'CategoriesController' on the 'Data' module

	CategoriesController.$inject = ['items'];
	function CategoriesController(items) {
		var categoryList = this;

		categorylist.items = items.data;
	}

})();