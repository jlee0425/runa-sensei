import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import { HOURS } from '../../../lib/constants';
import { WeeklyCell } from './WeeklyCell';

const getTimeline = (startTime: number, endTime: number) => {
	const timeline: string[] = [];
	const [noon, am, pm] = [12, 'AM', 'PM'];

	for (let i = startTime; i < endTime; i++) {
		if (i < noon) {
			timeline.push(i + ' ' + am);
		} else if (i == noon) {
			timeline.push(i + ' ' + pm);
		} else {
			timeline.push(i - noon + ' ' + pm);
		}
	}
	return timeline;
};

export const WeeklyColumn = ({ date }: { date: Date }) => {
	const timeline = getTimeline(HOURS.start, HOURS.end);

	return (
		<Grid key={date.toString()}>
			{timeline.map((time) => (
				<WeeklyCell time={time} />
			))}
		</Grid>
	);
};
