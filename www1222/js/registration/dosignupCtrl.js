(function(){
    'use strict';
        angular.module(FAM_CONTROLLER)
        .controller('dosignupCtrl', dosignupCtrl);
        dosignupCtrl.$inject = ['dosignupService', '$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
        function dosignupCtrl(dosignupService, $stateParams, $scope, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
            var dosignup = this;
            dosignup.famConstants = famConstants;
            dosignup.famMessages = famMessages;
            dosignup.onsubmit = onsubmit;
            //var registered_data = userDetails.getUserRegisterDetails();
            var registered_data = JSON.parse(localStorage.getItem('setUserRegisterDetails'));
			var phone = registered_data.ph;
			dosignup.phoneString = phone.toString().slice(7,10);
				
            function onsubmit (data){
                console.log('registered_data');
                console.log(registered_data);
				//registered_data['userID'] = userDetails.getUserId();
                dosignup.submitted = true;
                //var vCode = userDetails.getUserVerificationCode();
                var vCode = localStorage.getItem('setUserVerificationCode');
                alert(vCode);
                alert(data.vCode);
                    if(vCode==data.vCode){
                        dosignupService.postUserDataAfterVerify(registered_data,function(response){
							console.log('dosignup');
                            console.log(response);
							 $state.go(famConstants.STATE_USER.registration_statup);
                        });
                    }
            }
        }    
/*mothers day https://www.youtube.com/watch?v=BsdcCFOUfqs*/        
})();

