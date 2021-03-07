import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { googleAuthProvider } from '../../lib/firebase';

const initClient = () => {
	window.gapi.client.init({
		apiKey: process.env.GC_API_KEY,
		clientId: process.env.GC_CLIENT_ID,
		discoveryDocs: [
			'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
		],
		scope: 'https://www.googleapis.com/auth/calendar.readyonly',
	});
};
const loadCalendar = async () => {
	if (typeof window !== 'undefined') {
		await gapi.load('client:auth2', initClient);
		const res = await gapi.client.calendar.events.list({
			calendarId: 'runaesensei@gmail.com',
			showDeleted: false,
			singleEvents: true,
			maxResults: 10,
			orderBy: 'startTime',
		});
		console.log(res.result.items);
		console.log(res.result.timeZone);
		console.log(res.result);
	}
};
const Calendar = (props) => {
	loadCalendar();
	return (
		<Flex justify='center'>
			<iframe
				src='https://calendar.google.com/calendar/embed?src=runaesensei%40gmail.com&ctz=Asia%2FSeoul'
				style={{ border: 0 }}
				width='800'
				height='600'
				frameBorder='0'
				scrolling='no'
			></iframe>
		</Flex>
	);
};

export default Calendar;
