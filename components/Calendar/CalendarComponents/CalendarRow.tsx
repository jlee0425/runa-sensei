import React from 'react';
import { MonthlyCell } from '../MonthlyCalendar/MonthlyCell';

interface Props {
	dates: Date[];
}

export const CalendarRow = ({ dates }: Props) => {
	return (
		<>
			{dates.map((date) => (
				<MonthlyCell date={date} />
			))}
		</>
	);
};
