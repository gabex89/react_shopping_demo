import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBbJRMfZzrNcMtB-q_HiNrz8mBiGUz6EGY",
    authDomain: "crwn-react-database-df3f8.firebaseapp.com",
    projectId: "crwn-react-database-df3f8",
    storageBucket: "crwn-react-database-df3f8.appspot.com",
    messagingSenderId: "855359405978",
    appId: "1:855359405978:web:07fe142dd7915b7b990423",
    measurementId: "G-2436P47TZH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;