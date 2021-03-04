import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';

const Calendar = () => {
	return (
		<Flex justify='center'>
			<iframe
				src='https://calendar.google.com/calendar/embed?src=runaesensei%40gmail.com&ctz=Asia%2FSeoul'
				style={{ border: 0 }}
				width='800'
				height='600'
				frameBorder='0'
				scrolling='no'
			></iframe>
		</Flex>
	);
};

export default Calendar;
