import { Grid } from '@chakra-ui/layout';
import React from 'react';

export const WeeklyContainer = ({ children }) => {
	return (
		<Grid
			maxW='4xl'
			w='100%'
			minH='500px'
			templateRows='1fr 10fr'
			bg='whitesmoke'
			borderWidth='0.5px'
			borderColor='lightblue'
			borderRadius='5px'
		>
			{children}
		</Grid>
	);
};
