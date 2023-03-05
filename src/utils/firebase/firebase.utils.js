import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRx98mK5FKswl-6Iz5JfiLT4olAyg_Tw0',
  authDomain: 'shop-db-30cd0.firebaseapp.com',
  projectId: 'shop-db-30cd0',
  storageBucket: 'shop-db-30cd0.appspot.com',
  messagingSenderId: '51423395866',
  appId: '1:51423395866:web:d1f8adf838ec679c4691a3',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
