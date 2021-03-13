import React, { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { subMonths, addMonths, format, addWeeks, subWeeks } from 'date-fns';
import { CalendarContext } from '../../../lib/context';

export const CalendarController = () => {
	const { currentTime, setCurrentTime, viewType } = useContext(CalendarContext);
	const monthFormat = 'MMMM yyyy';
	const weekFormat = 'wo MMMM';
	console.log('viewType', viewType);

	return viewType == 'Monthly' ? (
		<>
			<ChevronLeftIcon
				onClick={() => setCurrentTime(subMonths(currentTime, 1))}
			/>
			<Text>{format(currentTime || Date.now(), monthFormat)}</Text>
			<ChevronRightIcon
				onClick={() => setCurrentTime(addMonths(currentTime, 1))}
			/>
		</>
	) : (
		<>
			<ChevronLeftIcon
				onClick={() => setCurrentTime(subWeeks(currentTime, 1))}
			/>
			<Text>{format(currentTime || Date.now(), weekFormat)}</Text>
			<ChevronRightIcon
				onClick={() => setCurrentTime(addWeeks(currentTime, 1))}
			/>
		</>
	);
};
