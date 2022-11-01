import NavScreen from './components/NavScreen';
import External from './components/External';
import NavPanel from './components/NavPanel';
import Home from './components/Home';
import Message from './components/Message';
import Projects from './components/Projects';
import Divider from './components/Divider';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Competencies from './components/Competencies';
import Hybrid from './icons/Hybrid'


const App = () => {
	return (
		<>
			<External />
			<NavPanel />
			<Home />
			<NavScreen />

			<Message />
			<Hybrid/>
			<Projects />
			<Divider />
			<About />
			<Competencies />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
