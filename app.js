(function(){
    
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAR7qvA_ndwO9dQWTrRIT_aSOGxHljiSKE",
    authDomain: "mychatapp-1bc8b.firebaseapp.com",
    databaseURL: "https://mychatapp-1bc8b.firebaseio.com",
    storageBucket: "mychatapp-1bc8b.appspot.com",
    messagingSenderId: "902956545483"
  };
  firebase.initializeApp(config);
    
    //Fetching the DOM elements.
    const inputName = document.getElementById("inputText");
    const addButtonRef = document.getElementById("addButton");
    const ulListRef = document.getElementById("viewList");
    
    //Creating a database reference
    const dbRef = firebase.database().ref().child("users");
    const studentRef = dbRef.child("students");
    
    //Fetching the list
    studentRef.on('child_added', snap => {
            
            const li = document.createElement("li");
            li.id = snap.key;
            li.innerText = snap.val();
            ulListRef.appendChild(li);
    });
    studentRef.on('child_removed', snap => {
        const li = document.getElementById(snap.key);
        li.remove();
    });
    
    addButtonRef.addEventListener('click', function(snapshot){
        var getName = inputName.value;
        studentRef.push(getName);
    });
    
    
    
}());