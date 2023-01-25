import styled from '@emotion/styled';
import {
	AboutContainer,
	AboutInner,
	AboutLayout,
	Competencies,
	CompetenciesContainer,
	ImgProfile,
	Paragraph,
	Profile,
	TextCompetencies,
	TextCompetenciesB,
	TextCompetenciesC,
	TitleCompetencies,
	TitleTextCompetencies,
	WrapperTech,
	TitleTech
} from '../styles/layouts/AboutLayout';
import { HomeTitle } from '../styles/layouts/AboutLayout';
import foto from '../assets/Foto.jpg';
import logoJS from '../assets/JavaScript-logo.png';
import logoReact from '../assets/React-icon.png';
import logoAngular from '../assets/Angular_logo.png';
import logoTypeScript from '../assets/Typescript_logo.png';
import logoHTML from '../assets/html5-logo.png';
import logoCSS from '../assets/CSS3_logo.png';
import logoSASS from '../assets/Sass_.png';
import logoBootstrap from '../assets/Bootstrap_logo.png';
import logoNodeJS from '../assets/Node.js_logo.png';
import logoPHP from '../assets/PHP-logo.png';
import logoMongoDB from '../assets/MongoDB-logo.jpg';
import logoMySQL from '../assets/MySQL_Logo.png';
import logoGit from '../assets/Git_icon.png';
import logoFigma from '../assets/Figma-logo.png';

const About = () => {
	return (
		<AboutLayout id='about'>
			<AboutContainer>
				<HomeTitle>About Me</HomeTitle>
				<AboutInner>
					<Profile>
						<ImgProfile>
							<img src={foto} />
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
			<Competencies id='competencies'>
				<TitleCompetencies>Tecnologías</TitleCompetencies>
				<CompetenciesContainer>
					<TextCompetenciesB>
						<WrapperTech>
							<img src={logoJS} />
							<TitleTech>JavaScript</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoReact} />
							<TitleTech>React</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoAngular} />
							<TitleTech>AngularJS</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoTypeScript} />
							<TitleTech>TypeScript</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoHTML} />
							<TitleTech>HTML5</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoCSS} />
							<TitleTech>CSS3</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoSASS} />
							<TitleTech>SASS</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoBootstrap} />
							<TitleTech>Bootstrap</TitleTech>
						</WrapperTech>
					</TextCompetenciesB>
					<TextCompetenciesC>
						<WrapperTech>
							<img src={logoNodeJS} />
							<TitleTech>NodeJS</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoMongoDB} />
							<TitleTech>MongoDB</TitleTech>
						</WrapperTech>

						<WrapperTech>
							<img src={logoGit} />
							<TitleTech>Git</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoPHP} />
							<TitleTech>PHP</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoMySQL} />
							<TitleTech>MySQL</TitleTech>
						</WrapperTech>
						<WrapperTech>
							<img src={logoFigma} />
							<TitleTech>Figma</TitleTech>
						</WrapperTech>
					</TextCompetenciesC>
				</CompetenciesContainer>
			</Competencies>
		</AboutLayout>
	);
};

export default About;
