const skillsFe = [
	'HTML - CSS - JS',
	'ReactJS',
	'Tailwind-CSS',
	'Typescript',
	'MongoDB',
	'MySql',
	' NodeJS',
];

function Experience() {
	return (
		<section id="skill" className="pt-8 mx-8 mb-10 lg:mx-32">
			<div className="leading-normal text-center ">
				<h1 className="text-5xl font-bold ">Skills </h1>
			</div>
			<div className="mt-8 mb-6 md:w-[600px]  md:mx-auto flex items-center justify-center">
				<div className=" flex items-center w-full h-full justify-start flex-col text-start  bg-white p-4 rounded-[32px] border border-[#a3a3a3] ">
					<div className="flex flex-row flex-wrap items-start justify-around gap-2">
						{skillsFe.map((skill, i) => (
							<div
								key={i}
								className="flex items-start justify-center gap-2 mt-4"
							>
								<img
									src="https://tangerine-hummingbird-1479b6.netlify.app/assets/checkmark.png"
									alt="logo"
									className="object-cover w-8 h-8"
								/>
								<div className="text-start">
									<h3 className="font-bold text-[20px]">{skill}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
