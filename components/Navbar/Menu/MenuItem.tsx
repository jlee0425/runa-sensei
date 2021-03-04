import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface MenuProps {
	children: string;
	to: string;
}

const MenuItem = ({ children, to, ...rest }: MenuProps) => {
	return (
		<Link href={to}>
			<Button {...rest}>{children}</Button>
		</Link>
	);
};

export default MenuItem;
