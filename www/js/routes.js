angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app',{
    url: "/app",
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  .state('app.login', {
    url: '/login',
    views: {
      'content': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
      } // 'content' 
    } // views
  })
  .state('app.register', {
    url: '/register',
    views: {
      'content': {
        templateUrl: 'templates/register.html',
        controller: 'loginCtrl',
      } // 'content' 
    } // views
  })
  .state('app.camera', {
    url: '/camera',
    views: {
      'content': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl',
        resolve: {
          currentAuth: function(Authentication){
            return Authentication.requireAuth();
          }// currentAuth
        } //resolve
    } // content
    } // views
  }) //state

  .state('app.newEntry', {
    url: '/newentry',
    views: {
      'content': {
        templateUrl: 'templates/newEntry.html',
        controller: 'newEntryCtrl',
         resolve: {
          currentAuth: function(Authentication){
            return Authentication.requireAuth();
          }// currentAuth
        } //resolve
      } // 'content' 
    } // views
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'content': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl',
         resolve: {
          currentAuth: function(Authentication){
            return Authentication.requireAuth();
          }// currentAuth
        } //resolve
      }
    }
  })


  .state('app.calendar-detail', {
    url: '/calendar/:entryId',
    views: {
      'content': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'newEntryCtrl',
         resolve: {
          currentAuth: function(Authentication){
            return Authentication.requireAuth();
          }// currentAuth
        } //resolve
      }
    }
  })

$urlRouterProvider.otherwise('/app/login')

});
