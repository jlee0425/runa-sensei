import React, { useContext } from 'react';
import { CalendarContext } from '../../lib/context';
import MonthlyCalendar from './MonthlyCalendar';
import WeeklyCalendar from './WeeklyCalendar';

interface Props {}

const CalendarContainer = (props: Props) => {
	const { viewType } = useContext(CalendarContext);
	console.log('viewType', viewType);
	return viewType == 'Monthly' ? (
		<div>
			<h1>Monthly Calendar</h1>
			<MonthlyCalendar />
		</div>
	) : (
		<div>
			<h1>Weekly Calendar</h1>
			<WeeklyCalendar />
		</div>
	);
};

export default CalendarContainer;
