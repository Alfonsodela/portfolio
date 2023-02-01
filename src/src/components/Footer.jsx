import LogoBN from '../icons/LogoBN';
import { Copyright, FooterLayout, FooterLink } from '../styles/layouts/FooterLayout';
import { WrappLogoBN } from '../styles/layouts/HomeLayout';

const Footer = () => {
	return (
		<FooterLayout>
			<FooterLink>Home</FooterLink>
			<FooterLink>About</FooterLink>
			<WrappLogoBN>
				<LogoBN />
        <Copyright>Copyright ALM 2022</Copyright>
			</WrappLogoBN>
			<FooterLink>Project</FooterLink>
			<FooterLink>Contact</FooterLink>
		</FooterLayout>
	);
};

export default Footer;
