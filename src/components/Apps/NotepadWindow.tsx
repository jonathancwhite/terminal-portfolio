'use client';

import BaseWindow from '../BaseWindow';

interface NotepadWindowProps {
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	isFullscreen?: boolean;
}

const NotepadWindow = ({ onClose, onMinimize, onMaximize, isFullscreen }: NotepadWindowProps) => {
	const content = `Jonathan White
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
LinkedIn: https://linkedin.com/in/jonathancwhite
GitHub: https://github.com/jonathancwhite

Current Focus:
Building scalable web applications and leading development teams to deliver exceptional user experiences through modern technology stacks.`;

	return (
		<BaseWindow
			title='about.txt - Notepad'
			onClose={onClose}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			isFullscreen={isFullscreen}
			defaultPosition={{ x: 150, y: 100 }}
			defaultSize={{ width: 700, height: 500 }}
			className='bg-gray-100 text-black'>
			{/* Menu Bar */}
			<div className='bg-gray-100 border-b border-gray-300 flex text-xs text-gray-900'>
				<div className='font-semibold cursor-pointer hover:bg-gray-300 p-1.5'>File</div>
				<div className='font-semibold cursor-pointer hover:bg-gray-300 p-1.5'>Edit</div>
				<div className='font-semibold cursor-pointer hover:bg-gray-300 p-1.5'>View</div>
			</div>

			{/* Content Area */}
			<div className='flex-1 bg-white p-4 pb-8 overflow-auto h-full'>
				<textarea
					value={content}
					readOnly
					className='w-full h-full resize-none border-none outline-none font-mono text-sm leading-relaxed text-black bg-transparent'
					style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
				/>
			</div>
		</BaseWindow>
	);
};

export default NotepadWindow;
