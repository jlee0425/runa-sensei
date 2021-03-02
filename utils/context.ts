import { createContext } from 'react';
import firebase from 'firebase';

interface User {
	uid: string;
	username: string;
	email: string;
	photoURL: URL;
	lastLoggedIn: firebase.firestore.Timestamp;
	admin: boolean;
}

const defaultUser: User = {
	uid: null,
	username: null,
	email: null,
	photoURL: null,
	lastLoggedIn: null,
	admin: false,
};

export const UserContext = createContext<User>(defaultUser);
