import {
	ChakraProvider,
	cookieStorageManager,
	localStorageManager,
} from '@chakra-ui/react';

export const Chakra = ({ cookies, children }) => {
	const colorModeManager =
		typeof cookies === 'string'
			? cookieStorageManager(cookies)
			: localStorageManager;

	return (
		<ChakraProvider colorModeManager={colorModeManager}>
			{children}
		</ChakraProvider>
	);
};

export const getServerSideProps = ({ req }) => {
	return {
		props: {
			cookies: req.headers.cookie ?? '',
		},
	};
};
