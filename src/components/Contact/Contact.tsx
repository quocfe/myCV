import phoneImg from '../../assets/phone-svgrepo-com.png';

function Contact() {
	return (
		<section id="contact" className="pt-8 mx-8 mb-24 lg:mx-32">
			<div className="leading-normal text-center">
				<h1 className="text-5xl font-bold ">Contact</h1>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-8 mt-6 mb-6">
				<div className=" flex items-start justify-center flex-col text-center gap-1 bg-white h-[160px] w-[280px] p-6 rounded-[32px] border border-[#a3a3a3] ">
					<p className="text-[#555555] text-[16px] font-normal">
						Phone: 0383995412
					</p>
					<p className="text-[#555555] text-[16px] font-normal">
						Mail: phuquocfe@gmail.com
					</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
