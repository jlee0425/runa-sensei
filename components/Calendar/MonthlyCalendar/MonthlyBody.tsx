import { addDays, startOfMonth, subDays } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { CalendarRow } from './CalendarRow';

const getFullMonth = (startDate: Date) => {
	const [CAL_COLUMN, CAL_ROW] = [7, 5];
	const dates: Date[][] = [];

	let today = subDays(startDate, startDate.getDay());

	for (let i = 0; i < CAL_COLUMN; i++) {
		dates[i] = [];
		for (let j = 0; j < CAL_ROW; j++) {
			dates[i][j] = today;
			today = addDays(today, 1);
		}
	}

	return dates;
};

export const MonthlyBody = () => {
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfMonth(currentTime);
	const dates: Date[][] = getFullMonth(startDate);

	return (
		<>
			{dates.map((week, i) => (
				<CalendarRow dates={week} key={i} />
			))}
		</>
	);
};
