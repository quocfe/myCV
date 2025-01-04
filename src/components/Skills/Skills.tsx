import { useTranslation } from 'react-i18next';
import HSection from '../HSection/HSection';
import Languages from './components/Languages';
import Tools from './components/Tools';
import WorkFlow from './components/WorkFlow';

function Skills() {
	const { t } = useTranslation('skills');
	return (
		<section className="cv_section">
			<HSection>{t('skills.title')}</HSection>
			<Languages />
			<Tools />
			<WorkFlow />
		</section>
	);
}

export default Skills;
