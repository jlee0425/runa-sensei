import { google } from 'googleapis';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

const listEvents = () => {
	const calendar = google.calendar({ version: 'v3' });
	calendar.events.list(
		{
			calendarId: 'runaesensei@gmail.com',
			maxResults: 10,
			singleEvents: true,
			orderBy: 'startTime',
		},
		(err, res) => {
			if (err) {
				console.log('API returned an error: ' + err);
			}
			const events = res.data.items;
			if (events.length) {
				events.map((event, i) => {
					const start = event.start.dateTime || event.start.date;
					console.log(`${start} - ${event.summary}`);
				});
			}
		},
	);
};
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
	listEvents();
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
