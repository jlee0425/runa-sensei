import {
	Box,
	Button,
	Container,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../utils/context';
import { auth, firestore, googleAuthProvider } from '../../../utils/firebase';
import { toast, toastTypes } from '../../../utils/toast';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
	const toast = useToast();
	const user = useContext(UserContext);

	const signInWithGoogle = async () => {
		try {
			await auth.signInWithPopup(googleAuthProvider);
			const userDoc = firestore.doc(`users/${user.uid}`);
			const batch = firestore.batch();

			batch.set(userDoc, {
				uid: user.uid,
				username: user.displayName,
				photoURL: user.photoURL,
				email: user.email,
				admin: false,
			});

			await batch.commit();
			toast({
				title: 'Log in successful',
				status: 'success',
				duration: 1000,
				isClosable: true,
			});
			onClose();
		} catch (e) {
			toast({
				title: 'Log in failed',
				status: 'error',
				duration: 1000,
				isClosable: true,
			});
		}
	};

	const login = async () => {
		if (user) {
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
