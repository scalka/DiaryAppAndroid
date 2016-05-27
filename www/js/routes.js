angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.camera'
      2) Using $state.go programatically:
        $state.go('tabsController.camera');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/camera
      /page1/tab2/camera
  */
  .state('tabsController.camera', {
    url: '/camera',
    views: {
      'tab1': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      },
      'tab2': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  .state('tabsController.newEntry', {
    url: '/newentry',
    views: {
      'tab2': {
        templateUrl: 'templates/newEntry.html',
        controller: 'newEntryCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.calendar'
      2) Using $state.go programatically:
        $state.go('tabsController.calendar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/calendar
      /page1/tab3/calendar
  */
  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab2': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      },
      'tab3': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.entryDetail'
      2) Using $state.go programatically:
        $state.go('tabsController.entryDetail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/entrydetail
      /page1/tab3/entrydetail
  */
  .state('tabsController.entryDetail', {
    url: '/entrydetail',
    views: {
      'tab2': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'entryDetailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/entryDetail.html',
        controller: 'entryDetailCtrl'
      }
    }
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/page1/newentry')

  

});