angular.module('app.controllers', [])

.controller('MainCtrl', function($scope, localStorageService){

})

.controller('cameraCtrl', function($scope) {

})

.controller('newEntryCtrl', function($scope,localStorageService) {


  var storedEntries = localStorageService.get('entries');
  $scope.entries = storedEntries || [];
  //angular $watch listener watches for changes in the value of $scope.entries. If someone adds or removes an entry, it will then keep local storage entries datastore in sync
  $scope.$watch('entries', function(){
    localStorageService.set('entries', $scope.entries);
  }, true);
  // add entry
  $scope.addEntry = function(){

    $scope.entries.push($scope.titleadded);
    $scope.entries.push($scope.content);

    $scope.titleadded='';
    $scope.content='';
  }
  //remove entry
    $scope.removeEntry = function (index) {
      $scope.entries.splice(index, 1);
    };
})

.controller('calendarCtrl', function($scope) {

})

.controller('entryDetailCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
