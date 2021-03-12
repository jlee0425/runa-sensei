import { Grid } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CalendarContext } from '../../lib/context';
import { Days } from './Days';
import MonthlyCalendar from './MonthlyCalendar';
import WeeklyCalendar from './WeeklyCalendar';

const [NUM_COLUMN, NUM_ROW] = [7, 6];
export const CalendarContainer = () => {
	const { viewType } = useContext(CalendarContext);

	return (
		<Grid
			maxW='4xl'
			w='100%'
			minH='500px'
			templateColumns={`repeat(${NUM_COLUMN}, 1fr)`}
			templateRows={`repeat(${NUM_ROW}, 1fr)`}
			templateAreas='days calendar'
			bg='whitesmoke'
			borderWidth='0.5px'
			borderColor='lightblue'
			borderRadius='5px'
		>
			<Days />
			{viewType == 'Monthly' ? (
				<>
					<MonthlyCalendar />
				</>
			) : (
				<>
					<WeeklyCalendar />
				</>
			)}
		</Grid>
	);
};
