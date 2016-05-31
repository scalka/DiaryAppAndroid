angular.module('app.controllers', [])

.controller('MainCtrl', function($scope, localStorageService){

})

.controller('cameraCtrl', function($scope) {

})

.controller('newEntryCtrl', function($scope,localStorageService) {

  var storedEntries = localStorageService.get('entries');
  // array with entries
  $scope.entries = storedEntries || [];
  $scope.failed ='' // a msg displayed if the form fails to submit

  //angular $watch listener watches for changes in the value of $scope.entries. If someone adds or removes an entry, it will then keep local storage entries datastore in sync
  $scope.$watch('entries', function(){
    localStorageService.set('entries', $scope.entries);
  }, true);

  // add entry
  $scope.addEntry = function(){
    //if all required fields are complete
    if (!$scope.addNewEntryForm.$error.required){
      $scope.failed=''; // remove warning

    // store entry data in an object
    var newEntry = {
      id: localStorageService.length,
      titleEntry: $scope.newTitle,
      ctntEntry: $scope.ctntEntry
    };

    // add new entry to the model by adding it to the entries array
    $scope.entries.push(newEntry);
    //reste the input values for the form
    $scope.newTitle='';
    $scope.ctntEntry='';
  } else {
    $scope.failed = "All fields must be filled"
  }
};


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
