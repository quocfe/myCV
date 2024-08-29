import schoolImg from '../../assets/school-svgrepo-com.png';
import dateImg from '../../assets/date-2-svgrepo-com.png';

function About() {
	return (
		<section id="about" className="pt-8 mx-8 mb-24 lg:mx-32">
			<div className="leading-normal text-center">
				<h1 className="text-5xl font-bold ">About Me</h1>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-8 mt-6 mb-6">
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
			</div>
		</section>
	);
}

export default About;
