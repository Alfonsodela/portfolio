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
	font-size: 46px;
  
`;
const Message = () => {
	return (
		<MessageLayout>
			I am a bespoke web developer looking to facilitate the creation of modern
			and aesthetically pleasing websites
		</MessageLayout>
	);
};

export default Message;
