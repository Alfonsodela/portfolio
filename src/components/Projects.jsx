import petLove from '../assets/petLove.jpg';
import usersManager from '../assets/usersManager.jpg';
import portfolio from '../assets/portfolio.jpg';
import noted from '../assets/noted.png';
import arcade from '../assets/Arcade.png';
import shopeame from '../assets/shopeame.png';
import {
	ProjectsLayout,
	ProjectsWrapper,
	Article,
	InnerContainer,
	Img,
	ProjectName,
	ProjectOverlay,
	ProjectTitle
} from '../styles/layouts/ProjectsLayout';

const Projects = () => {
	return (
		<ProjectsLayout id='projects'>
			<ProjectTitle>Algunos proyectos...</ProjectTitle>
			<ProjectsWrapper>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={usersManager} />
					</InnerContainer>
					<ProjectName>User Manager</ProjectName>
					{/* <ProjectOverlay>
						<button>Live Demo</button>
					</ProjectOverlay> */}
				</Article>
				
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={petLove} />
					</InnerContainer>
					<ProjectName>Pet Love</ProjectName>
					{/* <ProjectOverlay>
						<button>Live Demo</button>
					</ProjectOverlay> */}
				</Article>
				
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={portfolio} />
					</InnerContainer>
					<ProjectName>portfolio</ProjectName>
					{/* <div className='overlay'><a href>Pet Love</a></div> */}
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={arcade} />
					</InnerContainer>
					<ProjectName>Arcade</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={noted} />
					</InnerContainer>
					<ProjectName>Noted</ProjectName>
					<div className='overlay'>{/* <a href>Pet Love</a> */}</div>
				</Article>
				<Article className='project1'>
					<InnerContainer className='project-inner-container'>
						<Img src={shopeame} />
					</InnerContainer>
					<ProjectName>shopeame</ProjectName>
					{/* <div className='overlay'><a href>Pet Love</a></div> */}
				</Article>
			</ProjectsWrapper>
		</ProjectsLayout>
		
		
	);
};

export default Projects;
