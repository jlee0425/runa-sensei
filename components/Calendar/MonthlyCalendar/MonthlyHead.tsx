import { Box, Center, GridItem, Text } from '@chakra-ui/react';
import { startOfWeek, addDays, format } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

export const MonthlyHead = () => {
	const dateFormat = 'EEE';
	const days: string[] = [];
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfWeek(currentTime);

	for (let i = 0; i < 7; i++) {
		days.push(format(addDays(startDate, i), dateFormat));
	}

	return (
		<>
			{days.map((day) => (
				<GridItem bg='teal.100'>
					<Center>
						<Text fontSize='2xl'>{day}</Text>
					</Center>
				</GridItem>
			))}
		</>
	);
};
