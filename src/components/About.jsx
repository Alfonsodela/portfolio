import styled from '@emotion/styled';
import {
	AboutContainer,
	AboutInner,
	AboutLayout,
	Competencies,
	ImgProfile,
	Paragraph,
	Profile
} from '../styles/layouts/AboutLayout';
import { HomeTitle } from '../styles/layouts/AboutLayout';
import foto from '../assets/Foto.jpg';

const About = () => {
	return (
		<AboutLayout id='about'>
			<AboutContainer>
				<HomeTitle>About Me</HomeTitle>
				<AboutInner>
					<Profile>
						<ImgProfile >
							<img src={foto}/>
						</ImgProfile>
						<p>UBICACION: Sevilla, España</p>
					</Profile>
					<Paragraph>
						Hola, mi nombre es Will y actualmente soy un estudiante de Hamilton
						College que busca obtener una licenciatura. en Ciencias de la
						Computación. En los últimos 10 años, la codificación se ha
						convertido en una de mis pasiones, específicamente en el ámbito del
						desarrollo web. He dedicado mi tiempo a adquirir competencia en
						todas las complejidades del desarrollo web para mejorar como
						desarrollador y solucionador de problemas. Soy capaz de crear sitios
						web limpios y funcionales, así como marcas profesionales y diseño
						gráfico. Soy competente en mis habilidades de frontend, backend y
						diseño hasta el punto de poder entregar productos con confianza a
						mis clientes sabiendo que son de alta calidad. Disfruto ayudar a las
						marcas a establecer su presencia digital y desarrollar experiencias
						de usuario agradables.
					</Paragraph>
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
