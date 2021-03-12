import { Box, GridItem, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

interface CellProps {
	date: Date;
}

export const MonthlyCell = ({ date }: CellProps) => {
	const { currentTime } = useContext(CalendarContext);
	const isThisMonth = (date: Date) =>
		currentTime.getMonth() === date.getMonth();
	const isToday = (date: Date) => currentTime.getDate() === date.getDate();

	return (
		<GridItem key={date.getTime()} borderWidth={1} p='0 5px'>
			<Text
				align='right'
				color={`${
					isThisMonth(date) ? (isToday(date) ? 'red' : 'black') : 'grey'
				}`}
			>
				{date.getDate()}
			</Text>
		</GridItem>
	);
};
