import {
	HomeLayout,
	HomeSubTitle,
	NavHome,
	NavHomeGuion,
	NavHomeAbout,
	HomeTitle
} from '../styles/layouts/HomeLayout';
import LogoColor from '../icons/LogoColor';
import { desktopUp } from '../styles/breakpoints/breakpoints';


const Home = () => {
	return (
		<>
			<HomeLayout id="home">
				<HomeTitle>Alfonso de la Manzanara</HomeTitle>
				<HomeSubTitle>Full Stack Developer</HomeSubTitle>
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
