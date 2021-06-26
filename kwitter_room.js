
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDrpyDfjH9_tpa0ZvML2b0VSCSJEuxvbLs",
      authDomain: "kwitter-972c7.firebaseapp.com",
      databaseURL: "https://kwitter-972c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-972c7",
      storageBucket: "kwitter-972c7.appspot.com",
      messagingSenderId: "420246837663",
      appId: "1:420246837663:web:3c2f7cf49299de102805aa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
