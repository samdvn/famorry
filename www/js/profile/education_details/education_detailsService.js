(function() {
    'use strict';

    angular
        .module(FAM_SERVICES)
        .factory('education_detailsService', education_detailsService);

    education_detailsService.$inject = ['$http', 'famProxy', 'famConstants', 'alertService', 'famMessages'];
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    function education_detailsService($http, famProxy, famConstants, alertService, famMessages) {
        return {
            GetUserQualification: GetUserQualification,
            PostEducationDetails: PostEducationDetails,
            entryYear: entryYear,
            entryMonth: entryMonth,
            passingYear: passingYear

        };

        function entryMonth() {
            var Entry_Month = '';
            return Entry_Month = [{
                    id: "1",
                    optionValue: "January"
                },
                {
                    id: "2",
                    optionValue: "February"
                },
                {
                    id: "3",
                    optionValue: "March"
                },
                {
                    id: "4",
                    optionValue: "April"
                },
                {
                    id: "5",
                    optionValue: "May"
                },
                {
                    id: "6",
                    optionValue: "June"
                },
                {
                    id: "7",
                    optionValue: "July"
                },
                {
                    id: "8",
                    optionValue: "August"
                },
                {
                    id: "9",
                    optionValue: "Setember"
                },
                {
                    id: "10",
                    optionValue: "October"
                },
                {
                    id: "11",
                    optionValue: "November"
                },
                {
                    id: "12",
                    optionValue: "December"
                }

            ]

        };

        function entryYear() {
            var Entry_Year = '';
            var jsnYear = [];
            for (Entry_Year = 1970; Entry_Year <= 2017; Entry_Year++) {
                jsnYear.push({
                    id: Entry_Year.toString(),
                    optionValue: Entry_Year
                })
            }
            return jsnYear;
        };

        function passingYear(eyr) {
            var startYear = ++eyr;
            console.log(startYear)
            var Passing_Year = '';
            var jsonYear = [];
            for (Passing_Year = startYear; Passing_Year <= 2017; Passing_Year++) {
                jsonYear.push({
                    id: Passing_Year.toString(),
                    optionValue: Passing_Year
                })
            }
            return jsonYear;

        };

        function GetUserQualification(callback) {
            $http.get('http://fabfamilylife.com/app/setupmobapi/Masterdata/allEducationQualification', config).then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }

        function PostEducationDetails(callback) {
            $http.post('http://fabfamilylife.com/app/setupmobapi/masterdata/getlocation').then(function(response) {
                    callback(response);
                })
                .catch(errorHandler);
        }



        function successHandler(response) {
            return response.data;
        }

        function errorHandler(error) {
            var alertVO = {};
            alertVO.title = famMessages.MESSAGE.M100002;
            alertVO.message = famMessages.ERROR.M200009;
            alertService.openModal(alertVO);
        }
    }
})();