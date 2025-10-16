'use client';

import { useState, useEffect } from 'react';
import { User, Briefcase, Code, Mail, Home } from 'lucide-react';

interface TaskbarProps {
	currentPath: string;
	onSectionClick: (section: string) => void;
}

const Taskbar = ({ currentPath, onSectionClick }: TaskbarProps) => {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString('en-US', {
					hour12: false,
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				}),
			);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	const sections = [
		{ id: 'home', name: 'Home', icon: Home, command: 'cd ~' },
		{ id: 'about', name: 'About', icon: User, command: 'cd about' },
		{ id: 'experience', name: 'Experience', icon: Briefcase, command: 'cd experience' },
		{ id: 'skills', name: 'Skills', icon: Code, command: 'cd skills' },
		{ id: 'contact', name: 'Contact', icon: Mail, command: 'cd contact' },
	];

	const getActiveSection = () => {
		if (currentPath === '~') return 'home';
		return currentPath;
	};

	const activeSection = getActiveSection();

	return (
		<div className='bg-gray-900/80 backdrop-blur-md border-t border-gray-700 px-6 py-3'>
			<div className='flex items-center justify-between'>
				{/* Left side - Navigation Icons */}
				<div className='flex items-center space-x-4'>
					{sections.map((section) => {
						const IconComponent = section.icon;
						const isActive = activeSection === section.id;

						return (
							<button
								key={section.id}
								onClick={() => onSectionClick(section.id)}
								className={`group relative flex items-center justify-center p-3 rounded-lg transition-all duration-200 ${
									isActive
										? 'bg-cyan-500/20 text-cyan-400'
										: 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
								}`}
								title={section.name}>
								<IconComponent
									size={16}
									className={`transition-transform duration-200 ${
										isActive ? 'scale-100' : 'group-hover:scale-102'
									}`}
								/>
								{isActive && (
									<div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full'></div>
								)}

								{/* Tooltip */}
								<div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
									{section.name}
								</div>
							</button>
						);
					})}
				</div>

				{/* Right side - Clock */}
				<div className='text-gray-300 font-mono text-sm'>{currentTime}</div>
			</div>
		</div>
	);
};

export default Taskbar;
