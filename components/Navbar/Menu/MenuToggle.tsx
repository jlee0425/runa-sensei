import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

interface ToggleProps {
	toggle: () => void;
	isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: ToggleProps) => {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <HamburgerIcon />}
		</Box>
	);
};

export default MenuToggle;
