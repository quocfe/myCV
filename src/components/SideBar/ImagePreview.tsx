import React, { useState } from 'react';

const ImagePreview: React.FC<{
	src: string;
	alt: string;
	className: string;
}> = ({ src, alt, className }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{/* Ảnh nhỏ */}
			<img
				src={src}
				alt={alt}
				onClick={() => setIsOpen(true)}
				className={className}
			/>

			{/* Modal khi mở ảnh */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={() => setIsOpen(false)} // Đóng modal khi click bên ngoài
				>
					<img
						src={src}
						alt={alt}
						className="h-[400px] w-[400px] rounded-full object-cover shadow-lg object-top"
					/>
				</div>
			)}
		</div>
	);
};

export default ImagePreview;
