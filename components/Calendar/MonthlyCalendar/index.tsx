import React from 'react';
import { MonthlyBody } from './MonthlyBody';
import { MonthlyContainer } from './MonthlyContainer';
import { MonthlyHead } from './MonthlyHead';

const index = () => {
	return (
		<MonthlyContainer>
			<MonthlyHead />
			<MonthlyBody />
		</MonthlyContainer>
	);
};

export default index;
