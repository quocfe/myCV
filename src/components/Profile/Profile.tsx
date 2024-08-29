import cv from '../../assets/NguyenPhuQuoc.pdf';
function Profile() {
	return (
		<section id="profile" className="pt-8 mx-8 mb-24 lg:mx-32">
			<div className="mx-auto w-[275px] mb-4">
				<img
					src="https://res.cloudinary.com/dilajt5zl/image/upload/v1724900859/uploads/srguzidj9raxxmxk6kwe.jpg"
					className=" w-full h-[275px] object-cover rounded-full"
				/>
			</div>
			<div className="leading-normal text-center">
				<p className="text-[#555555] text-[18px] font-[500]">Hello, I'm</p>
				<h1 className="my-3 text-5xl font-bold">Nguyen Phu Quoc</h1>
				<p className="text-[#555555] text-[24px] font-semibold">
					Frontend Developer
				</p>
				<p className="text-[14px] my-2 text-justify">
					I am Nguyen Phu Quoc, with 2 years of experience working with the
					JavaScript language and 1 year with the ReactJS framework and 1 year
					with Node.js. In addition, I have knowledge of frameworks and
					libraries such as AngularJS, Tailwind CSS, and Bootstrap. I have an
					understanding of relational databases (MySQL) and NoSQL (MongoDB). My
					goal in the next 2 years, to become a junior front-end developer.
				</p>
			</div>
			<div className="flex items-center justify-center gap-4 mt-5">
				<a
					className="btn border-2 border-[#353535] py-3 px-6 rounded-full
				font-semibold transition-all duration-300 ease-in-out 
				hover:bg-[#353535] hover:text-white
				cursor-pointer
				"
					href={cv}
					download
				>
					Download CV
				</a>
				<button
					className="btn border-2 border-[#353535] bg-[#353535] py-3 px-6 rounded-full text-white
				font-semibold transition-all duration-300 ease-in-out 
				hover:bg-[#000]
				"
				>
					Contact Me
				</button>
			</div>
			<div className="flex items-center justify-center gap-4 mt-5">
				<a target="_blank" href="https://github.com/quocfe/">
					<img
						className="w-8 h-8 cursor-pointer"
						src="https://tangerine-hummingbird-1479b6.netlify.app/assets/linkedin.png"
						alt="linkedin"
					/>
				</a>
				<a target="_blank" href="https://github.com/quocfe/">
					<img
						className="w-8 h-8 cursor-pointer"
						src="https://tangerine-hummingbird-1479b6.netlify.app/assets/github.png"
						alt="github"
					/>
				</a>
			</div>
		</section>
	);
}

export default Profile;
