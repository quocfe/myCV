type props = {
	title: string;
	positon?: string;
	time?: string;
	href?: string;
	sub?: boolean;
	className?: string | undefined;
	hover?: boolean;
};
function HeaderProject({
	title,
	positon,
	time,
	href,
	sub = false,
	hover = true,
	className,
}: props) {
	return (
		<div className={className}>
			<div className="flex-wrap lg:flex w-full">
				{hover ? (
					<div className="flex-1">
						<a
							target="_blank"
							href={href && href}
							className={`text-[#343a40] font-bold ${
								sub ? 'text-[16px] ' : 'text-3xl '
							} text-[#4db4af] cursor-pointer hover:text-hoverText hover:underline`}
						>
							{title}
						</a>
						<div className="text-[#41474d] font-normal text-xl">{positon}</div>
					</div>
				) : (
					<div className="flex-1">
						<a
							target="_blank"
							href={href && href}
							className={`text-[#343a40] font-bold ${
								sub ? 'text-[16px] ' : 'text-3xl '
							} text-[#4db4af] cursor-pointer`}
						>
							{title}
						</a>
						<div className="text-[#41474d] font-normal text-xl">{positon}</div>
					</div>
				)}

				<div className="">
					<p className="text-[#55bfba] text-sm font-semibold">{time}</p>
				</div>
			</div>
		</div>
	);
}

export default HeaderProject;
