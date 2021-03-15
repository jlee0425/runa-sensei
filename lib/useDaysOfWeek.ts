import { startOfWeek, addDays } from 'date-fns';
import { useContext } from 'react';
import { CalendarContext } from './context';

export const useDaysOfWeek = () => {
	const dates: Date[] = [];
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfWeek(currentTime);

	for (let i = 0; i < 7; i++) {
		dates.push(addDays(startDate, i));
	}
	return dates;
};
