import { useTranslation } from 'react-i18next';

const IconArr = [
	'devicon-javascript-plain',
	'devicon-typescript-plain',
	'devicon-nodejs-plain-wordmark',
	'devicon-express-original-wordmark',
	'devicon-nestjs-original',
	'devicon-mongodb-plain',
	'devicon-mysql-plain-wordmark',
	'devicon-react-original-wordmark',
	'devicon-tailwindcss-original',
	'devicon-bootstrap-plain',
];

function Languages() {
	const { t } = useTranslation('skills');
	return (
		<div className="mb-3">
			<h4 className="mb-5 text-[22px] font-bold">{t('skills.programming')}</h4>
			<div className=" flex flex-wrap gap-6 mb-5 relative">
				{IconArr.map((icon, index) => (
					<i key={index} className={`${icon} colored text-[50px]`}></i>
				))}
			</div>
		</div>
	);
}

export default Languages;
