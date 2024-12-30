import HSection from '../HSection/HSection';

const Education = () => {
	return (
		<section className="cv_section">
			<HSection>Education</HSection>
			<div className="flex-wrap lg:flex w-full items-center mb-4">
				<h3 className="font-bold text-2xl text-[#4db4af] flex-1">
					Website development | FPT Polytechnic college
				</h3>
				<div className="">
					<p className="text-[#55bfba] text-sm font-semibold">
						03/2022 - 09/2024
					</p>
				</div>
			</div>
			<div className="bg-[#d1ecf1] text-[#0c5460] px-4 py-2 text-[18px] rounded-md border border-[#bee5eb]">
				<p>
					During my 2 years studying at FPT College, I achieved the title of top
					100 best students in each semester (fall 2022, spring 2023, fall 2023,
					spring 2024).
				</p>
				<p className="font-bold mt-4">GPA: 3.68/4</p>
			</div>
		</section>
	);
};

export default Education;
