import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAw_yYdckbqaMFS0crvO27H7qFnpzTicaM",
    authDomain: "pizza-challenge-84593.firebaseapp.com",
    projectId: "pizza-challenge-84593",
    storageBucket: "pizza-challenge-84593.appspot.com",
    messagingSenderId: "284100822003",
    appId: "1:284100822003:web:4b64d403980b8ec336c886"
  };
  
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
    prompt: "select_account"
    });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
    export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

    export const db = getFirestore();
