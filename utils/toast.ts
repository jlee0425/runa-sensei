import { useToast, UseToastOptions } from '@chakra-ui/react';

export enum toastTypes {
	loginSuccess,
	loginFailure,
	logout,
}

const toasts: UseToastOptions[] = [
	{ title: 'Log in successful', status: 'success' },
	{ title: 'Log in failed', status: 'error' },
	{ title: 'You are logged out', status: 'success' },
];

export const toast = (type: toastTypes) => {
	const toast = useToast();
	toast({ ...toasts[toastTypes[type]], duration: 1000, isClosable: true });
};
