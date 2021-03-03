import { ChakraProvider, useTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../utils/context';
import { useUserData } from '../utils/useUserData';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const user = useUserData();

	return (
		<ChakraProvider>
			<UserContext.Provider value={user}>
				<Navbar />
				<Component {...pageProps} />
			</UserContext.Provider>
		</ChakraProvider>
	);
};

export default MyApp;
