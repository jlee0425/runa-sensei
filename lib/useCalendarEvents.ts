const API_KEY = 'AIzaSyD1miRJK_DESGZ5w2HuJBDd_6MdTpeWjBE';
const CLIENT_ID =
	'938672571350-qiaef08rs3aovafrkg388vd1l06gqnfu.apps.googleusercontent.com';

const initClient = () => {
	window.gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: [
			'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
		],
		scope: 'https://www.googleapis.com/auth/calendar.readyonly',
	});
};

export const loadEvents = async () => {
	if (typeof window !== 'undefined') {
		gapi.load('client:auth2', initClient);
		const res = await gapi.client.calendar.events.list({
			calendarId: 'runaesensei@gmail.com',
			showDeleted: false,
		});

		return res.result;
	} else {
		return null;
	}
};
