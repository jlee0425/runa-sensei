import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';
import { CalendarRow } from '../CalendarComponents/CalendarRow';
import { WeeklyColumn } from './WeeklyColumn';

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

export const WeeklyBody = () => {
	const [startTime, endTime] = [7, 22];
	const timeline = getTimeline(startTime, endTime);

	return (
		<>
			<WeeklyColumn colNum={1} />
		</>
	);
};
