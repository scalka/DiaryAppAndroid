angular.module('app.controllers', [])

.controller('cameraCtrl', function($scope) {

})

.controller('newEntryCtrl', function($scope, localStorageService, $state, $base64, Camera) {
  var pictureData; 
  // ??
  $scope.entryId = $state.params.entryId;
  $scope.entry = $state.params.entryId;

  var storedEntries = localStorageService.get('entries');
  // array with entries
  $scope.entries = storedEntries || [];
  $scope.failed =''; // a msg displayed if the form fails to submit
  //angular $watch listener watches for changes in the value of $scope.entries. If someone adds or removes an entry, it will then keep local storage entries datastore in sync
  $scope.$watch('entries', function(){
    localStorageService.set('entries', $scope.entries);
  }, true);
  // ADD entry
  $scope.addEntry = function(){
    //if all required fields are complete
    if (!$scope.addNewEntryForm.$error.required){
      $scope.failed=''; // remove warning
    // store entry data in an object
    var newEntry = {
      id: $scope.newTitle, // tymczasowe rozwiazanie
      titleEntry: $scope.newTitle,
      dateEntry: Date(),
      ctntEntry: $scope.ctntEntry,
      image: $scope.pictureData
    };
    // add new entry to the model by adding it to the entries array
    $scope.entries.push(newEntry);
    //reset the input values for the form
    $scope.newTitle='';
    $scope.ctntEntry='';
    $scope.pictureData='';
  } else {
    $scope.failed = "All fields must be filled"
  }
};
  // getting photos and saving img data as a variable which is assigned to entries[] newEntry object
  $scope.getPhoto = function() {
      //settings used when calling the cordova camera
      var cameraSettings = {
        sourceType: 1, //navigator.camera.PictureSourceType.CAMERA,
        destinationType: 0,
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false,
        correctOrientation: true,
      };
    Camera.getPicture(cameraSettings).then(function(imageData){
      $scope.pictureData = imageData; // image
    }, function(err){
      console.log(err);
    });
  };
    //remove entry
  $scope.removeEntry = function (index) {
      $scope.entries.splice(index, 1);
  };
  $scope.checkPictureData = function(){
    if ($scope.pictureData == ''){
      $scope.imgContainer = true;
      console.log( $scope.imgContainer );
    } else {
      $scope.imgContainer = false;
      console.log( $scope.imgContainer );
    };
  };
  // going to entry detail
  $scope.onTap = function(index){
    $state.go('app.calendar-detail', {entryId: index});
  };

})

.controller('calendarCtrl', function($scope) {
 
})

.controller('entryDetailCtrl', function($scope, $state) {

})

.controller('profileCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})


.controller('loginCtrl', function($scope, $firebase, Authentication)
{
  $scope.login = function(){
    // TODO displaying msges to the user
     $scope.message = error;
    Authentication.login($scope.user);
  }; // login
  $scope.logout = function(){
    Authentication.logout();
  }; // logout
  $scope.register = function(){
    Authentication.register($scope.user);
  }; // register
}); // controller    https://github.com/firebase/angularfire/blob/master/docs/quickstart.md


