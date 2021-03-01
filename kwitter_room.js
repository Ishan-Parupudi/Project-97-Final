
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAG62AHpQHw32AW1RhAq4flqMXzU7BoQ3o",
      authDomain: "kwitter---the-social-website.firebaseapp.com",
      databaseURL: "https://kwitter---the-social-website-default-rtdb.firebaseio.com",
      projectId: "kwitter---the-social-website",
      storageBucket: "kwitter---the-social-website.appspot.com",
      messagingSenderId: "617680223685",
      appId: "1:617680223685:web:b29002481a4264d9b55fac",
      measurementId: "G-EC008HJ8RW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!" ;

    function addRoom()
      {
      room_names=document.getElementById("room_names").value;
      firebase.database().ref("/").child(room_names).update({
            purpose : "Adding Room Name"
      });      
localStorage.setItem("room_names",room_names);
window.location="kwitter_page.html"
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code//

      console.log("Room names" + room_names);
      row="<div class='room_names' id=" + room_names + "onclick='redirectToRoomName(this.id)'>#" + room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code//
      });});}
function redirectToRoomName(room_names)
{
console.log(room_names);
localStorage.setItem("room_names",room_names);

window.location="kwitter_page.html";
}

      function logout1()
      {
localStorage.removeItem("user_name");
localStorage.removeItem("password");

            window.location="kwitter.html";
      }
getData();
