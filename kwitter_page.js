var firebaseConfig = {
      apiKey: "AIzaSyCGcPoYam_KXvqSXXQdWfD_XEwMC9gfZic",
      authDomain: "kwitter-3f3ad.firebaseapp.com",
      databaseURL: "https://kwitter-3f3ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f3ad",
      storageBucket: "kwitter-3f3ad.appspot.com",
      messagingSenderId: "519244593381",
      appId: "1:519244593381:web:3354dcb119949626113c0c"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";      
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();
