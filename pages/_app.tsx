import { ChakraProvider, useTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const theme = useTheme();
	console.log('theme', theme);
	return (
		<ChakraProvider>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
