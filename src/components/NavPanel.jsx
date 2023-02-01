import { GrMenu } from 'react-icons/gr';
import { NavPanelMenu, BtnNavPanelMenu } from '../styles/layouts/NavPanelMenu';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import {
	MenuItem,
	MenuItemLink,
	MenuItemLinkPink,
	NavScreenLayout
} from '../styles/layouts/NavScreenLayout';

const NavPanel = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<NavPanelMenu>
				<IconContext.Provider value={{ style: { fontSize: '1.5em' } }}>
					<BtnNavPanelMenu onClick={() => setShowMenu(!showMenu)}>
						<GrMenu></GrMenu>
					</BtnNavPanelMenu>
				</IconContext.Provider>
			</NavPanelMenu>
			<NavScreenLayout open={showMenu}>
				<MenuItem>
					<MenuItemLink href='#home' onClick={() => setShowMenu(!showMenu)}>
						Inicio
					</MenuItemLink>
					<MenuItemLink href='#about' onClick={() => setShowMenu(!showMenu)}>
						Sobre Mi
					</MenuItemLink>
					<MenuItemLink href='#projects' onClick={() => setShowMenu(!showMenu)}>
						Portfolio
					</MenuItemLink>
					<MenuItemLink href='#competencies' onClick={() => setShowMenu(!showMenu)}>
						Tecnologías
					</MenuItemLink>
					<MenuItemLink href='#contact' onClick={() => setShowMenu(!showMenu)}>
						Contacto
					</MenuItemLink>
				</MenuItem>
			</NavScreenLayout>
		</>
	);
};

export default NavPanel;
