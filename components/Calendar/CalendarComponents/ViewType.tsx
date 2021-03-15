import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CalendarContext } from '../../../lib/context';

const RadioCard = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);
	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<input {...input} />
			<Box
				{...checkbox}
				cursor='pointer'
				borderWidth='1px'
				borderRadius='md'
				boxShadow='md'
				_checked={{
					bg: 'teal.600',
					color: 'white',
					borderColor: 'teal.600',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={3}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export const ViewType = () => {
	const { setViewType } = useContext(CalendarContext);
	const viewOptions = ['Weekly', 'Monthly'];
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'viewType',
		defaultValue: 'Weekly',
		onChange: (val: string) => setViewType(val),
	});

	const group = getRootProps();
	return (
		<HStack {...group}>
			{viewOptions.map((value) => {
				const radio = getRadioProps({ value });
				return (
					<RadioCard key={value} {...radio}>
						{value}
					</RadioCard>
				);
			})}
		</HStack>
	);
};
