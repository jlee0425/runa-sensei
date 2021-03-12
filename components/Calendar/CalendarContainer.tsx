import React, { useContext } from 'react';
import { CalendarContext } from '../../lib/context';
import MonthlyCalendar from './MonthlyCalendar';
import WeeklyCalendar from './WeeklyCalendar';

export const CalendarContainer = () => {
	const { viewType } = useContext(CalendarContext);

	return viewType == 'Monthly' ? (
		<>
			<MonthlyCalendar />
		</>
	) : (
		<>
			<WeeklyCalendar />
		</>
	);
};
