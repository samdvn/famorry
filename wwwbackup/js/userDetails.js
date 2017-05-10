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
            setUserRegisterDetails: setUserRegisterDetails,
            getUserRegisterDetails: getUserRegisterDetails,
            setUserVerificationCode: setUserVerificationCode,
            getUserVerificationCode: getUserVerificationCode
                                                                                                        
        };
        ////////////////
        function setUserDetails(data) {
            user = data;
            famSessStorage.setUserDetails(data);
        }

        function getUserDetails() {
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