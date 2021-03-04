import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import LoginManager from '../LoginManager';
import MenuItem from './MenuItem';

interface MenuLinksProps {
	menuOpen: boolean;
}

const MenuLinks = ({ menuOpen }: MenuLinksProps) => {
	return (
		<Box
			display={{ base: menuOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={8}
				align='center'
				justify={['center', 'space-between', 'flex-end', 'flex-end']}
				direction={['column', 'row', 'row', 'row']}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to='/'>Home</MenuItem>
				<MenuItem to='user'>My Page</MenuItem>
				<LoginManager />
			</Stack>
		</Box>
	);
};

export default MenuLinks;
