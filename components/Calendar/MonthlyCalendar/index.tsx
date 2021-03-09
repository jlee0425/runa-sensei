import { Box, Grid } from '@chakra-ui/react';
import { addDays, format, startOfWeek } from 'date-fns';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

interface Props {}

const index = (props: Props) => {
	const dateFormat = 'dddd';
	const days = [];
	const { currentTime } = useContext(CalendarContext);

	const startDate = startOfWeek(currentTime);
	for (let i = 0; i < 7; i++) {
		days.push(format(addDays(startDate, i), dateFormat));
	}
	return (
		<Grid h='200px' bg='tomato'>
			{days.map((val, i) => {
				<Box key={i}>{val}</Box>;
			})}
		</Grid>
	);
};

export default index;
