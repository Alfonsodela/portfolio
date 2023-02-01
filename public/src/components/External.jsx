import { ExternalLayout } from '../styles/layouts/ExternalLayout';
import {
	NavExternalLayout,
	NavExternalAbout
} from '../styles/layouts/ExternalLayout';

const External = () => {
	return (
		<ExternalLayout>
			<NavExternalLayout>
				<NavExternalAbout href='#home'>Inicio </NavExternalAbout>
				<NavExternalAbout href='#about'>Sobre Mi </NavExternalAbout>
				<NavExternalAbout href='#projects'>Portfolio </NavExternalAbout>
				<NavExternalAbout href='#competencies'>Tecnologías </NavExternalAbout>
				<NavExternalAbout href='#contact'>Contacto </NavExternalAbout>
			</NavExternalLayout>
		</ExternalLayout>
	);
};

export default External;
