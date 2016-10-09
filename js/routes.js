(function () {

	angular.module('MenuApp',['ui.router']);
	angular.module('MenuApp').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to tab 1 if no other URL matches
		$urlRouterProvider.otherwise('/');											// default to '/' if requested route cannot be found

		// Set up UI states
		$stateProvider
			.state('home', { url: '/', templateUrl: 'html/home.html' })								// definition of the 'home' state '/'
			.state('categories', { url: 'categories', templateUrl: 'html/categories.html' });		// definition of the 'category' state 
	}

})();
