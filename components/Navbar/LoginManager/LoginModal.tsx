import {
	Box,
	Button,
	Container,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import React from 'react';
import { auth, googleAuthProvider } from '../../../utils/firebase';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
	const toast = useToast();

	const signInWithGoogle = async () => {
		try {
			await auth.signInWithPopup(googleAuthProvider);
			toast({
				title: 'log in successful',
				status: 'success',
				duration: 1000,
				isClosable: true,
			});
			onClose();
		} catch (e) {
			toast({
				title: 'Something Went Wrong.',
				description: 'Failed to log in with google.',
				status: 'error',
				duration: 1000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Log in</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Button onClick={signInWithGoogle}>
							<Image
								src={'/google.png'}
								boxSize='20px'
								alt='google logo'
								mr='1'
							/>
							{'  '}
							Sign in With Google
						</Button>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
