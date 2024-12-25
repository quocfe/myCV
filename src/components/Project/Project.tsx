import { BookmarkIcon } from '@heroicons/react/24/solid';
import HSection from '../HSection/HSection';
import HeaderProject from './components/HeaderProject';

function Project() {
	// const [showDes, setShowDes] = useState<boolean>(true);
	// const [showDes1, setShowDes1] = useState<boolean>(true);
	return (
		<section id="projects" className="p-12 border-b">
			<HSection>Projects</HSection>
			<div className="mb-6">
				<HeaderProject
					title="Powerkeentrend"
					positon="Back-end developer"
					time="10/2024 - 12/2024"
					className="mb-3"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject
						title="Powerkeentrend (Team size 2): freelancer"
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Overview: </strong> E-commerce website
						selling hair wax
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Technologies: </strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Back-end: NestJS, Redis, BullMq, Sequelize ORM.</li>
						<li>Database: MySQL</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Responsibility:</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Build and develop API with NestJs..</li>
						<li>
							Implemented database schema using Prisma ORM and MySQL, optimizing
							data relationships for product categories, orders, and users.
						</li>
						<li>
							Developed secure user authentication and authorization workflows
							with JWT, supporting role-based access control (super-admin,
							management, customer).
						</li>
						<li>Integrated Cloudinary for product image storage</li>
						<li>Designed and implemented a background email queue</li>
						<li>
							Build a cms system to manage products, product categories, orders,
							and users
						</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Link:</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>github...</li>
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
						title="DevBook (Team size 5): graduation project"
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Overview: </strong> Develop a social
						media platform that allows users to interact through posts, connect
						with friends, and send messages.
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Technologies: </strong>
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
						<strong className="font-bold">Responsibility:</strong> I'm
						responsible for developing message feature with ReactJS, Nodejs, and
						other technologies.
					</p>
					<ul className="list-disc ml-10">
						<li>Developed messaging API and designed the database</li>
						<li>
							Implemented real-time messaging with Socket.IO (messages,
							attachments, voice messages, video calls)
						</li>
						<li>
							Integrated user status (online/offline) and media handling
							(images, videos)
						</li>
						<li>Built video call functionality using WebRTC</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Link:</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>github...</li>
					</ul>
				</div>
			</div>
			<div className="mb-6">
				<HeaderProject
					title="Book Review Website"
					positon="Full-stack developer"
					time="10/2023 - 12/2023"
					className="mb-3"
				/>
				<div className="flex items-start gap-1 ">
					<BookmarkIcon className="size-5 text-yellow-400" />
					<HeaderProject
						title="Social Media Web Application (Team size 1): personal project"
						sub={true}
					/>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Overview: </strong> Provide a platform
						for book readers to view reviews before deciding to buy.
					</p>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Technologies: </strong>
					</p>
					<ul className="list-disc ml-10">
						<li>Back-end: Express.js, Mysql2</li>
						<li>Database: Mysql</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Responsibility:</strong> I'm
						responsible for developing full websites with ReactJS, Nodejs, and
						other
					</p>
					<ul className="list-disc ml-10">
						<li>
							Develop the backend using Node.js and create RESTful APIs to
							communicate with the frontend.
						</li>
						<li>
							Design the frontend interface with React.js and manage application
							state using Redux.
						</li>
						<li>
							Developed secure user authentication and authorization workflows
							with JWT
						</li>
						<li>
							Build a cms system to manage products, product categories,
							comments, and users
						</li>
					</ul>
				</div>
				<div>
					<p className="indent-6">
						<strong className="font-bold">Link:</strong>
					</p>
					<ul className="list-disc ml-10">
						<li>github...</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Project;

// ok
