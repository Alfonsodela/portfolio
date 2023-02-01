import {
	HomeLayout,
	HomeSubTitle,
	HomeTitle,
	WrappIcon
} from '../styles/layouts/HomeLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import LogoColor from '../icons/LogoColor';

const Home = () => {
	return (
		<>
			<HomeLayout id='home'>
				<HomeTitle>Alfonso de la Manzanara</HomeTitle>
				<HomeSubTitle>Full Stack Developer</HomeSubTitle>
				<LogoColor />
				<WrappIcon>
					<IconContext.Provider
						value={{
							style: {
								fontSize: '1.5em',
								color: 'white',
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
					</IconContext.Provider>
				</WrappIcon>
			</HomeLayout>
		</>
	);
};

export default Home;
