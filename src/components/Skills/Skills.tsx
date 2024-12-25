import HSection from '../HSection/HSection';
import HeaderProject from '../Project/components/HeaderProject';
import LanguagesAndTool from './components/LanguagesAndTool';
import WorkFlow from './components/WorkFlow';

function Skills() {
	return (
		<section id="skills" className="p-12 border-b">
			<HSection>Skills</HSection>
			<HeaderProject
				title="Programming Languages & Tools"
				className="mb-5"
				hover={false}
			/>
			<LanguagesAndTool />
			<HeaderProject title="Workflow" className="mb-5" hover={false} />
			<WorkFlow />
		</section>
	);
}

export default Skills;
