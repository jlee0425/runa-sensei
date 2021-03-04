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
import React from 'react';
import { auth, firestore, googleAuthProvider } from '../../../utils/firebase';
import { dataToUser } from '../../../utils/useUserData';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
	const toast = useToast();
	const signInWithGoogle = async () => {
		try {
			const res = await auth.signInWithPopup(googleAuthProvider);
			await signUp(dataToUser(res.user));

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
				const batch = firestore.batch();

				batch.set(userDoc, user);

				await batch.commit();
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
