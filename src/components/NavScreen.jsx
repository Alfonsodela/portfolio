import { MenuItem, MenuItemLink, MenuItemLinkPink, NavScreenLayout } from "../styles/layouts/NavScreenLayout";
import { useState } from "react";


const NavScreen = () => {

	const [showMenu, setShowMenu] = useState(true)

	return (
		
			<NavScreenLayout open={showMenu}>
				<MenuItem>
					<MenuItemLinkPink>Home</MenuItemLinkPink>
					<MenuItemLink>Projects</MenuItemLink>
					<MenuItemLink>About</MenuItemLink>
					<MenuItemLink>Contact</MenuItemLink>
				</MenuItem>
				<button onClick={() => setShowMenu(!showMenu)}>Menú</button>
			</NavScreenLayout>
		
	);
};

export default NavScreen;
