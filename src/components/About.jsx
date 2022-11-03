import styled from '@emotion/styled';
import { AboutContainer, AboutInner, AboutLayout, Competencies } from '../styles/layouts/AboutLayout';
import { HomeTitle } from '../styles/layouts/AboutLayout';
import foto from '../assets/Foto.jpg'

const About = () => {
	return (
		<AboutLayout id='about'>
			<AboutContainer>
				<HomeTitle>About Me</HomeTitle>
				<AboutInner>
					<div className='profile'>
            <img src={foto}/>
						<p>Foto</p>
					</div>
					<div className='description'>
						<p>Descripción</p>
					</div>
				</AboutInner>
			</AboutContainer>
			<Competencies>
				<h3>Competencies</h3>
				<h5></h5>
				<p></p>
				<h5></h5>
				<p></p>
			</Competencies>
		</AboutLayout>
	);
};

export default About;
