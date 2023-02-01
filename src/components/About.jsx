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
import { dataCompetencies, dataCompetenciesB } from '../data/dataCompetencies';

const About = () => {
	const dataCompetenciesRendered = dataCompetencies.map(
		({ id, img, title }) => {
			return (
				<WrapperTech key={id}>
					<img src={img} />
					<TitleTech>{title}</TitleTech>
				</WrapperTech>
			);
		}
	);

	const dataCompetenciesRenderedB = dataCompetenciesB.map(
		({ id, img, title }) => {
			return (
				<WrapperTech key={id}>
					<img src={img} />
					<TitleTech>{title}</TitleTech>
				</WrapperTech>
			);
		}
	);

	return (
		<AboutLayout id='about'>
			<AboutContainer>
				<HomeTitle>Sobre mí</HomeTitle>
				<AboutInner>
					<Profile>
						<ImgProfile>
							<img src={foto} />
						</ImgProfile>
						<p>UBICACION: Sevilla, España</p>
					</Profile>
					<Paragraph>
						Hola, mi nombre es Alfonso. El desarrollo web se ha convertido en
						una de mis pasiones, he realizado el bootcamp full stack part time
						de Upgrade realizando proyectos individuales y en equipo con una
						fuerte curiosidad y motivación. He dedicado mi tiempo a adquirir
						competencia en todas las complejidades del desarrollo web para
						mejorar como desarrollador creando sitios web limpios y funcionales.
					</Paragraph>
				</AboutInner>
			</AboutContainer>
			<Competencies id='competencies'>
				<TitleCompetencies>Tecnologías</TitleCompetencies>
				<CompetenciesContainer>
					<TextCompetenciesB>{dataCompetenciesRendered}</TextCompetenciesB>
					<TextCompetenciesC>{dataCompetenciesRenderedB}</TextCompetenciesC>
				</CompetenciesContainer>
			</Competencies>
		</AboutLayout>
	);
};

export default About;
