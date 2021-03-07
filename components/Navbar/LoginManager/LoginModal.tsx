import {
	Button,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useToast,
} from '@chakra-ui/react';
import firebase from 'firebase';
import React from 'react';
import { auth, firestore, googleAuthProvider } from '../../../lib/firebase';
import { dataToUser } from '../../../lib/useUserData';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
	const toast = useToast();

	const signInWithGoogle = async () => {
		try {
			const res = await auth.signInWithPopup(googleAuthProvider);
			const credential: firebase.auth.OAuthCredential = res.credential;
			const token = credential.accessToken;
			console.log('credential', credential);
			const user = res.user;
			await signUp(dataToUser(user));

			toast({
				title: 'Log in successful',
				status: 'success',
				duration: 1000,
				isClosable: true,
			});
			onClose();
		} catch (e) {
			toast(e);
		}
	};

	const signUp = async (user) => {
		try {
			const userDoc = firestore.doc(`users/${user.uid}`);
			if (user.uid && !(await userDoc.get()).exists) {
				await userDoc.set(user);
			}
		} catch (e) {
			toast({
				title: 'Sign up failed',
				description: e,
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
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default LoginModal;
