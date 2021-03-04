import { Box, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context';
import LoginManager from '../LoginManager';
import SignoutBtn from '../LoginManager/SignoutBtn';

interface MenuLinksProps {
	menuOpen: boolean;
}

const MenuLinks = ({ menuOpen }: MenuLinksProps) => {
	const user = useContext(UserContext);
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
				{user ? (
					<>
						<Link href={`/${user.username}`}>
							<Image src={user.photoURL} boxSize='35px' borderRadius='full' />
						</Link>
						<SignoutBtn />
					</>
				) : (
					<LoginManager />
				)}
			</Stack>
		</Box>
	);
};

export default MenuLinks;
