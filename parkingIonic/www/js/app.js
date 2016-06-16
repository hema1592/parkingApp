// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.login', {
    url: '/login',
    views: {
      'LoginView': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('tab.home', {
    url: '/home',
    views: {
      'HomeView': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('tab.user', {
    url: '/user',
    views: {
      'NewUserView': {
        templateUrl: 'templates/new-user.html',
        controller: 'AddUserCtrl'
      }
    }
  })
  
  .state('tab.vendor', {
    url: '/vendor',
    views: {
      'NewVendorView': {
        templateUrl: 'templates/new-vendor.html',
        controller: 'AddVendorCtrl'
      }
    }
  })
    
  .state('tab.parking', {
    url: '/parking',
    views: {
      'NewParkingView': {
        templateUrl: 'templates/new-parking.html',
        controller: 'AddParkingCtrl'
      }
    }
  })
  
   .state('tab.workingdays', {
    url: '/workingdays',
    views: {
      'WorkingdaysView': {
        templateUrl: 'templates/working-days.html',
        controller: 'WorkingDaysCtrl'
      }
    }
  })
  
  .state('tab.addtariff', {
    url: '/addtariff',
    views: {
      'AddTariffView': {
        templateUrl: 'templates/add-tariff.html',
        controller: 'AddTariffCtrl'
      }
    }
  })
  
  .state('tab.registervehicle', {
    url: '/registervehicle',
    views: {
      'RegisterVehicleView': {
        templateUrl: 'templates/register-vehicle.html',
        controller: 'RegisterVehicleCtrl'
      }
    }
  });
  
  /*
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  }); 
  */

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
