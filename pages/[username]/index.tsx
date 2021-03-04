import { Center, Image, Container, Heading, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../../utils/context';

const index = () => {
	const { username, email, photoURL, createdAt, lastSignedIn } = useContext(
		UserContext,
	);
	return (
		<Container>
			<Center>
				<Image src={photoURL} boxSize='130px' borderRadius='full' />
				<Container>
					<Heading>{username}</Heading>
					<Text>{email}</Text>
					<Text>Joined: {createdAt}</Text>
					<Text>Last Signed In: {lastSignedIn}</Text>
				</Container>
			</Center>
		</Container>
	);
};

export default index;
