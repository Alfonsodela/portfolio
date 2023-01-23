import { ExternalLayout } from '../styles/layouts/ExternalLayout';
import {
	NavExternalLayout,
	// NavHomeGuion,
	NavExternalAbout
} from '../styles/layouts/ExternalLayout';

const External = () => {
	return (
		<ExternalLayout>
			<NavExternalLayout>
				<NavExternalAbout href='#about'>About </NavExternalAbout>
				{/* <NavHomeGuion> / </NavHomeGuion> */}
				<NavExternalAbout href='#projects'>Project </NavExternalAbout>
				{/* <NavHomeGuion> / </NavHomeGuion> */}
				<NavExternalAbout href='#competencies'>Competencies </NavExternalAbout>
				<NavExternalAbout href='#contact'>Contact </NavExternalAbout>
			</NavExternalLayout>
		</ExternalLayout>
	);
};

export default External;
