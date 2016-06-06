angular.module('app.controllers', [])

.controller('MainCtrl', function($scope, localStorageService){

})

.controller('cameraCtrl', function($scope, $base64, Camera, $localStorage, localStorageService, $state, storage, $sessionStorage) {
/*
      $scope.getPhoto = function() {
            console.log("btn clicked");
            //first we define a var to set the settings we use calling the cordova camera,
            var cameraSettings = {
              sourceType: 1, //navigator.camera.PictureSourceType.CAMERA,
              destinationType: 0, //navigator.camera.DestinationType.DATA_URL, // very importend!!! to get base64 and no link NOTE: mybe cause out of memory error after a while
              quality: 75,
              targetWidth: 320,
              targetHeight: 320,
              saveToPhotoAlbum: true,
              correctOrientation: true,
            };
          //calling our service with asynchronously runs the cordova camera plugin
         Camera.getPicture(cameraSettings).then(function(imageData) {
            //adding the phone number and pasing the object to json
            var image= {
                "imageData":imageData,
                "timestamp": Date.parse(Date())
              };
            //store localy now
            storage.addOwnImage(image);
         }, function(err) {
           console.log(err);
          //this function dosnt even get called, have to make a cetch outside before
          });
      };
//      if ($localStorage.ownImages == undefined) {
//         $localStorage.ownImages = [];
//     }
     $scope.ownImages = $localStorage.ownImages;
*/
})

.controller('newEntryCtrl', function($scope, localStorageService, $state, $base64, Camera) {
  // ??
  $scope.entryId = $state.params.entryId;
  var storedEntries = localStorageService.get('entries');
  // array with entries
  $scope.entries = storedEntries || [];
  $scope.failed =''; // a msg displayed if the form fails to submit

  var storedPictures = localStorageService.get('pictures');
  $scope.pictures = storedPictures || [];

  //angular $watch listener watches for changes in the value of $scope.entries. If someone adds or removes an entry, it will then keep local storage entries datastore in sync
  $scope.$watch('entries', function(){
    localStorageService.set('entries', $scope.entries);
  }, true);

    $scope.$watch('pictures', function(){
    localStorageService.set('pictures', $scope.pictures);
  }, true);

  // add entry
  $scope.addEntry = function(){
    //if all required fields are complete
    if (!$scope.addNewEntryForm.$error.required){
      $scope.failed=''; // remove warning

    // store entry data in an object
    var newEntry = {
      id: $scope.newTitle + (Math.random()), // tymczasowe rozwiazanie
      titleEntry: $scope.newTitle,
      dateEntry: Date(),
      ctntEntry: $scope.ctntEntry,
      image: $scope.entries.image
    };
    // add new entry to the model by adding it to the entries array
    $scope.entries.push(newEntry);
    //reste the input values for the form
    $scope.newTitle='';
    $scope.ctntEntry='';
    
    console.log("pictures cleared");
  } else {
    $scope.failed = "All fields must be filled"
  }
};
  $scope.getPhoto = function() {
      console.log("btn clicked");
      //first we define a var to set the settings we use calling the cordova camera,
      var cameraSettings = {
        sourceType: 1, //navigator.camera.PictureSourceType.CAMERA,
        destinationType: 0, //navigator.camera.DestinationType.DATA_URL, // very importend!!! to get base64 and no link NOTE: mybe cause out of memory error after a while
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: true,
        correctOrientation: true,
      };
    Camera.getPicture(cameraSettings).then(function(imageData){
      console.log("getPicture()");
      var picture = {
        "imageData":imageData
      };
      console.log("before push");
      $scope.entries.push({image: picture});
    }, function(err){
      console.log(err);
    });
  };
    //remove entry
  $scope.removeEntry = function (index) {
      $scope.entries.splice(index, 1);
  };
  $scope.clearPictures = function(){
   //   $scope.pictures.splice(1, 1);
      console.log($scope.pictures.length);
      $scope.pictures.length = 0 ;
      console.log("pictures cleared");
  };
})

.controller('calendarCtrl', function($scope) {

})

.controller('entryDetailCtrl', function($scope, $state) {
  $scope.entry = $state.params.entryId;
})

.controller('profileCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
