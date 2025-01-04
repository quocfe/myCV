import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SIDEBAR_EN from '../locales/en/sidebar.json';
import SIDEBAR_VI from '../locales/vi/sidebar.json';
import ABOUT_VI from '../locales/vi/about.json';
import ABOUT_EN from '../locales/en/about.json';
import PROJECTS_EN from '../locales/en/projects.json';
import PROJECTS_VI from '../locales/vi/projects.json';
import SKILLS_VI from '../locales/vi/skills.json';
import SKILLS_EN from '../locales/en/skills.json';
import EDUCATION_EN from '../locales/en/education.json';
import EDUCATION_VI from '../locales/vi/education.json';
import Interests_VI from '../locales/vi/Interests.json';
import Interests_EN from '../locales/en/Interests.json';
const resources = {
	en: {
		sidebar: SIDEBAR_EN,
		about: ABOUT_EN,
		projects: PROJECTS_EN,
		skills: SKILLS_EN,
		education: EDUCATION_EN,
		interests: Interests_EN,
	},
	vi: {
		sidebar: SIDEBAR_VI,
		about: ABOUT_VI,
		projects: PROJECTS_VI,
		skills: SKILLS_VI,
		education: EDUCATION_VI,
		interests: Interests_VI,
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'en',
		ns: ['sidebar', 'about', 'projects', 'skills', 'education', 'interests'],
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
