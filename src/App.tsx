import { useEffect, useState } from 'react';
import {
	About,
	Awards,
	Education,
	Project,
	SideBar,
	Skills,
} from './components';

function App() {
	const [currentHash, setCurrentHash] = useState(window.location.hash);

	useEffect(() => {
		// Hàm xử lý khi hash thay đổi
		const handleHashChange = () => {
			setCurrentHash(window.location.hash); // Cập nhật hash mới
		};

		if (!window.location.hash) {
			window.location.hash = 'aboutme';
		}

		// Thêm event listener cho hashchange
		window.addEventListener('hashchange', handleHashChange);

		// Dọn dẹp sự kiện khi component bị unmount
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, []);

	return (
		<div className="font-roboto font-[300] scroll-smooth">
			<SideBar hash={currentHash} />
			<div className="lg:ml-[300px]">
				<About />
				{/* <Experience /> */}
				<Project />
				<Skills />
				<Education />
				<Awards />
			</div>
		</div>
	);
}

export default App;
