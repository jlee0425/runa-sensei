import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

export const WeeklyCell = ({ time }) => {
	return (
		<Flex borderWidth='1px' justifyContent='flex-end'>
			<Text color='grey' fontSize='xs'>
				{time}
			</Text>
		</Flex>
	);
};
