import { GrMenu } from 'react-icons/gr';
import { NavPanelMenu } from '../styles/layouts/NavPanelMenu';
import { IconContext } from 'react-icons';

const NavPanel = () => {
	return (
		<NavPanelMenu>
			<IconContext.Provider value={{ style: { fontSize: '1.5em' } }}>
				<GrMenu></GrMenu>
			</IconContext.Provider>
		</NavPanelMenu>
	);
};

export default NavPanel;
