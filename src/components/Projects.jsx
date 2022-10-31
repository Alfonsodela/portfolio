import petLove from '../assets/petLove.jpg';
import {
	ProjectsLayout,
	ProjectsWrapper,
	Article,
	InnerContainer,
	Img,
	ProjectName,
	ProjectOverlay
} from '../styles/layouts/ProjectsLayout';

const Projects = () => {
	return (
		<ProjectsLayout id='projects'>
			<h1>Proyectos</h1>
			<ProjectsWrapper>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<ProjectOverlay>
						<button>Live Demo</button>
					</ProjectOverlay>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
			</ProjectsWrapper>
		</ProjectsLayout>
	);
};

export default Projects;
