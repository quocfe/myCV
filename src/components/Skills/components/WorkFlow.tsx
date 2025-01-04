import { CheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

function WorkFlow() {
	const { t } = useTranslation('skills');
	return (
		<div className="">
			<h4 className="mb-5 text-[22px] font-bold">
				{t('skills.workflow.title')}
			</h4>
			<div className="ml-4 flex gap-1 flex-col">
				<div className="flex items-end gap-2 font-semibold">
					<CheckIcon className="size-6 text-green-500 " />
					<p>{t('skills.workflow.git')}</p>
				</div>
				<div>
					<div className="flex items-end gap-2 font-semibold">
						<CheckIcon className="size-6 text-green-500 " />
						<p>{t('skills.workflow.english.title')}</p>
					</div>
					<ul className="ml-10 list-disc mt-2">
						<li>{t('skills.workflow.english.reading')}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default WorkFlow;
