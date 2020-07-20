import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCHW7HOhzj046iW1tEuZrNAD3HVEsta6to",
  authDomain: "expensify-3f784.firebaseapp.com",
  databaseURL: "https://expensify-3f784.firebaseio.com",
  projectId: "expensify-3f784",
  storageBucket: "expensify-3f784.appspot.com",
  messagingSenderId: "758963847121",
  appId: "1:758963847121:web:1f4811ae5edeb233ae6af0",
  measurementId: "G-EQFE1MG5NK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
