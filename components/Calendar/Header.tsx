import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Center, Container, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import { CalendarContext } from '../../lib/context';
import ViewType from './ViewType';

interface Props {}

const CalendarHeader = (props: Props) => {
	const { currentTime, setCurrentTime } = useContext(CalendarContext);
	const dateFormat = 'MMMM yyyy';

	return (
		<Container flexDirection='row' bg='teal.100'>
			<Center bg='teal'>
				<ChevronLeftIcon
					onClick={() => setCurrentTime(subMonths(currentTime, 1))}
				/>
				<Text>{format(currentTime || Date.now(), dateFormat)}</Text>
				<ChevronRightIcon
					onClick={() => setCurrentTime(addMonths(currentTime, 1))}
				/>
			</Center>
			<ViewType />
		</Container>
	);
};

export default CalendarHeader;
