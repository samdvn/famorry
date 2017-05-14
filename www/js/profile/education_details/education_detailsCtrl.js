(function() {
    'use strict';
    angular.module(FAM_CONTROLLER)
        .controller('education_detailsCtrl', education_detailsCtrl);
    education_detailsCtrl.$inject = ['education_detailsService', '$stateParams', '$http', '$timeout', 'famMessages', 'famConstants', 'userDetails', 'alertService', '$state'];

    function education_detailsCtrl(education_detailsService, $stateParams, $http, $timeout, famMessages, famConstants, userDetails, alertService, $state) {
        var educationDetails = this;
        educationDetails.famMessages = famMessages;
        educationDetails.famConstants = famConstants;
        educationDetails.qualifications = [];
        educationDetails.addButton = 0;
        educationDetails.onsubmit = onsubmit;
        init();

        function init() {
            educationDetails.entryYear = education_detailsService.entryYear(),
                educationDetails.entryMonth = education_detailsService.entryMonth()
        }

        educationDetails.e_year = function(eyear) {
            educationDetails.passingYear = education_detailsService.passingYear(eyear);
        };
        education_detailsService.GetUserQualification(function(response) {
            console.log(response);
        });

        function onsubmit(data) {
            // 	console.log(data)
            educationDetails.submitted = true;
            // 	if (login.loginForm.$valid) {
            // 		login.formData = data;					
            //         dataService.getUserData(login.formData,function (response) {
            //         if (response && response.success == 'true') {
            //             var token = login.formData.user+':'+response.token+':M';
            //             userDetails.setUserDetails(token);
            // 			//testerService.prepreNotifications(response.data.notifications);
            //             $state.go(famConstants.STATE_USER.HOME);
            //         } else {
            //         	var alertVO = {};
            //         	alertVO.title = famMessages.MESSAGE.M100002;
            //         	alertVO.message = famMessages.ERROR.M200008;
            //         	alertService.openModal(alertVO);
            //             //login.showServerErrorMsg(response.errorCode);
            //         }

            //     });
            // 	}
        }
        educationDetails.add = function() {
            educationDetails.clickAdd = 1;
            educationDetails.addButton = 1;
        };
    }

    function showServerErrorMsg(code) {
        /*ctrl.serverErrorMsg = ptpMessages.BUSINESS_MESSAGE[code];
        if (code === 900006 || code === 900002 || code === 900008) {
            ctrl.userLocked = true;
        }*/
    }
})();