(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('secureFundCtrl', secureFundCtrl);
		secureFundCtrl.$inject = ['$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state'];  
		
		function secureFundCtrl($stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
			var secure = this;
			secure.famMessages = famMessages;
			secure.famConstants = famConstants;
		}
			
})();
 