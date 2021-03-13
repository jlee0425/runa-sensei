import React from 'react';
import { WeeklyBody } from './WeeklyBody';
import { WeeklyContainer } from './WeeklyContainer';
import { WeeklyHead } from './WeeklyHead';

const index = () => {
	return (
		<WeeklyContainer>
			<WeeklyHead />
			<WeeklyBody />
		</WeeklyContainer>
	);
};

export default index;
