(function () {
'use strict';

angular.module('Data').controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController(items) {
  		var $ctrl = this;
  		console.log('ItemsController()')
  		var item = items[$stateParams.ItemId]
		$ctrl.item = item;
	}

})();
