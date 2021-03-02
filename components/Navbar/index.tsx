import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import NavbarContainer from './NavbarContainer';

interface Props {}

const Navbar = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavbarContainer {...props}>
			<Logo w='100px' color={['white', 'white', 'grey', 'grey']} />
			<Menu toggle={toggle} isOpen={isOpen} menuOpen={isOpen} />
		</NavbarContainer>
	);
};

export default Navbar;
