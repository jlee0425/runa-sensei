import { Flex } from '@chakra-ui/react';
import React from 'react';

const NavbarContainer = ({ children, ...props }) => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			w='100%'
			mb={8}
			p={8}
			bg={['aquamarine', 'aquamarine', 'transparent', 'transparent']}
			color={['white', 'white', 'gray.400', 'gray.400']}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default NavbarContainer;
