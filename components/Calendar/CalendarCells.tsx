import { Box, Container, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CalendarContext } from '../../lib/context';
import MonthlyCalendar from './MonthlyCalendar';
import WeeklyCalendar from './WeeklyCalendar';

interface Props {}

const CalendarContainer = (props: Props) => {
	const { viewType } = useContext(CalendarContext);
	console.log('viewType', viewType);
	return (
		<Container maxW='4xl'>
			{viewType == 'Monthly' ? (
				<>
					<Heading size='md' align='center'>
						Monthly Calendar
					</Heading>
					<MonthlyCalendar />
				</>
			) : (
				<>
					<Heading>Weekly Calendar</Heading>
					<WeeklyCalendar />
				</>
			)}
		</Container>
	);
};

export default CalendarContainer;
