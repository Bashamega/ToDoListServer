const express = require("express");
const router = express.Router();
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const { getDatabase, ref, onValue } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQ12hzqrX0GeZbQSBTismcWTP-cVZB_o",
  authDomain: "todolist-86cba.firebaseapp.com",
  databaseURL: "https://todolist-86cba-default-rtdb.firebaseio.com",
  projectId: "todolist-86cba",
  storageBucket: "todolist-86cba.appspot.com",
  messagingSenderId: "457028026577",
  appId: "1:457028026577:web:a2e292d84dcf774b5885f0"
};
let items = 0;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

var itemsRef = ref(db, 'items/');
onValue(itemsRef, (snapshot) => {
  items = snapshot.val();
});

router.get('/', (req, res) => {
  res.json({
    items
  });
});

module.exports = router;