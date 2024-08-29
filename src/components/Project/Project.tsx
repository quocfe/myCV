import { useState } from 'react';

function Project() {
	const [showDes, setShowDes] = useState<boolean>(true);
	const [showDes1, setShowDes1] = useState<boolean>(true);
	return (
		<section id="project" className="pt-8 mx-8 mb-24 lg:mx-32">
			<div className="leading-normal text-center ">
				<h1 className="text-5xl font-bold ">Projects</h1>
			</div>
			<div className="flex flex-col flex-wrap gap-10 mt-8 md:flex-row">
				<div className="flex items-center justify-center flex-col text-center bg-white flex-1 p-6 rounded-[32px] border border-[#a3a3a3]">
					<h2 className="mt-3 text-[22px] font-bold">
						Social Media Web Application
					</h2>
					<p className="text-[#55555] mb-3">Jun-2024 - Sep-2024</p>
					{showDes ? (
						<div className="w-[90%] h-[90%] text-left">
							<div>
								<h3>
									<strong className="font-semibold">Team Size:</strong> 5
								</h3>
								<p>
									<strong className="font-semibold">Technologies:</strong>{' '}
									ReactJs, Nodejs, Socket.io, MySQL, Typescript
								</p>
								<p>
									<strong className="font-semibold">Description:</strong>{' '}
									Developed a social media platform that enables users to
									interact with each other through posts, friend connections,
									and messaging.
								</p>
								<p>
									<strong className="font-semibold">Role:</strong> Messaging
									Feature
								</p>
								<ul className="ml-4 list-disc">
									<li>Designed the database structure </li>
									<li>
										Develop the backend with NodeJS, create RESTful APIs to
										communicate with the frontend.
									</li>
									<li>Implemented real-time chat using Socket.IO.</li>
									<li>
										Developed core messaging functionalities, including:
										<ul>
											<li>Sending and replying to messages.</li>
											<li>
												Sending attachments such as images, videos, and files.
											</li>
											<li>Recording and sending voice messages.</li>
										</ul>
									</li>
									<li>
										Implemented video calling feature using WebRTC for real-time
										communication
									</li>
								</ul>
								<p>
									<strong className="font-semibold">Link:</strong>
								</p>
								<ul>
									<li>
										<a href="https://github.com/quocfe/FE-DATN" target="_blank">
											Source code frontend
										</a>
									</li>
									<li>
										<a href="https://github.com/quocfe/BE-DATN" target="_blank">
											Source code backend
										</a>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<video
							controls
							src="https://res.cloudinary.com/dilajt5zl/video/upload/v1724910581/mz2i0jyejybv5brsaino.mp4"
							className="w-[90%] h-[90%] rounded-2xl"
						/>
					)}

					<div className="flex flex-wrap items-center justify-center flex-1 gap-2 mt-5">
						<button className="w-32 btn border border-[#353535] py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#353535] hover:text-white text-[13px] flex-shrink-0">
							Github
						</button>
						<button
							onClick={() => setShowDes(!showDes)}
							className="w-32 btn border border-[#353535] py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#353535] hover:text-white text-[13px] flex-shrink-0"
						>
							{!showDes ? 'Description' : 'Demo'}
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center flex-col text-center bg-white flex-1 p-6 rounded-[32px] border border-[#a3a3a3]">
					<h2 className="mt-3 text-[22px] font-bold">Book Website Review</h2>
					<p className="text-[#55555] mb-3">Otc-2023 - Dec-2023</p>
					{showDes1 ? (
						<div className="w-[90%] h-[90%] text-left">
							<div>
								<h3>
									<strong className="font-semibold">Team Size:</strong> 1
								</h3>
								<p>
									<strong className="font-semibold">Technologies:</strong>{' '}
									Node.js, MySQL, JSON Web Token (JWT), React.js, Redux
								</p>
								<p>
									<strong className="font-semibold">Description:</strong>{' '}
									Provided a platform for book readers to view book reviews
									before making a purchase decision.
								</p>
								<p>
									<strong className="font-semibold">Role:</strong> Full Stack
								</p>
								<ul className="ml-4 list-disc">
									<li>Designed the database structure</li>
									<li>
										Developed the backend with Node.js and created RESTful APIs
										to facilitate communication with the frontend.
									</li>
									<li>
										Designed the frontend using React.js and managed the
										application state with Redux.
									</li>
									<li>
										Developed core functionalities, including:
										<ul>
											<li>
												User: Login and register. View books and read reviews.
												Write comments and rate books.
											</li>
											<li>Admin: Manage books and reviews.</li>
										</ul>
									</li>
								</ul>
								<p>
									<strong className="font-semibold">Link:</strong>
								</p>
								<ul>
									<li>
										<a
											href=" https://github.com/quocfe/BookStoreNodeJs/"
											target="_blank"
										>
											Source code
										</a>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<video
							controls
							src="https://res.cloudinary.com/dilajt5zl/video/upload/v1724911504/jmcin5w0wryzgkgpipcm.mp4"
							className="w-[90%] h-[90%] rounded-2xl"
						/>
					)}

					<div className="flex flex-wrap items-center justify-center flex-1 gap-2 mt-5">
						<button className="w-32 btn border border-[#353535] py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#353535] hover:text-white text-[13px] flex-shrink-0">
							Github
						</button>
						<button
							onClick={() => setShowDes1(!showDes1)}
							className="w-32 btn border border-[#353535] py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-[#353535] hover:text-white text-[13px] flex-shrink-0"
						>
							{!showDes1 ? 'Description' : 'Demo'}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;
