angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('app',{
    url: "/app",
    abstract: true,
    templateUrl: 'templates/menu.html'
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


  .state('app.calendar-detail', {
    url: '/calendar/:entryId',
    views: {
      'tab-calendar': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'newEntryCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'content':{
      templateUrl: 'templates/profile.html',
      controller: 'profileCtrl'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'content': {
      templateUrl: 'templates/settings.html',
      controller: 'settingsCtrl'
      }
    }  
  })

  .state('app.login',{
    url: '/login',
    views: {
      'content': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
    .state('app.register',{
    url: '/register',
    views: {
      'content': {
        templateUrl: 'templates/register.html',
        controller: 'loginCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/app/newentry')

});
