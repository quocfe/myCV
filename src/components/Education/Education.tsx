import { useTranslation } from 'react-i18next';
import HSection from '../HSection/HSection';

const Education = () => {
	const { t } = useTranslation('education');
	return (
		<section className="cv_section">
			<HSection>{t('education.title')}</HSection>
			<div className="flex-wrap lg:flex w-full items-center mb-4">
				<h3 className="font-bold text-2xl text-[#4db4af] flex-1">
					{t('education.university')} | {t('education.major')}
				</h3>
				<div className="">
					<p className="text-[#55bfba] text-sm font-semibold">
						03/2022 - 09/2024
					</p>
				</div>
			</div>
			<div className="bg-[#d1ecf1] text-[#0c5460] px-4 py-2 text-[18px] rounded-md border border-[#bee5eb]">
				<p>{t('education.description')}</p>
				<p className="font-bold mt-4">GPA: 3.68/4</p>
			</div>
		</section>
	);
};

export default Education;
