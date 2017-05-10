(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('famSessStorage', famSessStorage);

    famSessStorage.$inject = ['$window'];
    function famSessStorage($window) {

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
            setTestDetails: setTestDetails,
            getTestDetails: getTestDetails,
			setUserType: setUserType,
			getUserType: getUserType,
            setSurveysDetails: setSurveysDetails,
            getSurveysDetails: getSurveysDetails,
            setUserRegisterDetails:setUserRegisterDetails,
            getUserRegisterDetails:getUserRegisterDetails,
            getUserVerificationCode:getUserVerificationCode,
            setUserVerificationCode:setUserVerificationCode,
			setUserId:setUserId,
			getUserId:getUserId
			
        };
        ////////////////
		function  setUserId (data) {
			if (data) {
				localStorage.setItem('UserId',data);
			} else {
				localStorage.setItem('UserId',null);
			}
		}
		function getUserId(){
			if(localStorage.getItem('UserId')){
				return localStorage.getItem('UserId');
			} else {
				return null;
			}
		}
		function setUserType (data){
			if(data){
				localStorage.setItem('UserType',data);
			} else {
				localStorage.setItem('UserType',null);
			}
		}
		function getUserType(){
			if(localStorage.getItem('UserType')){
				return localStorage.getItem('UserType');
			} else {
				return null;
			}
		}
        function setUserDetails(data) {
            if (data) {
                //$window.sessionStorage.loggedInUser = JSON.stringify(data);
                localStorage.setItem('loggedInUser',data);
            } else {
                localStorage.setItem('loggedInUser',null);
                //$window.sessionStorage.loggedInUser = null;
            }
        }

        function getUserDetails() {
            if(localStorage.getItem('loggedInUser')){
                return localStorage.getItem('loggedInUser');
            }
            /*if ($window.sessionStorage.loggedInUser) {
                return JSON.parse($window.sessionStorage.loggedInUser);
            }*/
            return null;
        }
        function setUserVerificationCode(data) {
            if (data) {
                $window.sessionStorage.UserVCode = JSON.stringify(data);
            } else {
                $window.sessionStorage.UserVCode = null;
            }
        }
        function getUserVerificationCode() {
            if ($window.sessionStorage.UserVCode) {
                return JSON.parse($window.sessionStorage.UserVCode);
            }
            return null;
        }
        function setTestDetails(data) {
            if (data) {
                $window.sessionStorage.testDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.testDetails = null;
            }
        }

        function getTestDetails() {
            if ($window.sessionStorage.testDetails) {
                return JSON.parse($window.sessionStorage.loggedInUser);
            }
            return null;
        }

        function setSurveysDetails(data) {
            if (data) {
                $window.sessionStorage.surveysDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.surveysDetails = null;
            }
        }

        function getSurveysDetails() {
            if ($window.sessionStorage.surveysDetails) {
                return JSON.parse($window.sessionStorage.surveysDetails);
            }
            return null;
        }
        function setUserRegisterDetails(data) {
            if (data) {
                $window.sessionStorage.UserRegisterDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.UserRegisterDetails = null;
            }
        }
        function getUserRegisterDetails() {
            if ($window.sessionStorage.UserRegisterDetails) {
                return JSON.parse($window.sessionStorage.UserRegisterDetails);
            }
            return null;
        }
        
        
    }
})();