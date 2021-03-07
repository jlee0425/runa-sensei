import { Box } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import { Chakra } from '../components/Chakra';
import Navbar from '../components/Navbar';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/useUserData';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const user = useUserData();
	return (
		<Chakra cookies={pageProps.cookies}>
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
