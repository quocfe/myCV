type Props = {
	children: React.ReactNode;
};

const HSection: React.FC<Props> = ({ children }) => {
	return (
		<h3 className="mb-5 text-[#343a40] font-bold text-left text-4xl">
			{children}
		</h3>
	);
};

export default HSection;
