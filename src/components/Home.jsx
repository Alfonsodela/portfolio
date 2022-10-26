import {
	HomeLayout,
	HomeTitle,
	NavHome,
	NavHomeGuion,
	NavHomeAbout
} from '../styles/layouts/HomeLayout';
import LogoColor from '../icons/LogoColor';
import { IconContext } from 'react-icons';

const Home = () => {
	return (
		<>
			<HomeLayout id="home">
				Alfonso de la Manzanara
				<HomeTitle>Full Stack Developer</HomeTitle>
				<LogoColor />
				<NavHome >
					<NavHomeAbout href="#about">About </NavHomeAbout>
					<NavHomeGuion> / </NavHomeGuion>
					<NavHomeAbout href="#projects">Project </NavHomeAbout>
					<NavHomeGuion> / </NavHomeGuion>
					<NavHomeAbout href="#contact">Contact </NavHomeAbout>
				</NavHome>
			</HomeLayout>
		</>
	);
};

export default Home;
