'use client';

interface FileViewerProps {
	currentPath: string[];
	fileName: string;
	onBack: () => void;
}

const FileViewer = ({ currentPath, fileName, onBack }: FileViewerProps) => {
	const getFileContent = () => {
		switch (fileName) {
			case 'about.txt':
				return `Jonathan White
Senior Software Engineer

Bio:
Jonathan White is a senior software engineer and product architect specializing in full-stack development, data integration, and scalable web applications. He has led end-to-end development for platforms across e-commerce, logistics, and fintech, consistently delivering products that combine performance, reliability, and intuitive design.

His experience spans modern frameworks and technologies including React, Next.js, Vue.js, Redux, Node.js, Express, and CakePHP, with backend expertise in MySQL and PostgreSQL. Jonathan's work centers on building high-impact, maintainable systems, from architecting multi-tenant applications to creating reusable front-end frameworks and automation pipelines that drive efficiency and growth.

Interests:
- Software architecture
- UI/UX design
- Sports analytics
- Golf technology
- E-commerce systems
- Gaming
- Golf

Location: Auburn, AL
LinkedIn: https://linkedin.com/in/jonathanclwhite
GitHub: https://github.com/jonathancwhite`;

			case 'experience.txt':
				return `Work Experience

SalesWarp / CloudQix
Senior Software Engineer, Frontend Lead
January 2024 - Present
Bel-Air, MD (Remote)

As Senior Software Engineer and Frontend Lead at SalesWarp/CloudQix, Jonathan oversees the design and development of a financial management application used by investment analysts to manage opportunities, contacts, and workflows. Leading a team of five engineers within a twelve-person development group, he drives both the architectural direction and hands-on implementation of the platform.

Key Achievements:
• Led frontend architecture and design for a complex financial management system, building it from the ground up using React, TypeScript, Redux Toolkit, and shadcn UI while maintaining close alignment with backend API requirements.
• Mentored and managed a team of five engineers within a twelve-person development group, establishing code review processes, front-end standards, and a collaborative development workflow.
• Directed product and technical design decisions across multiple layers of the stack, from integrating real-time chat through a customized Tinode instance to building internal migration tools for legacy data imports.

Technologies: React, TypeScript, Redux Toolkit, shadcn/ui, TailwindCSS, Vite, CakePHP

---

DEVGRU, INC
Software Engineer, Head of Ecommerce Development
April 2023 - Present
Naples, FL (Remote)

Oversees all ecommerce design and development initiatives, building and maintaining custom BigCommerce and Shopify stores for clients across multiple industries. Leads theme creation, performance optimization, and CI/CD deployment processes to ensure high scalability and maintainability.

Key Achievements:
• Designed and developed multiple custom BigCommerce themes tailored to client-specific branding and workflows.
• Established streamlined development and deployment pipelines, improving turnaround and reliability for client projects.
• Drove measurable improvements in site performance and conversion rates through modern UX and optimization practices.

Technologies: BigCommerce, Shopify, React, Node.js, CI/CD, Performance Optimization

---

Auburn University
Software Engineer
July 2023 - Present
Auburn, AL (Remote)

Develops internal applications to support university operations with a focus on reliability, automation, and user experience. Designed and built a medical courier application for the university's veterinary hospital, enabling accurate tracking of sample deliveries throughout the care process.

Key Achievements:
• Designed and built a full-stack courier management system using React, Node.js, and MySQL.
• Automated scheduling and tracking workflows to reduce manual coordination errors.
• Supported system maintenance, feature expansion, and user feedback integrations post-deployment.

Technologies: React, Node.js, MySQL, Full-Stack Development, Automation

---

SalesWarp Commerce
Software Engineer, Fullstack
September 2022 - April 2023
Bel-Air, MD (Remote)

Contributed to core warehouse and order management systems, focusing on performance, maintainability, and scalability. Collaborated with a small, agile team to modernize legacy systems and introduce new modules using VueJS, PHP, and MySQL.

Key Achievements:
• Led the redesign of warehouse picking workflows, improving order-picking speed by 34%.
• Refactored backend architecture to a true MVC structure for better code consistency and future scalability.
• Built new modules for units and lots tracking, purchase order automation, and intelligent picking scheduling.

Technologies: Vue.js, PHP, MySQL, Warehouse Management, MVC Architecture

---

Ballistic Agency
Web Developer
March 2021 - September 2022
Opelika, AL

Developed and maintained high-performance ecommerce websites for clients in the sports and outdoor industries, focusing on scalability, user experience, and conversion optimization.

Key Achievements:
• Built over eight BigCommerce storefronts from scratch, supporting clients with revenues between $1M and $100M.
• Achieved a 10x increase in revenue for one client through platform migration and CRO improvements.
• Created reusable frontend components to streamline feature rollouts and ensure consistent design standards.

Technologies: BigCommerce, E-commerce, CRO, Frontend Development, Performance Optimization`;

			case 'skills.txt':
				return `Technical Skills

Programming Languages:
• JavaScript (Expert)
• TypeScript (Advanced)
• PHP (Advanced)
• HTML / CSS / SCSS (Expert)
• Java (Intermediate)
• Python (Intermediate)
• SQL (Advanced)

Frameworks & Libraries:
• React (Expert)
• Next.js (Advanced)
• Vue.js (Advanced)
• Redux Toolkit (Advanced)
• Node.js (Advanced)
• CakePHP (Advanced)
• Express.js (Advanced)
• Sequelize (Advanced)
• React Router (Advanced)
• Axios (Advanced)

Tools & Technologies:
• Vite (Expert)
• TailwindCSS (Advanced)
• shadcn/ui (Advanced)
• Docker (Advanced)
• Figma (Advanced)
• GitLab CI/CD (Advanced)
• pnpm/npm/yarn (Advanced)
• OwnCloud / WebDAV (Intermediate)
• ESLint (Advanced)
• Prettier (Advanced)
• Postman (Advanced)
• GitHub Actions (Advanced)

Databases:
• MySQL (Advanced)
• PostgreSQL (Advanced)
• MongoDB (Intermediate)

Cloud & DevOps:
• AWS (Intermediate)
• Azure DevOps (Intermediate)

Certifications:
• BigCommerce BigDev - April 2021 to Present

Languages:
• English (Fluent)

Interests:
• Software architecture
• UI/UX design
• Sports analytics
• Golf technology
• E-commerce systems
• Gaming
• Golf`;

			case 'contact.txt':
				return `Contact Information

Email: contact@jonathancwhite.com

LinkedIn: https://linkedin.com/in/jonathanclwhite

GitHub: https://github.com/jonathancwhite

Location: Auburn, AL

---

Get In Touch

I'm always interested in discussing new opportunities,
collaborative projects, or just chatting about technology
and software development.

Feel free to reach out via email or connect with me
on LinkedIn. I'm particularly interested in:

• Full-stack development opportunities
• Frontend architecture and team leadership roles
• E-commerce and fintech projects
• Open source contributions
• Technical consulting

Looking forward to hearing from you!`;

			default:
				return 'File not found.';
		}
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white font-mono'>
			{/* Header */}
			<div className='bg-gray-800 px-4 py-3 border-b border-gray-700'>
				<div className='flex items-center space-x-2'>
					<button onClick={onBack} className='text-blue-400 hover:text-blue-300 mr-2'>
						← Back
					</button>
					<span className='text-sm text-gray-300'>
						{currentPath.join('/')}/{fileName}
					</span>
				</div>
			</div>

			{/* File Content */}
			<div className='p-4'>
				<pre className='whitespace-pre-wrap text-sm leading-relaxed'>
					{getFileContent()}
				</pre>
			</div>
		</div>
	);
};

export default FileViewer;
