import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import LoginModal from './LoginModal';

const LoginManager = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>Log In</Button>
			<LoginModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default LoginManager;
