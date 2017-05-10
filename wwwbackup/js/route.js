(function () {
    'use strict';
    angular.module(FAM_ROUTES)
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];
    function config($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

  //.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $urlRouterProvider.otherwise('/login')
  $stateProvider
  .state('user', {
        abstruct: true,
        url: "/user",
        views: {
            "": {
                templateUrl: "templates/user.html",
                controller: "userController",
                controllerAs: "userCtrl"
            }
        },
        resolve: {
            loadScripts: ['$ocLazyLoad',  function ($ocLazyLoad) {
                return $ocLazyLoad.load(['js/userController.js',
                    //'js/tester/shared/testerProxy.js',
                    'js/tester/login/loginService.js',
                    'js/login/loginDataService.js',
                    //'js/tester/survey/surveyDataService.js',
                    //'js/tester/shared/testerDataService.js',
                    //'js/tester/shared/testerService.js',
                    //'js/tester/shared/testerUserDtl.js'
                    ]);
            }]
        }
    })
   .state('login', {
      //parent: 'user',
      url: '/login',
      views: {
          "": {
              templateUrl: "templates/login/login.html",
              controller: "loginCtrl",
              controllerAs: "login"
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/login/loginCtrl.js',
                  //'js/tester/login/loginService.js',
                  'js/login/loginDataService.js']);
          }]
      }
    })
   .state('registration', {
      url: '/registration',   
      views: {
          "": {
              templateUrl: 'templates/registration/registration.html',
              controller: 'registrationCtrl',
              controllerAs: 'registration' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/registration/registrationCtrl.js',
                  'js/registration/registrationService.js'
                ]);
          }]
      }
          
    })
    .state('dosignup', {
      url: '/dosignup',   
      views: {
          "": {
              templateUrl: 'templates/registration/dosignup.html',
              controller: 'dosignupCtrl',
              controllerAs: 'dosignup' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/registration/dosignupCtrl.js',
                  'js/registration/dosignupService.js'
                ]);
          }]
      }
          
    })
    .state('home', {
      url: '/home',
      views: {
          "": {
              templateUrl: 'templates/home/home.html',
              controller: 'homeCtrl',
              controllerAs: 'home' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/home/homeCtrl.js'
                  //'js/tester/login/loginService.js',
                  //'js/registration/loginDataService.js'
                ]);
          }]
      }
      
    })
  /*.state('login', {
      parent: 'user',
      url: "/login",
      views: {
          "": {
              templateUrl: "templates/login/login.html",
              controller: "loginCtrl",
              controllerAs: "login"
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/login/loginCtrl.js',
                  //'js/tester/login/loginService.js',
                  'js/tester/login/loginDataService.js']);
          }]
      }
  })*/
  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  
}
}
)();