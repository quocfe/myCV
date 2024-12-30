import HSection from '../HSection/HSection';
import LanguagesAndTool from './components/LanguagesAndTool';
import WorkFlow from './components/WorkFlow';

function Skills() {
	return (
		<section className="cv_section">
			<HSection>Skills</HSection>

			<LanguagesAndTool />
			<WorkFlow />
		</section>
	);
}

export default Skills;
