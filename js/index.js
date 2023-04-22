import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCpDBlTuT6M2WbE4Vi4YCeLWbxOZpfSb0U",
  authDomain: "visualizesalgo.firebaseapp.com",
  projectId: "visualizesalgo",
  storageBucket: "visualizesalgo.appspot.com",
  messagingSenderId: "571325435944",
  appId: "1:571325435944:web:95beba33203338d357e51d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const database = getDatabase(app);

signin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //alert(user);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "firstpage.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      //alert(credential);
    });
});

signout.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      //alert("${user}user signout successfully");
      localStorage.removeItem("user");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error);
    });
});

const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  console.log("User not signed in");
  window.location.href = "index.html";
} else {
  console.log("User signed in");
  const email = user.email;
  const displayName = user.displayName;
  // display user information in the page
  const userInfo = document.getElementById("name");
  userInfo.innerHTML = displayName;
  const usermail = document.getElementById("work");
  usermail.textContent = email;

  sendMsg.addEventListener("click", (e) => {
    var msg = document.getElementById("msg_ip").value;
    var name = displayName;
    console.log(msg);
    const id = push(child(ref(database), "msg")).key;

    set(ref(database, "msg/" + id), {
      name: name,
      message: msg,
    });
    document.getElementById("msg_ip").value = " ";
    // alert("Message has been sent");
  });

  const newMsg = ref(database,'msg/');
  onChildAdded(newMsg,(data) => {
    console.log(data.val().name);
    if(data.val().name != displayName)
    {
      console.log(data.val().name);
      var divdata='<div class="guest">\n'+
                  '<div class="user_name">'+data.val().name+'</div>\n'+
                  '<div class="msg">'+data.val().message+''+'</div>\n'+
                  '</div>\n';
      var d1=document.getElementById('msg_block');
      d1.insertAdjacentHTML('beforebegin',divdata);
    }
    if(data.val().name == displayName)
    {
      console.log(data.val().name);
      var divdata='<div class="user">\n'+
                      '<div class="user_name">'+data.val().name+'</div>\n'+
                      '<div class="msg">'+data.val().message+''+'</div>'+
                    '</div>';
      var d1=document.getElementById('msg_block');
      d1.insertAdjacentHTML('beforebegin',divdata);
    }
  });
}
