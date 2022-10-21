import styled from '@emotion/styled';

export const HomeLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;

	color: var(--color-white);
	background-color: var(--color-black);
	white-space: nowrap;
	font-family: Gilroy-Extrabold;
	font-size: 54px;
`;

export const HomeTitle = styled.span`
	color: #968F91;
	font-family: Poppins, sans-serif;
	font-weight: 400;
	font-size: 1.25rem;
	white-space: nowrap;

	margin-top: 1rem;
`;

const Home = () => {
	return (
		<>
			<HomeLayout>
				Alfonso de la Manzanara
				<HomeTitle>Full Stack Developer</HomeTitle>
			</HomeLayout>
		</>
	);
};

export default Home;
