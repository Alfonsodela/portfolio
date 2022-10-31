import { MessageLayout, MessageWrapperWhite, MessageWrapperBlack } from '../styles/layouts/MessageLayout';

const Message = () => {
	return (
		<MessageLayout>
			<MessageWrapperBlack>Especializado en proyectos a medida,</MessageWrapperBlack>
			<MessageWrapperWhite>
				enfocado en el desarrollo de websites modernas y atractivas.
			</MessageWrapperWhite>
		</MessageLayout>
	);
};

export default Message;
