import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';



const firebaseConfig = {

  apiKey: "AIzaSyCPokaaSJLhvn4z61f0NPqLuiieyJYukdU",

  authDomain: "myapp-f15ff.firebaseapp.com",

  projectId: "myapp-f15ff",

  storageBucket: "myapp-f15ff.appspot.com",

  messagingSenderId: "671878069880",

  appId: "1:671878069880:web:03d1a50e1b3007e076b78d",

  measurementId: "G-W63WK8WL5E"

};


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth (firebaseApp)

  export {db, auth};
  