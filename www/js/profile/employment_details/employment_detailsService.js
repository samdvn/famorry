(function() {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('employment_detailsService', employment_detailsService);

    employment_detailsService.$inject = ['$http', 'famProxy', 'famConstants', 'alertService', 'famMessages'];


    function employment_detailsService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            // GetUserQualification: GetUserQualification,
            // PostEducationDetails: PostEducationDetails
        };





        // function GetUserQualification(callback) {
        //     $http.get('http://fabfamilylife.com/app/setupmobapi/Masterdata/allEducationQualification', config).then(function(response) {
        //             callback(response);
        //         })
        //         .catch(errorHandler);
        // }

        // function PostEducationDetails(callback) {
        //     $http.post('http://fabfamilylife.com/app/setupmobapi/masterdata/getlocation').then(function(response) {
        //             callback(response);
        //         })
        //         .catch(errorHandler);
        // }



        // function successHandler(response) {
        //     return response.data;
        // }

        // function errorHandler(error) {
        //     var alertVO = {};
        //     alertVO.title = famMessages.MESSAGE.M100002;
        //     alertVO.message = famMessages.ERROR.M200009;
        //     alertService.openModal(alertVO);
        // }
    }
})();