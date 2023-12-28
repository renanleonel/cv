import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
export const DATA = {
	name: 'Renan Leonel',
	initials: 'RL',
	location: 'Maringá, Brasil',
	locationLink: 'https://www.google.com/maps/place/Maring%C3%A1',
	about: 'Front-End Developer',
	summary:
		'Mid-level Front-End Developer with 2+ years of experience in building and maintaining responsive websites and web applications.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/62075475?v=4',
	personalWebsiteUrl: '',
	contact: {
		email: 'renanleonelpro@gmail.com',
		tel: '+5544988019054',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/renanleonel',
				icon: GitHubIcon,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/renanleonel/',
				icon: LinkedInIcon,
			},
		],
	},
	education: [
		{
			school: 'PUC Minas',
			degree: 'Specialization in Distributed Software Architecture',
			start: '2023',
			end: '2024',
		},
		{
			school: 'Universidade Estadual de Maringá',
			degree: "Bachelor's Degree in Computer Science",
			start: '2019',
			end: '2023',
		},
	],
	work: [
		{
			company: 'PLIN Energia',
			link: 'https://www.linkedin.com/company/plinenergia',
			badges: ['Hybrid'],
			title: 'Front-End Developer',
			start: '2023',
			end: 'atual',
			description:
				'Led the development of a PWA app for consumption control used by 1000 clients. Refactored the main website, achieving 250% performance gains and 30% SEO improvement. Managed front-end applications, assisted developers, implemented caching for API optimization, enhanced client-side app security, and created project documentation, design systems, and testing tools for easier maintenance.',
		},

		{
			company: 'Ohfy',
			link: 'https://www.linkedin.com/company/ohfy/',
			badges: ['On-site'],
			title: 'Full-Stack Developer',
			start: '2022',
			end: '2023',
			description:
				'Contributed to developing a mobile app using React, React Native, JavaScript, Tailwind CSS, and various animation libraries. Assisted in implementing a RESTful API with Node, Express, and MongoDB.',
		},
		{
			company: 'Cardano Warriors',
			link: 'https://www.linkedin.com/company/cardano-warriors',
			badges: ['Remote'],
			title: 'Internship',
			start: '2021',
			end: '2022',
			description:
				'Assisted in the creation and refactoring of the main website.',
		},
	],
	skills: [
		'Next.js',
		'React',
		'Typescript',
		'Javascript',
		'Tailwind CSS',
		'HTML',
		'CSS',
		'React Native',
		'Python',
		'Node',
		'Zod',
		'Next Auth',
		'Jest',
		'Cypress',
		'Storybook',
		'Zod',
		'Git',
		'Github',
	],
	projects: [
		{
			title: 'Support',
			techStack: ['Side Project', 'Next.js', 'TypeScript'],
			description:
				'SaaS to streamline the ticketing process for the engineering department',
			link: {
				label: '',
				href: 'https://github.com/renanleonel/support-platform',
			},
		},
	],
} as const;
