(function(){
    'use strict';
            angular.module(FAM_CONTROLLER)
                .controller('dosignupCtrl',dosignupCtrl);
                dosignupCtrl.$inject['dosignupService', '$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','alertService','$state','$ionicPopup'];
                function dosignupCtrl(dosignupService, $scope, $stateParams, $http, $timeout, famMessages, famConstants, alertService, $state, $ionicPopup) {
                    var dosignup = this;
					dosignup.famConstants = famConstants;
                    dosignup.famMessages = famMessages;
                    dosignup.onsubmit = onsubmit;
					var data = localStorage.getItem('setUserRegisterDetails');
                    function onsubmit (data){
						dosignup.submitted = true;
                        var vCode = localStorage.getItem('setUserVerificationCode'); 
								if(vCode==data){
									dosignupService.postUserDataAfterVerify(data).then(function(response){
										console.log(response);
									});
								}
                    }
                    
                }
})();

