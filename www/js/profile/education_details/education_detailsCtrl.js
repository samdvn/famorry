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
            for (var i = 0; i < response.data.length; i++) {
                educationDetails.qualifications.push(response.data[i]);
            }

        });

        function onsubmit(data) {
            console.log(data);
            educationDetails.submitted = true;
            var familyId = (!localStorage.getItem('familyId') ? '' : localStorage.getItem('familyId'));
            var memberId = (!localStorage.getItem('memberId') ? '' : localStorage.getItem('memberId'));
            var post_data = {
                "familyID": familyId,
                "memberID": memberId,
                "qualification": data.qualification.translate_value,
                "institute": data.institute,
                "boardUniv": data.university,
                "entryMonth": data.month,
                "entryYear": data.eyear,
                "passingMonth": data.pmonth,
                "passingYear": data.pyear,
                "divisionGrade": data.division,
                "percentOfMarks": data.marks,
                "gradePT": ""
            };



            education_detailsService.PostEducationDetails(post_data, function(response) {
                console.log(response);
                if (response && response.success == 'true') {


                } else {
                    var alertVO = {};
                    alertVO.title = famMessages.MESSAGE.M100002;
                    alertVO.message = famMessages.ERROR.M200008;
                    alertService.openModal(alertVO);
                }

            });

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