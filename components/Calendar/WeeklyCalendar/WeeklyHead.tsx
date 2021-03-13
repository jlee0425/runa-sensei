import { Box, Center, GridItem, Text } from '@chakra-ui/react';
import { startOfWeek, addDays, format } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

export const WeeklyHead = () => {
	const dates: Date[] = [];
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfWeek(currentTime);

	for (let i = 0; i < 7; i++) {
		dates.push(addDays(startDate, i));
	}

	return (
		<>
			{dates.map((date) => (
				<GridItem bg='teal.100'>
					<Center flexDirection='column'>
						<Text fontSize='xl'>{format(date, 'EEE')}</Text>
						<Text
							fontWeight='bold'
							fontSize='3xl'
							color={`${currentTime.getDate() == date.getDate() && 'red'}`}
						>
							{date.getDate()}
						</Text>
					</Center>
				</GridItem>
			))}
		</>
	);
};
