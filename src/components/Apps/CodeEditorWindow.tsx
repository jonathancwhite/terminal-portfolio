'use client';

import BaseWindow from '../BaseWindow';
import { File, Folder } from 'lucide-react';

interface CodeEditorWindowProps {
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	isFullscreen?: boolean;
}

const CodeEditorWindow = ({
	onClose,
	onMinimize,
	onMaximize,
	isFullscreen,
}: CodeEditorWindowProps) => {
	const skillsData = {
		languages: {
			JavaScript: 'Expert',
			TypeScript: 'Expert',
			PHP: 'Advanced',
			Python: 'Intermediate',
			Go: 'Beginner',
		},
		frontend: {
			React: 'Expert',
			'Next.js': 'Expert',
			'Vue.js': 'Advanced',
			HTML5: 'Expert',
			CSS3: 'Expert',
			'Sass/SCSS': 'Advanced',
			'Tailwind CSS': 'Expert',
		},
		backend: {
			'Node.js': 'Expert',
			'Express.js': 'Advanced',
			GraphQL: 'Advanced',
			'REST APIs': 'Expert',
			Microservices: 'Advanced',
		},
		databases: {
			PostgreSQL: 'Advanced',
			MySQL: 'Advanced',
			MongoDB: 'Intermediate',
			Redis: 'Intermediate',
		},
		cloud: {
			AWS: 'Advanced',
			Vercel: 'Expert',
			Docker: 'Advanced',
			Kubernetes: 'Intermediate',
			'CI/CD': 'Advanced',
		},
		tools: {
			Git: 'Expert',
			Webpack: 'Advanced',
			Jest: 'Advanced',
			Cypress: 'Advanced',
			Figma: 'Intermediate',
		},
	};

	const jsonString = JSON.stringify(skillsData, null, 2);

	return (
		<BaseWindow
			title='My Skills'
			onClose={onClose}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			isFullscreen={isFullscreen}
			defaultPosition={{ x: 250, y: 100 }}
			defaultSize={{ width: 1000, height: 700 }}
			className='bg-gray-900 text-white'>
			<div className='flex h-full bg-gray-900'>
				{/* Sidebar */}
				<div className='w-64 bg-gray-800 border-r border-gray-700'>
					<div className='p-4 border-b border-gray-700'>
						<h3 className='text-white font-medium text-sm'>EXPLORER</h3>
					</div>
					<div className='p-2'>
						<div className='flex items-center gap-2 text-gray-300 text-sm py-1'>
							<span>&gt;</span>
							<Folder size={16} className='text-blue-400' />
							<span>portfolio</span>
						</div>
						<div className='pl-4'>
							<div className='flex items-center gap-2 text-gray-300 text-sm py-1'>
								<span>|</span>
								<File size={16} className='text-yellow-400' />
								<span className='text-white'>skills.json</span>
							</div>
						</div>
					</div>
				</div>

				{/* Main Editor */}
				<div className='flex-1 flex flex-col'>
					{/* Tab Bar */}
					<div className='bg-gray-800 border-b border-gray-700'>
						<div className='flex items-center gap-2'>
							<div className='px-4 py-1 text-white text-sm border-r border-gray-700 hover:bg-gray-600 cursor-pointer'>
								skills.json
							</div>
						</div>
					</div>

					{/* Editor Content */}
					<div className='flex-1 bg-gray-900 overflow-auto'>
						<div className='flex'>
							{/* Line Numbers */}
							<div className='bg-gray-800 text-gray-500 text-sm py-4 px-3 select-none'>
								{jsonString.split('\n').map((_, i) => (
									<div key={i} className='leading-6'>
										{i + 1}
									</div>
								))}
							</div>

							{/* Code Content */}
							<div className='flex-1 py-4 px-4'>
								<pre className='text-sm font-mono text-gray-300 leading-6'>
									<code className='json'>
										{jsonString.split('\n').map((line, i) => {
											// Simple syntax highlighting
											let highlightedLine = line;

											// Highlight keys
											highlightedLine = highlightedLine.replace(
												/"([^"]+)":/g,
												'<span class="text-blue-400">"$1":</span>',
											);

											// Highlight string values
											highlightedLine = highlightedLine.replace(
												/:\s*"([^"]+)"/g,
												': <span class="text-green-400">"$1"</span>',
											);

											// Highlight brackets and braces
											highlightedLine = highlightedLine.replace(
												/([{}[\],])/g,
												'<span class="text-yellow-400">$1</span>',
											);

											return (
												<div
													key={i}
													dangerouslySetInnerHTML={{
														__html: highlightedLine,
													}}
												/>
											);
										})}
									</code>
								</pre>
							</div>
						</div>
					</div>

					{/* Status Bar */}
					<div className='bg-blue-600 text-white px-4 py-1 text-xs flex justify-between'>
						<div className='flex gap-4'>
							<span>JSON</span>
							<span>UTF-8</span>
						</div>
						<div className='flex gap-2'>
							<span>Ln 1, Col 1</span>
							<span>Spaces: 2</span>
						</div>
					</div>
				</div>
			</div>
		</BaseWindow>
	);
};

export default CodeEditorWindow;
