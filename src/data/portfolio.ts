export interface Skill {
  name: string
  category: string
  icon?: string
}

export interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string[]
  technologies: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  tag?: string
}

export const skills: Skill[] = [
  // Languages and Frameworks
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'React Native', category: 'Frameworks' },
  { name: 'Terraform', category: 'DevOps' },
  { name: 'Redux', category: 'Frameworks' },
  { name: 'GraphQL', category: 'Frameworks' },
  { name: 'Java', category: 'Languages' },
  { name: 'Kotlin', category: 'Languages' },
  { name: 'Swift', category: 'Languages' },
  { name: 'Objective-C', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Golang', category: 'Languages' },
  { name: 'Electron', category: 'Frameworks' },
  
  // OS & Platforms
  { name: 'AWS', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  
  // DBMS
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'SQL Server', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'Sourcegraph', category: 'Tools' },
  { name: 'Sentry', category: 'Tools' },
  { name: 'Analytics', category: 'Tools' },

  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Github Actions', category: 'CI/CD' },
  { name: 'Gitlab CI/CD', category: 'CI/CD' },

  { name: 'Docker', category: 'DevOps' },
  { name: 'Webpack', category: 'Build Tools' },
  { name: 'Jira', category: 'Tools' },
]

export const experiences: ExperienceItem[] = [
  {
    company: 'AgileEngine',
    position: 'Senior Software Engineer',
    period: 'Mar 2022 - Present',
    description: [
      'Indeed - The famous job searching platform with a high scale project and a micro frontend and micro services architecture, working mostly focused on the web and developing solutions with high level of accessibility, user experience and providing maintenance across thousands of Java repos.',
      'Worked on accessibility feature implementation focused on screen readers, tab navigation, color contrast and other scenarios.',
      'Worked on maintaining the website section mostly focused on areas responsible for the employer platform.',
      'Implemented design improvements created by the design team and created visual A/B testings of new design and features implemented.',
      'Responsible for training and mentoring developers from the team.',
      'Part of the Java maintenance team, responsible for repository migration from Daemonizer to Spring Boot in a range of repos of more than 400 thousands of active microservices repos.',
      'Modern Campus - The Modern Campus engagement platform powers solutions for non-traditional student management, web content management, catalog and curriculum management, student engagement & development, conversational text messaging, career pathways, and campus maps & virtual tours.',
      'Implemented native modules from scratch to integrate with Bluetooth low-energy functionalities of the app.',
      'Created the whole atomic design of the components along with a storybook and jest unit test using typescript.',
      'Added SSO feature for authentication using the client\'s custom identity server.',
      'Implemented a native module that handles reading audio buffers from a headphone card reader for both platforms.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Java', 'React.js', 'React Native', 'GraphQL', 'Jest', 'Storybook', 'Node.js', 'Python', 'Jenkins', 'Sourcegraph', 'JUnit', 'Redux', 'Objective C', 'Azure', 'C#', '.NET'],
  },
  {
    company: 'Oowlish',
    position: 'Senior Full Stack Developer',
    period: 'Mar 2022 - Apr 2023',
    description: [
      'Petco.com - One of the biggest American pet e-commerce with more than thousands of active users over the USA. Working with a highly scaled website with deep tracking functionalities and high performance, making usage of cloud platforms such as AWS.',
      'Worked on developing new pages migrated from the old WCS structure.',
      'Worked on implementation of new search architecture using Constructor platform integrated with product database parameters.',
      'Worked on maintaining and refactoring code left from older developers of the project.',
      'Added usage of typescript and unit tests using jest to the whole project structure.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'ReactJS', 'Next.js', 'NodeJS', 'AWS', 'MongoDB'],
  },
  {
    company: 'Labsit',
    position: 'Senior Software Engineer',
    period: 'Mar 2021 - Mar 2022',
    description: [
      'Credz Super App - a banking mobile application, with features including ted, pix (Brazilian automated money transfer system), phone recharge, credit card management, social media recharge such as uber, spotify and others, biometric validation for security and many more. The app has more than 700.000 of active users and a good evaluation rate on store up to 4 stars.',
      'Developed and mentored a team of 5 developers.',
      'Worked on SDK\'s implementation for biometric validation and Adobe push notification.',
      'Brought typescript conversion and unitary testing to the project.',
      'Responsible for the monthly planning of the team tasks.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'React Native', 'Redux', 'Java', 'Objective C', 'Jest', 'Azure'],
  },
  {
    company: 'Raccoon Digital Marketing',
    position: 'Middle Frontend Developer',
    period: 'Oct 2020 - Mar 2021',
    description: [
      'Unavox - a social media application using both web and mobile applications, very similar to Reddit, where users could comment about trending daily topics.',
      'First contact with React Native and developing the mobile app from scratch.',
      'Worked building and integrating endpoints on the backend API.',
      'Created new features to the web application and brought it also to the mobile application.',
      'Built React Components Library for the company transition from PHP to React.',
      'Created Huawei Brazilian Blog with accessibility features and dark theme.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'React Native', 'ReactJS', 'Golang', 'Firebase', 'GraphQL', 'Next.js', 'Wordpress', 'Docussaurus'],
  },
  {
    company: 'Xmobots - Drones',
    position: 'Junior Frontend Developer',
    period: 'Feb 2020 - Oct 2020',
    description: [
      'Xplanner - planning flight software for the drones of the company, where the aircraft, type of mission and points to be reached could be selected depending on the kind of mission.',
      'Worked building and bringing geometries to the web application using ArcGis.',
      'Consulting tones of APIs for getting flight data about the surroundings of the place selected to the flight.',
      'Worked with integration of Java backend.',
      'The build of the application was made using Electron.',
      'XGBAS - web application for mapping big fields with precision, using the app as a PWA for planning and executing the mapping.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'Java', 'PostgreSQL', 'Electron', 'ArcGis'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Central Paulista University',
    degree: 'Electrical Engineer, Bachelor\'s Degree',
    period: '2018 - 2022',
  },
  {
    institution: 'Senai',
    degree: 'Mechatronics Technician, Technical Degree',
    period: '2016 - 2017',
  },
]

export const certifications: Certification[] = [
  { name: 'Full Stack Developer', issuer: 'Udemy' },
  { name: 'Golang - Building APIs from scratch', issuer: 'Udemy' },
  { name: 'React from basics to advanced', issuer: 'Udemy' },
  { name: 'Redux', issuer: 'Udemy' },
  { name: 'Next.js', issuer: 'Udemy' },
  { name: 'Amazon AWS Certification', issuer: 'AWS' },
]

export const projects: Project[] = [
  {
    name: 'Indeed - Job Search Platform',
    description: 'High-scale micro frontend and microservices architecture with focus on accessibility and user experience',
    technologies: ['React.js', 'TypeScript', 'Java', 'GraphQL', 'Jest'],
    highlights: [
      '400k+ active Java repos maintenance',
      'Accessibility features implementation',
      'A/B testing and design improvements',
    ],
  },
  {
    name: 'Credz Banking App',
    description: 'Banking mobile application with 700k+ active users featuring PIX, TED, and biometric validation',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Java', 'Objective-C'],
    highlights: [
      '700k+ active users',
      'Biometric validation SDK',
      'Team leadership and mentoring',
    ],
  },
  {
    name: 'Petco E-commerce',
    description: 'One of the biggest American pet e-commerce platforms with high performance and deep tracking',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'AWS', 'MongoDB'],
    highlights: [
      'High-scale website',
      'New search architecture',
      'Cloud platform integration',
    ],
  },
  {
    name: 'Modern Campus Platform',
    description: 'Student engagement platform with native modules for Bluetooth and audio card reader integration',
    technologies: ['React Native', 'TypeScript', 'Java', 'Objective-C', 'Azure'],
    highlights: [
      'Native module development',
      'Atomic design system',
      'SSO authentication',
    ],
  },
  {
    name: 'XPlanner - Flight Planning Software',
    description: 'Real-time streaming software for drone flights with ArcGIS integration and Electron desktop app for planning flight missions',
    technologies: ['React.js', 'TypeScript', 'Electron', 'ArcGis', 'Java', 'PostgreSQL'],
    highlights: [
      'ArcGIS integration for geometries',
      'Electron desktop application',
      'Flight data APIs integration',
      'Mission planning interface',
    ],
  },
  {
    name: 'XGBAS - Precision Field Mapping',
    description: 'Web application for mapping big fields with precision, using PWA for planning and executing mapping missions with base and hover equipment integration',
    technologies: ['React.js', 'TypeScript', 'Redux', 'Java', 'PostgreSQL', 'PWA'],
    highlights: [
      'PWA application',
      'Compass canvas with trigonometry',
      'Real-time position correction',
      'Base and hover equipment integration',
    ],
  },
  {
    name: 'Huawei Brazilian Blog',
    description: 'Content marketing website built to increase customer base in Brazil, generating content specifically for the Brazilian market with accessibility features',
    technologies: ['PHP', 'WordPress', 'MySQL', 'Sass', 'JavaScript'],
    highlights: [
      'Accessibility features implementation',
      'Dark theme support',
      'Brazilian market focused content',
      'Sass styling architecture',
    ],
    tag: 'Freelance',
  },
  {
    name: '99 Taxi Landing Pages',
    description: 'Landing pages and institutional websites for 99 Taxi, focusing on conversion optimization and modern design',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    highlights: [
      'Conversion optimization',
      'Responsive design',
      'Multiple landing pages',
      'Institutional websites',
    ],
    tag: 'Freelance',
  },
  {
    name: 'Repay Websites Modernization',
    description: 'Modernization of multiple Repay applications, rebuilding old systems to newer frameworks and improving user experience',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Next.js'],
    highlights: [
      'Legacy system modernization',
      'Framework migration',
      'Web solutions and platforms',
      'Improved user experience',
    ],
  },
  {
    name: 'Finscool - Financial Education App',
    description: 'Brazilian React Native application using gamification methods for financial education and learning',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Firebase'],
    highlights: [
      'Gamification methods',
      'Financial education focus',
      'Mobile application',
      'Brazilian market',
    ],
    tag: 'Freelance',
  },
  {
    name: 'Apprenda - Gamification Learning App',
    description: 'Brazilian React Native application using gamification methods for educational purposes and student engagement',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Firebase'],
    highlights: [
      'Gamification implementation',
      'Educational platform',
      'Student engagement',
      'Mobile application',
    ],
    tag: 'Freelance',
  },
  {
    name: 'Strada - AI Platform',
    description: 'AI-powered platform development for American company, focusing on modern web solutions and AI integration',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'AI/ML Integration'],
    highlights: [
      'AI platform development',
      'Modern web solutions',
      'American market',
      'Advanced integrations',
    ],
    tag: 'Freelance',
  },
  {
    name: 'Videogame.ai - AI Gaming Platform',
    description: 'AI-powered gaming platform for American company, integrating artificial intelligence with gaming experiences',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'AI/ML Integration'],
    highlights: [
      'AI gaming platform',
      'Gaming experience integration',
      'American market',
      'Advanced AI features',
    ],
    tag: 'Freelance',
  },
  {
    name: 'BTFL - AI Solutions',
    description: 'AI solutions development for American company, building modern web applications with AI capabilities',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'AI/ML Integration'],
    highlights: [
      'AI solutions development',
      'Modern web applications',
      'American market',
      'Cutting-edge technology',
    ],
    tag: 'Freelance',
  },
]

export const personalInfo = {
  name: 'Guilherme Gerazo Trombini',
  title: 'Senior Software Engineer',
  email: 'guilherme.trombini@outlook.com',
  phone: '+55 (14) 98154-2605',
  heroSummary: 'Full Stack Developer with 8+ years of experience building scalable web and mobile applications. Passionate about creating exceptional user experiences and delivering high-quality solutions.',
  summary: 'Full Stack Developer with 8+ years of experience in web development focused on React.js, React Native, Node.js, Next.js and Java. With vast professional experience, being involved in a variety of projects such as the Brazilian Huawei\'s blog, a video streaming platform for financial education, Credz banking mobile application with more than 700 thousands of active users, the American Petco ecommerce, real-time streaming software for drone flights at Xmobots the biggest Latin American drone company, mobile development of university app called Presence from Modern Campus, Indeed website focused on accessibility, user experience and maintainability of more than 400 thousands of active Java repos and Repay multiple applications working on web solutions and platforms rebuilding old systems to newer frameworks.',
}
