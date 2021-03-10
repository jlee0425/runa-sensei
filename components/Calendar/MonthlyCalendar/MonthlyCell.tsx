import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CellProps {
	date: Date;
}

const MonthlyCell = ({ date }: CellProps) => {
	return (
		<Box key={date.getTime()}>
			<Text fontSize='lg'>{date.getDate()}</Text>
		</Box>
	);
};

export default MonthlyCell;
