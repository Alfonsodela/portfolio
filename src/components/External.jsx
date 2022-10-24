import { ExternalLayout } from '../styles/layouts/ExternalLayout';
import { FaGithub, FaLinkedin, FaDribbbleSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const External = () => {
	return (
		<ExternalLayout>
			<IconContext.Provider value={{ style: { fontSize: '1.5em' } }}>
				<a href='https://github.com/Alfonsodela' rel='noreferrer' target="_blank" ><FaGithub/></a>
				<a href='https://www.linkedin.com/in/alfonsodelamanzanara/'><FaLinkedin /></a>
				<FaDribbbleSquare />
			</IconContext.Provider>
		</ExternalLayout>
	);
};

export default External;
