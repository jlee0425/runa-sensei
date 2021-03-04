import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Logo = (props) => {
	return (
		<Box {...props}>
			<Link href='/'>
				<Button>Runa Sensei</Button>
			</Link>
		</Box>
	);
};

export default Logo;
