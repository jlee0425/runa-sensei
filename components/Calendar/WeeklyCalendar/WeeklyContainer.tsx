import { Grid } from '@chakra-ui/layout';
import React from 'react';

export const WeeklyContainer = ({ children }) => {
	const [GRID_COLUMN, GRID_ROW] = [7, 16];
	return (
		<Grid
			maxW='4xl'
			w='100%'
			minH='500px'
			templateColumns={`repeat(${GRID_COLUMN}, 1fr)`}
			templateRows={`repeat(${GRID_ROW}, 1fr)`}
			templateAreas='days calendar'
			bg='whitesmoke'
			borderWidth='0.5px'
			borderColor='lightblue'
			borderRadius='5px'
		>
			{children}
		</Grid>
	);
};
