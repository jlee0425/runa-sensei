import { Box, Center, GridItem, Text } from '@chakra-ui/react';
import { startOfWeek, addDays, format } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../lib/context';

export const Days = () => {
	const dateFormat = 'iiii';
	const days: string[] = [];
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfWeek(currentTime);

	for (let i = 0; i < 7; i++) {
		days.push(format(addDays(startDate, i), dateFormat));
	}

	return (
		<>
			{days.map((day) => (
				<GridItem bg='tomato' fontSize='md' h='50%'>
					<Center>{day}</Center>
				</GridItem>
			))}
		</>
	);
};
