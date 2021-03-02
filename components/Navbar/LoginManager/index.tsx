import { useDisclosure, Button, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context';
import LoginModal from './LoginModal';
import SignoutBtn from './SignoutBtn';

interface Props {}

const LoginManager = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { username, photoURL } = useContext(UserContext);

	return username ? (
		<>
			<Image src={photoURL.toString()} boxSize='20px' />
			<SignoutBtn />
		</>
	) : (
		<>
			<Button onClick={onOpen}>Log In</Button>
			<LoginModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default LoginManager;
