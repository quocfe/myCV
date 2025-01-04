import {
	CreditCardIcon,
	DevicePhoneMobileIcon,
	MapIcon,
} from '@heroicons/react/24/outline';
import { emailImage, githubImage, linkedinImage } from '../../assets';
import { useTranslation } from 'react-i18next';

function About() {
	const { t } = useTranslation('about');
	return (
		<section className="cv_section">
			<div className="leading-normal text-left mb-6">
				<h3 className="text-6xl font-bold uppercase text-gray-600 mb-4 ">
					Nguyen Phu <span className="text-[#56cdc7]">Quoc</span>
				</h3>
				<div className="flex items-center gap-2 mb-2">
					<CreditCardIcon className="size-6 text-gray-500" />
					<p className="text-gray-500 font-medium	 text-xl">NodeJS Developer</p>
				</div>
				<div className="flex items-center gap-2">
					<MapIcon className="size-6 text-gray-500" />
					<p className="text-gray-500 font-medium	 text-xl">Ho Chi Minh City</p>
				</div>
			</div>
			<div className="bg-[#d1ecf1] text-[#0c5460] px-4 py-2 mb-6 text-[18px] rounded-md border border-[#bee5eb]">
				{t('about')}
			</div>
			{/* <div className="mb-6 text-[18px]">
				<div className="mb-2">
					<p>
						<strong>Back-end:</strong> I have experience working with{' '}
						<strong>
							Node.JS, TypeScript, ExpressJS, NestJS, MongoDB, MySQL
						</strong>
						, and other technologies.
					</p>
				</div>
				<div className="mb-2">
					<p>
						<strong>Front-end: </strong> I have experience working with{' '}
						<strong>ReactJS, Tailwind Hook, Redux</strong>...
					</p>
				</div>
			</div> */}
			<div className="mb-6 lg:text-[17px] text-[16px] italic">
				<div className="flex gap-2 items-center">
					<DevicePhoneMobileIcon className="size-5" />
					<p>0383995412</p>
				</div>
				<div className="flex gap-2 items-center">
					<img src={emailImage} className="w-5 h-5" />
					<p className="underline">phuquocfe@gmail.com</p>
				</div>
				<div className="flex gap-2 items-center">
					<img src={linkedinImage} className="w-5 h-5" />
					<a
						className="underline"
						target="_blank"
						href="https://www.linkedin.com/in/phuquocnguyen/"
					>
						https://www.linkedin.com/in/phuquocnguyen/
					</a>
				</div>
				<div className="flex gap-2 items-center">
					<img src={githubImage} className="w-5 h-5" />
					<a
						className="underline"
						target="_blank"
						href="https://github.com/quocfe"
					>
						https://github.com/quocfe
					</a>
				</div>
			</div>
			{/* <div className="flex flex-wrap items-center justify-center gap-8 mt-6 mb-6">
				<div className=" flex items-center justify-center flex-col text-center gap-1 bg-white h-[160px] w-[280px] p-6 rounded-[32px] border border-[#a3a3a3] ">
					<img
						src="https://tangerine-hummingbird-1479b6.netlify.app/assets/experience.png"
						alt="logo"
						className="object-cover w-8 h-8"
					/>
					<h2 className="font-bold text-[21px]">Experience</h2>
					<p className="text-[#555555] text-[16px] font-normal">
						2+ years <br />
						Frontend Development
					</p>
				</div>
				<div className=" flex items-center justify-center flex-col text-center gap-1 bg-white h-[160px] w-[280px] p-6 rounded-[32px] border border-[#a3a3a3] ">
					<img src={schoolImg} alt="logo" className="object-cover w-10 h-10" />
					<h2 className="font-bold text-[21px]">Education</h2>
					<p className="text-[#555555] text-[16px] font-normal">
						Fpt Polytechnic ( 2022 - 2024)
					</p>
					<p className="text-[#555555] text-[12px] font-light">GPA: 3.7/4</p>
				</div>
				<div className=" flex items-center justify-center flex-col text-center gap-1 bg-white h-[160px] w-[280px] p-6 rounded-[32px] border border-[#a3a3a3] ">
					<img src={dateImg} alt="logo" className="object-cover w-8 h-8" />
					<h2 className="font-bold text-[21px]">Date of birth</h2>
					<p className="text-[#555555] text-[16px] font-normal">05-10-2002</p>
				</div>
			</div> */}
		</section>
	);
}

export default About;
