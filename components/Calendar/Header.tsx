import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Center,
	Container,
	Grid,
	GridItem,
	HStack,
	Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { format, subMonths, addMonths, addDays, startOfWeek } from 'date-fns';
import { CalendarContext } from '../../lib/context';
import ViewType from './ViewType';

interface Props {}

const Days = () => {
	const dateFormat = 'iiii';
	const days: string[] = [];
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfWeek(currentTime);

	for (let i = 0; i < 7; i++) {
		days.push(format(addDays(startDate, i), dateFormat));
	}
	console.log('days', days);

	return (
		<HStack h='10vh'>
			{days.map((day) => {
				<Text fontSize='md'>{day}</Text>;
			})}
		</HStack>
	);
};

const CalendarHeader = (props: Props) => {
	const { currentTime, setCurrentTime } = useContext(CalendarContext);
	const dateFormat = 'MMMM yyyy';

	return (
		<Container flexDirection='column' bg='teal.100'>
			<Center bg='teal'>
				<ChevronLeftIcon
					onClick={() => setCurrentTime(subMonths(currentTime, 1))}
				/>
				<Text>{format(currentTime || Date.now(), dateFormat)}</Text>
				<ChevronRightIcon
					onClick={() => setCurrentTime(addMonths(currentTime, 1))}
				/>
			</Center>
			<Days />
		</Container>
	);
};

export default CalendarHeader;
