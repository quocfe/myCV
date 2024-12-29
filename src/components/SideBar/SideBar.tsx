import {
	ArrowDownOnSquareIcon,
	BarsArrowDownIcon,
	BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import useViewport from '../../hooks/useViewPort';
import ImagePreview from './ImagePreview';

interface SideBarProps {
	currentHash: string;
	sections: { id: string; label: string }[];
	onScroll: (id: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({
	sections,
	onScroll,
	currentHash,
}) => {
	const { width } = useViewport();
	const [activeMobileButton, setActiveMobileButton] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(width < 1024);
	useEffect(() => {
		setIsMobile(width < 1024);
		width > 1024 ? setActiveMobileButton(true) : setActiveMobileButton(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	const handleClick = () => {
		setActiveMobileButton((prev) => !prev);
	};

	const onClickScroll = (id: string) => {
		onScroll(id);
		isMobile && handleClick();
	};

	return (
		<div className="bg-[#56cdc7] lg:fixed lg:w-[300px] lg:h-full w-full p-3">
			<div className="flex items-center justify-end lg:justify-center mb-2 lg:mt-[120px]">
				{!isMobile && (
					<div className="h-[150px] w-[150px] border-4 border-white  rounded-full overflow-hidden cursor-pointer">
						<ImagePreview
							className=" w-full h-full object-cover rounded-full "
							alt="image"
							src="https://res.cloudinary.com/dilajt5zl/image/upload/v1724900859/uploads/srguzidj9raxxmxk6kwe.jpg"
						/>
					</div>
				)}
				{/* Ẩn nút Button trên PC */}
				{isMobile && (
					<p className="cursor-pointer p-2 text-white " onClick={handleClick}>
						{!activeMobileButton ? (
							<BarsArrowDownIcon className={`size-6 text-white`} />
						) : (
							<BarsArrowUpIcon className={`size-6 text-white`} />
						)}
					</p>
				)}
			</div>
			<div className="flex lg:justify-between justify-center items-center lg:flex-col-reverse ">
				{/* ul với hiệu ứng trượt */}
				<div
					className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
						activeMobileButton ? 'max-h-[500px]' : 'max-h-0'
					}`}
				>
					<ul className="w-full text-center">
						{sections.map((section, index) => (
							<li key={index} className="p-2">
								<button
									onClick={() => onClickScroll(section.id)}
									className={`text-[20px] text-[#ffffff80] hover:text-white transition-all uppercase font-[400] ${
										currentHash == section.id ? 'active' : ''
									} }`}
								>
									{section.label}
								</button>
							</li>
						))}
						<li className="p-2 text-[20px] text-[#ffeaa7] font-[600] flex items-center gap-2">
							<a download href="">
								Download PDF
							</a>
							<ArrowDownOnSquareIcon className="size-6 font-bold" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
// update
