angular.module('app.services', [])

.factory('Camera', ['$q', function($q) {
 // creating camera factory calls codova plugin to load native camera app
 //$q is used to give the controller a promise, check out the promise Api of angular for more details
 //$q and deferred is asynchronous programing and try, catch, throw is synchronous programming
 //== A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing
  return {
    getPicture: function(options) {
      // this is the same as try and catch, just asynchronous
      var deferred = $q.defer();
      navigator.camera.getPicture(function(result) {
        //calling codova plugin
        deferred.resolve(result);
      }, function(err) {
        deferred.reject(err);
      }, options);

      //handling the results
      return deferred.promise;
      //return a promise
    }

  }
}])
.factory('Authentication', function($rootScope, $firebase, $firebaseAuth, $firebaseObject, $state, $location){

  var auth = firebase.auth(); // holds data

  auth.onAuthStateChanged(function(authUser){
    if (authUser){
      var uid = authUser.uid;
      var userRef = database.ref('user/' + authUser.uid);
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
      console.log("currentUser");
    } else {
      $rootScope.currentUser = '';
    }
  });

  return {
    login: function(user){
      var email = user.email;
      var password = user.password;

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user){
        // TODO change view
        $location.path('/newEntry');

        console.log("user logged in");
      }).catch(function(error){
          console.log(error);
        });
    }, // login

    logout: function(){
      firebase.auth().signOut().then(function() {
          // Sign-out successful.
          console.log("signed out");
        }, function(error) {
          // An error happened.
          console.log(error);
      });
    }, // logout

    requireAuth: function() {
      firebase.auth().$requireAuth();
    }, // requreAuthentucation

    register: function(user){
        var email = user.email;
        var password = user.password;
        var firstname = user.firstname;
        var lastname = user.lastname;
      // create user wuth email and password then add data to database and catch errors
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
              database.ref('user/' + user.uid).set({
                  userId: user.uid,
                  firstname: firstname,
                  lastname: lastname,
                  email: email
                }); // set
              console.log("data saved to database");
          }).catch(function(error) {
              // Handle Errors here.
              console.log(error);
          });// createUser
    } // register
  } //return
});
