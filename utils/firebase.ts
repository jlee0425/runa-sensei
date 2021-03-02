import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAj02UqgpyZ7rdygjez7mpy4vr47CFqy4s',
	authDomain: 'runa-sensei.firebaseapp.com',
	projectId: 'runa-sensei',
	storageBucket: 'runa-sensei.appspot.com',
	messagingSenderId: '233126999983',
	appId: '1:233126999983:web:96e57f720ef4767b8ee15a',
	measurementId: 'G-JQ8781N7GL',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
