import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

export const useUserData = () => {
	const [user] = useAuthState(auth);
	console.log('user', user);
	return user
		? { ...user, username: user.displayName }
		: {
				uid: null,
				username: null,
				email: null,
				photoURL: null,
				admin: false,
		  };
};
