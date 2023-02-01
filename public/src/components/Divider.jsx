import HybridBottom from '../icons/HybridBottom';
import Keyboard from '../assets/Keyboard';
import {
	DividerLayout,
	KeyboardContainer,
	HybridBottomContainer
} from '../styles/layouts/DividerLayout';

const Divider = () => {
	return (
		<>
			<DividerLayout>
				<KeyboardContainer>
					<Keyboard />
				</KeyboardContainer>
				<HybridBottomContainer>
					<HybridBottom />
				</HybridBottomContainer>
			</DividerLayout>
		</>
	);
};

export default Divider;
