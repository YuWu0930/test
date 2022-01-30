
// import firebase from 'firebase/compat/app';
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PID,
 
// };
// firebase.initializeApp(firebaseConfig);
// const db = getFirestore();

// export default db;

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCGqewKsk3L253vXVfJTBLvOdcYAMyVnk4',
  authDomain: 'questionaire-3e936.firebaseapp.com',
  projectId: 'questionaire-3e936'
});

const db = getFirestore();

export default db