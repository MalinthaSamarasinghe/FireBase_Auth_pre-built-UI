var app_fireBase = {};
(function(){
  // Intialize FireBase
  var config = {
    apiKey: "AIzaSyAXpnV-IgLlpMeIbkvsBIzn1-hrqrRgyKU",
    authDomain: "thappauth.firebaseapp.com",
    projectId: "thappauth",
    storageBucket: "thappauth.appspot.com",
    messagingSenderId: "149650303781",
    appId: "1:149650303781:web:b95c2929816350de5dc8cc"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()