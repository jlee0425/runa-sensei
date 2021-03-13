import { Grid } from '@chakra-ui/react';
import React from 'react';

export const MonthlyContainer = ({ children }) => {
	const [GRID_COLUMN, GRID_ROW] = [7, 6];

	return (
		<Grid
			maxW='4xl'
			w='100%'
			minH='500px'
			templateColumns={`repeat(${GRID_COLUMN}, 1fr)`}
			templateRows={`repeat(${GRID_ROW}, 1fr)`}
			bg='whitesmoke'
			borderWidth='0.5px'
			borderColor='lightblue'
			borderRadius='5px'
		>
			{children}
		</Grid>
	);
};
