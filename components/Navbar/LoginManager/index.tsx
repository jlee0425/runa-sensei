import { Button, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context';
import LoginModal from './LoginModal';
import UserPopover from './UserPopover';

const LoginManager = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const user = useContext(UserContext);

	return user.uid ? (
		<>
			<UserPopover />
		</>
	) : (
		<>
			<Button onClick={onOpen}>Log In</Button>
			<LoginModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default LoginManager;
