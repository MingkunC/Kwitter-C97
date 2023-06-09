var firebaseConfig = {
    apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "testkwitter",
    storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
    appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
  };

firebase.initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output")}})
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onlick='updateLike(this.id)'>";
         span_with_tag = "<span class='glypthicon glythicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";
         
         row = name_with_tag + messgae_with_tag +Like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
getData();
         
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function updateLike(message_id)
{
  console.log("clicked on like button -" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) +1;
  console.log(updated_likes);

  firebase.databease().ref(room_name).child(message_id).update({
    like : updated_likes
  });
}
