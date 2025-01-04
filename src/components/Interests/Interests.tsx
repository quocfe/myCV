import { useTranslation } from 'react-i18next';
import HSection from '../HSection/HSection';

const Interests = () => {
	const { t } = useTranslation('interests');
	const contents = t('interests.content', {
		returnObjects: true,
	}) as string[];
	return (
		<section className=" cv_section">
			<HSection>{t('interests.title')}</HSection>
			<div className="mt-5 text-[18px]">
				{contents.map((item, index) => (
					<p key={index} className="mb-3">
						{item}
					</p>
				))}
			</div>
		</section>
	);
};

export default Interests;
