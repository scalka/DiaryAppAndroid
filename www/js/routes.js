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
      'content': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
    }
    }
  })

  .state('app.newEntry', {
    url: '/newentry',
    views: {
      'content': {
        templateUrl: 'templates/newEntry.html',
        controller: 'newEntryCtrl',
      } // 'content' 
    } // views
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'content': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })


  .state('app.calendar-detail', {
    url: '/calendar/:entryId',
    views: {
      'content': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'newEntryCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/app/newentry')

});
