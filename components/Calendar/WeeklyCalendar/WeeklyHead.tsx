import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { startOfWeek, addDays, format } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { useDaysOfWeek } from '../../../lib/useDaysOfWeek';

export const WeeklyHead = () => {
	const days: Date[] = useDaysOfWeek();
	const { currentTime } = useContext(CalendarContext);

	return (
		<Grid templateColumns='repeat(7, 1fr)'>
			{days.map((date) => (
				<GridItem bg='teal.100' border='1px solid skyblue'>
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
		</Grid>
	);
};
