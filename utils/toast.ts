import { useToast } from '@chakra-ui/react';

const toasts = {
	loginSuccess: { title: 'Log in successful', status: 'success' },
	loginFailure: { title: 'Log in failed', status: 'error' },
	logout: { title: 'You are logged out', status: 'success' },
};

export const toast = (type: string) => {
	const toast = useToast();
	toast({ ...toasts[type], duration: 1000, isClosable: true });
};
