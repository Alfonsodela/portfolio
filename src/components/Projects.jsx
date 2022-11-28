import {
	ProjectsLayout,
	ProjectsWrapper,
	Article,
	InnerContainer,
	Img,
	ProjectName,
	ProjectTitle,
	NameIconContainer
} from '../styles/layouts/ProjectsLayout';
import { Button } from '../styles/Button';
import { FaGithub} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import dataProject from '../data/dataProject';

const Projects = () => {
	return (
		<ProjectsLayout id='projects'>
			<ProjectTitle>Algunos proyectos...</ProjectTitle>
			<ProjectsWrapper>
				{dataProject.map(({ id, img, title, github }) => {
					return (
						<Article key={id}>
							<InnerContainer>
								<Img src={img} />
							</InnerContainer>
							<NameIconContainer>
								<ProjectName>{title}</ProjectName>
								<Button href={github}>
									<IconContext.Provider
										value={{
											style: {
												fontSize: '1.5em',
												color: 'black',
												hover: 'var(--color-pink)'
											}
										}}
									>
										<FaGithub />
									</IconContext.Provider>
								</Button>
							</NameIconContainer>
							{/* <ProjectOverlay>
								<button>Live Demo</button>
							</ProjectOverlay> */}
						</Article>
					);
				})}
			</ProjectsWrapper>
		</ProjectsLayout>
	);
};

export default Projects;
