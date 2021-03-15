import { Grid } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { useDaysOfWeek } from '../../../lib/useDaysOfWeek';
import { CalendarRow } from '../CalendarComponents/CalendarRow';
import { WeeklyColumn } from './WeeklyColumn';

export const WeeklyBody = () => {
	const days: Date[] = useDaysOfWeek();

	return (
		<Grid templateColumns='repeat(7, 1fr)'>
			{days.map((day) => (
				<WeeklyColumn date={day} />
			))}
		</Grid>
	);
};
