import HSection from '../HSection/HSection';

function Education() {
	return (
		<section id="education" className="p-12 border-b">
			<HSection>Education</HSection>
			<div className="flex-wrap lg:flex w-full items-center mb-4">
				<h3 className="font-bold text-3xl text-[#4db4af] flex-1">
					Website development | FPT Polytechnic college
				</h3>
				<div className="">
					<p className="text-[#55bfba] text-sm font-semibold">
						03/2022 - 09/2024
					</p>
				</div>
			</div>
			<div>
				<p className="indent-5 text-[#4db4af] font-semibold">GPA: 3.68</p>
			</div>
		</section>
	);
}

export default Education;
