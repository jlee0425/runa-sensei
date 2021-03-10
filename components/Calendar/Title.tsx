import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import ViewType from './ViewType';

interface Props {}

const CalendarTitle = (props: Props) => {
	return (
		<Box>
			<Heading>Japanese Lessons with Runa</Heading>
		</Box>
	);
};

export default CalendarTitle;
