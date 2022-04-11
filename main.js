var mainApp = {};
(function(){
  var mainContainer = document.getElementById("main_container");
  var firebase = app_fireBase;
  var uid = null;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
          uid = user.uid;
        } else {
          // No user is signed in.
          uid = null;
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });

      var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
      }
      
      mainApp.logout = logtout;

})();