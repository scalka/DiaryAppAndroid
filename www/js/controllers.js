angular.module('app.controllers', [])

.controller('MainCtrl', function($scope){

})

.controller('cameraCtrl', function($scope) {

})

.controller('newEntryCtrl', function($scope) {

  $scope.entries = [];

  $scope.addEntry = function(){

    $scope.entries.push($scope.titleadded);
    $scope.entries.push($scope.content);

    $scope.titleadded='';
    $scope.content='';
  }
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
