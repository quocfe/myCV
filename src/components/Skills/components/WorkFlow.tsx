import { CheckIcon } from '@heroicons/react/24/outline';

function WorkFlow() {
	return (
		<div className="">
			<h4 className="mb-5 text-[22px] font-bold">Workflow</h4>
			<div className="ml-4 flex gap-1 flex-col">
				<div className="flex items-end gap-2 font-semibold">
					<CheckIcon className="size-6 text-green-500 " />
					<p>Git, Github, Sourcetree for Teamwork</p>
				</div>
				<div>
					<div className="flex items-end gap-2 font-semibold">
						<CheckIcon className="size-6 text-green-500 " />
						<p>English for Work!</p>
					</div>
					<ul className="ml-10 list-disc mt-2">
						<li>
							For Reading: I can comfortably read and interpret documentation,
							project specifications, and work totally in English.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default WorkFlow;
