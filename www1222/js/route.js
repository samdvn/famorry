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
  $httpProvider.interceptors.push('loaderInterceptor');
  $httpProvider.useApplyAsync(true);
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
	.state('registration_statup', {
      url: '/registration_statup',   
      views: {
          "": {
              templateUrl: 'templates/registration/registration-statup.html',
              controller: 'registration_statupCtrl',
              controllerAs: 'registration_statup' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/registration/registration_statupCtrl.js'
              ]);
          }]
      }
          
    })
	.state('registration_step1', {
      url: '/registration_step1',   
      views: {
          "": {
              templateUrl: 'templates/registration/registration-step1.html',
              controller: 'registration_step1Ctrl',
              controllerAs: 'registration_step1' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/registration/registration_step1Ctrl.js',
                  'js/registration/registration_step1Service.js'
                ]);
          }]
      }
          
    })
	.state('registration_step2', {
      //parent: 'user',
      url: '/registration_step2',
      views: {
          "": {
              templateUrl: "templates/registration/registration-step2.html",
              //controller: "dosignupCtrl",
             // controllerAs: "dosignup"
          }
      }
      // resolve: {
      //     loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
      //         return $ocLazyLoad.load(['js/registration/registrationCtrl.js',
      //             //'js/tester/login/loginService.js',
      //             'js/registration/registrationService.js']);
      //     }]
      // }
    })
   .state('registration_step3', {
      //parent: 'user',
      url: '/registration_step3',
      views: {
          "": {
              templateUrl: "templates/registration/registration-step3.html",
              //controller: "dosignupCtrl",
             // controllerAs: "dosignup"
          }
      }
      // resolve: {
      //     loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
      //         return $ocLazyLoad.load(['js/registration/registrationCtrl.js',
      //             //'js/tester/login/loginService.js',
      //             'js/registration/registrationService.js']);
      //     }]
      // }
    })
   .state('registration_step4', {
      //parent: 'user',
      url: '/registration_step4',
      views: {
          "": {
              templateUrl: "templates/registration/registration-step4.html",
              //controller: "dosignupCtrl",
             // controllerAs: "dosignup"
          }
      }
      // resolve: {
      //     loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
      //         return $ocLazyLoad.load(['js/registration/registrationCtrl.js',
      //             //'js/tester/login/loginService.js',
      //             'js/registration/registrationService.js']);
      //     }]
      // }
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
    .state('securefund', {
      url: '/securefund',
      views: {
          "": {
              templateUrl: 'templates/securefund/securefund.html',
              controller: 'secureFundCtrl',
              controllerAs: 'secure' 
          }
      },
      resolve: {
          loadScripts: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['js/securefund/secureFundCtrl.js'
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