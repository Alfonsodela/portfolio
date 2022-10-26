import styled from '@emotion/styled';

const MessageLayout = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;

	color: var(--color-white);
	background-color: var(--color-pink);
	font-family: Gilroy-Extrabold;
	font-size: 52px;
`;

const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 55%;
	/* line-height: 1rem; */
`;



const Message = () => {
	return (
		<MessageLayout>
			<MessageWrapper>
				Especializado en proyectos a medida, enfocado en el desarrollo de websites modernas y atractivas.
			</MessageWrapper>
		</MessageLayout>
	);
};

export default Message;
