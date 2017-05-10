(function (){
	'use strict';
			angular.module(FAM_CONTROLLER)
			.controller('registration_step1Ctrl', registration_step1Ctrl);
			registration_step1Ctrl.$inject = [ 'registration_step1Service','$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
			function registration_step1Ctrl( registration_step1Service,$scope, $stateParams, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
				var registration_step1 = this;
				registration_step1.famConstants = famConstants;
				registration_step1.famMessages = famMessages;
				registration_step1.onsubmit = onsubmit;
				
				registration_step1Service.postUserDataStep1(function (response) {
						console.log(response);
				});
				function onsubmit(data){
					console.log(data);
					registration_step1.submitted = true;
					
					if(data.location === ''){
						return false;
						event.preventDefault()
					}
					if(data.serviceCenter === ''){
						return false;
						event.preventDefault()
					}
					if(data.locationAddress === ''){
						return false;
						event.preventDefault()
					}
					if(data.centerAddress === ''){
						return false;
						event.preventDefault()
					}
					
					
					
				}
			}
})();