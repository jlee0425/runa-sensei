import { Box, Center, Container, Text, Grid, HStack } from '@chakra-ui/react';
import {
	addDays,
	endOfWeek,
	format,
	startOfMonth,
	startOfWeek,
} from 'date-fns';
import { endOfMonth } from 'date-fns/esm';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

interface Props {}

const index = (props: Props) => {
	const { currentTime } = useContext(CalendarContext);
	const startDate = startOfMonth(currentTime);
	const endDate = endOfMonth(currentTime);
	const prevMonthEnd = endOfWeek(startDate);
	const nextMonthStart = startOfWeek(endDate);

	return <Box></Box>;
};

export default index;
