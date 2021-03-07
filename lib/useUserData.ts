import { google } from 'googleapis';
import { useState, useEffect, createRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore, googleAuthProvider } from './firebase';
import fs from 'fs';
import readline from 'readline';

const TOKEN_PATH = 'token.json';
fs.readFile('credentials.json', (err, content) => {
	if (err) return console.log('readfile err');
	authorize(JSON.parse(content.toString()), listEvents);
});

const authorize = (credentials, callback) => {
	const { client_secret, client_id, redirect_uris } = credentials.installed;
	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0],
	);
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getAccessToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token.toString()));
		callback(oAuth2Client);
	});
};

const getAccessToken = (oAuth2Client, callback) => {
	const authURL = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: ['https://www.googleapis.com/auth/calendar.readonly'],
	});
	console.log('authorize this app by visiting this url: ', authURL);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	rl.question('Enter the code from the page: ', (code) => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error('Error retrieving access token', err);
			oAuth2Client.setCredentials(token);
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err);
				console.log('Token stored to', TOKEN_PATH);
			});
			callback(oAuth2Client);
		});
	});
};

const listEvents = (auth) => {
	const calendar = google.calendar({ version: 'v3', auth });
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
	googleAuthProvider.addScope(
		'https://www.googleapis.com/auth/calendar.readonly',
	);
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
