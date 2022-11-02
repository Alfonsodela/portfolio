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
import data from '../data/data';


const Projects = () => {
	return (
		<ProjectsLayout id='projects'>
			<ProjectTitle>Algunos proyectos...</ProjectTitle>
			<ProjectsWrapper>
				{data.map(({ id, img, title, github}) => {
					return (
						<Article key={id}>
							<InnerContainer>
								<Img src={img} />
							</InnerContainer>
							<NameIconContainer>
								<ProjectName>{title}</ProjectName>
								<Button href={github}>Demo</Button>
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
