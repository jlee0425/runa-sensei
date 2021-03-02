import React from 'react';
import { Text } from '@chakra-ui/react';
import Calendar from '../components/Calendar';

interface Props {}

const Home = (props: Props) => {
	return (
		<>
			<Text fontSize='xl'>!!Home Page!!</Text>
			<Calendar />
		</>
	);
};

export default Home;
