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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name- "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; 
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
