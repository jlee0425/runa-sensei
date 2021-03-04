import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

export const dataToUser = (user) => ({
	uid: user.uid,
	username: user.displayName,
	email: user.email,
	photoURL: user.photoURL,
	createdAt: user.metadata.creationTime,
	lastSignedIn: user.metadata.lastSignInTime,
	admin: false,
});

export const useUserData = () => {
	const [user] = useAuthState(auth);
	console.log(user);

	useEffect(() => {
		// turn off realtime subscription
		let unsubscribe;
		if (user) {
			const ref = firestore.collection('users').doc(user.uid);
			unsubscribe = ref.onSnapshot((doc) => {
				doc.data()?.uid;
			});
		}

		return unsubscribe;
	}, [user]);

	return user ? dataToUser(user) : null;
};
