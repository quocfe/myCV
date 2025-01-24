import { useEffect, useRef, useState } from 'react';
import {
	About,
	Project,
	SideBar,
	Skills,
	Education,
	Interests,
} from './components';
import ContentPage from './page/ContentPage';
// import Education from './components/Education/Education';

const sections = [
	{ id: 'about', label: 'About', component: <About /> },
	{ id: 'projects', label: 'Projects', component: <Project /> },
	{ id: 'skills', label: 'Skills', component: <Skills /> },
	{ id: 'education', label: 'Education', component: <Education /> },
	{ id: 'interests', label: 'Interests', component: <Interests /> },
];
function App() {
	const [currentHash, setCurrentHash] = useState<string>(window.location.hash);
	const sectionRefs = useRef<HTMLDivElement[]>([]); // Lưu trữ các tham chiếu đến các section

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Khi section xuất hiện trên màn hình, cập nhật currentHash
						const id = entry.target.getAttribute('id');
						if (id) setCurrentHash(id);
					}
				});
			},
			{
				root: null, // Quan sát trong viewport
				threshold: 0.2,
			}
		);

		// Gắn observer vào các section
		sectionRefs.current.forEach((section) => {
			if (section) observer.observe(section);
		});

		// Dọn dẹp observer khi component bị unmount
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			sectionRefs.current.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	// eslint-disable-next-line react-hooks/exhaustive-deps

	const handleScroll = (id: string) => {
		const targetSection = sectionRefs.current.find(
			(section) => section?.id === id
		);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className="font-roboto font-[300] scroll-smooth">
			<SideBar
				currentHash={currentHash}
				sections={sections}
				onScroll={handleScroll}
			/>
			<ContentPage sections={sections} sectionRefs={sectionRefs} />
		</div>
	);
}

export default App;
