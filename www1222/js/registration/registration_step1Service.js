(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .service('registration_step1Service', registration_step1Service);

    registration_step1Service.$inject = ['$http', '$rootScope', '$window', '$state', 'famConstants','famProxy','alertService','famMessages'];
    function registration_step1Service($http, $rootScope, $window, $state, famConstants, famProxy,
    alertService,famMessages) {
        return {
			postUserDataStep1: postUserDataStep1
        };
		
        var config = {
            headers : {
                'Content-Type': 'application/json' ,
				'token': authcode
				
            }               
        }

        function postUserDataStep1(callback) {
			$http.post('http://fabfamilylife.com/app/setupmobapi/masterdata/getlocation'
						 ,config).then(function(response) {
					callback(response);
				})
            .catch(errorHandler);
        }
        function successHandler(response) {
            return response.data;
        }
        function errorHandler(error){
            var alertVO = {};
            alertVO.title = famMessages.MESSAGE.M100002;
            alertVO.message = famMessages.ERROR.M200009;
            alertService.openModal(alertVO);
        }
       

        

         

       
    }
})();
