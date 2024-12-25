const IconArr = [
	'devicon-javascript-plain',
	'devicon-typescript-plain',
	'devicon-nodejs-plain-wordmark',
	'devicon-express-original-wordmark',
	'devicon-nestjs-original',
	'devicon-mongodb-plain',
	'devicon-mysql-plain-wordmark',
	'devicon-html5-plain',
	'devicon-css3-plain',
	'devicon-tailwindcss-original',
	'devicon-github-original ',
	'devicon-sourcetree-original-wordmark',
	'devicon-bootstrap-plain',
];

function LanguagesAndTool() {
	return (
		<div className="flex flex-wrap gap-6 mb-5">
			{IconArr.map((icon, index) => (
				<i key={index} className={`${icon} colored text-[50px]`}></i>
			))}
		</div>
	);
}

export default LanguagesAndTool;
