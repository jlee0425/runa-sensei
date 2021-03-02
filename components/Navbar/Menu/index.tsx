import React from 'react';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';

interface Props {
	isOpen: boolean;
	menuOpen: boolean;
	toggle: () => void;
}

const Menu = ({ isOpen, menuOpen, toggle }: Props) => {
	return (
		<>
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks menuOpen={menuOpen} />
		</>
	);
};

export default Menu;
