(function () {
	'use strict';
		angular.module(FAM_CONTROLLER)
		.controller('registrationCtrl', registrationCtrl);
		registrationCtrl.$inject = ['registrationService', '$scope', '$stateParams', '$http', '$timeout','famMessages','famConstants','userDetails','alertService','$state','$ionicPopup'];  
		function registrationCtrl(dataService, $stateParams, $scope, $http, $timeout, famMessages, famConstants, userDetails,alertService, $state, $ionicPopup) {
			var registration = this;
			registration.famConstants = famConstants;
			registration.famMessages = famMessages;
			registration.onsubmit = onsubmit;
			registration.checkedOrNot  = checkedOrNot;
                       
			init();
			function init() {
                            registration.userSex = dataService.getSexDetails();
                            registration.birthYears = dataService.setYearsDetails();
                            registration.setDays = dataService.setDays();
                            registration.setMonth = dataService.setMonth();

                        }
                       
                        function checkedOrNot (){
                            var alertPopup = $ionicPopup.alert({
                                title: famMessages.MESSAGE.M100003,
                                template: famMessages.MESSAGE.M100004,

                            });

                            alertPopup.then(function(res) {
                                console.log('Thanks');
                            });
                        }
			function onsubmit (data){
				
				registration.submitted = true;
				//userDetails.setUserDetails(response.token);
                /*userDetails.setUserVerificationCode(response.vcode);
                userDetails.setUserRegisterDetails(data);*/
               //userDetails.setUserDetails(data);
                
				if (registration.registrationForm.$valid) {
					if(data.sex === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200013;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					if(data.bday === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200014;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					if(data.bmonth === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200015;
                    	alertService.openModal(alertVO);
					}
					if(data.byear === ''){
						var alertVO = {};
                    	alertVO.title = famMessages.MESSAGE.M100002;
                    	alertVO.message = famMessages.ERROR.M200016;
                    	alertService.openModal(alertVO);
                    	event.preventDefault()
					}
					data['extfammem'] = '';
                        console.log(data);
                        registration.formData = data;     
                        dataService.postUserData(registration.formData,function (response) {
                        console.log('response');
						console.log(response);
                        if( response.success === "true" ){
							
                            console.log(userDetails);
							localStorage.setItem('setUserVerificationCode',response.vcode);
							localStorage.setItem('setUserDetails',response.token);
							localStorage.setItem('setUserRegisterDetails',JSON.stringify(data));
							userDetails.setUserId(response.vcode);
                            /*userDetails.setUserDetails(response.token);
                            userDetails.setUserVerificationCode(response.vcode);
							userDetails.setUserRegisterDetails(data);*/
							
                            $state.go(famConstants.STATE_USER.dosignup);
                        }
                        });
			}

			}
		}
})();
 