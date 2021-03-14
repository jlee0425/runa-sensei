import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
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

export const WeeklyColumn = ({ colNum }) => {
	const [startTime, endTime] = [7, 22];

	const timeline = getTimeline(startTime, endTime);
	return (
		<>
			{timeline.map((time) => (
				<GridItem
					key={time}
					borderWidth='1px'
					colSpan={15}
					rowSpan={1}
					colStart={colNum}
					rowStart={0}
				>
					{time}
				</GridItem>
			))}
		</>
	);
};
