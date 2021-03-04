import { createContext } from 'react';

export interface User {
	uid: string;
	username: string;
	email: string;
	photoURL: string;
	createdAt: Date;
	lastSignedIn: Date;
	admin: boolean;
}

export const UserContext = createContext<User>(null);
