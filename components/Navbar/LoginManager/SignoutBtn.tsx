import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { auth } from '../../../utils/firebase';

const SignoutBtn = () => {
	const router = useRouter();
	const signOut = async () => {
		await auth.signOut();
		router.push('/');
	};
	return <Button onClick={signOut}>Sign Out</Button>;
};

export default SignoutBtn;
