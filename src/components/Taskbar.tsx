'use client';

import { useState, useEffect } from 'react';
import { User, Briefcase, Code, Mail, LayoutGrid, Terminal } from 'lucide-react';
import { WindowState } from './WindowManager';

interface TaskbarProps {
	openWindows: WindowState[];
	activeWindowId: string | null;
	onSectionClick: (section: string) => void;
	onWindowClick: (windowId: string) => void;
}

const Taskbar = ({ openWindows, activeWindowId, onSectionClick, onWindowClick }: TaskbarProps) => {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString('en-US', {
					hour12: true,
					hour: '2-digit',
					minute: '2-digit',
				}),
			);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	// Available apps to launch
	const availableApps = [
		{ id: 'terminal', type: 'terminal', icon: Terminal, title: 'Terminal' },
		{ id: 'about', type: 'notepad', icon: User, title: 'About Me' },
		{ id: 'experience', type: 'browser', icon: Briefcase, title: 'Experience' },
		{ id: 'skills', type: 'editor', icon: Code, title: 'Skills' },
		{ id: 'contact', type: 'email', icon: Mail, title: 'Contact' },
	];

	return (
		<div className='fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-t border-gray-700 px-6 py-3 z-50'>
			<div className='flex items-center justify-between'>
				{/* Left side - Home button and App Launchers */}
				<div className='flex items-center gap-4'>
					{/* Home Button */}
					<button
						onClick={() => onSectionClick('home')}
						className='group relative flex items-center justify-center p-3 rounded-lg transition-all duration-200 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
						title='Start Menu'>
						<LayoutGrid
							size={16}
							className='transition-transform duration-200 group-hover:scale-105'
						/>

						{/* Tooltip */}
						<div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
							Start Menu
						</div>
					</button>

					{/* App Launcher Icons */}
					{availableApps.map((app) => {
						const IconComponent = app.icon;
						const isRunning = openWindows.some(
							(w) => w.type === app.type && !w.isMinimized,
						);
						const isActive = openWindows.some(
							(w) => w.type === app.type && w.id === activeWindowId,
						);

						return (
							<button
								key={app.id}
								onClick={() => onSectionClick(app.id)}
								className={`group relative flex items-center justify-center p-3 rounded-lg transition-all duration-200 ${
									isActive
										? 'bg-cyan-500/20 text-cyan-400'
										: isRunning
										? 'text-green-400 hover:text-cyan-400 hover:bg-gray-800/50'
										: 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
								}`}
								title={app.title}>
								<IconComponent
									size={16}
									className={`transition-transform duration-200 ${
										isActive ? 'scale-100' : 'group-hover:scale-105'
									}`}
								/>
								{isActive && (
									<div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full'></div>
								)}

								{/* Tooltip */}
								<div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap'>
									{app.title}
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
