import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAEEqqBXpPtvkUQrpLh89cwbA2zLDtCuQk",
    authDomain: "fir-e1a4a.firebaseapp.com",
    projectId: "fir-e1a4a",
    storageBucket: "fir-e1a4a.appspot.com",
    messagingSenderId: "870211657033",
    appId: "1:870211657033:web:692d39d0f6466916350e98",
    measurementId: "G-ZDBQKHC1LX"
  };

 export default firebase.initializeApp(firebaseConfig)


