import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

export const dataToUser = (user) => ({
	uid: user.uid,
	username: user.displayName,
	email: user.email,
	photoURL: user.photoURL,
	admin: false,
});

export const useUserData = () => {
	const [user] = useAuthState(auth);

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

	return user
		? dataToUser(user)
		: {
				uid: null,
				username: null,
				email: null,
				photoURL: null,
				admin: false,
		  };
};
