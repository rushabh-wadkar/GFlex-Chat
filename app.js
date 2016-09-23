(function(){
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCI2DbiO8zooI0HxiXVRrFYhwx8lgZc2JI",
        authDomain: "gflex-chat-5bf2b.firebaseapp.com",
        databaseURL: "https://gflex-chat-5bf2b.firebaseio.com",
        storageBucket: "gflex-chat-5bf2b.appspot.com",
        messagingSenderId: "416462513454"
      };
      firebase.initializeApp(config);
    
    //Database reference
    const dbRef = firebase.database().ref().child("Chats");
    const messageRef = dbRef.child("Messages");
    
    //Login Authentication variables
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    
    //Refer to ID's of all buttons and elements in index.html
    const loginRef = document.getElementById("loginBtn");
    
    loginRef.addEventListener('click', function(){
        
            firebase.auth().signInWithPopup(provider).then(function(result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                    user = JSON.parse(user);
                console.log(user[0]['email']);
                  // ...
            }).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                console.log("Error " + error);
                  // ...
            });
    })
}());