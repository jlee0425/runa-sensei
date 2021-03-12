import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CellProps {
	date: Date;
}

export const MonthlyCell = ({ date }: CellProps) => {
	return (
		<Box key={date.getTime()} borderWidth={1} p='0 5px'>
			<Text align='right'>{date.getDate()}</Text>
		</Box>
	);
};
