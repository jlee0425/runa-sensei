import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CalendarContext } from '../../lib/context';
import { CalendarContainer } from './CalendarComponents/CalendarContainer';
import { CalendarHeader } from './CalendarComponents/Header';
import { CalendarTitle } from './CalendarComponents/Title';
import { ViewType } from './CalendarComponents/ViewType';

// export const getStaticProps: GetStaticProps = async () => {
// 	const result = await loadEvents();
// 	if (!result)
// 		return {
// 			notFound: true,
// 		};
// 	return {
// 		props: {
// 			title: result.summary,
// 			timeZone: result.timeZone,
// 			events: result.items,
// 		},
// 		revalidate: 1,
// 	};
// };

const Calendar = (props) => {
	const [result, setResult] = useState({});
	const [timeZone, setTimeZone] = useState(
		Intl.DateTimeFormat().resolvedOptions().timeZone,
	);
	const [currentTime, setCurrentTime] = useState(new Date());
	const [viewType, setViewType] = useState('Weekly');

	// const getCalendarInfo = async () => {
	// 	setResult(events);
	// };

	console.log('result', result);
	return (
		<CalendarContext.Provider
			value={{
				timeZone,
				currentTime,
				viewType,
				setTimeZone,
				setCurrentTime,
				setViewType,
			}}
		>
			<Flex justify='center' align='center' flexDirection='column'>
				<CalendarTitle />
				<CalendarHeader />
				<ViewType />
				<CalendarContainer />
			</Flex>
		</CalendarContext.Provider>
	);
};

export default Calendar;
function useCalendarEvents() {
	throw new Error('Function not implemented.');
}
