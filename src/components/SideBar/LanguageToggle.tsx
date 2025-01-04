import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
	const { i18n } = useTranslation();
	const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

	// Hàm chuyển đổi ngôn ngữ
	const toggleLanguage = () => {
		const newLanguage = isEnglish ? 'vi' : 'en';
		i18n.changeLanguage(newLanguage);
		setIsEnglish(!isEnglish);
	};

	return (
		<div
			onClick={toggleLanguage}
			className="relative w-24 h-10 flex items-center bg-[#56cdc7] rounded-full shadow mt-4 cursor-pointer"
		>
			<div
				className={`absolute w-1/2 h-full  bg-white  rounded-full transition-transform duration-300 ${
					isEnglish ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			></div>
			<button
				className={`relative z-10 w-1/2 h-full flex justify-center items-center text-sm font-medium ${
					!isEnglish ? 'text-white' : 'text-[#56cdc7]'
				}`}
			>
				<p>EN</p>
			</button>
			<button
				className={`relative z-10 w-1/2 h-full flex justify-center items-center text-sm font-medium ${
					isEnglish ? 'text-white' : 'text-[#56cdc7]'
				}`}
			>
				<p>VI</p>
			</button>
		</div>
	);
};

export default LanguageToggle;
