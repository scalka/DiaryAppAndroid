angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('app',{
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('app.camera', {
    url: '/camera',
    views: {
      'tab-camera': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
    }
    }
  })

  .state('app.newEntry', {
    url: '/newentry',
    views: {
      'tab-newentry': {
        templateUrl: 'templates/newEntry.html',
        controller: 'newEntryCtrl'
      }
    }
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'tab-calendar': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })


  .state('app.entryDetail', {
    url: '/entrydetail/:entryId',
    views: {
      'tab-entrydetail': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'newEntryCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('app.settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('app.login',{
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
    .state('app.register',{
    url: '/register',
    views: {
      'tab-register': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/app/newentry')

});
