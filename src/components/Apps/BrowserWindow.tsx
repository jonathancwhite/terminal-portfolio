'use client';

import BaseWindow from '../BaseWindow';
import { ArrowLeft, ArrowRight, RefreshCw, Home } from 'lucide-react';

interface BrowserWindowProps {
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	isFullscreen?: boolean;
}

const BrowserWindow = ({ onClose, onMinimize, onMaximize, isFullscreen }: BrowserWindowProps) => {
	const experiences = [
		{
			company: 'SalesWarp / CloudQix',
			position: 'Senior Software Engineer, Frontend Lead',
			duration: 'January 2024 - Present',
			location: 'Bel-Air, MD (Remote)',
			description:
				'As Senior Software Engineer and Frontend Lead at SalesWarp/CloudQix, Jonathan oversees the design and development of a financial management application used by investment analysts to manage opportunities, contacts, and workflows. Leading a team of five engineers within a twelve-person development group, he drives both the architectural direction and hands-on implementation of the platform.',
			achievements: [
				'Led frontend architecture and design for a complex financial management system, building it from the ground up using React, TypeScript, Redux Toolkit, and shadcn UI while maintaining close alignment with backend API requirements.',
				'Mentored and managed a team of five engineers within a twelve-person development group, establishing code review processes, front-end standards, and a collaborative development workflow.',
				'Directed product and technical design decisions across multiple layers of the stack, from integrating real-time chat through a customized Tinode instance to building internal migration tools for legacy data imports.',
			],
			technologies: [
				'React',
				'TypeScript',
				'Redux Toolkit',
				'shadcn/ui',
				'TailwindCSS',
				'Vite',
				'CakePHP',
			],
		},
		{
			company: 'DEVGRU, INC',
			position: 'Software Engineer, Head of Ecommerce Development',
			duration: 'April 2023 - Present',
			location: 'Naples, FL (Remote)',
			description:
				'Oversees all ecommerce design and development initiatives, building and maintaining custom BigCommerce and Shopify stores for clients across multiple industries. Leads theme creation, performance optimization, and CI/CD deployment processes to ensure high scalability and maintainability.',
			achievements: [
				'Designed and developed multiple custom BigCommerce themes tailored to client-specific branding and workflows.',
				'Established streamlined development and deployment pipelines, improving turnaround and reliability for client projects.',
				'Drove measurable improvements in site performance and conversion rates through modern UX and optimization practices.',
			],
			technologies: [
				'BigCommerce',
				'Shopify',
				'React',
				'Node.js',
				'CI/CD',
				'Performance Optimization',
			],
		},
		{
			company: 'Auburn University',
			position: 'Software Engineer',
			duration: 'July 2023 - Present',
			location: 'Auburn, AL (Remote)',
			description:
				"Develops internal applications to support university operations with a focus on reliability, automation, and user experience. Designed and built a medical courier application for the university's veterinary hospital, enabling accurate tracking of sample deliveries throughout the care process.",
			achievements: [
				'Designed and built a full-stack courier management system using React, Node.js, and MySQL.',
				'Automated scheduling and tracking workflows to reduce manual coordination errors.',
				'Supported system maintenance, feature expansion, and user feedback integrations post-deployment.',
			],
			technologies: ['React', 'Node.js', 'MySQL', 'Full-Stack Development', 'Automation'],
		},
		{
			company: 'SalesWarp Commerce',
			position: 'Software Engineer, Fullstack',
			duration: 'September 2022 - April 2023',
			location: 'Bel-Air, MD (Remote)',
			description:
				'Contributed to core warehouse and order management systems, focusing on performance, maintainability, and scalability. Collaborated with a small, agile team to modernize legacy systems and introduce new modules using VueJS, PHP, and MySQL.',
			achievements: [
				'Led the redesign of warehouse picking workflows, improving order-picking speed by 34%.',
				'Refactored backend architecture to a true MVC structure for better code consistency and future scalability.',
				'Built new modules for units and lots tracking, purchase order automation, and intelligent picking scheduling.',
			],
			technologies: ['Vue.js', 'PHP', 'MySQL', 'Warehouse Management', 'MVC Architecture'],
		},
		{
			company: 'Ballistic Agency',
			position: 'Web Developer',
			duration: 'March 2021 - September 2022',
			location: 'Opelika, AL',
			description:
				'Developed and maintained high-performance ecommerce websites for clients in the sports and outdoor industries, focusing on scalability, user experience, and conversion optimization.',
			achievements: [
				'Built over eight BigCommerce storefronts from scratch, supporting clients with revenues between $1M and $100M.',
				'Achieved a 10x increase in revenue for one client through platform migration and CRO improvements.',
				'Created reusable frontend components to streamline feature rollouts and ensure consistent design standards.',
			],
			technologies: [
				'BigCommerce',
				'E-commerce',
				'CRO',
				'Frontend Development',
				'Performance Optimization',
			],
		},
	];

	return (
		<BaseWindow
			title='Work Experience'
			onClose={onClose}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			isFullscreen={isFullscreen}
			defaultPosition={{ x: 200, y: 150 }}
			defaultSize={{ width: 900, height: 600 }}
			className='bg-gray-100 text-black'>
			{/* Browser Chrome */}
			<div className='bg-gray-100 border-b border-gray-300'>
				{/* Address Bar */}
				<div className='flex items-center px-4 py-2 gap-2'>
					<div className='flex items-center gap-2 flex-1'>
						<button className='p-1 hover:bg-gray-200 rounded'>
							<ArrowLeft size={16} />
						</button>
						<button className='p-1 hover:bg-gray-200 rounded'>
							<ArrowRight size={16} />
						</button>
						<button className='p-1 hover:bg-gray-200 rounded'>
							<RefreshCw size={16} />
						</button>
						<button className='p-1 hover:bg-gray-200 rounded'>
							<Home size={16} />
						</button>

						<div className='flex-1 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm'>
							https://portfolio.jonathancwhite.com/experience
						</div>
					</div>
				</div>
			</div>

			{/* Content Area */}
			<div className='flex-1 bg-white overflow-auto h-full'>
				<div className='max-w-4xl mx-auto p-8 pb-16 overflow-auto'>
					{/* Header */}
					<div className='text-center pb-12'>
						<h1 className='text-4xl font-bold text-gray-900 mb-4'>
							Professional Experience
						</h1>
						<p className='text-xl text-gray-600'>
							Building scalable web applications and leading development teams
						</p>
					</div>

					{/* Timeline */}
					<div className='flex flex-col gap-8'>
						{experiences.map((exp, index) => (
							<div key={index} className='relative'>
								{/* Content Card */}
								<div className='ml-16 bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow'>
									<div className='flex justify-between items-start mb-4'>
										<div>
											<h3 className='text-lg font-bold text-gray-900'>
												{exp.position}
											</h3>
											<p className='text-blue-600 font-semibold'>
												{exp.company}
											</p>
										</div>
										<div className='text-right text-gray-600'>
											<p className='font-sm'>{exp.duration}</p>
											<p className='text-xs'>{exp.location}</p>
										</div>
									</div>

									<p className='text-gray-700 py-2 leading-relaxed text-sm'>
										{exp.description}
									</p>

									{/* Achievements */}
									<div className='py-2'>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Key Achievements:
										</h4>
										<ul className='list-disc list-inside gap-1 text-gray-700 text-sm'>
											{exp.achievements.map((achievement, i) => (
												<li key={i}>{achievement}</li>
											))}
										</ul>
									</div>

									{/* Technologies */}
									<div className='flex flex-col gap-2'>
										<h4 className='font-semibold text-gray-900'>
											Technologies:
										</h4>
										<div className='flex flex-wrap gap-2'>
											{exp.technologies.map((tech, i) => (
												<span
													key={i}
													className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium'>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</BaseWindow>
	);
};

export default BrowserWindow;
