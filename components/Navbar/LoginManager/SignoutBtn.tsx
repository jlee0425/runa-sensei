import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { auth } from '../../../utils/firebase';
import { toast } from '../../../utils/toast';

const SignoutBtn = () => {
	const router = useRouter();
	const signOut = async () => {
		await auth.signOut();
		router.push('/');
		toast('logout');
	};
	return <Button onClick={signOut}>Sign Out</Button>;
};

export default SignoutBtn;
