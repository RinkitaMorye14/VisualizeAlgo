const firebaseConfig = {
    apiKey: "AIzaSyB9mNa6_nsvUwXYLVDFLv6zt2mv7JrF4Zc",
    authDomain: "algovisuals-9b02f.firebaseapp.com",    
    projectId: "algovisuals-9b02f",
    storageBucket: "algovisuals-9b02f.appspot.com",
    messagingSenderId: "909828807360",
    appId: "1:909828807360:web:e36c6c159bf904f5f4ab25"
    };

    firebase.initializeApp(firebaseConfig);

    firebase = window.firebase;

    function signIn()
{
   console.log(firebase);
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider);
}