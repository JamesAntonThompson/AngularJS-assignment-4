(function () {
'use strict';

angular.module('MenuApp', []);			// Do I need spinner as a dependency?

angular.module('MenuApp')
.config(function () {
  console.log("MenuApp config fired.");
})
.run(function () {
  console.log("MenuApp run fired.");
});

})();