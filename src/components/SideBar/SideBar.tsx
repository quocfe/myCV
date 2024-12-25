import { Bars3Icon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import useViewport from '../../hooks/useViewPort';

const TitleArr = [
	{ title: 'About Me', ref: '#aboutme' },
	{ title: 'Projects', ref: '#projects' },
	{ title: 'Skills', ref: '#skills' },
	{ title: 'Education', ref: '#education' },
	{ title: 'Interests', ref: '#interests' },
];

function SideBar({ hash = '#aboutme' }: { hash: string }) {
	const { width } = useViewport();
	const [active, setActive] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(width < 1024);

	useEffect(() => {
		setIsMobile(width < 1024);
		!isMobile ? setActive(true) : setActive(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div className="bg-[#56cdc7] lg:fixed lg:w-[300px] lg:h-full w-full p-3">
			<div className="flex items-center justify-between lg:justify-center mb-2 lg:mt-[120px]">
				{isMobile ? (
					<h3 className="text-white font-semibold text-[30px]">
						Nguyen Phu Quoc
					</h3>
				) : (
					<div className="h-[150px] w-[150px] border-4 border-white  rounded-full">
						<img
							src="https://res.cloudinary.com/dilajt5zl/image/upload/v1724900859/uploads/srguzidj9raxxmxk6kwe.jpg"
							className=" w-full h-full object-cover rounded-full "
						/>
					</div>
				)}{' '}
				{/* Ẩn nút Button trên PC */}
				{isMobile && (
					<p className="cursor-pointer p-2 text-white " onClick={handleClick}>
						<Bars3Icon
							className={`size-6 ${active ? 'text-white' : 'text-[#ffffff80]'}`}
						/>
					</p>
				)}
			</div>
			<div className="flex justify-between items-center lg:flex-col-reverse ">
				{/* ul với hiệu ứng trượt */}
				<div
					className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
						active ? 'max-h-[500px]' : 'max-h-0'
					}`}
				>
					<ul className="w-full">
						{TitleArr.map((item, index) => (
							<li key={index} className="p-2">
								<a
									className={`text-[20px] text-[#ffffff80] hover:text-white transition-all uppercase font-[400] ${
										hash == item.ref ? 'active' : ''
									} }`}
									href={item.ref}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
