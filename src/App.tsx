import {
	About,
	Experience,
	Footer,
	Header,
	Profile,
	Project,
} from './components';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className="font-roboto font-[300] scroll-smooth max-w-[1200px] mx-auto">
			<Header />
			<Profile />
			<About />
			<Experience />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
