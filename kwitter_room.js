
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

  username = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "Welcome  " + username + "!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name:" + Room_names);
      row = "<div class='room_name' id=" + Room_names+ " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div> <hr>"; 
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function add_room(){
  room_name = document.getElementById("roomname").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}