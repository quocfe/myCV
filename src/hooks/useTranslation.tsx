import { useTranslation as ut } from 'react-i18next';

function useTranslation() {
	const { t } = ut('projects');
	const responsibilities = t('powerkeentrend.responsibility.description', {
		returnObjects: true,
	}) as string[];
	const responsibilitiesDevbook = t('devbook.responsibility.description', {
		returnObjects: true,
	}) as string[];
	const responsibilitiesBookReview = t(
		'bookreviewwebsite.responsibility.description',
		{
			returnObjects: true,
		}
	) as string[];
	const responsibilitiesChatApp = t('chatapp.responsibility.description', {
		returnObjects: true,
	}) as string[];
	const responsibilitiesTodoApp = t('todoapp.responsibility.description', {
		returnObjects: true,
	}) as string[];
	return {
		responsibilities,
		responsibilitiesDevbook,
		responsibilitiesBookReview,
		responsibilitiesChatApp,
		responsibilitiesTodoApp,
	};
}

export default useTranslation;
