import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// ==========env Not working next steap solve ==============>

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey ,
//   authDomain: process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId ,
//   appId: process.env.REACT_APP_appId ,
// };

// ==========

const firebaseConfig = {
  apiKey: "AIzaSyBxKxLL2iLxOh-5OKYtriG3izTbUsQZoFk",
  authDomain: "hotelroom-9f2ce.firebaseapp.com",
  projectId: "hotelroom-9f2ce",
  storageBucket: "hotelroom-9f2ce.appspot.com",
  messagingSenderId: "96992972753",
  appId: "1:96992972753:web:598c43ff0b8c9ad5121af0"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

const auth = getAuth(app)

export default auth;

