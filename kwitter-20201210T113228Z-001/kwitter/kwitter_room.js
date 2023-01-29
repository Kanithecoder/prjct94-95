
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAOhu-ajZ8IJzMjmHpvDELkgQ-Q9LnGWL8",
      authDomain: "kwitterapp-cdcfe.firebaseapp.com",
      databaseURL: "https://kwitterapp-cdcfe-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-cdcfe",
      storageBucket: "kwitterapp-cdcfe.appspot.com",
      messagingSenderId: "124823083009",
      appId: "1:124823083009:web:983207c82e7cf75a9d8800"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location("kwitter_page.html");
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location("kwitter_page.html");
}
