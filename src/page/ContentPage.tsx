import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

interface ContentPageProps {
	sections: {
		id: string;
		label: string;
		component: JSX.Element;
	}[];
	sectionRefs: React.MutableRefObject<HTMLDivElement[]>;
}

function ContentPage({ sections, sectionRefs }: ContentPageProps) {
	const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
	const topRef = useRef<HTMLDivElement>(null);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		window.scrollY > 600 ? setShowGoToTop(true) : setShowGoToTop(false);
	});

	const goToTop = () => {
		topRef.current &&
			topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	return (
		<>
			<div ref={topRef} className="lg:ml-[300px]">
				{sections.map((section, index) => (
					<div
						key={section.id}
						id={section.id}
						ref={(el) => (sectionRefs.current[index] = el!)}
					>
						{section.component}
					</div>
				))}
			</div>
			{showGoToTop && (
				<div
					onClick={goToTop}
					className="fixed bottom-10 right-10 bg-[#4db4af] w-10 h-10 flex items-center justify-center"
				>
					<button>
						<ArrowUpIcon className="size-6 text-white" />
					</button>
				</div>
			)}
		</>
	);
}

export default ContentPage;
