import { Center, Container, HStack, Text } from '@chakra-ui/react';
import { addDays, format, startOfWeek } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { CalendarController } from './CalendarController';

export const CalendarHeader = () => {
	return (
		<Container flexDirection='column' bg='teal.100'>
			<Center bg='teal'>
				<CalendarController />
			</Center>
		</Container>
	);
};
