import {
	MessageLayout,
	MessageWrapperWhite,
	MessageWrapperBlack
} from '../styles/layouts/MessageLayout';

const Message = () => {
	return (
		<MessageLayout>
			{/* <MessageWrapperBlack></MessageWrapperBlack> */}
			<MessageWrapperWhite>
				Especializado en proyectos a medida, enfocado en el desarrollo de
				websites modernas y atractivas.
			</MessageWrapperWhite>
		</MessageLayout>
	);
};

export default Message;
