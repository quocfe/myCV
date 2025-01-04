import { useTranslation } from 'react-i18next';

const IconArr = [
	'devicon-github-original ',
	'devicon-sourcetree-original-wordmark',
	'devicon-docker-plain',
	'devicon-amazonwebservices-plain',
	'devicon-vercel-original-wordmark',
];

function Tools() {
	const { t } = useTranslation('skills');
	return (
		<div className="mb-3">
			<h4 className="mb-5 text-[22px] font-bold">{t('skills.tools')}</h4>
			<div className="flex flex-wrap gap-6 mb-5">
				{IconArr.map((icon, index) => (
					<i key={index} className={`${icon} colored text-[50px]`}></i>
				))}
			</div>
		</div>
	);
}

export default Tools;
