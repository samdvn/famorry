(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('userDetails', userDetails);

    userDetails.$inject = ['famSessStorage'];
    function userDetails(famSessStorage) {
        var user = {};

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
			setUserType: setUserType,
			getUserType: getUserType,
            setUserRegisterDetails: setUserRegisterDetails,
            getUserRegisterDetails: getUserRegisterDetails,
            setUserVerificationCode: setUserVerificationCode,
            getUserVerificationCode: getUserVerificationCode,
			setUserId:setUserId,
			getUserId:getUserId
                                                                                                        
        };
        ////////////////
		function setUserId(data) {
			user = data;
			famSessStorage.setUserId(data);
		}
		
		function getUserId(data) {
			return user;
		}
		
		function setUserType(data) {
			user = data;
            famSessStorage.setUserType(data);
		}
		
		function getUserType(data) {
			return user;
            
		}
		
        function setUserDetails(data) {
            user = data;
            famSessStorage.setUserDetails(data);
        }

        function getUserDetails() {            
            user = famSessStorage.getUserDetails();
            return user;
        }
        
        function setUserRegisterDetails(data){
            user = data;
            famSessStorage.setUserRegisterDetails(data);
        }
        
        function getUserRegisterDetails(){
             return user;
        }
        
        function setUserVerificationCode(data){
			
             user = data;
             famSessStorage.setUserVerificationCode(data);
        }
        
        function getUserVerificationCode(){
             return user;
        }
    }
})();