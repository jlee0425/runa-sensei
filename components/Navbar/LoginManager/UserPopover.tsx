import {
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverBody,
	Image,
	PopoverHeader,
	Text,
	Center,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context';
import SignoutBtn from './SignoutBtn';

const UserPopover = () => {
	const { username, email, photoURL } = useContext(UserContext);

	return (
		<>
			<Popover>
				<PopoverTrigger>
					<Image src={photoURL} boxSize='35px' borderRadius='full' />
				</PopoverTrigger>
				<Portal>
					<PopoverContent boxSize='auto'>
						<PopoverHeader>
							<Center fontWeight='bold'>{username}</Center>
							<Center fontSize='0.9rem'>@{email.split('@')[0]}</Center>
						</PopoverHeader>
						<PopoverBody>
							<Center>
								<SignoutBtn />
							</Center>
						</PopoverBody>
					</PopoverContent>
				</Portal>
			</Popover>
		</>
	);
};

export default UserPopover;
