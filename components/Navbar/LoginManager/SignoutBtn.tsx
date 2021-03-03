import { Button, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { auth } from '../../../utils/firebase';
import { toast, toastTypes } from '../../../utils/toast';

const SignoutBtn = () => {
	const router = useRouter();
	const toast = useToast();

	const signOut = async () => {
		await auth.signOut();
		router.push('/');
		toast({
			title: 'You are logged out',
			status: 'success',
			duration: 1000,
			isClosable: true,
		});
	};
	return <Button onClick={signOut}>Sign Out</Button>;
};

export default SignoutBtn;
