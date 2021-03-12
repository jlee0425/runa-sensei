import { Box, Text } from '@chakra-ui/react';

import React from 'react';

interface MonthlyEventProps {
	summary: string;
	start: Date;
	end: Date;
	visibility: boolean;
	id: string;
}

export const MonthlyEvent = ({
	summary,
	start,
	end,
	visibility,
	id,
}: MonthlyEventProps) => {
	return (
		<Box key={id}>
			{visibility ? (
				<>
					<Text fontSize='md'>{summary}</Text>
					<Text>{start}</Text>
					<Text>{end}</Text>
				</>
			) : summary ? (
				<Text>Busy</Text>
			) : (
				<Text>Free</Text>
			)}
		</Box>
	);
};
