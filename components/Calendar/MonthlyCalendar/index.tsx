import { addDays, startOfMonth, subDays } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { CalendarRow } from './CalendarRow';

export const [NUM_COLUMN, NUM_ROW] = [7, 5];

const getFullMonth = (startDate: Date) => {
	const dates: Date[][] = [];

	let today = subDays(startDate, startDate.getDay());

	for (let i = 0; i < NUM_COLUMN; i++) {
		dates[i] = [];
		for (let j = 0; j < NUM_ROW; j++) {
			dates[i][j] = today;
			today = addDays(today, 1);
		}
	}

	return dates;
};

const index = () => {
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

export default index;
