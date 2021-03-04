import { Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Chakra } from '../components/Chakra';
import Navbar from '../components/Navbar';
import { UserContext } from '../utils/context';
import { useUserData } from '../utils/useUserData';

const CLIENT_ID =
	'938672571350-qiaef08rs3aovafrkg388vd1l06gqnfu.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD1miRJK_DESGZ5w2HuJBDd_6MdTpeWjBE';
const DISCOVERY_DOCS = [
	'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const initClient = () => {};
const MyApp = ({ Component, pageProps }: AppProps) => {
	const user = useUserData();

	return (
		<Chakra cookies={pageProps.cookies}>
			<Head>
				<script
					async
					defer
					src='https://apis.google.com/js/api.js'
					onLoad={() => {}}
				/>
			</Head>
			<Box maxW='3xl' m='auto'>
				<UserContext.Provider value={user}>
					<Navbar />
					<Component {...pageProps} />
				</UserContext.Provider>
			</Box>
		</Chakra>
	);
};

export default MyApp;
