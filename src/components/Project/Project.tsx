import { BookmarkIcon } from '@heroicons/react/24/solid';
import HSection from '../HSection/HSection';
import HeaderProject from './components/HeaderProject';
import { useTranslation } from 'react-i18next';

function Project() {
	const { t } = useTranslation('projects');
	const responsibilities = t('powerkeentrend.responsibility.description', {
		returnObjects: true,
	}) as string[];
	const responsibilitiesDevbook = t('devbook.responsibility.description', {
		returnObjects: true,
	}) as string[];
	const responsibilitiesBookReview = t(
		'bookreviewwebsite.responsibility.description',
		{
			returnObjects: true,
		}
	) as string[];
	const responsibilitiesChatApp = t('chatapp.responsibility.description', {
		returnObjects: true,
	}) as string[];

	return (
		<section className="cv_section">
			<HSection> {t('heading')}</HSection>
			<div className="mb-6">
				<HeaderProject
					title="Powerkeentrend"
					positon="Back-end developer"
					time="10/2024 - 12/2024"
					className="mb-3"
					href="https://powerkeentrend.com/"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject title="Powerkeentrend: freelancer" sub={true} />
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('powerkeentrend.overview.title')}:
						</strong>{' '}
						{t('powerkeentrend.overview.description')}
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('powerkeentrend.heading.team_size')}:
						</strong>{' '}
						2
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('powerkeentrend.technologies.title')}:
						</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Back-end: NestJS, Redis, BullMq, Sequelize ORM.</li>
						<li>Database: MySQL</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('powerkeentrend.responsibility.title')}:
						</strong>
					</p>
					<ul className="list-disc ml-10">
						{responsibilities.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Demo:</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>
							<strong>Website: </strong>
							<a href="https://powerkeentrend.com/" target="_blank">
								https://powerkeentrend.com/
							</a>
						</li>
						<li>
							<strong>Api: </strong>
							<a href="https://powerkeentrend.com/api-docs" target="_blank">
								https://powerkeentrend.com/api-docs
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-6">
				<HeaderProject
					title="DevBook"
					positon="Full-stack developer "
					time="05/2024 - 09/2024"
					className="mb-3"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject
						title={`DevBook: ${t('devbook.heading.position')}`}
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('devbook.overview.title')}:
						</strong>{' '}
						{t('devbook.overview.description')}
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('devbook.heading.team_size')}:
						</strong>{' '}
						5
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('devbook.technologies.title')}
						</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Back-end: Node.js, ExpressJS, Sequelize ORM.</li>
						<li>Front-end: React.js, Zustand ...</li>
						<li>Database: MySQL</li>
						<li>Real-time Features: Socket.IO, WebRTC</li>
						<li>Others: JWT, Cloudinary (media storage).</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('devbook.responsibility.title')}:{' '}
						</strong>
						{t('devbook.responsibility.subtitle')}
					</p>
					<ul className="list-disc ml-10">
						{responsibilitiesDevbook.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Github: </strong>
					</p>
					<ul className="list-disc ml-10">
						<li>
							<strong>FE: </strong>
							<a target="_blank" href="https://github.com/quocfe/FE-DATN">
								https://github.com/quocfe/FE-DATN
							</a>
						</li>
						<li>
							<strong>BE: </strong>
							<a target="_blank" href="https://github.com/quocfe/BE-DATN">
								https://github.com/quocfe/BE-DATN
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-6">
				<HeaderProject
					title="Book Review Website"
					positon="Full-stack developer"
					time="10/2023 - 12/2023"
					className="mb-3"
					href="https://bookstore-frontend-wheat.vercel.app/"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject
						title={`Book Review Website: ${t(
							'bookreviewwebsite.heading.position'
						)}`}
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('bookreviewwebsite.overview.title')}:{' '}
						</strong>
						{t('bookreviewwebsite.overview.description')}
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('bookreviewwebsite.heading.team_size')}:
						</strong>{' '}
						1
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('bookreviewwebsite.technologies.title')}:{' '}
						</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Back-end: Express.js, Mysql2</li>
						<li>Database: Mysql</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('bookreviewwebsite.responsibility.title')}:{' '}
						</strong>
					</p>
					<ul className="list-disc ml-10">
						{responsibilitiesBookReview.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Demo</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>
							<strong>Website: </strong>{' '}
							<a
								href="https://bookstore-frontend-wheat.vercel.app/"
								target="_blank"
							>
								https://bookstore-frontend-wheat.vercel.app/
							</a>
						</li>
						<li>
							<strong>API: </strong>{' '}
							<a
								href="https://bookstore-backend-5eas.onrender.com/api-docs/"
								target="_blank"
							>
								https://bookstore-backend-5eas.onrender.com/api-docs/
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-6">
				<HeaderProject
					title="Chat App"
					positon="Full-stack developer"
					time="05/2023 - 06/2023"
					className="mb-3"
					href="https://chat-app-fe-green.vercel.app/"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject
						title={`Chat App: ${t('chatapp.heading.position')}`}
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('chatapp.overview.title')}:{' '}
						</strong>
						{t('chatapp.overview.description')}
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('chatapp.heading.team_size')}:
						</strong>{' '}
						1
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{' '}
							{t('chatapp.technologies.title')}:{' '}
						</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Front-end: React.js, Redux, Axios, Socket.IO ...</li>
						<li>Back-end: Express.js, Mongoose</li>
						<li>Database: MongoDB</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">
							{t('chatapp.responsibility.title')}:{' '}
						</strong>
					</p>
					<ul className="list-disc ml-10">
						{responsibilitiesChatApp.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Demo</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>
							<strong>Website: </strong>{' '}
							<a href="https://chat-app-fe-green.vercel.app/" target="_blank">
								https://chat-app-fe-green.vercel.app/
							</a>
						</li>
						<li>
							<strong>API: </strong>{' '}
							<a
								href="https://chat-app-be-17fu.onrender.com/api-docs"
								target="_blank"
							>
								https://chat-app-be-17fu.onrender.com/api-docs
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Project;

// ok
