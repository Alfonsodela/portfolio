import {
	HomeLayout,
	HomeSubTitle,
	HomeTitle
} from '../styles/layouts/HomeLayout';
import { FaGithub, FaLinkedin, FaDribbbleSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import LogoColor from '../icons/LogoColor';

const Home = () => {
	return (
		<>
			<HomeLayout id='home'>
				<HomeTitle>Alfonso de la Manzanara</HomeTitle>
				<HomeSubTitle>Full Stack Developer</HomeSubTitle>
				<LogoColor />
				<IconContext.Provider
					value={{
						style: {
							fontSize: '1.5em',
							color: 'black',
							hover: 'var(--color-pink)'
						}
					}}
				>
					<a
						href='https://github.com/Alfonsodela'
						rel='noreferrer'
						target='_blank'
					>
						<FaGithub />
					</a>
					<a href='https://www.linkedin.com/in/alfonsodelamanzanara/'>
						<FaLinkedin />
					</a>
					<FaDribbbleSquare />
				</IconContext.Provider>
			</HomeLayout>
		</>
	);
};

export default Home;
